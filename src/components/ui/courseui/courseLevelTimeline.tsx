"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HoverPreviewCard from "../videoPlay/hover-paly";
import { ChevronDown } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-0">

        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:gap-10 mb-6">
            {/* --- DESKTOP VIEW (timeline style) --- */}
            <div className="hidden md:flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full sticky">
              {/* Timeline dot */}
              <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-4 pl-16">
                {item.title}
              </h3>

              {/* Video BELOW Title */}
              <div className="w-full pl-16">
                <HoverPreviewCard src="https://www.nihtdigitalmarketing.com/dummy/assets/videos/Every%20story%20is%20different.%20At%20NIHT,%20students%20come%20from%20diverse%20walks%20of%20life,%20each%20with%20their%20own.mp4" />
              </div>
            </div>

            {/* --- MOBILE VIEW (accordion) --- */}
            <div className="md:hidden w-full border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 bg-neutral-100 dark:bg-neutral-800 text-left font-semibold text-neutral-700 dark:text-neutral-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.title}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <HoverPreviewCard src="https://www.nihtdigitalmarketing.com/dummy/assets/videos/Every%20story%20is%20different.%20At%20NIHT,%20students%20come%20from%20diverse%20walks%20of%20life,%20each%20with%20their%20own.mp4" />
                  {item.content}
                </div>
              </motion.div>
            </div>

            {/* --- RIGHT SIDE CONTENT (desktop) --- */}
            <div className="hidden md:block relative pl-20 pr-4 md:pl-4 w-full">
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
