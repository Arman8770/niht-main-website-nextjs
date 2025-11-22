"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Zap,
  TrendingUp,
  Trophy,
  Package,
  CircleArrowUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"
import HoverPreviewCard from "../ui/videoPlay/hover-paly"
import ScrollLevel from "./scrollLevel"



interface OurCourseProps {
  course: {
    title: string
    description: string
    videoUrl?: string
    stats?: { icon: React.ReactNode; value: number; label: string; suffix: string }[]
    services?: {
      icon: React.ReactNode
      title: string
      description: string
      position: "left" | "right"
    }[]
  }
}

export default function OurCourseUpdate({ course }: OurCourseProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  const stats = [
    { icon: <Trophy className="text-blue-600" />, value: 3.6, label: "Highest Package", suffix: "LPA" },
    { icon: <Package className="text-red-600" />, value: 2.4, label: "Average Package", suffix: "LPA" },
    { icon: <CircleArrowUp className="text-green-600" />, value: 93, label: "Placement Rate", suffix: "%" },
    { icon: <TrendingUp className="text-yellow-600" />, value: 54, label: "Average Salary Hike", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-12 min-h-screen px-4 text-[#202e44] overflow-hidden relative bg- flex flex-col justify-center"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#88734C]/5"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-[#A9BBC8]/5"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Heading Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] mb-12">
          <div className="mx-0 mb-4">
            <HoverPreviewCard
              src={
                "https://www.nihtdigitalmarketing.com/dummy/assets/videos/Every%20story%20is%20different.%20At%20NIHT,%20students%20come%20from%20diverse%20walks%20of%20life,%20each%20with%20their%20own.mp4"
              }
            />
          </div>

          <motion.div
            className="flex flex-col items-center lg:items-start mx-0 md:mx-8 mb-6"
            variants={itemVariants}
          >
            <motion.span
              className="text-blue-500 font-medium mb-2 flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-blue-500" />
              {course?.title}
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-light mb-4 text-center lg:text-left">
              Course Detail
            </h2>

            <motion.div
              className="w-24 h-1 bg-blue-500 self-center lg:self-start"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.p
              className="max-w-2xl text-[#202e44]/80 text-center mt-6 lg:text-left"
              variants={itemVariants}
            >
              We are a passionate team of designers and architects dedicated to
              creating beautiful, functional spaces that inspire and elevate everyday
              living. With attention to detail and commitment to excellence, we
              transform visions into reality.
            </motion.p>
          </motion.div>
        </div>

        {/* 
        ===========================================
        ✅ Mobile Only Accordion (Default OPEN)
        ===========================================
        */}
        {/* <div className="block lg:hidden mb-10">
          <details open className="bg-white shadow-md p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-lg text-blue-600">
              Basic Level Course Details
            </summary>

            <p className="mt-3 text-[#202e44]/80">
              We are a passionate team of designers and architects dedicated to
              creating beautiful, functional spaces that inspire and elevate everyday
              living. This is the basic level information for mobile view.
            </p>
          </details>
        </div> */}

        {/* Services Section */}
        <div className="">
          <ScrollLevel />
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-24 z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
      </motion.div>
    </section>
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

      <motion.div ref={countRef} className="text-3xl font-bold  flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span className="text-blue-700/80">{suffix}</span>
      </motion.div>
      <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
