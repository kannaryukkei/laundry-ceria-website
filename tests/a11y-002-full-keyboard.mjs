import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

const desktopOrder = [
  'a.skip-link',
  'a.wordmark',
  '#primary-nav a[href="#services-pricing"]',
  '#primary-nav a[href="#how-it-works"]',
  '#primary-nav a[href="#pickup-delivery"]',
  '#primary-nav a[href="#hours-location"]',
  '#primary-nav a.nav-cta',
  '.hero-actions a[href="#services-pricing"]',
  '.hero-actions a[href="#how-it-works"]',
  '#service-choice',
  '#laundry-weight',
  '#express-estimate',
  '#pickup-estimate',
  '.contact-option a[href="#hours-location"]',
  'a.footer-wordmark',
  'a.footer-top',
];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  const renderedLinks = await page.locator('a[href]:visible').evaluateAll((links) =>
    links.map((link) => ({
      href: link.getAttribute('href'),
      label: (link.getAttribute('aria-label') || link.innerText || '').replace(/\s+/g, ' ').trim(),
    })),
  );
  assert.equal(renderedLinks.length, 12, 'All visible desktop links are accounted for separately from form controls');
  for (const link of renderedLinks) {
    assert.ok(link.label, `Link has a discernible accessible name: ${link.href}`);
    assert.ok(link.href?.startsWith('#'), `Demo links stay within the local page: ${link.href}`);
    assert.ok(await page.locator(link.href).count(), `Every in-page link target exists: ${link.href}`);
  }

  // Walk the complete desktop tab sequence, including the four new estimator controls, checking focus visibility and
  // that no interactive link is skipped, duplicated, or unexpectedly hidden.
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
    assert.ok(
      focusState.outlineWidth >= 2 && focusState.outlineStyle !== 'none',
      `Tab stop has a visible keyboard focus indicator: ${selector}`,
    );
  }

  // Reverse traversal must return to the immediately previous link.
  await page.keyboard.press('Shift+Tab');
  assert.equal(
    await page.locator(desktopOrder[desktopOrder.length - 2]).evaluate((element) => document.activeElement === element),
    true,
    'Shift+Tab reverses the sequence without skipping the prior link',
  );

  // At mobile width, collapsed navigation must not interrupt the page tab path.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('a.skip-link').evaluate((el) => document.activeElement === el), true);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator('a.wordmark').evaluate((el) => document.activeElement === el), true);
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
