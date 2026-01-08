"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

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
}: ProjectProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Project Images */}
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center gap-2 p-4 flex-shrink-0">
        {images.length > 0 ? (
          images.length === 1 ? (
            <div className="relative w-full h-full">
              <Image
                src={images[0]}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex gap-2 h-full items-center justify-center">
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
          <span className="text-white text-4xl font-bold">
            {title.charAt(0)}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Project Title */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <div className="flex gap-3 flex-shrink-0">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Spacer to push tags to bottom */}
        <div className="flex-grow"></div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
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
        "AZM is a real-time system that helps farmers monitor biometrics for their agriculture products. It can also detect future diseases and soil fertility levels. Proudly, it won the third place in Al-Qasim Hackathon for agricultural technologies.",
      tags: ["IoT", "Real-time", "Agriculture", "Award Winner"],
      images: ["/assets/azm_hackathon.jpeg"],
    },
    {
      title: "Clima - iOS Weather App",
      description:
        "Clima is a weather app written in Swift that uses OpenWeather API to fetch and view weather data for the user.",
      tags: ["Swift", "iOS", "Weather API"],
      githubUrl: "https://github.com/sharqawiDev/clima",
      images: ["/assets/cilma.png"],
    },
    {
      title: "Nana BLE Scanner",
      description:
        "Nana BLE Scanner is a React Native mobile application that uses Bluetooth Low-Energy protocol to connect to Baqala Helper devices and configure them and read their data.",
      tags: ["React Native", "BLE", "Bluetooth", "IoT"],
      githubUrl: "https://github.com/sharqawiDev/BLE",
      images: ["/assets/ble_scanner.jpg"],
    },
    {
      title: "Item Catalog",
      description:
        "Item Catalog is a blog-like website where users can add items, modify them, and delete them (All CRUD operations). Applied all principles from the Full-Stack Nanodegree including user authentication, email verification, third-party login, JSON endpoints, and deployed on Apache/GCP.",
      tags: ["Python", "Flask", "PostgreSQL", "OAuth", "Apache", "GCP"],
      githubUrl: "https://github.com/sharqawiDev/Project4-FSND",
      images: ["/assets/item catalog.png"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of professional and personal projects showcasing my work
          in web development, mobile apps, IoT solutions, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
