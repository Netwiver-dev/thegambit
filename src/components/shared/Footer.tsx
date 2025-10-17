"use client";

import Link from "next/link";
import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import XIcon from "../icons/XIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-typography">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-luckiest text-3xl tracking-wide font-bold"
            >
              De Gambit
            </Link>
            <p className="leading-[30px]">
              The December Chess Tournament is a first of its kind,
              community-centered event powered by Reapvest in collaboration with
              Netwiver. It brings together innovators, entrepreneurs,
              professionals, students, and community members in a friendly but
              impactful competition that fosters collaboration, innovation, and
              growth.
            </p>
          </div>

          {/* Event column */}
          <div>
            <h4 className="text-typography text-lg font-semibold mb-6">
              Event
            </h4>
            <ul className="space-y-5">
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100">
                  Chess tournament
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100">
                  Pitch session
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100">
                  Venue
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-typography text-lg font-semibold mb-6">
              Subscribe
            </h4>
            <p className="opacity-90 mb-5">
              Stay updated with our latest news and event information
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent border border-white/20 focus:border-white/40 outline-none rounded-md px-4 py-3 placeholder-white/60"
              />
              <button
                type="submit"
                className="bg-button hover:bg-button-dark transition-colors duration-300 text-typography px-5 py-3 rounded-md font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm opacity-80 mt-4">
              By subscribing, you agree to our privacy policy
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6"></div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="opacity-80">© {year} DeGambit. All rights reserved</p>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="#" className="hover:opacity-100 opacity-90">
              Privacy policy
            </Link>
            <Link href="#" className="hover:opacity-100 opacity-90">
              Terms of service
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <Link
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-500"
            >
              <FacebookIcon />
            </Link>
            <Link
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-500"
            >
              <InstagramIcon />
            </Link>
            <Link
              aria-label="X"
              href="https://x.com"
              target="_blank"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-500"
            >
              <XIcon />
            </Link>
            <Link
              aria-label="LinkedIn"
              href="https://linkedin.com"
              target="_blank"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-500"
            >
              <LinkedInIcon />
            </Link>
            <Link
              aria-label="YouTube"
              href="https://youtube.com"
              target="_blank"
              className="opacity-90 hover:opacity-100 transition-transform hover:scale-125 duration-500"
            >
              <YoutubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
