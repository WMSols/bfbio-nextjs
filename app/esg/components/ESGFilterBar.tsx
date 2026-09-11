import {
  esgCategories,
  type ESGCategory,
  esgInitiativesData,
} from "@/data/esgData";
import FilterPill from "./FilterPill";

interface ESGFilterBarProps {
  activeCategory: ESGCategory | "all";
  onCategoryChange: (category: ESGCategory | "all") => void;
  countFor: (category: ESGCategory) => number;
}

export default function ESGFilterBar({
  activeCategory,
  onCategoryChange,
  countFor,
}: ESGFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <FilterPill
        label="All"
        active={activeCategory === "all"}
        count={esgInitiativesData.length}
        onClick={() => onCategoryChange("all")}
      />
      {esgCategories.map(({ key, label }) => (
        <FilterPill
          key={key}
          label={label}
          active={activeCategory === key}
          count={countFor(key)}
          onClick={() => onCategoryChange(activeCategory === key ? "all" : key)}
        />
      ))}
    </div>
  );
}
