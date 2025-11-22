"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Bell,
  Code,
  DollarSign,
  FileBarChart,
  Palette,
  Share2,
  Users,
} from "lucide-react";

import TimelinePage2, { TimelineItemData } from "../ui/courseui/profetionalTimeline";
import { Card, CardContent } from "../ui/card";

// Levels
const levels = [
  { name: "Level 1: Basics", description: "Introduction to Marketing" },
  { name: "Level 2: SEO & Content", description: "Deep dive into SEO" },
  { name: "Level 3: Social Media", description: "Advertising and analytics" },
  { name: "Level 4: Capstone Project", description: "Final practical project" },
];

// Timeline Data for each level
const levelTimelineData: TimelineItemData[][] = [
  [
    {
      id: "lvl1-1",
      title: "Digital Marketing Overview",
      type: "Module",
      duration: "2 days",
      icon: Code,
      responsibilities: [
        "Understand digital marketing fundamentals",
        "Learn basic campaign structures",
      ],
      skills: ["Marketing Basics", "Google Analytics"],
    },
    {
      id: "lvl1-2",
      title: "Marketing Funnels",
      type: "Module",
      duration: "3 days",
      icon: Palette,
      responsibilities: ["Study marketing funnels", "Understand lead nurturing"],
      skills: ["Lead Generation", "Customer Journey"],
    },
  ],
  [
    {
      id: "lvl2-1",
      title: "SEO Fundamentals",
      type: "Module",
      duration: "1 week",
      icon: Code,
      responsibilities: [
        "Learn keyword optimization",
        "Master on-page & off-page SEO",
      ],
      skills: ["SEO", "Google Console", "Content Writing"],
    },
  ],
  [
    {
      id: "lvl3-1",
      title: "Social Media Advertising",
      type: "Workshop",
      duration: "5 days",
      icon: Palette,
      responsibilities: [
        "Create ads on Meta platforms",
        "Analyze campaign performance",
      ],
      skills: ["Facebook Ads", "Analytics", "Copywriting"],
    },
  ],
  [
    {
      id: "lvl4-1",
      title: "Capstone Project",
      type: "Final Project",
      duration: "2 weeks",
      icon: Code,
      responsibilities: [
        "Build a complete marketing strategy",
        "Present results and reports",
      ],
      skills: ["Teamwork", "Analytics", "Automation"],
    },
  ],
];

const tasks = [
  { title: "AI-powered notifications", subtitle: "Smart alerts", icon: <Bell className="w-4 h-4" /> },
  { title: "Automated payroll", subtitle: "Error-free salary", icon: <DollarSign className="w-4 h-4" /> },
  { title: "Employee insights", subtitle: "Track live productivity", icon: <Users className="w-4 h-4" /> },
  { title: "Social campaigns", subtitle: "AI content ideas", icon: <Share2 className="w-4 h-4" /> },
  { title: "AI-driven reports", subtitle: "Weekly insights", icon: <FileBarChart className="w-4 h-4" /> },
];

export default function ScrollLevel() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
    setActiveLevel(index);
  };

  return (
    <section className="w-full bg-gray-50 dark:bg-darkmode py-10">

      {/* ============================ */}
      {/* 📱 MOBILE – ACCORDION VIEW  */}
      {/* ============================ */}
      <div className="md:hidden px-4 space-y-4">

        {levels.map((level, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">

            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-left ${
                openAccordion === index ? "bg-primary text-white" : "bg-white"
              }`}
            >
              <span>{level.name}</span>
              <span>{openAccordion === index ? "−" : "+"}</span>
            </button>

            {/* Body */}
            <AnimatePresence>
              {openAccordion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-3 pt-6 pb-4 bg-white"
                >
                  <TimelinePage2 timelineData={levelTimelineData[index]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* ⭐ SCROLLING CARD BELOW ACCORDION */}
        <div className="mt-6">
          <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[320px] p-0 overflow-hidden">
              <motion.div
                className="flex flex-col gap-2 absolute w-full"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 14,
                  ease: "linear",
                }}
              >
                {[...tasks, ...tasks].map((task, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between flex-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 dark:bg-gray-700 w-10 h-10 rounded-xl shadow-md" />
                        <div>
                          <p className="text-sm font-medium">{task.title}</p>
                          <p className="text-xs text-gray-500">{task.subtitle}</p>
                        </div>
                      </div>
                      {task.icon}
                    </div>
                  </div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ============================ */}
      {/* 🖥 DESKTOP VIEW */}
      {/* ============================ */}
      <div className="hidden md:flex md:flex-row h-screen">

        {/* Sidebar */}
        <div className="w-1/3 border-r pr-4 space-y-2 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Course Levels</h2>

          {levels.map((level, index) => (
            <button
              key={index}
              onClick={() => setActiveLevel(index)}
              className={`w-full text-left px-4 py-3 rounded-lg border ${
                activeLevel === index
                  ? "bg-primary text-white border-primary"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
              }`}
            >
              <h3 className="font-semibold">{level.name}</h3>
              <p className="text-sm opacity-80">{level.description}</p>
            </button>
          ))}

          {/* Desktop scroll card */}
          <div className="mt-4">
            <Card className="overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
              <CardContent className="relative h-[320px] p-0 overflow-hidden">
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-blue-100"
                    >
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-xl" />
                          <div>
                            <p className="text-sm font-medium">{task.title}</p>
                            <p className="text-xs text-gray-500">{task.subtitle}</p>
                          </div>
                        </div>
                        {task.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">
                {levels[activeLevel].name}
              </h2>

              <TimelinePage2 timelineData={levelTimelineData[activeLevel]} />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
