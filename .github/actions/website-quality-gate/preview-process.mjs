import { spawn } from 'node:child_process';
import process from 'node:process';

function childHasExited(child) {
  return child.exitCode !== null || child.signalCode !== null;
}

function waitForChildExit(child, timeoutMs) {
  if (childHasExited(child)) return Promise.resolve(true);
  return new Promise((resolve) => {
    const timer = setTimeout(() => finish(false), timeoutMs);
    const finish = (exited) => {
      clearTimeout(timer);
      child.removeListener('exit', onExit);
      child.removeListener('error', onError);
      resolve(exited);
    };
    const onExit = () => finish(true);
    const onError = () => finish(childHasExited(child));
    child.once('exit', onExit);
    child.once('error', onError);
    if (childHasExited(child)) finish(true);
  });
}

function processGroupExists(pid, signalProcess) {
  try {
    signalProcess(-pid, 0);
    return true;
  } catch (error) {
    return error.code !== 'ESRCH';
  }
}

async function waitForProcessGroupExit(pid, timeoutMs, signalProcess) {
  const deadline = Date.now() + timeoutMs;
  while (processGroupExists(pid, signalProcess) && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
  return !processGroupExists(pid, signalProcess);
}

export async function stopPreview(child, { platform = process.platform, spawnProcess = spawn, signalProcess = process.kill } = {}) {
  if (!child || child.pid == null) return;
  if (platform === 'win32') {
    const taskkillExitCode = await new Promise((resolve) => {
      const killer = spawnProcess(process.env.ComSpec || 'cmd.exe', ['/d', '/c', 'taskkill', '/pid', String(child.pid), '/t', '/f'], { windowsHide: true, stdio: 'ignore' });
      killer.once('close', (code) => resolve(code));
      killer.once('error', () => resolve(null));
    });
    if (taskkillExitCode !== 0 && !childHasExited(child)) child.kill('SIGTERM');
    if (!await waitForChildExit(child, 1_000) && !childHasExited(child)) child.kill('SIGKILL');
    return;
  }

  try { signalProcess(-child.pid, 'SIGTERM'); } catch { child.kill('SIGTERM'); }
  const groupExited = await waitForProcessGroupExit(child.pid, 3_000, signalProcess);
  if (!groupExited) {
    try { signalProcess(-child.pid, 'SIGKILL'); } catch { child.kill('SIGKILL'); }
    await waitForChildExit(child, 1_000);
    await waitForProcessGroupExit(child.pid, 1_000, signalProcess);
  }
}
