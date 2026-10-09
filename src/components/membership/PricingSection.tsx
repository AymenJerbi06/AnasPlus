import { Check } from "lucide-react";

type Plan = {
  name: string;
  frName: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Group Classes",
    frName: "Cours collectifs",
    tagline: "Train with the team, led by your coach",
    features: [
      "Pilates, Zumba, Spinning, Yoga & CrossFit",
      "Women-only (100% Femmes) sessions available",
      "Weekly schedule across both clubs",
      "Open to every level, beginners welcome",
    ],
  },
  {
    name: "Personal Coaching",
    frName: "Coaching perso",
    tagline: "One-on-one, built entirely around you",
    features: [
      "Everything in Group Classes, plus:",
      "A training plan built around your goals",
      "One-on-one time with your coach, every session",
      "Flexible scheduling at your Home Club",
    ],
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="plans" className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-center font-sans text-[28px] font-bold not-italic normal-case text-black">
          Choose how you train
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-center font-sans text-[16px] text-ff-graphit">
          Le goût du corps, le goût du sport. Pricing depends on your club
          and your goals — call us at 53 266 222 for a plan built around you.
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
                className={`font-heading text-[26px] italic uppercase ${
                  plan.highlighted ? "text-white" : "text-black"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 font-sans text-sm italic ${
                  plan.highlighted ? "text-white/60" : "text-ff-graphit"
                }`}
              >
                {plan.frName}
              </p>
              <p
                className={`mt-3 font-sans text-sm ${
                  plan.highlighted ? "text-white/80" : "text-ff-graphit"
                }`}
              >
                {plan.tagline}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 font-sans text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ff-red" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="tel:53266222"
                className={`mt-8 inline-block border-2 px-4 py-3 text-center font-heading text-[16px] italic uppercase transition-colors duration-200 ease-out ${
                  plan.highlighted
                    ? "border-ff-red bg-ff-red text-white hover:border-ff-red-dark hover:bg-ff-red-dark"
                    : "border-black bg-black text-white hover:border-ff-graphit hover:bg-ff-graphit"
                }`}
              >
                Call for Pricing
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
