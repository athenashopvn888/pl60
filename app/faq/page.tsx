import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ - The Planet 60 | Brampton Dispensary Questions",
  description:
    "Frequently asked questions about The Planet 60 in Brampton. Hours, location, products, pricing, bundle offers, and what to check before visiting.",
  alternates: {
    canonical: "https://www.theplanet60.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location & Hours",
    faqs: [
      {
        q: "Where is The Planet 60 located?",
        a: "The Planet 60 is located at 1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6.",
      },
      {
        q: "What are your hours?",
        a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting.",
      },
      {
        q: "Is there parking nearby?",
        a: "For parking or transit details, use the current map listing or contact the store before visiting.",
      },
      {
        q: "What area is this site focused on?",
        a: "The site is focused on Brampton shoppers around Peter Robertson Blvd, Springdale, Torbram Road, Bramalea, and nearby local routes.",
      },
      {
        q: "What should I check before visiting?",
        a: "Use the address in your map app, then check the current menu category that matches your visit.",
      },
    ],
  },
  {
    title: "Products & Menu",
    faqs: [
      {
        q: "What products are shown on the site?",
        a: "The site organizes products into flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and Magic Stuff.",
      },
      {
        q: "Do you have a current menu?",
        a: "Use the online menu and category pages for current public listings. Product mix and pricing can change.",
      },
      {
        q: "What are your flower tiers?",
        a: "Flower pages are organized as Exotic, Premium, AAA+, AA, and Budget. Current per-gram and bundle prices are shown on the matching tier page.",
      },
      {
        q: "Do you sell edibles?",
        a: "The site includes an edibles category. Check the current edibles page before visiting because product mix can change.",
      },
      {
        q: "Do you sell vapes?",
        a: "The site includes THC Vape and Nic Vape categories. Check the current category page for listed items.",
      },
      {
        q: "Do you sell cigarettes?",
        a: "The site includes a cigarettes category. Check the category page for the current brand mix before visiting Peter Robertson Blvd.",
      },
    ],
  },
  {
    title: "Pricing & Bundle Offers",
    faqs: [
      {
        q: "What is the cheapest flower tier listed?",
        a: "The Budget tier is the lowest-priced flower path shown on the site. Check the Budget page for current pricing and listed products.",
      },
      {
        q: "What bundle pricing do you show?",
        a: "Flower bundle pricing is shown on the matching tier pages. Some tiers include 3g or 6g bundle options, and the page shows the current total price.",
      },
      {
        q: "Do you have ounce deals?",
        a: "Some tier pages show ounce or value options. Check the current tier page before visiting because listings can rotate.",
      },
      {
        q: "How does bundle pricing work?",
        a: "Some flower tiers include bundle pricing. The matching tier page shows the current bundle label, total amount, and price.",
      },
      {
        q: "How does the tier pricing work?",
        a: "Each flower page is grouped into one of five tiers. The tier page shows the current per-gram price and any available bundle pricing.",
      },
    ],
  },
  {
    title: "Shopping & Experience",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "The site presents The Planet 60 as a walk-in Brampton shop. Check the contact page or current store listing if you need confirmation before visiting.",
      },
      {
        q: "Can I order online?",
        a: "Use the online menu for browsing and planning. Confirm ordering details with the store before relying on any purchase flow.",
      },
      {
        q: "Do you offer delivery?",
        a: "The delivery page is being kept as a local update page while delivery details are prepared. Do not rely on delivery until the store confirms the service details.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Check with the store for current payment options before visiting.",
      },
      {
        q: "Can staff help me choose a product?",
        a: "Ask the store team for current product and price details when you visit.",
      },
      {
        q: "Is there a minimum purchase?",
        a: "Check with the store for current purchase rules and menu details.",
      },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/07_FAQ.webp"
            alt="The Planet 60 FAQ - Your Questions Answered"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Answers for shoppers checking The Planet 60 on Peter Robertson Blvd in Brampton.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>(437) 230-6974</strong> or visit us at 1098 Peter Robertson Blvd
              #10, Brampton.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
