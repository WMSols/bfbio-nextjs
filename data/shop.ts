export type ShopSortId = "featured" | "price-asc" | "price-desc";

export type ShopSortOption = {
  id: ShopSortId;
  label: string;
};

export type ShopProduct = {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  compareAtPrice?: number;
  href: string;
  featured?: boolean;
};

export const shopHero = {
  title: "Find the Right Product for You",
  subtitle:
    "Discover a growing selection of products, available directly from BF Biosciences",
  backgroundImage: "/images/shop/hero.png",
};

export const shopHighlight = {
  title: "Wear SIBIONICS, Know your glucose, Improve your health",
  highlight: "SIBIONICS",
  description:
    "Turn continuous glucose data into meaningful insights that support healthier habits and better everyday decisions",
  image: "/images/shop/featured-sibionics.png",
  imageAlt: "Person applying a SIBIONICS continuous glucose monitor",
  href: "/shop/sibionics-cgm",
};

export const shopSortOptions: ShopSortOption[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

export const shopProducts: ShopProduct[] = [
  {
    id: "sibionics-gs1-cgm",
    brand: "SIBIONICS",
    name: "SIBIONICS GS1 CGM",
    description: "Continuous Glucose Monitoring System",
    image: "/images/shop/sibionics-gs1.png",
    imageAlt: "SIBIONICS GS1 Continuous Glucose Monitoring System",
    price: 12750,
    compareAtPrice: 15000,
    href: "/shop/sibionics-cgm/product",
    featured: true,
  },
];

export const shopComingSoon = {
  title: "More Products, Coming Soon",
};

export function formatPkr(amount: number) {
  return `Rs. ${amount.toLocaleString("en-US")}`;
}

export function getDiscountPercent(price: number, compareAtPrice: number) {
  if (compareAtPrice <= price) return 0;
  return Math.round((1 - price / compareAtPrice) * 100);
}

export function getSortedProducts(
  products: ShopProduct[],
  sortId: ShopSortId,
) {
  const sorted = [...products];

  if (sortId === "price-asc") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sortId === "price-desc") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}
