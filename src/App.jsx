import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import FeatureSection from "@/sections/FeatureSection";
import PricingSection from "@/sections/PricingSection";
import HeroSection from "@/sections/HeroSection";
import TrustSection from "@/sections/TrustSection";
import CTASection from "@/sections/CTASection";
import About from "@/sections/About";
import ContactSection from "./sections/ContactSection";
import ProblemSection from "@/sections/ProblemSection";
import AnalyticsPreviewSection from "@/sections/AnalyticsPreviewSection";
import WhyDrohamSection from "@/sections/WhyDrohamSection";
import UseCaseSection from "@/sections/UseCaseSection";

function Home() {
  return (
      <>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <FeatureSection />
      <UseCaseSection />
      <AnalyticsPreviewSection />
      <WhyDrohamSection />
      <CTASection />
      {/* <ContactSection /> */}
    </>
  );
}

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<PricingSection />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
