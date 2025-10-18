"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";
import Image from "next/image";

import Play from "@/assets/svg-images/play-svgrepo-com.svg";
import Master from "@/assets/video-image/niht master.jpg";
import Podcasting from "@/assets/video-image/Product-Shoot-Session.jpg";
import Experiential from "@/assets/video-image/Experiential-Learning.jpg";
import VRLearning from "@/assets/video-image/vrLearning.jpg";

const ExperientialLeaning = () => {
  const portfolioItems = [
    {
      image: Master,
      src: "https://www.youtube.com/shorts/qENXuffQKPE",
    },
    {
      image: Experiential,
      src: "https://www.youtube.com/shorts/C0hWytP3V44",
    },
    {
      image: Podcasting,
      src: "https://www.youtube.com/shorts/oXKqwDdjVwQ",
    },
    {
      image: VRLearning,
      src: "https://www.youtube.com/shorts/NzIqCWzsPAE",
    },
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
    <section className="py-12 lg:py-20 bg-gradient-to-r from-brand-primary/10 to-blue-50">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-foreground mb-4 md:mb-8">
          Experiential Learning @ NIHT
        </h3>

        <div className="relative w-full mx-auto">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            loop
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
          >
            {portfolioItems.map((video, index) => (
              <SwiperSlide key={index} className="flex !h-auto">
                <div className="w-full h-full aspect-[9/16] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 relative group cursor-pointer">
                  {/* Thumbnail overlay */}
                  <Image
                    src={video.image}
                    alt="video thumbnail"
                    className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                      activeIndex === index ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* YouTube iframe */}
                  {activeIndex === index && (
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-xl transition-opacity duration-300 opacity-100"
                      src={`https://www.youtube.com/embed/${extractYouTubeID(
                        video.src
                      )}?autoplay=1&mute=${
                        mutedIndex === index ? 1 : 0
                      }&playsinline=1`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {/* Play button */}
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

                  {/* Mute/unmute button */}
                  {activeIndex === index && (
                    <button
                      onClick={() =>
                        setMutedIndex((muted) =>
                          muted === index ? null : index
                        )
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
    </section>
  );
};

export default ExperientialLeaning;
