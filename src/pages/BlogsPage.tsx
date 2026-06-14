import React from 'react'
import { Blog } from '../components/Blog'
import { FadeIn } from '../components/ui/FadeIn'

export function BlogsPage() {
  return (
    <main className="pt-32 min-h-screen">
      <div className="container-custom text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Journal & Insights</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
          Read our latest articles on oral health, cosmetic dentistry, and clinic updates.
        </p>
      </div>
      <FadeIn><Blog /></FadeIn>
    </main>
  )
}
