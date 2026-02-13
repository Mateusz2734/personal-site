"use client";

import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export default function AboutPage() {
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
      <div className="max-w-2xl mx-auto px-4 md:px-10 mt-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
        <p className="text-neutral-300 text-sm md:text-lg ">{paragraph}</p>
      </div>

      <button className="p-[3px] relative block mx-auto my-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-4 py-2 bg-black rounded-[6px] relative group transition duration-200 text-sm text-white hover:bg-transparent">
          <a href="resume.pdf" target="_blank">
            View resume
          </a>
        </div>
      </button>

      <Timeline entries={entries} />
    </motion.main>
  );
}

const title = "Hi, I'm Mateusz! 👋";
const paragraph =
  "a Software Engineer who loves turning ideas into real software. Even though I'm still early in my career, I've already had the chance to work on projects that pushed me to innovate, master new skills, and embrace fresh challenges. From late-night coding to brainstorming with awesome teammates, every project has been a learning opportunity. Below is a timeline highlighting some of the standout moments from my journey so far. Check it out to see how I'm growing in the world of tech, and feel free to dive into my resume for more details on my background!";

const entries = [
  {
    title: "February 2026",
    content:
      "Graduated from AGH University of Science and Technology in Kraków with a Bachelor's degree in Computer Science! 🎓",
  },
  {
    title: "August 2024",
    content:
      "Joined Ceneo.pl as an intern in Data Science team — leveling up my skills! 🚀",
  },
  {
    title: "October 2022",
    content:
      "Started my BSc in Computer Science at AGH University of Science and Technology in Kraków. 🎓",
  },
  {
    title: "August 2022",
    content:
      "Pushed my first commit on GitHub — been coding and regularly committing ever since. 💻",
  },
  {
    title: "July 2020",
    content:
      "Created a GitHub account… but it took me a while to actually use it. 😅",
  },
  {
    title: "Around 2017",
    content: "Wrote my first line of Python code. 🐍",
  },
];
