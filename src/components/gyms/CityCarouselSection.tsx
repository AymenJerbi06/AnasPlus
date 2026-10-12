"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
    tagline: "Coached training, Pilates, Zumba & more",
    image: "/images/anasplus/club-gallery/bouzayen-zumba.webp",
    href: "/gyms/bouzayen",
  },
  {
    id: "rte-tunis",
    name: "Anas Plus Route Tunis",
    tagline: "Coached training, group cardio & Spinning",
    image: "/images/anasplus/club-gallery/route-tunis-cardio.webp",
    href: "/gyms/rte-tunis",
  },
];

export default function CityCarouselSection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Start here · Tunisia
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">
            Find Your Anas Plus Club
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Choose between Bouzayen and Route Tunis, then explore the club’s
            training spaces, classes and contact details.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {CLUBS.map((club) => (
            <a
              key={club.id}
              id={club.id}
              href={club.href}
              className="group relative h-[340px] overflow-hidden scroll-mt-32 sm:h-[380px]"
            >
              <Image
                src={club.image}
                alt={club.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
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
                  Explore this club
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
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
