
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const categories = [
    "All",
    "Web Development",
    "Data Analytics",
    "Virtual Reality",
    "Modeling",
    "Content Creation"
  ];

  const posts = [
    {
      id: 1,
      title: "My Journey from Uzbekistan to Poland",
      excerpt: "Personal reflections on moving countries and adapting to a new culture while pursuing computer science.",
      date: "May 1, 2025",
      readTime: "5 min read",
      category: "Personal",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Getting Started with Virtual Reality Development",
      excerpt: "A beginner's guide to VR development tools, platforms, and best practices for creating immersive experiences.",
      date: "April 28, 2025",
      readTime: "8 min read",
      category: "Virtual Reality",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Data Visualization Techniques for Analytics",
      excerpt: "Exploring effective ways to visualize complex data for better insights and decision-making.",
      date: "April 15, 2025",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Tips for Aspiring Models in 2025",
      excerpt: "Advice and insights from my modeling experience, including portfolio building and industry navigation.",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "Modeling",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-gradient">Blog</h1>
                <p className="text-muted-foreground">
                  Thoughts, insights, and tutorials on web development, virtual reality, and more.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link to="#how-to-write">
                  <Button className="bg-accent hover:bg-accent/80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                    Write New Post
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="md:w-1/4">
                <div className="sticky top-24">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Search</h3>
                    <div className="relative">
                      <Input 
                        placeholder="Search posts..." 
                        className="bg-white/5 border-white/10 focus-visible:ring-accent pl-10" 
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button 
                          key={category} 
                          variant="ghost" 
                          className="justify-start h-auto w-full px-2 hover:bg-white/5"
                          size="sm"
                        >
                          <span className="text-muted-foreground">{category}</span>
                          <span className="ml-auto text-xs bg-white/5 px-1.5 py-0.5 rounded-full">
                            {category === "All" ? posts.length : posts.filter(p => p.category === category).length}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div id="how-to-write" className="mt-20 pt-8 border-t border-white/10">
                  <h2 className="text-2xl font-bold mb-4 text-gradient-accent">How to Write a New Blog Post</h2>
                  <div className="glass-morphism p-6 rounded-xl">
                    <p className="mb-4">Currently, to add a new blog post to this site, you need to:</p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                      <li>Write your blog post content in Markdown format</li>
                      <li>Access the source code via GitHub repository</li>
                      <li>Add your new post to the posts array in the BlogPage.tsx file</li>
                      <li>Create a new detailed blog post page if needed</li>
                      <li>Commit and push your changes to the repository</li>
                    </ol>
                    <p className="mb-4">Future improvements will include:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                      <li>A CMS integration for easier content management</li>
                      <li>User authentication for direct posting</li>
                      <li>Rich text editor for writing posts directly on the site</li>
                    </ul>
                    <p>For now, please contact me at <a href="mailto:javokhir8242@gmail.com" className="text-accent hover:underline">javokhir8242@gmail.com</a> if you'd like to contribute a guest post or have questions about the blog.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
