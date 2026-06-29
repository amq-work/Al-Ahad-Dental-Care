import React from 'react'
import { Stethoscope, Heart, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Stethoscope,
    title: 'Top Notch Equipment',
    desc: 'State-of-the-art technology ensuring precise and comfortable treatments for every patient.',
    number: '01',
  },
  {
    icon: Heart,
    title: 'Soothing Practice',
    desc: 'A calm, minimalist environment designed to ease anxiety and promote complete relaxation.',
    number: '02',
  },
  {
    icon: Users,
    title: 'Experienced Staff',
    desc: 'A dedicated team of specialists committed to delivering consistent, exceptional care.',
    number: '03',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    desc: 'Recognized for clinical quality and patient satisfaction across Lahore for over 15 years.',
    number: '04',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">Why Trust Us</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              You Are In <br /><span className="italic font-light">Good Hands</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-sm text-right hidden md:block">
            Built on decades of trust, our clinic sets the standard for dental excellence in Lahore.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 group hover:bg-black transition-colors duration-500 flex flex-col"
            >
              <span className="text-xs font-mono text-gray-300 group-hover:text-white/30 mb-8 block transition-colors">
                {feature.number}
              </span>
              <feature.icon className="w-8 h-8 mb-6 stroke-1 text-black group-hover:text-white transition-colors" />
              <h3 className="font-serif text-xl mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors mt-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
