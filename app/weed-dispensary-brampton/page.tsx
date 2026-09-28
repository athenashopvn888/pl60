import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: gbpLocation.seoTitle,
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: `https://www.theplanet60.com/${gbpLocation.slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
