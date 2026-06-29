import React from 'react'
import { motion } from 'framer-motion'

export function Gallery() {
  const items = [
    { src: `${import.meta.env.BASE_URL}assets/gallery-1.jpg`, label: 'Modern Clinic', span: 'row' },
    { src: `${import.meta.env.BASE_URL}assets/gallery-2.jpg`, label: 'Smile Results', span: 'row' },
    { src: `${import.meta.env.BASE_URL}assets/gallery-3.jpg`, label: 'Treatment Room', span: 'col' },
    { src: `${import.meta.env.BASE_URL}assets/gallery-4.jpg`, label: 'Patient Care', span: 'col' },
  ]

  return (
    <section id="gallery" className="bg-white">
      {/* Header */}
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">Smile Gallery</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Inside Our Clinic</h2>
          </div>
          <p className="text-gray-400 font-light max-w-sm text-sm md:text-right">
            A glimpse into the world-class environment we've built for your comfort and care.
          </p>
        </div>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1 h-[60vw] max-h-[700px]">
        {/* Large left image spanning 2 rows */}
        <motion.div
          className="col-span-1 md:col-span-2 row-span-2 overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={items[0].src}
            alt={items[0].label}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-white text-sm uppercase tracking-widest font-semibold">{items[0].label}</span>
          </div>
        </motion.div>

        {/* Top right */}
        <motion.div
          className="col-span-1 overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img
            src={items[1].src}
            alt={items[1].label}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-white text-sm uppercase tracking-widest font-semibold">{items[1].label}</span>
          </div>
        </motion.div>

        {/* Top far right */}
        <motion.div
          className="col-span-1 overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={items[2].src}
            alt={items[2].label}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-white text-sm uppercase tracking-widest font-semibold">{items[2].label}</span>
          </div>
        </motion.div>

        {/* Bottom right spanning 2 cols */}
        <motion.div
          className="col-span-2 overflow-hidden relative group cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={items[3].src}
            alt={items[3].label}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-white text-sm uppercase tracking-widest font-semibold">{items[3].label}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
