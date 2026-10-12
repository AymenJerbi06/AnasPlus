"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS, UTILITY_LINKS } from "@/components/nav-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const openNow = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  };

  return (
    <>
      <header
        onMouseLeave={closeSoon}
        className={`fixed top-0 left-0 right-0 z-50 bg-ff-black transition-all duration-300 ease-in-out ${
          scrolled ? "h-16" : "h-16 lg:h-[108px]"
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
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/anasplus/logo-white.png"
                alt="Anas Plus"
                width={900}
                height={505}
                className="h-10 w-auto lg:h-12"
                priority
              />
            </Link>
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`hidden h-16 items-center border-b-[3px] pt-[3px] font-sans text-sm font-semibold transition-colors duration-200 sm:flex ${
                pathname === "/"
                  ? "border-ff-red text-ff-red"
                  : "border-transparent text-white hover:text-ff-red"
              }`}
            >
              Home
            </Link>
          </div>

          <nav className="hidden items-stretch gap-3 lg:flex 2xl:gap-5">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              const hasDropdown = !!link.columns;
              const isOpen = openDesktop === link.label;
              return (
                <div
                  key={link.href}
                  className="relative flex items-stretch"
                  onMouseEnter={() =>
                    hasDropdown ? openNow(link.label) : openNow("")
                  }
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative flex h-16 items-center gap-1 font-sans text-[15px] font-medium text-white visited:text-white"
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] w-full bg-ff-red transition-all duration-200 ease-out ${
                        active || isOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/membership"
              className="border-2 border-ff-red bg-ff-red px-3 py-2 font-heading text-xs italic uppercase text-white transition-colors duration-200 ease-out hover:border-ff-red-dark hover:bg-ff-red-dark lg:px-5 lg:py-2.5 lg:text-sm"
            >
              Membership Info
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop mega-menu panel */}
        {NAV_LINKS.filter((l) => l.columns).map((link) => {
          const isOpen = openDesktop === link.label;
          return (
            <div
              key={link.href}
              onMouseEnter={() => openNow(link.label)}
              className={`absolute top-full left-0 w-full border-t border-white/10 bg-ff-black transition-[grid-template-rows] duration-200 ease-in-out ${
                isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mx-auto flex w-full max-w-[1440px] flex-wrap gap-x-16 gap-y-6 px-8 py-8">
                  {link.columns!.map((col, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      {col.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDesktop(null)}
                          className="font-sans text-[15px] font-bold text-white visited:text-white transition-colors duration-200 hover:text-ff-red"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
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
          {NAV_LINKS.map((link) => {
            const hasDropdown = !!link.columns;
            const expanded = openMobile === link.label;
            return (
              <div key={link.href} className="w-full border-b border-white/15">
                <div className="flex w-full items-center justify-center py-4">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`font-heading text-[18px] font-bold not-italic normal-case text-white visited:text-white transition-colors duration-200 hover:text-ff-red ${
                      pathname === link.href ? "text-ff-red" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  {hasDropdown && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() =>
                        setOpenMobile(expanded ? null : link.label)
                      }
                      className="ml-2 flex h-8 w-8 items-center justify-center text-white"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {hasDropdown && (
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col items-center gap-3 pb-4">
                        {link.columns!.flat().map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenMobile(null);
                            }}
                            className="font-sans text-[15px] text-white/80 visited:text-white/80 transition-colors duration-200 hover:text-ff-red"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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

      <div className="h-16 lg:h-[108px]" aria-hidden="true" />
    </>
  );
}
