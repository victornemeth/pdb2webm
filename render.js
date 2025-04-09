const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const pdbFile = process.argv[2];
const outFile = pdbFile.replace(/\.pdb$/, ".png");

(async () => {
  const pdbData = fs.readFileSync(`/data/pdbs/${pdbFile}`, "utf-8");
  const encoded = encodeURIComponent(pdbData);
  const url = `file:///app/viewer.html?pdb=${encoded}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 500, height: 500 });

  await page.goto(url);
  await page.waitForTimeout(2000); // wait for render

  await page.screenshot({ path: `/data/output/${outFile}` });
  await browser.close();
})();
