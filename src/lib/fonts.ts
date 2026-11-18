import localFont from "next/font/local";

// Heading font — Inter (bold, tight tracking, premium professional feel)
export const headingFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "900", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

// Body font — Inter (same family, clean legibility for compliance-heavy copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "900", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
