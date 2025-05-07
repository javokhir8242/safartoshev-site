
import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/javokhir_safartoshev/",
      icon: Instagram,
      color: "group-hover:text-pink-500"
    },
    {
      name: "YouTube",
      url: "https://https://www.youtube.com/@JavokhirSafartoshev.com/",
      icon: Youtube,
      color: "group-hover:text-red-500"
    },
    {
      name: "Facebook",
      url: "https://https://www.facebook.com/javokhirsafartoshev/.com/",
      icon: Facebook,
      color: "group-hover:text-blue-500"
    },
    {
      name: "LinkedIn",
      url: "https://https://www.linkedin.com/in/javokhir-s-937433214/.com/",
      icon: Linkedin,
      color: "group-hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient-accent">Connect With Me</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Follow me on social media for latest updates 
          </p>

          <div className="glass-morphism p-10 rounded-xl">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
                >
                  <div className="p-4 rounded-full glass-morphism group-hover:border-accent/30">
                    <social.icon className={`w-8 h-8 transition-colors ${social.color}`} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                For booking inquiries, please reach out via direct message on any platform
              </p>
              <p className="mt-4 text-accent">
                javokhir2709@icloud.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
