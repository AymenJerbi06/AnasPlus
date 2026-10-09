"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const UTILITY_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Sport Trips", href: "/sport-trips" },
  { label: "Member Login", href: "/member-login" },
];

const NAV_LINKS = [
  { label: "Free Trial", href: "/free-trial" },
  { label: "Membership", href: "/membership" },
  { label: "Gyms", href: "/gyms" },
  { label: "Training", href: "/training", active: true },
  { label: "Classes", href: "/classes" },
  { label: "HYROX", href: "/hyrox" },
  { label: "Corporate Fitness", href: "/corporate-fitness" },
  { label: "Magazine", href: "/magazine" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-ff-black transition-all duration-300 ease-in-out ${
          scrolled ? "h-16" : "h-[108px]"
        }`}
      >
        {/* Utility bar */}
        <div
          className={`hidden lg:flex items-center justify-end gap-6 overflow-hidden text-[13px] text-white normal-case transition-[height,opacity] duration-300 ease-in-out ${
            scrolled ? "h-0 opacity-0" : "h-11 opacity-100"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-end gap-6 px-8">
            {UTILITY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-ff-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Main bar */}
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-white.png"
              alt="Fitness First"
              width={590}
              height={114}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[15px] font-medium text-white transition-colors ${
                  link.active
                    ? "border-b-2 border-ff-red pb-1"
                    : "hover:text-ff-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="border-2 border-ff-red bg-ff-red px-3 py-2 font-heading text-xs italic uppercase text-white lg:px-5 lg:py-2.5 lg:text-sm"
            >
              Become a Member
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="text-white lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-16 flex flex-col bg-ff-black lg:hidden">
            <nav className="flex flex-col gap-1 px-8 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 font-sans text-[15px] font-medium text-white ${
                    link.active ? "text-ff-red" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-white/10" />
              {UTILITY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[13px] text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      <div style={{ height: 108 }} />
    </>
  );
}
