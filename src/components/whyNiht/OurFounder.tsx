"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founder = {
  name: "Karan Shah",
  title: "Founder & CEO, NIHT Digital",
  image:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80", // professional portrait
  achievements: [
    "Specialization from Harvard University",
    "2X TEDx Speaker",
    "Digital Marketing Trainer at NMIMS",
    "Featured in Entrepreneur Magazine",
  ],
};

const teamMembers = [
  {
    name: "Riya Sharma",
    role: "Digital Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amit Verma",
    role: "SEO Specialist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Patel",
    role: "Content Strategist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rahul Mehta",
    role: "Performance Marketer",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FounderAndTeam() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={founder.image}
              alt={founder.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              {founder.name}
            </h2>
            <p className="text-gray-600 mt-1">{founder.title}</p>
          </div>

          {/* Achievements */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {founder.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm md:text-base font-medium text-gray-800">
                  {ach}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
