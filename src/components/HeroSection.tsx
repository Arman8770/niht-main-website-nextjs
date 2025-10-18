"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Google from "@/assets/Social_Icons/Google.webp";
import heroImage from "@/assets/Niht-Full-Hero-Banner.webp";
import heroImage2 from "@/assets/niht-banner-image-mudit-sir.webp";
import heroImage3 from "@/assets/niht-banner-lekha.webp";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: heroImage,
    },
    {
      id: 2,
      title: "Dolor sit amet consectetur",
      subtitle:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      img: heroImage2,
    },
    {
      id: 3,
      title: "Sed ut perspiciatis unde omnis",
      subtitle:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      img: heroImage3,
    },
  ];

  return (
    <section className="relative pt-24 md:pt-32">
      <div className="relative">
       

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={false}
          // navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          loop
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover -z-10"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content */}
                <div className="relative container mx-auto px-6 text-center lg:text-left space-y-6 z-10">
                  {/* Badges */}
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <Badge className="badge-bounce-horizontal btn-shine relative overflow-hidden bg-blue-400/20 text-white border-white/30 px-4 py-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-400/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-white/20 before:animate-wave">
                      <Award className="w-4 h-4 mr-2 inline-block" />
                      AI-Powered
                    </Badge>
                    <Badge className="badge-bounce-horizontal btn-shine relative overflow-hidden bg-blue-400/20 text-white border-white/30 px-4 py-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-400/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-white/20 before:animate-wave">
                      <Image
                        src={Google}
                        alt="Google Partner"
                        className="w-3 h-3 mr-2 inline-block"
                      />
                      Google Partner
                    </Badge>
                    <Badge className="badge-bounce-horizontal btn-shine relative overflow-hidden bg-blue-400/20 text-white border-white/30 px-4 py-1 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-400/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-white/20 before:animate-wave">
                      <TrendingUp className="w-4 h-4 mr-2 inline-block" />
                      Since 2005
                    </Badge>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                    {slide.subtitle}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto lg:mx-0">
                    <div className="text-center">
                      <div className="text-2xl md:text-4xl font-bold text-[#A3CD39]">
                        52K+
                      </div>
                      <div className="text-white/80 text-sm">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-4xl font-bold text-[#A3CD39]">
                        48K+
                      </div>
                      <div className="text-white/80 text-sm">Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-4xl font-bold text-[#A3CD39]">
                        20+
                      </div>
                      <div className="text-white/80 text-sm">Years</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Button
                      variant="cta"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-4"
                    >
                      Enroll Now
                    </Button>
                    <Button
                      variant="secondary_cta"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-4 flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
