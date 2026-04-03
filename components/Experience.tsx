"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

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
  index,
}: ExperienceItemProps & { index: number }) {
  return (
    <ScrollReveal delay={index * 150} direction="up">
      <div className="relative pl-0 md:pl-8 pb-12 last:pb-0 group">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-4 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-last:hidden hidden md:block" />

        {/* Timeline dot */}
        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-emerald-500 bg-[var(--background)] z-10 group-hover:bg-emerald-500 transition-colors duration-300 hidden md:block" />

        {/* Content card */}
        <div className="card-hover bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:ml-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="relative w-11 h-11 flex-shrink-0 bg-[var(--surface-alt)] rounded-lg p-2 border border-[var(--border)]">
                <Image
                  src={logoUrl}
                  alt={`${company} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {role}
                </h3>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {company}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 whitespace-nowrap mt-1">
              {period}
            </span>
          </div>

          <ul className="space-y-2.5 mb-5">
            {description.map((item, i) => (
              <li
                key={i}
                className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-3"
              >
                <span className="text-emerald-500 mt-1.5 flex-shrink-0">
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="currentColor"
                  >
                    <rect width="6" height="6" rx="1" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="skill-tag px-2.5 py-1 text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md border border-transparent hover:border-emerald-500/30 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  const experiences: ExperienceItemProps[] = [
    {
      company: "Mozn",
      role: "Senior Software Engineer (Promoted twice)",
      period: "Aug 2022 — Present",
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
      company: "Alinma Bank — AlinmaPay",
      role: "Frontend Developer",
      period: "Mar 2021 — Aug 2022",
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
      period: "Jan 2020 — Mar 2021",
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
    <section
      id="experience"
      className="px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
              Career
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} index={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
