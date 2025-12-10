"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Rocket,
  Briefcase,
  Megaphone,
  Sprout,
  FileText,
  GraduationCap,
} from "lucide-react";

const tasks = [
  {
    title: "Real skills. live campaigns",
    subtitle: "Smart alerts for critical events",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Portfolio that gets interviews",
    subtitle: "Error-free salary processing",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Learn SEO, ads, content, analytics",
    subtitle: "Analytics & Growth",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "Beginner‑friendly, job‑focused",
    subtitle: "AI-curated content suggestions",
    icon: <Sprout className="w-5 h-5" />,
  },
  {
    title: "Get job ready",
    subtitle: "Weekly insights & performance",
    icon: <FileText className="w-5 h-5" />,
  },
];
const tasksPpdm = [
  {
    title: "Interview-ready portfolio",
    subtitle: "Build projects that impress employers",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "SEO, ads, content, analytics & Gen‑AI skills",
    subtitle: "Master modern digital marketing tools",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "Live project experience. Real Skills",
    subtitle: "Hands-on learning from day one",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Resume + interview + placement support",
    subtitle: "End-to-end career assistance",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Job-ready digital marketing training",
    subtitle: "Practical skills for real roles",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Beginner-friendly, job-focused",
    subtitle: "Learn step-by-step, even with zero experience",
    icon: <Sprout className="w-5 h-5" />,
  },
];

const tasksMpdm = [
  {
    title: "Interview-ready portfolio",
    subtitle: "Build projects that impress employers",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "SEO, ads, content, analytics & Gen-AI & Automation",
    subtitle: "Master modern digital marketing tools",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    title: "Live project experience. Real Skills",
    subtitle: "Hands-on learning from day one",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Resume + interview + placement support",
    subtitle: "End-to-end career assistance",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Job-ready digital marketing training",
    subtitle: "Practical skills for real roles",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Beginner-friendly, job-focused",
    subtitle: "Learn step-by-step, even with zero experience",
    icon: <Sprout className="w-5 h-5" />,
  },
];



export default function FeatureSection() {
  const [activeTasks, setActiveTasks] = useState(tasks); // default

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href.toLowerCase();

      if (url.includes("ppdm")) {
        setActiveTasks(tasksPpdm);
      } else if (url.includes("cpdm")) {
        setActiveTasks(tasks);
      }
       else if (url.includes("mpdm")) {
        setActiveTasks(tasksMpdm);
      }
      else {
        setActiveTasks(tasks); // fallback
      }
    }
  }, []);

  return (
    <section className="relative w-full py-4 md:py-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center gap-12 lg:gap-24">

          <div className="relative w-full max-w-md mx-auto lg:mr-auto">
            <Card className="relative overflow-hidden border-slate-200 dark:border-slate-800 rounded-xl">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold text-left text-slate-900">
                  What You Gain
                </h2>
              </div>

              <CardContent className="relative h-[380px] p-0">
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="flex flex-col absolute w-full"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    }}
                  >
                    {[...activeTasks, ...activeTasks].map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 px-6 py-2 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          {task.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">
                            {task.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
