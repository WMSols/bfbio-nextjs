import Image from "next/image";

const stats = [
  { value: "1000+", label: "Employees" },
  { value: "50+", label: "Products" },
  { value: "15+", label: "Therapeutic Areas" },
  { value: "30+", label: "Countries We Export To" },
];

export default function StatsSection() {
  return (
    <section className="relative flex h-svh min-h-svh items-center overflow-hidden px-6 py-16 text-white md:px-16 md:py-24">
      <Image
        src="/images/company-overview/stats.webp"
        alt=""
        fill
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#3b73ac]/55 to-[#934397]/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 text-center md:gap-20">
        <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Advancing Healthcare
          <br />
          Through Science
        </h2>

        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <p className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <p className="text-sm font-light md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="max-w-xl text-sm font-light leading-relaxed md:text-base">
          A patient-centric healthcare organization focused on addressing
          critical unmet medical needs in Pakistan and international markets
        </p>
      </div>
    </section>
  );
}
