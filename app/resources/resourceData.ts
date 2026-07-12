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
    title: "Peter Robertson Blvd 24-Hour Visit Guide",
    metaDescription: "Plan a visit to The Planet 60 at 1098 Peter Robertson Blvd #10 in Brampton with 24-hour cannabis menu, flower, vape, edible, concentrate, cigarette, and route notes.",
    eyebrow: "Peter Robertson",
    summary: "A Brampton visit guide for The Planet 60 shoppers heading toward Peter Robertson Blvd, Bramalea, and the Springdale side of the city.",
    sections: [
      { heading: "Set The Route Before Lift-Off", body: "The Planet 60 is built around a strong Peter Robertson Blvd identity, so the resource hub should help shoppers find the right page before they leave. Start with the menu hub, choose the product lane, then use the visit page for store basics and local Brampton context." },
      { heading: "Use The 24-Hour Advantage", body: "The site positions The Planet 60 as open 24 hours, which matters for late-night, early-morning, and after-shift Brampton visits. The copy should support those searches with useful planning notes instead of generic filler." },
      { heading: "Pick One Main Lane", body: "Flower tiers, THC vapes, edibles, pre-rolls, concentrates, cigarettes, and accessories each need a clean doorway. A shopper searching for a Brampton cannabis dispensary near Peter Robertson should be able to choose the lane fast." },
      { heading: "Bring ID And A Backup", body: "The live menu can rotate, so arrive with one primary category and one backup. Valid 19+ government ID is still part of every adult-use cannabis visit, even when the store is open around the clock." },
    ],
    quickLinks: [
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
      { label: "Menu hub", href: "/#menu" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "springdale-menu-guide",
    title: "Springdale Brampton Cannabis Menu Guide",
    metaDescription: "Use The Planet 60 Springdale Brampton cannabis menu guide to compare flower tiers, THC vapes, edibles, pre-rolls, concentrates, cigarettes, and accessories.",
    eyebrow: "Springdale menu",
    summary: "A sharper menu map for shoppers around Springdale, Peter Robertson Blvd, and nearby Brampton routes.",
    sections: [
      { heading: "Use The Local Area", body: "This guide is built for Springdale cannabis menu searches. It names the Brampton area, the Peter Robertson Blvd location, and the useful product categories while keeping the shopper path simple." },
      { heading: "Flower Tiers First", body: "Exotic, Premium, AAA+, AA, and Budget work like the main orbit rings. Shoppers who search top-shelf flower, premium weed, or cheap weed in Brampton can land on a category that matches intent instead of a flat product list." },
      { heading: "Formats Stay Separate", body: "Pre-rolls, THC vapes, nic vapes, edibles, concentrates, cigarettes, magic items, and accessories should remain separate lanes. That keeps the menu readable for shoppers who already know the format they want." },
      { heading: "Use Guides For Direction", body: "These guides are for choosing the right path, not replacing live inventory. Use them to understand the store layout, then open the category pages for current selection." },
    ],
    quickLinks: [
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
      { label: "Edibles", href: "/items/edibles" },
    ],
  },
  {
    slug: "planet60-flower-tier-guide",
    title: "The Planet 60 Brampton Flower Tier Guide",
    metaDescription: "Compare The Planet 60 flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget cannabis flower menu paths.",
    eyebrow: "Flower orbit",
    summary: "A more useful flower-tier explanation for shoppers comparing quality, price, and cannabis flower categories at The Planet 60.",
    sections: [
      { heading: "Exotic And Premium Orbit", body: "Exotic and Premium are the high-signal flower lanes for shoppers who want top-shelf cannabis flower in Brampton. These pages should speak to quality-first shoppers without making fixed claims about a strain that may rotate." },
      { heading: "AAA+ And AA Orbit", body: "AAA+ and AA sit in the practical middle. They help shoppers compare value and quality before visiting the Peter Robertson Blvd shop, especially when the goal is reliable flower without jumping straight to the highest tier." },
      { heading: "Budget Orbit", body: "Budget is the value path for shoppers searching cheap weed in Brampton or a lower-spend flower option. It stays visible so value shoppers can move straight to the right lane." },
      { heading: "Why The Tiers Matter", body: "The tier system gives The Planet 60 search coverage for premium flower, value flower, and Brampton cannabis menu intent while still keeping the shopper experience simple." },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AAA+", href: "/aaa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    slug: "late-night-brampton-orbit",
    title: "Late-Night Brampton Cannabis Orbit",
    metaDescription: "Plan a late-night Brampton cannabis visit to The Planet 60 with 24-hour store notes, menu shortcuts, flower tiers, vapes, pre-rolls, edibles, and cigarette links.",
    eyebrow: "Late-night orbit",
    summary: "A night-shopping guide for The Planet 60 visitors who want fast category decisions before heading to Peter Robertson Blvd.",
    sections: [
      { heading: "Use The Menu Like A Control Panel", body: "Late-night shoppers do not need a maze. The clean path is one main lane, one backup lane, and the visit page for store basics. That could mean Budget flower plus pre-rolls, THC vapes plus accessories, or cigarettes plus add-ons." },
      { heading: "Good For Shift Workers", body: "A 24-hour Brampton cannabis shop can serve people outside the normal retail rhythm: night shifts, early starts, and late errands. The guide keeps that use case practical and easy to scan." },
      { heading: "Fast Categories", body: "Flower, pre-rolls, THC vapes, edibles, and concentrates are the fastest high-intent categories to compare before a late visit. Cigarettes and accessories round out the trip for shoppers who want more than cannabis." },
      { heading: "Keep It Responsible", body: "Open 24 hours does not change ID checks or adult-use expectations. Bring valid 19+ ID, review the menu before leaving, and let the live category pages handle current product detail." },
    ],
    quickLinks: [
      { label: "FAQ", href: "/faq" },
      { label: "Menu", href: "/#menu" },
      { label: "Pre-rolls", href: "/items/prerolls" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Cigarettes Brampton Guide",
    metaDescription: "Find The Planet 60 native cigarettes in Brampton with cigarette category links, accessories, Peter Robertson Blvd visit notes, and cannabis menu shortcuts.",
    eyebrow: "Cigarettes",
    summary: "A dedicated cigarette resource for shoppers searching native cigarettes Brampton near Peter Robertson Blvd and Springdale.",
    sections: [
      { heading: "Give Cigarette Shoppers A Direct Lane", body: "The cigarette category should not feel like an afterthought. This page gives native cigarette shoppers a direct path to /items/cigarettes while still keeping the full Planet 60 cannabis menu close by." },
      { heading: "Use Peter Robertson Keywords", body: "The page now connects the cigarette lane to The Planet 60 location at 1098 Peter Robertson Blvd #10, Brampton. That gives the resource a real local target instead of repeating the same generic copy used on other stores." },
      { heading: "Pair With Accessories", body: "Cigarette shoppers often need papers, lighters, or other small add-ons. Accessories belong beside the cigarette link so a shopper can plan the whole stop in one pass." },
      { heading: "Keep Selection Current", body: "Exact tobacco brand mix and carton availability can change. Use this guide for the native cigarettes Brampton path, then check the category page or store counter for current selection." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    slug: "value-and-vape-guide",
    title: "Brampton Value Weed And Vape Guide",
    metaDescription: "Compare The Planet 60 Budget flower, AA flower, THC vapes, nic vapes, disposable vape paths, and accessories before visiting in Brampton.",
    eyebrow: "Value and vape",
    summary: "A value-first and vape-first guide for shoppers who want practical categories before visiting The Planet 60.",
    sections: [
      { heading: "Value Flower Path", body: "Budget and AA are the simplest starting points for shoppers searching affordable cannabis or cheap weed in Brampton. These pages let The Planet 60 speak to value intent without flattening the rest of the flower tiers." },
      { heading: "THC Vape Path", body: "The THC vape page is for cannabis vape shoppers looking for cartridges, pens, and vape-first products when listed. Keeping it separate from nic vapes prevents mixed intent and makes the menu clearer." },
      { heading: "Nic Vape Path", body: "Nic vapes have their own route because disposable nicotine vape shoppers are not always cannabis shoppers. Keeping the lane separate makes the menu easier to understand." },
      { heading: "Accessory Add-Ons", body: "Accessories connect the value and vape paths with practical add-ons like papers, lighters, batteries, and tools. Use the live category pages for current products and this resource as the shopper map." },
    ],
    quickLinks: [
      { label: "Budget", href: "/budget" },
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Nic vapes", href: "/items/vape-disposables" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}