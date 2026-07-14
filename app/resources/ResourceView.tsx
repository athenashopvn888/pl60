import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_HUB, RESOURCE_PAGES, type ResourceArticle } from "./resourceData";
import styles from "./resources.module.css";

type ResourceViewProps = {
  article: ResourceArticle;
};

export default function ResourceView({ article }: ResourceViewProps) {
  const isHub = article.path === RESOURCE_HUB.path;

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src={RESOURCE_BANNER} alt="The Planet 60 resource hub" className={styles.heroImage} />
        </div>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{article.eyebrow}</span>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </div>
      </section>

      {isHub ? (
        <>
          <section className={styles.introGrid} aria-label="The Planet 60 resource overview">
            {article.sections.map((section) => (
              <article key={section.heading} className={styles.introPanel}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </section>
          <section className={styles.grid} aria-label="The Planet 60 resource guides">
            {RESOURCE_PAGES.map((page, index) => (
              <Link key={page.path} href={page.path} className={styles.card}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{page.eyebrow}</span>
                <h2>{page.title}</h2>
                <p>{page.summary}</p>
              </Link>
            ))}
          </section>
        </>
      ) : (
        <article className={styles.article}>
          <div className={styles.articleGrid}>
            <div className={styles.copy}>
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
            <aside className={styles.sideBox}>
              <h2>Orbit links</h2>
              {article.quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/resources">All resources</Link>
            </aside>
          </div>
        </article>
      )}

      <Footer />
    </main>
  );
}
