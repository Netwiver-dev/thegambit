"use client";

import React from "react";
import { motion } from "framer-motion";
import EyeIcon from "./icons/EyeIcon";
import ShapesIcon from "./icons/ShapesIcon";
import PuzzleIcon from "./icons/PuzzleIcon";
import UsersIcon from "./icons/UsersIcon";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="text-typography border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left image placeholder */}
        <div className="w-full aspect-[4/3] rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
          <Image
            src="/images/chess2.jpg"
            alt=""
            width={400}
            height={400}
            className="object-cover w-full h-full transition-all group-hover:scale-110 duration-500 group-hover:opacity-90"
            priority
          />
        </div>

        {/* Right features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          <div className="space-y-3">
            <PuzzleIcon />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">Why participate</h3>
              <p className="text-typography/80">
                Develop strategic thinking skills through competitive and
                collaborative experiences
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            <UsersIcon />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">Community growth</h3>
              <p className="text-typography/80">
                Build meaningful connections across tech, creative, and
                entrepreneurial ecosystems
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            <ShapesIcon />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">
                Networking opportunities
              </h3>
              <p className="text-typography/80">
                Meet potential mentors, investors, and collaborators in a
                dynamic environment
              </p>
            </motion.div>
          </div>

          <div className="space-y-3">
            <EyeIcon />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold">Brand visibility</h3>
              <p className="text-typography/80">
                Gain exposure and recognition through our comprehensive event
                platform
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
