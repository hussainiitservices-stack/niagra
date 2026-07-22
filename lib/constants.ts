export const SITE = {
  name: "Niagra International Wood Industry LLC",
  shortName: "Niagra",
  tagline: "Fire-rated doors and fine joinery since 1998",
  url: "https://www.niagrauae.com",
  email: "info@niagrauae.com",
  phone: "+971 6 531 0844",
  phoneHref: "tel:+97165310844",
  whatsapp: "+971 50 539 1869",
  whatsappHref: "https://wa.me/971505391869",
  mobile: "+971 50 539 1869",
  mobileHref: "tel:+971505391869",
  address: "P.O. Box 33131, Sharjah, United Arab Emirates",
  founded: 1998,
  years: 30,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/services",
    label: "Our Services",
    children: [
      { href: "/fire-rated-doors-uae", label: "Fire Rated Doors" },
      { href: "/acoustic-doors-uae", label: "Acoustic Doors UAE" },
      {
        href: "/hotel-soundproof-doors-in-uae",
        label: "Hotel Soundproof Doors",
      },
      {
        href: "/studio-acoustic-doors-in-uae",
        label: "Studio Acoustic Doors",
      },
      { href: "/fireproof-doors-in-dubai", label: "Fireproof Doors in Dubai" },
      { href: "/interior-joinery", label: "Interior Joinery" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
] as const;
