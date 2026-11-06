import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_HUB, RESOURCE_PAGES, type ResourceArticle } from "./resourceData";
import styles from "./resources.module.css";

type ResourceViewProps = {
  article: ResourceArticle;
};

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter((part) => part.length > 0);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        const link = /^\[([^\]]+)\]\((\/[^)]+)\)$/.exec(part);
        if (link && (link[2] === "/visit" || link[2] === "/resources")) {
          return (
            <Link key={index} href={link[2]}>
              {link[1]}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function ResourceView({ article }: ResourceViewProps) {
  const isHub = article.path === RESOURCE_HUB.path;
  const richArticle = Boolean(article.blocks?.length);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src={RESOURCE_BANNER} alt="The Planet 60 resource hub" className={styles.heroImage} />
        </div>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{article.eyebrow}</span>
          <h1 className={article.lastChecked ? styles.articleHeading : undefined}>{article.title}</h1>
          {article.lastChecked ? <p className={styles.lastChecked}>{`Last checked: ${article.lastChecked}`}</p> : <p>{article.summary}</p>}
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
            <Link href="/guides" className={styles.card}>
              <b>00</b><span>Name guides</span><h2>Name Guides</h2><p>Browse all live strain, Native Cigarettes, Nicotine Vape, and THC Vape name guides.</p>
            </Link>
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
          <div className={richArticle ? styles.copyStack : styles.articleGrid}>
            <div className={richArticle ? `${styles.copy} ${styles.copyStack}` : styles.copy}>
              {richArticle
                ? article.blocks?.map((block, index) => {
                    if (block.type === "h2") return <h2 key={`${block.type}-${index}`}><RichText text={block.text} /></h2>;
                    if (block.type === "h3") return <h3 key={`${block.type}-${index}`}><RichText text={block.text} /></h3>;
                    if (block.type === "list") {
                      return (
                        <ul key={`${block.type}-${index}`}>
                          {block.items.map((item, itemIndex) => (
                            <li key={`${index}-${itemIndex}`}><RichText text={item} /></li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "ol") {
                      return (
                        <ol key={`${block.type}-${index}`}>
                          {block.items.map((item, itemIndex) => (
                            <li key={`${index}-${itemIndex}`}><RichText text={item} /></li>
                          ))}
                        </ol>
                      );
                    }
                    if (block.type === "table") {
                      return (
                        <div key={`${block.type}-${index}`} className={styles.tableWrap}>
                          <table>
                            <thead>
                              <tr>
                                {block.headers.map((header) => (
                                  <th key={header} scope="col"><RichText text={header} /></th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={`${rowIndex}-${cellIndex}`}><RichText text={cell} /></td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    if (block.type === "p") return <p key={`${block.type}-${index}`}><RichText text={block.text} /></p>;
                    return null;
                  })
                : article.sections.map((section) => (
                    <section key={section.heading}>
                      <h2>{section.heading}</h2>
                      <p>{section.body}</p>
                    </section>
                  ))}
            </div>
            {richArticle ? null : (
              <aside className={styles.sideBox}>
                <h2>Orbit links</h2>
                {article.quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/resources">All resources</Link>
              </aside>
            )}
          </div>
        </article>
      )}

      <Footer />
    </main>
  );
}
