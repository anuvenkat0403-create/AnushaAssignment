import { test, expect, chromium } from "@playwright/test";

test("LeafGround Frame Handling", async () => {

  // ✅ Launch Chromium in non-headless mode
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // ✅ Navigate to LeafGround Frame page
  await page.goto("https://leafground.com/frame.xhtml");

  // ✅ 1) Click Me inside first frame and verify text changed
  const frame1 = page.frameLocator("iframe").first();
  const btn1 = frame1.locator("button#Click");

  await btn1.click();
  await expect(btn1).toHaveText("Hurray! You Clicked Me.");

  // ✅ 2) Get total count of frames in page
  const totalFrames = page.frames().length;
  console.log("Total Frames count:", totalFrames);

  // ✅ 3) Click Me inside nested frames and verify text changed
  const nestedFrameButton = page
    .frameLocator("iframe")       // outer iframe
    .nth(2)                       // nested frame section iframe
    .frameLocator("iframe")       // inner iframe
    .locator("button#Click");

  await nestedFrameButton.click();
  await expect(nestedFrameButton).toHaveText("Hurray! You Clicked Me.");

  // Close browser
  await browser.close();
});
