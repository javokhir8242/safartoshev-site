
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building a Responsive Portfolio with React and Tailwind CSS",
      excerpt: "Learn how to create a responsive portfolio website using React and Tailwind CSS, with dark mode support.",
      date: "May 1, 2025",
      readTime: "5 min read",
      category: "Web Development",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Getting Started with TypeScript in 2025",
      excerpt: "A comprehensive guide to setting up TypeScript in your projects and making the most of its features.",
      date: "April 28, 2025",
      readTime: "8 min read",
      category: "TypeScript",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "Understand the power of modern CSS layout techniques and when to use each for optimal results.",
      date: "April 15, 2025",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <span className="text-gradient-accent">Blog</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Check out my latest articles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-card/50 border border-white/10 backdrop-blur-md hover:shadow-lg hover:border-accent/20 transition-all duration-300 flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="inline-block bg-accent/10 text-accent text-xs py-1 px-2 rounded-full mb-2">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-start pl-0 hover:pl-2 transition-all">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
