import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Pilates Outdoor, open days and community events at Anas Plus Fitness Club in Sfax.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[720px]">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            More than a gym
          </p>
          <h1 className="mt-2 font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            Events &amp; Community
          </h1>
          <p className="mt-3 font-sans text-[16px] text-ff-graphit">
            From outdoor sessions to open days, we train together off the
            schedule too. Follow us on Instagram for the next one.
          </p>
        </div>
      </section>

      <section
        id="pilates-outdoor"
        className="scroll-mt-28 bg-white px-6 py-10 lg:px-8"
      >
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/anasplus/hero-group.jpg"
              alt="Pilates Outdoor by Anas Plus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-[28px] italic uppercase text-black">
              Pilates Outdoor
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              Our first edition of Pilates Outdoor brought together over 600
              participants for a session like no other — open air, open to
              everyone, powered entirely by Anas Plus energy. Merci pour
              l&apos;énergie — rendez-vous au prochain événement!
            </p>
          </div>
        </div>
      </section>

      <section
        id="open-days"
        className="scroll-mt-28 bg-ff-footer px-6 py-10 lg:px-8"
      >
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-heading text-[28px] italic uppercase text-black">
              Open Days
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              Throughout the year we open our doors for open-house days,
              including special sessions for high school graduates
              (bacheliers) exploring Anas Plus for the first time. Follow
              @anasplusbouzayen or @anasplus_rte_tunis for the next date.
            </p>
            <a
              href="/free-trial"
              className="mt-6 inline-block border-2 border-black bg-black px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 hover:border-ff-graphit hover:bg-ff-graphit"
            >
              Book a Free Trial Instead
            </a>
          </div>
          <div className="relative order-1 aspect-[4/3] w-full overflow-hidden lg:order-2">
            <Image
              src="/images/anasplus/class-zumba-2.jpg"
              alt="Open day session at Anas Plus"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CtaSection
        heading="Don't miss the next one — follow us for event dates!"
        primaryLabel="INSTAGRAM: BOUZAYEN"
        primaryHref="https://instagram.com/anasplusbouzayen"
        secondaryLabel="INSTAGRAM: ROUTE TUNIS"
        secondaryHref="https://instagram.com/anasplus_rte_tunis"
      />
    </>
  );
}
