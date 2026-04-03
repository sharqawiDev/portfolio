"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiArrowDown,
} from "react-icons/fi";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;
    if (!section || !blob) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden"
    >
      {/* Mouse-following gradient blob */}
      <div
        ref={blobRef}
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px] transition-transform duration-[1500ms] ease-out"
        style={{ top: "50%", left: "50%" }}
      />

      {/* Background mesh */}
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content — takes up more space */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Label */}
            {/* Name */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Abdulrahman
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                Elsharqawi
              </span>
            </h1>

            {/* Title */}
            <h2
              className={`text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mb-4 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Senior Software Engineer
            </h2>

            {/* Location */}
            <div
              className={`flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 font-mono mb-8 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <FiMapPin className="w-3.5 h-3.5" />
              <span>Riyadh, Saudi Arabia</span>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-[250ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Building user-centric interfaces with{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                React, React Native & TypeScript
              </span>{" "}
              for 6+ years. Specialized in fintech and AI/compliance platforms
              with a focus on testing, code quality, and performance.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <a
                href="#experience"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-colors duration-200"
              >
                View My Work
                <FiArrowDown className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1vyd08AzLKZkMhKzdxq2DYnla-gMpmFuK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg font-medium text-sm transition-all duration-200"
              >
                Resume
              </a>
              <a
                href="mailto:sharqawi.dev@gmail.com"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg font-medium text-sm transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-1 transition-all duration-700 delay-[350ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
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
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-3 rounded-lg text-zinc-500 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 delay-200 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-emerald-500/20 dark:border-emerald-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-6 rounded-full border border-dashed border-zinc-200 dark:border-zinc-800 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/25 rounded-full blur-3xl scale-110" />

              <Image
                src="/assets/personal.jpeg"
                alt="Abdulrahman Elsharqawi"
                width={320}
                height={320}
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top border-2 border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl"
                priority
              />

              {/* Status dot */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[var(--background)] shadow-lg">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[800ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
