import Link from "next/link";
import {
  Activity,
  BookOpen,
  CircleQuestionMark,
  CreditCard,
  Dumbbell,
  MapPin,
  PartyPopper,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

const DESTINATIONS: {
  title: string;
  summary: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Our Clubs",
    summary: "Sfax · Tunis",
    href: "/gyms",
    Icon: MapPin,
  },
  {
    title: "Facilities",
    summary: "Training floors · Pilates studio",
    href: "/facilities",
    Icon: Dumbbell,
  },
  {
    title: "Classes",
    summary: "Explore training formats",
    href: "/classes",
    Icon: Activity,
  },
  {
    title: "Personal Coaching",
    summary: "One-to-one coaching",
    href: "/personal-training",
    Icon: UserRound,
  },
  {
    title: "Membership",
    summary: "Options · Ask for current prices",
    href: "/membership",
    Icon: CreditCard,
  },
  {
    title: "Women’s Sessions",
    summary: "Women-only · Mixed",
    href: "/women-only",
    Icon: Users,
  },
  {
    title: "Events & Community",
    summary: "Club moments · Special events",
    href: "/events",
    Icon: PartyPopper,
  },
  {
    title: "Magazine",
    summary: "Training · Nutrition",
    href: "/magazine",
    Icon: BookOpen,
  },
  {
    title: "Help & FAQs",
    summary: "Visits · Schedules · Membership",
    href: "/faq",
    Icon: CircleQuestionMark,
  },
];

export default function HomeExplorerSection() {
  return (
    <section id="explore" className="scroll-mt-24 bg-white px-6 py-20 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Your next step
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black sm:text-[34px]">
            Explore Anas Plus
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Pick a section. Each one takes you to a different part of the club.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {DESTINATIONS.map(({ title, summary, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-h-[152px] items-center gap-5 border border-[#d5d5d5] bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:border-ff-red hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ff-red sm:p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-ff-red/25 text-ff-red transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-110 motion-reduce:transition-none">
                <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-[20px] italic uppercase text-black">
                  {title}
                </span>
                <span className="mt-1 block font-sans text-sm leading-relaxed text-ff-graphit">
                  {summary}
                </span>
              </span>
              <span aria-hidden="true" className="font-heading text-xl text-ff-red transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
