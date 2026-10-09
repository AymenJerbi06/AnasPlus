import Image from "next/image";
import { Check } from "lucide-react";

const BENEFITS = [
  "Personal coaching & group classes",
  "Pilates, Zumba, Spinning, Yoga & CrossFit",
  "Women-only sessions available",
];

export default function MembershipHero() {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-black lg:min-h-[560px]">
      <Image
        src="/images/anasplus/class-strength.jpg"
        alt="Anas Plus members training together with barbells"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 25%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:px-8">
        <div className="w-full text-center lg:w-[55%] lg:text-left">
          <h1 className="font-heading text-[32px] leading-[38px] font-bold italic uppercase text-white sm:text-[42px] sm:leading-[48px]">
            Membership &amp; Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] font-sans text-[16px] leading-[1.4] text-white sm:text-[18px] lg:mx-0">
            Coaching perso ou cours collectifs — find the way of training
            that fits you. Join Anas Plus and start today.
          </p>
          <ul className="mx-auto mt-6 flex max-w-[480px] flex-col gap-2 text-left sm:mx-0">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 font-sans text-[15px] text-white"
              >
                <Check className="h-4 w-4 shrink-0 text-ff-red" />
                {benefit}
              </li>
            ))}
          </ul>
          <a
            href="#plans"
            className="mt-6 inline-block rounded-none border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
          >
            View Membership Options
          </a>
        </div>
      </div>
    </section>
  );
}
