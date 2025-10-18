import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Camera,
  Code,
  Video,
  Eye,
  Podcast,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import Play from "@/assets/svg-images/play-svgrepo-com.svg";
import Master from "@/assets/video-image/niht master.jpg";
import Podcasting from "@/assets/video-image/Product-Shoot-Session.jpg";
import Experiential from "@/assets/video-image/Experiential-Learning.jpg";
import VRLearning from "@/assets/video-image/vrLearning.jpg";
import Image from "next/image";
const HandsOnSection = () => {
  const projects = [
    {
      icon: <Briefcase className="w-8 h-8 text-brand-primary" />,
      title: "Live Panel",
      description: "Work on live panel just the way professional run ads.",
      details: ["Google Ads campaigns", "Social media strategies", "SEO optimization", "Performance tracking"]
    },
    {
      icon: <Code className="w-8 h-8 text-brand-secondary" />,
      title: "Website Development",
      description: "Build responsive websites and landing pages using modern tools and platforms.",
      details: ["WordPress development", "Landing page design", "E-commerce setup", "Mobile optimization"]
    },
    {
      icon: <Video className="w-8 h-8 text-brand-accent" />,
      title: "Video Production",
      description: "Create compelling video content using our state-of-the-art in-house studio.",
      details: ["Video editing", "Motion graphics", "Social media reels", "YouTube optimization"]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "AR/VR Experiences",
      description: "Design immersive marketing experiences using cutting-edge AR and VR technology.",
      details: ["Instagram AR filters", "VR marketing tours", "3D product demos", "Interactive experiences"]
    }
  ];

  // const tools = [
  //   { name: "Adobe Creative Suite", category: "Design" },
  //   { name: "Google Analytics", category: "Analytics" },
  //   { name: "SEMrush", category: "SEO" },
  //   { name: "HubSpot", category: "CRM" },
  //   { name: "Canva Pro", category: "Design" },
  //   { name: "Hootsuite", category: "Social Media" },
  //   { name: "Mailchimp", category: "Email" },
  //   { name: "WordPress", category: "Web Dev" },
  //   { name: "Shopify", category: "E-commerce" },
  //   { name: "Figma", category: "UI/UX" },
  //   { name: "Final Cut Pro", category: "Video" },
  //   { name: "Unity", category: "AR/VR" }
  // ];



  const portfolioItems = [
    {
      image: Master,
      src: "https://www.youtube.com/shorts/qENXuffQKPE"
    },
    {
      image: Experiential,
      src: "https://www.youtube.com/shorts/C0hWytP3V44"
    },
    {
      image: Podcasting,
      src: "https://www.youtube.com/shorts/oXKqwDdjVwQ"
    },
    {
      image: VRLearning,
      src: "https://www.youtube.com/shorts/NzIqCWzsPAE"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mutedIndex, setMutedIndex] = useState<number | null>(null);
  



  function extractYouTubeID(url: string) {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([\w-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
  }




  return (
    <section id="portfolio" className="py-12 lg:py-20 bg-gradient-to-r from-brand-primary/10 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <a href="#voices">
          <Button variant="outline" className="mb-4 text-brand-accent border-brand-accent">
            Hands-On Learning
          </Button>
          </a>
          <h2 className="text-2xl md:text-4xl  font-bold text-foreground mb-2 md:mb-6">
            Build Your Portfolio from Day One
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just learn theory create real campaigns, build websites, make videos,
            and develop AR experiences that showcase your skills to employers.
          </p>
        </div>

        {/* Project Types */}
        <div className="w-full mb-16 ">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            // pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },   // mobile
              768: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 3 } // desktop
            }}

            autoplay={{ delay: 6000, disableOnInteraction: true }}
            spaceBetween={16}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="hidden md:grid md:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                      <span className="text-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Studio & Tools */}
        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {/* Studio Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Camera className="w-6 h-6 text-brand-primary mr-3" />
                In-House Studio Access
              </h3>
              <p className="text-m md:text-lg md:text-lg text-muted-foreground mb-6">
                Get full access to our professional content creation studio with the latest equipment and software.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Video className="w-8 h-8 text-brand-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Video Studio</h4>
                <p className="text-sm text-muted-foreground">Professional lighting, <br className="block md:hidden" />cameras and <br className="block md:hidden" />editing suites</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Podcast className="w-8 h-8 text-brand-secondary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Podcast Studio</h4>
                <p className="text-sm text-muted-foreground">High-end <br className="block md:hidden" />workstations with <br className="block md:hidden" />design software</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Eye className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-foreground mb-2">AR/VR Zone</h4>
                <p className="text-sm text-muted-foreground">Latest VR <br className="block md:hidden" />headsets and AR <br className="block md:hidden" />development tools</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-soft">
                <Camera className="w-8 h-8 text-brand-success mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Photo studio</h4>
                <p className="text-sm text-muted-foreground">Latest hardware <br className="block md:hidden" />and development <br className="block md:hidden" />environments</p>
              </div>
            </div>
          </div>


        </div>

        {/* Portfolio Showcase */}


        <div id="learning" className="">
          <h3 className="text-2xl md:text-4xl text-center  font-bold text-foreground mb-4 md:mb-8">
            Experiential Learning @ NIHT
          </h3>
          {/* Mobile Carousel */}
          <div className="relative w-full  mx-auto">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              loop
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
              }}
            >
              {portfolioItems.map((video, index) => (
                <SwiperSlide key={index} className="flex !h-auto">
                  <div className="w-full h-full aspect-[9/16] rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 relative group cursor-pointer">

                    {/* Thumbnail overlay */}
                    <Image
                      src={video.image}
                      alt="video thumbnail"
                      className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 ${activeIndex === index ? "opacity-0" : "opacity-100"}`}
                    />

                    {/* YouTube iframe */}
                    {activeIndex === index && (
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-xl transition-opacity duration-300 opacity-100"
                        src={`https://www.youtube.com/embed/${extractYouTubeID(video.src)}?autoplay=1&mute=${mutedIndex === index ? 1 : 0}&playsinline=1`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}

                    {/* Play button + ping effect for inactive video */}
                    {activeIndex !== index && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute inline-flex w-24 h-24 rounded-full bg-white/30 animate-ping"></span>
                        <span className="absolute inline-flex w-32 h-32 rounded-full bg-white/10 animate-ping delay-150"></span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveIndex(index);
                          }}
                          className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                        >
                          <Image src={Play} alt="Play" className="w-8 h-8" />
                        </button>
                      </div>
                    )}

                    {/* Mute/unmute button */}
                    {activeIndex === index && (
                      <button
                        onClick={() => setMutedIndex(mutatedIndex => (mutatedIndex === index ? null : index))}
                        className="absolute bottom-3 right-3 z-20 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
                      >
                        {mutedIndex === index ? "🔇" : "🔊"}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandsOnSection;