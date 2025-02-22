'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

import { FlipWords } from "@/components/ui/flip-words";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";

export default function MainPage() {
  const words = ["Enthusiast", "Software Engineer", "Problem Solver", "Software Developer", "Critical Thinker", "Programmer"];

  return (
    <>
      <SparklesCore
        minSize={0.2}
        maxSize={3.4}
        particleDensity={50}
        className="w-full absolute inset-0 h-screen"
        particleColor="#c88cf5"
      />
      <motion.h1
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto -mt-24"
      >
        <span className="block mb-4">
          Mateusz Wala
        </span>

        <Highlight className="text-black dark:text-white">
          <FlipWords words={words} duration={5000} />
        </Highlight>

        <button className="p-[3px] relative mt-24 block mx-auto">
          <Link href="/projects">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-6 py-4 bg-black rounded-[6px] relative group transition duration-200 text-sm text-white hover:bg-transparent">
              View Projects
            </div>
          </Link>
        </button>
      </motion.h1>
    </>
  );
}