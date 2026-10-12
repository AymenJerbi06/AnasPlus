"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ClubPhoto = { src: string; alt: string };

export default function ClubPhotoGallery({
  photos,
  clubName,
}: {
  photos: ClubPhoto[];
  clubName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const photo = photos[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <div className="mx-auto mt-10 max-w-[1040px]">
      <div className="relative aspect-[4/3] overflow-hidden bg-black md:aspect-[16/9]">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1040px) 1040px, 100vw"
          className="object-cover"
          priority={activeIndex === 0}
        />
        {photos.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Show previous photo"
              onClick={() => move(-1)}
              className="group absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/65 text-white transition-colors hover:bg-ff-red focus-visible:outline-2 focus-visible:outline-white sm:left-5"
            >
              <ChevronLeft aria-hidden="true" className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              aria-label="Show next photo"
              onClick={() => move(1)}
              className="group absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/65 text-white transition-colors hover:bg-ff-red focus-visible:outline-2 focus-visible:outline-white sm:right-5"
            >
              <ChevronRight aria-hidden="true" className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
            </button>
            <span className="absolute right-4 bottom-4 bg-black/70 px-3 py-1 font-sans text-xs font-semibold text-white">
              {activeIndex + 1} / {photos.length}
            </span>
          </>
        )}
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-sans text-sm text-ff-graphit" aria-live="polite">
          {photo.alt}
        </p>
        <div className="flex items-center gap-2" role="group" aria-label={`${clubName} photo gallery`}>
          {photos.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className="flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-ff-red"
            >
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 rounded-full transition-[transform,background-color] duration-200 motion-reduce:transition-none ${
                  index === activeIndex
                    ? "scale-125 bg-ff-red"
                    : "bg-ff-medium-grey/40 motion-safe:hover:scale-125 hover:bg-ff-red"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
