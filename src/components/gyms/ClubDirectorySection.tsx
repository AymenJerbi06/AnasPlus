import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Phone } from "lucide-react";
import { CLUBS } from "@/data/clubs";

export default function ClubDirectorySection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-8" aria-labelledby="club-directory-title">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 id="club-directory-title" className="font-heading text-[28px] italic uppercase text-black">
            Choose your club
          </h2>
          <p className="mt-2 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Start with the city that works for you. Each club page has its training, timetable post, facilities and contact links.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CLUBS.map((club) => (
            <article key={club.slug} className="overflow-hidden border border-[#d5d5d5] bg-white">
              <Link href={"/gyms/" + club.slug} className="group relative block aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src={club.cardImage}
                  alt={club.name + " in " + club.city}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  {club.area}, {club.city}
                </span>
              </Link>

              <div className="p-5 sm:p-6">
                <h3 className="font-heading text-[22px] italic uppercase text-black">{club.name}</h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-ff-graphit">{club.intro}</p>
                <div className="mt-4 flex items-start gap-2 font-sans text-sm text-ff-graphit">
                  <CalendarDays aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ff-red" />
                  <span>Latest timetable post: {club.scheduleSnapshot.postedAt}. Check the club page for the dated snapshot.</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={club.name + " training formats"}>
                  {club.trainingFormats.slice(0, 4).map((format) => (
                    <li key={format} className="border border-[#d5d5d5] px-3 py-1 font-sans text-xs text-ff-graphit">
                      {format}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Link href={"/gyms/" + club.slug} className="inline-flex items-center gap-2 font-heading text-[15px] italic uppercase text-ff-red hover:text-ff-red-dark">
                    Explore this club <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  <a href="tel:53266222" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-black underline underline-offset-4 hover:text-ff-red">
                    <Phone aria-hidden="true" className="h-4 w-4" /> Ask about current times
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
