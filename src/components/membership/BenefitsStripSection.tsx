const BENEFITS = [
  {
    title: "Choose your pace",
    text: "Ask a coach about strength sessions, group classes and what suits your experience.",
  },
  {
    title: "Two Clubs",
    text: "Train at Anas Plus Bouzayen in Sfax or Anas Plus Route Tunis in Tunis. Each club shares its own timetable.",
  },
  {
    title: "Community Events",
    text: "Anas Plus has brought members together through group classes and outdoor sessions such as Pilates Outdoor.",
  },
];

export default function BenefitsStripSection() {
  return (
    <section className="bg-black px-6 py-16 text-center lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-sans text-[28px] font-bold not-italic normal-case text-white">
          What makes Anas Plus different
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="font-heading text-[20px] italic uppercase text-ff-red">
                {benefit.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[280px] font-sans text-[15px] leading-[1.5] text-white">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
