"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Wallet, LineChart, Layout, Smartphone, Calculator } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: BarChart3,
      title: t("features.realtime.title"),
      description: t("features.realtime.desc"),
    },
    {
      icon: Wallet,
      title: t("features.wallet.title"),
      description: t("features.wallet.desc"),
    },
    {
      icon: LineChart,
      title: t("features.analytics.title"),
      description: t("features.analytics.desc"),
    },
    {
      icon: Calculator,
      title: t("features.budget.title"),
      description: t("features.budget.desc"),
    },
    {
      icon: Layout,
      title: t("features.ui.title"),
      description: t("features.ui.desc"),
    },
    {
      icon: Smartphone,
      title: t("features.responsive.title"),
      description: t("features.responsive.desc"),
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

