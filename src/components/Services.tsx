import React from 'react'
import { Droplet, Activity, Moon, ShieldCheck, ArrowRight, Sparkles, Smile, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const servicesList = [
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacement for missing teeth using advanced 3D technology.',
    icon: Activity,
    tag: 'Restorative',
    id: 'dental-implants'
  },
  {
    title: 'Root Canal Treatment',
    description: 'Painless endodontic therapy to save severely damaged or infected teeth from extraction.',
    icon: ShieldCheck,
    tag: 'Endodontics',
    id: 'root-canal-treatment'
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional, medical-grade whitening treatments that dramatically brighten your smile.',
    icon: Sparkles,
    tag: 'Cosmetic',
    id: 'teeth-whitening'
  },
  {
    title: 'Porcelain Veneers',
    description: 'Ultra-thin, custom shells crafted to cover teeth front surfaces, transforming your smile instantly.',
    icon: Sparkles,
    tag: 'Cosmetic',
    id: 'dental-veneers'
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten teeth discreetly with clear aligners or modern traditional braces.',
    icon: Smile,
    tag: 'Orthodontics',
    id: 'braces-and-aligners'
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle, compassionate dental care tailored specifically to build healthy habits in children.',
    icon: Heart,
    tag: 'Pediatric',
    id: 'pediatric-dentistry'
  },
  {
    title: 'Periodontal Treatment',
    description: 'Advanced treatments to combat gum disease and ensure the foundational health of your smile.',
    icon: Droplet,
    tag: 'Periodontics',
    id: 'gum-treatment'
  }
]

export function Services() {
  const navigate = useNavigate()
  return (
    <section className="section-padding bg-stone-50" id="services">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">
              Preventative &amp; Diagnostic Care
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Comprehensive <br />Dental Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 border border-gray-100 hover:border-black hover:shadow-xl transition-all duration-500 group cursor-pointer flex flex-col"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 self-start mb-8 group-hover:border-black group-hover:text-black transition-colors">
                {service.tag}
              </span>
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                <service.icon size={22} className="stroke-[1.5]" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-3 text-black leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
