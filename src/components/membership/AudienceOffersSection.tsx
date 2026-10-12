import Image from "next/image";

const OFFERS = [
  {
    title: "Pilates",
    description:
      "Try focused movement for balance and control, including recent Combo Chair sessions.",
    image: "/images/anasplus/class-pilates.jpg",
    href: "/classes#pilates",
  },
  {
    title: "Hybrid Training",
    description:
      "Bring cardio and resistance together in one energetic coached session.",
    image: "/images/anasplus/club-gallery/route-tunis-cardio.webp",
    href: "/free-trial",
  },
  {
    title: "Spinning at Route Tunis",
    description:
      "Ride as a group at Route Tunis. Call to confirm current class times.",
    image: "/images/anasplus/class-spinning.jpg",
    href: "/classes#spinning",
  },
];

export default function AudienceOffersSection() {
  return (
    <section className="bg-ff-footer px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-sans text-[28px] font-bold not-italic normal-case text-black">
          Exclusive offers for
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => (
            <a
              key={offer.title}
              href={offer.href}
              className="group flex flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-sans text-lg font-bold text-black">
                  {offer.title}
                </h3>
                <p className="mt-2 flex-1 font-sans text-sm text-ff-graphit">
                  {offer.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-sans text-sm text-black">
                  Learn more ›
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
