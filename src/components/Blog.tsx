import React from 'react'
export function Blog() {
  const posts = [
    {
      img: `${import.meta.env.BASE_URL}assets/blog-1.jpg`,
      title: 'Bad Breath: Causes & Prevention',
      date: 'Oct 12, 2023',
      excerpt:
        'Understanding the root causes of halitosis and how modern dental practices can help you maintain fresh breath.',
    },
    {
      img: `${import.meta.env.BASE_URL}assets/blog-2.jpg`,
      title: 'Cosmetic Dentistry in the Modern Era',
      date: 'Nov 05, 2023',
      excerpt:
        'How social media has influenced the rise of cosmetic dentistry and what treatments are actually worth it.',
    },
    {
      img: `${import.meta.env.BASE_URL}assets/blog-3.jpg`,
      title: 'Maintain White Teeth After Treatment',
      date: 'Dec 01, 2023',
      excerpt:
        'Essential tips and daily habits to preserve your perfectly white smile long after your whitening session.',
    },
  ]
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Dentistry Blog</h2>
          <p className="text-gray-500 font-light">
            Your source for information to keep your smile healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 group cursor-pointer"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  {post.date}
                </p>
                <h3 className="font-sans font-semibold text-xl mb-4 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-light text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">
                  Read Article
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
