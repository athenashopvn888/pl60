export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: { heading: string; body: string }[];
  quickLinks: { label: string; href: string }[];
};

export const RESOURCE_BANNER = "/banners/welcome_banner.webp";
export const RESOURCE_CANONICAL = "https://www.theplanet60.com/resources";

export const RESOURCE_PAGES: ResourceArticle[] = [
  {
    slug: "peter-robertson-visit-guide",
    title: "Peter Robertson Visit Guide",
    metaDescription: "Plan a The Planet 60 visit at 1098 Peter Robertson Blvd #10 in Brampton with menu and route-friendly notes.",
    eyebrow: "Visit guide",
    summary: "A quick local guide for shoppers heading to The Planet 60 on Peter Robertson Blvd.",
    sections: [
      { heading: "Set The Orbit", body: "Start with the homepage menu tiles, then move into the exact category you need. The goal is a clean orbit: flower tiers first, then format lanes." },
      { heading: "Use The 24-Hour Window", body: "The Planet 60 is listed as open 24 hours. That makes it useful for early, late, and in-between Brampton visits when a standard retail schedule does not fit." },
      { heading: "Arrive Ready", body: "Bring valid 19+ ID and keep one backup option ready. The menu can rotate, so a second category keeps the visit smooth." },
    ],
    quickLinks: [
      { label: "Menu Hub", href: "/#menu" },
      { label: "GBP Landing Page", href: "/weed-dispensary-brampton/" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "springdale-menu-guide",
    title: "Springdale Menu Guide",
    metaDescription: "Use The Planet 60 Springdale menu guide to compare flower tiers, edibles, vapes, pre-rolls, and concentrates.",
    eyebrow: "Menu guide",
    summary: "A practical route through the P60 menu for shoppers around Peter Robertson and Springdale.",
    sections: [
      { heading: "Flower Control Panel", body: "Exotic, Premium, AAA+, AA, and Budget make the flower menu easy to scan. Pick the tier first, then compare the strains inside that lane." },
      { heading: "Format Control Panel", body: "Pre-rolls, THC vapes, nic vapes, edibles, concentrates, cigarettes, and accessories all sit in their own paths so the menu does not feel like a maze." },
      { heading: "Resource Pages Are Shortcuts", body: "These guides help shoppers choose the right page. They do not replace current in-store selection or the live category pages." },
    ],
    quickLinks: [
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
      { label: "Edibles", href: "/items/edibles" },
    ],
  },
  {
    slug: "planet60-flower-tier-guide",
    title: "Planet 60 Flower Tier Guide",
    metaDescription: "Understand The Planet 60 flower tiers from Exotic and Premium to AAA+, AA, and Budget.",
    eyebrow: "Flower tiers",
    summary: "A tier-by-tier orbit through the P60 flower shelf.",
    sections: [
      { heading: "Upper Orbit", body: "Exotic and Premium sit at the top for shoppers who want the strongest shelf signal and are choosing quality first." },
      { heading: "Middle Orbit", body: "AAA+ and AA are the useful middle lanes. They make it easier to compare price and strength without overthinking the whole menu." },
      { heading: "Value Orbit", body: "Budget keeps the value path visible for shoppers who want a straightforward spend-first category." },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AAA+", href: "/aaa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    slug: "late-night-brampton-orbit",
    title: "Late-Night Brampton Orbit",
    metaDescription: "A late-night The Planet 60 shopping guide for 24-hour Brampton cannabis visits.",
    eyebrow: "Late night",
    summary: "For night-shift shoppers and anyone planning a Brampton cannabis stop outside normal store hours.",
    sections: [
      { heading: "Choose Before You Go", body: "Late-night visits are easiest when you know the category first. Flower, pre-rolls, vapes, edibles, and concentrates each have their own page." },
      { heading: "Keep The Visit Simple", body: "Use the menu like a control panel: one primary lane, one backup lane, and a quick stop at FAQ or Contact if you need store basics." },
      { heading: "Adult-Use Basics", body: "Bring valid government ID. Open 24 hours does not change age verification or responsible-use expectations." },
    ],
    quickLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Menu", href: "/#menu" },
      { label: "Pre-Rolls", href: "/items/prerolls" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Smokes Guide",
    metaDescription: "Find The Planet 60 cigarette category and native smoke resource links before visiting in Brampton.",
    eyebrow: "Cigarettes",
    summary: "A short guide for cigarette category browsing beside the main cannabis menu.",
    sections: [
      { heading: "Use The Cigarette Lane", body: "The cigarette category gives native smoke shoppers a direct route. Availability and brand mix can change, so confirm current options in store." },
      { heading: "Pair With Accessories", body: "If you need papers, lighters, or small add-ons, check accessories before visiting so the trip stays organized." },
      { heading: "Keep It Current", body: "Resource pages explain the path. The category page and counter are the better places for current details." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Visit Page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    slug: "value-and-vape-guide",
    title: "Value And Vape Guide",
    metaDescription: "Compare The Planet 60 Budget, AA, THC vape, nic vape, and accessories paths before visiting.",
    eyebrow: "Format guide",
    summary: "For shoppers who want value lanes and vape categories without drifting through the whole site.",
    sections: [
      { heading: "Value First", body: "Budget and AA are the simplest flower lanes when price matters most. Use those pages before comparing higher tiers." },
      { heading: "Vape First", body: "THC vapes and nic vapes have separate routes. That keeps cannabis vape browsing distinct from disposable nicotine vape browsing." },
      { heading: "Support Gear", body: "Accessories can complete the trip if you need tools, papers, or related add-ons." },
    ],
    quickLinks: [
      { label: "Budget", href: "/budget" },
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Nic Vapes", href: "/items/vape-disposables" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
