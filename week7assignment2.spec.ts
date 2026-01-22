import { test, expect } from "@playwright/test";

test("Handle Confirm Alert and verify message", async ({ page }) => {

  // Load URL
  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

  // Handle alert using event listener
  page.on("dialog", async (dialog) => {
    console.log("Alert Message:", dialog.message());     // Get message
    console.log("Alert Type:", dialog.type());           // Get type (confirm)

    await dialog.accept(); // Accept the alert (OK)
  });

  // Click "Try it" button inside frame using frameLocator
  const frame = page.frameLocator("#iframeResult");
  await frame.locator("button:has-text('Try it')").click();

  // Verify text after accepting alert
  const resultText = await frame.locator("#demo").textContent();
  console.log("Result Text:", resultText);

  await expect(frame.locator("#demo")).toHaveText("You pressed OK!");
});
