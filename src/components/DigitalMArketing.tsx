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
import HeroSectionV2 from "./HeroSection2";
import NIHTEDGE from "./NihtEdge/nihtedge";
import SmallBanner from "./SmallBanner/smallbanner";
import LifeAtNihtGallery from "./lifeNiht/lifeniht";


const DigitalMarketing = () => {
  return (
    <div className="min-h-screen overflow-y-auto overflow-x-hidden">
      {/* <HeroSection /> */}
      <HeroSectionV2 />
      <NIHTEDGE />
      <OurAlumni />
      <PostGraduateSection />
      <SmallBanner />
      {/* <WhyChooseSection /> */}
      <PlacementPartnersSection />

      <SocialProofSection />
      <OurTeam />
      
      <FeaturesFaq />
      <SmallBanner />
      <TargetAudienceSection />
      <Testimonials />
      {/* <CurriculumSection /> */}
      {/* <h2 className="text-2xl font-bold mb-4">working on it Redefine Your Career</h2> */}
      {/* <HandsOnSection /> */}
      <ExperientialLeaning />
      {/* <AITechSection /> */}
      {/* <NihtCelebration /> */}
      <LifeAtNihtGallery />
      
      <FAQSection />
    </div>
  );
};

export default DigitalMarketing;