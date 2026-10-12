import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { CLUBS } from "@/data/clubs";

const QUESTIONS = [
  "What does membership cost at this club, and for how long?",
  "Which classes or training areas are included?",
  "Are personal coaching or Pilates sessions priced separately?",
  "Are there sign-up, renewal or cancellation fees?",
];

export default function PricingSection() {
  return (
    <section id="plans" className="scroll-mt-28 bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Clear before you join
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">
            Ask about membership at your club
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Anas Plus does not publish a current price list or full membership terms online. Archived offers have expired, so call the club for today&apos;s price and what it includes.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-[760px] border border-[#d5d5d5] bg-ff-footer p-6 sm:p-8">
          <h3 className="font-heading text-[21px] italic uppercase text-black">Useful questions to ask</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {QUESTIONS.map((question) => (
              <li key={question} className="flex items-start gap-3 font-sans text-sm leading-relaxed text-ff-graphit">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ff-red" />
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CLUBS.map((club) => (
            <article key={club.slug} className="border border-[#d5d5d5] p-6 sm:p-7">
              <p className="flex items-center gap-2 font-sans text-sm font-semibold text-ff-red">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {club.area}, {club.city}
              </p>
              <h3 className="mt-2 font-heading text-[22px] italic uppercase text-black">{club.name}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ff-graphit">
                Ask this team for current membership prices, included access and start dates.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                <a href="tel:53266222" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-black underline underline-offset-4 hover:text-ff-red">
                  <Phone aria-hidden="true" className="h-4 w-4" /> Call 53 266 222
                </a>
                <a href={club.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-black underline underline-offset-4 hover:text-ff-red">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" /> Message this club
                </a>
              </div>
              <Link href={"/gyms/" + club.slug} className="mt-5 inline-flex items-center gap-2 font-heading text-sm italic uppercase text-ff-red hover:text-ff-red-dark">
                View club details <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
