import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Magazine",
  description:
    "The Anas Plus magazine - guides and stories on Pilates, Zumba, and training together.",
};

const ARTICLES = [
  {
    id: "pilates-guide",
    image: "/images/anasplus/article-pilates-1.jpg",
    title: "Pilates at Anas Plus: everything you need to know",
    body: [
      "Doux en apparence, puissant en réalité — Pilates transforms your body from the inside out. Built on precise, controlled movements, it strengthens your deep muscles while improving posture and mobility.",
      "At Anas Plus, sessions run on the mat and the Combo Chair, with coaches adjusting the intensity to your level. Whether you're brand new to Pilates or a regular, you'll leave every session feeling stronger, more aligned, and more in control of your body.",
    ],
  },
  {
    id: "zumba",
    image: "/images/anasplus/class-zumba-2.jpg",
    title: "Zumba at Anas Plus: energy, music, motivation",
    body: [
      "Dance it, feel it, sweat it. Zumba at Anas Plus is an explosion of energy, music and good vibes — every session feels like a party, and every level is welcome.",
      "Ambiance explosive et bonne humeur garantie: our coaches keep the choreography accessible while the music keeps the room moving. No two sessions are ever quite the same.",
    ],
  },
  {
    id: "train-together",
    image: "/images/anasplus/hero-group.jpg",
    title: "Why training together makes you stronger",
    body: [
      "Plus fort ensemble — training with a partner or a full class pushes you further than training alone. More motivation, more accountability, and a lot more energy in the room.",
      "Whether it's a CrossFit session, a Cardio Sunset class, or a Spinning ride with the whole group pedaling to the beat, our group classes are built around the idea that we train better together.",
    ],
  },
];

export default function MagazinePage() {
  return (
    <>
      <section className="bg-white px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[720px]">
          <h1 className="font-heading text-[32px] italic uppercase text-black sm:text-[40px]">
            The Anas Plus Magazine
          </h1>
          <p className="mt-3 font-sans text-[16px] text-ff-graphit">
            Guides and stories from our coaches and our classes.
          </p>
        </div>
      </section>

      {ARTICLES.map((article, i) => (
        <section
          key={article.id}
          id={article.id}
          className="scroll-mt-28 bg-white px-6 py-10 lg:px-8"
        >
          <div
            className={`container mx-auto grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-[24px] italic uppercase text-black">
                {article.title}
              </h2>
              {article.body.map((p, j) => (
                <p
                  key={j}
                  className="mt-4 font-sans text-[16px] leading-[1.6] text-ff-graphit"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaSection
        heading="Ready to feel it for yourself? Book a free trial today!"
        primaryLabel="BOOK A FREE TRIAL"
        primaryHref="/free-trial"
        secondaryLabel="VIEW ALL CLASSES"
        secondaryHref="/classes"
      />
    </>
  );
}
