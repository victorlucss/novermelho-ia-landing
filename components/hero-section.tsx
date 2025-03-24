"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">No</span>
              <span className="text-destructive">Vermelho</span>
              <br />
              {t("hero.title")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">{t("hero.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="https://appnovermelho.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">{t("hero.secondary")}</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background/50 backdrop-blur shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-destructive/10" />
            <div className="p-1">
              <div className="rounded-lg border bg-background p-2">
                <div className="flex items-center gap-2 border-b pb-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-2 text-sm font-medium">NoVermelho Dashboard</div>
                </div>
                <div className="grid grid-cols-12 gap-4 p-4">
                  <div className="col-span-12 md:col-span-8 rounded-md bg-muted p-4 h-64 flex items-center justify-center">
                    <BarChart3 className="h-24 w-24 text-muted-foreground/40" />
                  </div>
                  <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="rounded-md bg-muted p-4 h-28" />
                    <div className="rounded-md bg-muted p-4 h-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-destructive/30 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

