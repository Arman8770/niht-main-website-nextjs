"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeaturesProps {
  features: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  }[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  features,
  primaryColor,
  progressGradientLight,
  progressGradientDark,
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mobile slider
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);

  // AUTOPLAY PROGRESS
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // SWITCH FEATURE
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  // DESKTOP CENTERING
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const activeEl = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (!activeEl || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = activeEl.getBoundingClientRect();

    container.scrollTo({
      left:
        activeEl.offsetLeft -
        (containerRect.width - elementRect.width) / 2,
      behavior: "smooth",
    });
  }, [currentFeature]);

  // ⭐ FIXED MOBILE AUTOPLAY SCROLL ⭐
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return; // Mobile only

    const container = mobileSliderRef.current;
    if (!container) return;

    const card = container.children[currentFeature] as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth + 16; // mx-2 gap

    container.scrollTo({
      left: currentFeature * cardWidth,
      behavior: "smooth",
    });
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">
            AI Mentors. Real Results.
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mt-4 mb-6">
            AI That Actually Teaches
          </h2>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center hidden lg:grid">
          <div
            ref={containerRef}
            className="lg:space-y-8 overflow-x-auto no-scrollbar flex flex-row lg:flex-col scroll-smooth pb-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  // ref={(el) => (featureRefs.current[index] = el)}
                  onClick={() => handleFeatureClick(index)}
                  className="relative cursor-pointer flex-shrink-0"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-start space-x-4 p-3 max-w-sm lg:max-w-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white dark:bg-black/80 shadow-xl dark:drop-shadow-lg rounded-xl border border-gray-200 dark:border-none"
                        : ""
                    }`}
                  >
                    {/* ICON */}
                    <div
                      className={`p-3 hidden md:block rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-sky-500 text-white"
                          : "bg-sky-500/10 dark:bg-black/80 text-sky-500"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    {/* TITLE + DESCRIPTION */}
                    <div className="flex-1">
                      <h3
                        className={`text-lg md:mt-4 lg:mt-0 font-semibold mb-2 ${
                          isActive
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-white/80"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`text-sm transition-colors ${
                          isActive
                            ? "text-gray-600 dark:text-white/60"
                            : "text-gray-500 dark:text-white/40"
                        }`}
                      >
                        {feature.description}
                      </p>

                      {/* PROGRESS BAR */}
                      <div className="mt-4 bg-white dark:bg-black/80 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className={`h-full ${progressGradientLight} dark:${progressGradientDark}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative max-w-lg mx-auto">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                className="rounded-2xl border dark:border-none border-gray-50 shadow-lg dark:drop-shadow-lg"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE SLIDER */}
        <div className="lg:hidden">
          <motion.div
            ref={mobileSliderRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  className="flex-shrink-0 snap-center w-[85vw] md:w-[60vw] mx-2 h-[520px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-white dark:bg-black/80 rounded-xl shadow-lg p-6 flex flex-col h-full">
                    {/* ICON */}
                    <div className="bg-sky-500 text-white rounded-full p-4 mb-4 mx-auto">
                      <Icon size={32} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 dark:text-white/60 text-center mb-4">
                      {feature.description}
                    </p>

                    {/* IMAGE */}
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        className="rounded-xl border dark:border-none border-gray-50 shadow-lg dark:drop-shadow-lg"
                        src={feature.image}
                        alt={feature.title}
                        width={340}
                        height={220}
                      />
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full mt-4 bg-white dark:bg-black/80 rounded-sm h-1 overflow-hidden">
                      {currentFeature === index && (
                        <motion.div
                          className={`h-full ${progressGradientLight} dark:${progressGradientDark}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* DOTS */}
          <div className="flex justify-center mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  currentFeature === index
                    ? "bg-sky-500 scale-125"
                    : "bg-sky-500/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
