import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Help & FAQs",
  description:
    "Find the right Anas Plus page for membership, class schedules, first visits and club contacts.",
};

const HELP_LINKS = [
  {
    title: "Membership and current prices",
    text: "See the membership options and ask the club for current rates.",
    href: "/membership",
  },
  {
    title: "Class formats and timetable posts",
    text: "Browse class descriptions, then check the branch notes for recent schedule posts.",
    href: "/classes",
  },
  {
    title: "Club location and branch details",
    text: "Compare Bouzayen and Route Tunis and open the right club profile.",
    href: "/gyms",
  },
  {
    title: "Plan a first visit",
    text: "Find out how to contact the team and ask about trying a session.",
    href: "/free-trial",
  },
  {
    title: "Women’s sessions",
    text: "Ask about women-only and mixed sessions at your preferred branch.",
    href: "/women-only",
  },
  {
    title: "Contact or manage a membership",
    text: "Reach the club team about directions, schedules or an existing membership.",
    href: "/contact",
  },
];

export default function FaqPage() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Help &amp; information
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Find the answer you need
          </h1>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Go straight to the subject you need. Class times, visit options and
            prices can change, so contact the selected club to confirm them.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HELP_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[190px] flex-col justify-between border border-[#d5d5d5] p-5 transition-colors hover:border-ff-red"
            >
              <div>
                <h2 className="font-heading text-[20px] italic uppercase text-black">
                  {item.title}
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ff-graphit">
                  {item.text}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red">
                Go to section
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
