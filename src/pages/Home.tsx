import React from 'react'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { DoctorProfile } from '../components/DoctorProfile'
import { Expertise } from '../components/Expertise'
import { Appointment } from '../components/Appointment'
import { Services } from '../components/Services'
import { Features } from '../components/Features'
import { PatientVideos } from '../components/PatientVideos'
import { Testimonial } from '../components/Testimonial'
import { Blog } from '../components/Blog'
import { FindUs } from '../components/FindUs'
import { FadeIn } from '../components/ui/FadeIn'

export function Home() {
  return (
    <main>
      <Hero />
      <FadeIn><Intro /></FadeIn>
      <FadeIn><DoctorProfile /></FadeIn>
      <FadeIn><Expertise /></FadeIn>
      <FadeIn><Appointment /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><Features /></FadeIn>
      <FadeIn><PatientVideos /></FadeIn>
      <FadeIn><Testimonial /></FadeIn>
      <FadeIn><Blog /></FadeIn>
      <FadeIn><FindUs /></FadeIn>
    </main>
  )
}
