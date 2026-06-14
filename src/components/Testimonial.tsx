import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Modern dentistry at its finest. It was an amazing experience. The practice has an incredibly calm feel and the results are highly natural. The best clinic in the city, I highly recommend it.",
    author: "Emily Chen"
  },
  {
    quote: "I've always been anxious about dental visits, but Dr. Al-Ahad and the team completely changed my perspective. The process was painless and the results are stunning.",
    author: "Michael Roberts"
  },
  {
    quote: "From the beautiful waiting room to the state-of-the-art equipment, everything here screams luxury and care. My veneers look perfectly natural.",
    author: "Sarah Jenkins"
  }
];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Quote size={400} className="text-white" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            What Our Patients <br className="hidden md:block" /> Say About Us
          </h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative min-h-[350px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full"
            >
              <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-8 md:p-14">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <blockquote className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-10 text-gray-200">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-8 mt-8">
                  <div>
                    <p className="uppercase tracking-widest text-sm font-semibold text-white">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-neutral-500 text-xs mt-1">Verified Patient</p>
                  </div>
                  <div className="text-neutral-600 font-serif font-light text-lg tracking-widest">
                    0{currentIndex + 1} <span className="text-neutral-800 mx-2">/</span> 0{testimonials.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
