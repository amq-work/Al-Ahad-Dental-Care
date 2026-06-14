import React from 'react'

export function Gallery() {
  return (
    <section id="gallery" className="py-2 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="grid grid-rows-2 gap-2 h-[800px]">
          <img
            src="/assets/gallery-1.jpg"
            alt="Dental Office"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <img
            src="/assets/gallery-2.jpg"
            alt="Smile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="h-[800px]">
          <img
            src="/assets/gallery-3.jpg"
            alt="Dental Tools"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  )
}
