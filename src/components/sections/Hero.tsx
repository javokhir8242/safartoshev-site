import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left content */}
          <div className="max-w-3xl text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-4 animate-fade-in">
              Model & Commercial Talent
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              <span className="block">Hi, I'm Javokhir Safartoshev.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Multilingual and driven, with a solid background in Computer Science. <br />
              Graduate of the University of Łódź — ranked among the top 1000 universities globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/80 text-white">
                View My Portfolio
              </Button>
            </div>

            <div className="mt-16 animate-bounce flex justify-center md:justify-start">
              <a href="#about" aria-label="Scroll to About section" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="order-first md:order-last">
            <img
              src="https://i.postimg.cc/15xZz7bm/12.png"
              alt="Javokhir Safartoshev"
              className="rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
