const pw = require('playwright');

(async () => {
  const browser = await pw.webkit.launch(); // or 'chromium', 'firefox'
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://unmesh.me/');
  
  const title = await page.title();
  console.info(title);

  await page.screenshot({ path: 'home.png' });
  
  await browser.close();
})();