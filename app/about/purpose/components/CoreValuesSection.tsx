const values = [
  {
    title: "Putting Patients First",
    description:
      "Our purpose for existence and ultimate measure of success is our impact on the improvement of human lives.",
  },
  {
    title: "Trustworthiness",
    description:
      "We work hard every day to earn the trust of patients, healthcare providers, employees, business partners and other stakeholders.",
  },
  {
    title: "Collaboration",
    description:
      "None of us is as smart as all of us. We come together, work together and win together.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to a culture of excellence and raising the bar every time",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden py-16 text-white md:py-32 sm:px-14 px-6">
      <img
        src="/images/investors/newsroom/hero.webp"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative z-10">
        <h2 className="text-4xl font-semibold md:text-6xl">Our Core Values</h2>
        <ul className="mt-10 flex max-w-4xl flex-col gap-8 md:mt-24 md:gap-12">
          {values.map((value) => (
            <li key={value.title}>
              <h3 className="text-2xl font-medium md:text-5xl">{value.title}</h3>
              <p className="mt-2 max-w-3xl text-base  md:mt-10 md:text-2xl">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
