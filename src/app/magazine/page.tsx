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
      "Pilates pairs precise, controlled movement with work on balance, posture and mobility. Recent Anas Plus sessions have included the Combo Chair.",
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
      "Common questions include how much training is enough and how to combine strength and cardio. Ask a coach to explain the options that fit your goals and experience.",
    ],
  },
  {
    id: "arm-toning",
    category: "Training",
    image: "/images/anasplus/magazine/arm-toning.jpg",
    title: "Talk with a coach about upper-body strength",
    body: [
      "Interested in upper-body strength? Talk with a coach about the equipment, movement options and level that suit your current training.",
      "A coach can demonstrate a movement and help you decide whether it belongs in your routine. Ask at Bouzayen or Route Tunis.",
    ],
  },
  {
    id: "nutrition-rules",
    category: "Nutrition",
    image: "/images/anasplus/magazine/nutrition.jpg",
    title: "Nutrition and training",
    body: [
      "Nutrition needs vary from person to person. For advice connected to your health or training plan, speak with a qualified nutrition professional.",
      "At the club, you can ask a coach how nutrition and training are discussed in your sessions.",
    ],
  },
  {
    id: "hydration",
    category: "Nutrition",
    image: "/images/anasplus/magazine/hydration.jpg",
    title: "Water and your workout",
    body: [
      "Bring water for your workout and take breaks as needed. If you have individual hydration needs, follow advice from your healthcare professional.",
      "A coach can help you plan practical pauses during a session, especially when you are new to the club or trying a class for the first time.",
    ],
  },
  {
    id: "zumba",
    category: "Community",
    image: "/images/anasplus/class-zumba-2.jpg",
    title: "Zumba at Anas Plus: energy, music, motivation",
    body: [
      "Anas Plus shares Zumba sessions with music and group energy. Ask the branch which sessions are currently running.",
      "Move with the music in a dance-based group workout. Anas Plus shares Zumba sessions with the club community; ask your branch about the current timetable.",
    ],
  },
  {
    id: "train-together",
    category: "Community",
    image: "/images/anasplus/hero-group.jpg",
    title: "Why training together makes you stronger",
    body: [
      "Shared sessions bring people together and add a social side to training.",
      "Whether it's a Hybrid session, a Cardio Sunset event or a Spinning ride at Route Tunis, our group training brings people together.",
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
        heading="Ready to meet the team and explore the clubs?"
        primaryLabel="PLAN A VISIT"
        primaryHref="/free-trial"
        secondaryLabel="VIEW ALL CLASSES"
        secondaryHref="/classes"
      />
    </>
  );
}
