import Image from "next/image";
import { Check } from "lucide-react";

const CHECKLIST = [
  "Two locations: Bouzayen in Sfax and Route Tunis in Tunis",
  "Personal coaching and group sessions",
  "Strength training, Hybrid, MetaFit, Pilates and Zumba",
  "Spinning at Anas Plus Route Tunis",
  "Class timetables shared by each club",
  "Contact the team for current membership prices",
];

export default function ClubExperienceSection() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
          <Image
            src="/images/anasplus/club-gallery/route-tunis-group-session-july-2026.webp"
            alt="Members taking part in a group training session at Anas Plus Route Tunis"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "60% 15%" }}
          />
        </div>
        <div>
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Bouzayen · Sfax / Route Tunis · Tunis
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
