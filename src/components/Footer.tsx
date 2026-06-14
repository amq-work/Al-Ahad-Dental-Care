import React from 'react'
export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="Al-Ahad Dental Logo" className="h-10 object-contain invert brightness-0" />
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Elevating dental care to an art form. Experience excellence,
              precision, and personalized attention in the heart of Lahore.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Dental Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Smile Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span> <span>10am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span> <span>Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <address className="text-gray-400 font-light text-sm not-italic space-y-4">
              <p>
                123 Dental Avenue, Suite 100
                <br />
                DHA Phase 6, Lahore
              </p>
              <p>+1 (555) 123-4567</p>
              <p>hello@alahaddental.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} Al-Ahad Dental Care. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
