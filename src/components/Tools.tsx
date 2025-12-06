import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Tools1 from "@/assets/tools/tools (1).avif"
import Tools2 from "@/assets/tools/tools (1).jpeg"
import Tools3 from "@/assets/tools/tools (1).jpg"

import Tools4 from "@/assets/tools/tools (1).png"
import Tools5 from "@/assets/tools/tools (1).webp"
import Tools6 from "@/assets/tools/tools (2).jpg"

import Tools7 from "@/assets/tools/tools (2).png"
import Tools8 from "@/assets/tools/tools (3).jpg"
import Tools9 from "@/assets/tools/tools (3).png"

import Tools10 from "@/assets/tools/tools (4).jpg"
import Tools11 from "@/assets/tools/tools (4).png"
import Tools12 from "@/assets/tools/tools (5).jpg"

import Tools13 from "@/assets/tools/tools (5).png"
import Tools14 from "@/assets/tools/tools (6).jpg"
import Tools15 from "@/assets/tools/tools (6).png"

import Tools16 from "@/assets/tools/tools (7).jpg"
import Tools17 from "@/assets/tools/tools (7).png"
import Tools18 from "@/assets/tools/tools (8).jpg"

import Tools19 from "@/assets/tools/tools (8).png"
import Tools20 from "@/assets/tools/tools (9).jpg"
import Tools21 from "@/assets/tools/tools (9).png"

import Tools22 from "@/assets/tools/tools (10).jpg"
import Tools23 from "@/assets/tools/tools (10).png"
import Tools24 from "@/assets/tools/tools (11).jpg"

import Tools25 from "@/assets/tools/tools (11).png"
import Tools26 from "@/assets/tools/tools (12).jpg"
import Tools27 from "@/assets/tools/tools (12).png"

import Tools28 from "@/assets/tools/tools (13).jpg"
import Tools29 from "@/assets/tools/tools (13).png"
import Tools30 from "@/assets/tools/tools (14).png"

import Tools31 from "@/assets/tools/tools (15).png"
import Tools32 from "@/assets/tools/tools (16).png"


const ToolsSection = () => {
 const placementPartners = [
  { name: "Tools1", logo: Tools1 },
  { name: "Tools2", logo: Tools2 },
  { name: "Tools3", logo: Tools3 },

  { name: "Tools4", logo: Tools4 },
  { name: "Tools5", logo: Tools5 },
  { name: "Tools6", logo: Tools6 },

  { name: "Tools7", logo: Tools7 },
  { name: "Tools8", logo: Tools8 },
  { name: "Tools9", logo: Tools9 },

  { name: "Tools10", logo: Tools10 },
  { name: "Tools11", logo: Tools11 },
  { name: "Tools12", logo: Tools12 },

  { name: "Tools13", logo: Tools13 },
  { name: "Tools14", logo: Tools14 },
  { name: "Tools15", logo: Tools15 },

  { name: "Tools16", logo: Tools16 },
  { name: "Tools17", logo: Tools17 },
  { name: "Tools18", logo: Tools18 },

  { name: "Tools19", logo: Tools19 },
  { name: "Tools20", logo: Tools20 },
  { name: "Tools21", logo: Tools21 },

  { name: "Tools22", logo: Tools22 },
  { name: "Tools23", logo: Tools23 },
  { name: "Tools24", logo: Tools24 },

  { name: "Tools25", logo: Tools25 },
  { name: "Tools26", logo: Tools26 },
  { name: "Tools27", logo: Tools27 },

  { name: "Tools28", logo: Tools28 },
  { name: "Tools29", logo: Tools29 },
  { name: "Tools30", logo: Tools30 },

  { name: "Tools31", logo: Tools31 },
  { name: "Tools32", logo: Tools32 },
];


  return (
    <section id="placements" className="py-12 md:py-16 bg-gradient-to-l from-white to-blue-100/60">
      <div className="">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-foreground mb-2 md:mb-6">
          Get Hands-On With Industry‑Standard Digital Marketing & AI Tools
        </h3>
        {/* <p className="text-m md:text-lg text-center text-muted-foreground mb-8">
          Our alumni working at India&apos;s top companies
        </p> */}

        {/* Marquee container */}
        <div className="overflow-hidden relative w-full px-0">
          <div className="flex animate-marquee gap-8">
            {placementPartners.concat(placementPartners).map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 min-w-[150px] rounded-lg bg-transparent hover:bg-gray-100 transition-colors duration-300"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="h-16 mb-2 object-contain"
                />
                <span className="font-semibold text-sm text-gray-700 whitespace-nowrap">
                  {/* {company.name} */}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Badge variant="outline" className="text-brand-success border-brand-success">
            And 50+ More Tools
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
