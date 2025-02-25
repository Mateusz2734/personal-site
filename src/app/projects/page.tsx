'use client';

import { motion } from "framer-motion";

import { createProjectShowcase } from "@/components/project";
import { BentoGrid } from "@/components/ui/bento-grid";

export default function ProjectsPage() {
    return (
        <motion.main
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
        >
            <BentoGrid className="min-h-screen w-full mx-auto p-4">
                {projects.map((project, i) => createProjectShowcase(project, i))}
            </BentoGrid>
        </motion.main>
    );
}

const projects = [
    {
        title: "Intrastat Helper",
        description:
            "Intrastat Helper is a desktop application designed to streamline repetitive tasks and improve efficiency. Built for my mother to simplify her workflow, it automates processes that previously required significant manual effort, reducing errors and saving valuable time. With a user-friendly interface, the application makes data management faster and more intuitive.\nBy automating key tasks such as invoice processing, the application has dramatically cut down on processing time. In some cases, tasks that once took hours are now completed in minutes, leading to an estimated annual time savings of 620 hours, or roughly 26 full workdays. This efficiency boost allows more focus on important work rather than tedious, repetitive processes.",
        image: "intrastat-page.png",
        url: "https://github.com/Mateusz2734/intrastat-gui",
        technologies: [
            { name: "Python", url: "https://www.python.org/" },
            { name: "pandas", url: "https://pandas.pydata.org/" },
            {
                name: "PyQt5",
                url: "https://riverbankcomputing.com/software/pyqt/intro",
            },
        ],
    },
    {
        title: "Intrastat Helper",
        description:
            "Intrastat Helper is a desktop application designed to streamline repetitive tasks and improve efficiency. Built for my mother to simplify her workflow, it automates processes that previously required significant manual effort, reducing errors and saving valuable time. With a user-friendly interface, the application makes data management faster and more intuitive.\nBy automating key tasks such as invoice processing, the application has dramatically cut down on processing time. In some cases, tasks that once took hours are now completed in minutes, leading to an estimated annual time savings of 620 hours, or roughly 26 full workdays. This efficiency boost allows more focus on important work rather than tedious, repetitive processes.",
        image: "intrastat-page.png",
        url: "https://github.com/Mateusz2734/intrastat-gui",
        technologies: [
            { name: "Python", url: "https://www.python.org/" },
            { name: "pandas", url: "https://pandas.pydata.org/" },
            {
                name: "PyQt5",
                url: "https://riverbankcomputing.com/software/pyqt/intro",
            },
        ],
    },
];
