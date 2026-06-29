import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Intro() {
  const navigate = useNavigate()
  return (
    <section id="about" className="section-padding bg-dot-pattern overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          {/* Image column with layered effect */}
          <div className="w-full md:w-1/2 relative">
            {/* Decorative offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-black/10 pointer-events-none hidden md:block" />
            <div className="overflow-hidden relative">
              <img
                src={`${import.meta.env.BASE_URL}assets/gallery-1.jpg`}
                alt="Dental Practice"
                className="w-full h-[500px] md:h-[650px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>
            {/* Experience badge pinned to the image */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 hidden md:block">
              <p className="font-serif text-4xl text-white">15+</p>
              <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">Years of Trust</p>
            </div>
          </div>

          {/* Text column */}
          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              About Al-Ahad Dental Care
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Comprehensive
              <br />
              <span className="italic font-light">Dental</span> Practice
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed font-light text-lg">
              A good dental clinic combines clinical excellence with a transparent, service-oriented practice. Our comprehensive approach ensures every patient receives personalized care in a serene, minimalist environment designed to put you at ease.
            </p>
            <p className="text-gray-500 mb-10 leading-relaxed font-light">
              Serving Paragon City, Barki Road, DHA Phase 6-9, and surrounding areas of Lahore — we are the premium choice for patients who demand the very best.
            </p>

            {/* Horizontal rule list */}
            <ul className="space-y-4 mb-12">
              {['Painless, anxiety-free treatments', 'State-of-the-art 3D imaging', 'Same-day emergency care available'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-light">
                  <div className="w-4 h-[1px] bg-black flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button onClick={() => navigate('/about')} variant="outline" className="group flex items-center gap-2">
              Read About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
