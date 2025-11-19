"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Rocket } from "lucide-react";
import { usePopup } from "./form/PopupProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const TargetAudienceSection = () => {
  const { openPopup } = usePopup();

  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
      title: "Students & Freshers",
      description: "Kickstart your career with AI-driven digital marketing skills.",
      stats: "85% placed within 3 months",
      benefits: [
        "Start earning while studying",
        "Build impressive portfolio",
        "Get industry-ready skills",
        "100% placement assistance"
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: "Working Professionals",
      description: "Upskill or pivot to high-growth digital marketing roles.",
      stats: "Average 40% salary hike",
      benefits: [
        "Weekend & evening batches",
        "Learn while working",
        "Career transition support",
        "Salary hike"
      ],
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Entrepreneurs & Business Owners",
      description: "Grow your business with proven AI-driven marketing strategies.",
      stats: "300% ROI in 6 months",
      benefits: [
        "Reduce marketing costs",
        "Increase online visibility",
        "Scale your business",
        "Build your team"
      ],
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Designed for Your Goals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether starting your career, switching fields, or scaling your business, we have the perfect program for you.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1.1}
          >
            {audiences.map((audience, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="
            rounded-2xl 
            border border-transparent 
            shadow-lg 
            bg-gradient-to-br from-white via-blue-50 to-blue-100 
            p-6 
            transform transition-all duration-300 
            hover:shadow-2xl hover:-translate-y-1 
            hover:scale-105
            overflow-hidden
            h-full
          "
                >
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <div className="flex items-center space-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-100 rounded-full">{audience.icon}</div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {audience.title}
                        </CardTitle>
                      </div>
                    </div>

                    <p className="text-gray-700">{audience.description}</p>

                    <ul className="space-y-2 text-gray-600 py-2 text-sm">
                      {audience.benefits.map((b, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Button onClick={openPopup} variant="cta" className="mt-4">
                      Book a call
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="
        rounded-2xl 
        border border-transparent 
        shadow-lg 
        bg-gradient-to-br from-white via-blue-50 to-blue-100 
        p-6 
        transform transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-1 
        hover:scale-105
        overflow-hidden
      "
            >
              <CardContent className="p-6 flex flex-col space-y-4">
                <div className="flex items-center space-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-full">{audience.icon}</div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {audience.title}
                    </CardTitle>
                  </div>
                </div>

                <p className="text-gray-700">{audience.description}</p>

                <ul className="space-y-2 text-gray-600 py-2 text-sm">
                  {audience.benefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={openPopup} variant="cta" className="mt-4">
                  Book a call
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;
