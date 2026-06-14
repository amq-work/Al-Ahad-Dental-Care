import React, { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { Button } from './ui/Button'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function Appointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    if (!executeRecaptcha) {
      setErrorMessage('reCAPTCHA has not loaded yet. Please wait a moment and try again.')
      return
    }

    setErrorMessage('')
    setStatus('submitting')
    
    try {
      const token = await executeRecaptcha('appointment_booking')
      
      if (!token) {
        throw new Error('Failed to generate reCAPTCHA token')
      }

      // Simulate API call using the token
      setTimeout(() => {
        setStatus('success')
      }, 1500)

    } catch (error) {
      setStatus('error')
      setErrorMessage('reCAPTCHA verification failed. Please try again.')
    }
  }

  return (
    <section className="flex flex-col md:flex-row-reverse bg-white border-t border-gray-200" id="contact">
      <div className="w-full md:w-1/2 px-8 md:px-24 py-24 flex flex-col justify-center">
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <CheckCircle2 size={64} className="text-green-600 mb-6" />
            <h2 className="font-serif text-3xl mb-4">Request Submitted</h2>
            <p className="text-gray-500 font-light mb-8 max-w-sm">
              Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.
            </p>
            <Button onClick={() => {
              setStatus('idle')
              setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '' })
            }} variant="outline">
              Book Another
            </Button>
          </motion.div>
        ) : (
          <>
            <h2 className="font-serif text-4xl mb-6">Schedule An Appointment</h2>
            <p className="text-gray-500 font-light mb-12 max-w-md">
              Your journey to a perfect smile begins here. Fill out the form below
              and our team will contact you to confirm your appointment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder-gray-400 text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder-gray-400 text-black"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder-gray-400 text-black"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none placeholder-gray-400 text-black"
                />
              </div>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors rounded-none appearance-none ${formData.service ? 'text-black' : 'text-gray-400'}`}
              >
                <option value="" disabled>Select Service *</option>
                <option value="consultation">General Consultation</option>
                <option value="veneers">Porcelain Veneers</option>
                <option value="implants">Dental Implants</option>
                <option value="aligners">Clear Aligners</option>
              </select>

              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Book Appointment'}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto">
        <img
          src={`${import.meta.env.BASE_URL}assets/gallery-4.jpg`}
          alt="Dental Clinic in DHA Lahore"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  )
}
