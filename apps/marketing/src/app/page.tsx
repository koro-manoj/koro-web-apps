import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { MetricsSection } from "@/components/metrics-section";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <MetricsSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}
