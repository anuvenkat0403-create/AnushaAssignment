import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
test('File Upload without clicking upload button', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  // Absolute path of the file
  const filePath = path.resolve(__dirname, '../test-data/sample.txt');

  // Upload file directly
  await page.setInputFiles('#file-upload', filePath);

  // Click submit (allowed, only upload button interaction is restricted)
  await page.click('#file-submit');

  // Assertion
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});






test('File Download and verification', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

const fileLink = page.locator('a', { hasText: 'testUpload.json' });

  await expect(fileLink).toBeVisible();

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    fileLink.click()
  ]);

  const filePath = path.join(__dirname, '../downloads/file.json');

  await download.saveAs(filePath);

  expect(fs.existsSync(filePath)).toBeTruthy();
});
