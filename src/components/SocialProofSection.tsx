"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building2, Users, TrendingUp, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Samsung from "@/assets/Social_Icons/samsung.png";
import HCL from "@/assets/Social_Icons/hcl.png";
import Oyo from "@/assets/Social_Icons/oyo-rooms.png";
import Wipro from "@/assets/Social_Icons/Wipro.webp";
import TCS from "@/assets/Social_Icons/tcs.png";
import Infosys from "@/assets/Social_Icons/infosys.jpg";
import Accenture from "@/assets/Social_Icons/accenture.png";
import Cognizant from "@/assets/Social_Icons/cognigent.jpg";
import Amazon from "@/assets/Social_Icons/amazon logo.png";
import Flipkart from "@/assets/Social_Icons/flipcart.png";
import Paytm from "@/assets/Social_Icons/paytm.png";
import Zomato from "@/assets/Social_Icons/zomato.png";
import Swiggy from "@/assets/Social_Icons/swiggy.png";
import BYJUS from "@/assets/Social_Icons/byjus.jpg";
import Unacademy from "@/assets/Social_Icons/unacadmy.png";
import Vedantu from "@/assets/Social_Icons/vedanto.png";

import Payal from "@/assets/video-image/payel-sadhya.jpg";
import Kushal from "@/assets/video-image/Kushal-Agarwal.jpg";
import Sidra from "@/assets/video-image/Unfiltered-@NIHT-25656.jpg";
import Anvi from "@/assets/video-image/Unfiltered2.jpg";
import Sulekha from "@/assets/video-image/Unfiltered-@NIHT-4684465.jpg";
import Rishik from "@/assets/video-image/cover-in.jpg";
import Vanshika from "@/assets/video-image/Unfiltered-@NIHT5+6.jpg";
import Shruti from "@/assets/video-image/Unfiltered-@NIHT566.jpg";
import Nabanita from "@/assets/video-image/Unfiltered-@NIHT645.jpg";
import Lekha from "@/assets/video-image/Lekha.jpg";
import { useRef, useState } from "react";
import Play from "@/assets/svg-images/play-svgrepo-com.svg";
import { Button } from "./ui/button";
import Image from "next/image";

const SocialProofSection = () => {
  // Testimonials data
  const placementPartners = [
    { name: "Samsung", logo: Samsung },
    { name: "HCL", logo: HCL },
    { name: "Oyo", logo: Oyo },
    { name: "Wipro", logo: Wipro },
    { name: "TCS", logo: TCS },
    { name: "Infosys", logo: Infosys },
    { name: "Accenture", logo: Accenture },
    { name: "Cognizant", logo: Cognizant },
    { name: "Amazon", logo: Amazon },
    { name: "Flipkart", logo: Flipkart },
    { name: "Paytm", logo: Paytm },
    { name: "Zomato", logo: Zomato },
    { name: "Swiggy", logo: Swiggy },
    { name: "BYJU'S", logo: BYJUS },
    { name: "Unacademy", logo: Unacademy },
    { name: "Vedantu", logo: Vedantu },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "52,234+",
      label: "Students Trained",
      description: ""
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      number: "48,577+",
      label: "Successfully Placed",
      description: ""
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      number: "93%",
      label: "Placement Rate",
      description: ""
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      number: "20+",
      label: "Years of Legacy",
      description: ""
    }
  ];

  // Replace testimonials array with videos
  const testimonialVideos = [
    {
      image: Payal,
      src: "https://www.youtube.com/watch?v=edtKqYsv2uA"
    },
    {
      image: Kushal,
      src: "https://www.youtube.com/shorts/4K9UsDh4-90"
    },
    {
      image: Anvi,
      src: "https://www.youtube.com/shorts/0qUOgyZA8H8"
    },
    {
      image: Sulekha,
      src: "https://www.youtube.com/shorts/TdL3s450t5k"
    },
    {
      image: Rishik,
      src: "https://www.youtube.com/shorts/NFWEz7CoL3o"
    },
    {
      image: Vanshika,
      src: "https://www.youtube.com/shorts/WO6m8-PKmJE"
    },
    {
      image: Shruti,
      src: "https://www.youtube.com/shorts/j723M-h-X8U"
    },
    {
      image: Nabanita,
      src: "https://www.youtube.com/shorts/nLu-lMNF7Vs"
    },
    {
      image: Lekha,
      src: "https://www.youtube.com/shorts/Pq1LQXzvELc"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mutedIndex, setMutedIndex] = useState<number | null>(null);

  function extractYouTubeID(url: string) {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  }

  return (
    <section id="real-success" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <a href="#voices">
            <Button variant="outline" className="btn-shine mb-4 text-brand-accent border-brand-accent">
              Success Stories
            </Button>
          </a>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Real Success, Real Careers
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with NIHT
          </p>
        </div>

        {/* Two-column layout FIXED for desktop */}
        <div className="grid grid-cols-1 gap-10 items-stretch">

          {/* LEFT COLUMN — Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
            {stats.map((stat, index) => {
              const numericValue = parseFloat(stat.number.replace(/[^0-9.]/g, ""));
              const hasPlus = stat.number.includes("+");
              const hasPercent = stat.number.includes("%");

              return (
                <Card
                  key={index}
                  className="rounded-xl bg-blue-50 border-0 shadow-soft flex flex-col h-full"
                >
                  <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                      {stat.icon}
                    </div>
                    <div className="flex flex-col flex-grow justify-center">
                      <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                        <CountUp end={numericValue} duration={2.5} separator="," />
                        {hasPlus && "+"}
                        {hasPercent && "%"}
                      </div>
                      <div className="font-semibold text-base text-black mb-1">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* RIGHT COLUMN — Video Slider */}
          <div id="voices" className="relative w-full h-full">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              loop
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }, // ❗ Fix for desktop layout
              }}
              className="h-full"
            >
              {testimonialVideos.map((video, index) => (
                <SwiperSlide key={index} className="flex !h-auto">
                  <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 relative group cursor-pointer">

                    {/* Thumbnail */}
                    <Image
                      src={video.image}
                      alt="video thumbnail"
                      className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${activeIndex === index ? "opacity-0" : "opacity-100"
                        }`}
                    />

                    {/* Video Player */}
                    {activeIndex === index && (
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-xl"
                        src={`https://www.youtube.com/embed/${extractYouTubeID(
                          video.src
                        )}?autoplay=1&mute=${mutedIndex === index ? 1 : 0}&playsinline=1`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}

                    {/* Play Button */}
                    {activeIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute inline-flex w-24 h-24 rounded-full bg-white/30 animate-ping"></span>
                        <span className="absolute inline-flex w-32 h-32 rounded-full bg-white/10 animate-ping delay-150"></span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                          }}
                          className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                        >
                          <Image src={Play} alt="Play" className="w-8 h-8" />
                        </button>
                      </div>
                    )}

                    {/* Sound Toggle */}
                    {activeIndex === index && (
                      <button
                        onClick={() =>
                          setMutedIndex((m) => (m === index ? null : index))
                        }
                        className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
                      >
                        {mutedIndex === index ? "🔇" : "🔊"}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;