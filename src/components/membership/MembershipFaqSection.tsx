import FaqAccordion from "@/components/FaqAccordion";
import type { FaqItem } from "@/types/content";

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "How are Fitness First's prices structured?",
    answer:
      "With a 24-month membership, you currently pay no signup fee. The 6-month training package costs €39 (or €49 at select clubs). As a RED member you pay from €5.90 per week; BLACK club membership starts from €17.90 per week.",
  },
  {
    number: "02",
    question: "What is the difference between Fitness First RED and BLACK?",
    answer:
      "Fitness First RED focuses on the essentials: effective, individual training with excellent value for money. Fitness First BLACK is high-end fitness at the highest level, with spacious wellness areas, exclusive services, and more comprehensive coaching support. Availability depends on your chosen club.",
  },
  {
    number: "03",
    question: "Does Fitness First offer day or week passes?",
    answer:
      "Yes. A RED day pass is €19, and a RED week pass is €49. For BLACK clubs, a day pass is €29 and a week pass is €79. Day and week passes can be purchased directly at the club.",
  },
  {
    number: "04",
    question: "What is the training package?",
    answer:
      "The Fitness First training package includes a fitness assessment and body analysis twice a year, plus a personal training plan built around your individual goals and preferences.",
  },
  {
    number: "05",
    question: "I'm already a member elsewhere. Do you have special offers?",
    answer:
      "Switching to Fitness First is quick and easy. Depending on the remaining term of your current membership, we'll cover up to 12 months of membership fees when you switch.",
  },
  {
    number: "06",
    question: "Can I transfer my membership to someone else?",
    answer:
      "Membership is tied to the contract holder and cannot be transferred to another person.",
  },
  {
    number: "07",
    question: "How do I cancel my membership?",
    answer:
      "If you've decided to leave Fitness First, you can end your membership through our membership cancellation page, or by contacting your Home Club's service team directly.",
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
