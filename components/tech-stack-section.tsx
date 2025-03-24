"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function TechStackSection() {
  const { t } = useLanguage()

  const technologies = [
    {
      name: t("tech.react"),
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: t("tech.vite"),
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: t("tech.tailwind"),
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: t("tech.supabase"),
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: t("tech.shadcn"),
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      name: t("tech.query"),
      icon: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section id="tech" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("tech.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("tech.subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-10 w-10" />
              </div>
              <p className="text-center font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

