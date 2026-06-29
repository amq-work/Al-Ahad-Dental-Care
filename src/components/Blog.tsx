import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { blogs as posts } from '../data/blogs'

export function Blog() {
  const navigate = useNavigate()

  return (
    <section className="section-padding bg-dot-pattern">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">Journal & Insights</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Dentistry Blog</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              onClick={() => navigate(`/blogs/${post.id}`)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden mb-6 relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Category chip */}
                <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
                  {post.category}
                </span>
              </div>

              {/* Date */}
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{post.date}</p>

              {/* Title */}
              <h3 className="font-serif text-xl mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 font-light text-sm mb-5 leading-relaxed line-clamp-3 flex-grow">
                {post.excerpt}
              </p>

              {/* Read link */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium group-hover:gap-4 transition-all duration-300">
                Read Article
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
