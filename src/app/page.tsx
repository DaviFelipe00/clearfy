import { Hero } from "@/components/hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Benefits />
      <CallToAction />
    </main>
  );
}