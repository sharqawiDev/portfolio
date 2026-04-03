"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — branding */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            AE<span className="text-emerald-500">.</span>
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-600">
            Built with Next.js & TailwindCSS
          </span>
        </div>

        {/* Right — social links */}
        <div className="flex gap-1">
          {[
            {
              href: "https://github.com/sharqawiDev",
              icon: FiGithub,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/sharqawiDev",
              icon: FiLinkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:sharqawi.dev@gmail.com",
              icon: FiMail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="p-2.5 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
