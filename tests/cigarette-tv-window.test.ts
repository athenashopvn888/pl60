import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CIG_WORDING_FALLBACK,
  cigarettePublicHeaders,
  decideCigaretteSurface,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveSurfaceFlag,
} from "../app/lib/cigDecision.ts";
import { SHOW_CIGARETTES, cigaretteEnvHardOff, filterCigaretteItems } from "../app/lib/siteConfig.ts";
import { tv2CardsForCigFlag } from "../app/lib/tvCigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const cigarillo = { category: "CIGARETTES", name: "SWISHER CIGARILLO", slug: "swisher-cigarillo" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const zyn = { category: "CONCENTRATES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const zpods = { category: "CIGARETTES", name: "ZPods / ZPODS – Mango Pineapple", slug: "zpods-mango" };

const cards = [
  { id: "VAPES" },
  { id: "CIGARETTES" },
  { id: "MAGIC" },
];

const schedule = { on: true, tvOn: true, webOn: false, master: true, wording: { tv2BoardTitle: "🚬 CIGARETTES" } };

test("TV follows tvOn and the website follows webOn", () => {
  const items = [carton, backwoods, pouch];
  const tv = decideCigaretteSurface({ cig: schedule, items, surface: "tv" });
  const web = decideCigaretteSurface({ cig: schedule, items, surface: "web" });
  assert.equal(tv.show, true);
  assert.equal(tv.reason, "on");
  assert.equal(web.show, false);
  assert.equal(web.reason, "off");
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag({ on: false, tvOn: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag({ on: true, webOn: false }, "web"), false);
});

test("env hard-off hides TV even when tvOn is true, and an empty env does not", () => {
  const items = [carton];
  assert.equal(cigaretteEnvHardOff(undefined), false);
  assert.equal(cigaretteEnvHardOff(""), false);
  assert.equal(decideCigaretteSurface({ cig: schedule, items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: schedule, items, surface: "web", envRaw: "off" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: schedule, items, surface: "tv", envRaw: "true" }).show, true);
});

test("TV flag true keeps cigarette items and false drops only real cigarettes", () => {
  const menu = [vape, carton, grabba, backwoods, cigarillo, paper, pouch, zyn, wrap, zpods];
  const hidden = reconcileSurfaceItems(menu, menu, false).map((item) => item.slug);
  assert.deepEqual(hidden, [vape.slug, backwoods.slug, cigarillo.slug, paper.slug, pouch.slug, zyn.slug, wrap.slug, zpods.slug]);
  const shown = reconcileSurfaceItems([vape, backwoods, pouch], [carton, grabba, backwoods], true).map((item) => item.slug);
  assert.deepEqual(shown, [vape.slug, backwoods.slug, pouch.slug, carton.slug, grabba.slug]);
});

test("TV2 card list includes CIGARETTES only while the feed TV flag is on", () => {
  assert.deepEqual(tv2CardsForCigFlag(cards, true).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  assert.deepEqual(tv2CardsForCigFlag(cards, false).map((card) => card.id), ["VAPES", "MAGIC"]);
});

test("web catalog stays on the static gate while TV is on", () => {
  assert.equal(SHOW_CIGARETTES, false);
  const webItems = filterCigaretteItems([vape, carton, backwoods, pouch]);
  assert.deepEqual(webItems.map((item) => item.slug), [vape.slug]);
  assert.equal(decideCigaretteSurface({ cig: schedule, items: [carton], surface: "tv" }).show, true);
});

test("tv-data header round-trips the TV flag without turning the web flag on", () => {
  const headers = cigarettePublicHeaders({
    web: false,
    tv: true,
    wording: { ...CIG_WORDING_FALLBACK, tv2BoardTitle: "🚬 CIGARETTES" },
  });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
  const read = readCigaretteTvHeader({
    get(name: string) {
      return headers[name] ?? null;
    },
  });
  assert.equal(read.show, true);
  assert.equal(read.wording.tv2BoardTitle, "🚬 CIGARETTES");
  assert.equal(read.wording.tickerLine1, CIG_WORDING_FALLBACK.tickerLine1);
});

test("TV pages read the live header and do not build the card list from SHOW_CIGARETTES", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /tv2CardsForCigFlag\(CARD_CONFIG, tvCig\.show\)/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
});
