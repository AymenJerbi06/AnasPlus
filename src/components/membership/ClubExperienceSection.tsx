import Image from "next/image";
import { Check } from "lucide-react";

const CHECKLIST = [
  "Premium clubs in prime locations",
  "Daily group classes & small-group training",
  "Spacious cardio, strength & mobility areas",
  "Modern functional training zones & individual workouts",
  "Large wellness areas to relax and recover",
  "Dedicated support from qualified Fitness First coaches",
  "Progress tracking in the Fitness First app",
  "800+ online home workouts",
];

export default function ClubExperienceSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
          <Image
            src="/images/membership/club-experience.jpg"
            alt="Inside a Fitness First club"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            12 premium clubs, close to you
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">
            What awaits you
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-[15px] text-black">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-ff-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#plans"
            className="mt-8 inline-block border-2 border-ff-red bg-ff-red px-4 py-3 font-heading text-[16px] italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
}
