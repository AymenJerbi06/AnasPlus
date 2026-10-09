"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

const FAQ_ITEMS: FaqItem[] = [
  {
    number: "01",
    question: "What does personal training cost?",
    answer:
      "Personal training helps you reach your goals faster and more effectively. Depending on your available time, budget, and goals, your personal trainer puts together a fully individual concept for you. Pricing is set independently by each coach.",
  },
  {
    number: "02",
    question: "How does a personal training session work?",
    answer:
      "First, your personal trainer gets a clear picture of your fitness level, health, and athletic experience. Together, you then define your personal training goal based on your wishes and expectations. Your coach regularly accompanies and supports you during training and, if needed, creates an individual training plan. They're your competent point of contact for all training-related questions.",
  },
  {
    number: "03",
    question: "How can a personal trainer help me?",
    answer:
      "With a personal trainer, you reach your goals faster and more effectively. Your coach answers all your questions about training and nutrition. And best of all: they keep motivating you to push past your limits! Whether it's functional training or machine-based training, your personal trainer tailors your training individually to your wishes and starting point.",
  },
  {
    number: "04",
    question:
      "What does Fitness First offer in the area of personal training?",
    answer:
      "We work with qualified, self-employed personal trainers who offer a range of services that you can book directly. The offering, the training itself, and the terms and pricing are determined by the coach. In this case, the coach is the service provider — Fitness First has no influence over it.",
  },
  {
    number: "05",
    question: "Who is personal training suitable for?",
    answer:
      "Personal training is suitable for everyone. Whether you're a beginner or advanced: a professional coach helps you reach your goals faster and better, and helps you perform every exercise correctly. They become your personal point of contact for questions about training and nutrition. A coach is also a great motivator for those days when your inner couch potato takes over. Find the right trainer for you and your goals now!",
  },
];

export function FaqSection() {
  const [openItems, setOpenItems] = useState<boolean[]>(
    () => FAQ_ITEMS.map(() => false)
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section className="bg-white px-8 py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[1/1.3] md:w-[45%]">
          <Image
            src="/images/faq-training.jpg"
            alt="Personal training leg press exercise"
            fill
            className="object-cover"
          />
        </div>

        <div className="faq-list">
          <h2 className="mb-8 text-[32px] leading-[1.15] font-bold text-black uppercase not-italic font-heading">
            Questions &amp; Answers About Personal Training
          </h2>
          <ul>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openItems[index];
              return (
                <li
                  key={item.number}
                  className="faq-item border-b border-[#e5e5e5] py-5"
                >
                  <button
                    type="button"
                    className="faq-trigger flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(index)}
                  >
                    <span className="faq-number min-w-[48px] text-[28px] font-bold text-ff-red">
                      {item.number}
                    </span>
                    <span className="faq-question flex-1 text-[18px] font-bold text-black">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "faq-chevron h-5 w-5 shrink-0 text-ff-red transition-transform duration-200 ease-in-out",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-200 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="faq-answer pt-3 pl-2 text-[15px] leading-[1.6] text-[#333333] md:pl-16">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
