import React from "react";
import { useLanguage } from "./LanguageContext";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}

const PricingSection = () => {
  const { t } = useLanguage();

  const pricingPlans: PricingPlan[] = [
    {
      title: t("monthlyTitle"),
      price: t("monthlyPrice"),
      period: t("monthlyPeriod"),
      description: t("monthlyDescription"),
      features: [
        "Gestion d'abonnements",
        "Pointage par QR Code",
        "Statistiques basiques",
        "Support par email",
      ],
    },
    {
      title: t("yearlyTitle"),
      price: t("yearlyPrice"),
      period: t("yearlyPeriod"),
      description: t("yearlyDescription"),
      features: [
        "Gestion d'abonnements avancée",
        "Pointage par QR Code",
        "Statistiques détaillées",
        "Support prioritaire",
        "Gestion multi-salles",
      ],
      popular: true,
      savings: t("savings"),
    },
  ];

  return (
    <section className="w-full py-16 bg-[#1E1E1E]" id="pricing">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            {t("pricingTitle")}
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl">
            {t("pricingDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full border-0 ${plan.popular ? "bg-[#2A2A2A]" : "bg-[#242424]"} text-white shadow-lg`}
            >
              <CardHeader className="pb-8">
                {plan.popular && (
                  <Badge className="w-fit mb-2 bg-[#F44336] hover:bg-[#D32F2F] text-white">
                    {t("recommended")}
                  </Badge>
                )}
                <CardTitle className="text-2xl font-bold">
                  {plan.title}
                </CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-gray-300">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-300 mt-2">
                  {plan.description}
                </CardDescription>
                {plan.savings && (
                  <p className="mt-2 text-[#F44336] font-medium">
                    {plan.savings}
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-[#F44336] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#F44336] hover:bg-[#D32F2F] text-white border-0">
                  {t("tryFree")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-300">{t("trialInfo")}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
