import HeroSection from "@/components/layout/HeroSection";
import { shopHero } from "@/data/shop";
import ComingSoonBanner from "./components/ComingSoonBanner";
import FeaturedProductsSection from "./components/FeaturedProductsSection";

export const metadata = {
  title: "Shop",
  description:
    "Discover a growing selection of products, available directly from BF Biosciences",
};

export default function ShopPage() {
  return (
    <div className="bg-[#F7F7F7]">
      <HeroSection
        title={shopHero.title}
        subtitle={shopHero.subtitle}
        backgroundImage={shopHero.backgroundImage}
        titleSize="small"
        overlayClassName="bg-black/25"
      />
      <FeaturedProductsSection />
      <ComingSoonBanner />
    </div>
  );
}
