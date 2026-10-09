import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Pilates, Zumba, Spinning, Yoga and CrossFit at Anas Plus - group classes for every level, across two clubs in Sfax.",
};

const CLASSES = [
  {
    id: "pilates",
    name: "Pilates",
    image: "/images/anasplus/class-pilates.jpg",
    description:
      "Strength, balance, posture & control on the mat and the Combo Chair. Doux en apparence, puissant en réalité — Pilates transforms your body from the inside out.",
  },
  {
    id: "zumba",
    name: "Zumba",
    image: "/images/anasplus/class-zumba-2.jpg",
    description:
      "Dance it, feel it, sweat it. Ambiance explosive et bonne humeur garantie — no two Zumba sessions at Anas Plus are ever quite the same.",
  },
  {
    id: "spinning",
    name: "Spinning",
    image: "/images/anasplus/class-spinning.jpg",
    description:
      "Tuesdays & Thursdays, pedal to the beat. Burns maximum calories, builds endurance, strengthens your lower body, and melts away stress.",
  },
  {
    id: "yoga",
    name: "Yoga",
    image: "/images/anasplus/class-yoga.jpg",
    description:
      "Slow down, breathe, and reset. Several Yoga sessions each week run 100% Femmes, alongside our mixed sessions.",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    image: "/images/anasplus/class-strength.jpg",
    description:
      "Force, endurance, dépassement — strength, speed and endurance in one high-intensity session, pure energy to close out your week.",
  },
];

export default function ClassesPage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[720px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            One gym, endless vibes
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Our Classes
          </h1>
          <p className="mt-3 font-sans text-[16px] text-ff-graphit">
            Five ways to train at Anas Plus, led by our coaches, across both
            clubs in Sfax. Call 53 266 222 for the full weekly schedule.
          </p>
        </div>
      </section>

      {CLASSES.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className="scroll-mt-28 bg-white px-6 py-10 lg:px-8"
        >
          <div
            className={`container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={c.image}
                alt={`${c.name} class at Anas Plus`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-[28px] italic uppercase text-black">
                {c.name}
              </h2>
              <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
                {c.description}
              </p>
              <a
                href="/free-trial"
                className="mt-6 inline-block border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
              >
                Try {c.name}
              </a>
            </div>
          </div>
        </section>
      ))}

      <CtaSection
        heading="Found your class? Call us to book your spot!"
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="VIEW MEMBERSHIP PLANS"
        secondaryHref="/membership#plans"
      />
    </>
  );
}
