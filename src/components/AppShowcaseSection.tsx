import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage, LanguageProvider, translations } from "./LanguageContext";

interface AppShowcaseSectionProps {
  title?: string;
  description?: string;
  screens?: {
    id: string;
    title: string;
    image: string;
    description: string;
  }[];
  standalone?: boolean;
}

// Wrapper component for standalone usage (in storyboards)
export const AppShowcaseSectionWrapper = (props: AppShowcaseSectionProps) => {
  return (
    <LanguageProvider>
      <AppShowcaseSection {...props} />
    </LanguageProvider>
  );
};

const AppShowcaseSection = (props: AppShowcaseSectionProps) => {
  const { standalone = false } = props;
  const { t } = useLanguage();

  const title = t("appTitle");
  const description = t("appDescription");
  const screens = [
    {
      id: "qr-scan",
      title: t("screen1Title"),
      image:
        "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&q=80",
      description: t("screen1Description"),
    },
    {
      id: "statistics",
      title: t("screen2Title"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: t("screen2Description"),
    },
    {
      id: "history",
      title: t("screen3Title"),
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      description: t("screen3Description"),
    },
  ];
  return (
    <section className="py-16 px-4 md:px-8 bg-[#1E1E1E] text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <Tabs defaultValue={screens[0].id} className="w-full">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex flex-col"
            >
              <TabsList className="flex flex-row md:flex-col w-full bg-[#2A2A2A] rounded-lg p-2">
                {screens.map((screen) => (
                  <TabsTrigger
                    key={screen.id}
                    value={screen.id}
                    className="w-full text-left py-4 px-4 data-[state=active]:bg-[#F44336] data-[state=active]:text-white"
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-lg">
                        {screen.title}
                      </span>
                      <span className="text-sm text-gray-400 mt-1 hidden md:block">
                        {screen.description}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              {screens.map((screen) => (
                <TabsContent key={screen.id} value={screen.id} className="mt-0">
                  <Card className="border-0 overflow-hidden bg-transparent shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="bg-[#2A2A2A] rounded-2xl p-2 md:p-4 shadow-lg">
                          <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-xl">
                            <div className="relative w-full max-w-sm mx-auto">
                              {/* Phone frame */}
                              <div className="relative z-10 border-[8px] border-[#333] rounded-[36px] overflow-hidden shadow-2xl">
                                {/* Status bar */}
                                <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex items-center justify-between px-6">
                                  <div className="w-16 h-2 bg-[#444] rounded-full"></div>
                                  <div className="w-4 h-2 bg-[#444] rounded-full"></div>
                                </div>
                                {/* Screen content */}
                                <img
                                  src={screen.image}
                                  alt={screen.title}
                                  className="w-full aspect-[9/16] object-cover"
                                />
                                {/* Home button/indicator */}
                                <div className="absolute bottom-2 inset-x-0 flex justify-center">
                                  <div className="w-32 h-1 bg-[#444] rounded-full"></div>
                                </div>
                              </div>
                              {/* Reflection effect */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[36px] pointer-events-none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
