import React from 'react'

export function DoctorProfile() {
  return (
    <section className="section-padding bg-white border-y border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-5/12">
            <img
              src="/assets/gallery-2.jpg"
              alt="Dr. Al-Ahad"
              className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-7/12 md:pr-10">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
              Who's Behind The Mask
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Meet Dr. Al-Ahad
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-6">
              With over 15 years of experience in Cosmetic Dentistry and Dental Implants, 
              Dr. Al-Ahad is dedicated to transforming smiles across Lahore, including DHA, Barki Road, and Paragon City. 
              Our clinic was founded on the principle that dental care should be 
              a luxurious, stress-free experience.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-10">
              He combines state-of-the-art technology with an artistic eye to deliver 
              unparalleled results, ensuring every patient leaves with a confident, 
              radiant smile.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_placeholder.svg" 
              alt="Signature" 
              className="h-12 opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
