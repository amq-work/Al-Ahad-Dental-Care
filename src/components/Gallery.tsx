import React from 'react'

export function Gallery() {
  return (
    <section id="gallery" className="py-2 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="grid grid-rows-2 gap-2 h-[800px]">
          <div className="overflow-hidden w-full h-full">
            <img
              src={`${import.meta.env.BASE_URL}assets/gallery-1.jpg`}
              alt="Dental Office"
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="overflow-hidden w-full h-full">
            <img
              src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`}
              alt="Smile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
        <div className="h-[800px] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}assets/gallery-3.jpg`}
            alt="Dental Tools"
            className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  )
}
