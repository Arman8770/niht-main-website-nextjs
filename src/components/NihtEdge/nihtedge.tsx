"use client"
import { useState, useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Images
import agencyBack from "@/assets/niht-edge/Agency Back.webp"
import LearningBeyond from "@/assets/niht-edge/Learning Beyonfd Classroom.webp"
import inHouseStudio from "@/assets/niht-edge/In house studio production.webp"
import getTrained from "@/assets/niht-edge/Get trainrd.webp"
import AiDriven from "@/assets/niht-edge/niht-ai-learning.webp"
import Leadership from "@/assets/niht-edge/sir-niht-leadership-learn.webp"
import Image, { StaticImageData } from "next/image"

export default function NIHTEDGE() {
  const courses = [
    {
      title: "AI-Powered Training",
      desc: "Work hands-on with AI, analytics and automation tools that power the world’s top campaigns.",
      topics: ["AI Tools", "Marketing Automation", "Data Analytics", "Campaign Optimization"],
      image: AiDriven,
    },
    {
      title: "In-House Production Studio",
      desc: "NIHT provides its own fully equipped creative studio for students to shoot content, record podcasts and gain experience.",
      topics: ["Video Production", "Podcast Recording", "Photography", "Content Creation"],
      image: inHouseStudio,
    },
    {
      title: "Get trained by Industry Experts",
      desc: "NIHT brings in industry professionals to mentor, speak and guide students, a bridge between classroom and industry.",
      topics: ["Mentorship", "Guest Lectures", "Industry Insights", "Career Guidance"],
      image: getTrained,
    },
    {
      title: "Agency-Backed Institute",
      desc: "NIHT is backed by a full-scale AI-driven Digital Marketing Agency, providing real-time exposure to live campaigns, creative workflows and performance optimization strategies.",
      topics: ["Live Campaigns", "Creative Workflows", "Performance Analysis", "Agency Exposure"],
      image: agencyBack,
    },
    {
      title: "Learning Beyond Classroom",
      desc: "Training goes beyond classroom lectures - it includes bootcamps, campaign challenges, case study discussions, creative labs and continuously updated course content.",
      topics: ["Bootcamps", "Case Studies", "Hands-on Projects", "Continuous Learning"],
      image: LearningBeyond,
    },
    {
      title: "Leadership that Inspires",
      desc: "Led by Founder & Lead Trainer Angshuman Sett - a visionary in performance marketing, digital transformation and AI.",
      topics: ["Visionary Guidance", "Innovation in Marketing", "Digital Transformation", "AI-Driven Growth"],
      image: Leadership,
    },
  ]

  const [maxHeight, setMaxHeight] = useState(0)
 const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (cardsRef.current.length) {
      const heights = cardsRef.current.map(card => card?.offsetHeight || 0)
      setMaxHeight(Math.max(...heights))
    }
  }, [])

  return (
    <section id="niht-edge" className="bg-gradient-to-r from-brand-primary/10 to-blue-50">
      <div className="w-full pt-12 md:pt-20 pb-6 md:pb-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-6">
            The NIHT Edge
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-4xl mx-auto">
            Master the in-demand <strong>Digital Marketing and AI skills</strong> top employers are hiring.
            Train with industry experts and accelerate your career with guided mentorship.
          </p>
        </div>

        {/* Swiper */}
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            navigation={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="py-8"
          >
            {courses.map((course, idx) => (
             <SwiperSlide key={idx} className="flex">
  <div
    ref={(el) => {
      cardsRef.current[idx] = el
    }}
    className="h-full w-full"
  >
    <CourseCard course={course} maxHeight={maxHeight} />
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

/* ---------- Course Card Component ---------- */
function CourseCard({
  course,
  maxHeight,
}: {
  course: { title: string; desc: string; topics: string[]; image: StaticImageData }
  maxHeight: number
}) {
  return (
    <div
      style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
      className="group rounded-3xl overflow-hidden bg-white backdrop-blur-lg border border-neutral-200 transition-all hover:-translate-y-2 duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 min-h-48 w-full overflow-hidden">
        <img
          src={course.image.src}
          alt={course.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors mb-3">
            {course.title}
          </h2>
          <p className="text-neutral-600 text-sm mb-4">{course.desc}</p>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {course.topics.map(topic => (
            <span
              key={topic}
              className="px-3 py-1 text-[8.5px] md:text-xs rounded-full bg-green-100 text-green-700 flex items-center gap-1"
            >
              <CheckCircle className="w-3 h-3" />
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
