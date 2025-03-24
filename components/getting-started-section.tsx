"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Settings, Upload, Github, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function GettingStartedSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Download,
      title: t("start.install.title"),
      description: t("start.install.desc"),
      code: t("start.install.code"),
    },
    {
      icon: Settings,
      title: t("start.config.title"),
      description: t("start.config.desc"),
      code: "import { NoVermelho } from 'novermelho'\n\nconst config = {\n  theme: 'dark',\n  api: process.env.API_URL,\n}",
    },
    {
      icon: Upload,
      title: t("start.deploy.title"),
      description: t("start.deploy.desc"),
      code: "# Deploy to Vercel\nvercel --prod",
    },
  ]

  return (
    <section id="start" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("start.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("start.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="install" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="install">{steps[0].title}</TabsTrigger>
                <TabsTrigger value="config">{steps[1].title}</TabsTrigger>
                <TabsTrigger value="deploy">{steps[2].title}</TabsTrigger>
              </TabsList>

              {steps.map((step, index) => (
                <TabsContent key={index} value={["install", "config", "deploy"][index]}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{step.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{t("start.title")}</CardTitle>
                <CardDescription>{t("start.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://github.com/novermelho/dashboard" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    {t("start.github")}
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://docs.novermelho.com" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    {t("start.docs")}
                  </a>
                </Button>
                <Button variant="default" className="w-full justify-start gap-2 mt-2" asChild>
                  <a href="https://app.novermelho.com/dashboard" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-4 w-4" />
                    Acessar Dashboard
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-destructive/20 animate-gradient" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">NoVermelho</h3>
                  <p className="text-muted-foreground">{t("hero.subtitle")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

