"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Rocket, Briefcase, Megaphone, Sprout, FileText } from "lucide-react";

const tasks = [
  {
    title: "Real skills. Live campaigns",
    subtitle: "Smart alerts for critical events",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
  {
    title: "Portfolio that gets interviews",
    subtitle: "Error-free salary processing",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    title: "Learn SEO, ads, content, analytics",
    subtitle: "Analytics & Growth",
    icon: <Megaphone className="w-6 h-6 text-white" />,
  },
  {
    title: "Beginner‑friendly, job‑focused",
    subtitle: "AI-curated content suggestions",
    icon: <Sprout className="w-6 h-6 text-white" />,
  },
  {
    title: "Resume + interview + placement help",
    subtitle: "Weekly insights & performance",
    icon: <FileText className="w-6 h-6 text-white" />,
  },
];

export default function WhatyouGain() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Card width (280px or 300px) + Gap (32px/2rem) = approx 332px scroll step
  const ITEM_WIDTH = 332;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - ITEM_WIDTH
          : currentScroll + ITEM_WIDTH;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * ITEM_WIDTH,
        behavior: "smooth",
      });
    }
  };

  // Detect which slide is active while scrolling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / ITEM_WIDTH);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < tasks.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="py-4 md:py-8 px-0 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center md:text-left mb-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 md:mb-2">
            What You Gain
          </h2>
          <div className="w-16 h-[2px] bg-blue-500 mx-auto md:mx-0 mb-6 "></div>
          
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-4">
          
          {/* Left Button - Hidden on Mobile */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 
                        bg-white border border-gray-200 shadow-lg rounded-full p-3 
                        text-gray-600 hover:text-blue-600 hover:scale-110 transition-all
                        hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Button - Hidden on Mobile */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 
                        bg-white border border-gray-200 shadow-lg rounded-full p-3 
                        text-gray-600 hover:text-blue-600 hover:scale-110 transition-all
                        hidden md:flex items-center justify-center cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {tasks.map((task, index) => (
              <div
                key={index}
                className="min-w-[200px] snap-center"
              >
                <div className="relative group bg-gradient-to-l from-white to-blue-50
                                rounded-2xl p-6 overflow-hidden 
                                border border-blue-100 
                                transition-all duration-500 
                                hover:shadow-xl hover:-translate-y-2"
                >
                  
                  {/* --- LEFT SIDE BORDER ANIMATION --- */}
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-blue-600 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />

                  {/* --- TOP RIGHT PATTERN ANIMATION --- */}
                  <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none 
                                  opacity-0 scale-75 origin-top-right
                                  transition-all duration-700 ease-out 
                                  group-hover:opacity-100 group-hover:scale-100">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-blue-200 fill-none stroke-current"
                    >
                      <path d="M 100 0 A 100 100 0 0 1 200 100" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 130 0 A 70 70 0 0 1 200 70" strokeWidth="2" strokeDasharray="4 4" />
                      <path d="M 160 0 A 40 40 0 0 1 200 40" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full min-h-44 ">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                      {task.icon}
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                            {task.title}
                        </h3>
                        
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex md:hidden justify-center gap-2 mt-2 mb-6">
            {tasks.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full 
                  ${activeIndex === index 
                    ? "w-8 h-2 bg-blue-600" 
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
      
      {/* Safe Scrollbar hiding */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}