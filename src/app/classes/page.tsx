import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

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

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "How do I book a class?",
    answer:
      "Call or message your Home Club at 53 266 222 and we'll get you on the schedule. Members can also ask their coach to add a recurring class to their weekly plan.",
  },
  {
    number: "02",
    question: "What should I bring?",
    answer:
      "Comfortable sportswear, a bottle of water, and a towel. For Pilates and Yoga sessions, bring a mat if you have one — we also have a limited number available at the club.",
  },
  {
    number: "03",
    question: "Are classes suitable for beginners?",
    answer:
      "Yes. Every class is led by a coach who adapts the intensity to the room — whether it's your first Zumba class or your hundredth CrossFit session, you'll be able to follow along.",
  },
  {
    number: "04",
    question: "Can I try a class before joining?",
    answer:
      "Of course — book a free trial session and pick any class on the schedule. No commitment required.",
  },
  {
    number: "05",
    question: "Which classes have women-only sessions?",
    answer:
      "Several of our cardio, abs and Yoga sessions run as 100% Femmes each week, alongside our mixed classes. Call us for this week's schedule.",
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {CLASSES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="border border-[#9c9e9f] px-4 py-2 font-sans text-sm font-bold text-black transition-colors duration-200 hover:border-ff-red hover:text-ff-red"
              >
                {c.name}
              </a>
            ))}
          </div>
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

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[800px]">
          <h2 className="mb-8 text-center text-[32px] leading-[1.15] font-bold text-black uppercase not-italic font-heading">
            Questions About Classes
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

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
