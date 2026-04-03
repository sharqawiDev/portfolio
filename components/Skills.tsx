"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiFirebase,
  SiVite,
  SiJest,
  SiCypress,
  SiLinux,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
        { name: "React", icon: <SiReact className="w-5 h-5" /> },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="w-5 h-5" />,
        },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
        { name: "Angular", icon: <SiAngular className="w-5 h-5" /> },
        { name: "Python", icon: <SiPython className="w-5 h-5" /> },
        { name: "SQL" },
      ],
    },
    {
      title: "State Management & Data",
      skills: [
        { name: "React Query" },
        { name: "Zustand" },
        { name: "Redux" },
      ],
    },
    {
      title: "UI & Styling",
      skills: [
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-5 h-5" /> },
        { name: "SASS" },
        { name: "Radix UI" },
        { name: "Styled Components" },
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "Vitest" },
        { name: "Jest", icon: <SiJest className="w-5 h-5" /> },
        { name: "Cypress", icon: <SiCypress className="w-5 h-5" /> },
        { name: "Testing Library" },
      ],
    },
    {
      title: "Build Tools & DevOps",
      skills: [
        { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
        { name: "Webpack" },
        { name: "Docker", icon: <SiDocker className="w-5 h-5" /> },
        { name: "Git", icon: <SiGit className="w-5 h-5" /> },
        { name: "GitHub Actions", icon: <SiGithub className="w-5 h-5" /> },
        { name: "Storybook" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="w-5 h-5" /> },
        { name: "RESTful APIs" },
        { name: "OpenAPI" },
        { name: "Orval" },
      ],
    },
    {
      title: "Authentication & Security",
      skills: [
        { name: "Keycloak" },
        { name: "OAuth 2.0" },
        { name: "JWT" },
        { name: "PKCE" },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Linux", icon: <SiLinux className="w-5 h-5" /> },
        { name: "Arduino" },
        { name: "Raspberry Pi" },
        { name: "Cordova" },
        { name: "React Hook Form" },
        { name: "Zod" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-24 md:py-32 bg-[var(--surface-alt)]"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
              Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              Skills & Technologies
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={categoryIndex}
              delay={categoryIndex * 80}
              direction="up"
            >
              <div className="card-hover bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 h-full">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all duration-200 cursor-default"
                    >
                      {skill.icon && (
                        <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
