export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Brampton | The Planet 60",
    seoIntro: "Use the Exotic flower page at The Planet 60 to compare current higher-tier flower listings in Brampton.",
    sections: [
      {
        heading: "Start With The Exotic Tier",
        body: "Exotic is one flower path on The Planet 60 menu. Use the current product name, item notes, size, and posted price before choosing.",
      },
      {
        heading: "Check Current Bundle Notes",
        body: "The site may show size and bundle notes for this tier. Confirm current pricing on the menu or with staff before purchase.",
      },
      {
        heading: "Visit The Planet 60 In Brampton",
        body: "The Planet 60 is located at 1098 Peter Robertson Blvd #10 in Brampton. Use the store page for directions, contact options, and listed hours.",
      },
    ],
    faqs: [
      { q: "What is the Exotic flower tier?", a: "Exotic is the higher-tier flower category on The Planet 60 menu. Check current listings for today's options." },
      { q: "How should shoppers compare Exotic flower?", a: "Compare the current item name, size, posted price, and menu notes, then ask staff if one detail matters." },
      { q: "Are Exotic listings always the same?", a: "No. Flower listings can rotate, so use the current menu before visiting." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Brampton | The Planet 60",
    seoIntro: "Use the Premium flower page at The Planet 60 to compare current flower listings in Brampton.",
    sections: [
      {
        heading: "Compare Premium Flower Clearly",
        body: "Premium and Exotic are separate paths in the flower navigation. Use each page to compare current names, sizes, and posted prices.",
      },
      {
        heading: "Read The Current Item Notes",
        body: "Use the current menu for product names, sizes, and posted prices. Menu details can change, so old examples should not make the decision.",
      },
      {
        heading: "Premium Flower On Peter Robertson Blvd",
        body: "The Planet 60 is at 1098 Peter Robertson Blvd #10 in Brampton. Use the store page and current menu together when planning the visit.",
      },
    ],
    faqs: [
      { q: "What is Premium flower at The Planet 60?", a: "Premium is one of the flower tiers on The Planet 60 menu. Use current listings to compare options." },
      { q: "How is Premium different from Exotic?", a: "They are separate menu tiers. Compare the current products and posted details in each tier before choosing." },
      { q: "Where can shoppers confirm current prices?", a: "Use the current menu or ask staff for current product and price details." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Brampton | The Planet 60",
    seoIntro: "Use the AAA+ flower page at The Planet 60 to compare current flower listings in Brampton.",
    sections: [
      {
        heading: "Use AAA+ For A Focused Comparison",
        body: "AAA+ is a flower tier that lets shoppers compare one section without mixing every flower category together.",
      },
      {
        heading: "Compare Size, Price, And Notes",
        body: "Start with the current product name, then compare size, posted price, and item notes. If one format matters, confirm before visiting.",
      },
    ],
    faqs: [
      { q: "What is AAA+ flower?", a: "AAA+ is one of The Planet 60 flower tiers. Check the current menu for today's listings." },
      { q: "How should shoppers compare AAA+?", a: "Compare current item names, sizes, posted prices, and menu notes." },
      { q: "Can AAA+ listings change?", a: "Yes. Use the current menu or ask staff for current details." },
    ],
  },
  AA: {
    seoTitle: "AA Cannabis Flower Brampton | The Planet 60",
    seoIntro: "Use the AA flower page at The Planet 60 to compare current everyday flower listings in Brampton.",
    sections: [
      {
        heading: "AA Flower For Everyday Browsing",
        body: "AA is a value-minded flower category on The Planet 60 menu. It helps shoppers compare current listings without jumping across every tier.",
      },
      {
        heading: "Confirm The Current Details",
        body: "Use the menu or staff for current product names, sizes, and posted prices before choosing.",
      },
    ],
    faqs: [
      { q: "What is AA flower?", a: "AA is one of The Planet 60 flower tiers for shoppers comparing current value-minded listings." },
      { q: "Where should shoppers confirm AA pricing?", a: "Use the current menu or ask staff for today's posted pricing." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Cannabis Brampton | The Planet 60",
    seoIntro: "Use the Budget flower page at The Planet 60 to compare lower-spend flower listings in Brampton.",
    sections: [
      {
        heading: "Start Here For Lower-Spend Flower",
        body: "The Budget tier is for Brampton shoppers comparing lower-spend flower options. Start with the current menu and confirm today's product details before choosing.",
      },
      {
        heading: "Check Sizes And Posted Prices",
        body: "Budget listings can change. Compare the current size, posted price, and item notes, then ask staff if one detail decides the visit.",
      },
    ],
    faqs: [
      { q: "What is the Budget flower tier?", a: "Budget is the lower-spend flower category on The Planet 60 menu." },
      { q: "Can Budget listings change?", a: "Yes. Use the current menu or ask staff for current details." },
      { q: "Where is The Planet 60?", a: "The Planet 60 is located at 1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6." },
    ],
  },
};
