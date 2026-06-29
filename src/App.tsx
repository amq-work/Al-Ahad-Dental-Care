import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { LoadingScreen } from './components/LoadingScreen'

// Lazy load Pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })))
const BlogsPage = lazy(() => import('./pages/BlogsPage').then(module => ({ default: module.BlogsPage })))
const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ default: module.BlogPost })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(module => ({ default: module.ServiceDetail })))

export function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <LoadingScreen />
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/non.html" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
