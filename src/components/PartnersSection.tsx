"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Afrisplash Remotely",
    logoSrc: "/images/afrisplash.png",
    width: 200,
    height: 60,
  },
  {
    name: "HP MAP",
    logoSrc: "/images/hpmap.png",
    width: 150,
    height: 60,
  },
  {
    name: "#STARTUPSOUTH",
    logoSrc: "/images/startupsouth.png",
    width: 250,
    height: 40,
  },
  {
    name: "Camsole",
    logoSrc: "/images/camsole.png",
    width: 180,
    height: 45,
  },
  {
    name: "Sominka Enterprise",
    logoSrc: "/images/sominka.png",
    width: 100,
    height: 100,
  },
  {
    name: "FarmCAS",
    logoSrc: "/images/farmcas.png",
    width: 200,
    height: 60,
  },
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl text-center text-c font-bold text-typography mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Partners
        </motion.h2>

        {/* Logo Grid Container */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 1 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className={`flex-shrink-0 ${
                partner.name === "HP MAP" ? "bg-transparent" : "bg-white"
              } `}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ scale: 1.06, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={partner.logoSrc}
                alt={`${partner.name} Logo`}
                width={partner.width}
                height={partner.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
