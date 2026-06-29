import React from 'react'
import { Blog } from '../components/Blog'
import { FadeIn } from '../components/ui/FadeIn'
import { Button } from '../components/ui/Button'
import { SeoBlock } from '../components/SeoBlock'

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

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50 mt-12">
        <div className="container-custom max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-500 font-light mb-8 max-w-xl mx-auto">
              Get the latest dental health tips, exclusive cosmetic treatment offers, and clinic news 
              delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                required
              />
              <Button type="submit" className="whitespace-nowrap px-8 py-4">
                Subscribe
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <SeoBlock title="Expert Dental Advice & Oral Hygiene Guides">
          <p className="mb-6">
            Our comprehensive dental blog provides expert insights into maintaining optimal oral health, detailed preventive care routines, and in-depth explanations of cosmetic dentistry procedures. We believe that an educated patient is an empowered patient, which is why our dental specialists regularly publish easy-to-understand guides on everything from daily oral hygiene tips to recovering from oral surgery.
          </p>
          <p className="mb-6">
            Whether you are researching the differences between clear aligners and traditional braces, trying to understand the signs that you might need a root canal, or looking for natural ways to maintain your newly whitened teeth, our articles cover the full spectrum of common dental problems and their solutions.
          </p>
          <p>
            Explore our practical tips and treatment information to ensure you and your family maintain healthy teeth and gums throughout every stage of life. Check back often for professional guidance directly from Lahore's leading dental team.
          </p>
        </SeoBlock>
      </FadeIn>
    </main>
  )
}
