/**
 * Shopify Storefront API client. Wired up when commerce integration starts.
 */

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;

export async function fetchShopify<T>(query: string): Promise<T | null> {
  void query;
  void SHOPIFY_STORE_DOMAIN;
  return null;
}
