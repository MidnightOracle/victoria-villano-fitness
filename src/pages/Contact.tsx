import React from 'react'

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#bca16b]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-black">Get in Touch</h1>
          <p className="text-center text-black text-lg mb-12 max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact me for personalized training sessions or join our group classes in Palm Coast.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-[32px] p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-3 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-lg"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-3 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-lg"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-3 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-lg"
                  placeholder="Tell me about your fitness goals..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-xl hover:bg-gray-900 transition-colors font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-lg">Call me at:</span>
                <a href="tel:+13865693781" className="text-black font-bold text-lg hover:underline">
                  +1-386-569-3781
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-lg">Email:</span>
                <a href="mailto:victoria@example.com" className="text-black font-bold text-lg hover:underline">
                  victoria@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 