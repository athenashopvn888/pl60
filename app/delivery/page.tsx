import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — The Planet 60 | Brampton",
  description: "Get notified when The Planet 60 launches same-day weed delivery across Brampton and surrounding areas.",
  alternates: {
    canonical: "https://theplanet60.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
