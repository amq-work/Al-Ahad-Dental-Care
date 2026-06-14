import React from 'react'
import { Button } from './ui/Button'
import { MapPin } from 'lucide-react'

export function FindUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Find Us
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-10 max-w-md">
              Located in the heart of the city, our clinic offers a serene escape 
              for your dental care needs. Visit us to experience exceptional dentistry firsthand.
            </p>
            <div className="flex items-start gap-4 mb-10">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif text-xl mb-2">Clinic Location</h4>
                <p className="text-gray-500 font-light leading-relaxed">
                  123 Dental Avenue, Suite 100<br />
                  DHA Phase 6, Lahore
                </p>
              </div>
            </div>
            <a 
              href="https://share.google/IavFUv9qXOca4nNA7" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button>Get Directions</Button>
            </a>
          </div>
          <div className="w-full md:w-1/2">
            {/* Placeholder for an actual Google Map iframe, using a styled map graphic/image for luxury feel */}
            <div className="relative w-full h-[500px] bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Map pin overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-black text-white p-3 rounded-full mb-2 shadow-xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="bg-white px-4 py-2 text-sm font-semibold shadow-lg">
                  Al-Ahad Dental
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
