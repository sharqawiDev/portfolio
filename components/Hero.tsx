"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="animate-fadeInUp flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="relative w-48 h-48 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="/assets/personal.jpeg"
                alt="Abdulrahman Elsharqawi"
                width={320}
                height={320}
                className="relative rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fadeInUp delay-100 flex-1 w-full text-center md:text-left mt-20">
            {/* Greeting */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
              Hi, my name is
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abdulrahman Elsharqawi
            </h1>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Senior Software Engineer
            </h2>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-8 justify-center md:justify-start">
              <FiMapPin className="w-5 h-5" />
              <span>Riyadh, Saudi Arabia</span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">
              Software Engineer with{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                6+ years of experience
              </span>{" "}
              building user-centric interfaces with{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                React, React Native, and TypeScript
              </span>
              . Proven expertise in fintech and AI/compliance platforms, with a
              strong focus on testing, code quality, and performance
              optimization. Experienced in collaborative startup environments,
              delivering scalable solutions while staying current with emerging
              technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
              <a
                href="#experience"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <FiBriefcase className="w-5 h-5" />
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1vyd08AzLKZkMhKzdxq2DYnla-gMpmFuK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <FiFileText className="w-5 h-5" />
                View Resume
              </a>
              <a
                href="mailto:sharqawi.dev@gmail.com"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <FiMail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/sharqawiDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sharqawiDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sharqawi.dev@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
