"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Club = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
};

const CLUBS: Club[] = [
  {
    id: "bouzayen",
    name: "Anas Plus Bouzayen",
    tagline: "Personal coaching, CrossFit, Pilates & more",
    image: "/images/anasplus/class-strength.jpg",
    href: "/gyms/bouzayen",
  },
  {
    id: "rte-tunis",
    name: "Anas Plus Route Tunis",
    tagline: "Spinning, Cardio Sunset, group classes & coaching",
    image: "/images/anasplus/hero-main.jpg",
    href: "/gyms/rte-tunis",
  },
];

export default function CityCarouselSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="bg-white px-6 py-12 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-heading text-[28px] italic uppercase text-black">
          Our Clubs
        </h2>

        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Previous clubs"
            onClick={() => scrollBy(-1)}
            className="absolute top-1/2 -left-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-ff-red text-white transition-colors duration-200 hover:bg-ff-red-dark sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex justify-center gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:thin]"
          >
            {CLUBS.map((club) => (
              <a
                key={club.id}
                id={club.id}
                href={club.href}
                className="group relative h-[400px] w-[260px] shrink-0 overflow-hidden scroll-mt-32"
              >
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                  style={{
                    objectPosition:
                      club.id === "rte-tunis" ? "60% 15%" : "center 25%",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-sans text-xl font-bold text-white">
                    {club.name}
                  </p>
                  <span className="mt-1 flex items-center gap-1 font-sans text-sm text-white">
                    {club.tagline}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 font-sans text-sm font-bold text-white">
                    See schedule
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next clubs"
            onClick={() => scrollBy(1)}
            className="absolute top-1/2 -right-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-ff-red text-white transition-colors duration-200 hover:bg-ff-red-dark sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-8 text-center">
          <a
            href="tel:53266222"
            className="font-sans text-[15px] text-black underline underline-offset-2"
          >
            Call 53 266 222 for directions or schedules
          </a>
        </p>
      </div>
    </section>
  );
}
