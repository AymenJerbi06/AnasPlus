import Image from "next/image";

const CLASSES = [
  {
    name: "Pilates",
    tag: "Strength, balance & control",
    image: "/images/anasplus/class-pilates.jpg",
  },
  {
    name: "Zumba",
    tag: "Dance it, feel it, sweat it",
    image: "/images/anasplus/class-zumba-2.jpg",
  },
  {
    name: "Spinning",
    tag: "Tuesdays & Thursdays",
    image: "/images/anasplus/class-spinning.jpg",
  },
  {
    name: "CrossFit",
    tag: "Strength, speed & endurance",
    image: "/images/anasplus/class-strength.jpg",
  },
];

export default function PopularClassesSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-heading text-[28px] italic uppercase text-black">
          The Most Popular Classes at a Glance
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c) => (
            <a
              key={c.name}
              href="/classes"
              className="group relative flex h-[320px] flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.name} class at Anas Plus`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-4">
                <h3 className="font-heading text-[16px] italic uppercase text-black">
                  {c.name}
                </h3>
                <p className="mt-1 font-sans text-xs leading-[1.4] text-ff-graphit">
                  {c.tag}
                </p>
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
