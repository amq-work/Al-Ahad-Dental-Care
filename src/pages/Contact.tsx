import React from 'react'
import { Appointment } from '../components/Appointment'
import { FindUs } from '../components/FindUs'
import { FadeIn } from '../components/ui/FadeIn'
import { SeoBlock } from '../components/SeoBlock'

export function Contact() {
  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Get In Touch</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          Schedule your appointment or visit our state-of-the-art clinic in DHA Lahore.
        </p>
      </div>
      <FadeIn><Appointment /></FadeIn>
      <FadeIn><FindUs /></FadeIn>
      <FadeIn>
        <SeoBlock title="Book Your Dental Appointment in Lahore">
          <p className="mb-6">
            Contact Al-Ahad Dental Care today to schedule an appointment with our highly experienced dental team. Conveniently located in Imperial Garden Homes, Paragon City, Lahore, we provide highly accessible, world-class dental care for patients across the city and surrounding service areas. Whether you are seeking a routine dental checkup, advanced cosmetic treatments, orthodontics, or comprehensive restorative procedures, our doors are open to serve your needs.
          </p>
          <p className="mb-6">
            We understand that your time is valuable. That is why our clinic timings are designed to accommodate busy schedules, ensuring that you can receive top-tier dental care without disrupting your daily life. Our online appointment booking system, alongside our direct phone and WhatsApp lines, guarantees a seamless, hassle-free booking experience.
          </p>
          <p>
            Experience the gold standard of dentistry in a luxurious, anxiety-free environment. Visit us in Lahore today, and let our dedicated team help you achieve the healthy, radiant smile you deserve.
          </p>
        </SeoBlock>
      </FadeIn>
    </main>
  )
}
