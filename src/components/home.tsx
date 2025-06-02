import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import AppShowcaseSection from "./AppShowcaseSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "./ContactSection";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageProvider } from "./LanguageContext";

function Home() {
  return (
    <LanguageProvider>
      <div className="bg-[#1E1E1E] w-screen">
        <LanguageSwitcher />
        <HeroSection />
        <FeaturesSection />
        <AppShowcaseSection />
        <PricingSection />
        <ClientsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}

export default Home;
