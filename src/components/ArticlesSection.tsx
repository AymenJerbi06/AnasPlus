import Image from "next/image";
import type { ArticleCard } from "@/types/content";

const ARTICLES: ArticleCard[] = [
  {
    image: "/images/anasplus/article-pilates-1.jpg",
    title: "Pilates at Anas Plus: everything you need to know",
    excerpt:
      "Strength, balance, posture & control — why Pilates deserves a place in your weekly routine, and what a session actually looks like.",
    href: "/magazine/pilates-guide",
  },
  {
    image: "/images/anasplus/class-zumba.jpg",
    title: "Zumba at Anas Plus: energy, music, motivation",
    excerpt:
      "Ambiance explosive et bonne humeur garantie. Dance it, feel it, sweat it — no two Zumba sessions are ever quite the same.",
    href: "/magazine/zumba",
  },
  {
    image: "/images/anasplus/hero-group.jpg",
    title: "Why training together makes you stronger",
    excerpt:
      "Group classes bring more motivation, more accountability, and more energy. Here's what it feels like to train as a team at Anas Plus.",
    href: "/magazine/train-together",
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="container mx-auto">
        <h2 className="font-sans text-[28px] font-bold not-italic normal-case text-black">
          From the Anas Plus magazine
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="group relative flex h-[480px] flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-4">
                <h3 className="mb-4 font-sans text-xl leading-6 font-normal not-italic normal-case text-black">
                  {article.title}
                </h3>
                <p className="line-clamp-3 font-sans text-sm leading-[21px] text-ff-graphit">
                  {article.excerpt}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 font-sans text-sm text-black">
                  Read more ›
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
