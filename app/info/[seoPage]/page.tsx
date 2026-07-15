import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SEO_PAGES, getLegacySeoRedirect, getSeoPageBySlug } from "../../lib/seoPages";
import { TIER_CONFIG } from "../../lib/products";
import styles from "./seo.module.css";

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ seoPage: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}): Promise<Metadata> {
  const { seoPage: slug } = await params;
  const replacementSlug = getLegacySeoRedirect(slug);
  const page = getSeoPageBySlug(replacementSlug || slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.theplanet60.com/info/${replacementSlug || slug}`,
    },
  };
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}) {
  const { seoPage: slug } = await params;
  const replacementSlug = getLegacySeoRedirect(slug);
  if (replacementSlug) redirect(`/info/${replacementSlug}`);

  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const tiers = Object.values(TIER_CONFIG);

  return (
    <main className={styles.main}>
      <Navbar />

      {page.banner && (
        <section className={styles.bannerSection}>
          <img src={page.banner} alt={page.h1} className={styles.bannerImg} />
        </section>
      )}

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroIcon}>{page.icon}</span>
          <h1 className={styles.heroH1}>{page.h1}</h1>
          <p className={styles.heroTagline}>{page.heroTagline}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          {page.sections.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>
              <p className={styles.sectionBody}>{section.body}</p>
            </div>
          ))}

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Cannabis Menu - Five Flower Tiers</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={{ "--tier-color": tier.color } as React.CSSProperties}
                >
                  <div className={styles.tierLabel} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <div className={styles.tierPrice}>${tier.unitPrice}/g</div>
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} -&gt;</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <div className={styles.mapWrap}></div>
            <div className={styles.visitBtns}></div>
          </div>

          {page.faqs.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              {page.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
