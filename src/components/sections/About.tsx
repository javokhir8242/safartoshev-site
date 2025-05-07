
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gradient-accent">About Me</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Hi, I'm Javokhir.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm originally from Uzbekistan and now living in Poland.
                I studied Computer Science at the University of Łódź and work on creative projects in web development, virtual reality, and data analytics.
              </p>
              <p className="text-muted-foreground mb-4">
                I also have experience in modeling and creating content online.
              </p>
              <p className="text-muted-foreground mb-8">
                This website is a space to share ideas, tutorials, and the things I'm working on.
              </p>
              <p className="text-muted-foreground">
                Thanks for visiting.
              </p>
              
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
