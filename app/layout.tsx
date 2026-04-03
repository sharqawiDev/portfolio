import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulrahman Elsharqawi | Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience specializing in React, TypeScript, and modern frontend development. Expert in fintech and AI/compliance platforms.",
  keywords: [
    "Software Engineer",
    "React",
    "TypeScript",
    "Frontend Developer",
    "Full Stack",
    "Next.js",
    "Abdulrahman Elsharqawi",
  ],
  authors: [{ name: "Abdulrahman Elsharqawi" }],
  openGraph: {
    title: "Abdulrahman Elsharqawi | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, TypeScript, and modern frontend development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
