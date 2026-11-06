import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { LIVE_RESIN_ARTICLE, LIVE_RESIN_MARKDOWN } from "../app/resources/liveResinArticle.ts";

const TITLE = "Live resin vs live rosin: two label words, two different processes";
const CANONICAL_PATH = "/resources/live-resin-vs-live-rosin";

function plain(value: string): string {
  return value
    .replace(/^#{1,4}\s+/gm, "")
    .replace(/^\|(?:\s*:?-+:?\s*\|)+\s*$/gm, "")
    .replace(/^\||\|$/gm, "")
    .replace(/\|/g, " ")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/^-\s+/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

test("live resin article keeps the supplied body, title, and dates", () => {
  const blocks = LIVE_RESIN_ARTICLE.blocks ?? [];
  const visible = [
    LIVE_RESIN_ARTICLE.title,
    `Last checked: ${LIVE_RESIN_ARTICLE.lastChecked}`,
    ...blocks.flatMap((block) => {
      if (block.type === "p" || block.type === "h2" || block.type === "h3") return [block.text];
      if (block.type === "list" || block.type === "ol") return block.items;
      return [...block.headers, ...block.rows.flat()];
    }),
  ].join("\n");

  assert.equal(LIVE_RESIN_ARTICLE.title, TITLE);
  assert.equal(LIVE_RESIN_ARTICLE.path, CANONICAL_PATH);
  assert.deepEqual(LIVE_RESIN_ARTICLE.slug, ["live-resin-vs-live-rosin"]);
  assert.equal(LIVE_RESIN_ARTICLE.lastChecked, "October 25, 2026");
  assert.equal(LIVE_RESIN_ARTICLE.datePublished, "2026-11-06");
  assert.equal(LIVE_RESIN_ARTICLE.dateModified, "2026-11-06");
  assert.ok(LIVE_RESIN_ARTICLE.metaDescription.length <= 155);
  assert.equal(plain(visible), plain(LIVE_RESIN_MARKDOWN));
  assert.equal(LIVE_RESIN_MARKDOWN.includes("3.5"), false);
  assert.deepEqual(
    [...LIVE_RESIN_MARKDOWN.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]),
    ["/visit", "/resources"],
  );
  assert.equal(blocks.some((block) => block.type === "table"), true);
  assert.equal(blocks.some((block) => block.type === "ol"), true);
  assert.equal(blocks.some((block) => block.type === "list"), true);
});

test("live resin page metadata stays on this article", async () => {
  const route = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
  const data = await readFile(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(data, /LIVE_RESIN_ARTICLE/);
  assert.match(sitemap, /RESOURCE_PATHS/);
  assert.match(route, /"@type": "Article"/);
  assert.match(route, /headline: page\.title/);
  assert.match(route, /datePublished: page\.datePublished/);
  assert.match(route, /name: "The Planet 60"/);
  assert.doesNotMatch(route, /BreadcrumbList|FAQPage|Review|AggregateRating|Product|Offer/);
  assert.match(route, /page\.seoTitle \?\? `\$\{page\.title\} \| The Planet 60`/);
  assert.match(route, /alternates: \{ canonical: `\$\{RESOURCE_SITE\}\$\{page\.path\}` \}/);
});
