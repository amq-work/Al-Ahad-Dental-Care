import React from 'react'
import { Button } from './ui/Button'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function Hero() {
  const navigate = useNavigate()
  return (
    <section className="pt-24 min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-8 md:px-24 py-20 relative z-10">
        {/* Subtle decorative number */}
        <span className="text-[150px] md:text-[200px] leading-none font-serif text-white/[0.03] absolute -top-4 -left-4 select-none pointer-events-none hidden md:block">
          A
        </span>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8 block"
        >
          Lahore's Premium Dental Clinic
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-serif text-5xl md:text-7xl leading-tight mb-8"
        >
          Expert Dental
          <br />
          Implants &amp;
          <br />
          <span className="italic font-light text-gray-400">Cosmetic</span> Care
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed"
        >
          Experience dental care tailored to your unique needs. We combine
          advanced technology with editorial aesthetics to give you a perfect smile.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={() => navigate('/contact')}
            className="!bg-white !text-black border-white hover:!bg-transparent hover:!text-white"
          >
            Book Appointment
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/services')}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-20 border-t border-white/10 pt-8 md:pt-10"
        >
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '5K+', label: 'Happy Patients' },
            { num: '98%', label: 'Satisfaction Rate' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-white">{stat.num}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Panel – Image */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-auto relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}assets/hero-bg.jpg`}
          alt="Perfect Smile"
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        {/* Floating badge */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-5 py-4 flex items-center gap-3 shadow-xl">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-black font-semibold">Accepting Patients</span>
        </div>
      </div>
    </section>
  )
}
