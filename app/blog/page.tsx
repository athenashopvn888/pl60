import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — The Planet 60 | Brampton",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from The Planet 60 in Brampton.",
  alternates: {
    canonical: "https://theplanet60.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
