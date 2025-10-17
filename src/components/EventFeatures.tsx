"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon?: string;
  accent?: string;
};

const FEATURES: Feature[] = [
  {
    title: "Workshops & Insight Sessions",
    description:
      "Hands-on sessions with experts on strategy, innovation, and leadership.",
    accent: "from-amber-200",
  },
  {
    title: "Startup Pitch Competition",
    description:
      "₦1,000,000 prize pool, mentorship access, investor networking, and exposure.",
    accent: "from-emerald-200",
  },
  {
    title: "Chess Tournament",
    description:
      "Strategic showdown with ₦500,000 total prize pool for top players.",
    accent: "from-cyan-200",
  },
  {
    title: "Scrabble Challenge",
    description:
      "Word mastery contest for intellectual fun and community engagement.",
    accent: "from-fuchsia-200",
  },
  {
    title: "Innovation Expo",
    description:
      "Showcase cutting-edge solutions and ideas from startups and creators.",
    accent: "from-violet-200",
  },
  {
    title: "Networking Sessions",
    description:
      "Connect with founders, investors, and industry professionals.",
    accent: "from-rose-200",
  },
  {
    title: "Rap Battle Finals",
    description: "Creative expression competition with ₦100,000 prize pool.",
    accent: "from-lime-200",
  },
  {
    title: "Awards & Recognition",
    description: "Honoring outstanding performances, ideas, and contributions.",
    accent: "from-sky-200",
  },
  {
    title: "The Gambit Suya Night",
    description:
      "Exclusive dinner and entertainment for premium package holders.",
    accent: "from-amber-300",
  },
  {
    title: "Economic & Social Impact",
    description:
      "Driving youth innovation, entrepreneurship, and creative engagement.",
    accent: "from-teal-200",
  },
];

export default function EventFeatures() {
  const featureGroups = useMemo(() => {
    const cols: Feature[][] = [[], [], []];
    FEATURES.forEach((f, i) => cols[i % 3].push(f));
    return cols;
  }, []);

  return (
    <section className="border-b border-white/10">
      <motion.div
        id="features"
        className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-center text-typography/70 text-sm">Key features</p>
          <h2 className="mt-3 text-center text-typography  text-3xl sm:text-4xl font-semibold">
            Experience the heart of the Event
          </h2>
          <p className="mt-3 text-center text-typography/80">
            A curated blend of competition, creativity, learning, and meaningful
            connections.{" "}
          </p>
        </motion.div>

        {/* Masonry-like flowing columns without using a table */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {featureGroups.map((group, colIndex) => (
            <motion.div
              key={colIndex}
              className="space-y-6 md:space-y-8"
              variants={{
                hidden: { opacity: 1 },
                show: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
            >
              {group.map((feature, idx) => (
                <motion.article
                  key={feature.title}
                  className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_12px_40px_rgba(0,0,0,0.08)]"
                  initial={{
                    opacity: 0,
                    y: 24,
                    scale: 0.98,
                    rotate: colIndex === 1 ? 0.2 : -0.2,
                  }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -6, rotate: 0.2 }}
                >
                  <motion.div
                    className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${feature.accent} to-transparent opacity-60`}
                    aria-hidden
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.05 * idx }}
                  />
                  <div className="relative p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <h3 className="text-lg font-bold tracking-tight text-neutral-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 font-medium leading-relaxed">
                      {feature.description}
                    </p>

                    {/* subtle footer line */}
                    <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                        Highlight
                      </span>
                      <span className="font-medium">DeGambit</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 rounded-2xl border border-black/10 bg-neutral-50 p-4 sm:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
            {[
              "/images/chess8.jpeg",
              "/images/chess1.jpg",
              "/images/chess2.jpg",
              "/images/chess7.jpeg",
            ].map((src, i) => (
              <motion.div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={src}
                  alt="event visual"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
