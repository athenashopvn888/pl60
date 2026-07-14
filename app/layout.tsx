import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://theplanet60.com"),
  title: {
    default: "Planet 60 Cannabis | 24-Hour Brampton Dispensary",
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
    url: "https://theplanet60.com",
    siteName: "The Planet 60",
    title: "The Planet 60 - Brampton Cannabis Dispensary",
    description:
      "Flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff at 1098 Peter Robertson Blvd #10. Open 24 Hours.",
    images: [
      {
        url: "https://theplanet60.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "The Planet 60 Brampton cannabis dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Planet 60 - Brampton Cannabis Dispensary",
    description: "Open 24 Hours at 1098 Peter Robertson Blvd #10, Brampton.",
    images: ["https://theplanet60.com/wp-content/uploads/2026/04/46Oi5.jpg"],
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
    canonical: "https://theplanet60.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://theplanet60.com",
  name: "The Planet 60",
  description: "Cannabis dispensary at 1098 Peter Robertson Blvd #10 in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://theplanet60.com",
  telephone: "+14372306974",
  image: "https://theplanet60.com/wp-content/uploads/2026/04/7Clmh.jpg",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
