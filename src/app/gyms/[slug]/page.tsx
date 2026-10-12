import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Dumbbell,
  Flower2,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import { CLUBS, getClub } from "@/data/clubs";
import ClubPhotoGallery from "@/components/gyms/ClubPhotoGallery";

type ClubPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CLUBS.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({ params }: ClubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClub(slug);

  if (!club) return { title: "Club not found" };

  return {
    title: club.name,
    description:
      club.name +
      " in " +
      club.city +
      ", Tunisia. See its training formats, latest published timetable, facilities and contact details.",
  };
}

export default async function ClubPage({ params }: ClubPageProps) {
  const { slug } = await params;
  const club = getClub(slug);
  if (!club) notFound();

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(club.mapQuery);

  return (
    <>
      <section className="relative flex min-h-[460px] items-end overflow-hidden bg-black lg:min-h-[560px]">
        <Image
          src={club.heroImage}
          alt={club.name + " group training"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-12 pt-28 lg:px-8 lg:pb-16">
          <Link href="/gyms" className="font-sans text-sm text-white/80 underline underline-offset-4 hover:text-white">
            All clubs
          </Link>
          <p className="mt-5 font-sans text-sm font-bold tracking-[0.08em] text-ff-red uppercase">
            {club.area} · {club.city}
          </p>
          <h1 className="mt-2 max-w-[760px] font-heading text-[36px] leading-tight font-bold italic uppercase text-white sm:text-[52px]">
            {club.name}
          </h1>
          <p className="mt-4 max-w-[620px] font-sans text-base leading-relaxed text-white/90 sm:text-lg">
            {club.intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#schedule" className="inline-flex items-center gap-2 border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors hover:border-ff-red-dark hover:bg-ff-red-dark">
              See timetable <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="tel:53266222" className="inline-flex items-center gap-2 border-2 border-white px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors hover:bg-white hover:text-black">
              <Phone aria-hidden="true" className="h-4 w-4" /> Ask this club
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Club information" className="sticky top-16 z-30 border-b border-[#d5d5d5] bg-white px-6 lg:px-8">
        <div className="container mx-auto flex flex-wrap gap-x-4 gap-y-1 py-2 font-sans text-sm font-semibold text-black sm:gap-x-6 sm:py-0 sm:whitespace-nowrap">
          <a href="#training" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Training</a>
          <a href="#schedule" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Timetable</a>
          <a href="#facilities" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Facilities</a>
          <a href="#coaching" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Coaching</a>
          <a href="#membership" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Membership</a>
          <a href="#visit" className="inline-flex min-h-10 items-center hover:text-ff-red focus-visible:outline-2 focus-visible:outline-ff-red">Visit</a>
        </div>
      </nav>

      <section id="training" className="scroll-mt-36 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto grid max-w-[1120px] grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Training at this club</p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">Choose your way to move</h2>
            <p className="mt-3 max-w-[460px] font-sans text-[15px] leading-relaxed text-ff-graphit">
              These formats appear in this branch&apos;s posts and timetable archive. Ask the club which ones are running now.
            </p>
            <Link href="/classes" className="mt-5 inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
              Read the class guide <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {club.trainingFormats.map((format) => (
              <li key={format} className="flex items-start gap-3 border-b border-[#e5e5e5] py-3 font-sans text-[15px] text-black">
                <Dumbbell aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ff-red" />
                <span>{format}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="schedule" className="scroll-mt-36 bg-ff-footer px-6 py-14 lg:px-8">
        <div className="container mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Class times</p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">Latest timetable post</h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              The latest timetable post found in the material reviewed was published {club.scheduleSnapshot.postedAt}. It covers {club.scheduleSnapshot.coverage}.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {club.scheduleSnapshot.days.map((day) => (
              <article key={day.day} className="border border-[#d5d5d5] bg-white p-5">
                <h3 className="font-heading text-[20px] italic uppercase text-black">{day.day}</h3>
                <ul className="mt-3 divide-y divide-[#e5e5e5]">
                  {day.entries.map((entry, index) => (
                    <li key={entry.time + entry.className + index} className="flex items-start justify-between gap-3 py-2.5 font-sans text-sm">
                      <span className="flex gap-3">
                        <time className="w-12 shrink-0 font-semibold text-black">{entry.time}</time>
                        <span className="text-ff-graphit">{entry.className}</span>
                      </span>
                      <span className="shrink-0 text-right text-xs text-ff-graphit">{entry.audience}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-[800px] border-l-2 border-ff-red bg-white px-4 py-3 font-sans text-sm leading-relaxed text-ff-graphit">
            This is an archived post, not a live schedule. Class times and women-only or mixed sessions can change; call before travelling.
          </p>
          <div className="mt-5 text-center">
            <a href="tel:53266222" className="inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
              Call 53 266 222 to confirm this week <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="facilities" className="scroll-mt-36 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Inside {club.name}</p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">Spaces and equipment</h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              Branch-specific details taken from the club&apos;s posts and photos.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {club.spaces.map((space, index) => (
              <article key={space.title} className="flex gap-4 border border-[#d5d5d5] p-5 sm:p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ff-red/25 text-ff-red">
                  {index === 0 ? <Dumbbell aria-hidden="true" className="h-6 w-6" /> : <Flower2 aria-hidden="true" className="h-6 w-6" />}
                </span>
                <div>
                  <h3 className="font-heading text-[20px] italic uppercase text-black">{space.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ff-graphit">{space.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coaching" className="scroll-mt-36 bg-black px-6 py-14 text-white lg:px-8">
        <div className="container mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <span className="flex h-14 w-14 items-center justify-center border border-ff-red/60 text-ff-red">
            <UserRound aria-hidden="true" className="h-7 w-7" />
          </span>
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Coaching</p>
            <h2 className="mt-1 font-heading text-[24px] italic uppercase">Train with guidance</h2>
            <p className="mt-2 max-w-[700px] font-sans text-[15px] leading-relaxed text-white/75">{club.coachingNote}</p>
          </div>
          <a href={club.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white px-4 py-3 font-heading text-sm italic uppercase text-white transition-colors hover:bg-white hover:text-black">
            <MessageCircle aria-hidden="true" className="h-4 w-4" /> Message this club
          </a>
        </div>
      </section>

      <section id="membership" className="scroll-mt-36 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto grid max-w-[1000px] grid-cols-1 gap-8 border border-[#d5d5d5] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Membership</p>
            <h2 className="mt-2 font-heading text-[26px] italic uppercase text-black">Get the current price before you decide</h2>
            <p className="mt-3 max-w-[700px] font-sans text-[15px] leading-relaxed text-ff-graphit">
              A current price list and membership terms are not published online. Ask this club about the price, duration, what access includes, and any separate coaching or Pilates costs.
            </p>
          </div>
          <a href="tel:53266222" className="inline-flex items-center justify-center gap-2 border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-sm italic uppercase text-white transition-colors hover:border-ff-red-dark hover:bg-ff-red-dark">
            <Phone aria-hidden="true" className="h-4 w-4" /> Ask about membership
          </a>
        </div>
      </section>

      <section className="bg-ff-footer px-6 py-14 lg:px-8">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">A look inside</p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">Photos from this club</h2>
          </div>
          <ClubPhotoGallery photos={club.gallery} clubName={club.name} />
        </div>
      </section>

      <section id="visit" className="scroll-mt-36 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto grid max-w-[1000px] grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border border-[#d5d5d5] p-6 sm:p-8">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Visit</p>
            <h2 className="mt-2 font-heading text-[24px] italic uppercase text-black">{club.area}, {club.city}</h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              Use the map search for directions. A street address and opening hours were not confirmed in the information reviewed, so call before setting out.
            </p>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-black underline underline-offset-4 hover:text-ff-red">
              <MapPin aria-hidden="true" className="h-4 w-4" /> Open map
            </a>
          </div>
          <div className="flex flex-col justify-between border border-[#d5d5d5] p-6 sm:p-8">
            <div>
              <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Next step</p>
              <h2 className="mt-2 font-heading text-[24px] italic uppercase text-black">Ask, then come by</h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
                Confirm this week&apos;s class times, membership price and a suitable first-visit time with the team.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:53266222" className="inline-flex items-center gap-2 bg-ff-black px-4 py-3 font-heading text-sm italic uppercase text-white transition-colors hover:bg-ff-red">
                <Phone aria-hidden="true" className="h-4 w-4" /> Call the club
              </a>
              <a href={club.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black px-4 py-3 font-heading text-sm italic uppercase text-black transition-colors hover:bg-black hover:text-white">
                <MessageCircle aria-hidden="true" className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1000px] text-center">
          <Link href="/gyms" className="inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
            Compare both clubs <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
