import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BranchClassGuide from "@/components/classes/BranchClassGuide";
import TrainingMediaSection from "@/components/classes/TrainingMediaSection";

export const metadata: Metadata = {
  title: "Classes & Training",
  description:
    "Compare training formats shown at Anas Plus Bouzayen in Sfax and Route Tunis in Tunis, then check the latest dated timetable for your club.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[820px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Classes at each club
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Classes &amp; Training
          </h1>
          <p className="mt-3 font-sans text-[16px] leading-relaxed text-ff-graphit">
            Find a format, see which branch has posted it, then check that club&apos;s dated timetable. Call the club to confirm what is running this week.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#class-guide" className="inline-flex items-center gap-2 border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-sm italic uppercase text-white transition-colors hover:bg-ff-red-dark">
              Browse formats <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#session-videos" className="border-2 border-black px-4 py-3 font-heading text-sm italic uppercase text-black transition-colors hover:bg-black hover:text-white">
              Watch club sessions
            </a>
          </div>
        </div>
      </section>

      <div id="class-guide" className="scroll-mt-24">
        <BranchClassGuide />
      </div>

      <TrainingMediaSection />

      <section className="bg-white px-6 py-12 lg:px-8">
        <div className="container mx-auto flex max-w-[900px] flex-col items-center justify-between gap-5 border border-[#d5d5d5] p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-[22px] italic uppercase text-black">Found a class to try?</h2>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ff-graphit">
              Choose a location and ask the team to confirm the next session and current membership cost.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <Link href="/gyms" className="inline-flex items-center gap-2 bg-ff-black px-4 py-3 font-heading text-sm italic uppercase text-white transition-colors hover:bg-ff-red">
              Choose a club <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/membership" className="inline-flex items-center gap-2 border border-black px-4 py-3 font-heading text-sm italic uppercase text-black transition-colors hover:bg-black hover:text-white">
              Membership info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
