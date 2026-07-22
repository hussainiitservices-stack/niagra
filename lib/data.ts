export const certifications = [
  { id: "civil-defense", label: "Civil Defense Approved", short: "Civil Defense" },
  { id: "iso", label: "ISO Quality Standards", short: "ISO" },
  { id: "fd60", label: "FD60 Fire Rating", short: "FD60" },
  { id: "fd90", label: "FD90 Fire Rating", short: "FD90" },
  { id: "fd120", label: "FD120 Fire Rating", short: "FD120" },
  { id: "acoustic", label: "Acoustic Performance Tested", short: "Acoustic" },
] as const;

export const services = [
  {
    slug: "fire-rated-doors-uae",
    href: "/fire-rated-doors-uae",
    title: "Fire Rated Doors",
    short:
      "Fire rated doors are designed to withstand extreme temperatures and offer vital protection against fire, which helps stop the spread of flames and smoke.",
    description:
      "Fire-rated wooden doors engineered to contain fire and smoke for 30, 60, 90, or 120 minutes. Built to meet civil defense requirements and international safety standards.",
    image: "/brand/service-fire.webp",
    imageAlt: "Fire rated wooden door",
  },
  {
    slug: "fireproof-doors-in-dubai",
    href: "/fireproof-doors-in-dubai",
    title: "Fireproof Doors in Dubai",
    short:
      "Fireproof wooden doors for Dubai projects — manufactured to rating requirements with finishes that suit commercial and residential interiors.",
    description:
      "Fireproof door packages for Dubai sites, coordinated with frames, seals, and hardware for civil defense compliant installations.",
    image: "/brand/service-joinery.jpg",
    imageAlt: "Fireproof door and interior woodwork",
  },
  {
    slug: "acoustic-doors-uae",
    href: "/acoustic-doors-uae",
    title: "Acoustic Doors UAE",
    short:
      "Acoustic and soundproof wooden doors for hotels, studios, offices, and healthcare spaces across the UAE.",
    description:
      "Acoustic wooden doors designed to reduce sound transmission between rooms — specified for hospitality guest rooms, recording studios, meeting rooms, and healthcare spaces.",
    image: "/brand/banner2.webp",
    imageAlt: "Acoustic wooden door detail",
  },
] as const;

export const fireRatings = [
  {
    code: "FD30",
    minutes: 30,
    title: "30-Minute Fire Door",
    description:
      "Suitable for secondary escape routes and lower-risk compartments where a 30-minute integrity rating is specified.",
  },
  {
    code: "FD60",
    minutes: 60,
    title: "60-Minute Fire Door",
    description:
      "The most commonly specified rating for corridors, stairwells, and compartmentation in hotels, offices, and residential towers.",
  },
  {
    code: "FD90",
    minutes: 90,
    title: "90-Minute Fire Door",
    description:
      "Higher integrity rating for plant rooms, service shafts, and areas requiring extended fire resistance.",
  },
  {
    code: "FD120",
    minutes: 120,
    title: "120-Minute Fire Door",
    description:
      "Maximum wooden fire-door rating for critical compartments, high-risk zones, and projects with stringent civil defense requirements.",
  },
] as const;

export const whyChoose = [
  {
    title: "Trusted by Leading Clients",
    text: "Our doors protect UAE’s top hotels, hospitals, and commercial projects.",
  },
  {
    title: "Customized Solutions",
    text: "Tailored doors and joinery to meet your design and safety needs.",
  },
  {
    title: "End-to-End Expertise",
    text: "From design, manufacturing, and installation to project handover.",
  },
  {
    title: "Civil defense compliant",
    text: "Fire-rated products built to meet UAE civil defense approvals and international safety standards.",
  },
] as const;

export const projects = [
  {
    slug: "hospitality-corridor-doors",
    title: "Hotel Corridor Fire Doors",
    sector: "Hospitality",
    outcome: "420 FD60 corridor doors supplied and installed",
    location: "Dubai",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    imageAlt: "Hotel corridor with wooden doors",
  },
  {
    slug: "hospital-compartment-doors",
    title: "Hospital Compartment Doors",
    sector: "Healthcare",
    outcome: "FD90 doors for wards and service corridors",
    location: "Sharjah",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    imageAlt: "Healthcare facility corridor",
  },
  {
    slug: "office-tower-joinery",
    title: "Commercial Tower Fit-Out",
    sector: "Commercial",
    outcome: "Acoustic meeting-room doors and reception joinery",
    location: "Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    imageAlt: "Modern commercial office interior",
  },
  {
    slug: "residential-villa-joinery",
    title: "Villa Interior Joinery",
    sector: "Residential",
    outcome: "Custom kitchens, wardrobes, and panelled doors",
    location: "Dubai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Residential interior with wood joinery",
  },
] as const;

export const galleryItems = [
  {
    title: "Walnut veneer fire door",
    category: "Fire-Rated",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80",
  },
  {
    title: "Hotel guest-room door set",
    category: "Acoustic",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1000&q=80",
  },
  {
    title: "Kitchen cabinetry detail",
    category: "Joinery",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c875dba?w=1000&q=80",
  },
  {
    title: "Door edge and hardware",
    category: "Detail",
    image:
      "https://images.unsplash.com/photo-1558618047-f4b1b403bbb5?w=1000&q=80",
  },
  {
    title: "Wardrobe interior fit-out",
    category: "Joinery",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1000&q=80",
  },
  {
    title: "Commercial lobby doors",
    category: "Fire-Rated",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80",
  },
  {
    title: "Ceiling and partition work",
    category: "Joinery",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80",
  },
  {
    title: "Wood finish close-up",
    category: "Detail",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1000&q=80",
  },
] as const;

export const blogPosts = [
  {
    slug: "what-is-a-fire-rated-door-in-uae",
    title: "What is a Fire-Rated Door in the UAE?",
    excerpt:
      "Fire-rated doors contain fire and smoke for a tested period — typically 30 to 120 minutes — and must meet civil defense requirements on UAE projects.",
    date: "2025-10-10",
    category: "Fire-Rated Doors",
  },
  {
    slug: "what-are-fire-rated-doors-and-how-check-fire-rated-doors-in-uae",
    title: "How to Check Fire-Rated Doors in the UAE",
    excerpt:
      "Look for the rating plate, correct seals, certified hardware, and documentation that matches the project specification and civil defense approval.",
    date: "2025-09-09",
    category: "Compliance",
  },
  {
    slug: "choosing-the-right-door-fire-rated-acoustic-and-fireproof-options-for-buildings-in-the-uae",
    title: "Choosing Fire-Rated vs Acoustic Doors",
    excerpt:
      "Fire doors manage compartmentation; acoustic doors manage sound. Many hospitality and healthcare projects need both — sometimes in the same leaf.",
    date: "2025-09-09",
    category: "Specification",
  },
  {
    slug: "buy-sound-shielded-hotel-soundproof-doors-in-uae",
    title: "Hotel Soundproof Doors in the UAE",
    excerpt:
      "Guest-room acoustic doors reduce corridor noise and improve sleep quality. Specifiers should confirm Rw performance, seals, and frame detailing.",
    date: "2025-09-09",
    category: "Acoustic Doors",
  },
] as const;

export const stats = [
  { value: 30, suffix: "+", label: "Years of craftsmanship" },
  { value: 100, suffix: "+", label: "Client organisations" },
  { value: 250, suffix: "K+", label: "Doors & units delivered" },
  { value: 4, suffix: "", label: "Fire ratings: 30–120 min", display: "60/90/120" },
] as const;

export const bigStats = [
  { value: 30, suffix: "+", label: "Years Manufacturing" },
  { value: 380, suffix: "+", label: "Commercial Projects" },
  { value: 220, suffix: "+", label: "Hospitality & Residential" },
  { value: 4, suffix: "", label: "Minute Ratings Available", display: "30–120" },
] as const;

export const industries = [
  { title: "Hospitality", text: "Hotel corridors, guest rooms, back-of-house" },
  { title: "Healthcare", text: "Wards, clinics, compartmentation packages" },
  { title: "Commercial", text: "Towers, offices, retail & mixed-use" },
  { title: "Residential", text: "Villas, apartments, and fit-out joinery" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Specify",
    text: "Rating, quantity, finishes, and hardware aligned to drawings and civil defense requirements.",
  },
  {
    step: "02",
    title: "Manufacture",
    text: "Wooden fire, acoustic, and joinery packages built in our Sharjah workshop.",
  },
  {
    step: "03",
    title: "Install",
    text: "Site installation coordinated with your programme — inspection-ready detailing.",
  },
  {
    step: "04",
    title: "Handover",
    text: "Documentation, rating plates, and clean handover for consultants and authorities.",
  },
] as const;

export const faqs = [
  {
    q: 'What does a "60-minute" fire door mean?',
    a: "The tested door assembly resists the passage of fire through the opening for 60 minutes. The rating is shown on a permanent label and must match the project specification.",
  },
  {
    q: "Can a fire door be cut or modified on site?",
    a: "No. Field modifications that void the tested listing are not permitted. Leaves, frames, seals, and hardware must remain as manufactured and approved.",
  },
  {
    q: "Do you supply civil defense documentation?",
    a: "Yes. Niagra prepares rating documentation and package details to support UAE civil defense review alongside your project submissions.",
  },
  {
    q: "Do you manufacture acoustic and joinery as well?",
    a: "Yes. Alongside fire-rated doors we manufacture acoustic/soundproof doors and interior joinery — wardrobes, kitchens, cabinets, partitions, ceilings, and flooring.",
  },
] as const;

export const whereUsed = [
  "Fire and escape stair enclosures",
  "Corridor and compartment walls",
  "Plant, electrical, and riser rooms",
  "Hotel guest-room and BOH door sets",
  "Healthcare wards and service corridors",
  "Smoke barrier and occupancy separations",
] as const;

