import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Abdulrahman Elsharqawi | Software Engineer III",
  description: "Software Engineer III with 6+ years of experience specializing in React, TypeScript, and modern frontend development. Expert in fintech and AI/compliance platforms.",
  keywords: ["Software Engineer", "React", "TypeScript", "Frontend Developer", "Full Stack", "Next.js", "Abdulrahman Elsharqawi"],
  authors: [{ name: "Abdulrahman Elsharqawi" }],
  openGraph: {
    title: "Abdulrahman Elsharqawi | Software Engineer III",
    description: "Software Engineer III specializing in React, TypeScript, and modern frontend development",
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
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
