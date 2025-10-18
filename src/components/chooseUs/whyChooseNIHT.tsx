"use client"

import React from "react"
import { Syllabus } from "@/components/ui/whyChoose/modern-timeline"

type SyllabusItem = {
  module: string
  topics: string[]
  duration?: string
  level?: "Beginner" | "Intermediate" | "Advanced"
  status?: "completed" | "current" | "upcoming"
  image?: string
}

const syllabusItems: SyllabusItem[] = [
  {
    module: "Digital Marketing Basics",
    topics: ["Overview of Digital Marketing", "Marketing Funnel Basics", "Case Studies"],
    duration: "1 Week",
    level: "Beginner",
    status: "completed",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    module: "SEO & Content Marketing",
    topics: ["Keyword Research", "On-Page SEO", "Content Planning"],
    duration: "2 Weeks",
    level: "Intermediate",
    status: "current"
  },
  {
    module: "Social Media Marketing",
    topics: ["Facebook Ads", "Instagram Marketing", "LinkedIn Strategies"],
    duration: "2 Weeks",
    level: "Intermediate",
    status: "upcoming"
  }
]

export default function WhyChooseNIHT() {
  return (
    <div className="min-h-screen bg-background">
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Syllabus
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From a simple idea to a global platform serving thousands of teams worldwide. 
          Follow our story of innovation, growth, and the amazing people who made it possible.
        </p> */}
      </header>

      <main>
        <Syllabus items={syllabusItems} />
      </main>

      
    </div>
  )
} 