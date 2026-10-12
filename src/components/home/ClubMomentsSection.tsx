import Image from "next/image";
import Link from "next/link";

const MOMENTS = [
  {
    title: "Group training · Bouzayen",
    image: "/images/anasplus/club-gallery/bouzayen-group-session-sept-2025.webp",
    alt: "Members taking part in a group workout at Anas Plus Bouzayen",
    href: "/classes#hybrid",
  },
  {
    title: "Pilates · Bouzayen",
    image: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
    alt: "Pilates Reformer equipment at Anas Plus Bouzayen",
    href: "/classes#pilates",
  },
  {
    title: "Cardio · Route Tunis",
    image: "/images/anasplus/club-gallery/route-tunis-cardio-session-july-2026.webp",
    alt: "Members taking part in a group cardio session at Route Tunis",
    href: "/gyms/rte-tunis",
  },
  {
    title: "Club community · Route Tunis",
    image: "/images/anasplus/club-gallery/route-tunis-community-event-nov-2025.webp",
    alt: "Members gathered for a community training event at Anas Plus Route Tunis",
    href: "/events",
  },
];

export default function ClubMomentsSection() {
  return (
    <section className="bg-ff-footer px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            A look inside Anas Plus
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black sm:text-[34px]">
            Real clubs. Real sessions.
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            Photos from the Bouzayen and Route Tunis clubs, including strength work, Zumba, cardio and community events.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {MOMENTS.map((moment) => (
            <Link
              key={moment.title}
              href={moment.href}
              className="group relative aspect-[4/5] overflow-hidden bg-black"
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 font-heading text-sm italic uppercase text-white sm:text-base">
                {moment.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
