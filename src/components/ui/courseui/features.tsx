"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Bell,
  DollarSign,
  Users,
  Share2,
  FileBarChart,
  CheckCircle2,
  Rocket,
  Briefcase,
  Megaphone,
  Sprout,
  FileText,
} from "lucide-react";

// Added specific colors/bg for each task to make it pop, or keep uniform blue
const tasks = [
  {
    title: "Real skills. Live campaigns",
    subtitle: "Smart alerts for critical events",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Portfolio that gets interviews",
    subtitle: "Error-free salary processing",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: " Learn SEO, ads, content, analytics",
    subtitle: "Analytics & Growth",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "Beginner‑friendly, job‑focused",
    subtitle: "AI-curated content suggestions",
    icon: <Sprout className="w-5 h-5" />,
  },
  {
    title: "Resume + interview + placement help",
    subtitle: "Weekly insights & performance",
    icon: <FileText className="w-5 h-5" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-4 md:py-8 overflow-hidden">
      {/* Background Decorative Blurs */}
      {/* <div className="absolute top-0 left-[-10%] w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" /> */}

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-12 lg:gap-24">

          {/* LEFT SIDE - The Scrolling Card */}
          <div className="relative w-full max-w-md mx-auto lg:mr-auto">
            {/* Decorative ring behind card */}
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20" /> */}

            <Card className="relative overflow-hidden border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 ">
                {/* <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-m font-bold text-white ml-2">What You Gain</span>
                </div> */}
                <div className="">
                  <h2 className="text-xl md:text-2xl font-bold text-left text-slate-900  ">What You Gain</h2>
                </div>
              </div>

              <CardContent className="relative h-[380px] p-0">
                {/* Scrollable Container */}
                <div className="relative h-full overflow-hidden">
                  {/* Motion list */}
                  <motion.div
                    className="flex flex-col absolute w-full"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20, // Slower for better readability
                      ease: "linear",
                    }}
                  >
                    {[...tasks, ...tasks].map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 px-6 py-2 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                      >
                        {/* Icon Box */}
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {task.icon}
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                            {task.title}
                          </p>
                          {/* <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                            {task.subtitle}
                          </p> */}
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Gradient Fade Masks - Matching the Card Background */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-slate-900 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none z-10" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDE - Content (Restored & Styled) */}
          {/* <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="px-3 py-1 text-sm border-blue-200 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                Workflow Automation
              </Badge>
              
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                Automate your <span className="text-blue-600">Growth</span>
              </h2>
              
              <p className="mx-auto lg:mx-0 max-w-[600px] text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
                Streamline operations with AI-driven automation. From learning paths to career tracking, our solutions reduce manual effort so you can focus on getting hired.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "100+ Automations",
                 "AI Task Bots",
                 "Enterprise Ready",
                 "Real-time Analytics"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700">
                  Get Started
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50">
                  View Demo
                </button>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}