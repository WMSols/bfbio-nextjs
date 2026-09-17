export default function WhatGuidesUsSection() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-32 sm:px-32">
      <div className="container">
        <h2 className=" text-4xl text-black md:text-6xl lg:text-[64px]">
          What Guides Us
        </h2>

        <div className=" mt-12 grid max-w-5xl grid-cols-1 gap-2 md:mt-20 md:grid-cols-2 ">
          <article>
            <h3 className="text-2xl text-brand md:text-[32px]">Mission</h3>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-black md:mt-6 md:text-lg">
              We aim to improve the quality of life by providing innovative
              healthcare solutions, ensuring patient access to quality treatment
              and cure.
            </p>
          </article>

          <article>
            <h3 className="text-2xl text-brand md:text-[32px]">Vision</h3>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-black md:mt-6 md:text-lg">
              We will strive to attain market leadership by putting patients
              first and seeing every day as a new opportunity to earn trust and
              credibility
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
