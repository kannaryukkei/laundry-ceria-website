import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

const activeClass = (page) => page.evaluate(() => {
  const el = document.activeElement;
  if (!(el instanceof HTMLElement)) return '';
  return [el.tagName.toLowerCase(), el.id ? `#${el.id}` : '', [...el.classList].map(name => `.${name}`).join('')].join('');
});

const durationMs = (value) => {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) return Infinity;
  return value.endsWith('ms') ? parsed : parsed * 1000;
};

try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  // Skip link must be the first keyboard stop and become visibly perceivable.
  const skip = page.locator('a.skip-link');
  assert.equal(await skip.getAttribute('href'), '#main-content');
  assert.equal(await page.locator('#main-content').getAttribute('tabindex'), '-1');
  await page.keyboard.press('Tab');
  assert.match(await activeClass(page), /\.skip-link$/);
  await page.waitForFunction(() => {
    const el = document.querySelector('a.skip-link');
    if (!el) return false;
    const transform = new DOMMatrixReadOnly(getComputedStyle(el).transform);
    return Math.abs(transform.m42) < 1;
  }, { timeout: 1500 });
  const skipStyle = await skip.evaluate(el => {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return {
      top: rect.top,
      bottom: rect.bottom,
      outlineWidth: Number.parseFloat(style.outlineWidth),
      outlineStyle: style.outlineStyle,
    };
  });
  assert.ok(skipStyle.top >= 0 && skipStyle.bottom > 0, 'Skip link is visible when focused');
  assert.ok(skipStyle.outlineWidth >= 2 && skipStyle.outlineStyle !== 'none', 'Skip link has a visible focus indicator');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.activeElement?.id === 'main-content');
  assert.equal(await activeClass(page), 'main#main-content', 'Skip link moves keyboard focus to main content');

  // Mobile navigation: collapsed links are not tab stops; Escape restores focus.
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab'); // skip link
  await page.keyboard.press('Tab'); // wordmark
  await page.keyboard.press('Tab'); // mobile toggle
  const toggle = page.locator('button.menu-toggle');
  assert.equal(await page.evaluate(() => document.activeElement === document.querySelector('button.menu-toggle')), true);
  assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  const toggleFocus = await toggle.evaluate(el => {
    const style = getComputedStyle(el);
    return { width: Number.parseFloat(style.outlineWidth), style: style.outlineStyle };
  });
  assert.ok(toggleFocus.width >= 2 && toggleFocus.style !== 'none', 'Menu toggle shows a keyboard focus indicator');

  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.querySelector('#primary-nav')?.classList.contains('is-open'));
  assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
  const navLinks = page.locator('#primary-nav a');
  const count = await navLinks.count();
  assert.equal(count, 5, 'All primary navigation destinations are present');
  await page.keyboard.press('Tab');
  for (let index = 0; index < count; index += 1) {
    assert.equal(
      await navLinks.nth(index).evaluate(el => document.activeElement === el),
      true,
      `Mobile keyboard order reaches visible navigation link ${index + 1}`,
    );
    if (index < count - 1) await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.querySelector('button.menu-toggle')?.getAttribute('aria-expanded') === 'false');
  assert.equal(await page.evaluate(() => document.activeElement === document.querySelector('button.menu-toggle')), true, 'Escape restores focus to the menu toggle');
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement?.closest('#primary-nav') === null),
    true,
    'Collapsed navigation links are removed from the keyboard tab order',
  );

  // Desktop navigation remains reachable in a logical DOM order.
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  assert.match(await activeClass(page), /\.skip-link$/);
  await page.keyboard.press('Tab');
  assert.match(await activeClass(page), /\.wordmark$/);
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement?.closest('#primary-nav') !== null), true, 'Desktop navigation links are in the primary nav');
  assert.equal(await page.locator('button.menu-toggle').isVisible(), false, 'Mobile toggle is hidden at desktop width');
  assert.equal(await page.locator('#primary-nav a:visible').count(), 5, 'All desktop navigation links are visible');

  // Reduced-motion preference disables smooth scrolling and meaningful transitions.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const reducedMotion = await page.evaluate(() => ({
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    buttonTransition: getComputedStyle(document.querySelector('.button-primary')).transitionDuration,
    menuTransition: getComputedStyle(document.querySelector('.primary-nav a')).transitionDuration,
  }));
  assert.equal(reducedMotion.scrollBehavior, 'auto');
  assert.ok(durationMs(reducedMotion.buttonTransition.split(',')[0].trim()) <= 0.02, 'Button transitions are effectively disabled');
  assert.ok(durationMs(reducedMotion.menuTransition.split(',')[0].trim()) <= 0.02, 'Navigation transitions are effectively disabled');

  // 640 CSS px is the reflow width equivalent of a 1280px viewport at 200% zoom.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 640, height: 900 });
  await page.waitForTimeout(100);
  const zoomProxy = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    mainVisible: Boolean(document.querySelector('#main-content')?.getBoundingClientRect().height),
  }));
  assert.equal(zoomProxy.viewportWidth, 640);
  assert.equal(zoomProxy.documentWidth, 640, 'No page-level horizontal overflow at the 200% zoom-equivalent width');
  assert.ok(zoomProxy.bodyWidth <= 640, 'Body reflows within the zoom-equivalent width');
  assert.equal(zoomProxy.mainVisible, true);

  console.log('A11Y-001 PASS: skip link, keyboard order, focus visibility, mobile Escape/focus return, reduced motion, and 200% zoom-equivalent reflow.');
} finally {
  await browser.close();
}
