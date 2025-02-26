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
        title: "FileSystem Cleaner",
        description: "FileSystem Cleaner is an application designed specifically for Windows computers that helps users manage their files more efficiently. It uses machine learning models to extract the semantic meaning from files based on their content and provides a user-friendly web interface for organizing and deleting them. The application is built with Java and TypeScript, using Spring Boot for the backend and React with Tailwind CSS and shadcn/ui for the frontend. It also leverages the SentenceTransformers library to embed file content.\nMy role in the project was to migrate the app from plain JavaFX to a web-based solution and integrate the SentenceTransformers library.",
        image: "cleaner.webp",
        url: "https://github.com/Mateusz2734/filesystem-cleaner",
        technologies: [
            { name: "Java", url: "https://www.java.com/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "Python", url: "https://www.python.org/" },
            { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
            { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
            { name: "React", url: "https://reactjs.org/" },
            { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
            { name: "SentenceTransformers", url: "https://www.sbert.net/" },
        ],
        badgesSpan: 3,
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website, built with Next.js and TypeScript. It features a modern design with smooth animations and transitions, making it easy to navigate and visually appealing. The site is responsive and optimized for performance, ensuring a seamless user experience on all devices. I used Aceternity UI with shadcn/ui for the UI components and Tailwind CSS for styling, along with Framer Motion for animations. It uses Static Site Generation (SSG) to generate static HTML files at build time, resulting in fast loading speeds, improved Search Engine Optimization (SEO) and ensuring flexible deployment options.",
        image: "portfolio.webp",
        url: "https://github.com/Mateusz2734/personal-site",
        technologies: [
            { name: "Next.js", url: "https://nextjs.org/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
            { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
            { name: "Framer Motion", url: "https://www.framer.com/motion/" },
            { name: "Aceternity UI", url: "https://ui.aceternity.com/" },
        ],
        badgesSpan: 3,
    },
    {
        title: "SkillSnap",
        description:
            "SkillSnap is a project made for the Introduction to Web Applications course at AGH UST. It showcases a concept for an online skill exchange platform and demonstrates CRUD operations on a PostgreSQL database, as well as user authentication and authorization. Moreover, it features a frontend made with React. To avoid writing Chat functionality (limited time), I have assumed that the users can communicate via Discord (of course it's not the best solution).",
        image: "skillsnap.webp",
        url: "https://github.com/Mateusz2734/SkillSnap",
        technologies: [
            { name: "Golang", url: "https://go.dev/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "sqlc", url: "https://sqlc.dev/", },
            { name: "React", url: "https://reactjs.org/" },
            { name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { name: "Docker", url: "https://www.docker.com/" },
        ],
        badgesSpan: 3,
    },
    {
        title: "TODO App",
        description: "TODO App is a simple, frontend-only task management application built with TypeScript and React. It allows users to create, delete, and mark tasks as completed, with all tasks persisted via localStorage for data retention across sessions. The app features a clean, intuitive interface that adapts seamlessly to any device size and includes a dark mode option. While it doesn’t offer advanced filtering, tasks are neatly organized into three tabs: \"Inbox\" for all pending tasks, \"Today\" for tasks with a due date set to today, and \"Done\" for completed tasks. Additionally, the app supports importing and exporting tasks, making it easy to transfer your data between devices. I used Joy UI for components and styling, React Router for navigation, and Zustand for state management.",
        image: "todo.webp",
        url: "https://github.com/Mateusz2734/todo-list",
        technologies: [
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "React", url: "https://reactjs.org/" },
            { name: "Joy UI", url: "https://mui.com/joy-ui/getting-started/" },
            { name: "React Router", url: "https://reactrouter.com/" },
            { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
        ],
    },
    {
        title: "Intrastat Helper",
        description:
            "Intrastat Helper is a desktop application designed to streamline repetitive tasks and improve efficiency. Built for my mother to simplify her workflow, it automates processes that previously required significant manual effort, reducing errors and saving valuable time. With a user-friendly interface, the application makes data management faster and more intuitive.\nBy automating key tasks such as invoice processing, the application has dramatically cut down on processing time. In some cases, tasks that once took hours are now completed in minutes, leading to an estimated annual time savings of 620 hours, or roughly 26 full workdays. This efficiency boost allows more focus on important work rather than tedious, repetitive processes.",
        image: "helper.webp",
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
