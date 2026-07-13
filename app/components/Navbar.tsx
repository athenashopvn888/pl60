"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ALL_LINKS = [
  { href: "/exotic", label: "Exotic" },
  { href: "/premium", label: "Premium" },
  { href: "/aaa", label: "AAA+" },
  { href: "/aa", label: "AA" },
  { href: "/budget", label: "Budget" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "THC Vape" },
  { href: "/items/vape-disposables", label: "Nic Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/delivery", label: "Delivery" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/games", label: "Games" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} id="main-nav">
      <div className={styles.topBar}>
        <Link
          href="/"
          className={styles.logo}
          style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
        >
          <span style={{ fontSize: "14px", fontWeight: 900, color: "#b6ff3a" }}>P60</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "18px",
              letterSpacing: "0.04em",
              color: "white",
              textShadow: "0 0 12px rgba(255,255,255,0.2)",
            }}
          >
            THE PLANET 60
          </span>
        </Link>
        <div className={styles.topBarRight}>
          <Link href="/games" className={styles.gamesBtn}>
            Play Games
          </Link>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
        </div>
      </div>

      <div className={styles.scrollBar}>
        <div className={styles.scrollInner}>
          {ALL_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
