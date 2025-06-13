import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useLanguage, LanguageProvider } from "./LanguageContext";

interface HeroSectionProps {
  onCtaClick?: () => void;
  standalone?: boolean;
}

// Wrapper component for standalone usage (in storyboards)
export const HeroSectionWrapper = (props: HeroSectionProps) => {
  return (
    <LanguageProvider>
      <HeroSection {...props} />
    </LanguageProvider>
  );
};

const HeroSection = ({
  onCtaClick = () => console.log("CTA clicked"),
  standalone = false,
}: HeroSectionProps) => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[700px] bg-[#1E1E1E] flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F44336]/10 via-transparent to-transparent" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left content - Text and CTA */}
        <motion.div
          className="flex flex-col items-start space-y-6 lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {t("title")}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            {t("slogan")}
            <br />
            <span className="block mt-2">
              {t("detailedDescription")}
            </span>
          </p>
    
          <p className="text-md text-gray-400">{t("founders")}</p>

          <Button
            onClick={onCtaClick}
            className="bg-[#F44336] hover:bg-[#D32F2F] text-white px-8 py-6 text-lg rounded-xl"
          >
            {t("ctaText")}
          </Button>
        </motion.div>

        {/* Right content - App mockup */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-[#2A2A2A] rounded-[40px] p-3 shadow-2xl border-4 border-[#333333] relative">
              {/* Screen content */}
              <div className="w-full h-full bg-[#121212] rounded-[32px] overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="h-8 bg-black/30 flex items-center justify-between px-6">
                  <div className="text-xs text-white">9:41</div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                  </div>
                </div>

                {/* App content */}
                <div className="flex-1 flex flex-col items-center justify-center p-6" style={{ backgroundImage: "url('/test.jpg')", backgroundSize: 'cover' }}> 
                  {/* Logo */}
                  <div className="w-20 h-20 bg-[#F44336] rounded-full mb-8 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                    <img src="/myGymPro.png" alt="Logo MyGymPro" style={{ height: 60 , background: "red" }} />

                    </span>
                  </div>

                  <h2 className="text-white text-2xl font-bold mb-8">
                    MyGymPro
                  </h2>

                  {/* Login form */}
                  <div className="w-full space-y-4">
                    <div className="w-full h-12 bg-[#2A2A2A] rounded-lg"></div>
                    <div className="w-full h-12 bg-[#2A2A2A] rounded-lg"></div>
                    <div className="w-full h-12 bg-[#F44336] rounded-lg mt-6"></div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#2A2A2A] rounded-b-xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 w-64 h-64 bg-[#F44336]/20 rounded-full blur-3xl -bottom-10 -right-10"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#F44336]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#F44336]/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
