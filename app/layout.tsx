import type { Metadata } from "next";
import { Raleway, Poppins, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import RevealObserver from "@/components/site/RevealObserver";
import SiteBackground from "@/components/site/SiteBackground";

// InsightsTap brand type stack (per brand guidelines):
// Raleway — display & headings · Poppins — subheads & UI labels
// Inter — body text · Space Mono — readout/data labels.
const display = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-loaded",
  display: "swap",
});
const ui = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ui-loaded",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-loaded",
  display: "swap",
});
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riteshosta.com"),
  title: {
    default: "Ritesh Osta — GTM Engineer & B2B Signal-Led Growth",
    template: "%s · Ritesh Osta",
  },
  description:
    "I build signal-led GTM engines for B2B tech companies. AI agents, dark funnel intelligence and CRM automation. Founder of InsightsTap.",
  openGraph: {
    type: "website",
    siteName: "Ritesh Osta",
    title: "Ritesh Osta — GTM Engineer & B2B Signal-Led Growth",
    description:
      "I build signal-led GTM engines for B2B tech companies. Founder of InsightsTap, creator of the DARK Funnel framework.",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

// Progressive-enhancement flag, set before first paint (drives .reveal hiding).
const JS_FLAG = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${ui.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <SiteBackground />
        <a href="#main" className="skip-link" style={{ position: "absolute", left: "-9999px" }}>
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
