import React, { createContext, useContext, useState } from "react";

type Language = "fr" | "en";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  fr: {
    // Hero Section
    title: "MyGymPro",
    slogan: "Gérez votre salle de sport, nous gérons vos membres.",
    ctaText: "Essayer gratuitement",
    founders: "Fondateur: Anouar Gmili",

    // Features Section
    featuresTitle: "Fonctionnalités principales",
    featuresDescription:
      "Découvrez comment MyGymPro transforme la gestion de votre salle de sport avec des outils puissants et intuitifs.",
    feature1Title: "Gestion d'abonnements",
    feature1Description:
      "Gérez facilement les abonnements mensuels et annuels de vos membres avec un système intuitif.",
    feature2Title: "Pointage QR Code",
    feature2Description:
      "Système de pointage moderne par QR Code unique pour chaque membre, facilitant l'entrée et la sortie.",
    feature3Title: "Statistiques dynamiques",
    feature3Description:
      "Visualisez les données de fréquentation et d'activité de votre salle avec des graphiques interactifs.",
    feature4Title: "Gestion multi-salles",
    feature4Description:
      "Administrez plusieurs établissements depuis une interface centralisée pour une gestion optimale.",

    // Pricing Section
    pricingTitle: "Tarification simple et transparente",
    pricingDescription:
      "Choisissez le plan qui correspond à vos besoins. Tous les plans incluent un essai gratuit de 30 jours.",
    monthlyTitle: "Mensuel",
    monthlyPrice: "99 DH",
    monthlyPeriod: "/mois",
    monthlyDescription: "Idéal pour tester notre solution",
    yearlyTitle: "Annuel",
    yearlyPrice: "999 DH",
    yearlyPeriod: "/an",
    yearlyDescription: "La meilleure option pour votre salle",
    recommended: "Recommandé",
    savings: "Économisez 189 DH",
    tryFree: "Essayer gratuitement",
    trialInfo:
      "Tous les plans incluent un essai gratuit de 30 jours. Aucune carte de crédit requise.",

    // App Showcase Section
    appTitle: "Découvrez l'application MyGymPro",
    appDescription:
      "Une interface intuitive et puissante pour gérer votre salle de sport efficacement",
    screen1Title: "Scan QR Code",
    screen1Description: "Système de pointage simple et rapide pour vos membres",
    screen2Title: "Statistiques",
    screen2Description:
      "Suivez les performances et la fréquentation de votre salle",
    screen3Title: "Historique",
    screen3Description: "Consultez l'historique complet des entrées et sorties",

    // Clients Section
    clientsTitle: "Nos clients",
    clientsDescription:
      "Ils nous font confiance pour gérer leurs salles de sport",
    client1: "Salle Ain Chegga",
    client2: "La Villiete Gym",

    // Contact Section
    contactTitle: "Contactez-nous",
    contactDescription:
      "Vous avez des questions ? Notre équipe est là pour vous aider",
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Envoyer",
    addressTitle: "Notre adresse",
    address: "Casablanca, Maroc",
    phoneTitle: "Téléphone",
    phone: "+212 682 96 24 62",
    emailTitle: "Email",
    email: "contact@mygympro.ma",
  },
  en: {
    // Hero Section
    title: "MyGymPro",
    slogan: "Manage your gym, we manage your members.",
    ctaText: "Try for free",
    founders: "Founders: Anouar Gmili",

    // Features Section
    featuresTitle: "Key Features",
    featuresDescription:
      "Discover how MyGymPro transforms your gym management with powerful and intuitive tools.",
    feature1Title: "Subscription Management",
    feature1Description:
      "Easily manage monthly and annual subscriptions for your members with an intuitive system.",
    feature2Title: "QR Code Check-in",
    feature2Description:
      "Modern check-in system with unique QR codes for each member, facilitating entry and exit.",
    feature3Title: "Dynamic Statistics",
    feature3Description:
      "Visualize attendance and activity data for your gym with interactive charts.",
    feature4Title: "Multi-gym Management",
    feature4Description:
      "Manage multiple establishments from a centralized interface for optimal management.",

    // Pricing Section
    pricingTitle: "Simple and transparent pricing",
    pricingDescription:
      "Choose the plan that suits your needs. All plans include a 30-day free trial.",
    monthlyTitle: "Monthly",
    monthlyPrice: "99 DH",
    monthlyPeriod: "/month",
    monthlyDescription: "Ideal for testing our solution",
    yearlyTitle: "Annual",
    yearlyPrice: "999 DH",
    yearlyPeriod: "/year",
    yearlyDescription: "The best option for your gym",
    recommended: "Recommended",
    savings: "Save 189 DH",
    tryFree: "Try for free",
    trialInfo:
      "All plans include a 30-day free trial. No credit card required.",

    // App Showcase Section
    appTitle: "Discover the MyGymPro app",
    appDescription:
      "An intuitive and powerful interface to efficiently manage your gym",
    screen1Title: "QR Code Scan",
    screen1Description: "Simple and fast check-in system for your members",
    screen2Title: "Statistics",
    screen2Description: "Track the performance and attendance of your gym",
    screen3Title: "History",
    screen3Description: "View the complete history of entries and exits",

    // Clients Section
    clientsTitle: "Our clients",
    clientsDescription: "They trust us to manage their gyms",
    client1: "Salle Ain Chegga",
    client2: "La Villiete Gym",

    // Contact Section
    contactTitle: "Contact us",
    contactDescription: "Have questions? Our team is here to help",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send",
    addressTitle: "Our address",
    address: "Casablanca, Morocco",
    phoneTitle: "Phone",
    phone: "+212 682 96 24 62",
    emailTitle: "Email",
    email: "contact@mygympro.ma",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
