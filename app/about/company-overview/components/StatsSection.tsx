import Image from "next/image";
import AnimateIn from "@/components/shared/AnimateIn";

const stats = [
  { value: "1000+", label: "Employees" },
  { value: "50+", label: "Products" },
  { value: "15+", label: "Therapeutic Areas" },
  { value: "30+", label: "Countries We Export To" },
];

export default function StatsSection() {
  return (
    <AnimateIn as="section" className="relative flex  sm:h-301.5 min-h-128 items-center overflow-hidden px-6 py-16 text-white md:px-16 md:py-28">
      <Image
        src="/images/about/company-overview/stats.webp"
        alt=""
        fill
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#3b73ac]/55 to-[#934397]/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8  justify-between min-h-full  text-center ">
        <h2 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl sm:mt-20 mt-10">
          Advancing Healthcare
          <br />
          Through Science
        </h2>

        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-4">
              <p className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className=" font-light text-base sm:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl  font-extralight leading-relaxed md:text-2xl">
          A patient-centric healthcare organization focused on<br className="hidden md:block" /> addressing
          critical unmet medical needs in Pakistan<br className="hidden md:block" /> and international markets
        </p>
      </div>
    </AnimateIn>
  );
}
