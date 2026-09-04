import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const resources = await readFile(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const route = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");

test("PL601 authority article follows The Planet 60 identity and supports the Brampton local owner", () => {
  assert.match(resources, /path: "\/resources\/cannabis-dispensary-vs-weed-dispensary"/);
  assert.match(resources, /seoTitle: "Cannabis vs Weed Dispensary \| The Planet 60 Brampton"/);
  assert.match(resources, /title: "Cannabis Dispensary vs\. Weed Dispensary — What Are You Really Searching For\?"/);
  assert.match(resources, /href: "\/info\/dispensary-near-me-brampton"/);
  assert.match(route, /page\.seoTitle \?\? `\$\{page\.title\} \| The Planet 60`/);
  assert.match(route, /alternates: \{ canonical: `\$\{RESOURCE_SITE\}\$\{page\.path\}` \}/);
});
