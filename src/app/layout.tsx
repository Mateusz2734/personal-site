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

export const metadata: Metadata = {
  title: "Mateusz Wala",
  description: "Personal website of Mateusz Wala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
