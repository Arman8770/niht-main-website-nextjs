import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Images, MessageSquare, Video } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const AITechSection = () => {
  const aiTools = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      name: "Content Creation",
      description: "Master AI writing and content creation for marketing campaigns",
      applications: ["Content writing", "Ad copy creation", "Email sequences", "Social media posts"]
    },
    {
      icon: <Images className="w-8 h-8 text-purple-500" />,
      name: "Automation",
      description: "Create stunning visuals and graphics using AI image generation",
      applications: ["Social media graphics", "Ad creatives", "Brand visuals", "Product mockups"]
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      name: "Google AI Studio",
      description: "Leverage Google's AI tools for advanced marketing automation",
      applications: ["Customer insights", "Predictive analytics", "Automated bidding", "Content optimization"]
    },
    {
      icon: <Video className="w-8 h-8 text-red-500" />,
      name: "Video Creation",
      description: "Produce AI-generated videos and animations for marketing",
      applications: ["Video ads", "Explainer videos", "Product demos", "Personalized content"]
    }
  ];

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const checkWidth = () => setShowNav(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section id="ai-tools" className="py-4 lg:py-12 bg-gradient-to-br from-[#f2f2f2] to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <a href="#voices">
          <Button variant="outline" className="btn-shine mb-4 text-purple-600 border-purple-600">
            Future-Ready Skills
          </Button>
          </a>
          <h2 className="text-2xl md:text-4xl  font-bold text-foreground mb-2 md:mb-6">
            Stay Ahead with Cutting-Edge AI & Tech
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the latest AI tools and emerging technologies that are revolutionizing digital marketing.
            Be future-ready with skills that set you apart in the job market.
          </p>
        </div>

        {/* AI Tools Carousel */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8 flex items-center justify-center">
            <Bot className="w-6 h-6 text-brand-primary mr-3" />
            Master AI Marketing Tools
          </h3>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true} 
            navigation={showNav}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {aiTools.map((tool, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground text-center">{tool.description}</p>
                    <div className="space-y-2">
                      {tool.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                          <span className="text-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;
