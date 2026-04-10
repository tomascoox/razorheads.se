import { test, expect } from '@playwright/test';

test('Kontrollera startsida', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Razorheads/);
  await expect(page.getByAltText('Razorheads logotyp - Skaparna av TIK POWER')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Kontakta oss', exact: true })).toBeVisible();
});
