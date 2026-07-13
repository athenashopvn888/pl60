export type ResourceSection = {
  heading: string;
  body: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceArticle = {
  path: string;
  slug: string[];
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: ResourceSection[];
  quickLinks: ResourceLink[];
};

export const RESOURCE_BANNER = "/banners/welcome_banner.webp";
export const RESOURCE_SITE = "https://www.theplanet60.com";
export const RESOURCE_CANONICAL = `${RESOURCE_SITE}/resources`;

export const RESOURCE_HUB: ResourceArticle = {
  path: "/resources",
  slug: [],
  title: "The Planet 60 Resources",
  metaDescription:
    "The Planet 60 resources for Peter Robertson Blvd visits, Springdale menu planning, flower tiers, 24-hour Brampton shopping, vapes, cigarettes, and Magic Stuff.",
  eyebrow: "P60 orbit hub",
  summary:
    "A Peter Robertson Blvd resource hub for Brampton shoppers who want the right Planet 60 menu path before lift-off.",
  sections: [
    {
      heading: "Start With The Orbit Map",
      body:
        "The Planet 60 menu is easiest when shoppers pick the lane first: flower tiers, pre-rolls, edibles, THC Vape, Nic Vape, concentrates, cigarettes, accessories, or Magic Stuff.",
    },
    {
      heading: "Use Local Visit Guides",
      body:
        "Peter Robertson Blvd, Torbram Road, Springdale, Bramalea, and Brampton Transit all shape how shoppers plan the stop. These guides keep location, category, and timing choices close together.",
    },
    {
      heading: "Check Current Category Pages",
      body:
        "Brands, strains, flavours, and prices can rotate. These guides help shoppers choose a path, then category pages carry the current menu details.",
    },
  ],
  quickLinks: [
    { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    { label: "Menu", href: "/#menu" },
    { label: "Contact", href: "/contact" },
  ],
};

export const RESOURCE_PAGES: ResourceArticle[] = [
  {
    path: "/resources/peter-robertson-visit-guide",
    slug: ["peter-robertson-visit-guide"],
    title: "Peter Robertson Blvd Visit Guide",
    metaDescription:
      "Plan a visit to The Planet 60 at 1098 Peter Robertson Blvd #10 in Brampton with 24-hour menu paths for flower, vapes, edibles, concentrates, cigarettes, and accessories.",
    eyebrow: "Peter Robertson",
    summary:
      "A Brampton visit guide for The Planet 60 shoppers heading toward Peter Robertson Blvd, Torbram Road, Bramalea, and Springdale.",
    sections: [
      {
        heading: "Set The Route Before Lift-Off",
        body:
          "The Planet 60 is at 1098 Peter Robertson Blvd #10 in Brampton. Before heading over, pick the category that matches the trip and keep one backup lane in mind in case the menu has rotated.",
      },
      {
        heading: "Use The 24-Hour Advantage",
        body:
          "The store lists Open 24 Hours, which matters for late-night, early-morning, and after-shift Brampton visits. Check the menu path, bring valid 19+ ID, and use the visit page for store basics.",
      },
      {
        heading: "Pick One Main Lane",
        body:
          "Flower tiers, THC Vape, Nic Vape, edibles, pre-rolls, concentrates, cigarettes, and accessories each have a clear doorway. A shopper near Peter Robertson Blvd should be able to choose fast.",
      },
      {
        heading: "Keep The Stop Simple",
        body:
          "The cleanest visit is one main category, one backup, and the current category page for product details. That keeps the site useful without overpromising what is on the shelf at a specific moment.",
      },
    ],
    quickLinks: [
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
      { label: "Menu", href: "/#menu" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    path: "/resources/springdale-menu-guide",
    slug: ["springdale-menu-guide"],
    title: "Springdale Brampton Cannabis Menu Guide",
    metaDescription:
      "Use The Planet 60 Springdale Brampton cannabis menu guide to compare flower tiers, THC Vape, Nic Vape, edibles, pre-rolls, concentrates, cigarettes, Magic Stuff, and accessories.",
    eyebrow: "Springdale menu",
    summary:
      "A local menu map for shoppers around Springdale, Peter Robertson Blvd, Torbram Road, and nearby Brampton routes.",
    sections: [
      {
        heading: "Use The Local Area",
        body:
          "This guide is built for shoppers around Springdale and the Peter Robertson Blvd shop. It keeps the Brampton location, category paths, and visit basics together.",
      },
      {
        heading: "Flower Tiers First",
        body:
          "Exotic, Premium, AAA+, AA, and Budget work like the main orbit rings. Shoppers can start with the shelf they want, then compare current strains inside that tier.",
      },
      {
        heading: "Formats Stay Separate",
        body:
          "Pre-rolls, THC Vape, Nic Vape, edibles, concentrates, cigarettes, Magic Stuff, and accessories each deserve a separate lane. That keeps the menu readable for shoppers who already know the format.",
      },
      {
        heading: "Use Guides For Direction",
        body:
          "These guides are for choosing the right path. Use category pages for current selection, product details, and menu changes.",
      },
    ],
    quickLinks: [
      { label: "THC Vape", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
      { label: "Edibles", href: "/items/edibles" },
    ],
  },
  {
    path: "/resources/planet60-flower-tier-guide",
    slug: ["planet60-flower-tier-guide"],
    title: "The Planet 60 Flower Tier Guide",
    metaDescription:
      "Compare The Planet 60 flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget cannabis flower menu paths.",
    eyebrow: "Flower orbit",
    summary:
      "A clearer flower-tier explanation for shoppers comparing quality lane, price lane, and cannabis flower categories at The Planet 60.",
    sections: [
      {
        heading: "Exotic And Premium Orbit",
        body:
          "Exotic and Premium are the high-signal flower lanes for shoppers who want the loudest shelf at The Planet 60. These pages help quality-first shoppers start in the right place.",
      },
      {
        heading: "AAA+ And AA Orbit",
        body:
          "AAA+ and AA sit in the practical middle. They help shoppers compare value and quality before visiting the Peter Robertson Blvd shop.",
      },
      {
        heading: "Budget Orbit",
        body:
          "Budget is the value path for shoppers looking for the lowest-price flower lane. It stays visible so value shoppers can move straight to the right section.",
      },
      {
        heading: "Why The Tiers Matter",
        body:
          "A tiered flower menu lets shoppers pick the shelf first, then compare current strains inside that shelf. It keeps premium, everyday, and value shopping from blending into one noisy list.",
      },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AAA+", href: "/aaa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    path: "/resources/late-night-brampton-orbit",
    slug: ["late-night-brampton-orbit"],
    title: "Late-Night Brampton Cannabis Orbit",
    metaDescription:
      "Plan a late-night Brampton cannabis visit to The Planet 60 with 24-hour store notes, menu shortcuts, flower tiers, vapes, pre-rolls, edibles, and cigarette links.",
    eyebrow: "Late-night orbit",
    summary:
      "A night-shopping guide for The Planet 60 visitors who want fast category decisions before heading to Peter Robertson Blvd.",
    sections: [
      {
        heading: "Use The Menu Like A Control Panel",
        body:
          "Late-night shoppers do not need a maze. The clean path is one main lane, one backup lane, and the visit page for store basics.",
      },
      {
        heading: "Good For Shift Workers",
        body:
          "A 24-hour Brampton cannabis shop can support people outside the normal retail rhythm: night shifts, early starts, and late errands. The guide keeps that use case practical.",
      },
      {
        heading: "Fast Categories",
        body:
          "Flower, pre-rolls, THC Vape, edibles, and concentrates are the fastest high-intent categories to compare before a late visit. Cigarettes and accessories round out the stop for shoppers who need more than cannabis.",
      },
      {
        heading: "Keep It Responsible",
        body:
          "Open 24 Hours does not change ID checks or adult-use expectations. Bring valid 19+ ID, review the menu before leaving, and let the category pages handle current product details.",
      },
    ],
    quickLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Menu", href: "/#menu" },
      { label: "Pre-rolls", href: "/items/prerolls" },
    ],
  },
  {
    path: "/resources/native-smokes-guide",
    slug: ["native-smokes-guide"],
    title: "Native Cigarettes Brampton Guide",
    metaDescription:
      "Find The Planet 60 cigarette and native smoke menu paths in Brampton with Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Backwoods, Grabba, and nicotine pouch notes.",
    eyebrow: "Cigarettes",
    summary:
      "A cigarette counter guide using brands and price lanes present on The Planet 60 menu.",
    sections: [
      {
        heading: "Cigarette Brands On The Menu",
        body:
          "The Planet 60 menu lists cigarette options including Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
      },
      {
        heading: "Listed Price Lanes",
        body:
          "Many native cigarette pack listings on the current menu show $25. The menu also includes 10 x Premium Mix Cigarettes at $3, nicotine pouches, Grabba, Grabba Shaker, and Backwoods listings with their own prices.",
      },
      {
        heading: "Adult Tobacco Boundary",
        body:
          "Smoking and nicotine use carry serious health risks. This page is for adult 19+ menu clarity and store navigation only, and shoppers should check the cigarette category for the current brand mix before visiting.",
      },
      {
        heading: "Pair With The Right Store Path",
        body:
          "Cigarette shoppers may also need accessories, papers, flower, pre-rolls, or vape paths. Keeping those links nearby makes The Planet 60 easier to shop in one Peter Robertson Blvd stop.",
      },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    path: "/resources/value-and-vape-guide",
    slug: ["value-and-vape-guide"],
    title: "Brampton Value Weed And Vape Guide",
    metaDescription:
      "Compare The Planet 60 Budget flower, AA flower, THC Vape, Nic Vape, disposable vape paths, and accessories before visiting in Brampton.",
    eyebrow: "Value and vape",
    summary:
      "A value-first and vape-first guide for shoppers who want practical categories before visiting The Planet 60.",
    sections: [
      {
        heading: "Value Flower Path",
        body:
          "Budget and AA are the simplest starting points for shoppers looking for affordable cannabis in Brampton. These pages let value shoppers start in the right place.",
      },
      {
        heading: "THC Vape Path",
        body:
          "The THC Vape page is for cannabis vape shoppers looking for cartridge, pen, and vape-first formats when listed. Keeping it separate from Nic Vape keeps the menu clearer.",
      },
      {
        heading: "Nic Vape Path",
        body:
          "The Planet 60 menu includes Nic Vape and nicotine pouch lanes. Nicotine products are for adult shoppers only and carry serious health risks, so this guide stays focused on menu location and current product checks.",
      },
      {
        heading: "Accessory Add-Ons",
        body:
          "Accessories connect the value and vape paths with practical add-ons like papers, lighters, batteries, and tools. Use the category pages for current products and this guide as the shopper map.",
      },
    ],
    quickLinks: [
      { label: "Budget", href: "/budget" },
      { label: "THC Vape", href: "/items/vapes" },
      { label: "Nic Vape", href: "/items/vape-disposables" },
    ],
  },
  {
    path: "/resources/magic-stuff-menu-guide",
    slug: ["magic-stuff-menu-guide"],
    title: "Magic Stuff Menu Guide At The Planet 60",
    metaDescription:
      "Use The Planet 60 Magic Stuff guide to find the specialty product category, read labels, and check current menu listings before visiting in Brampton.",
    eyebrow: "Magic Stuff",
    summary:
      "A careful category guide for The Planet 60 specialty listings, focused on labels, menu paths, and current product checks.",
    sections: [
      {
        heading: "Use The Specialty Category",
        body:
          "The Planet 60 has Magic Stuff listings under the specialty category. This guide points shoppers to the category path and keeps item-specific details on the current menu page.",
      },
      {
        heading: "Read Labels And Names Carefully",
        body:
          "Specialty listings can use brand names, package sizes, and item labels that look similar at a glance. Check the product page, package label, and counter details so the item name matches what you meant to browse.",
      },
      {
        heading: "Keep It Menu-Focused",
        body:
          "This page is a navigation guide only. It does not provide dosing instructions, consumption instructions, medical claims, therapeutic claims, effect promises, or safety claims.",
      },
      {
        heading: "Check Current Selection",
        body:
          "Brands and specialty items can rotate. Use the Magic Stuff category page for current listings, and use the contact or FAQ pages for store basics before heading to Peter Robertson Blvd.",
      },
    ],
    quickLinks: [
      { label: "Magic Stuff", href: "/items/magic" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const ALL_RESOURCE_PAGES: ResourceArticle[] = [RESOURCE_HUB, ...RESOURCE_PAGES];
export const RESOURCE_PATHS = ALL_RESOURCE_PAGES.map((page) => page.path);

export function getResourceBySegments(slug: string[] = []) {
  if (slug.length === 0) return RESOURCE_HUB;
  const path = `/resources/${slug.join("/")}`;
  return RESOURCE_PAGES.find((page) => page.path === path);
}

export function getResourceByPath(path: string) {
  return ALL_RESOURCE_PAGES.find((page) => page.path === path);
}
