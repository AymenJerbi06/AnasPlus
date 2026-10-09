import Image from "next/image";

function HeroText() {
  return (
    <div className="w-full py-10 text-center lg:w-[45%] lg:py-0 lg:text-left">
      <h1 className="font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px] sm:leading-[48px]">
        PERSONAL TRAINING
      </h1>
      <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
        Maximum results with personal coaching – individual, flexible, motivating
      </p>
      <a
        href="#form"
        className="mt-6 inline-block rounded-none border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
      >
        FIND A TRAINER NOW
      </a>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-black">
      {/* Mobile / tablet: image stacked above the text block (matches live site <lg layout) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:hidden">
        <Image
          src="/images/hero-personal-training.jpg"
          alt="Personal trainer coaching a client with boxing wraps in a dark gym setting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 12%" }}
        />
      </div>
      <div className="px-6 lg:hidden">
        <HeroText />
      </div>

      {/* Desktop: full-bleed background photo with text overlaid on a gradient */}
      <div className="relative hidden min-h-[520px] items-center overflow-hidden lg:flex">
        <Image
          src="/images/hero-personal-training.jpg"
          alt="Personal trainer coaching a client with boxing wraps in a dark gym setting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 12%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-8">
          <HeroText />
        </div>
      </div>
    </section>
  );
}
