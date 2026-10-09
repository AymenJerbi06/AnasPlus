import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "What does personal coaching cost?",
    answer:
      "Pricing depends on your goals, your schedule, and the club you train at. Call or message us at 53 266 222 and we'll walk you through the options for personal coaching and group classes together.",
  },
  {
    number: "02",
    question: "How does a coaching session work?",
    answer:
      "Your coach starts by getting to know your fitness level, your goals, and your availability. From there, we build a training plan around you — strength, cardio, Pilates, or a hybrid mix — and your coach stays with you every session to track progress and adjust as you improve.",
  },
  {
    number: "03",
    question: "What's the difference between coaching and group classes?",
    answer:
      "Personal coaching (Coaching perso) is one-on-one, fully built around your goals and pace. Group classes (Cours collectifs) — Pilates, Zumba, Spinning, Yoga and more — give you the energy of training with others, led by one of our coaches. Many members do both.",
  },
  {
    number: "04",
    question: "Do you offer women-only sessions?",
    answer:
      "Yes. Several of our weekly sessions — including cardio, abs, and yoga — run as 100% Femmes (women-only) classes, alongside our mixed sessions. Check the schedule at your club for exact times.",
  },
  {
    number: "05",
    question: "Who is this for?",
    answer:
      "Anyone — whether you're just getting started or you've been training for years. Our coaches meet you where you are and build from there, and our classes welcome every level, from first-timers to regulars.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-white px-8 py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[1/1.3]">
          <Image
            src="/images/anasplus/class-pilates.jpg"
            alt="Anas Plus member in a seated Pilates stretch"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="faq-list">
          <h2 className="mb-8 text-[32px] leading-[1.15] font-bold text-black uppercase not-italic font-heading">
            Questions &amp; Answers About Coaching
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
