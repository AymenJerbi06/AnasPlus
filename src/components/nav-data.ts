export type DropdownLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  columns?: DropdownLink[][];
};

export const UTILITY_LINKS: DropdownLink[] = [
  { label: "Contact", href: "tel:53266222" },
  { label: "Careers", href: "/careers" },
  { label: "Events", href: "/events" },
  { label: "Member Login", href: "/member-login" },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Free Trial", href: "/free-trial" },
  {
    label: "Membership",
    href: "/membership",
    columns: [
      [
        { label: "View Plans", href: "/membership#plans" },
        { label: "Personal Coaching", href: "/membership#plans" },
        { label: "Group Classes", href: "/membership#plans" },
      ],
      [
        { label: "Women Only", href: "/women-only" },
        { label: "Become a Coach", href: "/careers" },
      ],
    ],
  },
  {
    label: "Our Clubs",
    href: "/gyms",
    columns: [
      [
        { label: "All Clubs", href: "/gyms" },
        { label: "Anas Plus Bouzayen", href: "/gyms#bouzayen" },
        { label: "Anas Plus Route Tunis", href: "/gyms#rte-tunis" },
      ],
    ],
  },
  {
    label: "Personal Training",
    href: "/personal-training",
    columns: [
      [
        { label: "How It Works", href: "/personal-training#form" },
        { label: "Meet Coach Anas", href: "/personal-training#video" },
        { label: "FAQ", href: "/personal-training#faq" },
      ],
    ],
  },
  {
    label: "Classes",
    href: "/classes",
    columns: [
      [
        { label: "All Classes", href: "/classes" },
        { label: "Pilates", href: "/classes#pilates" },
        { label: "Zumba", href: "/classes#zumba" },
      ],
      [
        { label: "Spinning", href: "/classes#spinning" },
        { label: "Yoga", href: "/classes#yoga" },
        { label: "CrossFit", href: "/classes#crossfit" },
      ],
    ],
  },
  {
    label: "Events",
    href: "/events",
    columns: [
      [
        { label: "Pilates Outdoor", href: "/events#pilates-outdoor" },
        { label: "Open Days", href: "/events#open-days" },
      ],
    ],
  },
  { label: "Women Only", href: "/women-only" },
  {
    label: "Magazine",
    href: "/magazine",
    columns: [
      [
        { label: "All Articles", href: "/magazine" },
        { label: "Pilates Guide", href: "/magazine#pilates-guide" },
      ],
      [
        { label: "Zumba", href: "/magazine#zumba" },
        { label: "Train Together", href: "/magazine#train-together" },
      ],
    ],
  },
];
