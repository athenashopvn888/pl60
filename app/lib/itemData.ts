export interface ItemDetails {
  attributes: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  details: string;
}

export function getItemData(category: string, name: string): ItemDetails {
  const categoryLabel = category.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());

  return {
    attributes: [
      { emoji: "", label: categoryLabel },
      { emoji: "", label: "Package Details" },
    ],
    description: `${name} is listed in the ${categoryLabel} category at The Planet 60. Check the current menu and product package for item details before visiting 1098 Peter Robertson Blvd #10.`,
    metaDescription: `Browse ${name} in the ${categoryLabel} category at The Planet 60 in Brampton. Check the current menu before visiting.`,
    details: "Review the product label and package details before purchase.",
  };
}
