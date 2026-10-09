import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Anas Plus Fitness Club.",
};

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "How is Anas Plus pricing structured?",
    answer:
      "Pricing depends on whether you choose personal coaching or group classes, your club, and your schedule. Call or message us at 53 266 222 and we'll find the right fit for your goals and budget.",
  },
  {
    number: "02",
    question: "What classes do you offer?",
    answer:
      "Pilates, Zumba, Spinning, Yoga and CrossFit, across both our Bouzayen and Route Tunis clubs — plus one-on-one personal coaching.",
  },
  {
    number: "03",
    question: "Do you offer women-only sessions?",
    answer:
      "Yes — several sessions each week (cardio, abs, yoga and more) run as 100% Femmes classes, in addition to our mixed sessions.",
  },
  {
    number: "04",
    question: "Can I try a class before signing up?",
    answer:
      "Yes — book a free trial session any time. Call 53 266 222 or follow our Instagram accounts for open days and trial sessions.",
  },
  {
    number: "05",
    question: "How do I pause or cancel my membership?",
    answer:
      "Contact your Home Club directly, in person or by phone at 53 266 222, and our team will take care of it.",
  },
  {
    number: "06",
    question: "Where are your clubs located?",
    answer:
      "We have two clubs in Sfax: Anas Plus Bouzayen and Anas Plus Route Tunis. Call us for directions to either location.",
  },
];

export default function FaqPage() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto max-w-[800px]">
        <h1 className="mb-8 text-center text-[32px] leading-[1.15] font-bold text-black uppercase not-italic font-heading">
          Frequently Asked Questions
        </h1>
        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
