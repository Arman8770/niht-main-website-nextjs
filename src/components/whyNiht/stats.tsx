"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useInView, useSpring, useTransform, Variants } from "framer-motion"
import { Trophy, Package, CircleArrowUp, TrendingUp } from "lucide-react"

export default function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const stats = [
    { icon: <Trophy className="text-blue-600" />, value: 3.6, label: "Highest Package", suffix: "LPA" },
    { icon: <Package className="text-red-600" />, value: 2.4, label: "Average Package", suffix: "LPA" },
    { icon: <CircleArrowUp className="text-green-600" />, value: 93, label: "Placement Rate", suffix: "%" },
    { icon: <TrendingUp className="text-yellow-600" />, value: 54, label: "Average Salary Hike", suffix: "%" },
  ]

  return (
    <motion.div
      ref={statsRef}
      className="mt-24 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate={isStatsInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {stats.map((stat, i) => (
        <StatCounter
          key={i}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          delay={i * 0.1}
        />
      ))}
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })
  const displayValue = useTransform(springValue, (latest) => parseFloat(latest.toFixed(1)))

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  return (
    <motion.div
      className="p-6 bg-gradient-to-l from-white to-blue-50 shadow shadow-gray-300 rounded-xl flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 ">
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span className="text-blue-700/80">{suffix}</span>
      </motion.div>
      <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
