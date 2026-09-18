import type { ESGInitiative } from "@/data/esgData";
import ESGInitiativeCard from "./ESGInitiativeCard";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

interface ESGInitiativeGridProps {
  filtered: ESGInitiative[];
}

export default function ESGInitiativeGrid({
  filtered,
}: ESGInitiativeGridProps) {
  return (
    <>
      <AnimateIn
        stagger
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
