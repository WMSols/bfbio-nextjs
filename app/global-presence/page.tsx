import HeroSection from "@/components/layout/HeroSection";
import BannerCard from "@/components/shared/BannerCard";
import CTABanner from "@/components/shared/CTABanner";
import RegionsSection from "./components/RegionsSection";
import TrustSection from "./components/TrustSection";

export const metadata = {
  title: "Global Presence",
  description:
    "Delivering trusted, high-quality pharmaceutical products to over 30 countries.",
};

export default function GlobalPresencePage() {
  return (
    <div className="bg-[#F7F7F7]">
      <HeroSection
        title="Global Presence"
        backgroundImage="/images/global-presence/hero.webp"
      />
      <RegionsSection />
      <TrustSection />
      <div className="py-16 md:py-24">
        <BannerCard
          variant="rounded"
          title="We deliver high-quality pharmaceutical products to partners worldwide through seamless international business operations, strategic partnerships, and an unwavering commitment to quality"
          image="/images/global-presence/africa.webp"
          overlayClassName="bg-black/25"
          ctaText="Explore Our Partnerships"
          ctaLink="/partnerships"
          titleClassName="text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.2]"
          titleWidthClassName="max-w-6xl "
          ctaClassName="mt-16"
        />
      </div>
      <CTABanner
        title="Start a Conversation with International Business Team"
        description="Our international business team is available to support strategic collaborations and ensure seamless access to our products worldwide."
        descriptionClassName="sm:max-w-2xl font-light"
        titleClassName="text-[32px] font-medium md:text-5xl max-w-3xl leading-[1.1]"
        cta={
          <a
            href="mailto:exports@bfbio.com"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#934397] bg-white/50 px-10 text-lg text-black transition-colors hover:bg-white/70 md:px-16 md:text-lg"
          >
            exports@bfbio.com
          </a>
        }
      />
    </div>
  );
}
