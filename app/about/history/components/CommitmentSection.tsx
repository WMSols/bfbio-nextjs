import { Button } from "@/components/ui/button";

const links = [
  { label: "Our Partnerships", href: "/partnerships" },
  { label: "Our Purpose", href: "/about/purpose" },
  { label: "Our Responsibility", href: "/esg" },
];

export default function CommitmentSection() {
  return (
    <section className="bg-brand py-16 text-white md:py-24">
      <div className="container flex flex-col items-center text-center">
        <h2 className="max-w-4xl text-3xl font-medium leading-normal md:text-5xl lg:text-[64px]">
          Our Commitment
        </h2>
        <p className="mt-6 max-w-3xl text-lg font-light leading-normal md:mt-8 md:text-[32px]">
          Learn more about our commitment to advancing patient care and
          supporting the communities we serve.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              variant="transparent"
              className="h-16 min-w-60 rounded-full border border-white bg-transparent px-8 text-lg text-white hover:bg-white/10 md:text-[28px]"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
