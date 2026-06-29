import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { useNavigate } from 'react-router-dom'

export function ClinicExperience() {
  const navigate = useNavigate()

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-black"
      >
        <img 
          src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`} 
          alt="Clinic Environment" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      <div className="container-custom relative z-10 text-center text-white max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gray-300 mb-6 block">
            The Al-Ahad Standard
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            Redefining Your <br /> Dental Experience
          </h2>
          <p className="text-gray-300 font-light text-lg mb-10 leading-relaxed">
            Step into a sanctuary of wellness. From our relaxing patient lounges to our state-of-the-art treatment suites, every detail is meticulously designed for your absolute comfort.
          </p>
          <Button 
            onClick={() => navigate('/about')}
            className="!bg-white !text-black border-white hover:!bg-transparent hover:!text-white"
          >
            Explore Our Clinic
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
