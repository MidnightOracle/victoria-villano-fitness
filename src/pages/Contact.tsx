import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init('Px3HGzTMd41HnjaxQ')
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const data = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
        to_email: 'support@rohogaka.com'
      }

      await emailjs.send(
        'service_6dxsoeb',
        'template_imcasvb',
        data
      )

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#bca16b]">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 text-black">Get in Touch</h1>
          <p className="text-center text-black text-base sm:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact me for personalized training sessions or join our group classes in Palm Coast.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                There was an error sending your message. Please try again later.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <label htmlFor="name" className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-base sm:text-lg"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-base sm:text-lg"
                  placeholder="Your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base sm:text-lg font-medium mb-2 md:mb-3 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border border-gray-200 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bca16b] text-black text-base sm:text-lg"
                  placeholder="Tell me about your fitness goals..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg md:rounded-xl hover:bg-gray-900 transition-colors font-medium text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-base sm:text-lg">Call me at:</span>
                <a href="tel:+13865693781" className="text-black font-bold text-base sm:text-lg hover:underline">
                  +1-386-569-3781
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black font-medium text-base sm:text-lg">Email:</span>
                <a href="mailto:support@rohogaka.com" className="text-black font-bold text-base sm:text-lg hover:underline">
                  support@rohogaka.com
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