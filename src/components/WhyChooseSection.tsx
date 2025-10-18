"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Lightbulb,
  Users,
  Award,
  Laptop,
  Video,
  Target,
  Brain,
} from "lucide-react";

import Google from "@/assets/Social_Icons/Google.png";
import Twitter from "@/assets/Social_Icons/twitter.png";
import LinkedIn from "@/assets/Social_Icons/linkedin.webp";
import MicrosoftBing from "@/assets/Social_Icons/Bing.png";
import HubSpot from "@/assets/Social_Icons/hubspot.png";
import SEMrush from "@/assets/Social_Icons/Semrush.png";
import Unbounce from "@/assets/Social_Icons/Unbounce.png";
import YouTube from "@/assets/Social_Icons/youtube.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { features } from "process";
import Image from "next/image";

const WhyChooseSection = () => {
  const differentiators = [
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-accent" />,
      title: "Hands-On Learning",
      description: "Master digital marketing with live panels in-house studio, AR/VR projects and AI-powered tools.",
      features: ["Live Panel", "Real Data", "In-House Studio ", "AR/VR"]
    },
    {
      icon: <Users className="w-8 h-8 text-brand-secondary" />,
      title: "Expert Trainers",
      description: "Learn from industry veterans based in Bangalore, Hyderabad, Kolkata and Gurgaon.",
      features: ["20+ Year", "Expert Industry Professionals", "Project Mentoring", "Real world case studies"]
    },
    {
      icon: <Award className="w-8 h-8 text-brand-success" />,
      title: "Global Certifications",
      description: "Earn 20+ certifications from Google, SEMrush, HubSpot, Meta Blueprint, LinkedIn and more.",
      features: ["Google Certified", "HubSpot Partner", "Meta Blueprint", "LinkedIn Learning"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Laptop className="w-10 h-10 text-brand-primary mx-auto mb-4" />,
      title: "Latest Technology",
      description: "Learn with cutting-edge tools and platforms"
    },
    {
      icon: <Video className="w-10 h-10 text-brand-secondary mx-auto mb-4" />,
      title: "Live Projects",
      description: "Work on live panel from day one"
    },
    {
      icon: <Target className="w-10 h-10 text-brand-accent mx-auto mb-4" />,
      title: "100% Placement",
      description: "Expert guidance and career support"
    },
    {
      icon: <Brain className="w-10 h-10 text-brand-success mx-auto mb-4" />,
      title: "AI Integration",
      description: "Master AI tools for modern marketing"
    }
  ];

  // const certifications = [
  //   "Google", "Twitter", "LinkedIn", "Microsoft Bing", 
  //   "HubSpot", "SEMrush", "Unbounce", "Buffer", "YouTube"
  // ];
  const certifications = [
    { name: "Google", logo: Google },
    { name: "Twitter", logo: Twitter },
    { name: "LinkedIn", logo: LinkedIn },
    { name: "Microsoft Bing", logo: MicrosoftBing },
    { name: "HubSpot", logo: HubSpot },
    { name: "SEMrush", logo: SEMrush },
    { name: "Unbounce", logo: Unbounce },
    { name: "YouTube", logo: YouTube },
  ];

  return (
    <section id="why-niht" className="py-12  bg-[#f3f3f3]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center  mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl  font-bold text-foreground mb-2 md:mb-6">
            Why NIHT Stands Out
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience India&apos;s most AI-powered digital marketing education with cutting-edge technology, expert guidance and career support
          </p>
        </div>

        {/* Main Differentiators */}
        {/* Mobile: Swiper Carousel | Desktop: Grid */}
        <div className="block md:hidden mb- relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            navigation
            loop={true} 
            spaceBetween={16}
            slidesPerView={1}
            className="pb-10"
          >
            {differentiators.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-gradient-to-br from-white to-blue-50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full w-fit">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center">{item.description}</p>
                    <div className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full w-fit">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        {/* Mobile: Carousel | Desktop: Grid */}
        {/* <div className="block md:hidden mb-16 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true} 
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            spaceBetween={16}
            slidesPerView={1}
            className="lg:pb-10"
          >
            {additionalFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
                  {feature.icon}
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300">
              {feature.icon}
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div> */}

        {/* Certifications Showcase */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-medium"> */}
          {/* <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl  font-bold text-foreground mb-2 md:mb-6">
              Global Certification
            </h3>
            <p className="text-m md:text-lg text-muted-foreground">
              Get industry-recognized certifications that employers value
            </p>
          </div> */}

          {/* Marquee container */}
          {/* <div className="overflow-hidden relative">
            <div className="flex animate-marquee gap-4">
              {certifications.concat(certifications).map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center text-base font-medium py-2 px-4 pr-12 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 hover:from-brand-primary/20 hover:to-brand-secondary/20 transition-all duration-300"
                >
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    className="w-10 h-8 mr-3 object-contain"
                  />
                  <span className="whitespace-nowrap">{cert.name}</span>
                </Badge>
              ))}
            </div>
          </div> */}
        {/* </div> */}
      </div>

      {/* Shared Custom Arrow Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #2563eb; /* blue-600 */
          background: white;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;
