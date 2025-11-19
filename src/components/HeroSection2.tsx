import { Button } from "@/components/ui/button";
import { TrendingUp, Play } from "lucide-react";
import heroImage from "@/assets/Niht-Hero-Banner.webp";
import Google from "@/assets/Social_Icons/Google.webp";
import FaceBook from "@/assets/Social_Icons/Meta-Logo.webp";
import { usePopup } from "./form/PopupProvider";
import Image from "next/image";

const HeroSectionV2 = () => {
  const { openPopup } = usePopup();

  return (
    <section className="relative min-h-[84vh] bg-[linear-gradient(135deg,hsl(233_47%_7%)_0%,hsl(217_91%_60%)_50%,hsl(218_87%_61%)_100%)] overflow-hidden mt-0 md:mt-32">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Grid layout — mobile: stacked, desktop: 2 columns */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[84vh]">
        {/* LEFT — Content (mobile: below image, desktop: left) */}
        <div className="relative flex items-center justify-center  px-4 py-10 lg:py-16 lg:px-16 order-2 lg:order-1">
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center text-white font-semibold tracking-wide">
              {/* Google Partner */}
              <div className="flex items-center gap-2 text-lg sm:text-base">
                <Image
                  src={Google}
                  alt="Google Partner"
                  className="w-8 h-8 sm:w-6 sm:h-6" // bigger on mobile, smaller on larger screens
                />
                <span className="">
                  Google Partner
                </span>
              </div>

              {/* Meta Partner */}
              <div className="flex items-center gap-2 text-lg sm:text-base">
                <Image
                  src={FaceBook}
                  alt="Meta Partner"
                  className="w-9 h-9 sm:w-6 sm:h-6"
                />
                <span>
                  Meta Partner
                </span>
              </div>

              {/* Since 2005 */}
              <div className="flex items-center gap-2 rounded-full px-3 py-1 pr-[10px] text-lg sm:text-base">
                <TrendingUp className="w-9 h-9 sm:w-6 sm:h-6 text-green-400" />
                <span>
                  Since 2005
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                India&apos;s #1 AI-Powered Digital Marketing Institute
              </h1>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                100% Job Assistance | Learn from Industry Experts | 20+ Global Certifications |
                Work on Live Projects | Hands-on training in NIHT&apos;s in-house studio |
                Global library of case studies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A3CD39]">52K+</div>
                <div className="text-white/80 text-sm">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A3CD39]">48K+</div>
                <div className="text-white/80 text-sm">Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A3CD39]">100%</div>
                <div className="text-white/80 text-sm">Job Assistance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A3CD39]">93%</div>
                <div className="text-white/80 text-sm">Placement Rate</div>
              </div>
            </div>

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
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Download Free Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT — Image (mobile: top, desktop: right) */}
        <div className="relative order-1 lg:order-2">
          <Image
            src={heroImage}
            alt="Digital Marketing Students Learning"
            className="w-full h-[320px] lg:h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/30 lg:bg-black/20"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2;
