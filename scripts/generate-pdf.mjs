// Génère les PDF des CV dans ./pdf avec Chrome (ou Edge) en mode headless.
// Usage : node scripts/generate-pdf.mjs
// À relancer après chaque modification d'un CV.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "pdf");
const pages = ["cv-ats", "cv-classique", "cv-persona5", "cv-dev"];

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];
const chrome = candidates.find((path) => path && existsSync(path));

if (!chrome) {
  console.error("Chrome ou Edge introuvable. Définissez CHROME_PATH.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

for (const page of pages) {
  const output = join(outDir, `${page}.pdf`);
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${output}`,
    pathToFileURL(join(root, `${page}.html`)).href,
  ], { stdio: "ignore" });
  console.log(`✓ pdf/${page}.pdf`);
}
