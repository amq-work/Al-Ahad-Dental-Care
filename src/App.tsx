import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// Lazy load Pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })))
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(module => ({ default: module.BlogsPage })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))

export function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
