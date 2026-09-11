// app/board-of-directors/page.tsx
import { getBoardOfDirectors } from "@/lib/strapi";
import { sortBoardOfDirectors } from "./lib/getSortedDirectors"; 
import BoardMemberCards from "./components/BoardMemberCards";
import HeroSection from "@/components/layout/HeroSection";

export default async function BoardOfDirectorsPage() {
  // 1. Fetch the raw data (Server-side)
  const { data: rawDirectors } = await getBoardOfDirectors();

  // 2. Sort the data (Server-side)
  const sortedDirectors = rawDirectors.length > 0 ?  sortBoardOfDirectors(rawDirectors) : [] ;

  // 3. Pass the clean, sorted data to the Client Component
  return (
    <>
    <HeroSection
    title="Meet the Board"
    backgroundImage="/images/banner-bg.webp"
    overlayClassName="bg-black/30"
   />
      <BoardMemberCards members={sortedDirectors} />
      </>
  );
}