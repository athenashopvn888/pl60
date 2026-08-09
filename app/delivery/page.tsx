import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: "Delivery Menu | The Planet 60",
  description: "Browse The Planet 60 delivery product catalog and compare flower tiers and prices.",
  alternates: { canonical: "https://www.theplanet60.com/delivery" },
};

export default function DeliveryPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "The Planet 60 Delivery Menu", url: "https://www.theplanet60.com/delivery", mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
