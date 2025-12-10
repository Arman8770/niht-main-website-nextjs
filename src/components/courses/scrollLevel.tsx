"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Lock, Unlock, ChevronRight, X,
  Layout, Monitor, Tags, PenTool, Search, Megaphone, BarChart3, Share2,
  Facebook, Instagram, Linkedin, Youtube, Edit3, Mail, Cpu, Brain, Sparkles,
  Terminal, Aperture, Palette, Image, Video, Smartphone, Camera, Film,
  Headphones, Briefcase, Bot, MessageSquare, LifeBuoy, TrendingUp,
  ShoppingCart, Target, Package, FileText, Mic, Music, Box
} from "lucide-react";

// If you don't have this component, you can remove this import and the <FeatureSection /> line below
import FeatureSection from "../ui/courseui/features";
import WhatyouGain from "./whatyouGain";

// --- TYPES ---
export interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  icon: React.ElementType;
  topics: string[];
  skills: string[];
}

export interface CoursePart {
  id: string;
  name: string;
  description: string;
  isLocked?: boolean;
  modules: TimelineItemData[];
}

// --- DATA (CONTENT FROM IMAGES) ---
const COURSE_DATA: CoursePart[] = [
  // --- PART 1: ALL MODULES (Consolidated) ---
  {
    id: "level-1",
    name: "Level 1",
    description: "Certificate Program in Digital Marketing",
    isLocked: false,
    modules: [
      {
        id: "mod-1",
        title: "Digital Marketing Overview",
        type: "Core Module",
        duration: "Week 1",
        icon: Users,
        topics: [
          "What is digital marketing",
          "Traditional media vs digital media",
          "The digital ecosystem",
          "Importance & benefits of digital marketing",
          // "Identifying & targeting your dream buyer"
        ],
        skills: ["Market Research", "Digital Ecosystems", "Target Audience"],
      },
      {
        id: "mod-2",
        title: "Digital Marketing Strategy",
        type: "Strategy Module",
        duration: "Week 1",
        icon: Layout,
        topics: [
          "Digital Marketing Mantras: 80-20 Rule of marketing, The Ripple Effect, etc",
          "The network effect and its importance in internet marketing",
          "Understanding unique value proposition",
          "Understanding marketing jargons"
        ],
        skills: ["Strategic Planning", "Value Proposition", "Marketing Models"],
      },
      {
        id: "mod-3",
        title: "Website Planning & Creation",
        type: "Technical Module",
        duration: "Week 2",
        icon: Monitor,
        topics: [
          "Dynamic & static websites",
          "Introduction to HTML and Tags",
          "Essentials of website planning",
          // "Functional design and layouts",
          // "Landing page design",
          "Exploring modern web design tools",
          "WordPress- Introduction, page creation, blog creation"
        ],
        skills: ["WordPress", "Web Design", "Landing Pages", "HTML Basics"],
      },
      {
        id: "mod-4",
        title: "Google Tag Manager",
        type: "Technical Module",
        duration: "Week 2",
        icon: Tags,
        topics: [
          "Fundamentals of Tag Manager",
          "Create an account and container",
          "Set up tags, variables and triggers",
          "Event tracking and creating a remarketing tag"
        ],
        skills: ["GTM Setup", "Event Tracking", "Tags & Triggers"],
      },
      {
        id: "mod-5",
        title: "Content for Blogging",
        type: "Creative Module",
        duration: "Week 3",
        icon: PenTool,
        topics: [
          "Ai optimised blogs writing for AIO",
          "Generate ideas, outlines & headlines",
          "Write clear, engaging content fast",
          "Optimize posts for AIO SEO",
          // "Rewrite or expand content easily",
          "Ideal for writers and marketers"
        ],
        skills: ["Blogging", "AI Writing", "Content Strategy"],
      },
      {
        id: "mod-6",
        title: "Search Engine Optimization (SEO)",
        type: "Core Module",
        duration: "Week 3",
        icon: Search,
        topics: [
          "Introduction to AIO, SEO & SERP",
          "AI-driven SEO & Google algorithm",
          "AI-powered keyword research",
          // "Intent mapping, audit & analysis",
          "On-page SEO for AI summaries",
          // "AIO structuring & optimization",
          // "AEO, GEO & SXO optimization",
          "Off-page SEO for AI brand presence",
          // "Voice & conversational search SEO",
          // "Local SEO & Google Business Profile",
          // "Schema markup for AI visibility",
          // "Google Search Console insights"
        ],
        skills: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research"],
      },
      {
        id: "mod-7",
        title: "Google Ads (Previously Adwords)",
        type: "PPC Module",
        duration: "Week 4",
        icon: Megaphone,
        topics: [
          "Introduction to Google Ads",
          "Creating, optimizing and configuring the Google Ads account",
          "Understanding various terminologies & Google Ads algorithm",
          "Keyword research and analysis",
          // "Bidding and optimization strategies",
          // "Creating & optimizing search ads",
          // "Ad writing techniques to get maximum return",
          // "Understanding & creating display ads",
          // "How ad auction works",
          // "Learning how to create an effective remarketing campaign",
          // "Video advertising",
          // "Learning to create, target, test and monitor a display advertising campaign",
          // "Shopping ads with Google merchant centre",
          // "Testing and optimizing your campaign using conversion tracking"
        ],
        skills: ["PPC", "Google Ads", "Bidding Strategies", "Campaign Management"],
      },
      {
        id: "mod-8",
        title: "Google Analytics (GA4)",
        type: "Data Module",
        duration: "Week 5",
        icon: BarChart3,
        topics: [
          "GA4 account creation and configuration",
          "Understanding key metrics of GA4",
          "Implementing remarketing tags",
          "Understanding target audience",
          // "Understanding and implementing goals",
          // "Understanding and optimising marketing KPIs",
          "Monitoring traffic: source, behaviour, actions, etc",
          // "Monitoring bounce rate and exit rates",
          // "Tracking conversion & evaluating acquisition"
        ],
        skills: ["GA4", "Data Analysis", "KPI Tracking", "User Behavior"],
      },
      {
        id: "mod-9",
        title: "Social Media Marketing",
        type: "Social Module",
        duration: "Week 5",
        icon: Share2,
        topics: [
          "What is social media marketing",
          "Importance of social media marketing",
          "Understanding different social media platforms and their marketing strategies (Native Marketing)",
          "Leveraging social media platforms",
          "Planning and implementing a multi-channel social media strategy",
          // "Social media marketing funnel",
          // "Understanding and optimising your buyer’s journey",
          // "Social media analytics tools"
        ],
        skills: ["Social Strategy", "Multi-channel Marketing", "Funnel Optimization"],
      },
      {
        id: "mod-10",
        title: "Facebook",
        type: "Social Module",
        duration: "Week 6",
        icon: Facebook,
        topics: [
          "Introduction to Facebook marketing",
          "Understanding Facebook algorithm",
          "Facebook business page creation",
          // "Configuring business page in the right way",
          "Creating Facebook ad campaigns",
          // "Configuring Facebook pixel",
          // "Audience creation",
          // "Creating Remarketing campaigns",
          // "Acquiring new customers and creating ad recall",
          "Boost sales, generate awareness and leads",
          // "Conversion tracking and Facebook campaign insights",
          // "Facebook marketing analytics"
        ],
        skills: ["Facebook Ads", "Pixel Setup", "Audience Targeting"],
      },
      {
        id: "mod-11",
        title: "Instagram",
        type: "Social Module",
        duration: "Week 6",
        icon: Instagram,
        topics: [
          "Understanding the importance of Instagram",
          "How to grow on Instagram organically",
          "Creating an Instagram business profile",
          "Creating appealing Instagram content",
          // "Creating Instagram advertising campaigns",
          // "Scope of Influencer marketing on Instagram"
        ],
        skills: ["Instagram Growth", "Content Creation", "Influencer Marketing"],
      },
      {
        id: "mod-12",
        title: "LinkedIn",
        type: "Social Module",
        duration: "Week 7",
        icon: Linkedin,
        topics: [
          "Crafting an influential professional profile to increase career opportunities",
          "Creating a LinkedIn business page",
          "LinkedIn advertising and marketing strategies",
          "Creating different types of LinkedIn campaigns"
        ],
        skills: ["B2B Marketing", "Profile Optimization", "LinkedIn Ads"],
      },
      {
        id: "mod-13",
        title: "YouTube Marketing",
        type: "Video Module",
        duration: "Week 7",
        icon: Youtube,
        topics: [
          "Building a YouTube channel from scratch",
          "Identifying and engaging probable customers",
          "Discovering content ideas",
          "YouTube SEO",
          // "Optimizing your channel for organic growth",
          // "How to increase relevance and impact of the content",
          "Amplifying and promoting content"
        ],
        skills: ["Video Marketing", "YouTube SEO", "Channel Growth"],
      },
      {
        id: "mod-14",
        title: "Creative Ads Writing",
        type: "Creative Module",
        duration: "Week 8",
        icon: Edit3,
        topics: [
          "Writing catchy headlines to attract buyers",
          "How to write copy that keeps readers reading right to the end",
          "Copywriting tactics for specific types of projects, including landing pages, CTAs, Email, social media, videos, and much more",
          "How to compel readers using timeless sales psychology"
        ],
        skills: ["Copywriting", "Sales Psychology", "Ad Copy"],
      },
      {
        id: "mod-15",
        title: "Email Marketing",
        type: "Creative Module",
        duration: "Week 8",
        icon: Mail,
        topics: [
          "Building Email Marketing strategies",
          "Do’s and Don’ts of email marketing",
          // "How to build and nurture a mailing list",
          "Building personal and commercial templates",
          // "Creating an effective email campaign",
          // "Email design and functionality",
          "Email marketing tools & analytics",
          // "Minimizing bounces and unsubscribes"
        ],
        skills: ["Email Automation", "List Building", "Campaign Design"],
      },
    ]
  },

  // --- PART 2: Gen AI & Advanced Modules ---
  {
    id: "level-2",
    name: "Level 2",
    description: "Premier Program in Digital Marketing + Gen AI",
    isLocked: false, // Set to false since we have data now
    modules: [
      {
        id: "gen-1",
        title: "ML, DL, NLP and Computer Vision",
        type: "Technical Module",
        duration: "Week 9",
        icon: Cpu,
        topics: [
          "What is AI",
          "Difference between AI, ML, DP",
          "Types of ML models: Supervised, Unsupervised, Reinforcement Learning, Data Processing and model evaluation",
          "What is deep learning and neural networks",
          // "Deep Learning Architecture - CNN, RNN",
          // "What is Computer Vision and Speech AI",
          // "See how multi-modal AI processes text, images & audio together",
          // "Learn how NLP powers search, recommendations & assistants",
          "Discover real-world uses of ML, DL, NLP & CV in daily life"
        ],
        skills: ["Machine Learning Concepts", "Neural Networks", "NLP", "Computer Vision"],
      },
      {
        id: "gen-2",
        title: "Understanding LLMs Models",
        type: "Core Module",
        duration: "Week 9",
        icon: Brain,
        topics: [
          "Introduction to LLMs are and how they power modern AI",
          // "Types of LLM",
          "How LLMs are trained on massive datasets",
          "Key concepts: tokens, context window, embeddings & RAG",
          "How they read, understand & generate human-like text",
          // "Conversational AI powered by advanced language models",
          // "How popular assistants use LLM technology",
          // "Uses in writing, coding, research & customer support",
          "Multi-modal abilities combining text, images & audio",
          // "Safety alignment, bias & hallucination"
        ],
        skills: ["LLM Fundamentals", "RAG", "Prompt Context", "AI Ethics"],
      },
      {
        id: "gen-3",
        title: "Understanding Generative AI",
        type: "Core Module",
        duration: "Week 10",
        icon: Sparkles,
        topics: [
          "Introduction to Generative AI",
          "Types of Model & building Blocks",
          "How modern AI learns and creates content",
          "Generate text, images, videos, voices & designs",
          // "Explore conversational, visual & video-generation models",
          // "Learn how AI workflows power memes, reels & ads",
          // "Discover real uses in business & design"
        ],
        skills: ["GenAI Strategy", "Content Generation", "AI Workflows"],
      },
      {
        id: "gen-4",
        title: "Advance Prompt Engineering",
        type: "Skill Module",
        duration: "Week 10",
        icon: Terminal,
        topics: [
          "Foundations of prompt engineering",
          "Types of prompt & when to use them: Instructional Prompts, Exploratory Prompts, Conversational Prompts, Structured Prompts, Clarifying Prompts",
          "Prompting Strategies: Zero-shot Prompting, One Short Prompting, Two shot Prompting, Role play Prompting, Iterative Prompting, Few Shot Prompting, Chain of thoughts",
          "Prompting (COT)",
          // "Controlling AI Output using Parameters",
          // "Open AI playbook",
          // "Improve accuracy & creativity with iterative refinement",
          // "Use techniques like role assignment, context injection & step-by-step logic",
          // "Build task-specific prompts for writing, coding, research & automation",
          // "Apply skills in tools like Google AI Studio, ChatGPT, Gemini & Claude"
        ],
        skills: ["Prompt Engineering", "Chain of Thought", "Parameter Tuning", "AI Tools"],
      },
      {
        id: "gen-5",
        title: "Stable Diffusion",
        type: "Creative Module",
        duration: "Week 11",
        icon: Aperture,
        topics: [
          "How diffusion models create images step-by-step",
          "The role of noise, denoising & latent spaces",
          "Work with advanced Stability.ai models (SDXL, SD Turbo)",
          "Turn technical ideas into creative outputs and workflows",
          // "Create high-quality art, designs & visuals with open-source tools",
          // "Customize results via prompts, LoRAs, styles & fine-tuning"
        ],
        skills: ["Stable Diffusion", "Image Generation", "LoRAs", "Fine-tuning"],
      },
      {
        id: "gen-6",
        title: "AI Branding",
        type: "Creative Module",
        duration: "Week 11",
        icon: Palette,
        topics: [
          "Create posters, ads & brand identity",
          "Generate logos, colors & brand assets",
          "Build high-quality mock ads for campaigns",
          "Remix styles to create multiple design variations"
        ],
        skills: ["Brand Identity", "Logo Design", "AI Design Assets"],
      },
      {
        id: "gen-7",
        title: "Images & Post Generation",
        type: "Creative Module",
        duration: "Week 12",
        icon: Image,
        topics: [
          "Create text-to-image",
          "Transform photos using image-to-image",
          "Learn effective prompt techniques",
          "Maintain consistent characters across images",
          // "Edit and refine visuals using AI image editors",
          // "Explore styles, LoRAs & creative presets",
          // "Produce posters, ads & social media graphics",
          // "Generate high-quality, brand-ready visuals",
          // "Create multiple variations with one prompt"
        ],
        skills: ["Text-to-Image", "Image-to-Image", "Visual Consistency", "Social Media Graphics"],
      },
      {
        id: "gen-8",
        title: "Video & Ads Generation",
        type: "Video Module",
        duration: "Week 12",
        icon: Video,
        topics: [
          "Convert text to video instantly",
          "Turn images into dynamic videos",
          "Create cinematic short films from simple ideas",
          "Produce stunning visuals and smooth motion",
          // "Design high-impact ads and brand stories",
          // "Blend visuals, scripts & voiceovers easily",
          // "Generate product ads, explainers & reels",
          // "Create multiple styles and variations quickly",
          // "Ideal for brands, creators, marketers & agencies"
        ],
        skills: ["AI Video", "Text-to-Video", "Commercial Ads", "Video Editing"],
      },
      {
        id: "gen-9",
        title: "AI Avatar Generation",
        type: "Video Module",
        duration: "Week 13",
        icon: Users,
        topics: [
          "Create consistent, high-quality AI avatars",
          "Generate lifelike, animated character videos",
          "Enhance motion, expressions & realism",
          "Produce ads, explainers & social media content",
          // "Maintain visual continuity for storytelling"
        ],
        skills: ["Avatar Creation", "Character Animation", "Digital Human"],
      },
      {
        id: "gen-10",
        title: "AI Text-To-Speech",
        type: "Audio Module",
        duration: "Week 13",
        icon: Mic,
        topics: [
          "AI voice generation and cloning",
          "Create natural, expressive voices for any content",
          "Control tone, pace & emotion with precision",
          "Produce clear, lifelike, high-quality speech",
          // "Enjoy full creative control and customization"
        ],
        skills: ["Voice Cloning", "TTS", "Audio Production"],
      },
      {
        id: "gen-11",
        title: "AI Music Generation",
        type: "Audio Module",
        duration: "Week 14",
        icon: Music,
        topics: [
          "Create music style or mood",
          "Customize beats, melodies & sound design",
          "Produce soundtracks for videos, ads & social media",
          // "Boost creativity with unlimited variations",
          // "Generate royalty-free tracks for commercial use",
          "Delivers high-quality, professional audio"
        ],
        skills: ["AI Music Composition", "Sound Design", "Audio Licensing"],
      },
      {
        id: "gen-12",
        title: "AI Product 3D Models",
        type: "3D Module",
        duration: "Week 14",
        icon: Box,
        topics: [
          "Create 3D models from text, images or real scans",
          "Produce high-quality, realistic 3D visuals",
          "Generate renders for marketing & design",
          "Build interactive assets for web, AR/VR & e-commerce",
          // "Perfect for demos, ads, prototypes & showcases",
          // "Enhance products with lifelike textures and lighting",
          // "Export models for videos, animations & presentations"
        ],
        skills: ["3D Modeling", "AR/VR Assets", "Product Rendering"],
      },
      {
        id: "media-1",
        title: "Mobile Photography",
        type: "Creative Module",
        duration: "Week 15",
        icon: Camera,
        topics: [
          "Introduction To Mobile Photography",
          "Mastering Mobile Camera Settings with Exposure, ISO, Shutter Speed, Focus, And White Balance",
          "Composition Techniques with Rule of Thirds, Leading Lines, Symmetry, Framing and Negative Space",
          "Illuminating Your Mobile Photos with Natural Vs. Artificial Light",
          // "Shooting For Instagram, Facebook and E-Commerce"
        ],
        skills: ["Mobile Photography", "Lighting", "Composition", "Product Photography"],
      },
      {
        id: "media-2",
        title: "Mobile Videography",
        type: "Video Module",
        duration: "Week 15",
        icon: Smartphone,
        topics: [
          "Getting Started with Mobile Videography",
          "Unlocking Pro-Level Video Quality with Essential Camera Settings",
          "The Art of Storytelling and Creating Hooks",
          "Cinematic Stability to Keep Your Videos Shake-Free",
          // "Using external mics, reducing background noise"
        ],
        skills: ["Mobile Filmmaking", "Storytelling", "Video Stability", "Audio Recording"],
      },
      {
        id: "media-3",
        title: "Professional Photo Editing",
        type: "Skill Module",
        duration: "Week 16",
        icon: Edit3,
        topics: [
          "Enhance images and photos with Adobe Photoshop",
          // "Remove blemishes, noise & flaws",
          "Improve lighting, color tones & overall aesthetics",
          "Replace or upgrade backgrounds",
          "Sharpen faces, details & textures",
          // "Apply creative styles and filters",
          // "Restore damaged or low-quality photos instantly",
          // "Place text and learn to play with fonts"
        ],
        skills: ["Photoshop", "Retouching", "Color Grading", "Photo Restoration"],
      },
      {
        id: "media-4",
        title: "Professional Video Editing",
        type: "Skill Module",
        duration: "Week 16",
        icon: Film,
        topics: [
          "Edit videos faster with powerful tools",
          "Enhance color, lighting & clarity",
          // "Remove noise, shakes & flaws",
          // "Work on backgrounds",
          "Add captions, effects & voiceovers",
          // "Create and add B-roll",
          "Produce high quality videos for ads & socials"
        ],
        skills: ["Video Editing", "Post-Production", "Sound Design", "Visual Effects"],
      },
      {
        id: "media-5",
        title: "Podcasting",
        type: "Audio Module",
        duration: "Week 17",
        icon: Headphones,
        topics: [
          "An introduction to podcasting",
          // "Understanding podcasting as a marketing tool",
          "Designing & editing audio content",
          // "Using industry level tools and software for audio production",
          "Podcast content amplification and distribution",
          "Promoting podcast through Spotify Ads"
        ],
        skills: ["Audio Engineering", "Podcast Strategy", "Distribution", "Spotify Ads"],
      },
      {
        id: "media-6",
        title: "AI-Powered Portfolio Building",
        type: "Career Module",
        duration: "Week 17",
        icon: Briefcase,
        topics: [
          "Display AI-made social posts & ad designs",
          "Add SEO content samples and keyword reports",
          "Include image, video & voice outputs",
          "Add 3D product mockups"
        ],
        skills: ["Portfolio Design", "Personal Branding", "Showcasing AI Work"],
      },
    ]
  },

  // --- PART 4: Level 3 (Agentic AI & Advanced Marketing) ---
  {
    id: "level-3",
    name: "Level 3",
    description: "Advance Program in Digital Marketing + Generative AI & Agentic AI",
    isLocked: false,
    modules: [
      {
        id: "agent-1",
        title: "Introduction to AI Agents",
        type: "Agentic AI Module",
        duration: "Week 18",
        icon: Bot,
        topics: [
          "Understand single AI agents and how they work",
          "Learn multi-agent systems and coordinated automation",
          "Agents that act independently and make decisions",
          "Execute tasks end-to-end with intelligent planning",
          // "Understand goals, context and user intent",
          // "Learn adaptive agents that improve with feedback",
          // "Automate multi-step workflows across platforms",
          // "Reduce manual work and boost productivity",
          // "Build real-time, self-running AI automations"
        ],
        skills: ["AI Agents", "Autonomous Systems", "Workflow Automation"],
      },
      {
        id: "agent-2",
        title: "Custom GPTs & Gemini Gems",
        type: "Technical Module",
        duration: "Week 18",
        icon: Sparkles,
        topics: [
          "Build your own AI assistants",
          "Customize tone, behavior & responses",
          "Add your own data and files",
          "Create task-specific AI agents",
          // "Design workflows without coding",
          // "Connect tools, actions & extensions",
          // "Deploy assistants across teams"
        ],
        skills: ["Custom GPTs", "Gemini Gems", "No-Code AI"],
      },
      {
        id: "agent-3",
        title: "AI Chatbots for Websites",
        type: "Technical Module",
        duration: "Week 19",
        icon: MessageSquare,
        topics: [
          "Integrate AI chatbots directly into your website",
          "Enable text generation, rewriting & content creation",
          "Train custom chatbots using your business data",
          "Connect AI models to backend workflows",
          // "Build using OpenAI, Hugging Face & Google AI Studio",
          // "Improve website engagement and user experience",
          // "Reduce manual support and boost productivity"
        ],
        skills: ["Chatbot Dev", "OpenAI API", "Hugging Face", "Customer Support AI"],
      },
      {
        id: "agent-4",
        title: "AI Social Media Automation",
        type: "Growth Module",
        duration: "Week 19",
        icon: Share2,
        topics: [
          "AI agents create posts and captions instantly",
          "Schedule content across all platforms",
          "Analyze trends, hashtags & audience behavior",
          "Boost engagement with smart posting times",
          // "Auto-reply to comments and messages",
          // "Track reach, performance & insights",
          // "Maintain consistent posting across channels",
          // "Automate complete social media workflows"
        ],
        skills: ["Social Automation", "Trend Analysis", "Auto-Response Systems"],
      },
      {
        id: "agent-5",
        title: "LinkedIn Automation with AI",
        type: "Growth Module",
        duration: "Week 20",
        icon: Linkedin,
        topics: [
          "Auto-sends connection requests",
          "Sends personalized outreach messages",
          "Schedules and manages posts",
          "Analyzes profile views and engagement",
          // "Automates tasks like lead outreach & follow-ups",
          // "Boosts profile visibility and reach",
          // "Suggests smart content ideas",
          // "Saves time on daily networking",
          // "Tracks replies, leads & conversions"
        ],
        skills: ["LinkedIn Growth", "Lead Gen Automation", "Networking"],
      },
      {
        id: "agent-6",
        title: "AI Email Automation",
        type: "Growth Module",
        duration: "Week 20",
        icon: Mail,
        topics: [
          "AI agents automate email sending",
          "Deliver personalized messages at scale",
          "Create email content instantly",
          // "Send emails at the perfect time",
          "Improve customer interaction",
          // "Reduce manual effort dramatically",
          // "Boost conversion and response rates",
          // "Handle follow-ups automatically"
        ],
        skills: ["Cold Emailing", "Email AI", "Drip Campaigns"],
      },
      {
        id: "agent-7",
        title: "AI Support Chatbot",
        type: "Technical Module",
        duration: "Week 21",
        icon: LifeBuoy,
        topics: [
          "Automates lead follow-up cycles",
          "Instant customer responses",
          "Crafts personalized sales interactions",
          // "Auto-qualifies leads with precision",
          "Stays active and available 24/7",
          // "Sends smart reminders and nudges",
          // "Tracks buyer intent and engagement",
          // "Boosts lead-to-conversion performance",
          // "Minimizes manual sales workload",
          // "Build custom flows using n8n",
          // "Streamline outreach with Airtable Automations"
        ],
        skills: ["n8n", "Airtable", "Lead Qualification", "Sales Automation"],
      },
      {
        id: "agent-8",
        title: "Building Your Portfolio",
        type: "Portfolio Module",
        duration: "Week 21",
        icon: Box,
        topics: [
          "Show AI posts, ads & SEO samples",
          "Add LLM writing and research work",
          "Include images, videos, voices & 3D assets",
          "Present your no-code AI website",
          // "Display AI agents and automation flows",
          // "Add workflow screenshots",
          // "Show clear before/after improvements",
          // "Publish on LinkedIn, GitHub or your site"
        ],

        skills: [""],
      },
      {
        id: "agent-9",
        title: "Advance Google & Meta Ads (AI Powered)",
        type: "PPC Module",
        duration: "Week 21",
        icon: TrendingUp,
        topics: [
          "How to find insights into competitors’ strategies and ad campaigns",
          "How to “spy” on your competitors’ Ads",
          "Use AI to write highly engaging and converting Ad Copy",
          // "How to analyse best performing Headlines and Descriptions",
          "How to Optimise your campaigns using AI-Powered Data Analysis",
          // "How to improve your campaign performance using AI",
          // "How to scale your Google and Meta Ads using AI",
          // "Automated A/B testing & ad variation optimisation"
        ],
        skills: ["Competitor Analysis", "AI Ad Copy", "A/B Testing", "Scaling Ads"],
      },

      {
        id: "agent-10",
        title: "E-commerce Marketing",
        type: "E-com Module",
        duration: "Week 22",
        icon: ShoppingCart,
        topics: [
          "Introduction to E-commerce marketing",
          "Technology infrastructure for E-commerce",
          "Building an E-commerce foundation",
          // "Managing E-commerce platforms",
          "Understanding E-commerce dynamic ads",
          // "Understanding customer journey",
          // "Learning visitor tracking",
          // "Working with Sales Funnel, Clickfunnels, etc.",
          // "Tips for successful marketing automation implementation",
          // "Strategy to compete with big competitors"
        ],
        skills: ["E-commerce Strategy", "Funnel Building", "Dynamic Ads"],
      },
      {
        id: "agent-11",
        title: "Psychographic Marketing",
        type: "Strategy Module",
        duration: "Week 22",
        icon: Target,
        topics: [
          "What is psychographics",
          "Psychographic segmentation",
          "Understanding customer profile",
          "Creating refined audiences",
          // "Enhancing A/B tests"
        ],
        skills: ["Psychographics", "Audience Segmentation", "Consumer Psychology"],
      },
      {
        id: "agent-12",
        title: "Amazon Marketplace",
        type: "E-com Module",
        duration: "Week 23",
        icon: Package,
        topics: [
          "Steps to set a page up for success",
          "Optimising product pages in Amazon",
          "Understanding Amazon analytics",
          "Strategies to market products",
          // "Product content creation and optimisation",
          // "Advertising on Amazon",
          // "How to create and manage campaigns",
          // "Learn how to maintain account health",
          // "Valuable marketing case studies"
        ],

        skills: ["Amazon SEO", "Amazon PPC", "Marketplace Optimization"],
      },
      {
        id: "agent-13",
        title: "Amazon Ads",
        type: "Amazon Ads Module",
        duration: "Week 23",
        icon: Package,
        topics: [
          "Introduction to Amazon Ads",
          "Understanding Amazon Ad Types (Sponsored Products, Brands, and Display)",
          // "Campaign Setup & Structure",
          "Manual vs. Automatic campaigns",
          "Keyword Research & Targeting",
          // "Understanding match types (Broad, Phrase, Exact)",
          // "Negative keywords to reduce wastage",
          // "Competitor keyword targeting",
          // "Budgeting & bid strategies",
          // "Ad Copy & Creative Best Practices",
          // "Optimising product images & videos",
          // "A/B testing for better performance",
          // "Performance Tracking & Optimization",
          // "Scaling successful campaigns"
        ],
        skills: ["Amazon SEO", "Amazon PPC", "Marketplace Optimization"],
      },
      {
        id: "agent-14",
        title: " Interview & Resume Writing Skills",
        type: "Career Module",
        duration: "Week 24",
        icon: FileText,
        topics: [
          "How to format resume",
          "Resume writing practical tips to land an interview call",
          "Building an attractive portfolio",
          "Fulfilling HR expectations",
          "Mock interview",
          // "Interview skills – before, during & after",
          "How to deal with rejections"
        ],

        skills: ["Portfolio Building", "Resume Writing", "Interview Prep", "No-Code Showcasing"],
      },
    ]
  },
];

// --- COMPONENTS ---

// 1. Single Timeline Item
const TimelineItem = ({ data, isLocked, isBlurry }: { data: TimelineItemData; isLocked?: boolean; isBlurry?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden" />
      <div className={`absolute left-0 md:-left-[42px] top-0 p-1.5 rounded-full border z-10 ${isLocked ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200 dark:bg-gray-900'}`}>
        {isLocked ? <Lock className="w-4 h-4 text-gray-400" /> : <data.icon className="w-4 h-4 text-blue-600" />}
      </div>

      <div className={`bg-white dark:bg-gray-800 p-5 rounded-xl border shadow-sm transition-all ${isBlurry ? 'blur-[3px] select-none opacity-60 pointer-events-none grayscale' : 'hover:shadow-md border-gray-100 dark:border-gray-700'}`}>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{data.title}</h3>
        <ul className="space-y-2">
          {data.topics.map((t, i) => (
            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// 2. Unlock Form Modal
// const UnlockModal = ({ isOpen, onClose, onUnlock }: { isOpen: boolean; onClose: () => void; onUnlock: () => void }) => {
//   if (!isOpen) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setTimeout(() => {
//       onUnlock();
//       onClose();
//     }, 800);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         // Change "items-center" to "items-start" and add "pt-20" (padding top)
//         className="fixed inset-0 z-[100] flex items-start justify-center mt-24 md:mt-30 p-4 bg-black/60 backdrop-blur-sm"
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
//           className="bg-white  dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative p-8"
//         >
//           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
//             <X className="w-5 h-5" />
//           </button>
//           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
//             <Unlock className="w-6 h-6 text-blue-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">Unlock Full Course</h2>
//           <p className="text-center text-gray-500 text-sm mb-6">Enter your details to access advanced modules.</p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Full Name*</label>
//               <input required type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Mobile No*</label>
//               <input required type="tel" placeholder="Mob.No." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address*</label>
//               <input required type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700" />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
//               Unlock Your Future
//             </button>
//           </form>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// 3. Bottom Sticky Overlay
const OverlayUnlockCTA = ({ onOpenModal, visible }: { onOpenModal: () => void; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-[100px] z-20 flex items-center justify-center bg-gradient-to-t from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 pt-8"
      >
        <button
          onClick={onOpenModal}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all"
        >
          <Lock className="w-4 h-4" />
          Unlock Your Future
        </button>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- MAIN PAGE COMPONENT ---
export default function CoursePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [activePart, setActivePart] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBottomOverlay, setShowBottomOverlay] = useState(true);

  // === CRITICAL FIX: Two Refs for Mobile and Desktop separately ===
  const mobileTriggerRef = useRef<HTMLDivElement>(null);
  const desktopTriggerRef = useRef<HTMLDivElement>(null);

  const courseData = useMemo(() => {
    let allowedIds: string[] = [];
    if (slug === 'cpdm') allowedIds = ['level-1'];
    else if (slug === 'ppdm') allowedIds = ['level-1', 'level-2'];
    else if (slug === 'mpdm') allowedIds = ['level-1', 'level-2', 'level-3'];
    else allowedIds = ['level-1', 'level-2']; // Default fallback
    return COURSE_DATA.filter(part => allowedIds.includes(part.id));
  }, [slug]);

  useEffect(() => {
    if (courseData.length > 0) {
      setActivePart(0);
    }
  }, [slug, courseData]);

  // --- INTERSECTION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Logic: If ANY of the locked sections (mobile or desktop) are visible, hide bottom bar
          if (entry.isIntersecting) {
            setShowBottomOverlay(false);
          } else if (entry.boundingClientRect.y > 0) {
            // Only show bottom bar if we are above the section (scrolling up)
            setShowBottomOverlay(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.05, // Trigger when 5% of locked section is visible
        rootMargin: "0px 0px -10% 0px"
      }
    );

    // Observe both refs so it works on whatever screen size is active
    if (mobileTriggerRef.current) observer.observe(mobileTriggerRef.current);
    if (desktopTriggerRef.current) observer.observe(desktopTriggerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [activePart]);

  const activeLevelData = courseData[activePart];

  // --- RENDER FUNCTION ---
  // Accepts a specific ref to attach to the locked section
 const renderModules = (modules: TimelineItemData[], assignedRef: React.RefObject<HTMLDivElement | null>) => {
    // 1. If Unlocked: Show simple list
    if (isUnlocked) {
      return modules.map((item) => (
        <div key={item.id} className="mb-6">
          <TimelineItem data={item} isLocked={false} isBlurry={false} />
        </div>
      ));
    }

    // 2. If Locked: Split and show Sticky Card
    const lockIndex = 2;
    const unlockedModules = modules.slice(0, lockIndex);
    const lockedModules = modules.slice(lockIndex);
    
    // OPTIONAL: Only render a few locked items to save performance since we cut it off anyway
    const lockedVisuals = lockedModules.slice(0, 25); 

    return (
      <div className="flex flex-col relative">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300">{activeLevelData.name}</h3>
        </div>

        {/* Free Modules */}
        {unlockedModules.map((item) => (
          <div key={item.id} className="mb-6">
            <TimelineItem data={item} isLocked={false} isBlurry={false} />
          </div>
        ))}

        {/* Locked Section Wrapper */}
        <div ref={assignedRef} className="relative">

          {/* --- CTA CARD (Centered Absolute) --- */}
          {/* Using absolute inset-0 z-30 centers it over the blurred content perfectly */}
          <div className=" absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto transform translate-y-[-20%]">
              <div className="p-6 text-center w-[280px] md:w-[320px]">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Unlock className="w-4 h-4" />
                  Unlock Your Future
                </button>
              </div>
            </div>
          </div>

          {/* --- BLURRED BACKGROUND CONTAINER --- */}
          {/* Key Changes: 
              1. max-h-[60vh] or h-[500px]: Limits height to roughly one scroll.
              2. overflow-hidden: Cuts off the rest of the content.
              3. mask-image: Creates a smooth fade out at the bottom.
          */}
          <div className="
              opacity-40 filter blur-[2px] pointer-events-none select-none
              relative overflow-hidden h-[500px] 
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-t after:from-white dark:after:from-gray-900 after:to-transparent
          ">
            {
            lockedVisuals.map((item) => (
              <div key={item.id} className="mb-6">
                <TimelineItem data={item} isLocked={true} isBlurry={true} />
              </div>
            ))}
            
            {/* Visual filler to ensure it looks like there is more */}
            <div className="h-full w-full bg-gray-100 dark:bg-gray-800 opacity-20"></div>
          </div>

        </div>
      </div>
    );
  };


  return (
    <section className="w-full bg-gray-50 rounded-xl md:py-10 h-[80vh] flex flex-col overflow-hidden relative">

      {/* <UnlockModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUnlock={() => setIsUnlocked(false)}
      /> */}

      {/* ============================ */}
      {/* 📱 MOBILE VIEW                */}
      {/* ============================ */}
      <div className="md:hidden flex flex-col h-full relative">
        <div className="bg-white border-b border-gray-200 dark:border-gray-800 z-30 shadow-sm shrink-0">
          <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-2 snap-x items-center">
            {courseData.length >= 2 && (
              courseData.map((part, index) => (
                <button
                  key={index}
                  onClick={() => setActivePart(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold border ${activePart === index
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200"
                    }`}
                >
                  {part.name}
                </button>
              ))
            )}
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
          <div className="h-full overflow-y-auto p-4 pb-24 scroll-smooth">
            {/* PASS MOBILE REF HERE */}
            {activeLevelData && renderModules(activeLevelData.modules, mobileTriggerRef)}
          </div>
          {/* Bottom Bar controlled by Observer */}
          {!isUnlocked && <OverlayUnlockCTA visible={showBottomOverlay} onOpenModal={() => setIsModalOpen(true)} />}
        </div>
      </div>

      {/* ============================ */}
      {/* 🖥 DESKTOP VIEW               */}
      {/* ============================ */}
      <div className="hidden md:flex md:flex-row max-w-7xl mx-auto w-full px-4 h-[calc(80vh-80px)]">

        {/* LEFT Sidebar */}
        <div className="w-1/3 border-r dark:border-gray-700 pr-6 overflow-y-auto custom-scrollbar pb-10">
          <div className="sticky top-0 bg-gray-50 dark:bg-gray-900 pb-4 z-20">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Course Level</h2>
          </div>
          <div className="space-y-3">
            {courseData.map((part, index) => (
              <button
                key={index}
                onClick={() => setActivePart(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${activePart === index
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white hover:bg-gray-50 text-gray-800 border-gray-200"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 pr-4">
                    <h3 className="font-bold text-lg leading-tight">{part.name}</h3>
                    <p className={`text-[9px] font-normal ${activePart === index ? "text-blue-100" : "text-gray-500"}`}>
                      {part.description}
                    </p>
                  </div>
                  {activePart === index && (
                    <ChevronRight className="w-5 h-5 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
            <div className="">
              <FeatureSection />
              {/* <WhatyouGain /> */}
            </div>
          </div>
        </div>

        {/* RIGHT Content */}
        <div className="flex-1 pl-8 flex flex-col h-[calc(80vh-80px)]">
          {activeLevelData && (
            <>
              <div className="flex items-center justify-between mb-6 shrink-0">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {activeLevelData.name}
                </h2>
              </div>

              <div className="relative flex-1 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto p-8 pb-24 scroll-smooth">
                  <div className="pl-6 border-l-2 border-gray-100 dark:border-gray-700">
                    {/* PASS DESKTOP REF HERE */}
                    {renderModules(activeLevelData.modules, desktopTriggerRef)}
                  </div>
                </div>
                {/* Bottom Bar controlled by Observer */}
                {!isUnlocked && <OverlayUnlockCTA visible={showBottomOverlay} onOpenModal={() => setIsModalOpen(true)} />}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}