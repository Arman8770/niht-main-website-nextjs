import AlumniFAQ from '@/components/AlumuniSection/alumniFAQ'
import { AlumuniHeroSection } from '@/components/AlumuniSection/alumuniBanner'
import AlumniAchievements from '@/components/AlumuniSection/archivementSection'
import PlacedAlumni from '@/components/AlumuniSection/placedAlumni'
import FAQSection from '@/components/FAQSection'
import SmallBanner from '@/components/SmallBanner/smallbanner'
import { Testimonials } from '@/components/Testimonial'
import React from 'react'

const AlumuniPage = () => {
  return (
    <div className=''>
        <AlumuniHeroSection />
        <AlumniAchievements />
        <PlacedAlumni />
        <Testimonials />
        <AlumniFAQ />
        <FAQSection />
    </div>
  )
}

export default AlumuniPage