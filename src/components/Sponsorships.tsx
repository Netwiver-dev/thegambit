"use client";

import { motion } from "framer-motion";
import React from "react";

type Perk = string;

type Tier = {
  name: "Platinum Sponsor" | "Gold Sponsor" | "Silver Sponsor";
  price: string;
  highlight?: boolean;
  description?: string;
  perks: Perk[];
  cta?: { label: string; href: string };
};

const tiers: Tier[] = [
  {
    name: "Platinum Sponsor",
    price: "₦500,000+",
    highlight: true,
    description:
      "Own the spotlight with exclusive naming rights, prime visibility, and unmatched access.",
    perks: [
      "Exclusive naming rights: “De Gambit presented by [Sponsor Name]”",
      "Logo on all marketing materials",
      "Speaking opportunity during opening ceremony",
      "Premium booth space at event",
      "Prominent logo on main stage & banners",
      "30 VIP passes + backstage access",
      "Dedicated press release & interviews",
      "Social media takeover day",
      "Co-branded merchandise option",
      "First right of refusal for next year’s title sponsorship",
    ],
    cta: {
      label: "Become Platinum",
      href: "mailto:degambit@reapvest.com?subject=Platinum%20Sponsorship",
    },
  },
  {
    name: "Gold Sponsor",
    price: "₦300,000",
    description:
      "A strong brand presence across stage, media, and experiences.",
    perks: [
      "Logo on stage backdrop or co-naming rights for a venue section",
      "Inclusion in ads",
      "Display banners and video ads",
      "20 VIP tickets + reserved seating",
      "Branded experience booth",
      "Shoutouts during stage performances",
      "Inclusion in email marketing",
      "Social media spotlight post",
    ],
    cta: {
      label: "Become Gold",
      href: "mailto:degambit@reapvest.com?subject=Gold%20Sponsorship",
    },
  },
  {
    name: "Silver Sponsor",
    price: "₦150,000",
    description:
      "Targeted visibility within program areas and social channels.",
    perks: [
      "Naming rights for a program area (e.g., Kids Zone, Food Court)",
      "Logo on signage in sponsored area",
      "10 VIP passes",
      "Branded giveaways or sampling opportunities",
      "Logo on website and event materials",
      "Mid-tier social media mentions",
      "Recognition during program announcements",
    ],
    cta: {
      label: "Become Silver",
      href: "mailto:degambit@reapvest.com?subject=Silver%20Sponsorship",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const Sponsorships = () => {
  return (
    <section
      id="sponsorships"
      className="text-typography border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <p className="text-center text-typography/70 text-sm">Sponsorship</p>
        <h2 className="mt-3 text-center text-3xl sm:text-4xl font-semibold">
          Sponsorship Packages
        </h2>
        <p className="mt-3 text-center text-typography/80 max-w-2xl mx-auto">
          Partner with DeGambit to connect with innovators, founders, and an
          engaged community. Choose a tier that fits your goals.
        </p>

        {/* Pricing grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.98 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className={[
                "relative rounded-md p-6 lg:p-8 ring-1 ring-white/10 bg-white/5",
                t.highlight
                  ? "bg-gradient-to-b from-white/10 to-white/[0.04] ring-white/20"
                  : "",
              ].join(" ")}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-4">
                  <span className="inline-flex items-center rounded-full bg-button text-typography text-xs px-3 py-1 ring-1 ring-white/10">
                    Best Value
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-typography/90 font-semibold">{t.price}</p>
              </div>
              {t.description && (
                <p className="mt-3 text-typography/80 text-sm">
                  {t.description}
                </p>
              )}

              <ul className="mt-5 space-y-3">
                {t.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400/90 ring-2 ring-emerald-400/30"></span>
                    <span className="text-sm leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>

              {t.cta && (
                <a
                  href={t.cta.href}
                  className={[
                    "mt-6 inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium transition-colors duration-300",
                    t.highlight
                      ? "bg-button hover:bg-button-dark text-typography"
                      : "bg-white/10 hover:bg-button-dark text-typography",
                  ].join(" ")}
                >
                  {t.cta.label}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorships;
