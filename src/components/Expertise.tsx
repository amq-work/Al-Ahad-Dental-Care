import React from 'react'
import { Sparkles, Activity, Smile, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    icon: Sparkles,
    title: 'Porcelain Veneers',
    desc: 'Ultra-thin, custom-made shells crafted to cover the front surface of teeth, improving your appearance instantly.',
    img: `${import.meta.env.BASE_URL}assets/gallery-4.jpg`,
    serviceId: 'dental-veneers',
  },
  {
    icon: Activity,
    title: 'Dental Implants',
    desc: 'The premier long-lasting solution for missing teeth. We design implants that blend seamlessly with your natural smile.',
    img: `${import.meta.env.BASE_URL}assets/gallery-3.jpg`,
    serviceId: 'dental-implants',
  },
  {
    icon: Smile,
    title: 'Clear Aligners',
    desc: 'Straighten your teeth discreetly with custom clear aligners. No brackets, no wires—just a clear path to a perfect smile.',
    img: `${import.meta.env.BASE_URL}assets/family-care.jpg`,
    serviceId: 'braces-and-aligners',
  },
]

export function Expertise() {
  const navigate = useNavigate()
  return (
    <section id="expertise" className="section-padding bg-dot-pattern">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">Cosmetic Excellence</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Our Areas of <br /><span className="italic font-light">Expertise</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/services')}
            className="group flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-600 transition-colors self-start md:self-end"
          >
            See All Treatments
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/services/${service.serviceId}`)}
              >
                {/* Image */}
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
  
                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300 mt-1">
                    <service.icon size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">{service.desc}</p>
                    <span 
                      className="mt-4 inline-block text-xs uppercase tracking-widest border-b border-black pb-0.5 group-hover:opacity-60 transition-opacity"
                    >
                      Learn More
                    </span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
