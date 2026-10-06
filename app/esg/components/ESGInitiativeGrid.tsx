import type { ESGCategory, ESGInitiative } from "@/data/esgData";
import ESGInitiativeCard from "./ESGInitiativeCard";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

interface ESGInitiativeGridProps {
  filtered: ESGInitiative[];
  activeCategory: ESGCategory | "all";
}

export default function ESGInitiativeGrid({
  filtered,
  activeCategory,
}: ESGInitiativeGridProps) {
  return (
    <>
      <AnimateIn
        // Remount on filter change so cards aren't stuck at opacity 0 after
        // a previous in-view cycle, and trigger as soon as any of the grid
        // is visible (tall "All" grids used to need ~15% height in view).
        key={activeCategory}
        stagger
        amount="some"
        margin="0px"
        id="initiative-grid"
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 scroll-mt-72 sm:scroll-mt-48 sm:px-10"
      >
        {filtered.map((initiative) => (
          <AnimateInItem key={initiative.id} className="h-full">
            <ESGInitiativeCard initiative={initiative} />
          </AnimateInItem>
        ))}
      </AnimateIn>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">
          No initiatives in this category yet.
        </p>
      )}
    </>
  );
}
