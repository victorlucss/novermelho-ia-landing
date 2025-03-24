"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "/terms", label: t("nav.terms") },
    { href: "/privacy", label: t("nav.privacy") },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">NV</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">NoVermelho</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t("nav.language")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("pt")} className={language === "pt" ? "bg-accent" : ""}>
                Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden sm:flex">
            <Button variant="default" size="sm" asChild>
              <a href="https://appnovermelho.vercel.app/" target="_blank" rel="noopener noreferrer">
                Dashboard
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="default" className="mt-4" asChild>
                  <a href="https://appnovermelho.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Dashboard
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

