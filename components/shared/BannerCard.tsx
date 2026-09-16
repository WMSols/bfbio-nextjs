import { ReactNode } from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const bannerCardVariants = cva(
  "relative flex flex-col justify-center overflow-hidden text-white",
  {
    variants: {
      variant: {
        fullScreen: "sm:min-h-[1206px] min-h-[32rem] w-full px-6 py-16 md:px-16 md:py-24",
        rounded:
          "mx-4 min-h-[32rem] rounded-[50px] px-6 py-12 sm:min-h-[924px] sm:px-10 md:mx-8 md:min-h-[44rem] md:px-16 md:py-16 lg:mx-12 lg:min-h-[48rem]",
      },
      align: {
        left: "items-start text-left",
        center: "items-center text-center",
      },
    },
    defaultVariants: {
      variant: "fullScreen",
      align: "left",
    },
  },
);

const titleVariants = cva("text-white leading-tight", {
  variants: {
    variant: {
      fullScreen: "",
      rounded: "",
    },
    titleSize: {
      default: "",
      small: "",
      large: "",
    },
    titleWeight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  compoundVariants: [
    {
      variant: "fullScreen",
      titleSize: "default",
      class: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    },
    {
      variant: "fullScreen",
      titleSize: "small",
      class: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    },
    {
      variant: "fullScreen",
      titleSize: "large",
      class: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    },
    {
      variant: "rounded",
      titleSize: "default",
      class: "text-3xl sm:text-4xl md:text-5xl leading-[120%]",

    },
    {
      variant: "rounded",
      titleSize: "small",
      class: "text-2xl sm:text-3xl md:text-4xl",
    },
    {
      variant: "rounded",
      titleSize: "large",
      class: "text-4xl sm:text-5xl md:text-6xl",
    },
  ],
  defaultVariants: {
    variant: "fullScreen",
    titleSize: "default",
    titleWeight: "normal",
  },
});

const descriptionVariants = cva("text-white/95 leading-relaxed", {
  variants: {
    variant: {
      fullScreen: "mt-6 text-base md:text-xl font-medium",
      rounded: "mt-4 text-sm sm:text-base md:text-lg",
    },
  },
  defaultVariants: {
    variant: "fullScreen",
  },
});

interface BannerCardProps extends VariantProps<typeof bannerCardVariants> {
  title: string | ReactNode;
  description?: string | ReactNode;
  image: string;
  imageAlt?: string;
  overlay?: boolean;
  overlayDirection?: "right" | "bottom";
  overlayClassName?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: "gradient" | "solid";
  ctaClassName?: string;
  priority?: boolean;
  titleSize?: "default" | "small" | "large";
  titleWeight?: "normal" | "medium" | "semibold" | "bold";
  titleClassName?: string;
  titleWidthClassName?: string;
  descriptionClassName?: string;
}

const BannerCard = ({
  variant = "fullScreen",
  title,
  description,
  image,
  imageAlt = "",
  align = "left",
  overlay = false,
  overlayDirection = "right",
  overlayClassName = "bg-black/30",
  ctaText,
  ctaLink,
  ctaVariant = "gradient",
  ctaClassName,
  priority = false,
  titleSize = "default",
  titleWeight = "normal",
  titleClassName,
  titleWidthClassName,
  descriptionClassName,
}: BannerCardProps) => {
  const showCta = Boolean(ctaText && ctaLink);
  const isCentered = align === "center";

  return (
    <section className={bannerCardVariants({ variant, align })}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={
          variant === "rounded" ? "(max-width: 1024px) 100vw, 90vw" : "100vw"
        }
        className="z-0 object-cover"
      />
      {(overlay || overlayClassName) && (
        <div
          className={cn(
            "absolute inset-0 z-1",
            overlayClassName
              ? overlayClassName
              : cn(
                  "opacity-60",
                  overlayDirection === "bottom"
                    ? "bg-brand-gradient-to-b"
                    : "bg-brand-gradient",
                ),
          )}
        />
      )}
      <div
        className={cn(
          "relative z-10 flex w-full flex-col sm:px-12   ",
          isCentered ? "items-center" : "items-start",
          titleWidthClassName ??
            (variant === "fullScreen"
              ? "max-w-xl md:max-w-4xl"
              : isCentered
                ? "max-w-3xl"
                : "max-w-xl md:max-w-4xl"),
          
        )}
      >
        <h2
          className={cn(
            titleVariants({
              variant,
              titleSize: titleClassName ? null : titleSize,
              titleWeight,
            }),
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              descriptionVariants({
                variant: descriptionClassName ? null : variant,
              }),
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
        {showCta && (
          <Button href={ctaLink} variant={ctaVariant} className={cn("mt-8 text-sm sm:text-base", ctaClassName)}>
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default BannerCard;
