import Hero from "@/components/Hero";
import TargetAudiences from "@/components/TargetAudiences";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import LoveItBuyIt from "@/components/LoveItBuyIt";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TargetAudiences />
      <HowItWorks />
      <PricingPlans />
      <LoveItBuyIt />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
