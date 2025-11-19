
import ExperientialLeaning from '@/components/ExperientialLeaning'
import FAQSection from '@/components/FAQSection'
import PlacementPartnersSection from '@/components/PlacementPartners'
import { PlacementBanner } from '@/components/PlacementReportSection/placementBanner'
import RecommendedCourses from '@/components/PlacementReportSection/recommendedCourse'
import PlacementOverview from '@/components/PlacementReportSection/TrackSuccess'
import React from 'react'

const PlaceMentReportPage = () => {
  return (
   <>
   <PlacementBanner />
   <PlacementPartnersSection />
   <PlacementOverview />
   <ExperientialLeaning />
   <RecommendedCourses />
   <FAQSection />
   </>
  )
}

export default PlaceMentReportPage