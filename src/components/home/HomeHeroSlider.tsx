"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Slide = {
  image: string;
  objectPosition: string;
  eyebrow: string;
  heading: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

const SLIDES: Slide[] = [
  {
    image: "/images/anasplus/hero-main.jpg",
    objectPosition: "70% 15%",
    eyebrow: "Le goût du sport",
    heading: "Train Your Way at Anas Plus",
    text: "Personal coaching, Pilates, Zumba, Spinning, Yoga & CrossFit — two clubs in Sfax.",
    primaryLabel: "BECOME A MEMBER",
    primaryHref: "/membership",
    secondaryLabel: "VIEW CLASSES",
    secondaryHref: "/classes",
  },
  {
    image: "/images/anasplus/hero-group.jpg",
    objectPosition: "center 30%",
    eyebrow: "Ready for change?",
    heading: "Start Your Free Trial Today",
    text: "Come feel the energy for yourself — book a trial session at either club, no commitment.",
    primaryLabel: "BOOK A FREE TRIAL",
    primaryHref: "/free-trial",
    secondaryLabel: "DISCOVER OUR CLUBS",
    secondaryHref: "/gyms",
  },
];

const AUTOPLAY_MS = 6000;

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing]);

  const slide = SLIDES[index];

  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-black lg:min-h-[640px]">
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.heading}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: s.objectPosition }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="w-full text-center lg:w-[55%] lg:text-left">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            {slide.eyebrow}
          </p>
          <h1 className="mt-2 font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[44px] sm:leading-[50px]">
            {slide.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
            {slide.text}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={slide.primaryHref}
              className="inline-block rounded-none border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
            >
              {slide.primaryLabel}
            </a>
            <a
              href={slide.secondaryHref}
              className="inline-block rounded-none border-2 border-white px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:bg-white hover:text-black"
            >
              {slide.secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors duration-200 hover:bg-ff-red sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-3 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors duration-200 hover:bg-ff-red sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              i === index ? "bg-ff-red" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
        <button
          type="button"
          aria-label={playing ? "Pause slider" : "Play slider"}
          onClick={() => setPlaying((p) => !p)}
          className="ml-2 flex h-6 w-6 items-center justify-center text-white/70 transition-colors duration-200 hover:text-white"
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
    </section>
  );
}
