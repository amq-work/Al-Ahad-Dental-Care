import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { blogs } from '../data/blogs'

export function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const post = blogs.find(b => b.id === id)

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return (
      <main className="pt-40 min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The blog post you are looking for does not exist.</p>
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blogs
        </button>
      </main>
    )
  }

  return (
    <main className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full bg-black flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.img} 
            alt={post.title}
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 w-full">
          <FadeIn>
            <Link 
              to="/blogs"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-xs text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>
            
            <div className="flex gap-4 items-center mb-6">
              <span className="bg-white text-black text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold">
                {post.category}
              </span>
              <span className="text-sm font-light text-gray-300">
                {post.date}
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl max-w-4xl leading-[1.1] text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`} alt="Author" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                <p className="text-sm font-medium">Dr. Ayaz Malik</p>
                <p className="text-xs text-gray-400 font-light">Lead Dentist</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-dot-pattern relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                
                {/* Author Info */}
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">About the Author</p>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={`${import.meta.env.BASE_URL}assets/gallery-2.jpg`} alt="Dr. Ayaz Malik" className="w-16 h-16 rounded-full object-cover grayscale" />
                    <div>
                      <p className="font-serif text-lg text-black">Dr. Ayaz Malik</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Lead Dentist</p>
                    </div>
                  </div>
                  <p className="text-sm font-light text-gray-500 leading-relaxed">
                    Specializing in cosmetic dentistry and implantology with over 15 years of experience transforming smiles in Lahore.
                  </p>
                </div>

                {/* Share Article */}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Share Article</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Facebook', url: 'https://facebook.com' },
                      { name: 'Twitter', url: 'https://twitter.com' },
                      { name: 'LinkedIn', url: 'https://linkedin.com' }
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-500 hover:text-black transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                          {social.name[0]}
                        </span>
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Recent Posts</p>
                  <div className="space-y-6">
                    {blogs.filter(b => b.id !== id).slice(0, 2).map(recent => (
                      <Link to={`/blogs/${recent.id}`} key={recent.id} className="block group">
                        <div className="h-24 mb-3 overflow-hidden">
                          <img src={recent.img} alt={recent.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h4 className="font-serif text-sm group-hover:text-gray-500 transition-colors leading-snug">{recent.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block">Categories</p>
                  <ul className="space-y-3">
                    {['Oral Health', 'Cosmetic', 'Aftercare', 'Dental Implants'].map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => navigate('/blogs')}
                          className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-2 h-[1px] bg-gray-300 group-hover:w-4 group-hover:bg-black transition-all"></span>
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Mini */}
                <div className="bg-neutral-950 text-white p-6">
                  <p className="font-serif text-xl mb-2">Join our Newsletter</p>
                  <p className="text-xs text-gray-400 font-light mb-4 leading-relaxed">
                    Get weekly dental tips and exclusive offers straight to your inbox.
                  </p>
                  <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="Your email address" className="w-full bg-white/10 px-4 py-2 text-sm focus:outline-none focus:bg-white/20 transition-colors" required />
                    <button type="submit" className="w-full bg-white text-black py-2 text-xs uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 max-w-3xl">
              <FadeIn>
                <p className="text-xl md:text-2xl font-serif text-gray-800 leading-relaxed mb-12 italic">
                  "{post.excerpt}"
                </p>
                
                <div className="blog-content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                
                {/* Mobile Share (hidden on desktop) */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex lg:hidden justify-between items-center">
                  <p className="text-sm font-serif italic text-gray-500">Share this article</p>
                  <div className="flex gap-4">
                    {[
                      { name: 'FB', url: 'https://facebook.com' },
                      { name: 'TW', url: 'https://twitter.com' },
                      { name: 'IN', url: 'https://linkedin.com' }
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs hover:border-black hover:bg-black hover:text-white transition-all"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-neutral-950 text-white text-center">
        <div className="container-custom max-w-2xl">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Want to learn more?</span>
            <h2 className="font-serif text-4xl mb-8">Ready to transform your smile?</h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-black hover:text-white border border-white transition-all group"
            >
              Book a Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
