"use client";
import HeroSection from "@/components/HeroSection";
// import WhyChooseSection from "@/components/WhyChooseSection";
import SocialProofSection from "@/components/SocialProofSection";
// import CurriculumSection from "@/components/CurriculumSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FAQSection from "@/components/FAQSection";
import OurAlumni from "./OurAlumni";
import PlacementPartnersSection from "./PlacementPartners";
import PostGraduateSection from "./PostGraduateSection";
import { OurTeam } from "./OurTeam";
import { FeaturesFaq } from "./FeaturesFaq";
import ExperientialLeaning from "./ExperientialLeaning";
import { NihtCelebration } from "./NihtCelebration";
import { Testimonials } from "./Testimonial";
import GalleryZoomParallax from "./Gallery/zoom-parallax";


const DigitalMarketing = () => {
  return (
    <div className="min-h-screen overflow-y-auto overflow-x-hidden">
      <HeroSection />
      <OurAlumni />
      <PlacementPartnersSection />
      <PostGraduateSection />
      {/* <WhyChooseSection /> */}
      <SocialProofSection />
      <OurTeam />
      <FeaturesFaq />
      <TargetAudienceSection />
      <Testimonials />
      {/* <CurriculumSection /> */}
      {/* <h2 className="text-2xl font-bold mb-4">working on it Redefine Your Career</h2> */}
      {/* <HandsOnSection /> */}
      <ExperientialLeaning />
      {/* <AITechSection /> */}
      <NihtCelebration />
      
      <FAQSection />
    </div>
  );
};

export default DigitalMarketing;