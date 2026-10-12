"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  Bike,
  Dumbbell,
  Flower2,
  HeartPulse,
  Music,
  Timer,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Branch = "bouzayen" | "rte-tunis";

type ClassFormat = {
  id: string;
  name: string;
  branches: Branch[];
  description: string;
  Icon: LucideIcon;
};

const FORMATS: ClassFormat[] = [
  {
    id: "strength",
    name: "Strength & resistance",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Free-weight and resistance training appears across both club archives. Photos and clips show members training with coach guidance.",
    Icon: Dumbbell,
  },
  {
    id: "crossfit",
    name: "CrossFit",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Group workouts combining functional strength and conditioning appear in posts from both branches.",
    Icon: Zap,
  },
  {
    id: "hybrid",
    name: "Hybrid",
    branches: ["bouzayen"],
    description:
      "Bouzayen posts show coached sessions combining cardio and resistance exercises.",
    Icon: Activity,
  },
  {
    id: "metafit-hiit",
    name: "MetaFit / HIIT",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Interval conditioning appears at Bouzayen as MetaFit and in Route Tunis posts as HIIT.",
    Icon: Timer,
  },
  {
    id: "pump",
    name: "Pump",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Pump sessions appear in Bouzayen timetable posts and Route Tunis training posts.",
    Icon: Dumbbell,
  },
  {
    id: "cardio-step-caf",
    name: "Cardio, Step & CAF",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Cardio and Step appear in both club archives. CAF is shown in Route Tunis timetable posts.",
    Icon: HeartPulse,
  },
  {
    id: "tabata-band",
    name: "Tabata & Band Workout",
    branches: ["bouzayen"],
    description:
      "Tabata and Band Workout appear in Bouzayen's dated timetable posts. Ask whether they are running this week.",
    Icon: Activity,
  },
  {
    id: "power-circuit",
    name: "Power Circuit",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Power Circuit appears in the clubs' dated training posts; the timetable may change from week to week.",
    Icon: Activity,
  },
  {
    id: "pilates",
    name: "Pilates",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Bouzayen shows mat and apparatus sessions; Route Tunis posts also show Pilates. Ask the club which style and times are currently available.",
    Icon: Flower2,
  },
  {
    id: "yoga",
    name: "Yoga",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Yoga appears in both branch archives, including dated posts for women-only and mixed sessions.",
    Icon: Flower2,
  },
  {
    id: "zumba",
    name: "Zumba",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Dance-fitness group sessions are shown in both clubs' posts.",
    Icon: Music,
  },
  {
    id: "spinning",
    name: "Spinning",
    branches: ["bouzayen", "rte-tunis"],
    description:
      "Indoor cycling sessions appear in both club archives. A September post listed Tuesday and Thursday sessions at Route Tunis; call to confirm the current days and times.",
    Icon: Bike,
  },
];

const BRANCH_OPTIONS: { id: "all" | Branch; label: string }[] = [
  { id: "all", label: "All formats" },
  { id: "bouzayen", label: "Bouzayen · Sfax" },
  { id: "rte-tunis", label: "Route Tunis · Tunis" },
];

const BRANCH_NAMES: Record<Branch, string> = {
  bouzayen: "Bouzayen · Sfax",
  "rte-tunis": "Route Tunis · Tunis",
};

export default function BranchClassGuide() {
  const [activeBranch, setActiveBranch] = useState<"all" | Branch>("all");
  const visibleFormats = useMemo(
    () =>
      activeBranch === "all"
        ? FORMATS
        : FORMATS.filter((format) => format.branches.includes(activeBranch)),
    [activeBranch],
  );

  return (
    <section className="bg-ff-footer px-6 py-14 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-sans text-sm font-bold tracking-[0.05em] text-ff-red uppercase">
            Choose a club
          </p>
          <h2 className="mt-2 font-heading text-[28px] italic uppercase text-black">
            Training formats
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ff-graphit">
            These formats are documented in the clubs&apos; posts. They are not a live timetable; open a club page for its latest dated schedule.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter classes by club">
          {BRANCH_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={activeBranch === option.id}
              onClick={() => setActiveBranch(option.id)}
              className={
                activeBranch === option.id
                  ? "min-h-11 border border-ff-red bg-ff-red px-4 py-2 font-sans text-sm font-semibold text-white"
                  : "min-h-11 border border-[#b9b9b9] bg-white px-4 py-2 font-sans text-sm font-semibold text-black transition-colors hover:border-ff-red"
              }
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-[1120px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleFormats.map(({ id, name, branches, description, Icon }) => (
            <details key={id} className="group border border-[#d5d5d5] bg-white p-5 transition-[border-color,box-shadow] duration-300 open:border-ff-red hover:border-ff-red hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <summary className="flex cursor-pointer list-none items-center gap-4 focus-visible:outline-2 focus-visible:outline-ff-red [&::-webkit-details-marker]:hidden">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ff-red/25 text-ff-red transition-transform duration-300 motion-safe:group-hover:scale-110 motion-reduce:transition-none">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-[18px] italic uppercase text-black">{name}</span>
                  <span className="mt-1 block font-sans text-xs leading-relaxed text-ff-graphit">
                    {branches.map((branch) => BRANCH_NAMES[branch]).join(" / ")}
                  </span>
                </span>
              </summary>
              <div className="mt-4 border-t border-[#e5e5e5] pt-4">
                <p className="font-sans text-sm leading-relaxed text-ff-graphit">{description}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {branches.map((branch) => (
                    <Link
                      key={branch}
                      href={"/gyms/" + branch + "#schedule"}
                      className="inline-flex items-center gap-1 font-heading text-xs italic uppercase text-ff-red hover:text-ff-red-dark"
                    >
                      {BRANCH_NAMES[branch]} timetable <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
