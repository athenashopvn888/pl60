import { CODED_NAP } from "./fleet/config.ts";
import { FULL_NAME_NAP } from "./fullNameNap.ts";
import { gbpLocation } from "./gbp-location.ts";

const SHORT_MAPS = /maps\.app\.goo\.gl|(?:^|\/\/)goo\.gl\/maps/i;
const GBP_PIN = /place_id=|google\.com\/maps\/place|maps\.app\.goo\.gl/i;

/**
 * Prefer a maps.app.goo.gl short link, then an existing GBP pin.
 * Otherwise build a Google Maps directions URL to the store address.
 */
export function storeDirectionsUrl(
  candidates: readonly string[] = [
    FULL_NAME_NAP.mapsUrl,
    CODED_NAP.mapsSearchUrl,
    gbpLocation.directionsUrl,
  ],
  address: string = gbpLocation.address,
): string {
  const urls = candidates.map((value) => value.trim()).filter(Boolean);
  const short = urls.find((url) => SHORT_MAPS.test(url));
  if (short) return short;
  const pin = urls.find((url) => GBP_PIN.test(url));
  if (pin) return pin;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

/**
 * Structured hours copied from the Store JSON-LD `openingHoursSpecification`
 * in app/layout.tsx and `OPENING_HOURS` in app/lib/tvStore.ts.
 * Display copy on the site is `gbpLocation.hours` ("Open 24 Hours").
 */
export const STORE = {
  opens: "00:00",
  closes: "23:59",
  address: gbpLocation.address,
  directionsUrl: storeDirectionsUrl(),
} as const;
