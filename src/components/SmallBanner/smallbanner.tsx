"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/NIHT-LOGO-black-2.png";
import { usePopup } from "../form/PopupProvider";

interface SmallBannerProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function SmallBanner({ 
  title = "Become the Scaling Engine Not Just a Marketer.", // Default text
  buttonText = "Enroll Now", // Default button text
  onButtonClick 
}: SmallBannerProps) {
  const {openPopup}=usePopup();
  return (
    <section className="body-font bg-white">
      <div className="container mx-auto px-5 py-12 md:py-6">
        <div className="bg-gradient-to-l from-blue-800 to-blue-700 shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between p-8">
          
          {/* Logo / Image Section */}
          <div className="flex space-x-4">
            <Image 
              src={HeroImage} 
              alt="NIHT Banner" 
              width={100} 
              height={100} 
              className="w-20 h-auto pb-4 md:pb-0 object-cover" 
            />
          </div>

          {/* Dynamic Text Content */}
          <div className="text-center  mb-6 md:mb-0 flex-1 md:pl-8">
            <h1 className="text-xl md:text-3xl font-bold text-white">
              {title}
            </h1>
          </div>

          {/* Button */}
          <Button 
            variant="cta" 
            size={"lg"} 
            className="items-center justify-center"
            onClick={openPopup}
          >
            {buttonText}
          </Button>

        </div>
      </div>
    </section>
  );
}