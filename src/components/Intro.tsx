import React from 'react'
import { Button } from './ui/Button'
export function Intro() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/gallery-1.jpg"
              alt="Dental Practice"
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Comprehensive
              <br />
              Dental Practice
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed font-light text-lg">
              A good dental clinic combines clinical excellence with a
              transparent, service-oriented practice. Our comprehensive approach
              ensures every patient receives personalized care in a serene,
              minimalist environment designed to put you at ease.
            </p>
            <Button variant="outline">Read About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
