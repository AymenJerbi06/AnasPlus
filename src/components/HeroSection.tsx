import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-black pt-0 lg:min-h-[520px]">
      <Image
        src="/images/hero-personal-training.jpg"
        alt="Personal trainer coaching a client with boxing wraps in a dark gym setting"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "20% center" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="w-full py-16 text-center lg:w-[45%] lg:py-0 lg:text-left">
          <h1 className="font-heading text-[42px] leading-[48px] font-bold italic uppercase text-white">
            PERSONAL TRAINING
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] font-sans text-[18px] leading-[1.4] text-white lg:mx-0">
            Maximum results with personal coaching – individual, flexible, motivating
          </p>
          <a
            href="#form"
            className="mt-6 inline-block rounded-none border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white"
          >
            FIND A TRAINER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
