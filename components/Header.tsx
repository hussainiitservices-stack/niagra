"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerElevated = mounted && (scrolled || open);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        headerElevated
          ? "bg-white shadow-[0_8px_30px_rgba(10,10,10,0.06)]"
          : "bg-white/95"
      }`}
    >
      <div className="hidden md:block bg-heading text-white">
        <div className="container-site flex items-center justify-between gap-4 py-2 text-xs tracking-wide">
          <p className="text-white/80">
            <span className="text-brass font-semibold">Civil Defence Approved</span>
            <span className="mx-2 text-white/30">·</span>
            ISO Quality Standards
            <span className="mx-2 text-white/30">·</span>
            UAE Manufacturing since 1998
          </p>
          <div className="flex items-center gap-4">
            <a href={SITE.phoneHref} className="hover:text-brass transition-colors">
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hidden lg:inline hover:text-brass transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-4 py-3 md:py-4">
        <Link
          href="/"
          className="relative z-10 shrink-0 rounded-b-2xl bg-white px-2 py-1 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src="/brand/logo2.png"
            alt="Niagra"
            width={150}
            height={50}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Primary">
          {NAV_LINKS.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[0.95rem] font-medium transition-colors ${
                    pathname.startsWith("/services") ||
                    pathname.includes("doors") ||
                    pathname.includes("joinery") ||
                    pathname.includes("fireproof")
                      ? "text-brass"
                      : "text-heading hover:text-brass"
                  }`}
                >
                  {item.label}
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-3 transition-opacity">
                  <div className="min-w-[240px] rounded-2xl border border-rule bg-white py-2 shadow-[0_16px_40px_rgba(10,10,10,0.1)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-muted hover:text-brass hover:bg-bone transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.95rem] font-medium transition-colors ${
                  pathname === item.href
                    ? "text-brass"
                    : "text-heading hover:text-brass"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden lg:inline text-sm font-medium text-heading hover:text-brass transition-colors"
          >
            {SITE.phone}
          </a>
          <Link
            href="/certificates"
            className="btn btn-primary !py-2.5 !px-4 !text-xs hidden sm:inline-flex btn-shine"
          >
            Certificates
          </Link>
          <Link
            href="/contact-us#quote"
            className="btn btn-dark !py-2.5 !px-4 !text-xs hidden md:inline-flex btn-shine"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule text-heading"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-heading transition-transform ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-heading transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-heading transition-transform ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="xl:hidden border-t border-rule bg-white max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <nav className="container-site flex flex-col py-4" aria-label="Mobile">
            {NAV_LINKS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="border-b border-rule">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 text-left text-base text-heading"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <span className="text-muted text-sm">{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen ? (
                    <div className="pb-3 pl-3 flex flex-col gap-1">
                      <Link href={item.href} className="py-2 text-sm text-muted">
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-rule py-3.5 text-base text-heading"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/certificates" className="btn btn-primary mt-5 w-full">
              Certificates
            </Link>
            <Link href="/contact-us#quote" className="btn btn-dark mt-3 w-full">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
