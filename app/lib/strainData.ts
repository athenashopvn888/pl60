interface StrainDetails {
  attributes: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  _thc: string
): StrainDetails {
  const typeLabel = type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierLabel = tier || "flower";

  return {
    attributes: [
      { emoji: "", label: typeLabel },
      { emoji: "", label: tierLabel },
    ],
    description: `${name} is listed as a ${typeLabel.toLowerCase()} flower item in the ${tierLabel} tier at The Planet 60. Check the current menu for price and package details before visiting 1098 Peter Robertson Blvd #10.`,
    metaDescription: `Browse ${name}, a ${typeLabel.toLowerCase()} flower item in the ${tierLabel} tier at The Planet 60 in Brampton. Check the current menu before visiting.`,
  };
}
