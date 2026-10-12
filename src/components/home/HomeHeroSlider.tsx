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
    image: "/images/anasplus/club-gallery/bouzayen-crossfit-session-oct-2025.webp",
    objectPosition: "70% 15%",
    eyebrow: "Welcome to Anas Plus · Tunisia",
    heading: "Train Your Way at Anas Plus",
    text: "Two club locations. Choose between Bouzayen in Sfax and Route Tunis in Tunis.",
    primaryLabel: "PLAN YOUR FIRST VISIT",
    primaryHref: "/free-trial",
    secondaryLabel: "EXPLORE ANAS PLUS",
    secondaryHref: "#explore",
  },
  {
    image: "/images/anasplus/club-gallery/route-tunis-group-session-july-2026.webp",
    objectPosition: "center 30%",
    eyebrow: "Bouzayen · Sfax   |   Route Tunis · Tunis",
    heading: "Two Clubs. Two Cities.",
    text: "Pick your location, then explore its spaces, classes and community.",
    primaryLabel: "EXPLORE OUR CLUBS",
    primaryHref: "/gyms",
    secondaryLabel: "EXPLORE CLASSES",
    secondaryHref: "/classes",
  },
];

const AUTOPLAY_MS = 6000;

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
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
            aria-pressed={index === i}
            onClick={() => goTo(i)}
            className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white"
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full transition-[background-color,transform] duration-200 ${
                i === index
                  ? "scale-125 bg-ff-red"
                  : "bg-white/50 hover:scale-125 hover:bg-white"
              }`}
            />
          </button>
        ))}
        <button
          type="button"
          aria-label={playing ? "Pause slider" : "Play slider"}
          onClick={() => setPlaying((p) => !p)}
          className="ml-1 flex h-10 w-10 items-center justify-center text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
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
