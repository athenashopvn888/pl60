import { cigaretteSafeContent, SHOW_CIGARETTES } from "./lib/siteConfig";
import CigaretteStateProvider, { CIG_WORDING_FALLBACK } from "./components/CigaretteStateProvider";
import { FleetSheetBannerProvider } from "./components/FleetAnnouncementBanner";
import FleetContentProvider from "./components/fleet/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const revalidate = 60;

const ROOT_METADATA: Metadata = cigaretteSafeContent({
  metadataBase: new URL("https://www.theplanet60.com"),
  title: {
    default: HOME_DOC_TITLE,
    template: "%s | The Planet 60",
  },
  description:
    "Planet 60 Cannabis is a Brampton cannabis dispensary on Peter Robertson Blvd with menu categories, local store details, and adult 19+ shopping info. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "exotic flower Brampton",
    "premium cannabis",
    "The Planet 60",
    "cheap weed Brampton",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Brampton",
    "vapes",
    "pre-rolls",
    "native cigarettes Brampton",
    "weed store near Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.theplanet60.com",
    siteName: "The Planet 60",
    title: HOME_DOC_TITLE,
    description:
      "Flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff at 1098 Peter Robertson Blvd #10. Open 24 Hours.",
    images: [
      {
        url: "https://www.theplanet60.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "The Planet 60 Brampton cannabis dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_DOC_TITLE,
    description: "Open 24 Hours at 1098 Peter Robertson Blvd #10, Brampton.",
    images: ["https://www.theplanet60.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.theplanet60.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
});

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.theplanet60.com",
  name: "The Planet 60 Dispensary Weed Delivery",
  alternateName: "The Planet 60",
  hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJF1t-nAstK4gRTGPK1xrokgQ",
  sameAs: ["https://www.google.com/maps/place/?q=place_id:ChIJF1t-nAstK4gRTGPK1xrokgQ"],
  description: "Cannabis dispensary at 1098 Peter Robertson Blvd #10 in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://www.theplanet60.com",
  telephone: "+12892060899",
  image: "https://www.theplanet60.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1098 Peter Robertson Blvd #10",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6R 1G6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7579871,
    longitude: -79.7371271,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Brampton",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fleet = await getFleetContent();
  const sheetBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index])
    ? fleet.banners
    : undefined;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cigaretteSafeContent(jsonLd)) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HGBR2HWPEN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HGBR2HWPEN');
            `
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ web: SHOW_CIGARETTES, tv: SHOW_CIGARETTES, wording: CIG_WORDING_FALLBACK }}>
            <FleetSheetBannerProvider banners={sheetBanners}>
              {children}
              <FullNameNap />
              <PinnedNavClearance />
            </FleetSheetBannerProvider>
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
