import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

const desktopOrder = [
  'a.skip-link',
  'a.brand',
  '#main-nav a[href="#services-pricing"]',
  '#main-nav a[href="#how-it-works"]',
  '#main-nav a[href="#pickup-delivery"]',
  '#main-nav a:not(.nav-cta)[href="#hours-location"]',
  '#main-nav a.nav-cta[href="#hours-location"]',
  '.hero-actions a[href="#services-pricing"]',
  '.hero-actions a[href="#hours-location"]',
  '.walkin-card a[href="#hours-location"]',
  '.footer nav a[href="#services-pricing"]',
  '.footer nav a[href="#how-it-works"]',
  '.footer nav a[href="#pickup-delivery"]',
  '.footer nav a[href="#hours-location"]',
];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  const renderedLinks = await page.locator('a[href]:visible').evaluateAll((links) =>
    links.map((link) => ({
      href: link.getAttribute('href'),
      label: (link.getAttribute('aria-label') || link.innerText || '').replace(/\\s+/g, ' ').trim(),
    })),
  );
  const tabbableLinkCount = await page.locator('a[href]:visible').evaluateAll((links) =>
    links.filter((link) => link.tabIndex >= 0).length,
  );
  assert.equal(tabbableLinkCount, desktopOrder.length, 'Every tabbable desktop link is included in the reviewed keyboard sequence');
  for (const link of renderedLinks) {
    assert.ok(link.label, `Link has a discernible accessible name: ${link.href}`);
    assert.ok(link.href?.startsWith('#'), `Demo links stay within the local page: ${link.href}`);
    assert.ok(await page.locator(link.href).count(), `Every in-page link target exists: ${link.href}`);
  }

  for (let index = 0; index < desktopOrder.length; index += 1) {
    await page.keyboard.press('Tab');
    const selector = desktopOrder[index];
    assert.equal(
      await page.locator(selector).evaluate((element) => document.activeElement === element),
      true,
      `Tab stop ${index + 1} reaches ${selector}`,
    );
    const focusState = await page.locator(selector).evaluate((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        outlineWidth: Number.parseFloat(style.outlineWidth),
        outlineStyle: style.outlineStyle,
        visible: style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0,
      };
    });
    assert.equal(focusState.visible, true, `Tab stop is visibly rendered: ${selector}`);
    assert.ok(focusState.outlineWidth >= 2 && focusState.outlineStyle !== 'none', `Tab stop has a visible keyboard focus indicator: ${selector}`);
  }

  await page.keyboard.press('Shift+Tab');
  assert.equal(
    await page.locator(desktopOrder[desktopOrder.length - 2]).evaluate((element) => document.activeElement === element),
    true,
    'Shift+Tab reverses the sequence without skipping the prior link',
  );

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('a.skip-link').evaluate((el) => document.activeElement === el), true);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('a.brand').evaluate((el) => document.activeElement === el), true);
  await page.keyboard.press('Tab');
  const toggle = page.locator('button.menu-toggle');
  assert.equal(await toggle.evaluate((el) => document.activeElement === el), true);
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  await page.keyboard.press('Tab');
  assert.equal(
    await page.locator('.hero-actions a').first().evaluate((el) => document.activeElement === el),
    true,
    'Collapsed mobile navigation links are skipped; focus continues to the first Hero action',
  );

  console.log('A11Y-002 PASS: complete desktop link traversal, accessible names and in-page targets, visible focus on every link, reverse traversal, and collapsed mobile-nav tab order.');
} finally {
  await browser.close();
}
