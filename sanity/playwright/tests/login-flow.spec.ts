import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test('login using email and password', async ({ page }) => {
  await page.goto('https://dashboard.trustmi.dev/login');

  await page.locator('input[type="email"]').fill('armis@trustmi.ai')
  await page.getByRole('button').click()

  await expect(page).toHaveURL('https://dashboard.trustmi.dev/login/basic?email=armis%40trustmi.ai')

  await page.locator('input[type="password"]').fill('ywFpFTZ@vZ6LFQh.')
  await page.getByRole('button').click()

  
  await expect(page).toHaveURL('https://dashboard.trustmi.dev/overview/transactions')
});

test('login using okta', async ({ page }) => {
  await page.goto('https://dashboard.trustmi.dev/login');

  await page.locator('input[type="email"]').fill('yanivg@trustmi.ai')
  await page.getByRole('button').click()

  await page.getByRole('button').click()

  await page.locator('input[type="password"]').fill('PU9nm^SXHRGWq!5Ke!^X')


  await page.getByRole('button').click()


  await expect(page).toHaveURL('https://dashboard.trustmi.dev/overview/transactions')
});
