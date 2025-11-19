"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgLAN1 from "@/assets/LifeAtNiht/l-1.webp";
import imgLAN2 from "@/assets/LifeAtNiht/l-2.webp";
import imgLAN4 from "@/assets/LifeAtNiht/l-4.webp";
import imgLAN5 from "@/assets/LifeAtNiht/l-5.webp";
import imgLAN6 from "@/assets/LifeAtNiht/l-6.webp";
import imgLAN8 from "@/assets/LifeAtNiht/l-8.webp";
import imgFridayFun from "@/assets/LifeAtNiht/flimy friday.jpg";
import imgVid1 from "@/assets/LifeAtNiht/Navarang 2.0.jpg";
import imgVid2 from "@/assets/LifeAtNiht/Womans Day.jpg";
import imgVid3 from "@/assets/LifeAtNiht/imginsta (1).jpg";
import imgVid4 from "@/assets/LifeAtNiht/imginsta (2).jpg";
import imgVid5 from "@/assets/LifeAtNiht/imginsta (3).jpg";
import imgVid6 from "@/assets/LifeAtNiht/imginsta (4).jpg";
import imgVid7 from "@/assets/LifeAtNiht/niht-moments.png";
import imgVid8 from "@/assets/LifeAtNiht/imginsta (6).jpg";
import imgVid9 from "@/assets/LifeAtNiht/holi.jpg";

interface GalleryItem {
  src: string;
  name: string;
  type: "image" | "video";
  videoUrl?: string;
}

const gallerySet1: GalleryItem[] = [
  { src: imgLAN1.src, name: "Team Celebration", type: "image" },
  { src: imgVid1.src, name: "Navaratri Celebration", type: "video", videoUrl: "https://www.youtube.com/shorts/mv9SzMWP2B0" },
  { src: imgLAN2.src, name: "Office Moments", type: "image" },
  { src: imgVid2.src, name: "Women's Day Celebration", type: "video", videoUrl: "https://www.youtube.com/shorts/_GND4pKbPio" },
  { src: imgLAN4.src, name: "Fun Friday", type: "image" },
  { src: imgVid3.src, name: "NIHT Studio", type: "video", videoUrl: "https://www.youtube.com/shorts/-CarlgKzmf4" },
  { src: imgLAN5.src, name: "Cultural Fest", type: "image" },
  { src: imgVid4.src, name: "NIHT Diwali Celebration", type: "video", videoUrl: "https://www.youtube.com/shorts/WoiauYGTTmA" },
  { src: imgLAN6.src, name: "Hackathon Day", type: "image" },
];

const gallerySet2: GalleryItem[] = [
  { src: imgVid5.src, name: "Bisleri Challenge", type: "video", videoUrl: "https://www.youtube.com/shorts/vw55h-sLEvo" },
  { src: imgLAN8.src, name: "Office Moments", type: "image" },
  { src: imgVid6.src, name: "Celebrating 20th Founder's Day", type: "video", videoUrl: "https://youtube.com/shorts/8lhxG45SCp4" },
  { src: imgLAN4.src, name: "Fun Friday", type: "image" },
  { src: imgVid7.src, name: "Niht Moments", type: "video", videoUrl: "https://www.youtube.com/shorts/2Fpgvqi-8CU" },
  { src: imgLAN5.src, name: "Cultural Fest", type: "image" },
  { src: imgVid8.src, name: "Diwali Celebration", type: "video", videoUrl: "https://www.youtube.com/shorts/mE8yBiPkt_g" },
  { src: imgLAN6.src, name: "Hackathon Day", type: "image" },
  { src: imgVid9.src, name: "Holi Celebration", type: "video", videoUrl: "https://www.youtube.com/shorts/fK-Bg5tzrAI" },
  { src: imgFridayFun.src, name: "Refreshing Filmy Friday", type: "video", videoUrl: "https://www.youtube.com/shorts/7mkKpLrmbaI" },
];

// 🎥 Extract YouTube Video ID
function extractYouTubeId(url?: string): string {
  if (!url) return "";
  const match = url.match(/(?:youtube\.com\/shorts\/|youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

const LifeAtNihtGallery: React.FC = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState<{ [key: string]: boolean }>({});

  const handleVideoLoad = (videoId: string) => {
    setVideoLoaded(prev => ({ ...prev, [videoId]: true }));
  };

  return (
    <section className="relative w-full overflow-hidden py-10 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
        Life at NIHT
      </h2>

      <MarqueeRow
        items={gallerySet1}
        direction="left"
        setSelected={setSelected}
        setIsHovering={setIsHovering}
        isHovering={isHovering}
      />
      <MarqueeRow
        items={gallerySet2}
        direction="right"
        setSelected={setSelected}
        setIsHovering={setIsHovering}
        isHovering={isHovering}
      />

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.type === "video" ? (
                <div className="relative w-[90vw] max-w-[480px] h-[80vh] overflow-hidden rounded-xl bg-black flex items-center justify-center">
                  {/* Loading State */}
                  {!videoLoaded[extractYouTubeId(selected.videoUrl)] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                  )}

                  <iframe
                    key={selected.videoUrl} // Force re-render when video changes
                    src={`https://www.youtube.com/embed/${extractYouTubeId(selected.videoUrl)}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${extractYouTubeId(selected.videoUrl)}&rel=0&controls=1&showinfo=0&modestbranding=1`}
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    onLoad={() => handleVideoLoad(extractYouTubeId(selected.videoUrl))}
                    title={selected.name}
                  />


                  {/* Safari Autoplay Fallback - Manual Play Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${videoLoaded[extractYouTubeId(selected.videoUrl)] ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // This will trigger autoplay after user interaction in Safari
                      const iframe = document.querySelector('iframe');
                      if (iframe) {
                        const src = iframe.src;
                        iframe.src = src.replace('autoplay=1', 'autoplay=0');
                        setTimeout(() => {
                          iframe.src = src;
                        }, 100);
                      }
                    }}
                  >
                    <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.618v4.764a1 1 0 001.555.832l4.197-2.42a1 1 0 000-1.664z"
                        />
                      </svg>
                      {/* <span className="ml-2 font-medium">Play Video</span> */}
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={selected.src}
                  alt={selected.name}
                  className="w-full h-full object-contain bg-black rounded-lg"
                />
              )}
              {/* <div className="text-center text-white mt-3 text-lg absolute bottom-[-20px] left-0 right-0 bg-black/60 py-2 backdrop-blur-sm">
                {selected.name}
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LifeAtNihtGallery;

// --------------------------------------------------
// Reusable Smooth MarqueeRow Component (No Changes)
// --------------------------------------------------
interface MarqueeRowProps {
  items: GalleryItem[];
  direction: "left" | "right";
  setSelected: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
  isHovering: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  setSelected,
  setIsHovering,
  isHovering,
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const singleWidthRef = useRef<number>(0);
  const pauseTimeoutRef = useRef<number | null>(null);
  const [, setTick] = useState(0);
  const baseSpeed = 120;

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const total = track.scrollWidth;
      if (total === 0) {
        requestAnimationFrame(measure);
        return;
      }
      singleWidthRef.current = Math.floor(total / 2);
      offsetRef.current = ((offsetRef.current % singleWidthRef.current) + singleWidthRef.current) % singleWidthRef.current;
      setTick((t) => t + 1);
    };
    const id = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  useEffect(() => {
    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      const single = singleWidthRef.current || 1;
      if (!isHovering && single > 1) {
        const px = (baseSpeed * delta) / 1000;
        if (direction === "left") {
          offsetRef.current += px;
          if (offsetRef.current >= single) offsetRef.current -= single;
        } else {
          offsetRef.current -= px;
          if (offsetRef.current < 0) offsetRef.current += single;
        }
        setTick((t) => t + 1);
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [direction, isHovering]);

  const handleArrow = (dir: "left" | "right") => {
    const amt = 300;
    setIsHovering(true);
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    if (direction === "left") offsetRef.current += dir === "right" ? amt : -amt;
    else offsetRef.current -= dir === "right" ? amt : -amt;
    const single = singleWidthRef.current || 1;
    offsetRef.current = ((offsetRef.current % single) + single) % single;
    setTick((t) => t + 1);
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsHovering(false);
      pauseTimeoutRef.current = null;
    }, 900);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const transformValue = `translateX(${-offsetRef.current}px)`;
  const renderItems = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden mb-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button
        onClick={() => handleArrow("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 text-blue-600 hover:bg-white/60"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => handleArrow("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/60 text-blue-600 hover:bg-white/60"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 whitespace-nowrap will-change-transform"
          style={{
            transform: transformValue,
            transition: isHovering ? "transform 0.12s linear" : "none",
          }}
        >
          {renderItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="relative inline-block group cursor-pointer rounded-lg overflow-hidden shadow-md flex-shrink-0 w-72 h-64"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-medium">{item.name}</p>
              </div>
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 text-white bg-black/50 rounded-full p-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.618v4.764a1 1 0 001.555.832l4.197-2.42a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};