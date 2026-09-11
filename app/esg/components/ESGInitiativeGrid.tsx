import type { ESGInitiative } from "@/data/esgData";
import ESGInitiativeCard from "./ESGInitiativeCard";

interface ESGInitiativeGridProps {
  filtered: ESGInitiative[];
}

export default function ESGInitiativeGrid({
  filtered,
}: ESGInitiativeGridProps) {
  return (
    <>
      <div id="initiative-grid" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 scroll-mt-72 sm:scroll-mt-48">
        {filtered.map((initiative) => (
          <ESGInitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">
          No initiatives in this category yet.
        </p>
      )}
    </>
  );
}
