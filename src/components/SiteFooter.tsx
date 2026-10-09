import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: "Anas Plus",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Clubs", href: "/gyms" },
      { label: "Magazine", href: "/magazine" },
    ],
  },
  {
    heading: "Careers",
    links: [
      { label: "Become a Coach", href: "/careers" },
      { label: "Join the Team", href: "/careers#jobs" },
    ],
  },
  {
    heading: "Service",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ's", href: "/faq" },
      { label: "Member Login", href: "/member-login" },
      { label: "Pause your membership", href: "/contact#membership" },
      { label: "Cancel your membership", href: "/contact#membership" },
      { label: "Cookie settings", href: "/cookie-settings" },
    ],
  },
];

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram – Anas Plus Bouzayen",
    href: "https://instagram.com/anasplusbouzayen",
    Icon: InstagramIcon,
  },
  {
    label: "Instagram – Anas Plus Route Tunis",
    href: "https://instagram.com/anasplus_rte_tunis",
    Icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/21653266222",
    Icon: WhatsappIcon,
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ff-footer px-8 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 border-b border-[#d5d5d5] pb-8 md:grid-cols-3 md:gap-16">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-4 font-sans text-[13px] font-bold tracking-[0.05em] text-black uppercase">
                {column.heading}
              </h4>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[15px] leading-[2.2] text-black hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-8 text-center">
          <p className="mb-4 text-sm font-bold text-black">
            Follow us for more inspiration
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-colors duration-200 hover:bg-ff-graphit"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#d5d5d5]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 py-5 text-xs text-ff-graphit sm:flex-row">
          <p>© Anas Plus Fitness Club 2026</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link href="/terms" className="hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
