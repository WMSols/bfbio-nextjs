import { Button } from "@/components/ui/button";
import { sibionicsBuyNow, sibionicsHero } from "@/data/sibionics";
import MediaPlaceholder from "./MediaPlaceholder";

export default function SibionicsHero() {
  return (
    <section className="relative flex h-svh min-h-svh items-center overflow-hidden pt-28 pb-28 md:pt-32 md:pb-36">
      <MediaPlaceholder
        src={sibionicsHero.backgroundImage}
        alt=""
        placeholderClassName={sibionicsHero.placeholderClassName}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl leading-none font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {sibionicsHero.title}
        </h1>
        <p className="mt-4 text-2xl font-medium text-[#1DB8B0] sm:text-3xl md:text-5xl md:leading-tight">
          {sibionicsHero.subtitle}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg">
          {sibionicsHero.body}
        </p>
        <Button
          href={sibionicsBuyNow.href}
          size="pill"
          className="mt-10 rounded-full border-transparent bg-black px-10 text-sm font-medium tracking-[0.12em] text-white hover:bg-black/85"
        >
          {sibionicsBuyNow.label}
        </Button>
      </div>
    </section>
  );
}
