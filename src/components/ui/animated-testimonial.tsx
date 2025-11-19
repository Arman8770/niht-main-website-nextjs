"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin } from "lucide-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

type EventType = {
  title: string;
  date: string;
  time: string;
  location: string;
  registered: number;
  mode: string;
  src: string;
};

export const AnimatedTestimonials = ({
  teams,
  autoplay = false,
  className,
}: {
  teams: EventType[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [randomRotations, setRandomRotations] = useState<number[]>([]);

  useEffect(() => {
    setRandomRotations(teams.map(() => Math.floor(Math.random() * 21) - 10));
  }, [teams.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % teams.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + teams.length) % teams.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div
      className={cn(
        "max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: IMAGE */}
        <div className="w-full flex justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px]">
            <AnimatePresence>
              {teams.map((team, index) => (
                <motion.div
                  key={team.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: randomRotations[index] || 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    rotate: isActive(index) ? 0 : randomRotations[index] || 0,
                    zIndex: isActive(index) ? 30 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={team.src}
                    alt={team.title}
                    fill
                    className="rounded-3xl object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: CONTENT BOX */}
        <div className="w-full">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-lg border border-blue-600 p-6 md:p-8 space-y-5"
          >
            <span className="inline-block text-xs px-3 py-1 rounded-full border border-orange-400 text-orange-500">
              {teams[active].mode}
            </span>

            <h3 className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug">
              {teams[active].title}
            </h3>

            {/* Date + Time */}
            <div className="
                flex flex-col md:flex-row 
                items-start md:items-center 
                gap-1 md:gap-3 
                text-sm md:text-base text-gray-600
              ">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>{teams[active].date}</span>
              </div>

              <div className="flex items-center gap-2 md:ml-3 mt-4 md:mt-0">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>{teams[active].time}</span>
              </div>
            </div>

            {/* Location */}
            <div className="
                flex flex-col md:flex-row 
                items-start md:items-center 
                gap-1 md:gap-2 
                text-sm md:text-base text-gray-600
              ">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>{teams[active].location}</span>
              </div>
            </div>


            <hr className="text-blue-300" />

            <div className="flex items-center justify-between">
              <button className="bg-blue-700 text-white text-sm md:text-base px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Register Now
              </button>

              <p className="text-sm md:text-base text-gray-700 font-medium text-right leading-tight">
                <span className="font-bold text-lg md:text-xl">
                  {teams[active].registered}
                </span>
                + <br /> Students Enrolled
              </p>
            </div>
          </motion.div>

          {/* ARROWS */}
          <div className="flex gap-4 pt-6 text-blue-600">
            <button
              onClick={handlePrev}
              className="h-10 w-10  bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition"
            >
              <IoChevronBack size={22} />
            </button>

            <button
              onClick={handleNext}
              className="h-10 w-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition"
            >
              <IoChevronForward size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
