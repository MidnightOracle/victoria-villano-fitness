import React from 'react'

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12">Fitness Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Importance of Warm-up</h2>
          <p className="text-gray-300 mb-4">
            Learn why warming up is crucial for your workout routine and how to do it properly.
          </p>
          <a href="#" className="text-[#bca16b] hover:text-[#d4b87d] transition-colors">Read more →</a>
        </article>

        <article className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nutrition Tips for Better Performance</h2>
          <p className="text-gray-300 mb-4">
            Discover the best foods to fuel your workouts and support your fitness goals.
          </p>
          <a href="#" className="text-[#bca16b] hover:text-[#d4b87d] transition-colors">Read more →</a>
        </article>

        <article className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recovery Strategies</h2>
          <p className="text-gray-300 mb-4">
            Essential tips for proper recovery and how it affects your progress.
          </p>
          <a href="#" className="text-[#bca16b] hover:text-[#d4b87d] transition-colors">Read more →</a>
        </article>
      </div>
    </div>
  )
}

export default Blog 