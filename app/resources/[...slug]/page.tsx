import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { RESOURCE_PAGES, RESOURCE_SITE, getResourceBySegments } from "../resourceData";

export function generateStaticParams() {
  return RESOURCE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourceBySegments(slug);
  if (!page) return {};

  return {
    title: { absolute: `${page.title} | The Planet 60` },
    description: page.metaDescription,
    alternates: { canonical: `${RESOURCE_SITE}${page.path}` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getResourceBySegments(slug);
  if (!page) notFound();

  return <ResourceView article={page} />;
}
