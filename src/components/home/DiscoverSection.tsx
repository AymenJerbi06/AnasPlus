const FEATURES = [
  {
    title: "Coaching",
    text: "Talk with a coach about your goals and the training approach that suits you.",
  },
  {
    title: "Classes",
    text: "Strength training, Hybrid, MetaFit, Pilates and Zumba, plus Spinning at Route Tunis.",
  },
  {
    title: "Community",
    text: "From group sessions to Pilates Outdoor, Anas Plus has a history of bringing people together.",
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
