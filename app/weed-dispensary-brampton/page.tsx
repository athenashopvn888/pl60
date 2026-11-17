import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";

const DOC_TITLE = "The Planet 60 | Weed Dispensary near me in Brampton | The Planet 60";

export const metadata: Metadata = {
  title: { absolute: DOC_TITLE },
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
