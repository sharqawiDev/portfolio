"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
}

function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  images,
  index,
}: ProjectProps & { index: number }) {
  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div className="group card-hover bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col h-full">
        {/* Project Image */}
        <div className="relative w-full h-52 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
          {images.length > 0 ? (
            images.length === 1 ? (
              <div className="relative w-full h-full">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            ) : (
              <div className="flex gap-2 h-full items-center justify-center p-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative h-full flex-1">
                    <Image
                      src={img}
                      alt={`${title} ${idx + 1}`}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
              <span className="text-3xl font-bold text-emerald-500/30">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-zinc-900/60 dark:bg-zinc-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="View source code"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
                aria-label="View live demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          {/* Project Title */}
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="flex-grow" />

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 rounded"
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

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Focal",
      description:
        "FOCAL by Mozn is a suite of products that leverage powerful AI and machine learning technology to answer the challenges of AML compliance and Fraud Prevention in Emerging Markets.",
      tags: ["React", "TypeScript", "AI/ML", "FinTech", "Compliance"],
      images: ["/assets/focal.webp"],
    },
    {
      title: "AlinmaPay",
      description:
        "AlinmaPay is an e-wallet application that allows users to pay for their purchases using their mobile phones. It also allows users to transfer money to other users and pay their bills.",
      tags: ["Angular", "Cordova", "Mobile", "FinTech"],
      images: ["/assets/alinmapay.png"],
    },
    {
      title: "Nana Baqala Helper",
      description:
        "Nana Baqala Helper is an IoT solution that aims to increase the availability of items in the store. It is cheap, compact, and easy to deliver.",
      tags: ["IoT", "Arduino", "React Native", "Hardware"],
      images: ["/assets/baqala helper.png"],
    },
    {
      title: "Nana Baqala Helper App",
      description:
        "Baqala Helper Mobile App - React Native application that uses hardware-serial protocol to connect to and control baqala helper devices.",
      tags: ["React Native", "Serial Protocol", "IoT", "Mobile"],
      githubUrl: "https://github.com/sharqawiDev/rn_serial",
      images: ["/assets/baqala_app_2.jpg"],
    },
    {
      title: "AZM",
      description:
        "AZM is a real-time system that helps farmers monitor biometrics for their agriculture products. It can also detect future diseases and soil fertility levels. Won third place in Al-Qasim Hackathon.",
      tags: ["IoT", "Real-time", "Agriculture", "Award Winner"],
      images: ["/assets/azm_hackathon.jpeg"],
    },
    {
      title: "Clima — iOS Weather App",
      description:
        "Clima is a weather app written in Swift that uses OpenWeather API to fetch and view weather data for the user.",
      tags: ["Swift", "iOS", "Weather API"],
      githubUrl: "https://github.com/sharqawiDev/clima",
      images: ["/assets/cilma.png"],
    },
    {
      title: "Nana BLE Scanner",
      description:
        "React Native mobile application that uses Bluetooth Low-Energy protocol to connect to Baqala Helper devices and configure them and read their data.",
      tags: ["React Native", "BLE", "Bluetooth", "IoT"],
      githubUrl: "https://github.com/sharqawiDev/BLE",
      images: ["/assets/ble_scanner.jpg"],
    },
    {
      title: "Item Catalog",
      description:
        "A blog-like website where users can add, modify, and delete items. Applied Full-Stack Nanodegree principles including user auth, email verification, and third-party login.",
      tags: ["Python", "Flask", "PostgreSQL", "OAuth", "GCP"],
      githubUrl: "https://github.com/sharqawiDev/Project4-FSND",
      images: ["/assets/item catalog.png"],
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24 md:py-32 bg-[var(--surface-alt)]"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              Projects
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
              Professional and personal projects spanning web development, mobile
              apps, and IoT solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
