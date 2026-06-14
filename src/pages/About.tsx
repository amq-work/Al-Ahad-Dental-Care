import React from 'react'
import { DoctorProfile } from '../components/DoctorProfile'
import { FadeIn } from '../components/ui/FadeIn'

export function About() {
  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">About Our Clinic</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          We believe in combining advanced dental technology with luxurious editorial aesthetics 
          to provide an unparalleled experience in Lahore.
        </p>
      </div>
      <FadeIn><DoctorProfile /></FadeIn>
    </main>
  )
}
