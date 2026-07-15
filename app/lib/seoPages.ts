export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "brampton-weed-dispensary",
    title: "Brampton Weed Dispensary | The Planet 60 | 24 Hours",
    metaDescription:
      "The Planet 60 is a 24-hour Brampton weed dispensary at 1098 Peter Robertson Blvd #10 with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff.",
    h1: "Brampton Weed Dispensary",
    icon: "P60",
    heroTagline: "Peter Robertson Blvd cannabis shop with 24-hour access.",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "The Planet 60 On Peter Robertson Blvd",
        body:
          "The Planet 60 is located at 1098 Peter Robertson Blvd #10 in Brampton. The site is organized around clear shopping trips: flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, Magic Stuff, and the Brampton visit page.",
      },
      {
        heading: "A Menu Built For Fast Choices",
        body:
          "Flower shoppers can start with Exotic, Premium, AAA+, AA, or Budget. Format-first shoppers can jump to edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, or specialty categories without sorting through every flower page.",
      },
      {
        heading: "Open 24 Hours",
        body:
          "The Planet 60 lists 24-hour access for Brampton shoppers. Late-night and early-morning visitors can check the menu section, bring valid 19+ ID, and use the FAQ or contact page for store basics.",
      },
      {
        heading: "Springdale And Peter Robertson Visits",
        body:
          "The Peter Robertson Blvd shop is organized for Brampton shoppers around Springdale, Torbram Road, Bramalea, and nearby local routes. Category pages carry current products and prices as the menu rotates.",
      },
    ],
    faqs: [
      {
        q: "Where is The Planet 60 located?",
        a: "The Planet 60 is at 1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6.",
      },
      {
        q: "What are the hours for The Planet 60?",
        a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting.",
      },
      {
        q: "What menu categories does The Planet 60 carry?",
        a: "The site includes flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and Magic Stuff.",
      },
    ],
  },
  {
    slug: "cheap-weed-brampton",
    title: "Cheap Weed Brampton | The Planet 60 Budget Flower",
    metaDescription:
      "Looking for cheap weed in Brampton? The Planet 60 has Budget, AA, AAA+, Premium, and Exotic flower paths at 1098 Peter Robertson Blvd #10. Open 24 Hours.",
    h1: "Cheap Weed Brampton",
    icon: "$",
    heroTagline: "Budget flower paths and clear tier shopping on Peter Robertson Blvd.",
    banner: "/banners/budget_banner.webp",
    sections: [
      {
        heading: "Start With Budget And AA",
        body:
          "The Planet 60 separates the value flower lanes so shoppers can compare Budget and AA without digging through premium shelves first.",
      },
      {
        heading: "Compare Up The Tier Ladder",
        body:
          "If the value lane is not the move, shoppers can step up into AAA+, Premium, or Exotic. Choose the shelf first, then compare the current strains inside that shelf.",
      },
      {
        heading: "Use Current Menu Pages",
        body:
          "Flower batches, strain names, and prices can rotate. The Budget, AA, AAA+, Premium, and Exotic pages should be checked for current product details before heading to Peter Robertson Blvd.",
      },
      {
        heading: "A 24-Hour Brampton Stop",
        body:
          "Because The Planet 60 lists 24-hour access, the value flower path works for daytime visits, night-shift shoppers, and early-morning errands.",
      },
    ],
    faqs: [
      {
        q: "Where can I find Budget flower at The Planet 60?",
        a: "Use the Budget Flower page from the menu or footer, then check the current listings before visiting.",
      },
      {
        q: "Does The Planet 60 have more than Budget flower?",
        a: "Yes. The flower menu is organized into Exotic, Premium, AAA+, AA, and Budget paths.",
      },
      {
        q: "Is The Planet 60 open late for value flower shoppers?",
        a: "The Planet 60 lists Open 24 Hours at 1098 Peter Robertson Blvd #10 in Brampton.",
      },
    ],
  },
  {
    slug: "native-cigarettes-brampton",
    title: "Native Cigarettes Brampton | The Planet 60",
    metaDescription:
      "The Planet 60 lists native cigarettes and tobacco add-ons in Brampton, including Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Backwoods, Grabba, and nicotine pouches.",
    h1: "Native Cigarettes Brampton",
    icon: "19+",
    heroTagline: "Cigarette, tobacco, and nicotine menu sections at the Peter Robertson Blvd shop.",
    banner: "/banners/06_Cigarettes.webp",
    sections: [
      {
        heading: "Brands Listed On The Menu",
        body:
          "The Planet 60 menu includes cigarette listings such as Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
      },
      {
        heading: "Price Lanes From Current Listings",
        body:
          "Many native cigarette pack listings show $25. The menu also includes 10 x Premium Mix Cigarettes at $3, nicotine pouches, Grabba, Grabba Shaker, and Backwoods listings with their own menu prices.",
      },
      {
        heading: "Adult Tobacco Boundary",
        body:
          "Smoking and nicotine use carry serious health risks. This page is for adult 19+ menu navigation only. Brand mix, flavours, and prices can rotate, so check the cigarette category before visiting.",
      },
      {
        heading: "One Peter Robertson Stop",
        body:
          "Cigarette shoppers can also use the accessories, flower, pre-roll, THC Vape, and Nic Vape paths from the same menu, which keeps the store easier to shop in one visit.",
      },
    ],
    faqs: [
      {
        q: "Does The Planet 60 sell cigarettes?",
        a: "The Planet 60 menu includes a cigarettes category with native cigarette and tobacco-related listings.",
      },
      {
        q: "Which cigarette brands are listed?",
        a: "Current menu listings include Canadian, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, and Time.",
      },
      {
        q: "Are prices fixed?",
        a: "Prices and brand mix can rotate. Check the cigarette category for current listings before visiting Peter Robertson Blvd.",
      },
    ],
  },
  {
    slug: "weed-store-near-brampton",
    title: "Weed Store Near Brampton | The Planet 60",
    metaDescription:
      "The Planet 60 is a 24-hour Brampton weed store on Peter Robertson Blvd with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff.",
    h1: "Weed Store Near Brampton",
    icon: "P60",
    heroTagline: "A Peter Robertson Blvd cannabis stop for nearby Brampton shoppers.",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "Peter Robertson Blvd Weed Store",
        body:
          "The Planet 60 sits at 1098 Peter Robertson Blvd #10 in Brampton. The site keeps flower, edibles, vapes, concentrates, cigarettes, accessories, and specialty paths easy to scan before visiting.",
      },
      {
        heading: "Use The Menu Before Visiting",
        body:
          "A quick menu check helps shoppers decide whether the visit is about Budget flower, a Premium or Exotic shelf, pre-rolls, edibles, THC Vape, Nic Vape, concentrates, cigarettes, or accessories.",
      },
      {
        heading: "24-Hour Access",
        body:
          "The Planet 60 lists Open 24 Hours, which helps shoppers timing a visit around work, errands, or a late drive. Bring valid 19+ ID and check the category page before heading out.",
      },
    ],
    faqs: [
      {
        q: "Where is The Planet 60?",
        a: "The Planet 60 is at 1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6.",
      },
      {
        q: "What area is The Planet 60 built around?",
        a: "The site is focused on The Planet 60 in Brampton, especially the Peter Robertson Blvd and Springdale area.",
      },
      {
        q: "What should I check before visiting?",
        a: "Check the category page that matches your trip: flower tier, edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, or Magic Stuff.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-brampton",
    title: "Cannabis Dispensary Near Me Brampton | The Planet 60",
    metaDescription:
      "Find The Planet 60 at 1098 Peter Robertson Blvd #10 in Brampton. Open 24 Hours with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff paths.",
    h1: "Cannabis Dispensary Near Me In Brampton",
    icon: "P",
    heroTagline: "A 24-hour Peter Robertson Blvd dispensary path for nearby Brampton shoppers.",
    banner: "/banners/welcome_banner.webp",
    sections: [
      {
        heading: "Find The Peter Robertson Blvd Shop",
        body:
          "The Planet 60 is located at 1098 Peter Robertson Blvd #10 in Brampton. Nearby shoppers can use the menu to pick a flower tier or format category before visiting.",
      },
      {
        heading: "Choose The Right Lane",
        body:
          "The site is organized for fast decisions: Exotic, Premium, AAA+, AA, Budget, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and Magic Stuff.",
      },
      {
        heading: "Open 24 Hours",
        body:
          "The Planet 60 lists 24-hour access, so shoppers can plan around regular hours, late shifts, early errands, and weekend visits. Adult 19+ ID is required.",
      },
      {
        heading: "Planet 60 Resource Hub",
        body:
          "The Resource hub adds guides for Peter Robertson visits, Springdale menu planning, flower tiers, late-night shopping, vapes, native smokes, and Magic Stuff.",
      },
    ],
    faqs: [
      {
        q: "What is the address?",
        a: "1098 Peter Robertson Blvd #10, Brampton, ON L6R 1G6.",
      },
      {
        q: "Is The Planet 60 walk-in friendly?",
        a: "The site presents The Planet 60 as a 24-hour Brampton dispensary. Bring valid 19+ ID and check the menu before visiting.",
      },
      {
        q: "Where are the Resource pages?",
        a: "Use /resources for The Planet 60 guides covering visits, flower tiers, 24-hour shopping, vapes, cigarettes, and specialty categories.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

const LEGACY_SEO_REDIRECTS: Record<string, string> = {
  "york-weed-dispensary": "brampton-weed-dispensary",
  "cheap-weed-york": "cheap-weed-brampton",
  "native-cigarettes-york": "native-cigarettes-brampton",
  "dispensary-near-me-york": "dispensary-near-me-brampton",
  "weed-store-near-mississauga": "weed-store-near-brampton",
};

export function getLegacySeoRedirect(slug: string): string | undefined {
  return LEGACY_SEO_REDIRECTS[slug];
}
