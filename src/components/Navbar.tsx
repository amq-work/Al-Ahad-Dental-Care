import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Button } from './ui/Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleBookClick = () => {
    setMobileMenuOpen(false)
    navigate('/contact')
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom mx-auto flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Al-Ahad Dental Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-black/70 font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative group transition-colors py-2 ${isActive ? 'text-black' : 'hover:text-black'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-black transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Button 
            onClick={() => navigate('/contact')} 
            className="hidden md:inline-flex py-3 px-8 text-xs font-semibold hover:scale-105 transition-transform"
          >
            Book Appointment
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black p-2 z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-black/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src={`${import.meta.env.BASE_URL}assets/logo.png`}
                  alt="Al-Ahad Dental Logo"
                  className="h-8 object-contain"
                />
              </Link>
              <button
                className="p-2 text-black hover:rotate-90 transition-transform duration-300"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                      className={`font-serif text-4xl transition-colors ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="p-8 pb-12 mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                  Ready for a new smile?
                </p>
                <Button onClick={handleBookClick} className="w-full py-4 text-sm">
                  Book Appointment
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
