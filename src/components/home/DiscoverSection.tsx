const FEATURES = [
  {
    title: "Coaching",
    text: "You choose. One-on-one personal coaching built entirely around your goals and your schedule.",
  },
  {
    title: "Classes",
    text: "Pilates, Zumba, Spinning, Yoga, CrossFit — push your limits with a packed weekly schedule.",
  },
  {
    title: "Community",
    text: "From women-only sessions to events like Pilates Outdoor, train as part of something bigger.",
  },
];

export default function DiscoverSection() {
  return (
    <section className="bg-black px-6 py-16 text-center lg:px-8">
      <div className="container mx-auto">
        <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
          Discover Anas Plus
        </p>
        <h2 className="mt-2 font-heading text-[28px] italic uppercase text-white sm:text-[34px]">
          Here&apos;s Where Your Goals Become Real
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-heading text-[20px] italic uppercase text-ff-red">
                {feature.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[280px] font-sans text-[15px] leading-[1.5] text-white">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
