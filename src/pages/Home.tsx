import React from 'react'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { DoctorProfile } from '../components/DoctorProfile'
import { Expertise } from '../components/Expertise'
import { Appointment } from '../components/Appointment'
import { Services } from '../components/Services'
import { Features } from '../components/Features'
import { ClinicExperience } from '../components/ClinicExperience'
import { Testimonial } from '../components/Testimonial'
import { Blog } from '../components/Blog'
import { FindUs } from '../components/FindUs'
import { SeoBlock } from '../components/SeoBlock'
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
      <FadeIn><ClinicExperience /></FadeIn>
      <FadeIn><Testimonial /></FadeIn>
      <FadeIn><Blog /></FadeIn>
      <FadeIn>
        <SeoBlock title="Your Premier Dental Clinic in Lahore">
          <p className="mb-6">
            Al-Ahad Dental Care is a modern dental clinic in Lahore providing comprehensive dental treatments tailored for every age group. Recognized for excellence in family dentistry, we offer everything from routine checkups and pediatric care to emergency dental treatments. Whether you need an urgent appointment for a sudden toothache or a scheduled bi-annual cleaning, our state-of-the-art facility is equipped to handle your needs efficiently and comfortably.
          </p>
          <p className="mb-6">
            Our expertise spans advanced cosmetic and restorative dentistry, including dental implants, painless root canal treatments, invisible braces, and professional teeth whitening. We understand that a confident smile can change your life, which is why our experienced dental team combines the latest in modern dental technology—such as digital intraoral scanners and low-radiation 3D imaging—with a deeply patient-centered care philosophy.
          </p>
          <p>
            By prioritizing both clinical precision and a relaxing atmosphere, we help individuals and families across Lahore achieve healthy, beautiful, and confident smiles that last a lifetime. Book your appointment today and discover the difference of world-class dentistry.
          </p>
        </SeoBlock>
      </FadeIn>
      <FadeIn><FindUs /></FadeIn>
    </main>
  )
}
