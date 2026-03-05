import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of Mateusz Wala's software projects — including full-stack web apps and desktop tools built with TypeScript, React, Go, Java, and Python.",
  openGraph: {
    title: "Projects | Mateusz Wala",
    description:
      "A showcase of Mateusz Wala's software projects — including full-stack web apps and desktop tools.",
    url: "https://mwala.dev/projects",
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
    canonical: "https://mwala.dev/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
