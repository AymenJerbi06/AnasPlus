"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/content";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openItems, setOpenItems] = useState<boolean[]>(() =>
    items.map(() => false)
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <ul>
      {items.map((item, index) => {
        const isOpen = openItems[index];
        return (
          <li key={item.number} className="faq-item border-b border-[#e5e5e5] py-5">
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
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
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
  );
}
