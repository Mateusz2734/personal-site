import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mateusz Wala — Software Engineer and Computer Science graduate from AGH University of Science and Technology in Kraków, Poland, with experience in full-stack development and data science.",
  openGraph: {
    title: "About | Mateusz Wala",
    description:
      "Learn about Mateusz Wala — Software Engineer and CS graduate from AGH UST in Kraków, Poland.",
    url: "https://mwala.dev/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateusz Wala – Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://mwala.dev/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
