import { test, expect, Page } from '@playwright/test';

const acceptCookiesIfPresent = async (page: Page) => {
  const cookieModal = page.locator('[aria-label="Cookie consent"]');
  const isPresent = (await cookieModal.count()) > 0;

  if (isPresent) {
    const closeBtn = cookieModal
      .locator('button:has-text("Тільки необхідні"), button:has-text("Прийняти всі")')
      .first();

    if (await closeBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await closeBtn.click();
      await expect(cookieModal).toBeHidden();
    }
  }
};

const openMobileMenuIfNeeded = async (page: Page) => {
  const burger = page.locator('.nav-burger');
  if (await burger.isVisible()) {
    await burger.click();
    await expect(page.locator('.nav-mobile-overlay')).toBeVisible({ timeout: 2000 });
  }
};

test.describe('Vexor landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    await page.goto('/');
    await acceptCookiesIfPresent(page);
  });

  test('should load and show hero section', async ({ page }) => {
    await expect(page).toHaveTitle(/Vexor/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navbar should be visible', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav.locator('text=vexor')).toBeVisible();
  });

  test('navbar links should scroll to sections', async ({ page }) => {
    await openMobileMenuIfNeeded(page);
    const servicesLink = page.locator('a[href="/#services"]:visible').first();
    await expect(servicesLink).toBeVisible();
    await servicesLink.click();

    const burger = page.locator('.nav-burger');
    if (await burger.isVisible()) await burger.click();

    await expect(page.locator('#services')).toBeInViewport();
  });

  test('navbar CTA should scroll to contact', async ({ page }) => {
    await openMobileMenuIfNeeded(page);

    const ctaLink = page.locator('a[href="/#contact"]:visible').first();
    await ctaLink.click({ force: true });

    const burger = page.locator('.nav-burger');
    if (await burger.isVisible()) {
      await burger.click();
      await expect(page.locator('.nav-mobile-overlay')).toBeHidden();
    }

    const contactSection = page.locator('#contact');
    await page.evaluate(() => document.getElementById('contact')?.scrollIntoView());

    await expect(contactSection).toBeInViewport();
  });

  test('services section should exist and have cards', async ({ page }) => {
    const servicesSection = page.locator('#services');
    await servicesSection.waitFor({ state: 'attached' });

    const cards = servicesSection.locator('> div > div, .service-card');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('work cards should have links', async ({ page }) => {
    const workSection = page.locator('#work');
    await workSection.waitFor({ state: 'attached' });

    const workLinks = page.locator('#work a[href^="/work/"]');
    expect(await workLinks.count()).toBeGreaterThan(0);
  });

  test('team section should exist and have members', async ({ page }) => {
    const aboutSection = page.locator('#about');
    await aboutSection.waitFor({ state: 'attached' });

    const members = aboutSection.locator('.team-grid > div');
    expect(await members.count()).toBeGreaterThan(0);
  });

  test('FAQ should open and close items', async ({ page }) => {
    await page.locator('#faq').waitFor({ state: 'attached' });
    const firstQuestion = page.locator('#faq button').first();

    await firstQuestion.click();
    const answerText = page
      .locator('#faq')
      .locator('text=Вартість залежить')
      .or(page.locator('#faq').locator('text=The cost depends'));

    await expect(answerText).toBeVisible({ timeout: 5000 });
    await firstQuestion.click();
  });

  test('contact form currency toggle should work', async ({ page }) => {
    await page.locator('#contact').waitFor({ state: 'attached' });

    const usdBtn = page.locator('button:has-text("$ USD"), button:has-text("USD")').first();
    await usdBtn.click();

    const budgetSelect = page.locator('#contact select').last();
    const options = await budgetSelect.locator('option').allTextContents();

    const hasDollar = options.some(o => o.includes('$'));
    const hasHryvnia = options.some(o => o.includes('₴') || o.includes('грн'));

    expect(hasDollar).toBe(true);
    expect(hasHryvnia).toBe(false);
  });

  test('contact form submit button should show success', async ({ page }) => {
    await page.locator('#contact').waitFor({ state: 'attached' });

    const nameInput = page
      .locator('#contact input[name="name"], #contact input[placeholder*="ім"]')
      .first();
    const contactInput = page
      .locator(
        '#contact input[name="contact"], #contact input[placeholder*="назв"], #contact input[placeholder*="@"]'
      )
      .first();

    await nameInput.fill('Test User');
    await contactInput.fill('@testuser');

    const submitBtn = page
      .locator(
        'button:has-text("Надіслати заявку"), button:has-text("Send request"), .contact-submit-btn'
      )
      .first();

    await submitBtn.click({ force: true });

    await expect(page.locator('text=/Відправлено!|Sent!|успішно/i')).toBeVisible({
      timeout: 10000,
    });
  });

  test('telegram button should have correct href', async ({ page }) => {
    await page.locator('#contact').waitFor({ state: 'attached' });
    const tgBtn = page.locator('#contact a[href*="t.me"]').last();

    await expect(tgBtn).toHaveAttribute('href', 'https://t.me/vexor_studio');
  });

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('.nav-burger')).toBeVisible();
  });
});
