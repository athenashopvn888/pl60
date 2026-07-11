import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "The Planet 60 Blog | Cannabis Menu Guides",
  description: "Read The Planet 60 cannabis menu guides, flower tier notes, and local store checks for Brampton shoppers.",
  alternates: {
    canonical: "https://www.theplanet60.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
