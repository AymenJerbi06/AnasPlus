import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

const STATS = [
  { value: "2", label: "Clubs in Sfax" },
  { value: "5+", label: "Weekly classes" },
  { value: "14K+", label: "Instagram community" },
  { value: "600+", label: "At our first Pilates Outdoor" },
];

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

      <section className="bg-black px-6 py-14 lg:px-8">
        <div className="container mx-auto grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-[32px] italic text-ff-red">
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-sm text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/anasplus/class-strength.jpg"
              alt="Anas Plus coach guiding a member"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
              Our coaches
            </p>
            <h2 className="mt-2 font-heading text-[26px] italic uppercase text-black">
              Led By People Who Train Here Too
            </h2>
            <p className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit">
              Every Anas Plus coach is qualified across the classes they
              teach, from personal coaching to Pilates, Zumba, Spinning,
              Yoga and CrossFit. They know the regulars by name, adapt
              every session to the room, and show up with the same energy
              whether it's your first class or your five hundredth.
            </p>
            <a
              href="/personal-training#video"
              className="mt-6 inline-block border-2 border-black bg-black px-5 py-3 font-heading text-[15px] italic uppercase text-white transition-colors duration-200 hover:border-ff-graphit hover:bg-ff-graphit"
            >
              Meet Coach Anas
            </a>
          </div>
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
