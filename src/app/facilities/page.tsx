import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { CLUBS } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Facilities & Training Spaces",
  description:
    "See the spaces documented at Anas Plus Bouzayen in Sfax and Route Tunis in Tunis.",
};

const SPACE_IMAGES: Record<string, { src: string; alt: string }> = {
  bouzayen: {
    src: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
    alt: "Reformer equipment in the Anas Plus Bouzayen Pilates studio",
  },
  "rte-tunis": {
    src: "/images/anasplus/club-gallery/route-tunis-training-floor-july-2025.webp",
    alt: "Members training on the floor at Anas Plus Route Tunis",
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[800px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Inside Anas Plus
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Facilities &amp; Training Spaces
          </h1>
          <p className="mt-3 font-sans text-[16px] leading-relaxed text-ff-graphit">
            Explore each club separately. The details below come from that branch&apos;s photos and posts.
          </p>
        </div>
      </section>

      <section className="bg-ff-footer px-6 py-12 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CLUBS.map((club) => {
            const image = SPACE_IMAGES[club.slug];
            return (
              <article key={club.slug} className="overflow-hidden border border-[#d5d5d5] bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="font-sans text-sm font-semibold text-ff-red">{club.area}, {club.city}</p>
                  <h2 className="mt-2 font-heading text-[24px] italic uppercase text-black">{club.name}</h2>
                  <ul className="mt-5 flex flex-col gap-5">
                    {club.spaces.map((space) => (
                      <li key={space.title}>
                        <h3 className="font-heading text-[18px] italic uppercase text-black">{space.title}</h3>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-ff-graphit">{space.detail}</p>
                      </li>
                    ))}
                  </ul>
                  <Link href={"/gyms/" + club.slug + "#facilities"} className="mt-6 inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
                    View this club <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-6 py-12 lg:px-8">
        <div className="container mx-auto flex max-w-[900px] flex-col items-start gap-4 border border-[#d5d5d5] p-6 sm:flex-row sm:items-center sm:p-7">
          <CircleHelp aria-hidden="true" className="h-6 w-6 shrink-0 text-ff-red" />
          <div>
            <h2 className="font-heading text-[20px] italic uppercase text-black">Need a specific amenity?</h2>
            <p className="mt-1 font-sans text-sm leading-relaxed text-ff-graphit">
              Changing rooms, showers, access needs and opening hours are not confirmed in the club information reviewed. Call your preferred branch before visiting.
            </p>
          </div>
          <Link href="/gyms" className="shrink-0 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
            Choose a club
          </Link>
        </div>
      </section>
    </>
  );
}
