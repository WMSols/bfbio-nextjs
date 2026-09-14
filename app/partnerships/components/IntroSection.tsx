export default function IntroSection() {
  return (
    <section className="bg-[#F7F7F7] py-20 md:py-28 lg:py-36">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <p className="pt-1 text-xs font-medium tracking-[0.14em] text-black uppercase md:col-span-4 md:pt-3 md:text-[13px]">
            Partnering for better health
          </p>
          <h2 className="text-[2rem] leading-[1.2] text-black md:col-span-8 md:text-[2.5rem] lg:text-[2.75rem]">
            We believe meaningful healthcare progress is achieved through
            trusted partnerships and a shared commitment to patient care.
          </h2>
        </div>
      </div>
    </section>
  );
}
