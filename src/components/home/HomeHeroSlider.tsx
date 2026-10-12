"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
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
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "touch") return;
    swipeStartRef.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (!start || event.pointerType !== "touch") return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

    goTo(index + (deltaX < 0 ? 1 : -1));
  };

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
    <section
      aria-label="Anas Plus gym photos"
      aria-roledescription="carousel"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { swipeStartRef.current = null; }}
      className="relative flex min-h-[480px] touch-pan-y select-none items-center overflow-hidden bg-black sm:min-h-[520px] lg:min-h-[640px]"
    >
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
            draggable={false}
            className="object-cover"
            style={{ objectPosition: s.objectPosition }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/90 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/45 lg:to-transparent"
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="w-full text-center lg:w-[55%] lg:text-left">
          <p className="font-sans text-xs font-bold tracking-[0.05em] text-ff-red uppercase sm:text-sm">
            {slide.eyebrow}
          </p>
          <h1 className="mt-2 font-heading text-[28px] leading-[34px] font-bold italic uppercase text-white sm:text-[36px] sm:leading-[42px] lg:text-[44px] lg:leading-[50px]">
            {slide.heading}
          </h1>
          <p className="mx-auto mt-3 max-w-[480px] font-sans text-[14px] leading-[1.4] text-white sm:mt-4 sm:text-[16px] lg:mx-0 lg:text-[18px]">
            {slide.text}
          </p>
          <div className="mt-5 flex flex-col items-center gap-2 sm:mt-6 sm:flex-row sm:gap-3 lg:justify-start">
            <a
              href={slide.primaryHref}
              className="inline-block rounded-none border-2 border-ff-red bg-ff-red px-3 py-2.5 font-heading text-[14px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark sm:px-4 sm:py-3 lg:text-[16px]"
            >
              {slide.primaryLabel}
            </a>
            <a
              href={slide.secondaryHref}
              className="inline-block rounded-none border-2 border-white px-3 py-2.5 font-heading text-[14px] italic uppercase text-white transition-colors duration-200 ease-out hover:bg-white hover:text-black sm:px-4 sm:py-3 lg:text-[16px]"
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
