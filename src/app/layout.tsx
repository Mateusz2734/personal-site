import type { Metadata } from "next";
import localFont from "next/font/local";

import { BackToTopButton } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://mwala.dev";
const siteDescription =
  "Software Engineer based in Kraków, Poland. CS graduate from AGH University of Science and Technology. Passionate about building real software and solving challenging problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mateusz Wala | Software Engineer",
    template: "%s | Mateusz Wala",
  },
  description: siteDescription,
  authors: [{ name: "Mateusz Wala", url: siteUrl }],
  creator: "Mateusz Wala",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mateusz Wala",
    title: "Mateusz Wala | Software Engineer",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateusz Wala – Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateusz Wala | Software Engineer",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mateusz Wala",
              url: siteUrl,
              jobTitle: "Software Engineer",
              email: "kontakt.mateusz2734@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kraków",
                addressCountry: "PL",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "AGH University of Science and Technology",
                url: "https://www.agh.edu.pl/en/",
              },
              sameAs: [
                "https://github.com/Mateusz2734",
                "https://www.linkedin.com/in/mateusz-wala2734/",
              ],
            }),
          }}
        />
        <BackToTopButton />
        <Navbar />
        <section className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden py-24">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
