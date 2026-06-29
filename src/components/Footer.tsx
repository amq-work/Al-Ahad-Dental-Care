import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Dental Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12">
      <div className="container-custom">

        {/* Top CTA band */}
        <div className="border border-neutral-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Ready to Transform Your Smile?</p>
            <h3 className="font-serif text-3xl md:text-4xl">Book a Consultation Today</h3>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-black hover:text-white border border-white transition-colors whitespace-nowrap"
          >
            Get Started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                alt="Al-Ahad Dental Logo"
                className="h-10 object-contain invert brightness-0"
              />
            </Link>
            <p className="text-gray-500 font-light leading-relaxed text-sm mb-8">
              Elevating dental care to an art form. Experience excellence, precision, and personalized attention in Paragon City, Lahore.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <span className="text-xs">FB</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <span className="text-xs">IG</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                <span className="text-xs">TW</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-500 text-sm font-light hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-neutral-700 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Opening Hours</h4>
            <ul className="space-y-3 text-sm font-light">
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
                { day: 'Sunday', time: 'Closed' },
              ].map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-gray-500 border-b border-neutral-900 pb-3">
                  <span>{h.day}</span>
                  <span className={h.time === 'Closed' ? 'text-red-400' : 'text-white'}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Contact Us</h4>
            <address className="not-italic space-y-4">
              <a
                href="https://maps.app.goo.gl/MetEgR51tAdCevth6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-500 text-sm font-light hover:text-white transition-colors group"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0 group-hover:text-white" />
                <span>Al-Ahad Dental Care,<br />75 S Commercial Area, Imperial Garden Homes Paragon City, Lahore, 53200, Pakistan</span>
              </a>
              <a
                href="https://wa.me/923004002365?text=I%20want%20to%20book%20a%20session%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 text-sm font-light hover:text-white transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                +92 300 4002365
              </a>
              <a
                href="mailto:hello@alahaddentalcare.com"
                className="flex items-center gap-3 text-gray-500 text-sm font-light hover:text-white transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                hello@alahaddentalcare.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-widest gap-4">
          <p>&copy; {new Date().getFullYear()} Al-Ahad Dental Care. All rights reserved. <span className="ml-2 border-l border-neutral-800 pl-2">Designed by Digital Nexes</span></p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
