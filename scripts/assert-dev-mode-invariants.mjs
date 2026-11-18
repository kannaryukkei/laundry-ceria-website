import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import process from 'node:process';
import assert from 'node:assert/strict';

const execFileAsync = promisify(execFile);
const reportPath = 'artifacts/browser-qa/workflow-mode-invariant.json';
const failures = [];

async function main() {
  const { stdout } = await execFileAsync(process.execPath, [
    'scripts/workflow-enforcement.mjs', 'status', '--root', process.cwd()
  ], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  const evaluation = JSON.parse(stdout);
  const state = JSON.parse(await readFile('.studio/project-state.json', 'utf8'));

  const expectedDecisions = {
    G4: 'PREVIEW_ACCEPTED',
    G5: 'PRODUCTION_READY',
    G6: 'RELEASE_AUTHORIZED'
  };
  const actual = new Map((state.approvals ?? []).map((approval) => [approval.gate_id, approval]));
  for (const [gate, decision] of Object.entries(expectedDecisions)) {
    const approval = actual.get(gate);
    assert.ok(approval, gate + ' approval must be recorded');
    assert.equal(approval.decision, decision, gate + ' decision must match its canonical value');
  }

  const stage8 = evaluation.stages?.find((stage) => stage.stage_id === 'stage-08');
  const stage9 = evaluation.stages?.find((stage) => stage.stage_id === 'stage-09');
  const g7 = actual.get('G7');
  if (g7) {
    assert.equal(g7.decision, 'HANDED_OVER');
    assert.equal(stage8?.status, 'PASSED', 'Stage 8 must be completed after G7 handover');
    assert.equal(stage9?.status, 'PASSED', 'Stage 9 must be completed after calibration artifacts are recorded');
    assert.equal(evaluation.current_stage, null, 'No current stage may remain after Stage 0-9 completion');
    assert.ok(evaluation.stages.every((stage) => ['PASSED', 'NOT_APPLICABLE'].includes(stage.status)), 'Every canonical stage must be terminal');
  } else {
    assert.ok(stage8?.can_start, 'Stage 8 must be startable after simulated G4-G6');
  }
  assert.equal(evaluation.ok, true, 'Workflow evaluation must be valid');
  assert.equal(evaluation.operating_mode, 'studio_development');
  assert.equal(evaluation.delivery_mode, 'production');
  assert.equal(evaluation.execution_class, 'SIMULATION_ONLY');
  assert.equal(evaluation.external_release_allowed, false);

  const report = {
    result: 'PASS',
    tested_commit: process.env.GITHUB_SHA ?? 'UNPINNED',
    project_id: state.project_id,
    operating_mode: evaluation.operating_mode,
    delivery_mode: evaluation.delivery_mode,
    execution_class: evaluation.execution_class,
    external_release_allowed: evaluation.external_release_allowed,
    current_stage: evaluation.current_stage,
    stage_08_status: stage8?.status ?? 'UNKNOWN',
    stage_08_can_start: Boolean(stage8?.can_start),
    stage_09_status: stage9?.status ?? 'UNKNOWN',
    stage_09_can_start: Boolean(stage9?.can_start),
    all_stages_terminal: evaluation.stages.every((stage) => ['PASSED', 'NOT_APPLICABLE'].includes(stage.status)),
    stage_statuses: evaluation.stages.map((stage) => ({ stage_id: stage.stage_id, status: stage.status })),
    g7_recorded: Boolean(g7),
    simulated_gate_decisions: expectedDecisions,
    note: 'This proves repository workflow isolation in studio_development. It does not authorize any external deployment, public release, DNS change or client communication.'
  };
  await mkdir('artifacts/browser-qa', { recursive: true });
  await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
}

main().catch(async (error) => {
  const report = {
    result: 'FAIL',
    tested_commit: process.env.GITHUB_SHA ?? 'UNPINNED',
    error: error instanceof Error ? error.stack : String(error)
  };
  try {
    await mkdir('artifacts/browser-qa', { recursive: true });
    await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');
  } catch {}
  process.stderr.write(JSON.stringify(report, null, 2) + '\n');
  process.exitCode = 1;
});
