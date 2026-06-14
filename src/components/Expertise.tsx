import React from 'react'
import { Sparkles, Activity, Smile } from 'lucide-react'
export function Expertise() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 mb-6 stroke-1" />,
      title: 'Porcelain Veneers',
      desc: 'Ultra-thin, custom-made shells crafted to cover the front surface of teeth, improving your appearance instantly.',
    },
    {
      icon: <Activity className="w-8 h-8 mb-6 stroke-1" />,
      title: 'Dental Implants',
      desc: 'The premier long-lasting solution for missing teeth. We design implants that blend seamlessly with your natural smile.',
    },
    {
      icon: <Smile className="w-8 h-8 mb-6 stroke-1" />,
      title: 'Clear Aligners',
      desc: 'Straighten your teeth discreetly with custom clear aligners. No brackets, no wires—just a clear path to a perfect smile.',
    },
  ]
  return (
    <section
      id="services"
      className="section-padding bg-gray-50 border-y border-gray-200"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/4">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Our Areas
              <br />
              of Expertise
            </h2>
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col">
                {service.icon}
                <h3 className="font-sans font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
