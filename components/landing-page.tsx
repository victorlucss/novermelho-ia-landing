"use client"

import { useState } from "react"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const [language, setLanguage] = useState<"en" | "pt">("pt")

  return (
    <ThemeProvider>
      <LanguageProvider language={language} setLanguage={setLanguage}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

