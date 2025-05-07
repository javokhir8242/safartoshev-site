import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Portfolio = () => {
  // Updated portfolio data with actual video links
  const videos = [
    {
      id: 1,
      title: "PIZZA HUT ADVERTISEMENT",
      client: "Pizza Hut",
      thumbnail: "https://img.youtube.com/vi/7Ba3cjl5fOI/hqdefault.jpg",
      videoUrl: "https://youtu.be/7Ba3cjl5fOI?si=blcidScJJr9UGNJD",
      year: "2024",
      category: "Commercial"
    },
    {
      id: 2,
      title: "AGENCY PORTFOLIO - BARTEK BIALY",
      client: "Bartek Bialy Agency",
      thumbnail: "https://yourbrand-18274.kxcdn.com/lib/wvi4mh/JAVO11-m1r46dsc.jpg",
      videoUrl: "https://www.bialymodels.com/javokhir-safartoshev",
      year: "2024",
      category: "Portfolio"
    },
    {
      id: 3,
      title: "DoubleTree by Hilton Lodz",
      client: "DoubleTree by Hilton",
      thumbnail: "https://img.youtube.com/vi/pepYBUA7jog/hqdefault.jpg",
      videoUrl: "https://youtu.be/pepYBUA7jog?si=RI0bTvBS3aZxNXwZ",
      year: "2024",
      category: "Commercial"
    },
    {
      id: 4,
      title: "PERSPIBLOCK ADVERTISEMENT",
      client: "Perspiblock",
      thumbnail: "https://img.youtube.com/vi/626pAJEMNiw/hqdefault.jpg",
      videoUrl: "https://youtu.be/626pAJEMNiw?si=UW5aO5zOfylqRjoA",
      year: "2024",
      category: "Advertisement"
    },
    {
      id: 5,
      title: "CoolPack New Youth Collection 2024",
      client: "CoolPack",
      thumbnail: "https://img.youtube.com/vi/BSM-n4lBe-w/hqdefault.jpg",
      videoUrl: "https://youtu.be/BSM-n4lBe-w?si=Ry9CIepr9IgyBmLC",
      year: "2024",
      category: "Advertisement"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">
            <span className="text-gradient-accent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-center">
            Featured commercial videos and modeling work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="glass-morphism rounded-xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                      onClick={() => window.open(video.videoUrl, '_blank')}
                    >
                      <Play className="h-8 w-8" />
                      <span className="sr-only">Play video</span>
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gradient">{video.title}</h3>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {video.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">Client: {video.client}</p>
                  <Badge className="bg-secondary text-foreground">
                    {video.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
