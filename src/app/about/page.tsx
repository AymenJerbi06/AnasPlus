import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Anas Plus Fitness Club - le goût du corps, le goût du sport. Personal coaching and group classes across two clubs in Sfax.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-black">
        <Image
          src="/images/anasplus/hero-main.jpg"
          alt="Coach training a member at Anas Plus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "70% 15%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-8">
          <div className="w-full text-center lg:w-[55%] lg:text-left">
            <h1 className="font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px]">
              About Anas Plus
            </h1>
            <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
              Le goût du corps, le goût du sport.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-[680px] text-center">
          <p className="font-sans text-[16px] leading-[1.7] text-ff-graphit">
            Anas Plus is a fitness club built around two things: the taste
            for the body, and the taste for sport. We run two clubs in
            Sfax — Anas Plus Bouzayen and Anas Plus Route Tunis — each
            offering personal coaching and a full weekly schedule of group
            classes: Pilates, Zumba, Spinning, Yoga and CrossFit.
          </p>
          <p className="mt-4 font-sans text-[16px] leading-[1.7] text-ff-graphit">
            Whether you train one-on-one with a coach or join the energy of
            a group class, our team adapts to your goals, your pace and
            your level. Several sessions each week run 100% Femmes, and
            throughout the year we bring the community together for events
            like Pilates Outdoor.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Come see for yourself. Call us to get started!"
        primaryLabel="CALL 53 266 222"
        primaryHref="tel:53266222"
        secondaryLabel="VIEW OUR CLUBS"
        secondaryHref="/gyms"
      />
    </>
  );
}
