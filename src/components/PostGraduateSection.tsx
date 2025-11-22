"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OrbitingSkills from "./ui/orbiting-skills";

import SirOne from "@/assets/niht-banner-image-mudit-sir.webp"
import SirTwo from "@/assets/niht-banner-lekha.webp"
import Sirthree from "@/assets/niht-banner-image-mudit-sir.webp"
import { Button } from "./ui/button";


export default function PostGraduateSection() {
  const programs = [
    {
      title: "Post Graduate Program in Digital Marketing & Strategy",
      level: "MBA - Level",
      audience: "Fresh Graduates",
      location: "On Campus (Delhi & Mumbai)",
      date: "Starts Sep 20, 2025",
      duration: "11 Months",
      image: SirTwo, // <-- ADD YOUR IMAGE
    },
    {
      title: "Post Graduate Program in Data Science & AI",
      level: "Advanced Certification",
      audience: "Tech Professionals",
      location: "Hybrid (Bangalore)",
      date: "Starts Oct 5, 2025",
      duration: "12 Months",
      image: SirOne,
    },
    {
      title: "Executive Program in Business Analytics",
      level: "Executive Level",
      audience: "Working Professionals",
      location: "Online + Weekend On Campus",
      date: "Starts Nov 10, 2025",
      duration: "9 Months",
      image: SirTwo,
    },
    {
      title: "Masters in Product Management",
      level: "Masters Level",
      audience: "Managers & Aspiring PMs",
      location: "On Campus (Mumbai)",
      date: "Starts Dec 1, 2025",
      duration: "15 Months",
      image: Sirthree,
    },
  ];

  return (
    <section className="py-4 md:py-16 bg-gradient-to-b from-[#f9fafb] to-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT – Orbiting Skills */}
        <div className="flex justify-center ">
          <div className="scale-110 md:scale-125 lg:scale-140">
            <OrbitingSkills />
          </div>
        </div>

        {/* RIGHT – Program Carousel */}
        <div className="w-full -mt-12 md:-mt-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3500 }}
          >
            {programs.map((p, i) => (
              <SwiperSlide key={i}>
                <Card className="bg-white border-0 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-0 overflow-hidden">

                  {/* TOP IMAGE (16:9) */}
                  <div className="relative w-full h-32 md:h-40">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>


                  {/* CONTENT */}
                  <div className="pb-6 px-7 md:px-10">
                    <CardHeader className="pb-4 px-0">
                      <CardTitle className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                        {p.title}
                      </CardTitle>

                      <p className="text-sm text-blue-600 font-semibold mt-1">
                        {p.level}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-5 px-0">
                      <div className="grid grid-cols-2  gap-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 min-w-4 h-4 text-blue-500" />
                          <span>{p.audience}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 min-w-4 h-4 text-blue-500" />
                          <span>{p.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 min-w-4 h-4 text-blue-500" />
                          <span>{p.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="w-4 min-w-4 h-4 text-blue-500" />
                          <span>{p.duration}</span>
                        </div>
                      </div>

                      {/* BUTTONS */}
                      <div className="flex flex-col md:flex-row gap-3 pt-3">
                        <Button variant="outline" className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition">
                          View Course
                        </Button>

                        <Button variant="cta" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:opacity-90 transition">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
