export default function MissionVisionSection() {
  return (
    <section className="bg-[#FFE4FF] py-16 md:py-24">
      <div className="container mx-0 max-w-4xl md:px-16">
        <h2 className="text-3xl font-medium text-black md:text-5xl">
          Our Mission
        </h2>
        <div className="mt-8 space-y-12 text-lg text-black md:mt-12 md:text-[32px] ">
          <p>
            We aim to improve the quality of life by providing innovative
            healthcare solutions, ensuring patient access to quality treatment
            and cure.
          </p>
          <p>
            In doing so, we are committed to creating long-term shareholder
            value, investing in the growth and development of our people,
            fostering a culture of collaboration and excellence, and upholding
            the highest standards of ethics and transparency.
          </p>
        </div>

        <h2 className="mt-12 text-3xl font-medium text-black md:mt-16 md:text-5xl">
          Vision
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-black md:mt-12 md:text-[32px] md:leading-normal">
          We will strive to attain market leadership by putting patients first
          and seeing every day as a new opportunity to earn trust and
          credibility
        </p>
      </div>
    </section>
  );
}
