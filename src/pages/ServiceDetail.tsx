import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, CheckCircle2 } from 'lucide-react'
import { servicesData, ServiceDetail as ServiceDetailType } from '../data/servicesData'
import { Appointment } from '../components/Appointment'
import { SeoBlock } from '../components/SeoBlock'
import { FadeIn } from '../components/ui/FadeIn'

export function ServiceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState<ServiceDetailType | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === id)
    if (foundService) {
      setService(foundService)
    } else {
      navigate('/services')
    }
  }, [id, navigate])

  if (!service) return null

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src={`${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')}`}
            alt={service.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container-custom relative z-10 text-center text-white mt-12">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            All Services
          </button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto font-light"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-dot-pattern">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <FadeIn>
                <div className="prose prose-lg text-gray-500 font-light leading-relaxed max-w-none">
                  {service.fullDesc.map((paragraph, idx) => (
                    <p key={idx} className="mb-6">{paragraph}</p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h3 className="font-serif text-3xl mt-12 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="font-serif text-3xl mt-16 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                        <ChevronDown 
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                          size={20}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed border-t border-gray-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="font-serif text-2xl mb-4">Ready for a Consultation?</h3>
                  <p className="text-gray-500 font-light mb-6">
                    Schedule an appointment with our specialists to discuss if {service.title.toLowerCase()} is the right choice for you.
                  </p>
                  <button 
                    onClick={() => {
                      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full bg-black text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <div id="appointment-form">
        <FadeIn><Appointment /></FadeIn>
      </div>

      {/* Dynamic SEO Block */}
      <FadeIn>
        <SeoBlock title={`${service.title} in Lahore`}>
          <p>
            Al-Ahad Dental Care provides expert {service.title.toLowerCase()} for patients across Lahore. 
            Our highly trained specialists utilize state-of-the-art dental technology to ensure 
            that your {service.title.toLowerCase()} procedure is safe, comfortable, and effective. 
            Contact us today to learn more about how this treatment can restore your smile and oral health.
          </p>
        </SeoBlock>
      </FadeIn>
    </main>
  )
}
