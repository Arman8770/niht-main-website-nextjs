"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "@/assets/niht-ai-hero-cover.webp";
import { usePopup } from "../form/PopupProvider";
import { courses } from "@/app/data/courses";
import NihtImg from "@/assets/course/profile/Payel-Sadhya.png";
import NihtImg2 from "@/assets/course/profile/Kushal-Agarwal.png";
import NihtImg3 from "@/assets/course/profile/Ishani-Das.png";
import ex20img from "@/assets/20year.png";

// 1. Apne logo images yahan import karein (Example paths)
import GoogleLogo from "@/assets/course/logos/Google_logo.png";
import FbLogo from "@/assets/course/logos/Facebook-Logo.png";
import LinkedInLogo from "@/assets/course/logos/linkedIn-logo.png";
import MicrosoftLogo from "@/assets/course/logos/microsoft-logo.png";
// import JainLogo from "@/assets/course/logos/Jainx-logo.png";
import HoverPreviewCard from "../ui/videoPlay/hover-paly";
import { Play } from "lucide-react";

interface Props {
  slug: string;
}

const CourseBannerSection = ({ slug }: Props) => {
  // 1. Always call hooks at the very top
  const { openPopup } = usePopup();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <p>Course not found</p>;



  return (
    <section className="relative bg-[#FAF8F6]">
      <div className="container mx-auto px-6 py-8 lg:py-12 mt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">

          {/* Left Content */}
          <div className="space-y-2 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">

            {/* Badges */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
                Job Guarantee
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
                Dual Mentorship
              </Badge>
            </div> */}

            {/* Headline with Gradient Function Applied */}
            <div className="mb-4 block lg:hidden">
              <h1 className="text-[1.8rem] md:text-[2.1rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 leading-tight">
                {course.title}
              </h1>
              <h1 className="text-[1.8rem] md:text-[2.1rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 leading-tight">
                {course.title2}
              </h1>
              <h1 className="text-[1.6rem] md:text-[2.1rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 leading-tight">
                {course.title3}
              </h1>
            </div>
            <div className="mb-4 hidden lg:block">
              <h1 className="text-[1.8rem] md:text-[2.1rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 leading-tight">
                {course.title} {course.title2}
              </h1>
              <h1 className="text-[1.6rem] md:text-[2.1rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 leading-tight">
                {course.title3}
              </h1>
            </div>

            {/* Subtext Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {course.description}
            </p>
            {/* <span className="text-lg font-bold text-Black/90">Become job ready. Become hire worthy. Become unstoppable.</span> */}


            {/* --- NEW IMAGE SECTION ADDED HERE --- */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center md:items-left gap-6 pt-1  rounded-lg">
              <Image src={GoogleLogo} alt="Google" height={24} className="h-7 w-auto object-contain opacity-100 hover:opacity-80 transition-all" />
              <Image src={FbLogo} alt="Facebook" height={24} className="h-7 w-auto object-contain opacity-100 hover:opacity-80 transition-all" />
              <Image src={LinkedInLogo} alt="LinkedIn" height={24} className="h-7 w-auto object-contain opacity-100 hover:opacity-80 transition-all" />
              <Image src={MicrosoftLogo} alt="Microsoft" height={24} className="h-7 w-auto object-contain opacity-100 hover:opacity-80 transition-all" />
            </div>

            {/* ------------------------------------ */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={openPopup}
                variant="cta"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Enroll Now
              </Button>
              <Button
                onClick={openPopup}
                variant="secondary_cta"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg text-black hover:text-blue-600 btn-shine border-black hover:border-blue-600 px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Download Free Brochure
              </Button>
            </div>

            {/* Enrolled Students */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <Image
                  src={NihtImg}
                  alt="Payel-Sadhya"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src={NihtImg2}
                  alt="Kushal-Agarwal"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src={NihtImg3}
                  alt="Ishani-Das"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <span className="text-gray-700 text-sm">
                +14,000 NIHT students enrolled
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end mt-10 lg:mt-20">
            <div className="relative w-full aspect-[1/1]">
              {/* <Image
                src={heroImage}
                alt="Student"
                fill
                className="rounded-2xl object-cover"
                priority
              /> */}

              <HoverPreviewCard src="https://youtu.be/3tImUc2NtKs?si=lLC8-jRQGjDk_9KV" />



              {/* Rating badge */}
              {/* <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex flex-col items-end gap-1">
                <span className="text-yellow-500 text-lg leading-none">★★★★★</span>
                <span className="text-sm font-medium text-gray-700 leading-none">
                  1,667 / 5 Stars
                </span>
                <span className="text-xs text-gray-500 font-semibold leading-none">
                  COURSE REPORT
                </span>
              </div> */}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CourseBannerSection;