import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function source(path: string) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

test("product metadata keeps the brand once and flower pages self-canonicalize", () => {
  const flower = source("app/flower/[slug]/page.tsx");
  const item = source("app/item/[slug]/page.tsx");

  assert.match(flower, /title:\s*{\s*absolute:/);
  assert.match(item, /title:\s*{\s*absolute:/);
  assert.match(flower, /canonical: `https:\/\/www\.theplanet60\.com\/flower\/\$\{slug\}`/);
  assert.match(item, /canonical: `https:\/\/www\.theplanet60\.com\/item\/\$\{slug\}`/);
});

test("tier and Brampton city URLs use self-referencing no-slash canonicals", () => {
  const tier = source("app/[tier]/page.tsx");
  const city = source("app/weed-dispensary-brampton/page.tsx");
  const sitemap = source("app/sitemap.ts");

  assert.match(tier, /canonical: `https:\/\/www\.theplanet60\.com\/\$\{tierSlug\}`/);
  assert.match(city, /canonical: `https:\/\/www\.theplanet60\.com\/\$\{gbpLocation\.slug\}`/);
  assert.match(sitemap, /`\$\{BASE\}\/weed-dispensary-brampton`/);
  assert.doesNotMatch(sitemap, /`\$\{BASE\}\/weed-dispensary-brampton\/`/);
});
