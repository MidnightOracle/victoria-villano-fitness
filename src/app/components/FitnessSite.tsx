'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import Link from 'next/link';

// ✅ Service Card Component
const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="group">
    <div className="overflow-hidden mb-6">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[300px] object-cover"
      />
    </div>
    <h3 className="font-bold text-[24px] text-[#bca16b] mb-3">{title}</h3>
    <p className="text-[18px] text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// ✅ Blog Card Component
const BlogCard = ({ image, title, excerpt }: { image: string; title: string; excerpt: string }) => (
  <div className="bg-black">
    <div className="overflow-hidden mb-6">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[400px] object-cover"
      />
    </div>
    <h3 className="font-bold text-[24px] text-[#bca16b] mb-3">{title}</h3>
    <p className="text-[18px] text-gray-400 mb-4 leading-relaxed">{excerpt}</p>
    <button className="text-[#bca16b] hover:text-[#d4b87d] text-[18px] font-medium">Read more →</button>
  </div>
);

export default function FitnessSite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events to update navbar background and progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Update navbar background
      setIsScrolled(scrollPosition > 50);
      
      // Update scroll progress
      const scrolled = (scrollPosition / (docHeight - windowHeight)) * 100;
      setScrollProgress(scrolled);
      
      // Show/hide scroll to top button
      setShowScrollTop(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  const services = [
    {
      title: "Yoga/Golf Fitness",
      description: "Build strength, flexibility, and balance to move better on and off the course.",
      image: "/images/yoga-golf.jpg"
    },
    {
      title: "Aqua Fitness",
      description: "A refreshing full-body workout using water resistance in a social and safe environment.",
      image: "/images/aqua-fitness.jpg"
    },
    {
      title: "Dance Fit",
      description: "Fun cardio, improve coordination and hit your mood - all while dancing to fun music!",
      image: "/images/dance-fit.jpg"
    }
  ];

  const blogPosts = [
    {
      image: "/images/nutrition.jpg",
      title: "Blog title heading will go here",
      excerpt: "Short description of the blog post will go here. Keep it brief and engaging."
    },
    {
      image: "/images/yoga.jpg",
      title: "Blog title heading will go here",
      excerpt: "Short description of the blog post will go here. Keep it brief and engaging."
    },
    {
      image: "/images/swimming.jpg",
      title: "Blog title heading will go here",
      excerpt: "Short description of the blog post will go here. Keep it brief and engaging."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50"
        style={{ transform: 'translateZ(0)' }}
      >
        <div 
          className="h-full bg-[#bca16b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header/Nav */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-16 py-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#bca16b] transition-colors hover:text-[#d4b87d]">Logo</Link>
          <nav>
            <ul className="flex gap-8">
              <li><Link href="/" className="text-lg transition-colors hover:text-[#bca16b]">Home</Link></li>
              <li><Link href="/#feel-good-move-better" className="text-lg transition-colors hover:text-[#bca16b]">Services</Link></li>
              <li><Link href="/#gallery" className="text-lg transition-colors hover:text-[#bca16b]">Gallery</Link></li>
              <li><Link href="/#blog" className="text-lg transition-colors hover:text-[#bca16b]">Blog</Link></li>
              <li><Link href="/#about" className="text-lg transition-colors hover:text-[#bca16b]">About Me</Link></li>
              <li><Link href="/contact" className="text-lg transition-colors hover:text-[#bca16b]">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#bca16b] hover:bg-[#d4b87d] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        ↑
      </button>

      {/* Add padding to account for fixed header */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="grid grid-cols-2 min-h-screen">
          {/* Left Image */}
          <div className="relative">
            <Image
              src="/images/hero.jpg"
              alt="Meditation at sunset"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1920x1080/111111/FFFFFF?text=Fitness+Training";
              }}
            />
          </div>
          {/* Right Content */}
          <div className="flex items-center bg-black">
            <div className="px-24">
              <h1 className="text-[96px] font-bold leading-[1.1] mb-8">
                Empowering<br />
                You to a<br />
                <span className="text-[#bca16b]">Healthier,</span><br />
                <span className="text-[#bca16b]">Stronger</span> Life
              </h1>
              <p className="text-gray-400 text-2xl mb-12 max-w-[500px] leading-relaxed">
                Join group classes or book a private session to move, feel, and live better in Palm Coast.
              </p>
              <Button className="bg-[#bca16b] hover:bg-[#d4b87d] text-black text-2xl px-12 py-6 rounded-full">
                <Link href="/contact">Book a Session →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="feel-good-move-better" className="bg-[#bca16b] py-20">
          <div className="container mx-auto px-16">
            <h2 className="text-black text-5xl font-bold text-center mb-20">Feel Good, Move Better</h2>
            <div className="grid grid-cols-3 gap-12">
              {services.map((service, i) => (
                <div key={i} className="text-center">
                  <div className="rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-[250px] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x300/111111/FFFFFF?text=" + service.title;
                      }}
                    />
                  </div>
                  <h3 className="text-black text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-black/80 text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Training & Specialized Sessions Section */}
        <section className="bg-black py-20">
          <div className="container mx-auto px-16">
            <div className="bg-[#bca16b] rounded-2xl overflow-hidden mb-8">
              <div className="flex items-center">
                <div className="w-[200px] relative h-[100px]">
                  <Image
                    src="/images/yoga-silhouette.jpg"
                    alt="Yoga silhouette"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-black text-2xl font-bold px-6">Private Training & Specialized Sessions</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-[#bca16b] p-6 rounded-2xl">
                <h4 className="text-black text-xl font-bold mb-3">Private Training</h4>
                <p className="text-black/80 text-base">
                  1-on-1 sessions customized to your personal fitness goals — whether you want to improve strength, 
                  mobility, balance, or simply feel better.
                </p>
              </div>
              <div className="bg-[#bca16b] p-6 rounded-2xl">
                <h4 className="text-black text-xl font-bold mb-3">Specialized Formats</h4>
                <p className="text-black/80 text-base">
                  Golf Fitness | Aqua Personal Training | Senior Fitness | Therapeutic Stretch | Dance Fit | Yoga
                  Focused programs tailored to your unique needs for better movement, confidence, and well-being.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section id="gallery" className="bg-[#bca16b] py-20">
          <div className="container mx-auto px-16">
            <h2 className="text-black text-5xl font-bold text-center mb-20">Image Gallery</h2>
            <div className="relative">
              <div className="flex">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Fitness class"
                  width={1920}
                  height={800}
                  className="w-full h-[700px] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/1920x800/111111/FFFFFF?text=Fitness+Gallery";
                  }}
                />
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                {[0,1,2,3,4].map((dot) => (
                  <button
                    key={dot}
                    className={`w-3 h-3 rounded-full ${currentSlide === dot ? 'bg-black' : 'bg-black/20'}`}
                    onClick={() => setCurrentSlide(dot)}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentSlide(prev => Math.min(4, prev + 1))}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* Flow, Strength & Balance Section */}
        <section id="blog" className="bg-black py-20">
          <div className="container mx-auto px-16">
            <Link href="/blog">
              <h2 className="text-white text-5xl font-bold text-center mb-4 hover:text-[#bca16b] transition-colors">Flow, Strength & Balance</h2>
            </Link>
            <p className="text-center text-gray-400 text-lg mb-20 max-w-[700px] mx-auto">
              Your go-to source for practical advice, mindful movement, and healthy living.
            </p>
            <div className="grid grid-cols-3 gap-12">
              {blogPosts.map((post, i) => (
                <div key={i}>
                  <div className="mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x300/111111/FFFFFF?text=" + post.title;
                      }}
                    />
                  </div>
                  <h3 className="text-[#bca16b] text-2xl font-bold mb-4">{post.title}</h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link href="/blog" className="text-[#bca16b] text-lg hover:text-[#d4b87d]">Read more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-[#bca16b] py-20">
          <div className="container mx-auto px-16">
            <div className="grid grid-cols-2 gap-20">
              <div>
                <Image
                  src="/images/victoria.jpg"
                  alt="Victoria"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x500/111111/FFFFFF?text=Victoria";
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-black text-5xl font-bold mb-10">Hi, I'm Victoria</h2>
                <div className="space-y-6">
                  <p className="text-black/90 text-xl leading-relaxed">
                    A certified personal trainer with 20+ years experience helping people move better and live healthier. 
                    I specialize in creating fitness fun and accessible for everyone, regardless of age or fitness level.
                  </p>
                  <p className="text-black/90 text-xl leading-relaxed">
                    My passion is empowering individuals of all ages to achieve their health journey. 
                    Join me, and let's work on your fitness aspirations together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black py-20">
          <div className="container mx-auto px-16 text-center">
            <h2 className="text-white text-5xl font-bold mb-12">Ready to get started?</h2>
            <Button className="bg-[#bca16b] hover:bg-[#d4b87d] text-black text-xl px-12 py-5 rounded-full mb-12">
              <Link href="/contact">Book a Session →</Link>
            </Button>
            <div>
              <p className="text-gray-400 text-xl mb-3">Call me at</p>
              <a href="tel:+1-386-569-3781" className="text-[#bca16b] text-4xl font-bold hover:text-[#d4b87d]">
                +1-386-569-3781
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-16">
          <div className="container mx-auto px-16">
            <div className="flex justify-between items-center mb-12">
              <div className="text-[#bca16b] text-3xl font-light">Logo</div>
              <nav className="flex gap-12">
                <Link href="/" className="text-[#bca16b] text-base hover:text-[#d4b87d]">Home</Link>
                <Link href="/#services" className="text-[#bca16b] text-base hover:text-[#d4b87d]">Services</Link>
                <Link href="/#gallery" className="text-[#bca16b] text-base hover:text-[#d4b87d]">Gallery</Link>
                <Link href="/blog" className="text-[#bca16b] text-base hover:text-[#d4b87d]">Blog</Link>
                <Link href="/contact" className="text-[#bca16b] text-base hover:text-[#d4b87d]">Contact</Link>
              </nav>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="text-[#bca16b] text-base hover:text-[#d4b87d]">{social}</a>
                ))}
              </div>
              <p className="text-gray-400 text-base">© 2024 All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 