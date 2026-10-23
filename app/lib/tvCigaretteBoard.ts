/** TV2 card list. The cigarettes card is included only while the feed TV flag is on.
 *  When the flag is off the card is omitted, which is how this board already behaves.
 */
export function tv2CardsForCigFlag<T extends { id: string }>(cards: readonly T[], tvOn: boolean): T[] {
  if (tvOn) return [...cards];
  return cards.filter((card) => card.id !== "CIGARETTES");
}
