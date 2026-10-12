import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { CLUBS } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Plan a Visit",
  description:
    "Choose Anas Plus Bouzayen in Sfax or Route Tunis in Tunis. Contact the club to ask about current visit and trial options.",
};

const QUESTIONS = [
  "Can I visit or try a session before I join?",
  "Which class is running this week, and who can attend?",
  "What does membership cost, and what does it include?",
];

export default function PlanVisitPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-black lg:min-h-[480px]">
        <Image
          src="/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp"
          alt="Members taking part in a group class at Anas Plus Bouzayen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="w-full text-center lg:w-[58%] lg:text-left">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">Your first visit</p>
            <h1 className="mt-2 font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px]">
              Plan a Visit
            </h1>
            <p className="mx-auto mt-4 max-w-[540px] font-sans text-[16px] leading-[1.5] text-white sm:text-[18px] lg:mx-0">
              Choose the club you want to see, then ask its team whether a visit or trial session is available. They can confirm the time and details before you travel.
            </p>
            <a
              href="#choose-club"
              className="mt-6 inline-flex items-center gap-2 border-2 border-ff-red bg-ff-red px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors hover:border-ff-red-dark hover:bg-ff-red-dark"
            >
              Choose a club <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="choose-club" className="scroll-mt-28 bg-white px-6 py-14 lg:px-8">
        <div className="container mx-auto max-w-[1080px]">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-heading text-[28px] italic uppercase text-black">Contact the right location</h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              Anas Plus has one club in Sfax and one in Tunis. Contact the branch you plan to visit.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CLUBS.map((club) => (
              <article key={club.slug} className="border border-[#d5d5d5] p-6 sm:p-7">
                <p className="flex items-center gap-2 font-sans text-sm font-semibold text-ff-red">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  {club.area}, {club.city}
                </p>
                <h3 className="mt-2 font-heading text-[22px] italic uppercase text-black">{club.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ff-graphit">
                  Ask about a visit, this week&apos;s classes and the current membership price.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  <a href="tel:53266222" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-black underline underline-offset-4 hover:text-ff-red">
                    <Phone aria-hidden="true" className="h-4 w-4" /> Call 53 266 222
                  </a>
                  <a href={club.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-black underline underline-offset-4 hover:text-ff-red">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" /> Message this club
                  </a>
                </div>
                <Link href={"/gyms/" + club.slug} className="mt-5 inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
                  See club details <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ff-footer px-6 py-14 lg:px-8">
        <div className="container mx-auto max-w-[900px]">
          <h2 className="text-center font-heading text-[26px] italic uppercase text-black">Three things to confirm</h2>
          <ul className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {QUESTIONS.map((question, index) => (
              <li key={question} className="border border-[#d5d5d5] bg-white p-5">
                <span className="font-heading text-lg italic text-ff-red">0{index + 1}</span>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ff-graphit">{question}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-sans text-sm text-ff-graphit">
            Trial availability, prices and class times are not confirmed here. The club will give you the current details.
          </p>
        </div>
      </section>
    </>
  );
}
