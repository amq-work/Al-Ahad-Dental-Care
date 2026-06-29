import React from 'react'
import { Button } from './ui/Button'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const MAPS_URL = 'https://maps.app.goo.gl/MetEgR51tAdCevth6?g_st=ic'

export function FindUs() {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 items-stretch">

          {/* Left: Info */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Visit Us</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Find <span className="italic font-light">Our Clinic</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg mb-10 max-w-md">
              Located in the heart of Paragon City, our clinic offers a serene escape
              for your dental care needs. Visit us to experience exceptional dentistry firsthand.
            </p>

            {/* Info cards */}
            <div className="space-y-5 mb-10">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 border border-gray-100 hover:border-black transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Address</p>
                  <p className="font-medium text-sm">Al-Ahad Dental Care,</p>
                  <p className="text-gray-500 text-sm font-light">75 S Commercial Area, Imperial Garden Homes Paragon City, Lahore, 53200, Pakistan</p>
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-light"><span className="font-medium text-black">Service Areas:</span> Lahore, DHA, Cantt, Paragon City &amp; Surrounding Areas</p>
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 border border-gray-100 hover:border-black transition-colors group">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <a 
                    href="https://wa.me/923004002365?text=I%20want%20to%20book%20a%20session%20with%20you" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-sm hover:text-gray-600 transition-colors"
                  >
                    +92 300 4002365
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-gray-100 hover:border-black transition-colors group">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Hours</p>
                  <p className="font-medium text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-gray-500 text-sm font-light">Sat: 10:00 AM – 4:00 PM &nbsp;|&nbsp; Sun: Closed</p>
                </div>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3"
            >
              <Button className="group-hover:gap-4 transition-all flex items-center gap-2">
                Get Directions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Right: Clickable map image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[380px] md:h-full min-h-[400px] group overflow-hidden"
              title="Open in Google Maps"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Map – Click to open in Google Maps"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Center pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-black text-white p-3 rounded-full mb-2 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="bg-white px-4 py-2 text-xs font-semibold shadow-xl uppercase tracking-widest whitespace-nowrap">
                  Al-Ahad Dental Care
                </div>
              </div>

              {/* "Open Maps" hover badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                Open in Maps <ArrowRight size={12} />
              </div>
            </a>


          </motion.div>
        </div>
      </div>
    </section>
  )
}
