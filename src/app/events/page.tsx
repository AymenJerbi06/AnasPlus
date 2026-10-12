import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import CtaSection from "@/components/CtaSection";
import ClubPhotoGallery from "@/components/gyms/ClubPhotoGallery";

export const metadata: Metadata = {
  title: "Events & Community",
  description:
    "See photos and video from Anas Plus community sessions in Tunisia, including Pilates Outdoor events.",
};

const EVENT_PHOTOS = [
  {
    src: "/images/anasplus/club-gallery/pilates-outdoor-community.webp",
    alt: "Members gathered for the Anas Plus Pilates Outdoor event",
  },
  {
    src: "/images/anasplus/club-gallery/pilates-outdoor-session.webp",
    alt: "Participants moving together at an Anas Plus outdoor class",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[760px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            More than a gym
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Events &amp; Community
          </h1>
          <p className="mt-3 font-sans text-[16px] leading-relaxed text-ff-graphit">
            From special classes to outdoor gatherings, Anas Plus brings members together in Sfax and Tunis. Browse moments from the club archive and follow the official accounts for new dates.
          </p>
        </div>
      </section>

      <section id="pilates-outdoor" className="scroll-mt-28 bg-ff-footer px-6 py-14 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              Past event · November 20, 2025
            </p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black sm:text-[34px]">
              Pilates Outdoor
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              The first Pilates Outdoor event brought together more than 600 participants for movement, breathing and time together outdoors. The club shared this recap from its Route Tunis location in Tunis; check Instagram for future gatherings.
            </p>
          </div>

          <ClubPhotoGallery photos={EVENT_PHOTOS} clubName="Pilates Outdoor" />
          <details className="mx-auto mt-6 max-w-[760px] border border-[#d5d5d5] bg-white">
            <summary className="group flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-base italic uppercase text-black focus-visible:outline-2 focus-visible:outline-ff-red [&::-webkit-details-marker]:hidden">
              <span>Watch the event recap</span>
              <ChevronDown aria-hidden="true" className="h-5 w-5 text-ff-red transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none" />
            </summary>
            <div className="border-t border-[#d5d5d5] p-5">
              <div className="relative mx-auto aspect-[4/5] max-w-[420px] bg-black">
                <video
                  src="/videos/anasplus/pilates-outdoor-event-nov-2025.mp4"
                  poster="/images/anasplus/club-gallery/pilates-outdoor-community.webp"
                  controls
                  playsInline
                  preload="none"
                  aria-label="Video recap of the Anas Plus Pilates Outdoor event in November 2025"
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="hyrox-intro" className="scroll-mt-28 bg-black px-6 py-14 text-white lg:px-8">
        <div className="container mx-auto max-w-[900px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Special session · announced 4 October 2026
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase sm:text-[34px]">
            HYROX introduction
          </h2>
          <p className="mt-3 max-w-[760px] font-sans text-[15px] leading-relaxed text-white/80">
            An affiliated community post announced a one-off, noncompetitive HYROX taster for beginners and experienced participants. The listed session combined running, sled pushes and pulls, burpees, rowing, SkiErg, wall balls and farmer&apos;s carries.
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-white/20 pt-5 sm:grid-cols-2">
            <div>
              <dt className="font-sans text-xs font-bold tracking-wide text-ff-red uppercase">Listed date and time</dt>
              <dd className="mt-1 font-sans text-sm">Sunday, 11 October 2026 · 16:30–18:00</dd>
            </div>
            <div>
              <dt className="font-sans text-xs font-bold tracking-wide text-ff-red uppercase">Listed venue</dt>
              <dd className="mt-1 font-sans text-sm">Anas Plus Route Tunis · Tunis</dd>
            </div>
          </dl>
          <p className="mt-5 font-sans text-sm text-white/65">
            This was a single event listing, not a recurring class. Follow the clubs or call to ask whether another taster is planned.
          </p>
        </div>
      </section>

      <section id="open-days" className="scroll-mt-28 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/images/anasplus/club-gallery/route-tunis-community-night.webp"
              alt="A live music performance at an Anas Plus Route Tunis community gathering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              Club life
            </p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">
              Classes, open days &amp; community
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              The club archive shows group classes alongside community gatherings and celebrations. Event dates change through the year, so follow Bouzayen or Route Tunis to see what is coming up next.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://instagram.com/anasplusbouzayen" target="_blank" rel="noopener noreferrer" className="border-2 border-black bg-black px-4 py-3 font-heading text-[15px] italic uppercase text-white transition-colors hover:border-ff-graphit hover:bg-ff-graphit">
                Follow Bouzayen
              </a>
              <a href="https://instagram.com/anasplus_rte_tunis" target="_blank" rel="noopener noreferrer" className="border-2 border-black px-4 py-3 font-heading text-[15px] italic uppercase text-black transition-colors hover:bg-black hover:text-white">
                Follow Route Tunis
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ask the club about the next outdoor session or community event."
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="CHOOSE A CLUB"
        secondaryHref="/gyms"
      />
    </>
  );
}
