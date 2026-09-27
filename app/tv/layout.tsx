import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Planet 60 In-Store Flower Display",
  description: "Operational in-store flower menu display for The Planet 60.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
