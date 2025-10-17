"use client";

import Image from "next/image";

const JoinExperience = () => {
  return (
    <section className="text-typography border-b pb-8 border-white/10">
      <div className="max-w-5xl mx-auto px-4 pt-14 lg:pt-20 text-center">
        <h2 className="font-semibold leading-tight tracking-tight text-3xl sm:text-4xl">
          Join the gambit experience
        </h2>

        <p className="mt-3 text-sm sm:text-base text-typography/80">
          Limited spots available for chess players, innovators, and
          entrepreneurs
        </p>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://app.reapvest.com/register"
          className="inline-block mt-6 bg-button hover:bg-button-dark transition-colors duration-300 text-typography px-5 py-2 rounded-md text-sm font-medium"
        >
          Register
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-12">
        <div className="w-full aspect-[16/9] rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
          <Image
            src="/images/chess7.jpeg"
            alt=""
            width={400}
            height={400}
            className="object-cover w-full h-full transition-all group-hover:scale-110 duration-500 group-hover:opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default JoinExperience;
