'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '../data';
import { useToast } from '@/components/ui/use-toast';

interface Props {
  params: {
    slug: string;
  };
}

function generateTableOfContents(content: string): string[] {
  const headings = content.match(/<h2[^>]*>.*?<\/h2>/g) || [];
  return headings.map(heading => heading.replace(/<\/?h2>/g, ''));
}

export default function BlogPostPage({ params }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  const post = blogPosts.find(post => post.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Update scroll progress
      const scrolled = (scrollPosition / (docHeight - windowHeight)) * 100;
      setScrollProgress(scrolled);
      
      // Show/hide scroll to top button
      setShowScrollTop(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    try {
      if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
      } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      } else if (platform === 'linkedin') {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
      }
      toast({
        title: "Shared successfully",
        description: `Shared on ${platform}`,
      });
    } catch (error) {
      toast({
        title: "Error sharing",
        description: "There was an error sharing the post",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
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

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-[800px]">
              <span className="inline-block px-4 py-2 bg-[#bca16b] text-black rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 text-gray-300">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Article Content */}
          <article className="md:col-span-8 prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-[#111] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {generateTableOfContents(post.content).map((heading, index) => (
                    <li key={index}>
                      <a 
                        href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-300 hover:text-[#bca16b] transition-colors"
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share Buttons */}
              <div className="bg-[#111] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Share this post</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 bg-[#1DA1F2] rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 bg-[#1877F2] rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 bg-[#0A66C2] rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#111] py-20">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-[300px] mb-6">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#bca16b] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-400">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#bca16b] text-black p-4 rounded-full shadow-lg hover:bg-[#d4b87d] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
} 