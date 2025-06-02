import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const ClientsSection = () => {
  const { t } = useLanguage();

  const clients = [
    {
      name: t("client1"),
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=SAC&backgroundColor=f44336&textColor=ffffff",
    },
    {
      name: t("client2"),
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=LVG&backgroundColor=f44336&textColor=ffffff",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#242424] text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("clientsTitle")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("clientsDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-[#2A2A2A] text-white hover:bg-[#333333] transition-colors"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-24 mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold">{client.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
