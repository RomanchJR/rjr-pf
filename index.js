// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-50 text-gray-900 font-sans;
}

// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced product management and user authentication.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      imageUrl: '/project1.jpg',
      githubLink: '#'
    },
    {
      title: 'Machine Learning Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing machine learning model performance.',
      technologies: ['React', 'Python', 'Pandas', 'D3.js'],
      imageUrl: '/project2.jpg',
      githubLink: '#'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Romanch Jung Rayamajhi - Portfolio</title>
        <meta name="description" content="Professional portfolio of Romanch Jung Rayamajhi - Software Developer and Tech Innovator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <Image 
          src="/profile.jpg" 
          alt="Romanch Jung Rayamajhi" 
          width={200} 
          height={200} 
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Romanch Jung Rayamajhi</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Full-Stack Developer | Machine Learning Enthusiast | Tech Innovator
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/romanch-jung" className="text-gray-700 hover:text-black transition">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/romanchjung" className="text-gray-700 hover:text-black transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:romanch.jung@example.com" className="text-gray-700 hover:text-black transition">
            <FaEnvelope size={30} />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          As a passionate software developer with a keen interest in machine learning and web technologies, 
          I thrive on creating innovative solutions that bridge the gap between cutting-edge technology 
          and practical applications. My approach combines technical expertise with creative problem-solving.
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// package.json (partial - key dependencies)
{
  "dependencies": {
    "next": "^13.4.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "tailwindcss": "^3.3.3"
  },
  "devDependencies": {
    "@types/node": "^20.5.7",
    "@types/react": "^18.2.21",
    "typescript": "^5.2.2"
  }
}