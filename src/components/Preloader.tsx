"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MINIMUM_DISPLAY_TIME_MS = 1500;
const TEXT_TO_TYPE = "DeGambit";
const CHARACTER_DELAY_MS = 80; // Delay per character for typing effect

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, MINIMUM_DISPLAY_TIME_MS);

    const handleLoad = () => {
      if (Date.now() - startTime >= MINIMUM_DISPLAY_TIME_MS) {
        setIsLoading(false);
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const wrapperVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1 },
  };

  const brandColor = "#fff";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: CHARACTER_DELAY_MS / 1000,
        delayChildren: 0.2,
      },
    }),
  };

  const charVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={wrapperVariants}
          initial="visible"
          exit="hidden"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            className="relative w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.5,
            }}
          >
            {/* Outer Circle (Dashed or Border) */}
            <div
              className="absolute inset-0 border-4 rounded-full"
              style={{
                borderColor: `${brandColor} transparent ${brandColor} transparent`,
              }}
            />

            {/* Inner Dot/Element */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 "
              style={{ backgroundColor: brandColor, x: "-50%", y: "-50%" }}
              initial={{ x: "calc(-50% - 30px)", y: "-50%" }}
              animate={{ x: "calc(-50% + 30px)", y: "-50%" }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.7,
              }}
            />
          </motion.div>

          {/* --- Typewriter Text --- */}
          <motion.div
            className="mt-6 text-2xl font-bold text-center whitespace-nowrap overflow-hidden"
            style={{ color: brandColor }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {TEXT_TO_TYPE.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}{" "}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
