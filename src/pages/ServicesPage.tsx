import React, { useState } from 'react'
import { Services } from '../components/Services'
import { Expertise } from '../components/Expertise'
import { FadeIn } from '../components/ui/FadeIn'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { SeoBlock } from '../components/SeoBlock'

const faqs = [
  {
    question: "Do dental implants hurt?",
    answer: "No, dental implants are placed under local anesthesia. Most patients report feeling only minor pressure during the procedure and experience less discomfort than a tooth extraction."
  },
  {
    question: "How long does a cosmetic smile makeover take?",
    answer: "The timeline varies depending on the specific treatments involved. Simple teeth whitening can be done in an hour, while veneers or full mouth restorations may take a few weeks to perfect."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we prioritize dental emergencies. If you are experiencing severe pain, swelling, or trauma, please call our clinic immediately for same-day assistance."
  },
  {
    question: "Is teeth whitening safe for enamel?",
    answer: "Absolutely. We use professional-grade, clinically tested whitening systems that are proven to be safe and highly effective without damaging your tooth enamel."
  }
]

export function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const navigate = useNavigate()

  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          From preventative care to complete cosmetic makeovers, discover our comprehensive range of treatments.
        </p>
      </div>
      
      <FadeIn><Services /></FadeIn>

      {/* Featured Treatment Section */}
      <section className="section-padding bg-black text-white my-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h4 className="text-gray-400 tracking-[0.2em] uppercase text-sm mb-4">Featured Treatment</h4>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Premium Dental Implants</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Restore your smile's natural function and aesthetic with our state-of-the-art dental implants. 
                Designed to look, feel, and function like your natural teeth, our implants offer a permanent 
                solution to tooth loss.
              </p>
              <ul className="space-y-4 mb-10 text-gray-300 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  Lifetime durability and strength
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  Preserves natural bone structure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  Pain-free placement procedure
                </li>
              </ul>
              <Button 
                onClick={() => navigate('/contact')}
                className="!bg-white !text-black border-white hover:!bg-transparent hover:!text-white"
              >
                Consult a Specialist
              </Button>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}assets/gallery-4.jpg`}
                alt="Dental Implants" 
                className="w-full h-[400px] object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <FadeIn><Expertise /></FadeIn>

      {/* Patient Journey Section */}
      <section className="section-padding bg-dot-pattern border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Our Process</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Your Journey With Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              We believe in a transparent, comfortable, and personalized experience from the moment you step into our clinic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gray-200 z-0"></div>
            
            {[
              {
                step: "01",
                title: "Comprehensive Consultation",
                desc: "We start with a thorough examination, including digital imaging, to understand your unique oral health needs and cosmetic goals."
              },
              {
                step: "02",
                title: "Custom Treatment Plan",
                desc: "Our specialists design a tailored plan, presenting you with all available options, timelines, and transparent pricing without pressure."
              },
              {
                step: "03",
                title: "Expert Execution & Care",
                desc: "Experience pain-free treatment in our luxurious suites, followed by comprehensive aftercare to ensure lasting, beautiful results."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="relative z-10 flex flex-col items-center text-center bg-white">
                  <div className="w-24 h-24 rounded-full bg-stone-50 border border-gray-200 flex items-center justify-center mb-6 text-2xl font-serif text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed px-4">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom max-w-5xl">
          <div className="bg-neutral-900 text-white p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="w-full md:w-2/3">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Precision &amp; Comfort</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">State-of-the-Art Dental Technology</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                We invest in the latest advancements in dental technology to ensure your treatments are minimally invasive, highly precise, and completely comfortable. From 3D imaging to painless digital dentistry, experience the future of oral care.
              </p>
              <div className="flex flex-wrap gap-4">
                {['3D CBCT Scanners', 'Digital Smile Design', 'Laser Dentistry', 'Intraoral Cameras'].map(badge => (
                  <span key={badge} className="px-4 py-2 border border-neutral-700 text-xs tracking-widest uppercase text-gray-300">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <Button 
                onClick={() => navigate('/contact')}
                className="!bg-white !text-black border-white hover:!bg-transparent hover:!text-white whitespace-nowrap"
              >
                Experience It
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Patient FAQ</h2>
            <p className="text-gray-500 font-light">
              Common questions about our treatments and clinic.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
                  <h4 className="font-serif text-xl">{faq.question}</h4>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </div>
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
        </div>
      </section>

      <FadeIn>
        <SeoBlock title="Advanced Dental Services & Treatments">
          <p className="mb-6">
            We offer a complete range of dental services including preventive, cosmetic, restorative, and orthodontic treatments. Whether you need a routine dental examination, a dramatic smile makeover with porcelain veneers, or a painless root canal therapy to save a damaged tooth, our specialists provide customized treatment plans using modern dental techniques.
          </p>
          <p className="mb-6">
            Our clinic is a recognized leader in restorative procedures such as dental implants, offering permanent, natural-looking solutions for missing teeth. For those seeking a straighter smile, our discreet clear aligners and traditional braces provide effective orthodontic correction. We also excel in cosmetic enhancements, providing professional teeth whitening that dramatically brightens your smile in a single session.
          </p>
          <p>
            Beyond cosmetics, our family-friendly practice provides dedicated pediatric dentistry to ensure your children build healthy habits early on, alongside advanced gum treatments to combat periodontal disease. At Al-Ahad Dental Care, every service is performed with precision, utilizing the best materials available to ensure lasting, beautiful results.
          </p>
        </SeoBlock>
      </FadeIn>
    </main>
  )
}
