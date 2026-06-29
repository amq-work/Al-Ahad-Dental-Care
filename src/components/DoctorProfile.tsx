import React from 'react'
import { motion } from 'framer-motion'

export function DoctorProfile() {
  const credentials = [
    { label: 'Specialization', value: 'Cosmetic Dentistry & Implantology' },
    { label: 'Experience', value: '15+ Years' },
    { label: 'Location', value: '75 S Commercial Area, Imperial Garden Homes Paragon City, Lahore, 53200, Pakistan' },
  ]

  return (
    <section className="section-padding bg-gradient-subtle border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          {/* Image side */}
          <div className="w-full md:w-5/12 relative">
            <div className="overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`}
                alt="Dr. Al-Ahad"
                className="w-full h-64 md:h-[580px] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>
            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:block absolute -bottom-8 -left-8 bg-black text-white p-6 min-w-[200px] shadow-2xl"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Certified By</p>
              <p className="font-serif text-lg">PMDC Pakistan</p>
            </motion.div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-7/12 md:pr-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              Who's Behind The Mask
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Meet <span className="italic font-light">Dr. Ayaz Malik</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-5">
              With over 15 years of experience in Cosmetic Dentistry and Dental Implants,
              Dr. Ayaz Malik is dedicated to transforming smiles across Lahore, including DHA, Barki Road, and Paragon City.
            </p>
            <p className="text-gray-500 font-light leading-relaxed mb-10">
              He combines state-of-the-art technology with an artistic eye to deliver
              unparalleled results, ensuring every patient leaves with a confident, radiant smile.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((c) => (
                <div key={c.label} className="border-l-2 border-black pl-4 py-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{c.label}</p>
                  <p className="font-semibold text-sm text-black">{c.value}</p>
                </div>
              ))}
            </div>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_placeholder.svg"
              alt="Signature"
              className="h-12 opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
