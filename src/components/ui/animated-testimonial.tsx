"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, ArrowBigRight, Calendar, Clock, MapPin } from "lucide-react";

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

  // Initialize random rotations only on client side
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
        "max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12",
        className
      )}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left: Image animation */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {teams.map((team, index) => (
                <motion.div
                  key={team.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotations[index] || 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotations[index] || 0,
                    zIndex: isActive(index) ? 999 : teams.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotations[index] || 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={team.src}
                    alt={team.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Event Details */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white rounded-xl shadow border p-6 space-y-4"
          >
            {/* Mode (Offline/Online) */}
            <span className="inline-block text-xs px-3 py-1 rounded-full border border-orange-400 text-orange-500">
              {teams[active].mode}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {teams[active].title}
            </h3>

            {/* Date + Time */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{teams[active].date}</span>
              <Clock className="h-4 w-4 text-blue-500 ml-3" />
              <span>{teams[active].time}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>{teams[active].location}</span>
            </div>

            <hr className="my-2" />

            {/* Registered + Button */}
            <div className="flex items-center justify-between">
              
              <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Register Now
              </button>
              <p className="text-sm text-gray-700 font-medium text-center">
                <span className="font-bold ">{teams[active].registered}</span>{" "}
                +Students<br/> Enrolled
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowBigLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowBigRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};