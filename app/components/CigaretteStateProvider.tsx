"use client";

import { createContext, useContext } from "react";

export type CigaretteWording = {
  bannerText: string;
  promoBrands: string;
  tv2BoardTitle: string;
  wrapsTitle: string;
  tickerLine1: string;
  priceTwoPack: string;
  priceCarton: string;
  priceBelmont: string;
  priceBB2Pack: string;
};

/** Current on-screen copy. The sheet path uses this when a feed omits wording. */
export const CIG_WORDING_FALLBACK: CigaretteWording = {
  bannerText: "2 packs $5 mix & match · $25 carton",
  promoBrands: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack",
  tv2BoardTitle: "🚬 CIGARETTES",
  wrapsTitle: "🚬 WRAPS & POUCHES",
  tickerLine1: "CIGARETTES 2 PACK $5 MIX MATCH !",
  priceTwoPack: "2 PACKS $5",
  priceCarton: "$25 CARTON",
  priceBelmont: "$10/pack",
  priceBB2Pack: "2 packs $5",
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

const OFF: PublicCigaretteState = {
  web: false,
  tv: false,
  wording: CIG_WORDING_FALLBACK,
};

const CigaretteStateContext = createContext<PublicCigaretteState>(OFF);

export default function CigaretteStateProvider({
  value,
  children,
}: {
  value: PublicCigaretteState;
  children: React.ReactNode;
}) {
  return <CigaretteStateContext.Provider value={value}>{children}</CigaretteStateContext.Provider>;
}

export function useCigaretteState(): PublicCigaretteState {
  return useContext(CigaretteStateContext);
}
