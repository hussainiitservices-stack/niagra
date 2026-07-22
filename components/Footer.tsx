import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/logo2.png"
              alt="Niagra"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-xs">
              Established almost 30 years ago, Niagra International Wood Industry LLC has
              grown to become one of the prominent interior fit-out factories in the UAE.
            </p>
          </div>

          <div>
            <p className="font-display text-lg mb-4">Quick Link</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              {[
                { href: "/about-us", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/certificates", label: "Certificates" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-draw hover:text-brass">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg mb-4">Our Services</p>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/fire-rated-doors-uae" className="link-draw hover:text-brass">
                  Fire Rated Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/fireproof-doors-in-dubai"
                  className="link-draw hover:text-brass"
                >
                  Fireproof Doors in Dubai
                </Link>
              </li>
              <li>
                <Link href="/acoustic-doors-uae" className="link-draw hover:text-brass">
                  Acoustic Doors UAE
                </Link>
              </li>
              <li>
                <Link href="/interior-joinery" className="link-draw hover:text-brass">
                  Interior Joinery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg mb-4">Contact Info</p>
            <ul className="space-y-3 text-sm text-white/75">
              <li>{SITE.address}</li>
              <li>
                <a href={SITE.phoneHref} className="link-draw hover:text-brass">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="link-draw hover:text-brass">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw hover:text-brass"
                >
                  WhatsApp {SITE.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="hairline mt-14 mb-6 !bg-white/15" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Niagra. All rights reserved.</p>
          <p>Sharjah, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
