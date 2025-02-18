'use client';
import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";

export default function MainPage() {
  const words = ["Software Engineer", "Programmer"];

  return (
    <>
      <div id="about" className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.2}
            maxSize={3.4}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#c88cf5"
          />
        </div>
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="mb-4">
            Mateusz Wala
          </div>
          <Highlight className="text-black dark:text-white">
            <FlipWords words={words} duration={7000} />
          </Highlight>
        </motion.h1>
      </div>
    </>
  );
}

