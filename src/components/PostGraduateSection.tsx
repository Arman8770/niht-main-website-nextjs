"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Clock } from "lucide-react";
// import Payal from "@/assets/video-image/payel-sadhya.jpg";
// import Play from "@/assets/svg-images/play-svgrepo-com.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { useState } from "react";
// import Image from "next/image";
import OrbitingSkills from "./ui/orbiting-skills";

export default function PostGraduateSection() {
  const programs = [
    {
      title: "Post Graduate Program in Digital Marketing & Strategy",
      level: "MBA - Level",
      audience: "Fresh Graduates",
      location: "On Campus (Delhi & Mumbai)",
      date: "Starts Sep 20, 2025",
      duration: "11 Months",
    },
    {
      title: "Post Graduate Program in Data Science & AI",
      level: "Advanced Certification",
      audience: "Tech Professionals",
      location: "Hybrid (Bangalore)",
      date: "Starts Oct 5, 2025",
      duration: "12 Months",
    },
    {
      title: "Executive Program in Business Analytics",
      level: "Executive Level",
      audience: "Working Professionals",
      location: "Online + Weekend On Campus",
      date: "Starts Nov 10, 2025",
      duration: "9 Months",
    },
    {
      title: "Masters in Product Management",
      level: "Masters Level",
      audience: "Managers & Aspiring PMs",
      location: "On Campus (Mumbai)",
      date: "Starts Dec 1, 2025",
      duration: "15 Months",
    },
  ];

  // const testimonialVideos = [
  //   {
  //     image: Payal,
  //     src: "https://www.youtube.com/watch?v=edtKqYsv2uA",
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const [mutedIndex, setMutedIndex] = useState<number | null>(null);

  // function extractYouTubeID(url: string) {
  //   const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/;
  //   const match = url.match(regex);
  //   return match ? match[1] : "";
  // }

  return (
    <section className="py-16 bg-gradient-to-b from-[#f9fafb] to-[#f3f3f3]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left - OrbitingSkills (Static) */}
        <div className="flex justify-center">
          <OrbitingSkills />
        </div>

        {/* Right - Carousel */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            allowTouchMove={false}
          >
            {programs.map((p, i) => (
              <SwiperSlide key={i}>
                <Card className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="p-6">
                    <CardHeader className="text-left pb-4">
                      <div className="mb-4 p-4 bg-gray-50 rounded-full w-fit">🎓</div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {p.title}
                      </CardTitle>
                      <p className="text-sm text-blue-600 font-semibold mt-1">
                        {p.level}
                      </p>
                    </CardHeader>

                    <CardContent className="gap-6">
                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-sm text-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-blue-500" />
                          <span>{p.audience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-500" />
                          <span>{p.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{p.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span>{p.duration}</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-3 pt-2">
                        <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition">
                          View Course
                        </button>
                        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition">
                          Apply Now
                        </button>
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
