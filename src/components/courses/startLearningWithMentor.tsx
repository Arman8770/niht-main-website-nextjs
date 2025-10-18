"use client"
import * as React from "react";
import { CarouselItem, OffersCarousel } from "../ui/courseCard/freeLearn";
import Gentalmen from "@/assets/alumni/gentalman.png"

// Mock data for digital marketing courses
const mockCourses: CarouselItem[] = [
  {
    id: 1,
    imageUrl: Gentalmen.src,
    title: "SEO Mastery",
    subtitle: "Learn advanced SEO strategies",
    rating: 4.8,

    discountPercentage: 28,
  },
  {
    id: 2,
    imageUrl: Gentalmen.src,
    title: "Social Media Marketing",
    subtitle: "Grow your brand on social media",
    rating: 4.6,

    discountPercentage: 33,
  },
  {
    id: 3,
    imageUrl:Gentalmen.src,
    title: "PPC & Google Ads",
    subtitle: "Run successful ad campaigns",
    rating: 4.7,

    discountPercentage: 36,
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&q=80",
    title: "Email Marketing",
    subtitle: "Convert leads with email campaigns",
    rating: 4.5,

    discountPercentage: 30,
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    title: "Content Marketing",
    subtitle: "Create content that converts",
    rating: 4.9,

    discountPercentage: 30,
  },
];

const DigitalMarketingCarousel = () => {
  return (
    <div className="bg-gray-100 flex min-h-[500px] w-full items-center justify-center bg-background p-4">
      <OffersCarousel
        offerTitle="Upskill with the Best Courses"
        offerSubtitle=""
        ctaText="Explore Courses"
        onCtaClick={() => alert("Explore Courses")}
        items={mockCourses}
      />
    </div>
  );
};

export default DigitalMarketingCarousel;
