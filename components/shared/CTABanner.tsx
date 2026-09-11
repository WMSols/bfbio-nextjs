import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTABannerProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
  titleClassName?: string;
  ctaClassName?: string;
}

const CTABanner = ({
  title = (<span>Care That Goes <br /> Beyond Medicine</span>),
  description = (<span>At BF Biosciences, we believe healthcare is more than just prescriptions. It's about<br className="hidden md:block"/> compassion, innovation, and a deep commitment to improving lives across Pakistan.</span>),
  ctaText = "Learn More",
  ctaLink = "/about",
  showCTA = true,
  titleClassName,
  ctaClassName,
}: CTABannerProps) => {
  return (
    <section className="bg-[#FFE4FF] py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center max-w-[20.5rem] mx-auto sm:max-w-4xl">
          <div className="text-center flex flex-col gap-6 sm:gap-12 items-center">
            <h2 className={cn("text-[32px] text-black md:text-[82px] leading-[1.15] md:leading-snug", titleClassName)}>
              {title}
            </h2>
            <p className="text-lg text-black sm:text-[22px] sm:max-w-5xl sm:leading-relaxed">
              {description}
            </p>
            {showCTA && (
              <Button href={ctaLink} variant="solid" className={ctaClassName}>
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
