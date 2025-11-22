"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "@/assets/niht-ai-hero-cover.webp";
import { usePopup } from "../form/PopupProvider";
import { courses } from "@/app/data/courses";
import NihtImg from "@/assets/niht-digital-marketing.png";
import NihtImg2 from "@/assets/niht-digital-marketing-logo.png";
import ex20img from "@/assets/20year.png";



interface Props {
  slug: string;
}

const CourseBannerSection = ({ slug }: Props) => {
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <p>Course not found</p>;
  // const { openPopup } = usePopup();

  return (
    <section className="relative bg-[#FAF8F6]">
      <div className="container mx-auto px-6   py-8 lg:py-12 mt-12 md:mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">

          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
                Job Guarantee
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
                Dual Mentorship
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {course.title}
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Develop the skills of an AI professional, master the latest Gen AI
              tools, and learn from experts. All in an online, self-paced setup
              with job assistance at graduation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                // onClick={openPopup}
                variant="cta"
                size={"lg"}
                className="btn-shine"
              >
                Get a free short course
              </Button>
              <Button
                // onClick={openPopup}
                variant="outline"
                size={"lg"}
                className="btn-shine"
              >
                Apply now
              </Button>
            </div>

            {/* Enrolled Students */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <Image
                  src={NihtImg}
                  alt="Student"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src={ex20img}
                  alt="Student"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src={NihtImg2}
                  alt="Student"
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
              <Image
                src={heroImage}
                alt="Student"
                fill
                className="rounded-2xl object-cover"
                priority
              />

              {/* Rating badge */}
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 flex flex-col items-end gap-1">
                <span className="text-yellow-500 text-lg leading-none">★★★★★</span>
                <span className="text-sm font-medium text-gray-700 leading-none">
                  1,667 / 5 Stars
                </span>
                <span className="text-xs text-gray-500 font-semibold leading-none">
                  COURSE REPORT
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CourseBannerSection;
