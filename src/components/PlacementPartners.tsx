import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Samsung from "@/assets/Social_Icons/samsung.png";
import HCL from "@/assets/Social_Icons/hcl.png";
import Oyo from "@/assets/Social_Icons/oyo-rooms.png";
import Wipro from "@/assets/Social_Icons/Wipro.webp";
import TCS from "@/assets/Social_Icons/tcs.png";
import Infosys from "@/assets/Social_Icons/infosys.jpg";
import Accenture from "@/assets/Social_Icons/accenture.png";
import Cognizant from "@/assets/Social_Icons/cognigent.jpg";
import Amazon from "@/assets/Social_Icons/amazon logo.png";
import Flipkart from "@/assets/Social_Icons/flipcart.png";
import Paytm from "@/assets/Social_Icons/paytm.png";
import Zomato from "@/assets/Social_Icons/zomato.png";
import Swiggy from "@/assets/Social_Icons/swiggy.png";
import BYJUS from "@/assets/Social_Icons/byjus.jpg";
import Unacademy from "@/assets/Social_Icons/unacadmy.png";
import Vedantu from "@/assets/Social_Icons/vedanto.png";

const PlacementPartnersSection = () => {
  const placementPartners = [
    { name: "Samsung", logo: Samsung },
    { name: "HCL", logo: HCL },
    { name: "Oyo", logo: Oyo },
    { name: "Wipro", logo: Wipro },
    { name: "TCS", logo: TCS },
    { name: "Infosys", logo: Infosys },
    { name: "Accenture", logo: Accenture },
    { name: "Cognizant", logo: Cognizant },
    { name: "Amazon", logo: Amazon },
    { name: "Flipkart", logo: Flipkart },
    { name: "Paytm", logo: Paytm },
    { name: "Zomato", logo: Zomato },
    { name: "Swiggy", logo: Swiggy },
    { name: "BYJU'S", logo: BYJUS },
    { name: "Unacademy", logo: Unacademy },
    { name: "Vedantu", logo: Vedantu },
  ];

  return (
    <section id="placements" className="py-16 bg-gradient-to-l from-white to-blue-100/60">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-foreground mb-2 md:mb-6">
          Our Placement Partners
        </h3>
        <p className="text-m md:text-lg text-center text-muted-foreground mb-8">
          Our alumni working at India&apos;s top companies
        </p>

        {/* Marquee container */}
        <div className="overflow-hidden relative w-full px-0">
          <div className="flex animate-marquee gap-8">
            {placementPartners.concat(placementPartners).map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 min-w-[120px] rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="h-10 mb-2 object-contain"
                />
                <span className="font-semibold text-sm text-gray-700 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Badge variant="outline" className="text-brand-success border-brand-success">
            And 500+ More Companies
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartnersSection;
