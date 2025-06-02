import React from "react";
import { motion } from "framer-motion";
import { CalendarRange, QrCode, BarChart3, Building2 } from "lucide-react";
import { useLanguage, LanguageProvider } from "./LanguageContext";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = (
  { icon, title, description }: FeatureProps = {
    icon: <CalendarRange className="h-10 w-10 text-[#F44336]" />,
    title: "Gestion d'abonnements",
    description:
      "Gérez facilement les abonnements mensuels et annuels de vos membres.",
  },
) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 rounded-xl bg-[#2A2A2A] text-white hover:bg-[#333333] transition-colors"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 rounded-full bg-[#1E1E1E] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-300">{description}</p>
    </motion.div>
  );
};

// Wrapper component for standalone usage (in storyboards)
export const FeaturesSectionWrapper = () => {
  return (
    <LanguageProvider>
      <FeaturesSection />
    </LanguageProvider>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CalendarRange className="h-10 w-10 text-[#F44336]" />,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: <QrCode className="h-10 w-10 text-[#F44336]" />,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#F44336]" />,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
    {
      icon: <Building2 className="h-10 w-10 text-[#F44336]" />,
      title: t("feature4Title"),
      description: t("feature4Description"),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#1E1E1E]" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("featuresTitle")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("featuresDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
