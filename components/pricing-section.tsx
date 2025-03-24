"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("pricing.subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-primary/20 rounded-bl-full z-0"></div>
            <CardHeader className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{t("pricing.plan.title")}</CardTitle>
                  <CardDescription>{t("pricing.plan.description")}</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                  {t("pricing.popular")}
                </Badge>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">{t("pricing.price.zero")}</span>
                <span className="ml-1 text-xl font-semibold text-muted-foreground">{t("pricing.price.forever")}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary" className="text-xs font-normal">
                  FREE
                </Badge>
                <Badge variant="secondary" className="text-xs font-normal">
                  GRÁTIS
                </Badge>
                <Badge variant="secondary" className="text-xs font-normal">
                  GRATUIT
                </Badge>
                <Badge variant="secondary" className="text-xs font-normal">
                  KOSTENLOS
                </Badge>
                <Badge variant="secondary" className="text-xs font-normal">
                  GRATIS
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3">
                {[
                  t("pricing.features.one"),
                  t("pricing.features.two"),
                  t("pricing.features.three"),
                  t("pricing.features.four"),
                  t("pricing.features.five"),
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative z-10 flex flex-col">
              <div className="text-center w-full py-3 px-4 rounded-md bg-primary/10 text-primary font-medium flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                {t("pricing.joke")}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">{t("pricing.disclaimer")}</p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

