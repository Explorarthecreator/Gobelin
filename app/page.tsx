import About from "@/components/sections/about";
import UpcomingEvent from "@/components/sections/event";
import Hero from "@/components/sections/header";
import Metrics from "@/components/sections/metrics";
import News from "@/components/sections/news";
import Programmes from "@/components/sections/programmes";
import StartJourney from "@/components/sections/start-journey";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Metrics />
      <Programmes />
      <News />
      <UpcomingEvent />
      <StartJourney />
    </main>
  );
}
