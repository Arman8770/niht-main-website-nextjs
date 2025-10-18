export interface Course {
  slug: string;
  title: string;
  description: string;
  image: string;
  details: string;
  // Optional fields for future:
  // duration?: string;
  // level?: 'Beginner' | 'Intermediate' | 'Advanced';
  // certificationBody?: string;
}

export const courses: Course[] = [
  {
    slug: "cpdm",
    title: "Certificate Program in Digital Marketing (CPDM)",
    description: "Master the core pillars of digital marketing and build effective strategies.",
    image: "/images/digital-marketing-fundamentals.png",
    details: "Covers digital marketing fundamentals, SEO, social media marketing, content creation, web analytics, and growth hacking strategies to drive business results."
  },
  {
    slug: "ppdm",
    title: "Premier Program In Digital Marketing (PPDM)",
    description: "Advanced training in analytics, strategy, and paid advertising.",
    image: "/images/marketing-analytics.png",
    details: "Focuses on data-driven decision making, Google Ads (PPC), advanced Google Analytics, customer insights, and building comprehensive digital marketing plans."
  },
  {
    slug: "mpdm",
    title: "Master Program in Digital Marketing (MPDM)",
    description: "Deep dive into marketing data science and analytics.",
    image: "/images/data-science.png",
    details: "Advanced curriculum covering marketing data science, consumer psychology, database marketing, market forecasting, text analysis, and data-driven strategy execution."
  },
  {
    slug: "master-class",
    title: "Masterclass in Digital Marketing & Business Growth",
    description: "Industry-focused masterclass to sharpen your skills and drive measurable growth.",
    image: "/images/master-class.png", // Suggested placeholder image
    details: `This intensive masterclass is tailored for professionals, entrepreneurs, and business owners. 
    It blends strategy with hands-on practice, covering advanced digital marketing frameworks, branding, campaign optimization, and growth strategies. 
    Participants learn how to craft high-performing campaigns, measure ROI, and apply the latest industry practices for maximum impact. 
    By the end of this masterclass, you will be able to implement practical strategies that accelerate both career and business success.`
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) Program",
    description: "Learn practical AI skills to build, deploy, and scale AI-powered solutions.",
    image: "/images/artificial-intelligence.png", // Suggested placeholder image
    details: `This program is designed for professionals, entrepreneurs, and students eager to embrace the AI revolution. 
    It covers AI fundamentals, machine learning, deep learning, natural language processing, and real-world applications in business and marketing. 
    Participants will also explore AI tools for automation, data-driven decision-making, and content creation. 
    By the end of the program, learners will be equipped with the knowledge to leverage AI for innovation, career growth, and business transformation.`
  }
];
