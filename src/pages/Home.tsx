import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Training</h1>
        <p className="text-xl text-gray-300">
          Professional fitness training and coaching services to help you achieve your goals.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Training</h2>
          <p>Customized workout plans tailored to your specific needs and goals.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Group Classes</h2>
          <p>Join our energetic group classes for motivation and community support.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nutrition Coaching</h2>
          <p>Expert guidance on nutrition to complement your fitness journey.</p>
        </div>
      </section>
    </div>
  )
}

export default Home 