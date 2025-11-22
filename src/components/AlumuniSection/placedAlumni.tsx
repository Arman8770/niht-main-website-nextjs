"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import SmallBanner from "../SmallBanner/smallbanner";

interface Profile {
  name: string;
  role: string;
  company: string;
  image: string;
  beforeLogo: string;
  afterLogo: string;
}

const testimonials = [
  {
    name: "Priyanshi Jain",
    role: "Media Planning & Performance Media Executive",
    company: "Anvis Digital",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    beforeLogo: "https://dummyimage.com/80x30/ccc/000&text=PAR",
    afterLogo: "https://dummyimage.com/80x30/aaa/000&text=Anvis",
  },
  {
    name: "Sahil Saxena",
    role: "Creative Strategist",
    company: "Schbang",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    beforeLogo: "https://dummyimage.com/80x30/ccc/000&text=Freelancer",
    afterLogo: "https://dummyimage.com/80x30/aaa/000&text=Schbang",
  },
  {
    name: "Manali Rane",
    role: "Product Manager",
    company: "Abbott",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    beforeLogo: "https://dummyimage.com/80x30/ccc/000&text=Student",
    afterLogo: "https://dummyimage.com/80x30/aaa/000&text=Abbott",
  },
  {
    name: "Rahul Mehta",
    role: "Digital Strategist",
    company: "FoxyMoron",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    beforeLogo: "https://dummyimage.com/80x30/ccc/000&text=Intern",
    afterLogo: "https://dummyimage.com/80x30/aaa/000&text=FoxyMoron",
  },
  {
    name: "Ananya Sharma",
    role: "UI/UX Designer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    beforeLogo: "https://dummyimage.com/80x30/ccc/000&text=Student",
    afterLogo: "https://dummyimage.com/80x30/aaa/000&text=TechCorp",
  },
];

const PlacedAlumni = () => {
  // Per-card toggle state
  const [cardMode, setCardMode] = useState<{ [key: number]: boolean }>({});
  const toggleCardMode = (index: number) => {
    setCardMode(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [paused, setPaused] = useState(false);
  const controls = useAnimation();

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (paused) controls.stop();
    else
      controls.start({
        y: ["0%", "-50%"],
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
      });
  }, [paused]);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-10">

          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Alumni Success Stories
            </h2>
            <p className="text-gray-600 max-w-md">
              Discover how NIHT students transformed their careers.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, visibleCount).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-blue-50 border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-500
                  ${cardMode[i] ? "grayscale" : ""}
                `}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.name}</h3>
                    <p className="text-sm text-gray-600">{t.role}</p>
                    <p className="text-sm text-blue-600">{t.company}</p>
                  </div>
                </div>

                {/* BEFORE/AFTER + Toggle */}
                <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between items-center text-sm">

                  {/* Left Before/After Logo */}
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-500">
                      {cardMode[i] ? "Before NIHT" : "After NIHT"}
                    </span>
                    <img
                      src={cardMode[i] ? t.beforeLogo : t.afterLogo}
                      alt=""
                      className={`h-7 mt-2 opacity-80 transition
                        ${cardMode[i] ? "grayscale" : ""}
                      `}
                    />
                  </div>

                  {/* Middle Toggle */}
                  <div>
                    <button
                      onClick={() => toggleCardMode(i)}
                      className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-500 shadow-inner
                        ${cardMode[i] ? "bg-blue-600" : "bg-gray-300"}
                      `}
                    >
                      <Moon
                        className={`absolute left-2 w-4 h-4 text-yellow-300 transition-opacity duration-300
                          ${cardMode[i] ? "opacity-100" : "opacity-0"}
                        `}
                      />
                      <Sun
                        className={`absolute right-2 w-4 h-4 text-yellow-500 transition-opacity duration-300
                          ${cardMode[i] ? "opacity-0" : "opacity-100"}
                        `}
                      />
                      <span
                        className={`absolute bg-white w-7 h-7 rounded-full shadow-md transform transition-transform duration-500
                          ${cardMode[i] ? "translate-x-8" : "translate-x-1"}
                        `}
                      />
                    </button>
                  </div>

                  {/* Right View Profile */}
                  <button
                    onClick={() => setSelectedProfile(t)}
                    className="text-blue-600 font-medium text-sm underline-offset-2 hover:underline transition-all"
                  >
                    View Profile ↗
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < testimonials.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setVisibleCount(testimonials.length)}
                className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}

          <SmallBanner />
        </div>

        {/* RIGHT SIDE SCROLLING LIST */}
        <div className="w-full lg:w-1/3 h-auto relative overflow-hidden">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Recently Placed
          </h3>

          <div className="max-h-[100vh] overflow-hidden">
            <motion.div
              animate={controls}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex flex-col gap-6 min-h-full"
            >
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  {testimonials.slice(0, visibleCount).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-blue-50 border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-500
                  ${cardMode[i] ? "grayscale" : ""}
                `}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.name}</h3>
                    <p className="text-sm text-gray-600">{t.role}</p>
                    <p className="text-sm text-blue-600">{t.company}</p>
                  </div>
                </div>

                {/* BEFORE/AFTER + Toggle */}
                <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between items-center text-sm">

                  {/* Left Before/After Logo */}
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-500">
                      {cardMode[i] ? "Before NIHT" : "After NIHT"}
                    </span>
                    <img
                      src={cardMode[i] ? t.beforeLogo : t.afterLogo}
                      alt=""
                      className={`h-7 mt-2 opacity-80 transition
                        ${cardMode[i] ? "grayscale" : ""}
                      `}
                    />
                  </div>

                  {/* Middle Toggle */}
                  <div>
                    <button
                      onClick={() => toggleCardMode(i)}
                      className={`relative w-16 h-8 flex items-center rounded-full transition-colors duration-500 shadow-inner
                        ${cardMode[i] ? "bg-blue-600" : "bg-gray-300"}
                      `}
                    >
                      <Moon
                        className={`absolute left-2 w-4 h-4 text-yellow-300 transition-opacity duration-300
                          ${cardMode[i] ? "opacity-100" : "opacity-0"}
                        `}
                      />
                      <Sun
                        className={`absolute right-2 w-4 h-4 text-yellow-500 transition-opacity duration-300
                          ${cardMode[i] ? "opacity-0" : "opacity-100"}
                        `}
                      />
                      <span
                        className={`absolute bg-white w-7 h-7 rounded-full shadow-md transform transition-transform duration-500
                          ${cardMode[i] ? "translate-x-8" : "translate-x-1"}
                        `}
                      />
                    </button>
                  </div>

                  {/* Right View Profile */}
                  <button
                    onClick={() => setSelectedProfile(t)}
                    className="text-blue-600 font-medium text-sm underline-offset-2 hover:underline transition-all"
                  >
                    View Profile ↗
                  </button>
                </div>

              </motion.div>
            ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center gap-4 text-center">
                <img
                  src={selectedProfile.image}
                  className="w-20 h-20 rounded-full shadow-md"
                />
                <h3 className="text-xl font-semibold">{selectedProfile.name}</h3>
                <p className="text-sm text-gray-600">{selectedProfile.role}</p>
                <p className="text-sm text-blue-600">{selectedProfile.company}</p>

                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">Before NIHT</span>
                    <img src={selectedProfile.beforeLogo} className="h-7 mt-1 opacity-80" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">After NIHT</span>
                    <img src={selectedProfile.afterLogo} className="h-7 mt-1 opacity-80" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlacedAlumni;