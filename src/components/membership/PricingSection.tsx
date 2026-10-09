import { Check } from "lucide-react";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  dayPass: string;
  weekPass: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "RED",
    tagline: "Effective training, excellent value",
    price: "€5.90",
    priceNote: "per week, billed in 24-month terms",
    dayPass: "€19 day pass",
    weekPass: "€49 week pass",
    features: [
      "Full access to cardio, strength & free weights",
      "Modern, efficient training floors",
      "No signup fee on 24-month plans",
      "Flexible contract pause anytime",
    ],
  },
  {
    name: "BLACK",
    tagline: "High-end fitness, no compromises",
    price: "€17.90",
    priceNote: "per week, billed in 24-month terms",
    dayPass: "€29 day pass",
    weekPass: "€79 week pass",
    features: [
      "Everything in RED, plus:",
      "Spacious wellness & relaxation areas",
      "Exclusive services & premium equipment",
      "Comprehensive, hands-on coaching support",
    ],
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="plans" className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-sans text-[28px] font-bold not-italic normal-case text-black">
          Choose your membership
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-center font-sans text-[16px] text-ff-graphit">
          Two ways to train with Fitness First. Pricing varies slightly by
          club – your Home Club will confirm exact terms.
        </p>

        <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-1 gap-8 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col border p-8 ${
                plan.highlighted
                  ? "border-2 border-ff-red bg-black text-white"
                  : "border-[#9c9e9f] bg-white text-black"
              }`}
            >
              <h3
                className={`font-heading text-[28px] italic uppercase ${
                  plan.highlighted ? "text-white" : "text-black"
                }`}
              >
                Fitness First {plan.name}
              </h3>
              <p
                className={`mt-2 font-sans text-sm ${
                  plan.highlighted ? "text-white/70" : "text-ff-graphit"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mt-6">
                <span className="font-heading text-[40px] italic">
                  {plan.price}
                </span>
                <p
                  className={`mt-1 font-sans text-xs ${
                    plan.highlighted ? "text-white/70" : "text-ff-graphit"
                  }`}
                >
                  {plan.priceNote}
                </p>
              </div>

              <p
                className={`mt-4 font-sans text-sm ${
                  plan.highlighted ? "text-white/80" : "text-ff-graphit"
                }`}
              >
                Or train flexibly: {plan.dayPass} · {plan.weekPass}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 font-sans text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-ff-red" : "text-ff-red"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`mt-8 inline-block border-2 px-4 py-3 text-center font-heading text-[16px] italic uppercase transition-colors duration-200 ease-out ${
                  plan.highlighted
                    ? "border-ff-red bg-ff-red text-white hover:border-ff-red-dark hover:bg-ff-red-dark"
                    : "border-black bg-black text-white hover:border-ff-graphit hover:bg-ff-graphit"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
