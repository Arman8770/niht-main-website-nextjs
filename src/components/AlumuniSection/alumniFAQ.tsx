"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------- Types ----------------------
interface FAQItemType {
  question: string;
  answer: string;
}

interface FAQData {
  [category: string]: FAQItemType[];
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: FAQData;
  className?: string;
  [x: string]: unknown; // safer than `any`
}


interface FAQTabsProps {
  categories: Record<string, string>;
  selected: string;
  setSelected: (key: string) => void;
}

interface FAQListProps {
  faqData: FAQData;
  selected: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

// ---------------------- FAQ Component ----------------------
export const FAQ: React.FC<FAQProps> = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <FAQList faqData={faqData} selected={selectedCategory} />
    </section>
  );
};

// ---------------------- FAQ Header ----------------------
const FAQHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="relative z-10 flex flex-col items-center justify-center">
    <span className="mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text font-medium text-transparent">
      {subtitle}
    </span>
    <h2 className="mb-8 text-5xl font-bold">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-blue-600/10 to-blue-600/5 blur-3xl" />
  </div>
);

// ---------------------- FAQ Tabs ----------------------
const FAQTabs: React.FC<FAQTabsProps> = ({ categories, selected, setSelected }) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500",
          selected === key
            ? "border-blue-600 text-background"
            : "border-border bg-transparent text-muted-foreground hover:text-foreground"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-blue-400"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

// ---------------------- FAQ List ----------------------
const FAQList: React.FC<FAQListProps> = ({ faqData, selected }) => (
  <div className="mx-auto mt-12 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="space-y-4"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

// ---------------------- FAQ Item ----------------------
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-colors",
        isOpen ? "bg-blue-50" : "bg-card"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-foreground" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// ---------------------- Demo Page ----------------------
const AlumniFAQ: React.FC = () => {
  const categories = {
    "web-dev": "Web Development",
    "mobile-dev": "Mobile Development",
    "ui-ux": "UI/UX Design",
    copywriting: "Copywriting",
  };

  const faqData: FAQData = {
    "web-dev": [
      {
        question: "What is web development?",
        answer:
          "Web development is the process of building and maintaining websites. It involves a combination of client-side and server-side programming, database management, and other web-related technologies.",
      },
      {
        question: "What programming languages are essential for web development?",
        answer:
          "Essential languages for web development include HTML, CSS, and JavaScript for front-end development. For back-end development, popular languages include Python, Ruby, PHP, Java, and Node.js.",
      },
      {
        question: "What's the difference between front-end and back-end development?",
        answer:
          "Front-end development focuses on the user interface and user experience of a website, while back-end development deals with server-side logic, databases, and application integration.",
      },
    ],
    "mobile-dev": [
      {
        question: "What is mobile development?",
        answer:
          "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves designing, coding, and testing applications for mobile operating systems like iOS and Android.",
      },
    ],
    "ui-ux": [
      {
        question: "What is UI/UX design?",
        answer:
          "UI (User Interface) design focuses on the visual elements of a digital product, while UX (User Experience) design deals with the overall feel and functionality of the product.",
      },
    ],
    copywriting: [
      {
        question: "What is copywriting?",
        answer:
          "Copywriting is the act of writing text for the purpose of advertising or other forms of marketing.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Let's answer some questions"
        categories={categories}
        faqData={faqData}
      />
    </div>
  );
};

export default AlumniFAQ;
