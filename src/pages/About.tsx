import React from 'react'
import { DoctorProfile } from '../components/DoctorProfile'
import { FadeIn } from '../components/ui/FadeIn'
import { SeoBlock } from '../components/SeoBlock'
import { Shield, Heart, Award } from 'lucide-react'

export function About() {
  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">About Our Clinic</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          We believe in combining advanced dental technology with editorial aesthetics 
          to provide an unparalleled experience in Lahore.
        </p>
      </div>
      
      {/* Our Philosophy Section */}
      <section className="section-padding bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`}
                  alt="Modern Dental Clinic" 
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-4xl mb-6">Our Philosophy</h2>
                <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
                  <p className="mb-4">
                    At Al-Ahad Dental Care, we redefine what a visit to the dentist should feel like. 
                    Our philosophy is grounded in minimally invasive treatments, meticulous attention to detail, 
                    and a deeply personalized approach to patient care. We believe that exceptional dentistry is 
                    the perfect marriage of advanced medical science and refined artistry.
                  </p>
                  <p className="mb-4">
                    We have curated an environment that feels less like a clinical facility and more like a 
                    serene wellness retreat. From the moment you walk through our doors in Paragon City, Lahore, 
                    you are treated with the utmost respect and luxury. We take the time to understand your unique 
                    needs, alleviate your anxieties, and craft a bespoke treatment plan that guarantees a lasting, radiant smile.
                  </p>
                  <p>
                    Whether we are performing a complex full-mouth reconstruction or a simple preventative cleaning, 
                    our commitment to excellence never wavers. Your comfort, safety, and satisfaction are at the core 
                    of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Al-Ahad Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl mb-10 text-center">The Al-Ahad Story</h2>
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none">
                <p className="mb-6">
                  Founded with a vision to elevate the standard of dental care in Pakistan, Al-Ahad Dental Care began as a boutique clinic dedicated to providing world-class dentistry to the residents of Lahore. Over the years, we have grown into a premier destination for both local and international patients seeking unparalleled expertise in cosmetic, restorative, and general dentistry.
                </p>
                <p className="mb-6">
                  Our journey has been defined by a relentless pursuit of innovation. We were among the first clinics in the region to fully integrate digital dentistry into our daily workflow. By adopting 3D Cone Beam Computed Tomography (CBCT), intraoral scanners, and computer-aided design (CAD/CAM) technology, we revolutionized how we diagnose and treat complex dental issues. This commitment to technology means fewer appointments, highly predictable outcomes, and significantly reduced discomfort for our patients.
                </p>
                <p className="mb-10">
                  Today, Al-Ahad Dental Care stands as a beacon of clinical excellence in Imperial Garden Homes. Our multidisciplinary team of specialists collaborates on every complex case, ensuring that whether you need dental implants, porcelain veneers, or clear aligner therapy, you receive comprehensive, coordinated care under one roof.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sterilization and Safety Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Uncompromising Standards</span>
                <h2 className="font-serif text-4xl mb-6">Sterilization & Safety</h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-6">
                  <p>
                    In the post-pandemic era, strict infection control is more critical than ever. At Al-Ahad Dental Care, we do not merely meet local health guidelines; we exceed international sterilization protocols set by global health organizations.
                  </p>
                  <p>
                    Our dedicated sterilization center utilizes hospital-grade autoclaves and ultrasonic cleaners. Every instrument is meticulously cleaned, sealed in sterile pouches, and tracked before being used. Furthermore, our treatment rooms are equipped with advanced medical-grade air filtration systems that continuously purify the air, removing airborne pathogens and ensuring a completely safe environment for both our patients and our staff.
                  </p>
                  <p>
                    We believe that transparency in our safety protocols builds trust. When you sit in our dental chairs, you can have complete peace of mind knowing that your health is protected by the most rigorous hygiene standards in the industry.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2">
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-800 p-8 rounded-lg text-center">
                    <h4 className="text-3xl font-serif mb-2">100%</h4>
                    <p className="text-xs tracking-widest text-gray-400 uppercase">Sterile Instruments</p>
                  </div>
                  <div className="bg-neutral-800 p-8 rounded-lg text-center">
                    <h4 className="text-3xl font-serif mb-2">HEPA</h4>
                    <p className="text-xs tracking-widest text-gray-400 uppercase">Air Filtration</p>
                  </div>
                  <div className="bg-neutral-800 p-8 rounded-lg text-center">
                    <h4 className="text-3xl font-serif mb-2">ISO</h4>
                    <p className="text-xs tracking-widest text-gray-400 uppercase">Certified Protocols</p>
                  </div>
                  <div className="bg-neutral-800 p-8 rounded-lg text-center">
                    <h4 className="text-3xl font-serif mb-2">Zero</h4>
                    <p className="text-xs tracking-widest text-gray-400 uppercase">Cross Contamination</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Why Choose Us</h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              We stand apart through our commitment to excellence, technology, and your comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black text-white flex items-center justify-center rounded-full mb-6">
                  <Shield size={28} />
                </div>
                <h3 className="font-serif text-2xl mb-4">Advanced Technology</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Equipped with the latest 3D imaging and painless injection systems to ensure the highest standard of precision.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black text-white flex items-center justify-center rounded-full mb-6">
                  <Award size={28} />
                </div>
                <h3 className="font-serif text-2xl mb-4">Expert Specialists</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Our team consists of highly qualified professionals specializing in complex implants and cosmetic makeovers.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black text-white flex items-center justify-center rounded-full mb-6">
                  <Heart size={28} />
                </div>
                <h3 className="font-serif text-2xl mb-4">Luxurious Comfort</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  A spa-like environment designed to soothe anxiety, featuring premium amenities and personalized care.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Doctor Profile Component */}
      <div className="bg-gray-50">
        <FadeIn><DoctorProfile /></FadeIn>
      </div>

      <FadeIn>
        <SeoBlock title="Trusted Dental Authority in Lahore">
          <p className="mb-6">
            At Al-Ahad Dental Care, our mission is to provide high-quality dental care through experienced professionals, modern equipment, and personalized treatment plans. Over our extensive clinic history, we have established ourselves as a beacon of clinical excellence and patient trust in Lahore. We are committed to creating a comfortable, anxiety-free environment where patients receive trusted dental solutions tailored strictly to their unique oral health needs.
          </p>
          <p className="mb-6">
            Our team is led by expert dentists who prioritize a patient-first philosophy. We believe that informed patients make the best decisions regarding their health, which is why we dedicate time to explain procedures, discuss alternatives, and outline the benefits of our minimally invasive approaches. Whether you are visiting for preventative care or a complex full-mouth restoration, you are treated with the highest level of respect and medical integrity.
          </p>
          <p>
            Equipped with state-of-the-art technology and premium facilities, including 3D imaging and rigorous sterilization protocols, Al-Ahad Dental Care guarantees safety, precision, and comfort. Trust us to protect your oral health with unwavering dedication and clinical mastery.
          </p>
        </SeoBlock>
      </FadeIn>
    </main>
  )
}
