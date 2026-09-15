"use client";


import { useProducts } from "./hooks/useProducts";
import { useCategories } from "./hooks/useCategories";
import { useProductFilters } from "./hooks/useProductFilters";

import ProductSearch from "./components/ProductSearch";
import ProductFilterTabs from "./components/ProductFilterTabs";
import CategoryPills from "./components/CategoryPills";
import ProductGrid from "./components/ProductGrid";
import ProductsSkeleton from "./components/ProductsSkeleton";
import ProductPagination from "./components/ProductPagination";
import HeroSection from "@/components/layout/HeroSection";

export default function ProductListClient() {
  const filters = useProductFilters();

  const {
    categories,
    isLoading: isCategoriesLoading,
  } = useCategories();

  const {
    products,
    pageCount,
    currentPage,
    total,
    isLoading,
    isError,
  } = useProducts(
    filters.effectiveCategory,
    filters.effectiveFilterMode,
    filters.page,
    filters.search,
  );

  return (
    <div className="sm:pt-10 pt-20">
      <HeroSection
        title="Our Medicines"
        subtitle="Explore our comprehensive range of pharmaceutical products."
        backgroundImage={"/images/hero/medicines.jpg"}
      />

      <section className="py-12">
        <div className="container mx-auto">
          

          <ProductFilterTabs
            activeMode={
              filters.effectiveFilterMode
            }
            onPrescribed={
              filters.setPrescribed
            }
            onCategory={
              filters.setCategoryMode
            }
            onAz={filters.setAzMode}
          />

          {filters.effectiveFilterMode ===
            "category" && (
            <CategoryPills
              categories={categories}
              selectedCategory={
                filters.effectiveCategory
              }
              onSelect={
                filters.toggleCategory
              }
              isLoading={
                isCategoriesLoading
              }
            />
          )}

          {isError && (
            <p className="text-center text-destructive py-8">
              Failed to load products.
              Please try again.
            </p>
          )}

          {!isError && isLoading && (
            <ProductsSkeleton />
          )}

          {!isError && !isLoading && (
            <>
              <ProductGrid
                products={products}
              />

              <ProductPagination
                currentPage={
                  currentPage
                }
                pageCount={pageCount}
                total={total}
                onPageChange={
                  filters.setPage
                }
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}