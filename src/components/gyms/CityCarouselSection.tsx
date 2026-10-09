"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type City = {
  name: string;
  count: number;
  image: string;
  href: string;
};

const CITIES: City[] = [
  { name: "Berlin", count: 15, image: "/images/gyms/berlin.webp", href: "/gyms/berlin" },
  { name: "Frankfurt am Main", count: 12, image: "/images/gyms/frankfurt.webp", href: "/gyms/frankfurt" },
  { name: "Darmstadt", count: 10, image: "/images/gyms/darmstadt.jpg", href: "/gyms/darmstadt" },
  { name: "Düsseldorf", count: 5, image: "/images/gyms/duesseldorf.webp", href: "/gyms/duesseldorf" },
  { name: "Bremen", count: 3, image: "/images/gyms/bremen.webp", href: "/gyms/bremen" },
  { name: "Dresden", count: 3, image: "/images/gyms/dresden.webp", href: "/gyms/dresden" },
  { name: "Bielefeld", count: 2, image: "/images/gyms/bielefeld.webp", href: "/gyms/bielefeld" },
  { name: "Göttingen", count: 2, image: "/images/gyms/goettingen.webp", href: "/gyms/goettingen" },
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
          Discover All Cities
        </h2>

        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Previous cities"
            onClick={() => scrollBy(-1)}
            className="absolute top-1/2 -left-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-ff-red text-white transition-colors duration-200 hover:bg-ff-red-dark sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:thin]"
          >
            {CITIES.map((city) => (
              <a
                key={city.name}
                href={city.href}
                className="group relative h-[400px] w-[228px] shrink-0 overflow-hidden"
              >
                <Image
                  src={city.image}
                  alt={`Fitness First clubs in ${city.name}`}
                  fill
                  sizes="228px"
                  className="object-cover transition-transform duration-[400ms] group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-sans text-xl font-bold text-white">{city.name}</p>
                  <span className="mt-1 inline-flex items-center gap-1 font-sans text-sm text-white">
                    {city.count} {city.count === 1 ? "studio" : "studios"}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next cities"
            onClick={() => scrollBy(1)}
            className="absolute top-1/2 -right-2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center bg-ff-red text-white transition-colors duration-200 hover:bg-ff-red-dark sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-8 text-center">
          <a
            href="/gyms/all"
            className="font-sans text-[15px] text-black underline underline-offset-2"
          >
            View all 224 locations
          </a>
        </p>
      </div>
    </section>
  );
}
