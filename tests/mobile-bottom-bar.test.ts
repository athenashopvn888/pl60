import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { CODED_NAP } from "../app/lib/fleet/config.ts";
import { FULL_NAME_NAP } from "../app/lib/fullNameNap.ts";
import { gbpLocation } from "../app/lib/gbp-location.ts";
import { HOME_DELIVERY_HREF, HOME_MENU_HREF } from "../app/lib/homeDelivery.ts";
import { hidesMobileActionBar } from "../app/lib/mobileActionBar.ts";
import { STORE, storeDirectionsUrl } from "../app/lib/store.ts";
import { storeHoursStatus, type OpeningHoursSpec } from "../app/lib/storeHoursStatus.ts";

const layout = fs.readFileSync("app/layout.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");
const bar = fs.readFileSync("app/components/MobileBottomBar.tsx", "utf8");
const css = fs.readFileSync("app/components/MobileBottomBar.module.css", "utf8");
const products = fs.readFileSync("app/lib/products.ts", "utf8");
const tvStore = fs.readFileSync("app/lib/tvStore.ts", "utf8");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")) as { dependencies: { next: string } };

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

function daily(opens: string, closes: string, days: readonly string[] = WEEK): OpeningHoursSpec[] {
  return [{ dayOfWeek: days, opens, closes }];
}

test("this store's hours read as open 24 hours in Toronto", () => {
  assert.equal(STORE.opens, "00:00");
  assert.equal(STORE.closes, "23:59");
  assert.match(layout, /opens:\s*"00:00"/);
  assert.match(layout, /closes:\s*"23:59"/);
  assert.match(tvStore, /opens:\s*"00:00"/);
  assert.match(tvStore, /closes:\s*"23:59"/);
  assert.deepEqual(gbpLocation.hours, ["Open 24 Hours"]);
  for (const iso of ["2026-01-15T15:00:00.000Z", "2026-07-15T04:30:00.000Z", "2026-10-26T03:59:00.000Z"]) {
    const status = storeHoursStatus(new Date(iso));
    assert.equal(status.kind, "always");
    assert.equal(status.label, "Open 24 hours");
  }
});

test("limited hours say open until the close, or the next open, in Toronto", () => {
  const hours = daily("09:00", "21:00");
  const sundayEvening = storeHoursStatus(new Date("2026-10-25T22:00:00.000Z"), hours);
  assert.deepEqual(sundayEvening, { kind: "open", label: "Open now · until 9 p.m." });

  const beforeOpen = storeHoursStatus(new Date("2026-10-26T12:00:00.000Z"), hours);
  assert.deepEqual(beforeOpen, { kind: "closed", label: "Closed · opens 9 a.m." });

  const afterClose = storeHoursStatus(new Date("2026-10-26T02:30:00.000Z"), hours);
  assert.equal(afterClose.kind, "closed");
  assert.equal(afterClose.label, "Closed · opens Mon 9 a.m.");

  const winterAfternoon = storeHoursStatus(new Date("2026-01-15T20:00:00.000Z"), hours);
  assert.deepEqual(winterAfternoon, { kind: "open", label: "Open now · until 9 p.m." });
});

test("overnight windows stay open past midnight and name the next open day", () => {
  const hours = daily("10:00", "02:00", ["Friday"]);
  const fridayNight = storeHoursStatus(new Date("2026-10-24T03:00:00.000Z"), hours);
  assert.deepEqual(fridayNight, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayEarly = storeHoursStatus(new Date("2026-10-24T05:00:00.000Z"), hours);
  assert.deepEqual(saturdayEarly, { kind: "open", label: "Open now · until 2 a.m." });

  const saturdayLater = storeHoursStatus(new Date("2026-10-24T07:00:00.000Z"), hours);
  assert.deepEqual(saturdayLater, { kind: "closed", label: "Closed · opens Fri 10 a.m." });
});

test("a split day uses the window that is actually open", () => {
  const hours: OpeningHoursSpec[] = [
    { dayOfWeek: ["Monday"], opens: "09:00", closes: "12:00" },
    { dayOfWeek: ["Monday"], opens: "14:00", closes: "18:00" },
  ];
  assert.equal(storeHoursStatus(new Date("2026-10-26T15:00:00.000Z"), hours).label, "Open now · until 12 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T17:00:00.000Z"), hours).label, "Closed · opens 2 p.m.");
  assert.equal(storeHoursStatus(new Date("2026-10-26T19:30:00.000Z"), hours).label, "Open now · until 6 p.m.");
});

test("directions prefer a short maps link, then the GBP pin, then an address directions URL", () => {
  assert.equal(
    storeDirectionsUrl(
      ["https://maps.app.goo.gl/example", "https://www.google.com/maps/place/?q=place_id:abc"],
      STORE.address,
    ),
    "https://maps.app.goo.gl/example",
  );
  assert.equal(STORE.directionsUrl, FULL_NAME_NAP.mapsUrl);
  assert.equal(STORE.directionsUrl, CODED_NAP.mapsSearchUrl);
  assert.match(STORE.directionsUrl, /place_id:ChIJF1t-nAstK4gRTGPK1xrokgQ/);
  assert.equal(gbpLocation.directionsUrl, "");
  assert.equal(
    storeDirectionsUrl(["", ""], "1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6"),
    "https://www.google.com/maps/dir/?api=1&destination=1098%20Peter%20Robertson%20Blvd%20%2310%2C%20Brampton%2C%20ON%20L6R%201G6",
  );
});

test("the bar is mounted on every page, pads the body only when present, and stays off tv routes", () => {
  assert.match(layout, /import MobileBottomBar from "\.\/components\/MobileBottomBar"/);
  assert.match(layout, /<MobileBottomBar \/>/);
  assert.match(globals, /--mobile-action-bar-height:\s*0px/);
  assert.match(
    globals,
    /@media \(max-width:\s*768px\)\s*\{[\s\S]*--mobile-action-bar-height:\s*calc\(68px \+ env\(safe-area-inset-bottom, 0px\)\)[\s\S]*body:has\(\[data-mobile-bottom-bar\]\)\s*\{[\s\S]*padding-bottom:\s*var\(--mobile-action-bar-height\)/,
  );
  assert.equal(hidesMobileActionBar("/tv"), true);
  assert.equal(hidesMobileActionBar("/tv/"), true);
  assert.equal(hidesMobileActionBar("/tv2"), true);
  assert.equal(hidesMobileActionBar("/tv2/"), true);
  assert.equal(hidesMobileActionBar("/"), false);
  assert.equal(hidesMobileActionBar("/hours"), false);
  assert.match(bar, /hidesMobileActionBar\(pathname\)/);
  assert.match(bar, /if \(hidden\) return null/);
  assert.equal(pkg.dependencies.next, "16.2.6");
});

test("directions, hours, menu, and delivery fit the bar and call is absent", () => {
  assert.equal(HOME_MENU_HREF, "/exotic");
  assert.equal(HOME_DELIVERY_HREF, "/delivery");
  assert.match(products, /slug:\s*"exotic"/);
  assert.equal(fs.existsSync("app/[tier]/page.tsx"), true);
  assert.equal(fs.existsSync("app/delivery/page.tsx"), true);
  assert.equal(fs.existsSync("app/hours/page.tsx"), true);
  assert.equal(fs.existsSync("app/tv/page.tsx"), true);
  assert.equal(fs.existsSync("app/tv2/page.tsx"), true);
  assert.equal(fs.existsSync("app/exotic-weed/page.tsx"), false);
  assert.equal(fs.existsSync("app/menu/page.tsx"), false);
  assert.doesNotMatch(products, /slug:\s*"exotic-weed"/);

  assert.match(bar, /href=\{STORE\.directionsUrl\}/);
  assert.equal(STORE.directionsUrl.includes("google.com/maps"), true);
  assert.match(bar, /href="\/hours"/);
  assert.match(bar, /href=\{HOME_MENU_HREF\}/);
  assert.match(bar, />\s*Menu\s*</);
  assert.match(bar, /href=\{HOME_DELIVERY_HREF\}/);
  assert.match(bar, />\s*Delivery\s*</);
  assert.match(bar, />\s*Directions\s*</);
  assert.doesNotMatch(bar, /exotic-weed/);
  assert.doesNotMatch(bar, /Call|tel:/);
  assert.match(css, /\.bar\s*\{[^}]*display:\s*none/s);
  assert.match(css, /@media \(max-width:\s*768px\)\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /bottom:\s*0/);
  assert.match(css, /minmax\(0,\s*1\.25fr\)\s+minmax\(0,\s*1\.5fr\)\s+minmax\(44px,\s*0\.72fr\)\s+minmax\(44px,\s*0\.9fr\)/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /min-width:\s*44px/);
  assert.match(css, /max-width:\s*100%/);
  assert.match(css, /var\(--green-dark/);
  assert.doesNotMatch(css, /#0369a1|#38bdf8/);
});
