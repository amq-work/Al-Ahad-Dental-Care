import React from 'react'
import { Button } from './ui/Button'
export function Hero() {
  return (
    <section className="pt-24 min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-8 md:px-24 py-20">
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          Expert Dental Implants &
          <br />
          Cosmetic Dentistry
          <br />
          in Lahore
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed">
          Experience luxury dental care tailored to your unique needs. We
          combine advanced technology with editorial aesthetics to give you a perfect smile.
        </p>
        <div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Discover Our Clinic
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto relative">
        <img
          src="/assets/hero-bg.jpg"
          alt="Perfect Smile"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  )
}
