const STEPS = [
  { number: "- 1 -", text: "Call or message us to meet your coach." },
  { number: "- 2 -", text: "Talk through your goals and training options." },
  { number: "- 3 -", text: "Confirm your session and club before you come." },
] as const;

const LOCATIONS = [
  { name: "Bouzayen · Sfax", href: "/gyms/bouzayen" },
  { name: "Route Tunis · Tunis", href: "/gyms/rte-tunis" },
] as const;

export function BookingStepsSection() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-ff-black px-8 py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 font-sans text-2xl font-bold not-italic normal-case text-white">
          How to get started with personal coaching
        </h2>

        <div className="flex flex-col gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex-1">
              <span className="mb-3 block text-2xl font-bold text-ff-red">
                {step.number}
              </span>
              <p className="mx-auto max-w-[220px] text-base font-bold leading-[1.4] text-white">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 md:flex-row md:items-center">
          <span className="text-base font-bold text-white">
            Choose your club
          </span>
          <div className="flex flex-col gap-3 sm:flex-row">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                className="border-2 border-white bg-transparent px-5 py-3 text-center font-sans text-sm font-bold text-white transition-colors duration-200 hover:border-ff-red hover:bg-ff-red"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 font-sans text-sm text-white/70">
          Or call us directly:{" "}
          <a href="tel:53266222" className="text-ff-red hover:underline">
            53 266 222
          </a>
        </p>
      </div>
    </section>
  );
}

export default BookingStepsSection;
