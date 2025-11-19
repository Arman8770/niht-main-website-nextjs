"use client"
import FAQSection from '@/components/FAQSection'
import { FeaturesFaq } from '@/components/FeaturesFaq'
import LifeAtNihtGallery from '@/components/lifeNiht/lifeniht'
import { NihtCelebration } from '@/components/NihtCelebration'
import { ProfessionalTimeline } from '@/components/ui/courseui/profetionalTimeline'
import FeaturesFaq2 from '@/components/whyNiht/features'
import FounderAndTeam from '@/components/whyNiht/OurFounder'
import { QuantumTimeline } from '@/components/whyNiht/premium-timeline'
import StatsSection from '@/components/whyNiht/stats'
import { JourneyTimeline } from '@/components/whyNiht/TimelineSection'
import WhyNihtBanner from '@/components/whyNiht/whynihtBanner'
import React from 'react'

const WhyNIHTPage = () => {
  return (
    <div className='pt-32 '>
      <WhyNihtBanner />
      <StatsSection />
    <FeaturesFaq2 />
    <QuantumTimeline />
    <JourneyTimeline />
    <FounderAndTeam />
    {/* <NihtCelebration /> */}
      <LifeAtNihtGallery />

    <FAQSection />
    
    </div>
  )
}

export default WhyNIHTPage
