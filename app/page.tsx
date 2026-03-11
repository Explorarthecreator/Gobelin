import About from "@/components/sections/about";
import Metrics from "@/components/sections/metrics";
import News from "@/components/sections/news";
import Programmes from "@/components/sections/programmes";
import StartJourney from "@/components/sections/start-journey";

export default function Home() {
  return (
    <main className="">
      <About />
      <Metrics />
      <Programmes />
      <News />
      <StartJourney />
    </main>
  );
}
