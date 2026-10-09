"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const UTILITY_LINKS = [
  { label: "Contact", href: "tel:53266222" },
  { label: "Careers", href: "/careers" },
  { label: "Events", href: "/events" },
  { label: "Member Login", href: "/member-login" },
];

const NAV_LINKS = [
  { label: "Free Trial", href: "/free-trial" },
  { label: "Membership", href: "/membership" },
  { label: "Our Clubs", href: "/gyms" },
  { label: "Personal Training", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Pilates", href: "/pilates" },
  { label: "Women Only", href: "/women-only" },
  { label: "Magazine", href: "/magazine" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
                className="text-white visited:text-white transition-colors duration-200 hover:text-ff-red"
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
              src="/images/anasplus/logo-white.png"
              alt="Anas Plus"
              width={900}
              height={505}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex h-16 items-center font-sans text-[15px] font-medium text-white visited:text-white"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] w-full bg-ff-red transition-all duration-200 ease-out ${
                      active
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="border-2 border-ff-red bg-ff-red px-3 py-2 font-heading text-xs italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark lg:px-5 lg:py-2.5 lg:text-sm"
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
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ff-black pt-16 transition-opacity duration-300 ease-in-out lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-start gap-0 overflow-y-auto px-8 pt-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`w-full border-b border-white/15 py-4 text-center font-heading text-[18px] font-bold not-italic normal-case text-white visited:text-white transition-colors duration-200 hover:text-ff-red ${
                pathname === link.href ? "text-ff-red" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/15 px-8 py-5 text-[13px] text-white">
          {UTILITY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white visited:text-white transition-colors duration-200 hover:text-ff-red"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ height: 108 }} />
    </>
  );
}
