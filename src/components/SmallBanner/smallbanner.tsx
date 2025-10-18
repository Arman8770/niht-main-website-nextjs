"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import HeroImage from "@/assets/NIHT-LOGO-black-2.png";

export default function SmallBanner() {
  return (
    <section className="body-font">
      <div className="container mx-auto px-5 py-12">
        <div className="bg-gradient-to-l from-blue-800 to-blue-700 shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between p-8">
          {/* Text Content */}
          <div className="flex space-x-4">
            <Image src={HeroImage} alt="NIHT Banner" width={100} height={100} className="w-20 h-auto pb-4 md:pb-0 object-cover" />
           
          </div>
          <div className="text-center md:text-left mb-6 md:mb-0">
            
            <h1 className="text-2xl md:text-3xl text font-bold text-white">
             Get Started With Us
            </h1>
            
          </div>
          

          {/* Buttons */}
          
            <Button variant="cta" size={"lg"} className="items-center justify-center">Enroll Now</Button>

        </div>
      </div>
    </section>
  );
}
