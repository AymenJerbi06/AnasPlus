import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Free Trial",
  description:
    "Book a free trial session at Anas Plus - try a class or a coaching session, no commitment required.",
};

const STEPS = [
  { number: "- 1 -", text: "Call or message us to pick your club and a time." },
  { number: "- 2 -", text: "Choose a class or a coaching session to try." },
  { number: "- 3 -", text: "Show up, train, and see how it feels." },
];

export default function FreeTrialPage() {
  return (
    <>
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-black lg:min-h-[480px]">
        <Image
          src="/images/anasplus/class-zumba-2.jpg"
          alt="Anas Plus member trying a class"
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
              Start Your Free Trial
            </h1>
            <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
              Come feel the energy for yourself — try a class or a coaching
              session at either club, no commitment required.
            </p>
            <a
              href="tel:53266222"
              className="mt-6 inline-block rounded-none border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
            >
              Call 53 266 222
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ff-black px-8 py-16">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center font-sans text-2xl font-bold not-italic normal-case text-white">
            How your free trial works
          </h2>
          <div className="flex flex-col gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex-1">
                <span className="mb-3 block text-2xl font-bold text-ff-red">
                  {step.number}
                </span>
                <p className="mx-auto max-w-[220px] text-base font-bold leading-[1.4] text-white">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready when you are. Call us and pick your first session!"
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="VIEW CLASSES"
        secondaryHref="/classes"
      />
    </>
  );
}
