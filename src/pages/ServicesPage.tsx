import React from 'react'
import { Services } from '../components/Services'
import { Expertise } from '../components/Expertise'
import { FadeIn } from '../components/ui/FadeIn'

export function ServicesPage() {
  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          From preventative care to complete cosmetic makeovers, discover our comprehensive range of treatments.
        </p>
      </div>
      <FadeIn><Services /></FadeIn>
      <FadeIn><Expertise /></FadeIn>
    </main>
  )
}
