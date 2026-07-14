import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — The Planet 60 | Brampton",
  description: "Get notified when The Planet 60 prepares delivery updates for Brampton shoppers.",
  alternates: {
    canonical: "https://theplanet60.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
