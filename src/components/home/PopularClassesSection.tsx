import Image from "next/image";

const CLASSES = [
  {
    id: "strength",
    name: "Strength Training",
    tag: "Coached lifts and movement tips",
    image: "/images/anasplus/club-gallery/bouzayen-strength-session-oct-2025.webp",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    tag: "Strength, conditioning and team energy",
    image: "/images/anasplus/club-gallery/bouzayen-crossfit-session-oct-2025.webp",
  },
  {
    id: "pilates",
    name: "Pilates",
    tag: "Mat work and Combo Chair at Bouzayen",
    image: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
  },
  {
    id: "yoga",
    name: "Yoga",
    tag: "Breath, mobility and balance",
    image: "/images/anasplus/class-yoga.jpg",
  },
  {
    id: "zumba",
    name: "Zumba",
    tag: "Dance fitness at Bouzayen",
    image: "/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp",
  },
  {
    id: "spinning",
    name: "Spinning",
    tag: "Group cycling at Route Tunis",
    image: "/images/anasplus/club-gallery/bouzayen-spinning-session-aug-2025.webp",
  },
];

export default function PopularClassesSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-heading text-[28px] italic uppercase text-black">
          Find a Session That Moves You
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {CLASSES.map((item) => (
            <a
              key={item.id}
              href={`/classes#${item.id}`}
              className="group relative flex h-[250px] min-w-0 flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:h-[300px] xl:h-[320px]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} at Anas Plus`}
                  fill
                  sizes="(min-width: 1280px) 17vw, (min-width: 1024px) 33vw, 50vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-3 sm:p-4">
                <h3 className="font-heading text-[14px] italic uppercase text-black sm:text-[16px]">{item.name}</h3>
                <p className="mt-1 line-clamp-2 font-sans text-xs leading-[1.4] text-ff-graphit">{item.tag}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center">
          <a
            href="/classes"
            className="inline-block border-2 border-black bg-black px-5 py-3 font-heading text-[14px] italic uppercase text-white transition-colors duration-200 hover:border-ff-graphit hover:bg-ff-graphit"
          >
            Discover All Classes
          </a>
        </p>
      </div>
    </section>
  );
}
