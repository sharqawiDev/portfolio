# Abdulrahman Elsharqawi - Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- ✨ Modern and minimalist design
- 🌗 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 for optimal performance and SEO
- 🎨 Styled with TailwindCSS
- 🔒 TypeScript for type safety
- 🎭 Smooth animations and transitions
- 📄 SEO optimized with metadata

## Sections

- **Hero/About**: Introduction with name, title, and brief bio
- **Experience**: Timeline of professional work experience
- **Skills**: Comprehensive showcase of technical skills and technologies
- **Projects**: Ready-to-use section for side projects (currently hidden)
- **Footer**: Social links and copyright information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Adding Projects

To add your side projects, edit `components/Projects.tsx` and uncomment the example project structure:

```typescript
const projects: ProjectProps[] = [
  {
    title: 'Your Project Name',
    description: 'A brief description of your project',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/sharqawiDev/your-project',
    liveUrl: 'https://your-project-demo.com',
  },
  // Add more projects here
];
```

## Customization

### Updating Personal Information

Edit `components/Hero.tsx` to update:
- Name and title
- Bio/description
- Social links
- Contact email

### Modifying Experience

Edit `components/Experience.tsx` to add or update work experience entries.

### Updating Skills

Edit `components/Skills.tsx` to add or remove skills and technologies.

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme and theme.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Create a new site on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: sharqawi.dev@gmail.com
- GitHub: [@sharqawiDev](https://github.com/sharqawiDev)
- LinkedIn: [sharqawiDev](https://linkedin.com/in/sharqawiDev)
