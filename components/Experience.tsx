"use client";

import Image from "next/image";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  logoUrl: string;
}

function ExperienceItem({
  company,
  role,
  period,
  description,
  tags,
  logoUrl,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-gray-300 dark:border-gray-700 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Company Logo */}
            <div className="relative w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {role}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                {company}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
            {period}
          </p>
        </div>

        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start"
            >
              <span className="text-blue-600 mr-2 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Mozn",
      role: "Senior Software Engineer (Promoted twice)",
      period: "Aug 2022 - Present",
      logoUrl: "/assets/mozn-logo.png",
      description: [
        "Developed comprehensive financial transaction screening web application using React 18 and TypeScript with 40+ page components and 100+ reusable UI components",
        "Engineered complex rule builder interface with drag-and-drop functionality for pre-screening and post-screening rules",
        "Architected scalable frontend application using React Query and Zustand, reducing unnecessary API calls",
        "Built enterprise-grade authentication system with Keycloak, implementing OAuth 2.0, JWT, and PBAC",
        "Led code reviews and mentored junior developers on React, TypeScript, and testing best practices",
      ],
      tags: [
        "React 18",
        "TypeScript",
        "React Query",
        "Zustand",
        "TailwindCSS",
        "Radix UI",
        "Vitest",
        "Cypress",
        "Keycloak",
        "OAuth 2.0",
      ],
    },
    {
      company: "Alinma Bank - AlinmaPay",
      role: "Frontend Developer",
      period: "Mar 2021 - Aug 2022",
      logoUrl: "/assets/alinmapay-logo.svg",
      description: [
        "Developed and implemented multiple pages for the AlinmaPay mobile e-wallet application",
        "Created HTTP handlers and services to facilitate seamless integration with backend RESTful APIs",
        "Designed and built user-facing features to enhance the mobile banking experience",
        "Debugged and resolved critical defects in production ensuring reliability and performance",
      ],
      tags: [
        "Angular",
        "TypeScript",
        "Cordova",
        "RESTful APIs",
        "Mobile Development",
      ],
    },
    {
      company: "Nana",
      role: "IoT Engineer",
      period: "Jan 2020 - Mar 2021",
      logoUrl: "/assets/nana-logo.webp",
      description: [
        "Designed and developed IoT products encompassing both hardware and software solutions for retail automation",
        "Built mobile applications using React Native for IoT device control, monitoring, and diagnostics",
        "Created web applications with React and Firebase for real-time communication with IoT devices",
        "Developed innovative solutions including automated product photography systems and inventory tracking devices",
      ],
      tags: [
        "React Native",
        "React",
        "Firebase",
        "IoT",
        "Arduino",
        "Raspberry Pi",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
