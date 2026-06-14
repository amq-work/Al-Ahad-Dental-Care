import React from 'react'
import { Stethoscope, Heart, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 mb-6 stroke-1 mx-auto md:mx-0" />,
      title: 'Top Notch Equipment',
      desc: 'State-of-the-art technology ensuring precise and comfortable treatments.',
    },
    {
      icon: <Heart className="w-8 h-8 mb-6 stroke-1 mx-auto md:mx-0" />,
      title: 'Soothing Practice',
      desc: 'A calm, minimalist environment designed to ease anxiety and promote relaxation.',
    },
    {
      icon: <Users className="w-8 h-8 mb-6 stroke-1 mx-auto md:mx-0" />,
      title: 'Experienced Staff',
      desc: 'A dedicated team of professionals committed to delivering exceptional care.',
    },
  ]
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Heading on the Left */}
          <div className="w-full md:w-1/4 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-200 pb-12 md:pb-0 md:pr-12">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              You Are In
              <br />
              Good Hands
            </h2>
          </div>
          {/* Features on the Right */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                {feature.icon}
                <h3 className="font-serif text-xl mb-4">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
