import React, { ReactNode } from 'react'

interface SeoBlockProps {
  title: string;
  children: ReactNode;
}

export function SeoBlock({ title, children }: SeoBlockProps) {
  return (
    <section className="py-20 bg-stone-50 border-t border-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-black">
            {title}
          </h2>
          <div className="prose prose-lg text-gray-500 font-light leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
