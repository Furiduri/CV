// Locale-independent business facts for the GCatcode landing and legal pages.
// Translated copy lives in the dictionaries; these values are injected into it.

export const business = {
  brand: "GCatcode",
  legalName: "Jorge Osvaldo Perez Mendoza",
  location: "Zapopan, Jalisco, México",
  email: "Jorge.Furiduri@gmail.com",
  phoneDisplay: "+52 (33) 2173 9884",
  // International format without symbols, as wa.me expects it.
  whatsappNumber: "523321739884",
  hourlyRateMxn: 500,
  freeCallMinutes: 30,
  cycleBusinessDays: 10,
  cycleWeeks: 2,
  warrantyDays: 30,
} as const;

// ISO date of the last revision of the terms and the privacy notice; the
// human-readable date lives in each dictionary (`legal.updatedDate`).
export const legalLastUpdated = "2026-10-02";

export const caseStudy = {
  name: "Juegalajara",
  url: "https://juegalajara.mx/",
  stack: ["Astro", "Firebase", "Tailwind CSS"],
} as const;

// WhatsApp click-to-chat link with a prefilled message.
export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mailtoUrl = `mailto:${business.email}`;

// Values every business dictionary string may reference as `{placeholder}`.
export const businessPlaceholders = {
  brand: business.brand,
  name: business.legalName,
  location: business.location,
  email: business.email,
  phone: business.phoneDisplay,
  rate: business.hourlyRateMxn,
  minutes: business.freeCallMinutes,
  cycleDays: business.cycleBusinessDays,
  cycleWeeks: business.cycleWeeks,
  warrantyDays: business.warrantyDays,
} as const;
