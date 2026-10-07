import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  PL601: {
    headerImage: "/tv-theme/pl601/header.webp",
    backgroundImage: "/tv-theme/pl601/background.webp",
    cornerLeft: "/tv-theme/pl601/corner-left.png",
    cornerRight: "/tv-theme/pl601/corner-right.png",
    primary: "#07100A",
    accent: "#74F028",
    glow: "rgba(116,240,40,.44)",
    cardBorder: "rgba(199,255,170,.92)",
    headerText: "#FFFFFF",
    sloganLeft: "ORBITING GREAT QUALITY",
    sloganRight: "PLANET 60",
    footerLeft: "THE PLANET 60",
    footerRight: "PREMIUM SELECTION IN ORBIT",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}