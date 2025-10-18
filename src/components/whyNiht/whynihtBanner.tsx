import React from "react";
import Link from "next/link";
import NihtBanner from "@/assets/niht-banner-image-mudit-sir.webp";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CTAItem {
  label: string;
  href: string;
}

interface WhyNihtBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string | null;
  breadcrumbs?: BreadcrumbItem[];
  cta?: CTAItem;
}

const WhyNihtBanner: React.FC<WhyNihtBannerProps> = ({
  backgroundImage = NihtBanner.src,
}) => {
  return (
    <header
      className="relative overflow-hidden h-[60vh] min-h-[400px] w-full"
      aria-label="Page banner"
    >
      {/* ✅ Background Image */}
      <div
        className={`absolute inset-0 ${
          backgroundImage
            ? "bg-cover bg-center"
            : "bg-gradient-to-r from-slate-50 to-white"
        }`}
        style={
          backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
        }
        aria-hidden="true"
      />

      {/* ✅ Overlay */}
      <div
        className="absolute inset-0 bg-black/35 mix-blend-multiply"
        aria-hidden="true"
      />
    </header>
  );
};

export default WhyNihtBanner;
