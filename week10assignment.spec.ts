import { test } from '@playwright/test';
import leadData from '../../test-data/leadData.json'; // ✅ JSON only
import path from 'path';
import fs from 'fs';
import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();

// CSV reader
const csvPath = path.resolve(__dirname, '../../test-data/leadData.csv');
const states = fs.readFileSync(csvPath, 'utf-8')

  .split('\n')
  .slice(1)
  .map(s => s.trim())
  .filter(Boolean);

test('Create Lead using data parameterization', async ({ page }) => {

  // 1. Navigate
  await page.goto(process.env.BASE_URL!);

  
    // 2. Login
  await page.locator('#username').clear();
  await page.fill('#username', 'Demosalesmanager');
  await page.fill('#password', process.env.PASSWORD!);
  await page.click('.decorativeSubmit');
await page.waitForLoadState('domcontentloaded');

  // 3. CRM/SFA
  await page.click('text=CRM/SFA');

  // 4. Leads → Create Lead
  await page.click('text=Leads');
  await page.click('text=Create Lead');

  // 5. Mandatory fields (JSON data)
  await page.fill('#createLeadForm_companyName', leadData.companyName);
  await page.fill('#createLeadForm_firstName', leadData.firstName);
  await page.fill('#createLeadForm_lastName', leadData.lastName);

  // 6. Source dropdown – by label
  await page.selectOption('#createLeadForm_dataSourceId', {
    label: 'Direct Mail'
  });

  // 7. Marketing Campaign – by value
  await page.selectOption('#createLeadForm_marketingCampaignId', {
    value: 'DEMO_MKTG_CAMP'
  });

  // 8. Print Marketing Campaign options
  const marketingOptions = await page.locator(
    '#createLeadForm_marketingCampaignId option'
  ).allTextContents();

  console.log('Marketing Campaign Count:', marketingOptions.length);
  console.log(marketingOptions);

  // 9. Industry – by index
  await page.selectOption('#createLeadForm_industryEnumId', { index: 3 });

  // 10. Preferred Currency
 // 10. Preferred Currency
await page.locator('#createLeadForm_currencyUomId').waitFor();

await page.selectOption('#createLeadForm_currencyUomId', {
  value: leadData.currency // e.g. "INR"
});


  // 11. Country
  await page.selectOption('#createLeadForm_generalCountryGeoId', {
    label: leadData.country
  });

  // 12. State (from CSV)
  await page.selectOption('#createLeadForm_generalStateProvinceGeoId', {
    label: states[0]
  });

  // 13. Print all states
  const stateOptions = await page.locator(
    '#createLeadForm_generalStateProvinceGeoId option'
  ).allTextContents();

  console.log('State Count:', stateOptions.length);
  console.log(stateOptions);

  // 14. Create Lead
  await page.click('.smallSubmit');
});
