"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";

const COLORS = ["#F8B84E", "#F39C12", "#F5CBA7", "#B9770E", "#D68910"];

const industryData = [
  { name: "Digital Marketing", value: 65 },
  { name: "IT", value: 15 },
  { name: "Education", value: 8 },
  { name: "Startup", value: 7 },
  { name: "Beauty & Fashion", value: 5 },
];

const salaryData = [
  { year: "2022", salary: 4 },
  { year: "2023", salary: 4 },
  { year: "2024", salary: 5 },
];

export default function PlacementOverview() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            NIHT Placements:{" "}
            <span className="text-[#1E3A8A]">A Track Record of Success</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex flex-col sm:flex-row gap-8 mb-6">
              <motion.div
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-[#1E3A8A]">93%</h3>
                <p className="text-gray-600">Placement Rate</p>
              </motion.div>

              <motion.div
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-[#1E3A8A]">54%</h3>
                <p className="text-gray-600">Average Salary Hike</p>
              </motion.div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              NIHT’s dedicated placement cell connects students with leading
              recruiters through a network of 300+ companies, unlocking career
              opportunities with competitive packages and strong growth paths.
            </p>

            <Button className="bg-[#1E3A8A] hover:bg-[#162D6B] text-white px-6 py-2 rounded-md">
              Download Report
            </Button>
          </div>

          {/* Salary 3D Blocks */}
          <div className="flex justify-center gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F8B84E] h-32 w-20 rounded-t-lg flex flex-col justify-end items-center text-white font-bold shadow-md"
            >
              <span className="mb-2">5 LPA</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F39C12] h-40 w-20 rounded-t-lg flex flex-col justify-end items-center text-white font-bold shadow-md"
            >
              <span className="mb-2">7 LPA</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#B9770E] h-48 w-20 rounded-t-lg flex flex-col justify-end items-center text-white font-bold shadow-md"
            >
              <span className="mb-2">10 LPA</span>
            </motion.div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Industry Pie Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Industry-Wise Placement Breakdown
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={industryData}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <ul className="flex flex-wrap gap-3 mt-3 text-sm justify-center">
              {industryData.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[i] }}
                  ></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Salary Bar Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Salary Distribution
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salaryData}>
                <XAxis dataKey="year" />
                <Tooltip />
                <Bar dataKey="salary" fill="#1E3A8A" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
