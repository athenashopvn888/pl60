import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_CANONICAL, RESOURCE_HUB } from "./resourceData";

export const metadata: Metadata = {
  title: { absolute: "The Planet 60 Resources | Peter Robertson Brampton Guides" },
  description: RESOURCE_HUB.metaDescription,
  alternates: { canonical: RESOURCE_CANONICAL },
};

export default function ResourcesPage() {
  return <ResourceView article={RESOURCE_HUB} />;
}
