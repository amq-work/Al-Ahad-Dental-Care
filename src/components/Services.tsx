import React from 'react'
import { Droplet, Activity, Moon, ShieldCheck } from 'lucide-react'

const servicesList = [
  {
    title: 'Fluoride Treatment',
    description: 'Strengthen your enamel and proactively prevent cavities with our professional-grade fluoride applications.',
    icon: Droplet
  },
  {
    title: 'Digital Radiographs',
    description: 'State-of-the-art digital x-rays for precise, low-radiation dental diagnostics and treatment planning.',
    icon: Activity
  },
  {
    title: 'Anti-Clenching Night Guards',
    description: 'Custom-fitted premium night guards to protect your teeth from bruxism and relieve jaw tension.',
    icon: Moon
  },
  {
    title: 'Oral Cancer Screening',
    description: 'Comprehensive early detection using advanced screening technology for your complete peace of mind.',
    icon: ShieldCheck
  }
]

export function Services() {
  return (
    <section className="section-padding bg-stone-50" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
            Preventative & Diagnostic Care
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Comprehensive Dental Services <br /> in Lahore
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-lg">
            At Al-Ahad Dental, we provide advanced diagnostic and preventative care 
            tailored for your long-term oral health. Experience meticulous attention 
            to detail in a relaxing environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                <service.icon size={24} className="stroke-[1.5]" />
              </div>
              <h3 className="font-sans font-semibold text-xl mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
