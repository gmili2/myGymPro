import React from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "./ui/button";
import Header from "./Header";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4">
      <Header />
      <div className="flex space-x-2">
        <Button
          variant={language === "fr" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("fr")}
          className={`${language === "fr" ? "bg-[#F44336] hover:bg-[#D32F2F]" : "bg-transparent text-white hover:bg-[#333]"}`}
        >
          FR
        </Button>
        <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`${language === "en" ? "bg-[#F44336] hover:bg-[#D32F2F]" : "bg-transparent text-white hover:bg-[#333]"}`}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
