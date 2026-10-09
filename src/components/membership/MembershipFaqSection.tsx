import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "How is Anas Plus pricing structured?",
    answer:
      "Pricing depends on whether you choose personal coaching or group classes, your club, and your schedule. Call or message us at 53 266 222 and we'll find the right fit for your goals and budget.",
  },
  {
    number: "02",
    question: "What's the difference between the two clubs?",
    answer:
      "Anas Plus Bouzayen and Anas Plus Route Tunis each run their own weekly class schedule — Pilates, Zumba, Spinning, Yoga, CrossFit and more. Both offer personal coaching and women-only sessions. Ask us which schedule fits you best.",
  },
  {
    number: "03",
    question: "Can I try a class before signing up?",
    answer:
      "Yes — we regularly run open days and trial sessions. Follow @anasplusbouzayen or @anasplus_rte_tunis on Instagram, or call us directly, to find out when the next one is.",
  },
  {
    number: "04",
    question: "Are the group classes beginner-friendly?",
    answer:
      "Absolutely. Whether it's your first Zumba class or your hundredth CrossFit session, our coaches adapt the intensity to the room. No experience needed to join in.",
  },
  {
    number: "05",
    question: "Do you offer women-only sessions?",
    answer:
      "Yes — several sessions each week (cardio, abs, yoga and more) run as 100% Femmes classes, in addition to our mixed sessions.",
  },
  {
    number: "06",
    question: "How do I pause or cancel my membership?",
    answer:
      "Contact your Home Club directly, in person or by phone at 53 266 222, and our team will take care of it.",
  },
];

export default function MembershipFaqSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto max-w-[800px]">
        <h2 className="mb-8 text-center text-[32px] leading-[1.15] font-bold text-black uppercase not-italic font-heading">
          Frequently Asked Questions
        </h2>
        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
