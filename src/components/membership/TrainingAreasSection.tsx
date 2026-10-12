import Image from "next/image";

const AREAS = [
  {
    id: "strength",
    name: "Strength Training",
    description: "Coached lifts, technique tips and focused strength work.",
    image: "/images/anasplus/club-gallery/bouzayen-strength-session-oct-2025.webp",
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "Functional training that brings strength and conditioning together.",
    image: "/images/anasplus/club-gallery/route-tunis-crossfit-session-sept-2025.webp",
  },
  {
    id: "hybrid",
    name: "Hybrid & HIIT",
    description: "Cardio, resistance and high-intensity group training.",
    image: "/images/anasplus/club-gallery/route-tunis-cardio-session-july-2026.webp",
  },
  {
    id: "pump",
    name: "Pump & Body Sculpt",
    description: "Group resistance work, strength endurance and a shared pace.",
    image: "/images/anasplus/club-gallery/bouzayen-studio-floor-june-2025.webp",
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Mat and Combo Chair sessions at the dedicated Bouzayen studio.",
    image: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Breathing, mobility and balance in a slower class format.",
    image: "/images/anasplus/class-yoga.jpg",
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "A dance fitness session with music and group energy.",
    image: "/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp",
  },
  {
    id: "spinning",
    name: "Cardio & Spinning",
    description: "Cardio at both clubs, with group cycling at Route Tunis.",
    image: "/images/anasplus/club-gallery/bouzayen-spinning-session-aug-2025.webp",
  },
];

export default function TrainingAreasSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <p className="text-center font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
          Find your format
        </p>
        <h2 className="mt-2 text-center font-heading text-[28px] italic uppercase text-black">
          Training at Anas Plus
        </h2>
        <p className="mx-auto mt-3 max-w-[680px] text-center font-sans text-[15px] leading-relaxed text-ff-graphit">
          Explore class and coaching formats featured across the two clubs. The weekly schedule can change, so ask your branch what is running now.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {AREAS.map((area) => (
            <a
              key={area.id}
              href={`/classes#${area.id}`}
              className="group relative flex h-[320px] flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={area.image}
                  alt={`${area.name} at Anas Plus`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-4">
                <h3 className="font-heading text-[16px] italic uppercase text-black">{area.name}</h3>
                <p className="mt-1 font-sans text-xs leading-[1.4] text-ff-graphit">{area.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
