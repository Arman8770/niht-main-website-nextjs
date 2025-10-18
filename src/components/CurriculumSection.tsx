import { Card, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  Award,
  Zap,
  Search,
  MousePointer,
  Users,
  Mail,
  BarChart,
  Smartphone,
  Palette,
  Bot,
  ShoppingCart,
  MessageSquare,
  Briefcase,
  Tag,
  Activity,
  Send,
  Handshake,
  Layers,
  Gamepad,
  Share2,
  Film,
  Mic,
  Layout,
  Camera,
  Tv,
  MessageCircle,
  FileText,
  User,
  Rocket
} from "lucide-react";
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePopup } from "./form/PopupProvider";
import { useEffect, useState } from "react";

const CurriculumSection = () => {
  const { openPopup } = usePopup();
  const courses = [
    {
      title: "Certificate Program in Digital Marketing",
      duration: "6 Months ",
      level: "Beginner",
      color: "from-green-500 to-emerald-600",
      modules: [
        { icon: <Search className="w-5 h-5" />, name: "Website Planning & Creation" },
        { icon: <MousePointer className="w-5 h-5" />, name: "Search Engine Optimization" },
        { icon: <Users className="w-5 h-5" />, name: "Content Marketing" },
        { icon: <Mail className="w-5 h-5" />, name: "Facebook" },
        { icon: <BarChart className="w-5 h-5" />, name: "Instagram" },
        { icon: <Smartphone className="w-5 h-5" />, name: "X" },

        // Added ones
        { icon: <MessageSquare className="w-5 h-5" />, name: "Reddit" },
        { icon: <Briefcase className="w-5 h-5" />, name: "LinkedIn" },
        { icon: <ShoppingCart className="w-5 h-5" />, name: "Google Ads" },
        { icon: <Tag className="w-5 h-5" />, name: "Google Tag Manager" },
        { icon: <Activity className="w-5 h-5" />, name: "Google Analytics" },
        { icon: <Send className="w-5 h-5" />, name: "Email Marketing" },
        { icon: <Handshake className="w-5 h-5" />, name: "Affiliate Marketing" }
      ],
      features: ["NIHT Certifications", "Internship Opportunity", "Live Panels", "Case Studies"]
    },
    {
      title: "Premier Program in Digital Marketing",
      duration: "12 Months",
      level: "Intermediate",
      color: "from-blue-500 to-indigo-600",
      popular: true,
      modules: [
        { icon: <Layers className="w-5 h-5" />, name: "Everything In CPDM" },
        { icon: <Palette className="w-5 h-5" />, name: "Graphic Design" },
        { icon: <Gamepad className="w-5 h-5" />, name: "Gamification in Online Marketing" },
        { icon: <Bot className="w-5 h-5" />, name: "AI Usage in Digital Marketing" },
        { icon: <Share2 className="w-5 h-5" />, name: "Viral Marketing" },
        { icon: <Film className="w-5 h-5" />, name: "After Effects" },
        { icon: <Mic className="w-5 h-5" />, name: "Podcasting" },
        { icon: <Layout className="w-5 h-5" />, name: "UI/UX" },
        { icon: <Camera className="w-5 h-5" />, name: "Mobile Photography & Videography" },
        { icon: <Tv className="w-5 h-5" />, name: "Gaming & Live Streaming" },
      ],

      features: ["20+ Certifications", "100% Job Assistance", "Case Studies", "Industry Mentorship"]
    },
    {
      title: "Master Program in Digital Marketing",
      duration: "16 Months",
      level: "Expert",
      color: "from-purple-500 to-pink-600",
      modules: [
        { icon: <Layers className="w-5 h-5" />, name: "Everything In PPDM" },
        { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp Automation" },
        { icon: <FileText className="w-5 h-5" />, name: "Interview & Resume Writing Skill" },
        { icon: <User className="w-5 h-5" />, name: "Personality Development" },
        { icon: <Rocket className="w-5 h-5" />, name: "Start Your Own Agency" },
        { icon: <Briefcase className="w-5 h-5" />, name: "Agency Management Skills" },
      ],
      features: ["20+ Premium Certifications", "Capstone Projects", "Case Studies", "100% Placement Assistance"]
    }
  ];

  const features = [
    {
      icon: <Award className="w-6 h-6 text-brand-primary" />,
      title: "20+ Certifications",
      desc: "Google, HubSpot, Facebook & more",
      bg: "bg-brand-primary/10",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-secondary" />,
      title: "Live Projects",
      desc: "Live Panel from day one",
      bg: "bg-brand-secondary/10",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-accent" />,
      title: "Batch Schedule",
      desc: "Weekday & weekend batches",
      bg: "bg-brand-accent/10",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brand-success" />,
      title: "LMS Access",
      desc: "Resources & Study Materials",
      bg: "bg-brand-success/10",
    },
  ];

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const checkWidth = () => setShowNav(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section id="curriculum" className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <a href="#voices">
            <Button variant="outline" className="btn-shine mb-4 text-brand-accent border-brand-accent">
              Academic Curriculum
            </Button>
          </a>
          <h2 className="text-2xl md:text-4xl text-center  font-bold text-foreground mb-2 md:mb-6">
            Master Digital Marketing with Industry-Relevant Skills
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted programs designed to take you from beginner to expert,
            with hands-on projects and global certifications.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 ${course.popular ? 'ring-2 ring-brand-accent' : ''}`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-brand-accent text-white">Most Popular</Badge>
                </div>
              )}

              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[1.2rem] font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {course.level}
                  </Badge>
                </div>
                <div className="text-white/80 text-sm">One-time payment • EMI Available</div>
              </div>

              <CardContent className="p-6">
                {/* Modules */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-brand-primary" />
                    Course Modules
                  </h4>

                  {/* Mobile Accordion */}
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`modules-${index}`}>
                        <AccordionTrigger>View Modules</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 mt-3">
                            {course.modules.map((module, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <div className="text-brand-primary mr-3">{module.icon}</div>
                                  <span className="text-[1.0rem] font-medium text-foreground">{module.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop Modules */}
                  <div className="hidden lg:block space-y-3">
                    {course.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="text-brand-primary mr-3">{module.icon}</div>
                          <span className="text-[1.0rem] font-medium text-foreground">{module.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-brand-accent" />
                    What&apos;s Included
                  </h4>
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button onClick={openPopup} variant="cta" className="w-full btn-shine" size="lg">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-medium mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={showNav}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-4">
                  <div className={`w-12 h-12 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;