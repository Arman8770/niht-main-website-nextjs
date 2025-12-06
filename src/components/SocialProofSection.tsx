"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { 
  Star, Building2, Users, TrendingUp, Calendar, ChevronLeft, ChevronRight 
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// CSS Imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Asset Imports (Keeping your existing imports)
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
import Play from "@/assets/svg-images/play-svgrepo-com.svg";

// --- Components ---

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay?: number;
}

function StatCounter({ icon, value, label, suffix, delay = 0 }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Configure spring physics
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  
  // Transform logic: 
  // If the number is an integer (like 52234), show 0 decimals.
  // If it's a float (like 3.6), show 1 decimal.
  const displayValue = useTransform(springValue, (latest) => {
    if (value % 1 === 0) {
      // For large integers, we can just return the rounded number
      // Note: useTransform expects a return of string or number. 
      // To add commas (e.g., 52,234), we return a string.
      return Math.round(latest).toLocaleString(); 
    }
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  return (
    <motion.div
      ref={countRef}
      className="p-6 bg-gradient-to-l from-white to-blue-50 shadow-soft rounded-xl flex flex-col items-center text-center h-full justify-center border border-blue-100/50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-white shadow-sm">
        {icon}
      </motion.div>

      <div className="text-3xl lg:text-4xl font-bold flex items-center text-foreground">
        {/* We use a motion value here. Framer Motion handles the text update. */}
        <motion.span>{displayValue}</motion.span>
        <span className="text-blue-700/80 ml-1">{suffix}</span>
      </div>
      <p className="text-[#202e44]/70 text-sm mt-2 font-medium">{label}</p>
    </motion.div>
  );
}

const SocialProofSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      rawString: "52,234+", // Kept for reference
      value: 52234,
      suffix: "+",
      label: "Students Trained",
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      rawString: "48,577+",
      value: 48577,
      suffix: "+",
      label: "Successfully Placed",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      rawString: "3.6LPA",
      value: 3.6,
      suffix: " LPA",
      label: "Highest Package",
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      rawString: "93%",
      value: 93,
      suffix: "%",
      label: "Placement Rate",
    },
  ];

  const testimonialVideos = [
    { image: Payal, src: "https://www.youtube.com/watch?v=edtKqYsv2uA" },
    { image: Kushal, src: "https://www.youtube.com/shorts/4K9UsDh4-90" },
    { image: Anvi, src: "https://www.youtube.com/shorts/0qUOgyZA8H8" },
    { image: Sulekha, src: "https://www.youtube.com/shorts/TdL3s450t5k" },
    { image: Rishik, src: "https://www.youtube.com/shorts/NFWEz7CoL3o" },
    { image: Vanshika, src: "https://www.youtube.com/shorts/WO6m8-PKmJE" },
    { image: Shruti, src: "https://www.youtube.com/shorts/j723M-h-X8U" },
    { image: Nabanita, src: "https://www.youtube.com/shorts/nLu-lMNF7Vs" },
    { image: Lekha, src: "https://www.youtube.com/shorts/Pq1LQXzvELc" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mutedIndex, setMutedIndex] = useState<number | null>(null);

  function extractYouTubeID(url: string) {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  }

  return (
    <section id="real-success" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <a href="#voices">
            <Button variant="outline" className="btn-shine mb-4 text-brand-accent border-brand-accent">
              Success Stories
            </Button>
          </a>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
             Success That Speaks for Itself
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From classroom to top companies, our students have turned practical skills into powerful careers. Their stories reflect the impact of real training, real projects and real industry exposure.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 items-stretch">
          
          {/* LEFT COLUMN — Stats Grid (Using StatCounter) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1} // Staggered animation effect
              />
            ))}
          </div>

          {/* RIGHT COLUMN — Video Slider */}
          <div id="voices" className="relative w-full h-full mt-2 md:mt-8">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              loop
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="" // Add padding for pagination bullets
            >
              {testimonialVideos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 relative group cursor-pointer border border-gray-100">
                    
                    {/* Thumbnail */}
                    <Image
                      src={video.image}
                      alt="video thumbnail"
                      className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-0" : "opacity-100"
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

                    {/* Play Button Overlay */}
                    {activeIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                        <span className="absolute inline-flex w-16 h-16 rounded-full bg-white/30 animate-ping opacity-75"></span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                          }}
                          className="relative w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group-hover:bg-white"
                        >
                          <Image src={Play} alt="Play" className="w-6 h-6 ml-1 opacity-80" />
                        </button>
                      </div>
                    )}

                    {/* Mute Toggle */}
                    {activeIndex === index && (
                      <button
                        onClick={() => setMutedIndex((m) => (m === index ? null : index))}
                        className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur flex items-center justify-center hover:bg-black/70 transition-colors"
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