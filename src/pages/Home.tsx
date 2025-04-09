import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full bg-black flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <img 
            src="/images/hero-meditation.jpg" 
            alt="Meditation at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 flex items-center bg-black p-6 md:p-12 min-h-[50vh] md:min-h-0">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Empowering You to a Healthier, Stronger Life
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8">
              Join group classes or book a private session to move, feel, and live better, right here in Palm Coast.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-[#bca16b] text-black px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-medium hover:bg-[#d4b87d] transition-colors w-full md:w-auto justify-center"
            >
              Book a Session <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feel Good, Move Better Section */}
      <section id="feel-good-move-better" className="py-16 md:py-24 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-black">Feel Good, Move Better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="rounded-[32px] overflow-hidden mb-6 aspect-square">
                <img 
                  src="/images/yoga-fitness.jpg" 
                  alt="Yoga/Golf Fitness" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-black">Yoga/Golf Fitness</h3>
              <p className="text-base sm:text-lg text-black">
                Build strength, flexibility, and balance to move better and feel stronger, on or off the course.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-[32px] overflow-hidden mb-6 aspect-square">
                <img 
                  src="/images/aqua-fitness.jpg" 
                  alt="Aqua Fitness" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-black">Aqua Fitness</h3>
              <p className="text-base sm:text-lg text-black">
                A refreshing full-body workout using water resistance to boost strength and endurance safely.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-[32px] overflow-hidden mb-6 aspect-square">
                <img 
                  src="/images/dance-fit.jpg" 
                  alt="Dance Fit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-black">Dance Fit</h3>
              <p className="text-base sm:text-lg text-black">
                Burn calories, improve coordination, and lift your mood — all while dancing to fun rhythms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Training Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-[#bca16b] p-6 md:p-8 rounded-lg mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-0">Private Training & Specialized Sessions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#bca16b] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 md:mb-4">Private Training</h3>
              <p className="text-base sm:text-lg text-black">1-on-1 coaching personalized to your personal fitness goals. Improve mobility, build strength, and enhance balance to enjoy life better.</p>
            </div>
            <div className="bg-[#bca16b] p-6 md:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 md:mb-4">Specialized Formats</h3>
              <p className="text-base sm:text-lg text-black">Golf Fitness, Aqua Personal Training, Private Fitness Assessment, Corrective Exercise and more! Contact me to discuss what format would be best for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-12 md:py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 text-black">Image Gallery</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <img src="/images/gallery-1.jpg" alt="Fitness class in action" className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" />
            </div>
            <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">←</button>
            <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">→</button>
            <div className="flex justify-center mt-4 gap-2">
              <button className="w-2 h-2 rounded-full bg-black"></button>
              <button className="w-2 h-2 rounded-full bg-black/30"></button>
              <button className="w-2 h-2 rounded-full bg-black/30"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Flow, Strength & Balance Section */}
      <section id="flow-strength-balance" className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-white hover:text-[#bca16b] transition-colors">Flow, Strength & Balance</h2>
          </Link>
          <p className="text-center text-gray-300 mb-8 md:mb-12 text-base sm:text-lg">Your gym space for mindful stress, mental recovery, and healthy living</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-1.jpg" alt="Blog post 1" className="w-full h-48 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-3 md:mb-4">Mindful Movement: The Key to Better Exercise</h3>
                <p className="text-gray-600 mb-4 text-base">Discover how mindful movement can enhance your workout effectiveness and prevent injuries.</p>
                <Link to="/blog/mindful-movement" className="text-black font-medium inline-flex items-center">Read More <span className="ml-1">→</span></Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-2.jpg" alt="Blog post 2" className="w-full h-48 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-3 md:mb-4">Building Strength Foundations</h3>
                <p className="text-gray-600 mb-4 text-base">Learn the fundamental principles of strength training for long-term success.</p>
                <Link to="/blog/strength-foundations" className="text-black font-medium inline-flex items-center">Read More <span className="ml-1">→</span></Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img src="/images/blog-3.jpg" alt="Blog post 3" className="w-full h-48 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="font-bold text-lg sm:text-xl mb-3 md:mb-4">Finding Balance in Your Wellness Journey</h3>
                <p className="text-gray-600 mb-4 text-base">Tips for creating a balanced approach to fitness and overall wellness.</p>
                <Link to="/blog/balance-wellness" className="text-black font-medium inline-flex items-center">Read More <span className="ml-1">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Victoria Section */}
      <section id="about-victoria" className="py-12 md:py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img src="/images/victoria-profile.jpg" alt="Victoria with her dog" className="rounded-lg shadow-xl w-full" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-black">Hi, I'm Victoria</h2>
              <p className="text-base sm:text-lg text-black mb-4">
                A certified personal trainer and group fitness instructor, I am passionate about helping others achieve their fitness goals and live healthier. I specialize in mobility fitness from functional movement to aqua fitness, and I'm here to help you move better and feel stronger.
              </p>
              <p className="text-base sm:text-lg text-black mb-4">
                Whether you're looking to build strength or improve mobility, I'm here to guide you on your fitness journey. Let's create a program that helps you reach your goals.
              </p>
              <p className="text-base sm:text-lg text-black">
                My mission is empowering individuals of all ages to increase movement, improve their daily lives, and bring fun back into working out. Together, we'll create a sustainable fitness routine that fits your lifestyle while meeting + crushing goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base sm:text-lg text-gray-300 italic max-w-2xl mx-auto">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
          <div className="flex justify-center gap-2 mt-4">
            <button className="w-2 h-2 rounded-full bg-white"></button>
            <button className="w-2 h-2 rounded-full bg-white/30"></button>
            <button className="w-2 h-2 rounded-full bg-white/30"></button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-[#bca16b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-black">Ready to get started?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <Link 
              to="/contact"
              className="w-full md:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Contact Me
            </Link>
            <div className="flex items-center gap-2 text-base sm:text-lg">
              <span className="text-black font-medium">Call me at</span>
              <a href="tel:+13865693781" className="text-black font-bold hover:underline">+1-386-569-3781</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 