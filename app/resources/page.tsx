import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_CANONICAL, RESOURCE_PAGES } from "./resourceData";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "The Planet 60 Resources | Peter Robertson Brampton Guides",
  description: "The Planet 60 resources for Peter Robertson visits, Springdale menu planning, flower tiers, vapes, cigarettes, and 24-hour Brampton shopping.",
  alternates: { canonical: RESOURCE_CANONICAL },
};

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <img src={RESOURCE_BANNER} alt="The Planet 60 resource hub" className={styles.heroImage} />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>P60 orbit hub</span>
          <h1>Peter Robertson Menu Resources</h1>
          <p>Use the orbit map: visit guide, Springdale menu paths, flower tiers, late-night shopping, native smokes, and vape/value shortcuts.</p>
        </div>
      </section>
      <section className={styles.grid}>
        {RESOURCE_PAGES.map((page, index) => (
          <Link key={page.slug} href={`/resources/${page.slug}`} className={styles.card}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <span>{page.eyebrow}</span>
            <h2>{page.title}</h2>
            <p>{page.summary}</p>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
