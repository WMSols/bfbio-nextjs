/**
 * Strapi API client. Wired up when CMS integration starts.
 */

const STRAPI_URL = process.env.STRAPI_URL;

export async function fetchStrapi<T>(path: string): Promise<T | null> {
  void path;
  void STRAPI_URL;
  return null;
}
