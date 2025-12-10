// app/course/[slug]/page.tsx
import { courses } from '@/app/data/courses';
import React from 'react';
import OurAlumni from '@/components/OurAlumni';
import PlacementPartnersSection from '@/components/PlacementPartners';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import SocialProofSection from '@/components/SocialProofSection';
import CourseSection from '@/components/ui/courseCard/coursedcard';
import CourseBannerSection from '@/components/courses/courseHero';
import { OurTeam } from '@/components/OurTeam';
import SmallBanner from '@/components/SmallBanner/smallbanner';
import StartFreeLearning from '@/components/courses/startLearningWithMentor';
import OurCourseUpdate from '@/components/courses/ourCourseUpdate';
import CohortTable from '@/components/courses/cohortTable';
import { CertificationSection } from '@/components/courses/certificate';
import ToolsLogo from '@/components/courses/tools';
import OurProjects from '@/components/ourProjects/projects';
import StudentsBrandWork from '@/components/courses/ourStudentsWorkBrand';
import LifeAtNihtGallery from '@/components/lifeNiht/lifeniht';
import { LandingAccordionItem } from '@/components/ui/courseui/interativeImage';
import ToolsSection from '@/components/Tools';

// 1. Update Interface: params is now a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

// 2. Make the component async
export default async function CoursePage({ params }: PageProps) {
  // 3. Await the params to get the slug
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return notFound();
  }

  return (
    <div className="overflow-hidden">
      <CourseBannerSection slug={slug} />
      <OurCourseUpdate course={course} />
      {/* <CohortTable /> */}
      <OurAlumni />
      <SocialProofSection successTitle={course?.successTitle} successSubTitle={course?.successSubTitle} />
      {/* <PlacementPartnersSection /> */}
      <ToolsSection />
      {/* <LandingAccordionItem /> */}
      {/* <CourseSection /> */}
      <CertificationSection />
      <span className='hidden md:block'>
      <SmallBanner 
        title="Still confused? Book a session with our senior career counsellor." 
        buttonText="Enroll Now" 
      />
      </span>
       <span className='block md:hidden'>
      <SmallBanner 
        title="Talk to our career counsellor." 
        buttonText="Enroll Now" 
      />
      </span>
      {/* <ToolsLogo /> */}

      {/* <OurTeam /> */}
      {/* <SmallBanner /> */}
      {/* <StartFreeLearning /> */}
      {/* <OurProjects  /> */}
      {/* <SmallBanner /> */}
      {/* <StudentsBrandWork /> */}

      <LifeAtNihtGallery />
      <FAQSection />
    </div>
  );
}