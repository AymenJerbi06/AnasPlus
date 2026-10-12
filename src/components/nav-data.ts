export type DropdownLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  columns?: DropdownLink[][];
};

export const UTILITY_LINKS: DropdownLink[] = [
  { label: "Call 53 266 222", href: "tel:53266222" },
];

export const NAV_LINKS: NavItem[] = [
  { label: "Our Clubs", href: "/gyms" },
  { label: "Classes", href: "/classes" },
  { label: "Membership & Pricing", href: "/membership" },
  { label: "Plan a Visit", href: "/free-trial" },
];
