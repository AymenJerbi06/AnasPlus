import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "Where can I see the current prices?",
    answer:
      "Call or message the club at 53 266 222. Rates can change, and the archived social posts include offers with past expiry dates rather than a current price list.",
  },
  {
    number: "02",
    question: "Can I ask about group sessions and personal coaching together?",
    answer:
      "Yes. Tell the team which club you prefer and whether you are interested in group sessions, one-to-one coaching or both. They can explain the current options and rates.",
  },
  {
    number: "03",
    question: "Are offers on older posts still available?",
    answer:
      "Only the club can confirm whether a promotion is active. Call 53 266 222 before making plans based on an older post.",
  },
  {
    number: "04",
    question: "How do I discuss a membership in person?",
    answer:
      "Use Plan a Visit to choose a branch, or call the team at 53 266 222 to arrange a conversation.",
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
