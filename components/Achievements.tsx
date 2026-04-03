"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface AchievementProps {
  title: string;
  description: string;
  date?: string;
  image: string;
}

function AchievementCard({
  title,
  description,
  date,
  image,
  index,
}: AchievementProps & { index: number }) {
  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div className="group flex-shrink-0 w-full sm:w-auto bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden card-hover">
        {/* Image */}
        <div className="relative w-full h-52 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          {date && (
            <span className="inline-block text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-2">
              {date}
            </span>
          )}
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Achievements() {
  const achievements: AchievementProps[] = [
    {
      title: "Full Stack Developer Bootcamp",
      description:
        "Mentored aspiring developers through an intensive, hands-on program covering modern web technologies, best practices, and practical project experience.",
      date: "2024",
      image: "/assets/bootcamp.jpeg",
    },
    {
      title: "Full Stack Nanodegree",
      description:
        "Udacity Nanodegree program teaching full-stack web development skills through project-based learning and real-world applications.",
      date: "2018",
      image: "/assets/full-stack.jpg",
    },
    {
      title: "React Nanodegree",
      description:
        "Udacity Nanodegree program covering React, Redux, and React Native. Focused on developing modern, interactive web and mobile applications.",
      date: "2020",
      image: "/assets/React.jpg",
    },
    {
      title: "Introduction to Fintech",
      description:
        "HKUx HKU Certificate in Fintech, covering foundational concepts and applications in financial technology, blockchain, and digital currency.",
      date: "2021",
      image: "/assets/HKUx HKU_08x Certificate _ edX.jpg",
    },
    {
      title: "Automate the Boring Stuff with Python",
      description:
        "Udemy course covering basic Python programming concepts and automation techniques using Python libraries.",
      date: "2018",
      image: "/assets/automate boring stuff with python.jpg",
    },
  ];

  return (
    <section id="achievements" className="px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              Achievements
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
              Certifications, awards, and milestones from my professional
              journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid layout (switch to scroll container when more items are added) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </div>

        {/* Horizontal Scroll Container — hidden for now, enable when more achievements are added */}
        {false && (
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

            <div className="overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">
              <div className="flex gap-5">
                {achievements.map((achievement, index) => (
                  <AchievementCard key={index} index={index} {...achievement} />
                ))}
              </div>
            </div>

            <p className="text-center text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-8 tracking-wide">
              Drag to explore
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
