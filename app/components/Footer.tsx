import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>THE PLANET 60</div>
            <p className={styles.desc}>
              Your local cannabis dispensary at 1098 Peter Robertson Blvd #10,
              Brampton. Visit The Planet 60 for premium flower, edibles, vapes,
              cigarettes, accessories, and more. Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <Link href="/#menu" className={styles.btnPrimary}>
                View Menu
              </Link>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>1098 Peter Robertson Blvd #10</span>
              <span>Brampton, ON L6R 1G6</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+14372306974" style={{ color: "inherit" }}>
                  (437) 230-6974
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">THC Vape</Link>
              <Link href="/items/vape-disposables">Nic Vape</Link>
              <Link href="/items/magic">Magic Stuff</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/resources/peter-robertson-visit-guide">Peter Robertson Visit Guide</Link>
              <Link href="/resources/planet60-flower-tier-guide">Flower Tier Guide</Link>
              <Link href="/resources/magic-stuff-menu-guide">Magic Stuff Guide</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/brampton-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-brampton">Weed Store Near Brampton</Link>
              <Link href="/weed-dispensary-brampton/">
                The Planet 60 Weed Dispensary in Brampton
              </Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Copyright {new Date().getFullYear()} The Planet 60. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
