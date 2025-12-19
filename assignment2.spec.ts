import { test, expect } from '@playwright/test';

test('Find and Edit Lead in Leaftaps Application', async ({ page }) => {

  // 1. Navigate to the URL
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // 2. Enter the username
  await page.fill('#username', 'Demosalesmanager');

  // 3. Enter the password
  await page.fill('#password', 'crmsfa');

  // 4. Click the Login button
  await page.click('.decorativeSubmit');

  // 5. Click CRM/SFA
  await page.click('text=CRM/SFA');

  // 6. Click Leads
await page.click('text=Leads');

// wait for Find Leads link to appear
await page.waitForSelector('a:has-text("Find Leads")');

// 7. Click Find Leads
await page.click('//a[text()="Find Leads"]');

// Wait until Find Leads page loads
await page.waitForSelector('input[name="firstName"]:visible');

// 8. Enter the first name (ONLY visible input)
await page.locator('input[name="firstName"]:visible').fill('Anusha');

// 9. Click Find Leads button (visible one)
await page.locator('button:has-text("Find Leads"):visible').click();


  // Wait for results
  await page.waitForSelector('.x-grid3-row-table');

  // 10. Click the first resulting Lead ID
  const firstLead = page.locator('.x-grid3-row-table a').first();
  await firstLead.click();

  // 11. Click Edit
  await page.click('text=Edit');

  // 12. Edit Company name
  await page.fill('#updateLeadForm_companyName', 'TestLeaf Updated');

  // 13. Edit Annual Revenue
  await page.fill('#updateLeadForm_annualRevenue', '2000000');

  // 14. Edit Department
  await page.fill('#updateLeadForm_departmentName', 'Automation QA');

  // 15. Enter Description
  await page.fill('#updateLeadForm_description', 'Lead updated using Playwright automation');

  // 16. Click Update
  await page.click('.smallSubmit');

  // 17. Verify edited fields
  await expect(page.locator('#viewLead_companyName_sp'))
    .toContainText('TestLeaf Updated');

  await expect(page.locator('#viewLead_departmentName_sp'))
    .toHaveText('Automation QA');

  // 18. Print page title
  const title = await page.title();
  console.log('Page Title:', title);

});


