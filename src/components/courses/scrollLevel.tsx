"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Bell, Code, DollarSign, FileBarChart, Palette, Share2, Users } from "lucide-react";
import TimelinePage2, { TimelineItemData } from "../ui/courseui/profetionalTimeline";
import { Card, CardContent } from "../ui/card";
import HoverPreviewCard from "../ui/videoPlay/hover-paly";

const levels = [
    { name: "Level 1: Basics", description: "Introduction to Marketing" },
    { name: "Level 2: SEO & Content", description: "Deep dive into SEO" },
    { name: "Level 3: Social Media", description: "Advertising and analytics" },
    { name: "Level 4: Capstone Project", description: "Final practical project" },
];

// Level-specific timeline data
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
    {
        title: "AI-powered notifications",
        subtitle: "Smart alerts for critical events",
        icon: <Bell className="w-4 h-4" />,
    },
    {
        title: "Automated payroll",
        subtitle: "Error-free salary processing",
        icon: <DollarSign className="w-4 h-4" />,
    },
    {
        title: "Employee insights",
        subtitle: "Track productivity in real-time",
        icon: <Users className="w-4 h-4" />,
    },
    {
        title: "Social campaigns",
        subtitle: "AI-curated content suggestions",
        icon: <Share2 className="w-4 h-4" />,
    },
    {
        title: "AI-driven reports",
        subtitle: "Weekly insights & performance",
        icon: <FileBarChart className="w-4 h-4" />,
    },
];

export default function ScrollLevel() {
    const [activeLevel, setActiveLevel] = useState(0);

    return (
        <section className="flex flex-col md:flex-row md:h-screen bg-gray-50 dark:bg-darkmode py-12">
            {/* Sidebar levels */}
            <div className="w-full md:w-1/3 overflow-y-auto border-r border-gray-200 dark:border-gray-700 px-4">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Course Levels
                </h2>
                <div className="space-y-2">
                    {levels.map((level, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setActiveLevel(index)}
                            className={`w-full text-left px-4 py-3 rounded-lg border ${activeLevel === index
                                ? "bg-primary text-white border-primary"
                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                                } transition-all duration-300`}
                        >
                            <h3 className="font-semibold">{level.name}</h3>
                            <p className="text-sm opacity-80">{level.description}</p>
                        </motion.button>
                    ))}
                </div>
                <div className="w-full mt-4">

                    {/* <HoverPreviewCard src={"https://www.nihtdigitalmarketing.com/dummy/assets/videos/Every%20story%20is%20different.%20At%20NIHT,%20students%20come%20from%20diverse%20walks%20of%20life,%20each%20with%20their%20own.mp4"} /> */}
                    <div className="relative w-full max-w-sm">
                        <Card className="mt-4 overflow-hidden bg-muted/30 dark:bg-muted/20 backdrop-blur-md shadow-xl rounded-lg">
                            <CardContent className="relative h-[320px] p-0 overflow-hidden">
                                {/* Scrollable Container */}
                                <div className="relative h-full overflow-hidden">
                                    {/* Motion list */}
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
                                                className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 relative"
                                            >
                                                {/* Icon + Content */}
                                                <div className="flex items-center justify-between flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className="bg-gray-200 dark:bg-gray-700 w-10 h-10 rounded-xl shadow-md" />
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                                                            <p className="text-xs text-gray-500">{task.subtitle}</p>
                                                        </div>
                                                    </div>
                                                    {task.icon}
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Fade effect only inside card */}
                                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Right side content */}
            <div className="flex-1 overflow-y-auto px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLevel}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.4 }}
                        className="py-6"
                    >
                        <h2 className="text-2xl font-bold mb-6">
                            {levels[activeLevel].name}
                        </h2>
                        <TimelinePage2 timelineData={levelTimelineData[activeLevel]} />
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
