"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LuArrowUp as ArrowUp } from "react-icons/lu";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 right-4 z-50"
                >
                    <Button onClick={scrollToTop} size="icon" className="rounded-full p-2">
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Back to top</span>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

