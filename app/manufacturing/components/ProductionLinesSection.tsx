import { manufacturingProductionLines } from "@/data/manufacturing";
import GradientCard from "./GradientCard";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

export default function ProductionLinesSection() {
  const { titleLead, titleAccent, description, lines } =
    manufacturingProductionLines;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto sm:max-w-6xl text-center">
          <h2 className="text-3xl leading-[1.15] font-medium md:text-5xl 2xl:text-[56px]">
            <span className="text-brand-blue">{titleLead}</span>
            <span className="mt-1 block text-brand">{titleAccent}</span>
          </h2>
          <p className="mt-6 text-lg leading-snug font-light max-w-3xl 2xl:max-w-4xl mx-auto text-black md:mt-8 md:text-[22px] md:leading-[120%] 2xl:text-[28px]">
            {description}
          </p>
        </div>

        <AnimateIn stagger className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          {lines.map((line, index) => (
            <AnimateInItem key={line.title} className="h-full">
            <GradientCard
              reverse={index % 2 === 1}
              innerClassName="px-8 py-10 md:px-10 md:py-12"
            >
              <h3 className="text-xl font-medium text-black md:text-[22px]">
                {line.title}
              </h3>
              <p className="mt-1 text-muted-foreground font-light md:text-lg">{line.subtitle}</p>

              {line.equipment && line.equipment.length > 0 && (
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {line.equipment.map((item) => (
                    <div key={item.name}>
                      <p className="text-sm font-medium text-black md:text-base">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-light md:text-sm">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <h4 className="text-lg font-medium text-black">Formats</h4>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-black">
                  {line.formats.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-black">Applications</h4>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-black">
                  {line.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </div>
            </GradientCard>
            </AnimateInItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
