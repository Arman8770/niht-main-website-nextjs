"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"
import HoverPlayCard from "../ui/videoPlay/hover-paly"

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

export default function OurCourse({ course }: OurCourseProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
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

  // ✅ Fixed Variants type
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier instead of string
    },
  }

  const services = [
    {
      icon: <Pen className="w-6 h-6  text-orange-600" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Interior",
      description:
        "Transform your living spaces with our expert interior design services. We blend functionality and aesthetics to create spaces that reflect your unique style and personality.",
      position: "left",
    },
    {
      icon: <Home className="w-6 h-6  text-yellow-600" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Exterior",
      description:
        "Make a lasting impression with stunning exterior designs that enhance curb appeal and create harmonious connections between architecture and landscape.",
      position: "left",
    },
    {
      icon: <PenTool className="w-6 h-6  text-green-600" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Design",
      description:
        "Our innovative design process combines creativity with practicality, resulting in spaces that are both beautiful and functional for everyday living.",
      position: "left",
    },
    {
      icon: <PaintBucket className="w-6 h-6  text-purple-600" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Decoration",
      description:
        "Elevate your space with our curated decoration services. From color schemes to textiles and accessories, we perfect every detail to bring your vision to life.",
      position: "right",
    },
    {
      icon: <Ruler className="w-6 h-6 text-red-600"/>,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Planning",
      description:
        "Our meticulous planning process ensures every project runs smoothly from concept to completion, with careful attention to timelines, budgets, and requirements.",
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />,
      title: "Execution",
      description:
        "Watch your dream space come to life through our flawless execution. Our skilled team handles every aspect of implementation with precision and care.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-16 px-4 text-[#202e44] overflow-hidden relative bg-[#f3f3f3]"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-[#88734C]/5"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-[#A9BBC8]/5"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-blue-500 font-medium mb-2 flex items-center text-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-blue-500" />
            {course?.title}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Course Detail</h2>
          <motion.div
            className="w-24 h-1 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-[#202e44]/80" variants={itemVariants}>
          We are a passionate team of designers and architects dedicated to creating beautiful, functional spaces that
          inspire and elevate everyday living. With attention to detail and commitment to excellence, we transform
          visions into reality.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((s) => s.position === "left")
              .map((s, i) => (
                <ServiceItem
                  key={`left-${i}`}
                  icon={s.icon}
                  secondaryIcon={s.secondaryIcon}
                  title={s.title}
                  description={s.description}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                

                <HoverPlayCard src={"https://www.nihtdigitalmarketing.com/dummy/assets/videos/Every%20story%20is%20different.%20At%20NIHT,%20students%20come%20from%20diverse%20walks%20of%20life,%20each%20with%20their%20own.mp4"}/>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((s) => s.position === "right")
              .map((s, i) => (
                <ServiceItem
                  key={`right-${i}`}
                  icon={s.icon}
                  secondaryIcon={s.secondaryIcon}
                  title={s.title}
                  description={s.description}
                  variants={itemVariants}
                  delay={i * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
        </motion.div> */}
      </motion.div>
    </section>
  )
}

// ==========================
// Service Item Component
// ==========================
interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: Variants
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#88734C] p-3 rounded-lg relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#202e44]">{title}</h3>
      </motion.div>
      <motion.p className="text-sm text-[#202e44]/80 leading-relaxed pl-12">{description}</motion.p>
    </motion.div>
  )
}

// ==========================
// Stats Counter Component
// ==========================
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
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

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
      className="p-6 rounded-xl flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#88734C]">
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#202e44] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
    </motion.div>
  )
}
