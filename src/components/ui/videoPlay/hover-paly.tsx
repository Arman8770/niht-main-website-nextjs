"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type HoverPreviewCardProps = {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
};

export default function HoverPreviewCard({
  src,
  poster,
  className,
  loop = true,
}: HoverPreviewCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userGestureDone, setUserGestureDone] = useState(false);

  // Play video with sound
  const playVideoWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // First try to play with sound
      video.muted = false;
      await video.play();
      setIsPlaying(true);
      setIsMuted(false);
    } catch (err) {
      console.log("Sound play failed, trying muted:", err);
      // If sound fails, fallback to muted
      try {
        video.muted = true;
        await video.play();
        setIsPlaying(true);
        setIsMuted(true);
      } catch (fallbackErr) {
        console.log("Muted play also failed:", fallbackErr);
        setIsPlaying(false);
      }
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  };

  const handleHoverStart = () => {
    setIsHovering(true);
    
    // Create a synthetic user gesture if needed
    if (!userGestureDone) {
      // Simulate user interaction by programmatically clicking the video
      const video = videoRef.current;
      if (video) {
        // This helps with browser autoplay policies
        video.muted = false;
        video.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(() => {
          // If unmuted play fails, try muted
          video.muted = true;
          video.play().then(() => {
            setIsPlaying(true);
            setIsMuted(true);
          });
        });
        setUserGestureDone(true);
      }
    } else {
      void playVideoWithSound();
    }
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    pauseVideo();
  };

  // Auto-play on hover with better handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovering) {
      void playVideoWithSound();
    } else {
      pauseVideo();
    }
  }, [isHovering]);

  const togglePlay = async () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      await playVideoWithSound();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Reset video when component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Start muted to allow autoplay
      video.currentTime = 0;
    }
  }, []);

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group transition-transform hover:scale-105",
        className
      )}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={() => {
        // Clicking the container also counts as user gesture
        setUserGestureDone(true);
        void playVideoWithSound();
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        playsInline
        muted={isMuted}
        preload="metadata"
        className="w-full h-60 object-cover rounded-2xl"
      />

      {/* Overlay: Play/Pause Button */}
      <AnimatePresence>
        {(isHovering || !isPlaying) && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white rounded-full w-16 h-16 transition-colors"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status badge with mute toggle */}
      <div className="absolute left-3 bottom-3 flex items-center gap-2">
        <div className="text-xs text-white bg-black/30 px-2 py-1 rounded-full">
          {isPlaying ? "Playing" : "Paused"}
        </div>
        
        <Button
          size="icon"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="bg-black/20 hover:bg-black/40 text-white rounded-full w-8 h-8 transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Instructions for first interaction */}
      <AnimatePresence>
        {!userGestureDone && !isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-3 right-3 text-xs text-white bg-blue-600/80 px-2 py-1 rounded-full"
          >
            Click to enable sound
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}