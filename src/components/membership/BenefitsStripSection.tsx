const BENEFITS = [
  {
    title: "Pause Option",
    text: "Stay fully flexible: pause your contract free of charge for up to 12 weeks, whenever life gets in the way.",
  },
  {
    title: "Flex Option",
    text: "New members get a 3-month flex window: cancel with 4 weeks' notice for a small fee if it's not the right fit.",
  },
  {
    title: "Training Package",
    text: "Get a fitness assessment and body analysis twice a year, plus a personal training plan built around your goals.",
  },
];

export default function BenefitsStripSection() {
  return (
    <section className="bg-black px-6 py-16 text-center lg:px-8">
      <div className="container mx-auto">
        <h2 className="font-sans text-[28px] font-bold not-italic normal-case text-white">
          Membership, made flexible
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
