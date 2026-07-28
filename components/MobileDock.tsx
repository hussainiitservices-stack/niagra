import { SITE } from "@/lib/constants";
import Link from "next/link";

/** Mobile-only sticky action bar — Call + Quote. Hidden from md up. */
export function MobileDock() {
  return (
    <div className="mobile-dock md:hidden" data-no-scroll-animate="">
      <a href={SITE.phoneHref} className="mobile-dock-btn mobile-dock-call">
        Call
      </a>
      <Link href="/contact-us#quote" className="mobile-dock-btn mobile-dock-quote">
        Free Quote
      </Link>
    </div>
  );
}
