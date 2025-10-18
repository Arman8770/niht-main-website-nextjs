"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Gift } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface CarouselItem {
  id: number | string;
  imageUrl: string;
  title: string;
  subtitle: string;
  rating: number;
  discountPercentage?: number;
}

export interface OffersCarouselProps {
  offerIcon?: React.ReactNode;
  offerTitle: string;
  offerSubtitle: string;
  ctaText: string;
  onCtaClick: () => void;
  items: CarouselItem[];
  className?: string;
}

const ItemCard = ({ item }: { item: CarouselItem }) => (
  <motion.div
    className="group w-64 flex-shrink-0 cursor-pointer snap-start"
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="overflow-hidden rounded-xl border border-blue-400 bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.title}
          width={256}
          height={160}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.discountPercentage && (
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="absolute bottom-2 right-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 text-xs font-semibold text-white shadow-md"
          >
            {item.discountPercentage}% OFF
          </motion.div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold leading-tight text-gray-900 dark:text-white">{item.title}</h3>
            <div className="ml-2 flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400">
              <Star className="h-3 w-3" />
              <span>{item.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
        </div>

        {/* Explore Course Button */}
        <Button
          variant="cta"
          className="mt-4 w-full text-sm font-medium"
          onClick={() => console.log(`Explore ${item.title}`)}
        >
          Explore Course
        </Button>
      </div>
    </div>
  </motion.div>
);

export const OffersCarousel = React.forwardRef<HTMLDivElement, OffersCarouselProps>(
  ({ offerIcon, offerTitle, offerSubtitle, ctaText, onCtaClick, items, className }, ref) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = React.useState(true);
    const [isAtEnd, setIsAtEnd] = React.useState(false);

    const scroll = (direction: "left" | "right") => {
      if (!carouselRef.current) return;
      const card = carouselRef.current.querySelector<HTMLDivElement>("div > div")!;
      const cardWidth = card.offsetWidth + 16; // 16 = gap
      carouselRef.current.scrollBy({
        left: direction === "right" ? cardWidth : -cardWidth,
        behavior: "smooth",
      });
    };

    const checkScrollPosition = React.useCallback(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollWidth - scrollLeft - clientWidth < 10);
      }
    }, []);

    React.useEffect(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        carousel.addEventListener("scroll", checkScrollPosition);
        checkScrollPosition();
      }
      return () => {
        if (carouselRef.current) carouselRef.current.removeEventListener("scroll", checkScrollPosition);
      };
    }, [checkScrollPosition, items]);

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-6xl rounded-2xl border border-blue-400 bg-card p-6 shadow-md md:p-8",
          className
        )}
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Offer Section */}
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <div className="flex items-center gap-3">
              {offerIcon || <Gift className="h-7 w-7 text-primary" />}
              <p className="text-sm text-muted-foreground">Since you&apos;re flying with us!</p>
            </div>
            <h2 className="mt-4 text-3xl font-bold text-primary">{offerTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{offerSubtitle}</p>
            <Button variant="cta" className="mt-6 w-full max-w-xs lg:w-auto" onClick={onCtaClick}>
              {ctaText}
            </Button>
          </div>

          {/* Carousel Section */}
          <div className="relative lg:col-span-9">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              <motion.div className="flex gap-4">
                {items.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            {!isAtStart && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-10 w-10 shadow-lg z-10 opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}
            {!isAtEnd && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full h-10 w-10 shadow-lg z-10 opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

OffersCarousel.displayName = "OffersCarousel";
