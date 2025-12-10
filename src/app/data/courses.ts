export interface Course {
  slug: string;
  title: string;
  title2: string;
  title3: string;
  description: string;
  WhyChoose: string;
  image: string;
  details: string;
  Gain: string[];
  Alumni: string;
  successTitle: string;
  successSubTitle: string;
  // Optional fields for future:
  // duration?: string;
  // level?: 'Beginner' | 'Intermediate' | 'Advanced';
  // certificationBody?: string;
}

export const courses: Course[] = [
  {
    slug: "cpdm",
    title: "Certificate Program in Digital Marketing",
    title2:"",
    title3:"",
    description: "Build real digital marketing skills through practical training, live projects and guided execution. Learn SEO, Google Ads, Meta Ads, content creation and analytics in a job-focused program designed for beginners. Gain hands-on experience, create a strong portfolio and get ready for high-growth digital marketing careers.",
    image: "/images/digital-marketing-fundamentals.png",
    WhyChoose: "Start building real digital marketing skills that companies hire for. Learn through execution, work on real campaigns and build a portfolio that proves your ability, not just a certificate. Perfect for students who want practical training and a clear path to a job.",
    Gain: ["Real skills. Live campaigns", "Portfolio that gets interviews", "Learn SEO, ads, content, analytics", "Beginner‑friendly, job‑focused", "Resume + interview + placement support"],
    details: "Covers digital marketing fundamentals, SEO, social media marketing, content creation, web analytics, and growth hacking strategies to drive business results.",
    Alumni: "",
    successTitle: "Success That Speaks for Itself",
    successSubTitle: "From classroom to top companies, our students have turned practical skills into powerful careers. Their stories reflect the impact of real training, real projects and real industry exposure.",
  },
  {
    slug: "ppdm",
    title: "Premier Program in Digital Marketing",
    title2:"",
    title3:"",
    description: "Learn digital marketing and generative AI through real execution, live projects and brand‑based campaigns. Build visuals, create videos, automate workflows and master the tools used by top digital teams. Gain practical, job‑ready skills and graduate with a full‑stack portfolio that makes you hire‑worthy from day one.",
    WhyChoose: "Build the digital marketing and Gen‑AI skills employers look for today. Learn through real campaigns, hands‑on projects and industry-aligned tools that strengthen your portfolio and build your confidence. Students graduate with practical experience, job‑ready capabilities and a clear path into high‑growth digital marketing roles.",
    Gain: [
      "Interview-ready portfolio",
      "SEO, ads, content, analytics & Gen-AI & Automation",
      "Live project experience. Real Skills",
      "Resume + interview + placement support",
      "Job-ready digital marketing training",
      "Beginner-friendly, job-focused"
    ],
    image: "/images/marketing-analytics.png",
    details: "Focuses on data-driven decision making, Google Ads (PPC), advanced Google Analytics, customer insights, and building comprehensive digital marketing plans.",
    Alumni: "",
    successTitle: "Where Skills Become Careers",
    successSubTitle: "Students graduate with real project experience and confidently step into roles at leading brands. Their journeys show how the right digital marketing training turns ambition into opportunity. With industry‑aligned learning from a trusted digital marketing institute, they’re prepared for high‑growth roles across top digital marketing course pathways.",
  },
  {
    slug: "mpdm",
    title: "Master Program in",
    title2: "Digital Marketing ",
    title3: "Generative AI + Agentic AI",
    description: "Build a strong foundation in digital marketing with hands‑on, industry‑aligned training. Learn SEO, Google Ads, Meta Ads, content, analytics, automation, Gen‑AI and Agentic AI through real projects that strengthen your portfolio and job readiness. Designed for high‑growth careers, this digital marketing course helps you gain the skills employers actively look for.",
    WhyChoose: "Master Program in Digital Marketing+Gen AI+Agentic AI gives you practical, job‑ready skills through hands‑on digital marketing training in SEO, ads, content, analytics, automation, Gen‑AI and Agentic AI. With real projects and guidance from a trusted digital marketing institute, you build a portfolio that stands out and gain the confidence to step into high‑growth digital roles. It’s the ideal digital marketing course for anyone starting a strong career in the industry.",
    Gain: [
      "Interview-ready portfolio",
      "SEO, ads, content, analytics & Gen-AI & Automation",
      "Live project experience. Real Skills",
      "Resume + interview + placement support",
      "Job-ready digital marketing training",
      "Beginner-friendly, job-focused"
    ],
    image: "/images/data-science.png",
    details: "Advanced curriculum covering marketing data science, consumer psychology, database marketing, market forecasting, text analysis, and data-driven strategy execution.",
    Alumni: "",
     successTitle: "Where Skills Become Careers",
    successSubTitle: "Students graduate with real project experience and confidently step into roles at leading brands. Their journeys show how the right digital marketing training turns ambition into opportunity. With industry‑aligned learning from a trusted digital marketing institute, they’re prepared for high‑growth roles across top digital marketing course pathways.",
  },
  {
    slug: "master-class",
    title: "Masterclass in Digital Marketing & Business Growth",
    title2:"",
    title3:"",
    description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    Gain: ["Real skills. Live campaigns", "Portfolio that gets interviews", "Learn SEO, ads, content, analytics", "Beginner‑friendly, job‑focused", "Resume + interview + placement support"],
    image: "/images/master-class.png", // Suggested placeholder image
    details: `This intensive masterclass is tailored for professionals, entrepreneurs, and business owners. 
    It blends strategy with hands-on practice, covering advanced digital marketing frameworks, branding, campaign optimization, and growth strategies. 
    Participants learn how to craft high-performing campaigns, measure ROI, and apply the latest industry practices for maximum impact. 
    By the end of this masterclass, you will be able to implement practical strategies that accelerate both career and business success.`,
    Alumni: "",
    successTitle: "Success That Speaks for Itself",
    successSubTitle: "From classroom to top companies, our students have turned practical skills into powerful careers. Their stories reflect the impact of real training, real projects and real industry exposure.",
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) Program",
    title2:"",
    title3:"",
    description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    Gain: ["Real skills. Live campaigns", "Portfolio that gets interviews", "Learn SEO, ads, content, analytics", "Beginner‑friendly, job‑focused", "Resume + interview + placement support"],
    image: "/images/artificial-intelligence.png", // Suggested placeholder image
    details: `This program is designed for professionals, entrepreneurs, and students eager to embrace the AI revolution. 
    It covers AI fundamentals, machine learning, deep learning, natural language processing, and real-world applications in business and marketing. 
    Participants will also explore AI tools for automation, data-driven decision-making, and content creation. 
    By the end of the program, learners will be equipped with the knowledge to leverage AI for innovation, career growth, and business transformation.`,
    successTitle: "Success That Speaks for Itself",
    successSubTitle: "From classroom to top companies, our students have turned practical skills into powerful careers. Their stories reflect the impact of real training, real projects and real industry exposure.",
    Alumni: "",
  }
];
