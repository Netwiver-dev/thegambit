import Benefits from "@/components/Benefits";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import JoinExperience from "@/components/JoinExperience";
import Preloader from "@/components/Preloader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeGambit - Strategy, Innovation & Collaboration",
  description:
    "Join DeGambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions for chess players, tech enthusiasts, and entrepreneurs.",
  openGraph: {
    title: "DeGambit - Strategy, Innovation & Collaboration",
    description:
      "Join DeGambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions for chess players, tech enthusiasts, and entrepreneurs.",
    url: "https://de-gambit.vercel.app",
    images: [
      {
        url: "/images/chess4.webp",
        width: 1200,
        height: 630,
        alt: "DeGambit - Strategy, Innovation & Collaboration",
      },
    ],
  },
  twitter: {
    title: "DeGambit - Strategy, Innovation & Collaboration",
    description:
      "Join DeGambit - Strategy, Innovation & Collaboration. Participate in tournaments, networking events, and innovation sessions.",
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
