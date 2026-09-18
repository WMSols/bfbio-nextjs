import { manufacturingCertifications } from "@/data/manufacturing";
import GradientCard from "./GradientCard";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

export default function CertificationsSection() {
  const { eyebrow, title, items } = manufacturingCertifications;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-black/45 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-20 text-3xl leading-[1.2] font-medium whitespace-pre-line text-black md:text-5xl">
            {title}
          </h2>
        </div>

        <AnimateIn stagger className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-28 md:gap-6">
          {items.map((item, index) => (
            <AnimateInItem key={item.code} className="h-full">
              <GradientCard
                reverse={index === 1 || index === 2}
                className=" rounded-[20px] md:rounded-[40px]"
                innerClassName="flex min-h-[10.5rem] flex-col items-center justify-center px-6 py-10 text-center md:min-h-[12.5rem] rounded-[20px] md:rounded-[40px]"
              >
                <p className="text-3xl font-medium text-black md:text-4xl">
                  {item.code}
                </p>
                <p className="mt-4 text-base text-black md:text-lg">{item.label}</p>
              </GradientCard>
            </AnimateInItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
