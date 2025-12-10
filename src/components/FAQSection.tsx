"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import hook to get current URL
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

// --- 1. DATA DEFINITIONS ---

// Default FAQs
const faqs = [
    {
      question: "Do I need a tech or design background to join?",
      answer: "Not at all! Our courses are designed for complete beginners. We start with the basics and gradually build up your skills. Whether you're from any educational background - arts, commerce, science, or engineering - you can succeed in digital marketing. Our curriculum includes everything from basic computer skills to advanced marketing strategies."
    },
    {
      question: "What's the placement process and success rate?",
      answer: "We have a dedicated placement team with 100% placement assistance. Our process includes: Resume building workshops, Mock interviews with industry experts, Direct placement drives with 500+ partner companies, Soft skills training, and Salary negotiation guidance. 95% of our students get placed within 6 months, with an average starting salary of ₹3.5-5 LPA for freshers."
    },
    {
      question: "Is the learning truly practical and hands-on?",
      answer: "Absolutely! From day one, you'll work on live projects. This includes: Running actual Google Ads campaigns with real budgets, Creating social media strategies for real businesses, Building websites and landing pages, Producing videos in our professional studio, and Developing AR filters and VR experiences. You'll graduate with a portfolio of real work, not just certificates."
    },
    {
      question: "Are the certifications globally recognized and valuable?",
      answer: "Yes! We provide 20+ industry-recognized certifications from: Google (Ads, Analytics, Digital Marketing), Facebook Blueprint, HubSpot Content Marketing, SEMrush SEO Toolkit, LinkedIn Learning, and Microsoft Advertising. These are the same certifications that employers look for and are valued globally in the digital marketing industry."
    },
    {
      question: "What if I'm a complete beginner with no marketing experience?",
      answer: "Perfect! 70% of our students start with zero marketing experience. Our curriculum is designed to take you from absolute beginner to job-ready professional. We start with digital marketing fundamentals, teach you how businesses work online, and gradually introduce advanced concepts. Our trainers are experts at making complex topics simple."
    },
    {
      question: "Can I balance this course with my current job/studies?",
      answer: "Yes! We offer flexible schedules: Weekend batches (Saturday-Sunday), Evening batches (6-9 PM), Online live classes, and Self-paced learning options. Many of our students are working professionals who successfully completed the course while maintaining their jobs. We also provide recorded sessions for review."
    },
    {
      question: "What's the difference between online and classroom training?",
      answer: "Both formats cover the same comprehensive curriculum. Classroom training offers: Direct access to our studio and lab facilities, Face-to-face interaction with trainers, Immediate hands-on practice with equipment. Online training provides: Flexibility to learn from anywhere, Interactive live sessions with screen sharing, Access to all digital tools and software, Recorded sessions for later review. Both include the same projects, certifications, and placement support."
    },
    {
      question: "What kind of salary can I expect after completion?",
      answer: "Salaries vary based on your background and role: Freshers: ₹3.5-5 LPA as Digital Marketing Executive, Experienced switchers: ₹6-12 LPA as Marketing Manager/Specialist, Freelancers: ₹25,000-1,00,000+ per month, Business owners: 300%+ ROI on marketing investments. Many of our alumni have achieved 40-60% salary hikes within their first year."
    },
    {
      question: "Is there any age limit for enrollment?",
      answer: "No age limit! Our youngest student was 18 and oldest was 52. We welcome: Fresh graduates looking to start their careers, Working professionals wanting to switch fields, Homemakers returning to work, Retirees starting new ventures, Business owners wanting to grow their companies. Age is just a number when it comes to learning digital marketing!"
    },
    {
      question: "What support do I get after course completion?",
      answer: "Lifetime support includes: Access to updated course materials, Alumni network and community, Continued placement assistance, Advanced workshop invitations, Industry trend updates, Career counseling sessions, Refresher training opportunities, and Free access to new tool trainings. We believe in long-term relationships with our students."
    }
  ];
  const faqcpdm = [
  {
    question: "What exactly is NIHT’s Certificate Program in Digital Marketing?",
    answer: "It’s a comprehensive, skill-based training program that teaches you everything from digital strategy and SEO to social media ads, content creation, and campaign execution. You’ll work on real tools and actual case studies, so by the end of it, you’ll know how marketing works."
  },
  {
    question: "Who is this certificate program ideal for: students, professionals, or entrepreneurs?",
    answer: "This certificate program is ideal for students, working professionals and entrepreneurs who want to grow using digital platforms.<ul><li><strong>Students:</strong> to explore career paths in digital marketing</li><li><strong>Working professionals:</strong> to upskill and stay ahead</li><li><strong>Entrepreneurs:</strong> to grow their business smarter and faster</li></ul> The course is designed to be <strong>flexible, practical, and hands-on</strong>."
  },
  {
    question: "What is the duration of the Certificate Program and how are the classes scheduled?",
    answer: "The certificate program typically lasts 6 months, depending on the batch. Classes are available on weekdays and weekends, allowing flexibility to suit your schedule."
  },
  {
    question: "Is this a classroom-based program, or is it available online as well?",
    answer: "Yes, the program is available both online and offline. You can attend in-person sessions at the NIHT campus or join virtually with the same level of interaction and support."
  },
  {
    question: "What kind of practical training is included in the certificate program?",
    answer: "You’ll work on live panels, build campaigns, and analyse real brand case studies. The program ensures you don’t just learn digital marketing—you live it."
  },
  {
    question: "Will I receive a certificate from NIHT, and is it industry-recognised?",
    answer: "Yes, you’ll receive an official Certificate in Digital Marketing from NIHT. You’ll also be guided through completing certifications from Google, Meta, HubSpot, and Semrush."
  },
  {
    question: "Does this program include portfolio-building or only theoretical learning?",
    answer: "Theory is just the starting point. You’ll build a portfolio with assignments, content creation, mock brand strategies and campaign breakdowns, ready to showcase by course completion."
  },
  {
    question: "Does the certificate program have any eligibility criteria to join?",
    answer: "There are no strict eligibility requirements. Basic computer skills and a willingness to learn are enough. Whether you’re in school, college or working—you’re welcome to apply."
  },
  {
    question: "What kind of support do students receive during and after the program?",
    answer: "You’ll receive live mentoring, project guidance, and doubt-clearing sessions during the course. After completion, NIHT offers 100% JOB assistance, resume building, mock interviews, and hiring referrals."
  },
  {
    question: "How is this certificate programme different from NIHT’s other digital marketing program?",
    answer: "This certificate program is focused, compact, and beginner-friendly. It’s ideal for building core skills quickly, while other NIHT programs may go deeper or include specialised modules."
  }
];

const faqppdm = [
  {
    question: "Does the Premier Program include hands-on training in tools like Photoshop, Figma or Canva for graphic design?",
    answer: "Yes, the program includes hands-on training in tools like Photoshop, Figma and Canva. You will learn to design social media posts, ad banners and other creatives with a focus on real brand use. You will also be taught how to follow brand guidelines and create visuals that match campaign goals."
  },
  {
    question: "Are motion graphics and After Effects covered for ad creation, intros or social media animations?",
    answer: "Yes, the program includes practical training in After Effects. You will learn to create motion graphics, animated intros, transitions and ads. This helps your content stand out on platforms like Instagram, YouTube and LinkedIn by adding a creative and polished touch."
  },
  {
    question: "Will I learn how to create and distribute podcasts as part of the content marketing module?",
    answer: "Yes, podcasting is included in the content marketing module. You will learn how to write scripts, record voice-overs, edit audio and distribute your podcast on platforms like Spotify and YouTube. You will also get to record in NIHT's in-house studio using professional microphones and recording tools."
  },
  {
    question: "Will I learn how to edit viral video content such as reels, shorts or meme-based videos?",
    answer: "Yes, you will learn how to create and edit short-form video content for platforms like Instagram Reels and YouTube Shorts. You will master transitions, captions, music syncing and meme-based formats to make your videos stand out and go viral."
  },
  {
    question: "How is viral marketing taught, do we study real trends or just theoretical campaigns?",
    answer: "You will study viral campaigns that worked for brands, creators and startups to understand what made them successful. Then you will apply those insights by creating your viral content, supported by feedback from mentors."
  },
  {
    question: "What kind of equipment and facilities are available in NIHT’s in-house studio for students?",
    answer: "The in-house studio at NIHT is equipped with DSLR cameras, lighting setups, tripods, green screens, and microphones. As an agency-backed institute, NIHT gives you access to professional setups for model shoots, product photography, video content and podcasts, just like in real brand and media environments."
  },
  {
    question: "Will I get to shoot professional-quality video and photo content using the in-house studio setup?",
    answer: "Yes, you will shoot ad videos, reels, model shoots, product demos, podcast content and more inside the NIHT studio. You will also receive guidance on scripting, framing and lighting to give your content a polished and professional look."
  },
  {
    question: "How is the NIHT Premier Program different from other digital marketing courses in the market?",
    answer: "Most courses stop at tool-based training. The NIHT Premier Program goes beyond with agency-style mentoring, hands-on bootcamps, mobile photography, model shoots, viral reels creation, content production in the in-house studio, live campaign breakdowns, podcasting, After Effects, UI and UX and real-time feedback. You will not just learn digital marketing; you will live it."
  },
  {
    question: "Is there any training on UI/UX design principles for building better landing pages or websites?",
    answer: "Yes, we introduce you to UI and UX fundamentals so you understand how to build user-friendly, conversion-optimised pages. You will learn how layout, colour, copy and navigation affect customer journeys and use tools like Figma to put ideas into action."
  },
  {
    question: "Will I learn how to write creative ads and captions for social media and campaigns?",
    answer: "Yes, you will learn how to write creative ads and captions for social media and campaigns. From Instagram posts and YouTube ads to Google search copy and influencer collaborations, you will practise writing content that captures attention, reflects brand voice and drives action."
  }
];

const faqmpdm = [
  {
    question: "Will I learn how to create AR filters, virtual tours or interactive experiences for brands?",
    answer: "Yes, you will explore augmented and virtual reality through hands-on sessions. From designing basic AR filters to creating virtual tours and interactive brand experiences, you will learn how these tools are used in real marketing campaigns to boost engagement."
  },
  {
    question: "Will I learn how to work with influencers and run influencer campaigns?",
    answer: "Absolutely. You will learn how to find the right influencers, approach them professionally, plan authentic collaborations, and run campaigns that genuinely engage your target audience."
  },
  {
    question: "Will I learn how to sell and advertise products on Amazon?",
    answer: "Yes, the program covers everything from setting up your Amazon store to running paid ads and analysing sales data to grow your business. You will learn how to manage listings, improve product visibility and track performance."
  },
  {
    question: "Will I learn how the internet works behind the scenes like cookies, servers and browsers?",
    answer: "Yes, you will be introduced to how the internet works at a technical level. This includes how browsers load websites, how cookies track user behaviour, how servers store data and how all of this affects digital marketing performance."
  },
  {
    question: "Will I learn how to use AI for ads, A/B testing and automation?",
    answer: "Yes, you will learn how to use AI tools to create better ads, run A/B tests and automate marketing workflows. From writing ad copy to analysing performance and setting up smart campaigns, you will use AI to work faster and make better decisions."
  },
  {
    question: "Will I learn how to increase sales by improving website design and tracking user behaviour?",
    answer: "Yes. You will learn how to increase website sales through Conversion Rate Optimisation. This includes improving design, layout and user flow, using heatmaps and behaviour tracking tools to understand visitor actions, and making data-driven changes that turn visitors into buyers."
  },
  {
    question: "Will this course help me start my own digital marketing agency?",
    answer: "Yes. You will gain the skills, tools and confidence to start your own digital marketing agency. The course includes a full section on how to find your niche, pitch to clients and scale your services like a real agency owner. You will also learn how to handle client briefs, run campaigns and deliver results that build long-term partnerships."
  },
  {
    question: "Are there any soft skill sessions for personality development, interviews, or resume building?",
    answer: "Yes. Soft skills and personality development are a core part of the program. You will receive training in communication, grooming, resume writing, mock interviews and confidence building to prepare you for real-world success in jobs, internships, and client meetings."
  },
  {
    question: "How is NIHT’s Master Program different from other digital marketing courses?",
    answer: "Unlike most programs that focus only on ads and tools, NIHT is an agency-backed institute that offers deep technical knowledge and real-world agency training. You’ll master the latest trends like AR and VR, Amazon marketing, automation, and leadership skills, all guided by mentors who actively work in the industry. Plus, you’ll gain hands-on experience with model shoots, mobile photography, podcast creation, viral reel production, bootcamps, content production in our in-house studio, and live campaign breakdowns."
  }
];

// --- 2. COMPONENT ---

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const pathname = usePathname(); // Get current path
  const [currentFaqs, setCurrentFaqs] = useState(faqs);

  // Determine which data to show based on URL
  useEffect(() => {
    if (pathname) {
      if (pathname.includes("cpdm")) {
        setCurrentFaqs(faqcpdm);
      } else if (pathname.includes("ppdm")) {
        setCurrentFaqs(faqppdm);
      } else if (pathname.includes("mpdm")) {
        setCurrentFaqs(faqmpdm);
      } else {
        setCurrentFaqs(faqs);
      }
    }
  }, [pathname]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Calculate split point for two columns
  const midPoint = Math.ceil(currentFaqs.length / 2);
  const leftColumn = currentFaqs.slice(0, midPoint);
  const rightColumn = currentFaqs.slice(midPoint);

  return (
    <section id="faq" className="py-8 lg:py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <a href="#voices">
            <Button variant="outline" className="btn-shine mb-4 text-brand-primary border-brand-primary">
              FAQ
            </Button>
          </a>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-6">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-m md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Clear your doubts and make an informed decision about your digital marketing journey
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((faq, index) => (
                <div
                  key={`left-${index}`}
                  className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="pl-8 pr-4">
                         {/* Using dangerouslySetInnerHTML to support <ul> and <strong> tags in answers */}
                        <div 
                          className="text-muted-foreground leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mt-2"
                          dangerouslySetInnerHTML={{ __html: faq.answer }} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((faq, index) => {
                const adjustedIndex = index + midPoint;
                return (
                  <div
                    key={`right-${adjustedIndex}`}
                    className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(adjustedIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    >
                      <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
                        <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      </div>
                      {openFAQ === adjustedIndex ? (
                        <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      )}
                    </button>

                    {openFAQ === adjustedIndex && (
                      <div className="px-6 pb-4">
                        <div className="pl-8 pr-4">
                          {/* Using dangerouslySetInnerHTML to support <ul> and <strong> tags in answers */}
                          <div 
                            className="text-muted-foreground leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mt-2"
                            dangerouslySetInnerHTML={{ __html: faq.answer }} 
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;