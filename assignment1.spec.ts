import { test, expect } from '@playwright/test';

test('Create Lead in Leaftaps Application', async ({ page }) => {

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

  // 7. Click Create Lead
  await page.click('text=Create Lead');

  // 8. Fill Company Name
  await page.fill('#createLeadForm_companyName', 'TestLeaf');

  // 9. Fill First Name
  await page.fill('#createLeadForm_firstName', 'Anusha');

  // 10. Fill Last Name
  await page.fill('#createLeadForm_lastName', 'venkatachalam');

  // 11. Fill Salutation
  await page.fill('#createLeadForm_personalTitle', 'Ms');

  // 12. Fill Title
  await page.fill('#createLeadForm_generalProfTitle', 'Automation Tester');

  // 13. Fill Annual Revenue
  await page.fill('#createLeadForm_annualRevenue', '1000000');

  // 14. Fill Department
  await page.fill('#createLeadForm_departmentName', 'QA');

  // 15. Fill Phone number
  await page.fill('#createLeadForm_primaryPhoneNumber', '1234567890');

  // 16. Click Create Lead button
  await page.click('.smallSubmit');

  // 17. Verify Company Name, First Name, Last Name and Status
  await expect(page.locator('#viewLead_companyName_sp')).toContainText('TestLeaf');
  await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Anusha');
  await expect(page.locator('#viewLead_lastName_sp')).toHaveText('venkatachalam');
  await expect(page.locator('#viewLead_statusId_sp')).toHaveText('Assigned');

  // 18. Get the page title
  const title = await page.title();
  console.log('Page Title:', title);

});
