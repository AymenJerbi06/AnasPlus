import Image from "next/image";

const AREAS = [
  {
    name: "Booty Zone",
    description: "Targeted glute workouts with innovative Glutebuilder® equipment.",
    image: "/images/membership/area-booty-zone.jpg",
  },
  {
    name: "EGYM",
    description: "Smart strength training: EGYM machines adjust themselves to you automatically.",
    image: "/images/membership/area-egym.jpg",
  },
  {
    name: "Recovery",
    description: "Release tension and work on tight muscles in the dedicated recovery circuit.",
    image: "/images/membership/area-recovery.webp",
  },
  {
    name: "Performance",
    description: "Modern power racks, strength machines, and free weights.",
    image: "/images/membership/area-performance.webp",
  },
  {
    name: "Functional",
    description: "Train with maximum focus in our new small-group functional sessions.",
    image: "/images/membership/area-functional.webp",
  },
];

export default function TrainingAreasSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <p className="text-center font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
          Next level in your club
        </p>
        <h2 className="mt-2 text-center font-heading text-[28px] italic uppercase text-black">
          Your Training Areas
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AREAS.map((area) => (
            <div
              key={area.name}
              className="group relative flex h-[320px] flex-col overflow-hidden border border-[#9c9e9f] bg-white transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={area.image}
                  alt={`${area.name} training area`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="origin-center scale-110 object-cover transition-transform duration-[400ms] group-hover:scale-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-4">
                <h3 className="font-heading text-[16px] italic uppercase text-black">
                  {area.name}
                </h3>
                <p className="mt-1 font-sans text-xs leading-[1.4] text-ff-graphit">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
