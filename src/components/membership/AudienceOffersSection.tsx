import Image from "next/image";

const OFFERS = [
  {
    title: "Students & Apprentices",
    description:
      "Enjoy €2 off your weekly rate, plus flexible payment pauses during semester breaks.",
    image: "/images/membership/offer-students.webp",
    href: "/membership/students",
  },
  {
    title: "Companies",
    description:
      "Whether you're an employer or employee – find out about exclusive corporate membership rates.",
    image: "/images/membership/offer-corporate.webp",
    href: "/corporate-fitness",
  },
  {
    title: "Switching Studios",
    description:
      "Already signed up elsewhere? Switch to Fitness First and train free for up to 12 months.",
    image: "/images/membership/offer-switchers.jpg",
    href: "/membership/switch",
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
