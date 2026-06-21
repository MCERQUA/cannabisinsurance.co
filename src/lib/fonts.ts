import { Inter } from "next/font/google";

// Heading font — Inter (bold, tight tracking, premium professional feel)
export const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// Body font — Inter (same family, clean legibility for compliance-heavy copy)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});
