import { Hero } from "@/components/hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { CallToAction } from "@/components/CallToAction";
import { FadeIn } from "@/components/FadeIn"; // 1. Importe o componente

export default function Home() {
  return (
    <main>
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>
      
      <FadeIn>
        <Benefits />
      </FadeIn>

      <FadeIn>
        <CallToAction />
      </FadeIn>
    </main>
  );
}