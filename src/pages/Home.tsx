import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-meditation.jpg" 
            alt="Meditation at sunset" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-2xl">
            Empowering You to a Healthier, Stronger Life
          </h1>
          <p className="text-xl text-white mb-8 max-w-xl">
            Join group classes to help improve mobility to move free, feel good again, and live a fuller life!
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#bca16b] text-black px-8 py-3 rounded text-lg font-medium hover:bg-[#d4b87d] transition-colors"
          >
            Book a Session →
          </Link>
        </div>
      </section>

      {/* Feel Good, Move Better Section */}
      <section className="py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Feel Good, Move Better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/images/yoga-fitness.jpg" alt="Yoga/Golf Fitness" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-xl mb-2">Yoga/Golf Fitness</h3>
              <p className="text-sm text-black/80">Build strength, flexibility and balance to move better and stay focused on and off the mat</p>
            </div>
            <div className="text-center">
              <img src="/images/aqua-fitness.jpg" alt="Aqua Fitness" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-xl mb-2">Aqua Fitness</h3>
              <p className="text-sm text-black/80">A refreshing full-body workout using water resistance to boost strength and mobility</p>
            </div>
            <div className="text-center">
              <img src="/images/dance-fit.jpg" alt="Dance Fit" className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-xl mb-2">Dance Fit</h3>
              <p className="text-sm text-black/80">Basic cardio, improve coordination and let your mood lift while dancing to fun beats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Training Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-[#bca16b] p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-black mb-0">Private Training & Specialized Sessions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#bca16b] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">Private Training</h3>
              <p className="text-black/80">1-on-1 coaching personalized to your personal fitness goals. Improve mobility, build strength, and enhance balance to enjoy life better.</p>
            </div>
            <div className="bg-[#bca16b] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">Specialized Formats</h3>
              <p className="text-black/80">Golf Fitness, Aqua Personal Training, Private Fitness Assessment, Corrective Exercise and more! Contact me to discuss what format would be best for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Image Gallery</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <img src="/images/gallery-1.jpg" alt="Fitness class in action" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">←</button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">→</button>
            <div className="flex justify-center mt-4 gap-2">
              <button className="w-2 h-2 rounded-full bg-black"></button>
              <button className="w-2 h-2 rounded-full bg-black/30"></button>
              <button className="w-2 h-2 rounded-full bg-black/30"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Flow, Strength & Balance Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Flow, Strength & Balance</h2>
          <p className="text-center text-gray-300 mb-12">Your gym space for mindful stress, mental recovery, and healthy living</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-1.jpg" alt="Blog post 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">Blog title heading will go here</h3>
                <p className="text-gray-600 mb-4">Short intro text will go here to explain what this blog post is about and a little more...</p>
                <Link to="/blog/1" className="text-black font-medium">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-2.jpg" alt="Blog post 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">Blog title heading will go here</h3>
                <p className="text-gray-600 mb-4">Short intro text will go here to explain what this blog post is about and a little more...</p>
                <Link to="/blog/2" className="text-black font-medium">Read More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-3.jpg" alt="Blog post 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4">Blog title heading will go here</h3>
                <p className="text-gray-600 mb-4">Short intro text will go here to explain what this blog post is about and a little more...</p>
                <Link to="/blog/3" className="text-black font-medium">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Victoria Section */}
      <section className="py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/victoria-profile.jpg" alt="Victoria with her dog" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Hi, I'm Victoria</h2>
              <p className="text-black/80 mb-4">
                A certified personal trainer and group fitness instructor, I am passionate about helping others achieve their fitness goals and live healthier. I specialize in mobility fitness from functional movement to aqua fitness, and I'm here to help you move better and feel stronger.
              </p>
              <p className="text-black/80 mb-4">
                Whether you're looking to build strength or improve mobility, I'm here to guide you on your fitness journey. Let's create a program that helps you reach your goals.
              </p>
              <p className="text-black/80">
                My mission is empowering individuals of all ages to increase movement, improve their daily lives, and bring fun back into working out. Together, we'll create a sustainable fitness routine that fits your lifestyle while meeting + crushing goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
          <div className="flex justify-center gap-2 mt-4">
            <button className="w-2 h-2 rounded-full bg-white"></button>
            <button className="w-2 h-2 rounded-full bg-white/30"></button>
            <button className="w-2 h-2 rounded-full bg-white/30"></button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Ready to get started?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link 
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded text-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Contact Me
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-black font-medium">Call me at</span>
              <a href="tel:+13865693781" className="text-black font-bold">+1-386-569-3781</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 