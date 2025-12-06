"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, Volume1, VolumeX, Loader2 } from "lucide-react";
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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const [youTubeId, setYouTubeId] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Audio State
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  // 1. Detect YouTube URL
  useEffect(() => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = src.match(youtubeRegex);

    if (match && match[1]) {
      setIsYouTube(true);
      setYouTubeId(match[1]);
    } else {
      setIsYouTube(false);
      setYouTubeId(null);
    }
  }, [src]);

  // 2. Unified Play/Pause Logic (Safe for Safari/iPhone)
  const togglePlay = useCallback((shouldPlay: boolean) => {
    setIsPlaying(shouldPlay);

    // --- Handle YouTube ---
    if (isYouTube && iframeRef.current?.contentWindow) {
      const command = shouldPlay ? "playVideo" : "pauseVideo";
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
    } 
    // --- Handle Local Video ---
    else if (videoRef.current) {
      if (shouldPlay) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay prevented by browser (needs interaction):", error);
            // Optional: Mute and try again if audio is the issue
            // videoRef.current!.muted = true;
            // videoRef.current!.play();
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isYouTube]);

  // 3. Unified Volume Logic
  const updateVolume = useCallback((newVol: number, newMuteState: boolean) => {
    // Local Video
    if (videoRef.current) {
      videoRef.current.volume = newVol / 100;
      videoRef.current.muted = newMuteState;
    }

    // YouTube
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "setVolume",
          args: [newVol],
        }),
        "*"
      );
      const muteCommand = newMuteState ? "mute" : "unMute";
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: muteCommand, args: [] }),
        "*"
      );
    }
  }, []);

  // Sync Volume Effects
  useEffect(() => {
    updateVolume(volume, isMuted);
  }, [volume, isMuted, iframeLoaded, updateVolume]);

  // 4. Hover Handlers (Desktop)
  const handleMouseEnter = () => {
    setIsHovering(true);
    // Auto-play on hover
    if (!isPlaying) togglePlay(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIframeLoaded(false); // Reset iframe on leave to stop audio completely
    togglePlay(false);
  };

  // 5. Click Handler (Mobile/Tablet Support)
  const handleContainerClick = () => {
    // Toggle play state on click
    togglePlay(!isPlaying);
  };

  // Generate YouTube URL with iOS/Safari fixes
  const getYouTubeUrl = () => {
    if (!youTubeId) return "";
    // playsinline=1 is CRITICAL for iPhone/Safari to play inside the div instead of fullscreen
    return `https://www.youtube.com/embed/${youTubeId}?autoplay=1&mute=0&loop=${loop ? 1 : 0}&playlist=${youTubeId}&controls=0&modestbranding=1&rel=0&enablejsapi=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;
  };

  return (
    <div
      className={cn(
        // CHANGE: Changed aspect-video to aspect-square
        "relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-black group touch-manipulation",
        "transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick} // Click to toggle on mobile
    >
      {/* --- STATIC THUMBNAIL (Visible when not playing) --- */}
      <div className={cn(
        "absolute inset-0 z-10 transition-opacity duration-500",
        // Hide thumbnail instantly if YouTube iframe is ready or Local video is playing
        (isYouTube && iframeLoaded && isPlaying) || (!isYouTube && isPlaying) ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <img
          src={
            isYouTube
              ? poster || `https://img.youtube.com/vi/${youTubeId}/maxresdefault.jpg`
              : poster
          }
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
        
        {/* Big Center Play Button (Only shows when paused) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg transition-transform group-hover:scale-110">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      {/* --- YOUTUBE PLAYER --- */}
      {isYouTube && isHovering && youTubeId && (
        <div className="absolute inset-0 z-0 bg-black">
           {/* Loader */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
          
          <iframe
            ref={iframeRef}
            src={getYouTubeUrl()}
            className={cn(
              "w-full h-full object-cover pointer-events-none", // Important: pointer-events-none lets clicks pass to container
              iframeLoaded ? "opacity-100" : "opacity-0"
            )}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      )}

      {/* --- LOCAL VIDEO PLAYER --- */}
      {!isYouTube && (
        <video
          ref={videoRef}
          src={src}
          loop={loop}
          playsInline // CRITICAL for iPhone Safari
          className={cn(
            "absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* --- BOTTOM CONTROLS (Only visible when playing) --- */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            // Stop propagation prevents clicking controls from toggling the video pause
            onClick={(e) => e.stopPropagation()} 
            className="absolute bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
          >
            <div className="flex items-center gap-4 w-full bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/10 shadow-lg">
              
              {/* Play/Pause Button */}
              <button
                onClick={() => togglePlay(!isPlaying)}
                className="text-white hover:text-blue-400 transition-colors focus:outline-none shrink-0"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
              </button>

              <div className="h-4 w-px bg-white/20 mx-1 shrink-0" />

              {/* Mute/Unmute */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-blue-400 transition-colors focus:outline-none shrink-0"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : volume < 50 ? (
                  <Volume1 className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              {/* Volume Slider */}
              <div className="relative w-full flex items-center group/slider">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setVolume(val);
                    if (val > 0 && isMuted) setIsMuted(false);
                  }}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-125"
                />
              </div>

              <span className="text-xs text-white/80 font-mono w-9 text-right shrink-0">
                {isMuted ? "0%" : `${volume}%`}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}