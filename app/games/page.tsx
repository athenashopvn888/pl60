import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — The Planet 60 | Brampton",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at The Planet 60.",
  alternates: {
    canonical: "https://www.theplanet60.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
