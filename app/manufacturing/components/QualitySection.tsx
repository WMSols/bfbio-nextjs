import { manufacturingQuality } from "@/data/manufacturing";
import GradientCard from "./GradientCard";

export default function QualitySection() {
  const { eyebrow, title, description, cards } = manufacturingQuality;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extralight tracking-[0.18em] text-black uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-20 text-4xl leading-[1.15] font-medium text-brand-blue md:text-5xl lg:text-[56px]">
            {title}
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-snug text-black md:text-[22px] md:leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 md:mt-16 md:gap-8">
          {cards.map((card, index) => (
            <GradientCard
              key={card.title}
              reverse={index % 2 === 1}
              toBottom={true}
              innerClassName="px-8 py-10 md:px-16 md:py-10"
            >
              <h3 className="text-2xl font-medium text-black md:text-[32px]">
                {card.title}
              </h3>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-black md:mt-8 md:text-lg">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
