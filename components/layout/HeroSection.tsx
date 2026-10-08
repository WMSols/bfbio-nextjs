"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  titleSize?: "large" | "small";
  backgroundImage?: string;
  /** Shown below the `sm` breakpoint; falls back to `backgroundImage` when omitted. */
  backgroundImageMobile?: string;
  backgroundVideo?: string;
  backgroundClassName?: string;
  overlayClassName?: string;
  titleClassName?: string;
}

const HeroSection = ({
  title,
  subtitle,
  titleSize = "large",
  backgroundImage,
  backgroundImageMobile,
  backgroundVideo,
  backgroundClassName,
  overlayClassName,
  titleClassName,
}: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const hasMedia = Boolean(
    backgroundImage || backgroundImageMobile || backgroundVideo,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlaying = () => setIsPlaying(!video.paused);
    video.addEventListener("play", syncPlaying);
    video.addEventListener("pause", syncPlaying);
    syncPlaying();

    return () => {
      video.removeEventListener("play", syncPlaying);
      video.removeEventListener("pause", syncPlaying);
    };
  }, [backgroundVideo]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden py-32",
        hasMedia &&
          "text-white justify-center h-svh min-h-[32rem] md:min-h-0 md:h-[min(100svh,56.25vw)] py-16 md:py-24",
        backgroundClassName,
      )}
    >
      {hasMedia && (
        <div className="absolute inset-0 z-0">
          {backgroundVideo ? (
            <video
              ref={videoRef}
              src={backgroundVideo}
              poster={backgroundImage}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              className="h-full w-full object-cover object-center"
            />
          ) : backgroundImageMobile && backgroundImage ? (
            <>
              <img
                src={backgroundImageMobile}
                alt=""
                className="h-full w-full object-cover object-center sm:hidden"
              />
              <img
                src={backgroundImage}
                alt=""
                className="hidden h-full w-full object-cover object-center sm:block"
              />
            </>
          ) : (
            (backgroundImage || backgroundImageMobile) && (
              <img
                src={backgroundImage || backgroundImageMobile}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            )
          )}
        </div>
      )}
      {overlayClassName && (
        <div className={cn("absolute inset-0 z-1", overlayClassName)} />
      )}
      <div className="container relative z-10 text-center">
        <h1
          className={cn(
            "leading-snug sm:leading-none",
            titleSize === "small"
              ? "hero-title-small"
              : "text-[32px] lg:text-8xl",
            hasMedia ? "text-white" : "text-foreground ",
            titleClassName,
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mt-6 mx-auto text-lg font-normal md:text-xl max-w-3xl leading-relaxed",
              hasMedia ? "text-white" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {backgroundVideo && (
        <Button
          type="button"
          variant="transparent"
          size="icon"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="absolute right-5  text-black bottom-5 z-20 size-10 rounded-full md:right-8 md:bottom-8"
        >
          {isPlaying ? (
            <Pause className="size-4 fill-current" />
          ) : (
            <Play className="size-4 fill-current" />
          )}
        </Button>
      )}
    </section>
  );
};

export default HeroSection;
