import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

const WORDS_TO_TRANSLATE = [
  'Word',
  '#$%&should fail ',
];

test.describe('test', () => {
  test('should succeed at translating word to binary', async ({ page }) => {
    await expect(page.getByPlaceholder('Enter something to translate')).toBeVisible();
    await page.getByPlaceholder('Enter something to translate').fill(WORDS_TO_TRANSLATE[0]);
    await page.getByRole('button', { name: 'Translate to binary!' }).click();
    await page.getByText('01010111011011110111001001100100').click();
  });
});

// Should write test for fail when implemented