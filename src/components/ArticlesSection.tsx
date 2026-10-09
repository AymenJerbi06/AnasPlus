import Image from "next/image";
import type { ArticleCard } from "@/types/content";

const ARTICLES: ArticleCard[] = [
  {
    image: "/images/article-trainingsplan.jpg",
    title: "Creating a training plan – here's how to do it right!",
    excerpt:
      "Tips for your personal fitness plan: preparation, content & scope. Examples for muscle building, weight loss & endurance.",
    href: "/magazine/training-plan",
  },
  {
    image: "/images/article-muskelaufbau.jpg",
    title: "Building muscle with age: tips & training plan from 50",
    excerpt:
      "From age 30, building muscle gets harder. Find out here how to train for muscle growth correctly as a best-ager over 50, and what's different for women!",
    href: "/magazine/muscle-building-over-50",
  },
  {
    image: "/images/article-rekomposition.jpg",
    title: "Body recomposition: losing fat and building muscle at the same time?",
    excerpt:
      "Find out whether it's really possible to lose fat and build muscle at the same time, and how body recomposition works.",
    href: "/magazine/body-recomposition",
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-white px-8 py-16">
      <div className="container mx-auto">
        <h2 className="font-sans text-[28px] font-bold not-italic normal-case text-black">
          Top 3 articles on personal training
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
