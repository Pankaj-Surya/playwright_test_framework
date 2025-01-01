// @ts-check
const { test, expect } = require('@playwright/test');
const AllureUtils = require('../../utils/AllureUtils');

test('has title', async ({ page }) => {
  AllureUtils.addLabel('feature', 'Card ');
  AllureUtils.addLabel('suite', 'Card Suite')
  AllureUtils.addLabel('module', 'Card Module');
  AllureUtils.addEnvironmentDetails({
 Environment: process.env.ENV || 'staging',
  });
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  AllureUtils.addLabel('feature', 'Card ');
  AllureUtils.addLabel('suite', 'Card Suite')
  AllureUtils.addLabel('module', 'Card Module');
  AllureUtils.addEnvironmentDetails({
 Environment: process.env.ENV || 'staging',
  });

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
