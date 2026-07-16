import Link from "next/link";
import styles from "./HiringCallout.module.css";

export default function HiringCallout() {
  return (
    <section aria-label="The Planet 60 hiring" className={styles.section}>
      <div className={styles.callout}>
        <div>
          <span className={styles.eyebrow}>
            Budtenders / Managers Wanted
          </span>
          <h2 className={styles.heading}>
            Join The Planet 60
          </h2>
          <p className={styles.copy}>
            Planet 60 needs determined people who can stay friendly, focused, and reliable through busy shifts. Online applications only. Please do not call the store about hiring.
          </p>
        </div>
        <Link href="/careers/budtender" className={styles.apply}>
          Apply Online
        </Link>
      </div>
    </section>
  );
}
