import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Women’s Sessions",
  description:
    "Ask Anas Plus about women-only and mixed training sessions in Sfax and Tunis.",
};

const CHECKLIST = [
  "Ask whether a women-only session is currently available",
  "Check the timetable at Bouzayen or Route Tunis",
  "Discuss class formats with a coach before you visit",
  "Ask about both women-only and mixed sessions",
];

const LOCATIONS = [
  { name: "Anas Plus Bouzayen", city: "Sfax", href: "/gyms/bouzayen" },
  { name: "Anas Plus Route Tunis", city: "Tunis", href: "/gyms/rte-tunis" },
];

export default function WomenOnlyPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-black lg:min-h-[480px]">
        <Image
          src="/images/anasplus/club-gallery/bouzayen-zumba.webp"
          alt="Members taking part in a group class at Anas Plus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="w-full text-center lg:w-[55%] lg:text-left">
            <h1 className="font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px] sm:leading-[48px]">
              Women&apos;s Sessions
            </h1>
            <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
              Tell us what kind of training environment you&apos;re looking
              for. We&apos;ll help you check the sessions currently available
              at each club.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              Find the right session
            </p>
            <h2 className="mt-2 font-heading text-[26px] italic uppercase text-black">
              Ask About Women&apos;s Training
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              Anas Plus has shared women-only and mixed training on its
              club accounts. The schedule changes by branch and season, so
              call us to find out whether a women-only session is currently
              running and which format is available.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {LOCATIONS.map(({ name, city, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[112px] items-center gap-4 border border-[#d5d5d5] p-5 transition-colors duration-300 hover:border-ff-red motion-reduce:transition-none"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ff-red/25 text-ff-red transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-110 motion-reduce:transition-none">
                  <MapPin aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-[18px] italic uppercase text-black">{name}</span>
                  <span className="mt-1 block font-sans text-sm text-ff-graphit">{city}</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-5 w-5 text-ff-red transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ff-footer px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[640px] text-center">
          <h2 className="font-heading text-[28px] italic uppercase text-black">
            Before you visit
          </h2>
          <ul className="mx-auto mt-8 flex max-w-[420px] flex-col gap-3 text-left">
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-[15px] text-black"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-ff-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-sans text-sm text-ff-graphit">
            We&apos;ll confirm the current schedule and any requirements when
            you call 53 266 222.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Ask the team what’s available this week."
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="VIEW ALL CLASSES"
        secondaryHref="/classes"
      />
    </>
  );
}
