import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Magazine",
  description:
    "The Anas Plus magazine - training guides, nutrition tips and stories from our classes and coaches.",
};

const CATEGORIES = ["Training", "Nutrition", "Community"] as const;

const ARTICLES = [
  {
    id: "pilates-guide",
    category: "Training",
    image: "/images/anasplus/article-pilates-1.jpg",
    title: "Pilates at Anas Plus: everything you need to know",
    body: [
      "Doux en apparence, puissant en réalité — Pilates transforms your body from the inside out. Built on precise, controlled movements, it strengthens your deep muscles while improving posture and mobility.",
      "At Anas Plus, sessions run on the mat and the Combo Chair, with coaches adjusting the intensity to your level. Whether you're brand new to Pilates or a regular, you'll leave every session feeling stronger, more aligned, and more in control of your body.",
    ],
  },
  {
    id: "training-myths",
    category: "Training",
    image: "/images/anasplus/magazine/myths.jpg",
    title: "Training myths that might be holding you back",
    body: [
      "Still believe you need hours in the gym to see results? Or that cardio is the only way to lose fat? A lot of the advice floating around is outdated — and it's often exactly what's keeping people from progressing.",
      "Our coaches hear these myths every week. The fix isn't more effort, it's understanding what you're actually doing and why. Ask your coach to walk you through your program at your next session — once you understand the 'why', real progress follows.",
    ],
  },
  {
    id: "arm-toning",
    category: "Training",
    image: "/images/anasplus/magazine/arm-toning.jpg",
    title: "4 simple exercises to tone your arms, no equipment needed",
    body: [
      "Want stronger, more toned arms without complicated gear? Anas Plus coaches put together four simple, effective, accessible moves to strengthen your upper body gently — perfect to add to any session.",
      "Each movement is designed to improve posture, strength and stability at the same time. Ask your coach to show you the full routine next time you're in, and work it into your regular Anas Plus training.",
    ],
  },
  {
    id: "nutrition-rules",
    category: "Nutrition",
    image: "/images/anasplus/magazine/nutrition.jpg",
    title: "Nutrition & training: 4 golden rules for performance",
    body: [
      "A great workout isn't enough on its own — what you eat around it matters just as much. Four simple habits from our coaches: protein after your session to help recovery, regular hydration to keep your body at its best, a light pre-training snack for an energy boost, and cutting back on excess sugar for results that last.",
      "Small habits, big difference. Start applying these four at your very next session at Anas Plus.",
    ],
  },
  {
    id: "hydration",
    category: "Nutrition",
    image: "/images/anasplus/magazine/hydration.jpg",
    title: "Why water is your best training partner",
    body: [
      "Staying hydrated isn't just about quenching your thirst. Drinking regularly boosts your energy, protects your muscles, and improves how you perform in every session.",
      "Keep a bottle with you at the club and sip throughout your workout, not just when you feel thirsty — by then, your performance has already started to dip. Better hydration really does mean better training.",
    ],
  },
  {
    id: "zumba",
    category: "Community",
    image: "/images/anasplus/class-zumba-2.jpg",
    title: "Zumba at Anas Plus: energy, music, motivation",
    body: [
      "Dance it, feel it, sweat it. Zumba at Anas Plus is an explosion of energy, music and good vibes — every session feels like a party, and every level is welcome.",
      "Ambiance explosive et bonne humeur garantie: our coaches keep the choreography accessible while the music keeps the room moving. No two sessions are ever quite the same.",
    ],
  },
  {
    id: "train-together",
    category: "Community",
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="border border-[#9c9e9f] px-4 py-2 font-sans text-sm font-bold text-black transition-colors duration-200 hover:border-ff-red hover:text-ff-red"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <div key={cat}>
          <div
            id={cat.toLowerCase()}
            className="scroll-mt-28 bg-ff-footer px-6 py-5 text-center lg:px-8"
          >
            <h2 className="font-heading text-[22px] italic uppercase text-black">
              {cat}
            </h2>
          </div>
          {ARTICLES.filter((a) => a.category === cat).map((article, i) => (
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
                  <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
                    {article.category}
                  </p>
                  <h3 className="mt-2 font-heading text-[24px] italic uppercase text-black">
                    {article.title}
                  </h3>
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
        </div>
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
