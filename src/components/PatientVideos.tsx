import React from 'react'
import { Play } from 'lucide-react'

export function PatientVideos() {
  const videos = [
    {
      img: `${import.meta.env.BASE_URL}assets/gallery-1.jpg`,
      title: 'Smile Makeover Journey',
      name: 'Sarah M.',
    },
    {
      img: `${import.meta.env.BASE_URL}assets/gallery-3.jpg`,
      title: 'Veneers Transformation',
      name: 'James D.',
    },
    {
      img: `${import.meta.env.BASE_URL}assets/gallery-4.jpg`,
      title: 'Invisalign Success Story',
      name: 'Linda K.',
    },
  ]

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Our Happy Patients</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Hear directly from our patients about their experiences and see the 
            transformations that changed their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden bg-gray-900 mb-6">
                <img
                  src={vid.img}
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">{vid.title}</h3>
              <p className="text-gray-400 font-light text-sm">
                Patient: {vid.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
