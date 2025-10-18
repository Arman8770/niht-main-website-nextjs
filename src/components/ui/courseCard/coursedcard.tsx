"use client"
import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import { Button } from "../button"

export default function CourseSection() {
  const courses = [
    {
      title: "SEO Mastery",
      desc: "Learn how to optimize websites and rank higher on Google.",
      topics: ["On-page SEO", "Technical SEO", "Keyword Research", "Backlinks & Off-page SEO"],
      image: "https://cdn.pixabay.com/photo/2024/01/24/21/38/lady-8530604_1280.png",
    },
    {
      title: "Performance Marketing",
      desc: "Master paid ads and conversion optimization.",
      topics: ["Google Ads", "Meta Ads", "Analytics & Tracking", "Landing Page Optimization"],
      image: "https://cdn.pixabay.com/photo/2024/01/24/21/38/lady-8530604_1280.png",
    },
  ]

  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    alert("Thank you! We’ll contact you soon.")
  }

  return (
    <div className="w-full py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-4">
          Other Courses We Offer
        </h3>
        <p className="text-lg md:text-xl text-neutral-600">
          Explore our skill-focused programs to boost your career.
        </p>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={24} slidesPerView={1}>
          <SwiperSlide>
            <EnrollForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
          </SwiperSlide>
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        <EnrollForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
        
      </div>
    </div>
  )
}

/* ---------- Course Card ---------- */
function CourseCard({ course }: { course: { title: string; desc: string; topics: string[]; image: string } }) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white/70 backdrop-blur-lg border border-neutral-200 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {course.title}
        </h2>
        <p className="text-neutral-600 text-sm mt-2">{course.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 flex items-center gap-1"
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

/* ---------- Enroll Form Card ---------- */
function EnrollForm({
  formData,
  handleChange,
  handleSubmit,
}: {
  formData: { name: string; phone: string; email: string }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <div className="rounded-3xl p-2 bg-gradient-to-tr from-white/90 to-gray-100/90 backdrop-blur-md border border-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="rounded-2xl p-8 h-full flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-center text-neutral-900 mb-6">
          Get Enrolled For Free Career Guidance
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-neutral-900"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-neutral-900"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-neutral-900"
          />
          <Button
            type="submit"
            variant={"cta"}
            className="w-full py-3 rounded-xl font-semibold shadow-lg btn-shine"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
