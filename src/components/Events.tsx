"use client";

import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "./icons/ArrowIcon";
import { CubeIcon } from "./icons/CubeIcon";

const Card = ({
  title,
  desc,
  className = "",
  delay = 0,
}: {
  title: string;
  desc: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: -1.5 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 120, damping: 18, delay }}
    className={`bg-white/5 ring-1 ring-white/10 rounded-md p-6 lg:p-8 text-typography ${className}`}
  >
    <CubeIcon />
    <h3 className="mt-5 text-xl font-semibold">{title}</h3>
    <p className="mt-3 text-typography/80 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Events = () => {
  return (
    <section className="text-typography border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <p className="text-center text-typography/70 text-sm">Event</p>
        <h2 className="mt-3 text-center text-3xl sm:text-4xl font-semibold">
          Key event components
        </h2>
        <p className="mt-3 text-center text-typography/80">
          Discover the unique blend of chess and innovation
        </p>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Big left card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" bg-white/5 ring-1 ring-white/10 rounded-md p-6 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <p className="text-typography/70 text-xs uppercase tracking-wide">
                Chess
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
                Chess tournament for all
                <br className="hidden sm:block" />
                skill levels
              </h3>
              <p className="mt-4 text-typography/80 max-w-2xl">
                Compete across beginner, intermediate, and professional
                categories with exciting prizes.
              </p>
            </div>

            {/* image placeholder */}
            <div className="mt-6 h-36 sm:h-44 md:h-52 lg:h-56 w-56 sm:w-64 md:w-72 rounded-md bg-white/10 ring-1 ring-white/10 grid place-items-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                className="text-typography/40"
                fill="currentColor"
              >
                <path d="M21 19V5a2 2 0 0 0-2-2H5C3.9 3 3 3.9 3 5v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2zM5 5h14v8.6l-2.9-2.9a1 1 0 0 0-1.4 0L10 14.4l-2.3-2.3a1 1 0 0 0-1.4 0L5 13.4V5zm0 14v-3.6l2-2 2.3 2.3a1 1 0 0 0 1.4 0l4.7-4.7 3.6 3.6V19H5zm10-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </div>

            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://app.reapvest.com/register"
              className="mt-6 inline-flex items-center gap-2 text-sm"
            >
              Register
              <ArrowIcon />
            </a>
          </motion.div>

          {/* Right grid (4 cards) */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-6">
              <Card
                title="Innovation pitch session"
                desc="Platform for emerging startups and entrepreneurs"
                delay={0.05}
              />
              <Card
                title="Networking and exhibitions"
                desc="Connect with potential investors and collaborators"
                delay={0.1}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card
                title="Workshops and training"
                desc="Learn from industry experts and professionals"
                delay={0.15}
              />
              <Card
                title="Side attractions"
                desc="Music, art, and creative showcases"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
