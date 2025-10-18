"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { CheckCircle, Clock, Circle } from "lucide-react"
import { Card, CardContent } from "../card"
import { Badge } from "../badge"

export interface SyllabusItem {
  module: string
  topics: string[]
  duration?: string
  level?: "Beginner" | "Intermediate" | "Advanced"
  status?: "completed" | "current" | "upcoming"
  image?: string
}

export interface SyllabusProps {
  items: SyllabusItem[]
  className?: string
}

const getStatusConfig = (status: SyllabusItem["status"]) => {
  const configs = {
    completed: {
      progressColor: "bg-success",
      borderColor: "border-success/20",
      badgeBg: "bg-success/10",
      badgeText: "text-success"
    },
    current: {
      progressColor: "bg-blue-600 dark:bg-blue-400",
      borderColor: "border-blue-600/20 dark:border-blue-400/20",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-800 dark:text-blue-200"
    },
    upcoming: {
      progressColor: "bg-warning",
      borderColor: "border-warning/20",
      badgeBg: "bg-warning/10",
      badgeText: "text-warning"
    }
  }
  return configs[status || "upcoming"]
}

const getStatusIcon = (status: SyllabusItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Syllabus({ items, className }: SyllabusProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
        <p className="text-center text-muted-foreground">No syllabus items to display</p>
      </div>
    )
  }

  return (
    <section className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
      <div className="space-y-8 sm:space-y-12 relative">
        {items.map((item, index) => {
          const config = getStatusConfig(item.status)
          const IconComponent = getStatusIcon(item.status)

          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              role="listitem"
              aria-label={`Syllabus module ${index + 1}: ${item.module}`}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0">
                  <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-background shadow-lg relative z-10">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={`${item.module} image`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/70" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                <motion.div className="flex-1 min-w-0" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Card className={cn("border transition-all duration-300 hover:shadow-md relative", "bg-card/50 backdrop-blur-sm", config.borderColor)}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <motion.h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                            {item.module}
                          </motion.h3>

                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            {item.duration && <span>{item.duration}</span>}
                            {item.level && (
                              <>
                                {item.duration && <span className="w-1 h-1 bg-muted-foreground rounded-full" />}
                                <span>{item.level}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <Badge className={cn("w-fit text-xs font-medium border", config.badgeBg, config.badgeText, "border-current/20")}>
                          {item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1) : "Upcoming"}
                        </Badge>
                      </div>

                      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-muted-foreground">
                        {item.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>

                      <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={item.status === "completed" ? 100 : item.status === "current" ? 65 : 25}>
                        <motion.div
                          className={cn("h-full rounded-full", config.progressColor)}
                          initial={{ width: 0 }}
                          animate={{ width: item.status === "completed" ? "100%" : item.status === "current" ? "65%" : "25%" }}
                          transition={{ duration: 1.2, delay: index * 0.2 + 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
