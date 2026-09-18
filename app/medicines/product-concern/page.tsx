// import PageHero from '@/components/layout/PageHero'
import React from 'react'
import HeroSection from '@/components/layout/HeroSection'
import AnimateIn from '@/components/shared/AnimateIn'
import SafetySupportSection from './components/SafetySupportSection'
import SafetyReportingForm from './components/SafetyReportingForm'

const page = () => {
  return (
    <div className='bg-[#F7F7F7]'>
    <HeroSection
    title='Report a BF Biosciences product concern'
    backgroundImage='/images/medicines/product-concern/Hero.webp'
    titleSize='small'/>
    <AnimateIn>
      <SafetySupportSection/>
    </AnimateIn>
    <AnimateIn>
      <SafetyReportingForm/>
    </AnimateIn>
    </div>
  )
}

export default page