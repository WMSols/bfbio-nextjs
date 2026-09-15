import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { StrapiProductCategory } from "@/types/strapi";

interface CategoryPillsProps {
  categories: StrapiProductCategory[];
  selectedCategory: string;
  onSelect: (slug: string) => void;
  isLoading: boolean;
}

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
  isLoading,
}: CategoryPillsProps) {
 

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {isLoading ? (
        <span className="text-sm text-muted-foreground">
          Loading categories…
        </span>
      ) : (
        <>
          {categories.map((cat) => (
            <Button
              key={cat.documentId ?? cat.id}
              variant={
                selectedCategory
                  ? cat.slug === selectedCategory.split(" ")[0] ||
                    cat.name
                      .toLocaleLowerCase()
                      .includes(
                        selectedCategory.split(" ")[0].toLocaleLowerCase(),
                      )
                    ? "default"
                    : "outline"
                  : "outline"
              }
              size="sm"
              className="rounded-full text-xs capitalize"
              onClick={() => onSelect(cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
        </>
      )}
    </div>
  );
}
