import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"], weight: ["400","500","600"], variable: "--font-sans", display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ameni-benrekaya.vercel.app"),
  title: "Ameni Ben Rekaya — WordPress & Front-End Developer",
  description:
    "WordPress and front-end developer in Sousse, Tunisia. Nine years designing and building fast, responsive websites — including Arabic RTL — for agencies and businesses across Europe and the Middle East.",
  openGraph: {
    title: "Ameni Ben Rekaya — WordPress & Front-End Developer",
    description: "Design and build: WordPress, Elementor, front-end and Arabic RTL websites.",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const personSchema = {
  "@context": "https://schema.org", "@type": "Person",
  name: "Ameni Ben Rekaya", jobTitle: "WordPress & Front-End Developer",
  url: "https://ameni-benrekaya.vercel.app", email: "mailto:ameni.benrekaya@gmail.com",
  sameAs: ["https://www.linkedin.com/in/ameni-ben-rekaya/"],
  address: { "@type": "PostalAddress", addressLocality: "Sousse", addressCountry: "TN" },
  knowsLanguage: ["en", "fr", "ar"],
  knowsAbout: ["WordPress","Elementor","WooCommerce","PHP","Front-end development","UI design",
               "Arabic right-to-left interfaces","Core Web Vitals"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="no-js">
        <a className="skip" href="#work">Skip to the work</a>
        {children}
        <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
