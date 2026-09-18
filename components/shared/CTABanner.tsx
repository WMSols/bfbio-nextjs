import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import AnimateIn from "@/components/shared/AnimateIn";

interface CTABannerProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  showCTA?: boolean;
  titleClassName?: string;
  ctaClassName?: string;
  ctaVariant?: "gradient" | "solid";
  cta?: ReactNode;
  className?: string;
  align?: "center" | "left";
  titleWidthClassName?: string;
  paddingClassName?: string;
  descriptionClassName?: string;
}

const CTABanner = ({
  title = (<span>Care That Goes <br /> Beyond Medicine</span>),
  description = (<span>At BF Biosciences, we believe healthcare is more than just prescriptions. It's about<br className="hidden md:block"/> compassion, innovation, and a deep commitment to improving lives across Pakistan.</span>),
  ctaText = "Learn More",
  ctaLink = "/about",
  showCTA = true,
  titleClassName,
  ctaClassName,
  ctaVariant = "solid",
  cta,
  className,
  align = "center",
  titleWidthClassName,
  paddingClassName,
  descriptionClassName,
}: CTABannerProps) => {
  const isLeft = align === "left";

  return (
    <AnimateIn as="section" className={cn("bg-[#FFE4FF] py-16 md:py-24", paddingClassName, className)}>
      <div className="container mx-0">
        <div
          className={cn(
            "flex flex-col",
            isLeft
              ? "items-start max-w-5xl sm:px-32"
              : "items-center justify-center max-w-[20rem] mx-auto sm:max-w-7xl",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-8 sm:gap-12",
              isLeft ? "items-start text-left" : "items-center text-center",
            )}
          >
            <h2 className={cn("text-[36px] text-black md:text-[82px] leading-[1.15] ", titleClassName, titleWidthClassName)}>
              {title}
            </h2>
            <p className={cn("text-lg text-black sm:text-[22px] sm:max-w-5xl leading-normal  ", descriptionClassName)}>
              {description}
            </p>
            {cta
              ? cta
              : showCTA && (
                  <Button href={ctaLink} variant={ctaVariant} className={ctaClassName}>
                    {ctaText}
                  </Button>
                )}
          </div>
        </div>
      </div>
    </AnimateIn>
  );
};

export default CTABanner;
