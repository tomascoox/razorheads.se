import { test, expect } from '@playwright/test';

test('Kontrollera startsida och grundläggande sektioner', async ({ page }) => {
  await page.goto('/');
  // 1. Kolla titeln
  await expect(page).toHaveTitle(/Razorheads - TIK POWER | Official Band Site/);

  // 2. Verifiera att kontaktsektionen är synlig
  await expect(page.getByRole('heading', { name: 'Kontakta oss', exact: true })).toBeVisible();
});
