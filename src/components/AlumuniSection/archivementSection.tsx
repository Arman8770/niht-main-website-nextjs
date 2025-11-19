"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function AlumniAchievements() {
  return (
    <section className="w-full bg-[#f9fbff] py-16 px-6 md:px-20 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          NIHT <span className="text-blue-600">Alumni Achievements</span> at a Glance
        </h2>
        <p className="text-gray-500 mb-12">
          Get a glimpse into the success of NIHT&apos;s students through powerful statistics and measurable milestones.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white shadow-md rounded-2xl p-6 text-left flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                93% of NIHT Students Are Placed At Top Organisations
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Swiggy_logo.svg"
                    alt="Swiggy"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/55/Performics_logo.svg"
                    alt="Performics"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/MediaMint_logo.svg"
                    alt="MediaMint"
                    className="h-10 object-contain"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Payoneer_logo.svg"
                    alt="Payoneer"
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white shadow-md rounded-2xl p-6 text-left flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6">
                54% Average Salary Hike
              </h3>

              {/* Salary Graph Style */}
              <div className="relative w-full h-48 bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
                <svg
                  viewBox="0 0 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full"
                >
                  <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    points="0,180 80,80 160,140 240,100 320,40 400,20"
                  />
                </svg>
                <div className="absolute top-10 left-[80px] bg-white px-2 py-1 rounded-md shadow text-xs">
                  ₹8.5LPA
                </div>
                <div className="absolute top-[100px] left-[160px] bg-white px-2 py-1 rounded-md shadow text-xs">
                  ₹6.5LPA
                </div>
                <div className="absolute top-[40px] left-[320px] bg-white px-2 py-1 rounded-md shadow text-xs">
                  ₹9.7LPA
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Detailed Placement Report
        </motion.a>
      </div>
    </section>
  );
}
