import assert from "node:assert/strict";
import test from "node:test";
import { getSeoPageBySlug } from "../app/lib/seoPages.ts";

const expectedNames = [
  "Flavour Beast E-Liquid Salt",
  "Geek Promax 5% — 30K Puffs",
  "Geek Universe — 25K Puffs",
  "Level X Boost G2 Device Kit",
  "NEXA PIX — 30K Puffs — Many Flavors",
  "OVNS 10000 5% — 10K Puffs",
];

test("nicotine vape page uses the verified six-card set and nicotine category", () => {
  const page = getSeoPageBySlug("nicotine-vapes-brampton");
  assert.ok(page?.heroPreview);
  assert.equal(page.heroPreview.theme, "nicotine");
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.deepEqual(page.heroPreview.products.map((product) => product.name), expectedNames);
  assert.equal(page.heroPreview.products.length, 6);
  assert.ok(page.heroPreview.products.every((product) => product.image.startsWith("https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/")));
  assert.equal(page.heroPreview.warning, "Adults 19+. Nicotine is addictive.");
});

test("nicotine page excludes cannabis-vape products and unsupported availability copy", () => {
  const page = getSeoPageBySlug("nicotine-vapes-brampton");
  assert.ok(page);
  const copy = JSON.stringify(page);
  assert.match(copy, /\/items\/vape-disposables/);
  assert.match(copy, /excluded/i);
  assert.doesNotMatch(copy, /in stock|available now|is guaranteed/i);
});
