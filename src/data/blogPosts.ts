export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'Flow' | 'Strength' | 'Balance';
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'mindful-movement',
    title: 'Mindful Movement: The Key to Better Exercise',
    excerpt: 'Discover how mindful movement can enhance your workout effectiveness and prevent injuries.',
    content: `Mindful movement is about being present and aware during exercise, focusing on form and breathing. 
    This approach not only improves results but also reduces injury risk and enhances mind-body connection.`,
    image: '/images/blog-1.jpg',
    category: 'Flow',
    date: '2024-04-01',
    author: 'Victoria Villano',
    readTime: '5 min read'
  },
  {
    id: 'strength-foundations',
    title: 'Building Strength Foundations',
    excerpt: 'Learn the fundamental principles of strength training for long-term success.',
    content: `A strong foundation is crucial for any fitness journey. This guide covers the essential 
    movements and principles that will help you build sustainable strength.`,
    image: '/images/blog-2.jpg',
    category: 'Strength',
    date: '2024-03-28',
    author: 'Victoria Villano',
    readTime: '7 min read'
  },
  {
    id: 'balance-wellness',
    title: 'Finding Balance in Your Wellness Journey',
    excerpt: 'Tips for creating a balanced approach to fitness and overall wellness.',
    content: `Balance isn't just about physical stability—it's about creating a sustainable approach to 
    fitness that fits your lifestyle and goals.`,
    image: '/images/blog-3.jpg',
    category: 'Balance',
    date: '2024-03-25',
    author: 'Victoria Villano',
    readTime: '6 min read'
  },
  {
    id: 'flow-state',
    title: 'Achieving Flow State in Your Workouts',
    excerpt: 'Learn how to enter the flow state during exercise for maximum enjoyment and results.',
    content: `The flow state is that magical place where time seems to disappear and you're completely 
    immersed in your workout. This article explores how to achieve and maintain this state.`,
    image: '/images/blog-1.jpg',
    category: 'Flow',
    date: '2024-03-20',
    author: 'Victoria Villano',
    readTime: '8 min read'
  },
  {
    id: 'progressive-overload',
    title: 'The Science of Progressive Overload',
    excerpt: 'Understanding how to properly increase your training intensity for continuous growth.',
    content: `Progressive overload is the cornerstone of strength training. Learn how to implement it 
    effectively while avoiding common pitfalls and plateaus.`,
    image: '/images/blog-2.jpg',
    category: 'Strength',
    date: '2024-03-15',
    author: 'Victoria Villano',
    readTime: '9 min read'
  },
  {
    id: 'mind-body-connection',
    title: 'Strengthening the Mind-Body Connection',
    excerpt: 'Techniques to enhance your awareness and control during exercise.',
    content: `A strong mind-body connection can transform your workouts. Discover practical methods to 
    improve your awareness and control during exercise.`,
    image: '/images/blog-3.jpg',
    category: 'Balance',
    date: '2024-03-10',
    author: 'Victoria Villano',
    readTime: '7 min read'
  }
]; 