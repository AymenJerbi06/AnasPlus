"use client";

import { useMemo, useState } from "react";

type Clip = {
  title: string;
  club: string;
  date: string;
  dateTime: string;
  format: "conditioning" | "studio" | "cardio";
  featured?: boolean;
  src: string;
  poster: string;
};

const CLIPS: Clip[] = [
  {
    title: "Leg day",
    club: "Bouzayen · Sfax",
    date: "October 7, 2026",
    dateTime: "2026-10-07",
    format: "conditioning",
    featured: true,
    src: "/videos/anasplus/strength-legs-oct-2026.mp4",
    poster: "/images/anasplus/club-gallery/bouzayen-strength-session-oct-2025.webp",
  },
  {
    title: "Hybrid session",
    club: "Bouzayen · Sfax",
    date: "September 26, 2026",
    dateTime: "2026-09-26",
    format: "conditioning",
    featured: true,
    src: "/videos/anasplus/hybrid-session-sept-2026.mp4",
    poster: "/images/anasplus/club-gallery/bouzayen-group-session-sept-2025.webp",
  },
  {
    title: "CrossFit",
    club: "Route Tunis · Tunis",
    date: "June 26, 2026",
    dateTime: "2026-06-26",
    format: "conditioning",
    featured: true,
    src: "/videos/anasplus/crossfit-route-tunis-june-2026.mp4",
    poster: "/images/anasplus/club-gallery/route-tunis-crossfit-session-sept-2025.webp",
  },
  {
    title: "MetaFit / HIIT",
    club: "Bouzayen · Sfax",
    date: "September 5, 2026",
    dateTime: "2026-09-05",
    format: "conditioning",
    src: "/videos/anasplus/metafit-bouzayen-sept-2026.mp4",
    poster: "/images/anasplus/club-gallery/bouzayen-strength-session-oct-2025.webp",
  },
  {
    title: "Pilates",
    club: "Bouzayen · Sfax",
    date: "September 30, 2026",
    dateTime: "2026-09-30",
    format: "studio",
    featured: true,
    src: "/videos/anasplus/pilates-bouzayen-sept-2026.mp4",
    poster: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
  },
  {
    title: "Yoga",
    club: "Bouzayen · Sfax",
    date: "July 13, 2026",
    dateTime: "2026-07-13",
    format: "studio",
    src: "/videos/anasplus/yoga-bouzayen-july-2026.mp4",
    poster: "/images/anasplus/class-yoga.jpg",
  },
  {
    title: "Zumba",
    club: "Bouzayen · Sfax",
    date: "September 16, 2026",
    dateTime: "2026-09-16",
    format: "studio",
    src: "/videos/anasplus/zumba-bouzayen-sept-2026.mp4",
    poster: "/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp",
  },
  {
    title: "Spinning",
    club: "Route Tunis · Tunis",
    date: "September 23, 2026",
    dateTime: "2026-09-23",
    format: "cardio",
    src: "/videos/anasplus/spinning-route-tunis-sept-2026.mp4",
    poster: "/images/anasplus/class-spinning.jpg",
  },
  {
    title: "Cardio Sunset",
    club: "Route Tunis · Tunis",
    date: "July 23, 2026",
    dateTime: "2026-07-23",
    format: "cardio",
    src: "/videos/anasplus/cardio-sunset-route-tunis-july-2026.mp4",
    poster: "/images/anasplus/club-gallery/route-tunis-cardio-session-july-2026.webp",
  },
];

const FILTERS = [
  { id: "featured", label: "Featured clips" },
  { id: "all", label: "View all clips" },
  { id: "conditioning", label: "Strength & conditioning" },
  { id: "studio", label: "Studio classes" },
  { id: "cardio", label: "Cardio & cycling" },
] as const;

export default function TrainingMediaSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]["id"]>("featured");
  const clips = useMemo(
    () => {
      if (activeFilter === "all") return CLIPS;
      if (activeFilter === "featured") {
        return CLIPS.filter((clip) => clip.featured).sort((a, b) =>
          b.dateTime.localeCompare(a.dateTime),
        );
      }
      return CLIPS.filter((clip) => clip.format === activeFilter);
    },
    [activeFilter],
  );

  return (
    <section id="session-videos" className="scroll-mt-28 bg-black px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            From the official club posts
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-white sm:text-[34px]">
            See the sessions in motion
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/75">
            A few recent clips to start. Browse the full archive or filter by training type when you want more.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter training videos">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`min-h-11 border px-4 py-2 font-sans text-sm font-semibold transition-colors ${
                activeFilter === filter.id
                  ? "border-ff-red bg-ff-red text-white"
                  : "border-white/35 text-white hover:border-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {clips.map((clip) => (
            <article key={clip.src} className="overflow-hidden border border-white/15 bg-[#111]">
              <div className="relative aspect-[3/4] bg-black">
                <video
                  src={clip.src}
                  poster={clip.poster}
                  controls
                  playsInline
                  preload="none"
                  aria-label={`${clip.title} at Anas Plus ${clip.club}, posted ${clip.date}`}
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="font-heading text-base italic uppercase text-white">{clip.title}</h3>
                  <p className="mt-1 font-sans text-xs text-white/65">Anas Plus {clip.club}</p>
                </div>
                <time dateTime={clip.dateTime} className="shrink-0 font-sans text-xs text-white/65">
                  {clip.date}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
