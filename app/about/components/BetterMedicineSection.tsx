import Link from "next/link";
import { aboutValues } from "@/data/about";

export default function BetterMedicineSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl leading-tight text-black md:text-6xl lg:text-[64px]">
            <span className="text-brand">Better medicine</span>
            <br />
            begins with patients
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-y-16">
            {aboutValues.map((value) => (
              <article key={value.title} className="border-t border-black/30 pt-6">
                <h3 className="text-xl text-black md:text-[28px]">{value.title}</h3>
                <Link
                  href={value.href}
                  className="mt-3 inline-block text-base text-brand underline underline-offset-4 transition-opacity hover:opacity-80 md:text-lg"
                >
                  {value.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
