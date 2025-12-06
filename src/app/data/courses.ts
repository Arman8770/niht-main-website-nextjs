export interface Course {
  slug: string;
  title: string;
  description: string;
  WhyChoose: string;
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
    title: "Certificate Program in Digital Marketing",
    description: "Build real digital marketing skills through practical training, live projects and guided execution. Learn SEO, Google Ads, Meta Ads, content creation and analytics in a job-focused program designed for beginners. Gain hands-on experience, create a strong portfolio and get ready for high-growth digital marketing careers.",
    image: "/images/digital-marketing-fundamentals.png",
    WhyChoose: "Start building real digital marketing skills that companies hire for. Learn through execution, work on real campaigns and build a portfolio that proves your ability, not just a certificate. Perfect for students who want practical training and a clear path to a job.",
    details: "Covers digital marketing fundamentals, SEO, social media marketing, content creation, web analytics, and growth hacking strategies to drive business results."
  },
  {
    slug: "ppdm",
    title: "Premier Program in Digital Marketing + Gen AI",
    description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    image: "/images/marketing-analytics.png",
    details: "Focuses on data-driven decision making, Google Ads (PPC), advanced Google Analytics, customer insights, and building comprehensive digital marketing plans."
  },
  {
    slug: "mpdm",
    title: "Advance Program in Digital Marketing + Generative AI & Agentic AI",
        description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    image: "/images/data-science.png",
    details: "Advanced curriculum covering marketing data science, consumer psychology, database marketing, market forecasting, text analysis, and data-driven strategy execution."
  },
  {
    slug: "master-class",
    title: "Masterclass in Digital Marketing & Business Growth",
        description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    image: "/images/master-class.png", // Suggested placeholder image
    details: `This intensive masterclass is tailored for professionals, entrepreneurs, and business owners. 
    It blends strategy with hands-on practice, covering advanced digital marketing frameworks, branding, campaign optimization, and growth strategies. 
    Participants learn how to craft high-performing campaigns, measure ROI, and apply the latest industry practices for maximum impact. 
    By the end of this masterclass, you will be able to implement practical strategies that accelerate both career and business success.`
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) Program",
        description: "Learn Digital Marketing the real way not theory… execution. SEO, Google & Meta Ads, content, analytics the whole toolkit. Hands on training. Brand based projects. Certifications that count.",
    WhyChoose: "Launch your successful career in Digital Marketing with our comprehensive course. At NIHT, we offer a curriculum that goes beyond current industry standards, ensuring you gain the skills needed to achieve your career aspirations.",
    image: "/images/artificial-intelligence.png", // Suggested placeholder image
    details: `This program is designed for professionals, entrepreneurs, and students eager to embrace the AI revolution. 
    It covers AI fundamentals, machine learning, deep learning, natural language processing, and real-world applications in business and marketing. 
    Participants will also explore AI tools for automation, data-driven decision-making, and content creation. 
    By the end of the program, learners will be equipped with the knowledge to leverage AI for innovation, career growth, and business transformation.`
  }
];
