import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: BlocksContent;
  image?: { url: string };
}
