"use client";

import React from "react";
import GalleryIcon from "./icons/GalleryIcon";
import EyeIcon from "./icons/EyeIcon";
import ShapesIcon from "./icons/ShapesIcon";
import PuzzleIcon from "./icons/PuzzleIcon";
import UsersIcon from "./icons/UsersIcon";

const Benefits = () => {
  return (
    <section className="text-typography border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left image placeholder */}
        <div className="w-full aspect-[4/3] rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center">
          <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-md bg-white/10 flex items-center justify-center">
            <GalleryIcon />
          </div>
        </div>

        {/* Right features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          <div className="space-y-3">
            <PuzzleIcon />
            <h3 className="text-xl font-semibold">Why participate</h3>
            <p className="text-typography/80">
              Develop strategic thinking skills through competitive and
              collaborative experiences
            </p>
          </div>

          <div className="space-y-3">
            <UsersIcon />
            <h3 className="text-xl font-semibold">Community growth</h3>
            <p className="text-typography/80">
              Build meaningful connections across tech, creative, and
              entrepreneurial ecosystems
            </p>
          </div>

          <div className="space-y-3">
            <ShapesIcon />
            <h3 className="text-xl font-semibold">Networking opportunities</h3>
            <p className="text-typography/80">
              Meet potential mentors, investors, and collaborators in a dynamic
              environment
            </p>
          </div>

          <div className="space-y-3">
            <EyeIcon />
            <h3 className="text-xl font-semibold">Brand visibility</h3>
            <p className="text-typography/80">
              Gain exposure and recognition through our comprehensive event
              platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
