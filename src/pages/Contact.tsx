import React from 'react'
import { Appointment } from '../components/Appointment'
import { FindUs } from '../components/FindUs'
import { FadeIn } from '../components/ui/FadeIn'

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
    </main>
  )
}
