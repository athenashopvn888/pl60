/** Routes where the mobile action bar must not render. */
export const MOBILE_ACTION_BAR_HIDDEN = ["/tv", "/tv2"] as const;

export function hidesMobileActionBar(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return (MOBILE_ACTION_BAR_HIDDEN as readonly string[]).includes(path);
}
