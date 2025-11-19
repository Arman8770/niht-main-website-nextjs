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

  // NEW: mobile slider container reference
  const mobileSliderRef = useRef<HTMLDivElement | null>(null);

  // Autoplay progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Autoplay feature switch
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  // Desktop centering
  useEffect(() => {
    if (typeof window === "undefined") return;

    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container && window.innerWidth >= 1024) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  // ⭐ NEW: MOBILE AUTOPLAY SCROLL FIX ⭐
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 1024) return; // only mobile/tablet

    const container = mobileSliderRef.current;
    if (!container) return;

    const child = container.children[0] as HTMLElement;
    if (!child) return;

    const childWidth = child.clientWidth + 16; // +16 for mx-2 gap

    container.scrollTo({
      left: currentFeature * childWidth,
      behavior: "smooth",
    });
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">
            AI Mentors. Real Results.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mt-4 mb-6">
            AI That Actually Teaches
          </h2>
        </div>

        {/* Desktop & Tab Layout */}
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center hidden lg:grid">
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;
              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 ${isActive
                        ? "bg-white dark:bg-black/80 md:shadow-xl dark:drop-shadow-lg rounded-xl md:border dark:border-none border-gray-200"
                        : ""
                      }`}
                  >
                    <div
                      className={`p-3 hidden md:block rounded-full transition-all duration-300 ${isActive
                          ? "bg-sky-500 text-white"
                          : "bg-sky-500/10 dark:bg-black/80 text-sky-500"
                        }`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${isActive
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-white/80"
                          }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`transition-colors duration-300 text-sm ${isActive
                            ? "text-gray-600 dark:text-white/60"
                            : "text-gray-500 dark:text-white/40"
                          }`}
                      >
                        {feature.description}
                      </p>
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

          {/* Right Image */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
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
            initial={false}
            animate={false}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className="flex-shrink-0 snap-center w-[85vw] md:w-[60vw] mx-2 h-[520px]"  // 🔥 fixed equal height
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="bg-white dark:bg-black/80 rounded-xl shadow-lg p-6 flex flex-col h-full"> {/* 🔥 full height card */}
                    <div className="bg-sky-500 text-white rounded-full p-4 mb-4 mx-auto">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-white/60 text-center mb-4">
                      {feature.description}
                    </p>

                    {/* Expand image */}
                    <div className="flex-1 flex items-center justify-center"> {/* 🔥 keeps spacing equal */}
                      <Image
                        className="rounded-xl border dark:border-none border-gray-50 shadow-lg dark:drop-shadow-lg"
                        src={feature.image}
                        alt={feature.title}
                        width={340}
                        height={220}
                      />
                    </div>

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

          {/* Mobile Dots */}
          <div className="flex justify-center mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${currentFeature === index
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
