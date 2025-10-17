import Benefits from "@/components/Benefits";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import JoinExperience from "@/components/JoinExperience";
import Preloader from "@/components/Preloader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "De Gambit - Strategy, Innovation & Collaboration",
  description:
    "Join De Gambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions for chess players, tech enthusiasts, and entrepreneurs.",
  openGraph: {
    title: "De Gambit - Strategy, Innovation & Collaboration",
    description:
      "Join De Gambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions for chess players, tech enthusiasts, and entrepreneurs.",
    url: "https://degambit.com",
    images: [
      {
        url: "/images/chess4.webp",
        width: 1200,
        height: 630,
        alt: "De Gambit - Strategy, Innovation & Collaboration",
      },
    ],
  },
  twitter: {
    title: "De Gambit - Strategy, Innovation & Collaboration",
    description:
      "Join De Gambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions.",
    images: ["/images/chess4.webp"],
  },
};

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Benefits />
      <Events />
      <JoinExperience />
    </>
  );
}
