"use client"

import { createContext, useContext, type ReactNode } from "react"

type Language = "en" | "pt"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.terms": "Terms",
    "nav.privacy": "Privacy",
    "nav.language": "Language",

    // Hero
    "hero.title": "Powerful Management Dashboard",
    "hero.subtitle": "A complete solution for visualizing and managing your data in real-time",
    "hero.cta": "Get Started",
    "hero.secondary": "Learn More",

    // Features
    "features.title": "Key Features",
    "features.subtitle": "Everything you need to manage your finances efficiently",
    "features.realtime.title": "Real-time Data",
    "features.realtime.desc": "Visualize your financial data as it happens with real-time updates",
    "features.wallet.title": "Wallet Management",
    "features.wallet.desc": "Easily manage multiple wallets and track your spending",
    "features.analytics.title": "Analytics Dashboard",
    "features.analytics.desc": "Comprehensive analytics to make data-driven financial decisions",
    "features.budget.title": "Budget Planning",
    "features.budget.desc": "Create and manage budgets to reach your financial goals",
    "features.ui.title": "Modern UI Components",
    "features.ui.desc": "Beautiful and intuitive interface components",
    "features.responsive.title": "Responsive Design",
    "features.responsive.desc": "Works perfectly on all devices and screen sizes",

    // Pricing
    "pricing.title": "Unbelievable Pricing",
    "pricing.subtitle": "We're serious. It's actually free. Forever.",
    "pricing.plan.title": "Premium Plan",
    "pricing.plan.description": "Everything you need, for the price of nothing",
    "pricing.popular": "MOST POPULAR",
    "pricing.price.zero": "$0",
    "pricing.price.forever": "forever",
    "pricing.features.one": "Unlimited dashboard access",
    "pricing.features.two": "All premium features included",
    "pricing.features.three": "No credit card required",
    "pricing.features.four": "No hidden fees or surprises",
    "pricing.features.five": "Free updates and support",
    "pricing.joke": "Yes, we're probably crazy",
    "pricing.disclaimer": "* We promise not to suddenly start charging you after you depend on us",

    // Footer
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.docs": "Documentation",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.legal": "Legal",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.copyright": "© 2024 NoVermelho. All rights reserved.",
    "footer.newsletter": "Subscribe to our newsletter",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.button": "Subscribe",

    // Dashboard
    "dashboard.access": "Access Dashboard",
  },
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.features": "Funcionalidades",
    "nav.pricing": "Preços",
    "nav.terms": "Termos",
    "nav.privacy": "Privacidade",
    "nav.language": "Idioma",

    // Hero
    "hero.title": "Dashboard de Gerenciamento Poderoso",
    "hero.subtitle": "Uma solução completa para visualizar e gerenciar seus dados em tempo real",
    "hero.cta": "Começar Agora",
    "hero.secondary": "Saiba Mais",

    // Features
    "features.title": "Principais Funcionalidades",
    "features.subtitle": "Tudo o que você precisa para gerenciar suas finanças com eficiência",
    "features.realtime.title": "Dados em Tempo Real",
    "features.realtime.desc": "Visualize seus dados financeiros em tempo real com atualizações instantâneas",
    "features.wallet.title": "Gerenciamento de Carteira",
    "features.wallet.desc": "Gerencie facilmente múltiplas carteiras e acompanhe seus gastos",
    "features.analytics.title": "Painel de Análise",
    "features.analytics.desc": "Análises abrangentes para decisões financeiras baseadas em dados",
    "features.budget.title": "Planejamento de Orçamento",
    "features.budget.desc": "Crie e gerencie orçamentos para atingir seus objetivos financeiros",
    "features.ui.title": "Componentes UI Modernos",
    "features.ui.desc": 'Componentes de interface bonitos  "Componentes UI Modernos',
    "features.ui.desc": "Componentes de interface bonitos e intuitivos",
    "features.responsive.title": "Design Responsivo",
    "features.responsive.desc": "Funciona perfeitamente em todos os dispositivos e tamanhos de tela",

    // Pricing
    "pricing.title": "Preço Inacreditável",
    "pricing.subtitle": "Estamos falando sério. É realmente gratuito. Para sempre.",
    "pricing.plan.title": "Plano Premium",
    "pricing.plan.description": "Tudo o que você precisa, pelo preço de nada",
    "pricing.popular": "MAIS POPULAR",
    "pricing.price.zero": "R$0",
    "pricing.price.forever": "para sempre",
    "pricing.features.one": "Acesso ilimitado ao dashboard",
    "pricing.features.two": "Todas as funcionalidades premium incluídas",
    "pricing.features.three": "Sem necessidade de cartão de crédito",
    "pricing.features.four": "Sem taxas ocultas ou surpresas",
    "pricing.features.five": "Atualizações e suporte gratuitos",
    "pricing.joke": "Sim, provavelmente somos loucos",
    "pricing.disclaimer": "* Prometemos não começar a cobrar repentinamente depois que você depender de nós",

    // Footer
    "footer.product": "Produto",
    "footer.features": "Funcionalidades",
    "footer.pricing": "Preços",
    "footer.docs": "Documentação",
    "footer.company": "Empresa",
    "footer.about": "Sobre",
    "footer.blog": "Blog",
    "footer.careers": "Carreiras",
    "footer.legal": "Legal",
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "footer.copyright": "© 2024 NoVermelho. Todos os direitos reservados.",
    "footer.newsletter": "Assine nossa newsletter",
    "footer.newsletter.placeholder": "Digite seu email",
    "footer.newsletter.button": "Assinar",

    // Dashboard
    "dashboard.access": "Acessar Dashboard",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  language,
  setLanguage,
}: {
  children: ReactNode
  language: Language
  setLanguage: (language: Language) => void
}) {
  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

