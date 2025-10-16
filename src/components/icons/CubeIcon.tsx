import React from "react";

export const CubeIcon = ({ className = "w-7 h-7 text-typography" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M3 7.5v9l9 4.5v-9L3 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M21 7.5v9l-9 4.5v-9l9-4.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
