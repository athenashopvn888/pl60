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

  const shareTitle = page.seoTitle ?? `${page.title} | The Planet 60`;
  return {
    title: { absolute: page.seoTitle ?? `${page.title} | The Planet 60` },
    description: page.metaDescription,
    alternates: { canonical: `${RESOURCE_SITE}${page.path}` },
    ...(page.datePublished
      ? {
          robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large" as const,
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
          openGraph: {
            title: shareTitle,
            description: page.metaDescription,
            url: `${RESOURCE_SITE}${page.path}`,
            type: "article" as const,
          },
          twitter: {
            card: "summary" as const,
            title: shareTitle,
            description: page.metaDescription,
          },
        }
      : {}),
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

  const canonical = `${RESOURCE_SITE}${page.path}`;
  const articleSchema = page.datePublished
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.title,
        mainEntityOfPage: canonical,
        url: canonical,
        datePublished: page.datePublished,
        dateModified: page.dateModified ?? page.datePublished,
        author: { "@type": "Organization", name: "The Planet 60" },
        publisher: { "@type": "Organization", name: "The Planet 60" },
      }
    : null;

  return (
    <>
      <ResourceView article={page} />
      {articleSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
        />
      ) : null}
    </>
  );
}
