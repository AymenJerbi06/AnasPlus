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

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {ARTICLES.map((article) => (
            <article key={article.href} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#eee]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-opacity duration-200 hover:opacity-90"
                />
              </div>

              <h3 className="mt-4 font-sans text-lg font-bold leading-[1.3] text-black">
                {article.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{article.excerpt}</p>

              <a
                href={article.href}
                className="mt-2 inline-block text-sm font-medium text-black transition-colors hover:text-ff-red"
              >
                Read more ›
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
