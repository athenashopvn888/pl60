import type { ResourceArticle, ResourceBlock } from "./resourceData";

export const LIVE_RESIN_MARKDOWN = `# Live resin vs live rosin: two label words, two different processes

Last checked: October 25, 2026
"Live resin" and "live rosin" differ by one letter on a label, so they're easy to mix up. They aren't the same thing, though. The words describe **how an extract was made**, and the methods behind them have almost nothing in common. This page covers what each term refers to, what the shared word "live" means, and what a Canadian label will and won't tell you. It's for adults 19+, and it describes processes only. It doesn't say either one is better.

## First, the word they share: "live"

In cannabis product names, "live" points to the starting material. The plant is harvested and **frozen while still fresh** instead of being dried and cured first. The idea is to capture the plant as it was at harvest. Both live resin and live rosin start this way.

After that, the two paths split completely.

## How each one is made

| Step | Live resin | Live rosin |
|---|---|---|
| Starting material | Fresh-frozen plant | Fresh-frozen plant |
| Middle stage | Goes straight into extraction | First washed in ice-cold water and filtered to make ice-water hash, then dried |
| How the extract is separated | A hydrocarbon solvent (such as butane or propane) dissolves the plant's resin, then the solvent is purged off | Heat and pressure squeeze oil out of the hash, typically in a press with warm plates and filter bags |
| Chemical solvent? | Yes, during production | No, it's a solventless method |
| Texture words you may see | Sauce, badder, diamonds, sugar | Jam, badder, "cold cure" |

### Live resin, step by step

1. Fresh plants go into a freezer soon after harvest.
2. At the processing facility, the frozen material is packed into a closed-loop extraction system.
3. A chilled hydrocarbon solvent runs through it and carries the resin compounds away from the plant matter.
4. The solvent is recovered and the remaining extract is purged.
5. The extract is worked into a texture, for example by letting it separate into crystals and a runny layer.

### Live rosin, step by step

1. Fresh plants are frozen, as above.
2. The frozen material is gently agitated in icy water, so the resinous heads break off the plant.
3. The water is filtered through a series of mesh screens, and what's collected is freeze-dried or air-dried into hash.
4. That hash is wrapped in a fine filter bag and pressed between heated plates.
5. The oil that seeps out is collected and may be rested (cured) to change its texture.

The key difference, then: **resin uses a solvent to pull compounds out; rosin uses water, then heat and pressure, with no solvent at all.**

## What these terms are not

- **They're not rows in the federal equivalency table.** The Cannabis Act's Schedule 3 lists classes such as dried cannabis, fresh cannabis, solids, non-solids, beverages and cannabis concentrates. Neither "live resin" nor "live rosin" appears there. They're names a producer chooses to print.
- **They're not THC numbers.** The process name tells you nothing about how much THC or CBD is in the package. The label's total THC and total CBD figures are what tell you that.
- **They're not a grade.** Neither word means one extract is purer, more refined or better than another. They describe a method, and that's all.

## Reading a Canadian extract label

When you pick up any extract package, these are the details to find, whatever the product name says:

- **Product class** (for example, cannabis extract).
- **Total THC and total CBD amounts**, as printed by the producer.
- **Net weight** of the product in the container.
- **Packaged-on date.**
- **Producer name.**

Two legal points apply to both live resin and live rosin, because both are extracts:

**Per-package limit.** Ontario's cannabis laws page says extracts may contain up to 1,000 mg of THC per package. The process name doesn't change that ceiling.

**How they count toward your 30 grams.** In public, Ontario lets adults carry at most 30 g, measured in dried terms. The federal Cannabis Act's Schedule 3 sets the conversion for **cannabis concentrates** at 0.25 grams to 1 gram of dried. Put simply, 7.5 grams of concentrate reaches the full 30-gram public limit on its own. Both extract types fall under that concentrate row, since the schedule has no separate line for live products.

## Quick answers

**Is live rosin made with chemicals?**
No chemical solvent is used to make rosin. It's made with ice water, filtering, heat and pressure.

**Why are live products labelled differently from regular resin or rosin?**
The word "live" only signals that the source plant was frozen fresh instead of dried first. The same extraction method applied to dried material wouldn't carry "live" in the name.

**Is one legal and the other not?**
Neither word is a legal category. Both products are extracts, so the same extract rules apply to each, including Ontario's 1,000 mg THC per package ceiling.

**Do they count differently toward the possession limit?**
Not under Schedule 3. Both are counted as cannabis concentrates.

The Planet 60 is at 1098 Peter Robertson Blvd in Brampton, and store details are on our [visit page](/visit). The Planet 60 is for adults 19 and over. Staff ask for ID from anyone who looks under 25.

## More from our resource pages

Browse our other plain-language guides on our [resources page](/resources).`;

const META_DESCRIPTION =
  "\"Live resin\" and \"live rosin\" differ by one letter on a label, so they're easy to mix up.";

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isSeparator(cells: string[]): boolean {
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell));
}

export function parseLiveResinMarkdown(markdown: string): {
  title: string;
  lastChecked: string;
  blocks: ResourceBlock[];
} {
  if (markdown.includes("3.5")) throw new Error("live resin article must not contain 3.5");
  const links = [...markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  if (links.some((href) => href !== "/visit" && href !== "/resources")) {
    throw new Error("live resin article has an unexpected link");
  }
  const lines = markdown.split("\n");
  const titleLine = lines[0] ?? "";
  if (!titleLine.startsWith("# ")) throw new Error("live resin article is missing its title");
  const title = titleLine.slice(2);
  let lastChecked = "";
  const blocks: ResourceBlock[] = [];
  let index = 1;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    if (line.startsWith("Last checked: ")) {
      lastChecked = line.slice("Last checked: ".length);
      index += 1;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      index += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      index += 1;
      continue;
    }
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      const parsed = tableLines.map(splitRow).filter((cells) => !isSeparator(cells));
      const headers = parsed[0];
      const rows = parsed.slice(1);
      if (!headers || rows.length === 0) throw new Error("live resin article table is empty");
      blocks.push({ type: "table", headers, rows });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^-\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }
    blocks.push({ type: "p", text: line });
    index += 1;
  }
  if (!lastChecked) throw new Error("live resin article is missing Last checked");
  if (blocks.length === 0) throw new Error("live resin article body is empty");
  return { title, lastChecked, blocks };
}

const parsed = parseLiveResinMarkdown(LIVE_RESIN_MARKDOWN);
if (META_DESCRIPTION.length > 155) throw new Error("live resin meta description is too long");

export const LIVE_RESIN_ARTICLE: ResourceArticle = {
  path: "/resources/live-resin-vs-live-rosin",
  slug: ["live-resin-vs-live-rosin"],
  title: parsed.title,
  metaDescription: META_DESCRIPTION,
  eyebrow: "Extract processes",
  summary: META_DESCRIPTION,
  lastChecked: parsed.lastChecked,
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  sections: [],
  quickLinks: [],
  blocks: parsed.blocks,
};
