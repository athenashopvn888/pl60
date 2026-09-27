import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Planet 60 In-Store Accessories Display",
  description: "Operational in-store accessories menu display for The Planet 60.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
