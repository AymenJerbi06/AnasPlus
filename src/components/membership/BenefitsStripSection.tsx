const BENEFITS = [
  {
    title: "Women Only",
    text: "Several sessions each week — cardio, abs, yoga and more — run 100% Femmes, alongside our mixed classes.",
  },
  {
    title: "Two Clubs",
    text: "Train at Anas Plus Bouzayen or Anas Plus Route Tunis, both in Sfax, each with its own weekly schedule.",
  },
  {
    title: "Community Events",
    text: "From Pilates Outdoor — over 600 participants at our first edition — to open days, we train together off the schedule too.",
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
