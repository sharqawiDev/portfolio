'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Social Links - Centered */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/sharqawiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sharqawiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sharqawi.dev@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        {/* Built with note */}
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with Next.js, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
