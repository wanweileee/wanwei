import "./globals.css";
import { Fraunces, Inter, Caveat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IndexOverlay from "@/components/IndexOverlay";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://wanweileee.github.io/my-portfolio";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Wan Wei · AI Engineer", template: "%s · Wan Wei" },
  description:
    "Lee Wan Wei. AI engineer studying at SUTD. Computer vision, RAG, full-stack systems.",
  openGraph: {
    title: "Wan Wei · AI Engineer",
    description:
      "AI engineer studying at SUTD, building careful systems where vision, language, and full-stack meet.",
    url: SITE_URL,
    siteName: "Wan Wei",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Wan Wei — building careful systems where vision, language and software meet.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wan Wei · AI Engineer",
    description:
      "Building careful systems where vision, language and software meet.",
    images: [`${SITE_URL}/og.png`],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lee Wan Wei",
  alternateName: "Wan Wei",
  url: SITE_URL,
  jobTitle: "AI Engineer",
  email: "mailto:wanweilee22@gmail.com",
  sameAs: [
    "https://github.com/wanweileee",
    "https://www.linkedin.com/in/leewanwei",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Singapore University of Technology and Design",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <IndexOverlay />
      </body>
    </html>
  );
}
