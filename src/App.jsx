import React from "react";
import MainLayout from "@/layouts/MainLayout";
import FeatureSection from "@/sections/FeatureSection";
import PricingSection from "@/sections/PricingSection";
import HeroSection from "@/sections/HeroSection";

import TrustSection from "@/sections/TrustSection";
import CTASection from "@/sections/CTASection";

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <TrustSection />
      <FeatureSection />
      <PricingSection />
      <CTASection />
    </MainLayout>
  );
}

export default App;
