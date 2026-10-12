export type ScheduleEntry = {
  time: string;
  className: string;
  audience: "Women only" | "Mixed";
};

export type ScheduleDay = {
  day: string;
  entries: ScheduleEntry[];
};

export type Club = {
  slug: string;
  name: string;
  area: string;
  city: "Sfax" | "Tunis";
  instagram: string;
  instagramUrl: string;
  mapQuery: string;
  intro: string;
  heroImage: string;
  cardImage: string;
  trainingFormats: string[];
  spaces: { title: string; detail: string }[];
  coachingNote: string;
  scheduleSnapshot: {
    postedAt: string;
    coverage: string;
    days: ScheduleDay[];
  };
  gallery: { src: string; alt: string }[];
};

export const CLUBS: Club[] = [
  {
    slug: "bouzayen",
    name: "Anas Plus Bouzayen",
    area: "Bouzayen",
    city: "Sfax",
    instagram: "@anasplusbouzayen",
    instagramUrl: "https://instagram.com/anasplusbouzayen",
    mapQuery: "Anas Plus Bouzayen, Bouzayen, Sfax, Tunisia",
    intro:
      "A Sfax club with strength and group training, plus a dedicated Pilates studio with mat and apparatus sessions.",
    heroImage: "/images/anasplus/club-gallery/bouzayen-group-session-sept-2025.webp",
    cardImage: "/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp",
    trainingFormats: [
      "Strength & resistance",
      "CrossFit",
      "Hybrid",
      "MetaFit / HIIT",
      "Pump",
      "Cardio & Step",
      "Pilates: mat, Reformer and Combo Chair",
      "Yoga",
      "Zumba",
      "Spinning",
      "Tabata & Power Circuit",
      "Band Workout",
    ],
    spaces: [
      {
        title: "Strength & cardio floor",
        detail:
          "Club photos show free-weight and resistance-equipment training, cardio sessions and coached group workouts.",
      },
      {
        title: "Pilates studio",
        detail:
          "An opening post in June 2026 described a studio over 200 m² with 14 Cadillac Reformers and 14 Combo Chairs. Later posts show mat, Reformer, Hot and Toning Pilates.",
      },
    ],
    coachingNote:
      "The branch profile lists personal coaching and group classes. The current coach roster and one-to-one availability are not published in the material reviewed; call or message the club to confirm.",
    scheduleSnapshot: {
      postedAt: "September 7, 2026",
      coverage: "Monday–Saturday",
      days: [
        {
          day: "Monday",
          entries: [
            { time: "8:30", className: "Cardio", audience: "Women only" },
            { time: "10:30", className: "Cardio", audience: "Women only" },
            { time: "17:30", className: "Yoga", audience: "Women only" },
            { time: "18:30", className: "Step", audience: "Women only" },
            { time: "19:30", className: "CrossFit", audience: "Mixed" },
          ],
        },
        {
          day: "Tuesday",
          entries: [
            { time: "8:30", className: "Yoga", audience: "Women only" },
            { time: "18:30", className: "Zumba", audience: "Mixed" },
            { time: "20:00", className: "Yoga", audience: "Mixed" },
          ],
        },
        {
          day: "Wednesday",
          entries: [
            { time: "8:30", className: "Pump", audience: "Women only" },
            { time: "10:30", className: "Pump", audience: "Women only" },
            { time: "17:30", className: "Yoga", audience: "Women only" },
            { time: "18:30", className: "Pump", audience: "Women only" },
            { time: "19:30", className: "Pump", audience: "Mixed" },
          ],
        },
        {
          day: "Thursday",
          entries: [
            { time: "8:30", className: "Yoga", audience: "Women only" },
            { time: "18:30", className: "CrossFit", audience: "Mixed" },
            { time: "20:30", className: "Yoga", audience: "Mixed" },
          ],
        },
        {
          day: "Friday",
          entries: [
            { time: "8:30", className: "Cardio", audience: "Women only" },
            { time: "10:30", className: "Cardio", audience: "Women only" },
            { time: "18:30", className: "MetaFit", audience: "Women only" },
            { time: "19:30", className: "Cardio", audience: "Mixed" },
          ],
        },
        {
          day: "Saturday",
          entries: [{ time: "18:00", className: "Zumba", audience: "Mixed" }],
        },
      ],
    },
    gallery: [
      {
        src: "/images/anasplus/club-gallery/bouzayen-pilates-reformer-sept-2026.webp",
        alt: "Pilates Reformer equipment at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-pilates-mat-session-aug-2025.webp",
        alt: "Members practising Pilates on mats at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-crossfit-session-oct-2025.webp",
        alt: "Members taking part in a CrossFit session at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-zumba-class-oct-2025.webp",
        alt: "Members dancing during a Zumba class at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-spinning-session-aug-2025.webp",
        alt: "A member riding in an indoor cycling session at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-strength-session-oct-2025.webp",
        alt: "A member training on gym equipment at Anas Plus Bouzayen",
      },
      {
        src: "/images/anasplus/club-gallery/bouzayen-group-session-sept-2025.webp",
        alt: "Members taking part in a group workout at Anas Plus Bouzayen",
      },
    ],
  },
  {
    slug: "rte-tunis",
    name: "Anas Plus Route Tunis",
    area: "Route Tunis",
    city: "Tunis",
    instagram: "@anasplus_rte_tunis",
    instagramUrl: "https://instagram.com/anasplus_rte_tunis",
    mapQuery: "Anas Plus Route Tunis, Tunis, Tunisia",
    intro:
      "A Tunis club with strength and cardio training, CrossFit and group sessions, with Pilates, Yoga and Spinning also shown in club posts.",
    heroImage: "/images/anasplus/club-gallery/route-tunis-cardio-session-july-2026.webp",
    cardImage: "/images/anasplus/club-gallery/route-tunis-group-session-july-2026.webp",
    trainingFormats: [
      "Strength & resistance",
      "CrossFit",
      "Cardio & Step",
      "CAF",
      "Spinning",
      "Pump & Power Circuit",
      "HIIT",
      "Pilates",
      "Yoga",
      "Zumba",
    ],
    spaces: [
      {
        title: "Strength & cardio floor",
        detail:
          "Club photos show resistance equipment, cardio training and members working with coaches.",
      },
      {
        title: "Group training",
        detail:
          "The branch archive includes CrossFit, cardio, Step, CAF, Spinning and other group-session posts. Named room details are not published in the material reviewed.",
      },
    ],
    coachingNote:
      "Club posts show coached sessions. The current coach roster and one-to-one coaching details are not published in the material reviewed; call or message the club to confirm.",
    scheduleSnapshot: {
      postedAt: "October 4, 2026",
      coverage: "Monday schedule shown in the post",
      days: [
        {
          day: "Monday",
          entries: [
            { time: "18:30", className: "Cardio", audience: "Mixed" },
            { time: "18:30", className: "CAF", audience: "Mixed" },
            { time: "19:30", className: "Step", audience: "Mixed" },
          ],
        },
      ],
    },
    gallery: [
      {
        src: "/images/anasplus/club-gallery/route-tunis-training-floor-july-2025.webp",
        alt: "Members training on the floor at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-crossfit-session-sept-2025.webp",
        alt: "Members taking part in a CrossFit session at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-women-training-aug-2025.webp",
        alt: "A member training with resistance equipment at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-pilates-session-nov-2025.webp",
        alt: "A Pilates class at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-community-event-nov-2025.webp",
        alt: "Members gathered for a community training event at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-cardio-session-july-2026.webp",
        alt: "Members taking part in a cardio session at Anas Plus Route Tunis",
      },
      {
        src: "/images/anasplus/club-gallery/route-tunis-group-session-july-2026.webp",
        alt: "A group workout at Anas Plus Route Tunis",
      },
    ],
  },
];

export function getClub(slug: string) {
  return CLUBS.find((club) => club.slug === slug);
}
