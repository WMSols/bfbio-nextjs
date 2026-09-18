import { sibionicsIntro } from "@/data/sibionics";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

export default function IntroSection() {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight font-medium text-[#1DB8B0] md:text-5xl lg:text-[3.25rem]">
            {sibionicsIntro.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-black md:text-lg">
            {sibionicsIntro.body}
          </p>
        </div>

        <AnimateIn stagger className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-20 md:gap-8">
          {sibionicsIntro.stats.map((stat) => (
            <AnimateInItem key={stat.value}>
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-medium text-[#1DB8B0] md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="whitespace-pre-line text-sm text-black/55">
                {stat.label}
              </p>
            </div>
            </AnimateInItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
