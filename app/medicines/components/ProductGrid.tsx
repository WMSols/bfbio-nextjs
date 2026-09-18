import ProductCard from "./ProductCard";
import type { StrapiProduct } from "@/types/strapi";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

interface ProductGridProps {
  products: StrapiProduct[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      <AnimateIn stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <AnimateInItem
            key={product.documentId ?? product.id}
            className="h-full"
          >
            <ProductCard product={product} />
          </AnimateInItem>
        ))}
      </AnimateIn>
      {products.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No products found matching your criteria.
        </p>
      )}
    </>
  );
}
