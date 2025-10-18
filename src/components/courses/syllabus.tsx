"use client";

interface SyllabusModule {
  module: string;
  topics: string[];
  duration?: string;
  level?: string;
}

const syllabus: SyllabusModule[] = [
  {
    module: "Module 1: Digital Marketing Basics",
    topics: [
      "Overview of Digital Marketing",
      "Marketing Funnel Basics",
      "Case Studies",
    ],
    duration: "1 Week",
    level: "Beginner",
  },
  {
    module: "Module 2: SEO Fundamentals",
    topics: [
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "SEO Tools & Techniques",
    ],
    duration: "2 Weeks",
    level: "Intermediate",
  },
  {
    module: "Module 3: Social Media Marketing",
    topics: [
      "Facebook & Instagram Ads",
      "LinkedIn Strategies",
      "Content Planning",
      "Analytics & Insights",
    ],
    duration: "2 Weeks",
    level: "Intermediate",
  },
  {
    module: "Module 4: Email & Content Marketing",
    topics: [
      "Building an Email List",
      "Campaign Creation",
      "Content Strategy",
      "Performance Tracking",
    ],
    duration: "1 Week",
    level: "Beginner",
  },
];

export default function CourseSyllabus() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Course Syllabus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {syllabus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {item.module}
                </h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="text-gray-700">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-600">
                  Duration: <span className="text-gray-900">{item.duration}</span>
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Level: <span className="text-gray-900">{item.level}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
