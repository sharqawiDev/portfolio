"use client";

import Image from "next/image";

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
}: AchievementProps) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Large Image Area */}
      <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {date && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-3">
            {date}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const achievements: AchievementProps[] = [
    {
      title: "Full Stack Developer Bootcamp",
      description:
        "Mentored aspiring developers through an intensive, hands-on program covering modern web technologies, best practices, and practical project experience. Guided participants in building robust full stack applications and supported their personal and professional growth throughout the bootcamp.",
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
        "Udacity Nanodegree program covering React, Redux, and React Native. Focused on developing modern, interactive web and mobile applications using the latest React ecosystem tools and best practices.",
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
    <section
      id="achievements"
      className="min-h-screen px-4 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A showcase of milestones, awards, and recognitions throughout my
          professional journey.
        </p>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Indicator - Left */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scroll Indicator - Right */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 px-4">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6">
          Scroll horizontally to view all achievements
        </p>
      </div>
    </section>
  );
}
