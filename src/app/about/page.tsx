import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Anas Plus",
  description:
    "Follow the story of Anas Plus through club posts, community events and training spaces in Sfax and Tunis.",
};

const MILESTONES = [
  {
    date: "May 2017",
    title: "The archive begins",
    copy:
      "The earliest indexed Bouzayen post in the supplied club archive is dated 11 May 2017. It features a CrossFit session.",
  },
  {
    date: "November 2025",
    title: "Pilates Outdoor brings people together",
    copy:
      "The first recorded Pilates Outdoor gathering moved beyond the club floor and brought the wider community together.",
  },
  {
    date: "June 2026",
    title: "A dedicated Pilates studio opens",
    copy:
      "Bouzayen’s June posts mark a new chapter in the club’s specialist training spaces.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-black">
        <Image
          src="/images/anasplus/club-gallery/bouzayen-group-training.webp"
          alt="Anas Plus members training together"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="w-full text-center lg:w-[55%] lg:text-left">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              A Tunisian club story
            </p>
            <h1 className="mt-2 font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px]">
              Anas Plus, over time
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] font-sans text-[16px] leading-[1.5] text-white sm:text-[18px] lg:mx-0">
              A fitness community across Bouzayen in Sfax and Route Tunis in
              Tunis, seen through the moments its clubs have shared.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[860px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              From the club archive
            </p>
            <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black sm:text-[34px]">
              A timeline told by real club moments
            </h2>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
              The dates below come from Anas Plus posts and event records. They
              show how the club’s activity has changed without turning old
              offers or timetables into current promises.
            </p>
          </div>

          <ol className="mt-10 border-l-2 border-ff-red pl-6 sm:pl-8">
            {MILESTONES.map((milestone) => (
              <li key={milestone.date} className="relative pb-9 last:pb-0">
                <span aria-hidden="true" className="absolute top-1 -left-[33px] h-3 w-3 bg-ff-red sm:-left-[41px]" />
                <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
                  {milestone.date}
                </p>
                <h3 className="mt-2 font-heading text-[22px] italic uppercase text-black">
                  {milestone.title}
                </h3>
                <p className="mt-2 max-w-[680px] font-sans text-[15px] leading-relaxed text-ff-graphit">
                  {milestone.copy}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-[#d5d5d5] pt-8">
            <Link href="/facilities" className="inline-flex items-center gap-2 font-heading text-[15px] italic uppercase text-ff-red hover:text-ff-red-dark">
              See the training spaces <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/events" className="inline-flex items-center gap-2 font-heading text-[15px] italic uppercase text-ff-red hover:text-ff-red-dark">
              Browse club events <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
