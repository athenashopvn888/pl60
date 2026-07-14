"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbySrZYxI-NNnXfxY1jXOqHgT2HQi4zst2Fgte6FXTeymat_W_r0o1E3P83EfnVCjEk0/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=PL601`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>
          Delivery <span className={styles.highlight}>Coming Soon</span>
        </h1>
        <p className={styles.pageSubtitle}>
          The Planet 60 is preparing delivery updates for Brampton shoppers.
          Sign up below to be the first to know when local delivery details are ready.
        </p>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Get Notified When We Launch</h2>
          <p className={styles.formDesc}>
            Enter your email to join our delivery waitlist. We&apos;ll send you one email when delivery goes live.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className={styles.successMsg}>
              You&apos;re on the list. We&apos;ll notify you when delivery launches.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>BOX</span>
            <h3 className={styles.infoTitle}>Delivery Updates</h3>
            <p className={styles.infoDesc}>Watch for local availability updates before planning a delivery order.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>AREA</span>
            <h3 className={styles.infoTitle}>Brampton / Peter Robertson</h3>
            <p className={styles.infoDesc}>Built around The Planet 60 store at 1098 Peter Robertson Blvd #10.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>INFO</span>
            <h3 className={styles.infoTitle}>Menu First</h3>
            <p className={styles.infoDesc}>Use the current menu or staff for product, price, and availability details.</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Can&apos;t wait? Visit us in-store at <strong>1098 Peter Robertson Blvd #10, Brampton</strong> - open <strong>24 hours</strong>. Call <strong>(437) 230-6974</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
