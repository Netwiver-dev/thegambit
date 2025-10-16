import Benefits from "@/components/Benefits";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import JoinExperience from "@/components/JoinExperience";
import Preloader from "@/components/Preloader";

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
