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
