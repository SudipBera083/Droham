import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero3D from "@/components/Hero3D";
import FeatureSection from "@/sections/FeatureSection";
import PricingSection from "@/sections/PricingSection";
import SectionWrapper from "@/layouts/SectionWrapper";

import TrustSection from "@/sections/TrustSection";
import CTASection from "@/sections/CTASection";

function App() {
  return (
    <MainLayout>
      <Hero3D />
      <TrustSection />
      <FeatureSection />
      <PricingSection />
      <CTASection />
    </MainLayout>
  );
}

export default App;
