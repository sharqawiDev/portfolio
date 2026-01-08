'use client';

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
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface SkillCategory {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
        { name: 'React', icon: <SiReact className="w-8 h-8" /> },
        { name: 'React Native', icon: <TbBrandReactNative className="w-8 h-8" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" /> },
        { name: 'Angular', icon: <SiAngular className="w-8 h-8" /> },
        { name: 'Python', icon: <SiPython className="w-8 h-8" /> },
        { name: 'SQL' },
      ],
    },
    {
      title: 'State Management & Data',
      skills: [
        { name: 'React Query' },
        { name: 'Zustand' },
        { name: 'Redux' },
      ],
    },
    {
      title: 'UI & Styling',
      skills: [
        { name: 'TailwindCSS', icon: <SiTailwindcss className="w-8 h-8" /> },
        { name: 'SASS' },
        { name: 'Radix UI' },
        { name: 'Styled Components' },
      ],
    },
    {
      title: 'Testing & Quality',
      skills: [
        { name: 'Vitest' },
        { name: 'Jest', icon: <SiJest className="w-8 h-8" /> },
        { name: 'Cypress', icon: <SiCypress className="w-8 h-8" /> },
        { name: 'Testing Library' },
      ],
    },
    {
      title: 'Build Tools & DevOps',
      skills: [
        { name: 'Vite', icon: <SiVite className="w-8 h-8" /> },
        { name: 'Webpack' },
        { name: 'Docker', icon: <SiDocker className="w-8 h-8" /> },
        { name: 'Git', icon: <SiGit className="w-8 h-8" /> },
        { name: 'GitHub Actions', icon: <SiGithub className="w-8 h-8" /> },
        { name: 'Storybook' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" /> },
        { name: 'RESTful APIs' },
        { name: 'OpenAPI' },
        { name: 'Orval' },
      ],
    },
    {
      title: 'Authentication & Security',
      skills: [
        { name: 'Keycloak' },
        { name: 'OAuth 2.0' },
        { name: 'JWT' },
        { name: 'PKCE' },
      ],
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Linux', icon: <SiLinux className="w-8 h-8" /> },
        { name: 'Arduino' },
        { name: 'Raspberry Pi' },
        { name: 'Cordova' },
        { name: 'React Hook Form' },
        { name: 'Zod' },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                  >
                    {skill.icon && (
                      <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {skill.icon}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
