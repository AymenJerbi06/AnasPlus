import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Women Only",
  description:
    "100% Femmes sessions at Anas Plus - cardio, abs, yoga and more, every week, at both Sfax clubs.",
};

const CHECKLIST = [
  "Cardio and abs sessions, 100% Femmes",
  "Women-only Yoga sessions",
  "Available at both Bouzayen and Route Tunis",
  "Led by the same qualified Anas Plus coaches",
  "Alongside our regular mixed sessions",
];

export default function WomenOnlyPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-black lg:min-h-[480px]">
        <Image
          src="/images/anasplus/class-yoga.jpg"
          alt="Woman stretching in a women-only session at Anas Plus"
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
              Women Only
            </h1>
            <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
              100% Femmes sessions, every week, at both of our clubs — a
              space to train comfortably, at your own pace.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              Fortes. Résilientes. Inarrêtables.
            </p>
            <h2 className="mt-2 font-heading text-[26px] italic uppercase text-black">
              A Space Built for You
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              Our women-only sessions were built around one idea: everyone
              should feel comfortable showing up to train. Whether you're
              brand new to the gym or you've been training for years, these
              classes give you the same coaching, the same energy, and the
              same results — in a space built just for you.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/anasplus/class-pilates.jpg"
              alt="Women-only Pilates session at Anas Plus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ff-footer px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[640px] text-center">
          <h2 className="font-heading text-[28px] italic uppercase text-black">
            What&apos;s included
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
            Schedules vary by club and season — call 53 266 222 for this
            week&apos;s women-only class times.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Ready to join a session? Call us for the schedule!"
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="VIEW ALL CLASSES"
        secondaryHref="/classes"
      />
    </>
  );
}
