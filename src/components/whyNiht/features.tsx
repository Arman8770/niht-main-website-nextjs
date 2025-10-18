"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, BrainCog } from "lucide-react";

export default function FeaturesFaq2() {
  const features = [
    {
      id: 1,
      icon: BrainCog,
      title: "Who Are AI Experts?",
      description:
        "AI Experts at BCA Labs are domain-specific mentors trained to guide you in tech, coding, and academics.",
      image: "https://bcalabs.org/companions.jpg",
    },
    {
      id: 2,
      icon: BrainCog,
      title: "Why AI Experts?",
      description:
        "Get instant, accurate help from experts—whether it's for coding or understanding tough concepts. They are trained on their expertise.",
      image: "https://bcalabs.org/companions_group_1.jpg",
    },
    {
      id: 3,
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Experience personalized, AI-driven learning tailored for BCA, BBA, and other students.",
      image: "https://bcalabs.org/companions_group_2.jpg",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect which card is active (centered in view)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      cardRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative bg-gray-50 dark:bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: Scrollable content cards */}
        <div ref={containerRef} className="space-y-12 relative">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative transition-all duration-500 transform ${
                  activeIndex === index
                    ? "scale-100 shadow-2xl z-20 bg-white dark:bg-zinc-900"
                    : "scale-95 opacity-85 bg-white/90 dark:bg-zinc-900/80"
                } border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow-md`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-sky-500 text-white rounded-full shadow-lg">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT: Sticky changing image */}
        <div className="sticky top-28 h-[450px] flex items-center justify-center">
          <motion.div
            key={features[activeIndex]?.id}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-2xl"
          >
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              width={600}
              height={400}
              className="object-cover w-full h-[400px] transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
