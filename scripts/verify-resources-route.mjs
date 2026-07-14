import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const fail = (message) => {
  console.error(`[verify-resources] ${message}`);
  process.exit(1);
};

const read = (relativePath) => {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) fail(`Missing required file: ${relativePath}`);
  return fs.readFileSync(fullPath, "utf8");
};

const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css"]);
const mojibakePatterns = [
  new RegExp("\\u00e2", "u"),
  new RegExp("\\u00c2", "u"),
  new RegExp("\\u00f0\\u0178", "u"),
  new RegExp("\\u00ef\\u00b8", "u"),
  new RegExp("\\ufffd", "u"),
];

function collectSourceFiles(dir) {
  const fullDir = path.join(root, dir);
  if (!fs.existsSync(fullDir)) return [];

  return fs.readdirSync(fullDir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(fullDir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) return [];
      return collectSourceFiles(path.relative(root, fullPath));
    }
    return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

if (!exists("app/resources/[...slug]/page.tsx")) {
  fail("Resources must use the catch-all app/resources/[...slug]/page.tsx route.");
}

if (exists("app/resources/[slug]/page.tsx")) {
  fail("Old one-level app/resources/[slug]/page.tsx route still exists.");
}

const resourceData = read("app/resources/resourceData.ts");
const resourceView = read("app/resources/ResourceView.tsx");
const sitemap = read("app/sitemap.ts");
const navbar = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const seoPages = read("app/lib/seoPages.ts");
const deliveryPage = read("app/delivery/page.tsx");
const deliveryContent = read("app/delivery/DeliveryContent.tsx");

const routeMatches = [...resourceData.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);
const uniqueRoutes = new Set(routeMatches);

if (!uniqueRoutes.has("/resources")) {
  fail("RESOURCE_PATHS must include the /resources hub route.");
}

if (routeMatches.length !== uniqueRoutes.size) {
  fail("Duplicate Resource path found in resourceData.ts.");
}

if (routeMatches.length < 8) {
  fail(`Expected at least 8 Resource routes including the hub; found ${routeMatches.length}.`);
}

for (const resourcePath of uniqueRoutes) {
  if (!resourcePath.startsWith("/resources")) {
    fail(`Resource path does not start with /resources: ${resourcePath}`);
  }
}

if (!resourceData.includes("RESOURCE_PATHS")) {
  fail("resourceData.ts must export RESOURCE_PATHS.");
}

if (!sitemap.includes("RESOURCE_PATHS")) {
  fail("sitemap.ts must import and use RESOURCE_PATHS.");
}

if (sitemap.includes("RESOURCE_PAGES")) {
  fail("sitemap.ts should use RESOURCE_PATHS, not RESOURCE_PAGES.");
}

if (sitemap.includes("`${BASE}/resources`")) {
  fail("sitemap.ts hard-codes /resources; this can duplicate the Resource hub.");
}

if (!navbar.includes('href: "/resources"') || !footer.includes('href="/resources"')) {
  fail("Navbar and footer must both link to /resources.");
}

if (!resourceView.includes("RESOURCE_PAGES.map")) {
  fail("ResourceView must render the Resource guide cards from RESOURCE_PAGES.");
}

const publicCopy = [resourceData, footer, seoPages].join("\n").toLowerCase();
const bannedPhrases = [
  "keyword coverage",
  "search coverage",
  "without changing urls",
  "without changing the existing urls",
  "site strategy",
  "resource hub should",
  "verified",
  "repository",
  "source material",
];
const bannedDeliveryPhrases = [
  "same-day",
  "order before 6 pm",
  "national capital region",
  "gatineau",
  "all in-store promotions apply",
  "exclusive launch-day deal",
];

for (const phrase of bannedPhrases) {
  if (publicCopy.includes(phrase)) {
    fail(`Public copy still contains banned phrase: ${phrase}`);
  }
}

const deliveryCopy = [deliveryPage, deliveryContent].join("\n").toLowerCase();
for (const phrase of bannedDeliveryPhrases) {
  if (deliveryCopy.includes(phrase)) {
    fail(`Delivery copy contains unapproved launch claim: ${phrase}`);
  }
}

for (const file of [...collectSourceFiles("app"), ...collectSourceFiles("scripts")]) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).replaceAll("\\", "/");
  for (const pattern of mojibakePatterns) {
    if (pattern.test(text)) {
      fail(`Source contains mojibake (${pattern}) in ${rel}`);
    }
  }
}

console.log(`[verify-resources] OK: ${routeMatches.length} Planet 60 Resource routes checked.`);
