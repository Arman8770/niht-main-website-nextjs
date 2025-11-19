"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  tag: string;
  title: string;
  bestFor: string;
  mode: string;
  duration: string;
  startFrom?: string;
  image: string;
  applyLink: string;
  viewLink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  tag,
  title,
  bestFor,
  mode,
  duration,
  startFrom,
  image,
  applyLink,
  viewLink,
}) => (
  <motion.div
    whileHover={{ scale: 1.03 }} // Removed tilt rotation
    className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white/90 to-white/60 dark:from-neutral-900/80 dark:to-neutral-900/60"
  >
    {/* Image Section */}
    <div className="relative md:w-1/2 h-64 md:h-auto">
      <Image src={image} alt={title} fill className="object-cover" />
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm transition"
      >
        <div className="bg-white/90 p-4 rounded-full shadow-lg hover:scale-110 transition">
          <Play className="text-blue-600" size={32} />
        </div>
      </motion.div>
    </div>

    {/* Content Section */}
    <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
      {/* Diagonal tag */}
      <div className="absolute top-6 left-0 -rotate-12 bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900 px-4 py-1 font-semibold shadow-lg rounded-tr-lg">
        {tag}
      </div>

      <h3 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white hover:text-blue-600 transition">
        {title}
      </h3>

      <div className="text-gray-700 dark:text-gray-300 space-y-2 mb-6">
        <p><strong>Best For:</strong> {bestFor}</p>
        <p><strong>Mode:</strong> {mode}</p>
        {startFrom && <p><strong>Starts From:</strong> {startFrom}</p>}
        <p><strong>Duration:</strong> {duration}</p>
      </div>

      <div className="flex gap-4 mt-auto">
        <Link
          href={viewLink}
          className="flex-1 py-2 rounded-full font-semibold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-all backdrop-blur-md bg-white/50"
        >
          View Course
        </Link>
        <Link
          href={applyLink}
          className="flex-1 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-lg"
        >
          Apply Now
        </Link>
      </div>
    </div>
  </motion.div>
);

export const RecommendedCourses = () => {
  const courses = [
    {
      tag: "MBA - Level",
      title: "Post Graduate in Digital Marketing & Strategy",
      bestFor: "Fresh Graduates",
      mode: "On Campus (Mumbai & Delhi)",
      duration: "11 Months",
      startFrom: "Nov 28, 2025",
      image: "https://iide.co/wp-content/uploads/2022/06/graduation.jpg",
      viewLink: "#",
      applyLink: "#",
    },
    {
      tag: "Live & Online",
      title: "Advanced Online Digital Marketing Course",
      bestFor: "Working Professionals",
      mode: "Online",
      duration: "4–6 Months",
      image: "https://iide.co/wp-content/uploads/2022/06/onlinecourse.jpg",
      viewLink: "#",
      applyLink: "#",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Premium Recommended Courses
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16">
          Explore our specially curated premium courses, designed to prepare you for top-tier placements and career success in digital marketing.
        </p>

        <div className="flex flex-col gap-10 md:gap-16">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
