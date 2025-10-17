import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-typography pt-10 pb-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 pt-16 lg:pt-24 text-center">
        <h1 className="font-semibold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl">
          Minds in motion where chess
          <br className="hidden sm:block" />
          meets innovation
        </h1>

        <p className="mt-5 text-sm sm:text-base text-typography/80 max-w-2xl mx-auto">
          The Gambit brings together chess players, tech enthusiasts, and
          entrepreneurs. We create a platform where strategic thinking
          transforms into real-world impact.
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

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12">
        <div className="w-full aspect-[16/9] rounded-md bg-white/5 ring-1 ring-white/10 ">
          <Image
            src="/images/chess4.webp"
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

export default Hero;
