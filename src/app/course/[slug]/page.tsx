// app/course/[slug]/page.tsx
import CourseBanner from '@/components/courses/courseBanner';
import { courses } from '@/app/data/courses';
import React from 'react';
import OurAlumni from '@/components/OurAlumni';
import PlacementPartnersSection from '@/components/PlacementPartners';
import OurCourse from '@/components/courses/ourCourse';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import { NihtCelebration } from '@/components/NihtCelebration';
import SocialProofSection from '@/components/SocialProofSection';
import Journey from '@/components/Journey/journey';
import CourseSection from '@/components/ui/courseCard/coursedcard';
import WhyChooseNIHT from '@/components/chooseUs/whyChooseNIHT';
import Mentor from '@/components/Mentor/mentor';
import CourseBannerSection from '@/components/courses/courseHero';
import { OurTeam } from '@/components/OurTeam';
import SmallBanner from '@/components/SmallBanner/smallbanner';
import CourseSyllabus from '@/components/courses/syllabus';
import StartFreeLearning from '@/components/courses/startLearningWithMentor';
import CircularGalleryNIHT from '@/components/Gallery/CircularGallery';
import OurCourseUpdate from '@/components/courses/ourCourseUpdate';
import CohortTable from '@/components/courses/cohortTable';
import { CertificationSection } from '@/components/courses/certificate';
import Logomarquee from '@/components/ui/courseui/logoMarque';
import ToolsLogo from '@/components/courses/tools';
import OurProjects from '@/components/ourProjects/projects';
import StudentsBrandWork from '@/components/courses/ourStudentsWorkBrand';
import LifeAtNihtGallery from '@/components/lifeNiht/lifeniht';
import { LandingAccordionItem } from '@/components/ui/courseui/interativeImage';



interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CoursePage({ params }: PageProps) {
  const slug = params.slug; // ✅ no async, no await

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return notFound();
  }

  return (
    <div className="overflow-hidden">
      {/* <CourseBanner slug={slug} /> */}
      <CourseBannerSection slug={slug} />
      {/* <OurCourse course={course} /> */}
      <OurCourseUpdate course={course} />
      <OurAlumni />
      {/* <Journey /> */}
      <SocialProofSection />

      <PlacementPartnersSection />
      <CohortTable />
      <LandingAccordionItem />

      <CourseSection />
      <CertificationSection />
      <SmallBanner />
      <ToolsLogo />
      {/* <WhyChooseNIHT /> */}

      <OurTeam />
      <SmallBanner />
      {/* <CourseSyllabus /> */}
      <StartFreeLearning />
      <OurProjects  />

      <SmallBanner />
      <StudentsBrandWork />

      

      {/* <GalleryZoomParallax /> */}
      {/* <NihtCelebration /> */}
      <LifeAtNihtGallery />

      {/* <CircularGalleryNIHT /> */}
      {/* <Mentor /> */}
      <FAQSection />
    </div>
  );
}
