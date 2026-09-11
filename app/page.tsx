import HeroSection from "@/components/layout/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ProductSearchSection from "@/components/sections/ProductSearchSection";
import TherapeuticsGrid from "@/components/sections/TherapeuticsGrid";
import ArticlesGridClient from "@/components/sections/ArticlesGridClient";
import BannerCard from "@/components/shared/BannerCard";
import CTABanner from "@/components/shared/CTABanner";
import { missionData } from "@/data/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection title={<span>We Build <strong>Biopharmaceutical</strong> Solutions</span>}
      backgroundVideo="/home-hero-video.mov" overlayClassName="bg-black/50" titleSize="small" />
      <TherapeuticsGrid />
      <MissionSection {...missionData} />
      <ProductSearchSection description={<span>Our portfolio of more than 140 products reflects<br className="hidden md:block"/> our unwavering commitment to putting patients<br className="hidden md:block"/> first through quality and innovation.</span>} />
      <div className="flex flex-col gap-16 py-16">
      <BannerCard title={<span>We improve lives<br className="hidden md:block"/> through innovation<br className="hidden md:block"/> and access.</span>} description={<span>BF Biosciences develops and manufactures<br className="hidden md:block"/> advanced biopharmaceuticals, expanding access to<br className="hidden md:block"/> innovative therapies while strengthening Pakistan's<br className="hidden md:block"/> biotechnology capabilities.</span>} image="/images/banner-bg.webp" ctaText="View our Manufacturing" ctaLink="/manufacturing"/>
      <BannerCard title={<span>BF Biosciences advances patient<br className="hidden md:block"/> education and disease awareness<br className="hidden md:block"/> to help people make informed <br className="hidden md:block"/>healthcare decisions.</span>} titleWeight="medium"  image="/images/banner-bg-2.webp" ctaText="View Our Social Responsibility Initiatives" variant="rounded" ctaLink="/esg"/>
      </div>
      <ArticlesGridClient />
      <CTABanner/>
    </>
  );
}
