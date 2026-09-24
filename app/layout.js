import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Ameni Ben Rekaya — WordPress & Front-End Developer",
  description:
    "WordPress and front-end developer in Sousse, Tunisia. Nine years designing and building fast, responsive websites for agencies and businesses across Europe and the Middle East.",
  openGraph: {
    title: "Ameni Ben Rekaya — WordPress & Front-End Developer",
    description: "Design and build: WordPress, Elementor, front-end and Arabic RTL websites.",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
