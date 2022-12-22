import { test, expect } from '@playwright/test';

test('should add items to cart', async ({ page }) => {
  await page.goto('https://demo.vercel.store/');
  await page.getByRole('link', { name: 'Special Edition T-Shirt' }).first().click();
  await page.getByRole('option', { name: 'size l' }).click();
  await page.getByRole('option', { name: 'size l' }).press('Tab');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.locator('header').getByRole('button', { name: 'Cart items: 1' }).click();
 
  await expect(page.getByRole('listitem').filter({ hasText: 'Special Edition T-Shirt' })).toBeVisible();
});

test('search', async ({ page }) => {
  await page.goto('https://demo.vercel.store/');
  await page.locator('#search').click();
  await page.locator('#search').fill('shirt');
  await page.locator('#search').press('Enter');
  const searchResults = await page.getByRole('link', { name: 'shirt' }).count();
  await expect(searchResults).toBeGreaterThanOrEqual(1);
});