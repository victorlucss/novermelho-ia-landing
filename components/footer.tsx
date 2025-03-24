"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/30 py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:w-1/3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">NV</span>
              </div>
              <span className="font-bold text-xl">NoVermelho</span>
            </div>
            <p className="text-muted-foreground">{t("hero.subtitle")}</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium">{t("footer.product")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.features")}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.pricing")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">{t("footer.company")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.blog")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">{t("footer.legal")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://appnovermelho.vercel.app/dashboard" target="_blank" rel="noopener noreferrer">
                {t("dashboard.access")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

