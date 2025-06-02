import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 px-4 md:px-8 bg-[#1E1E1E] text-white"
      id="contact"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("contactDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2A2A2A] p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("nameLabel")}
                </label>
                <Input
                  id="name"
                  className="bg-[#333] border-0 focus:ring-[#F44336] text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("emailLabel")}
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#333] border-0 focus:ring-[#F44336] text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  className="bg-[#333] border-0 focus:ring-[#F44336] text-white min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full bg-[#F44336] hover:bg-[#D32F2F] text-white border-0">
                {t("sendButton")}
              </Button>
            </form>
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            {/* Map */}
            <div className="h-[300px] rounded-xl overflow-hidden bg-[#2A2A2A]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72691566302!2d-7.6981573!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2a45573a4c1%3A0x7a9aba3e6e2e1e41!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MyGymPro Location"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-[#2A2A2A] p-6 rounded-xl space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#333] rounded-full">
                  <MapPin className="h-6 w-6 text-[#F44336]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("addressTitle")}</h3>
                  <p className="text-gray-300">{t("address")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#333] rounded-full">
                  <Phone className="h-6 w-6 text-[#F44336]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("phoneTitle")}</h3>
                  <p className="text-gray-300">{t("phone")}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#333] rounded-full">
                  <Mail className="h-6 w-6 text-[#F44336]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t("emailTitle")}</h3>
                  <p className="text-gray-300">{t("email")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
