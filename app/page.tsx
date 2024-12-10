'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Page() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <div className="size-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600" />
            <span className="text-xl font-bold">Portfolio</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-orange-600" href="#work">
              Work
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-orange-600" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Footwear Design
                <span className="text-orange-600">.</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 text-lg md:text-xl lg:text-2xl">
                Innovative footwear design portfolio showcasing the intersection of style, comfort, and technology.
              </p>
              <div className="pt-8">
                {isClient && (
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    size="lg"
                    onClick={() => {
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore Projects
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="container py-12 md:py-24">
        <h2 className="mb-12 text-2xl font-bold tracking-tighter sm:text-3xl">
          Featured Projects
          <span className="text-orange-600">.</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link href={`/${project.slug}`} key={index} className="block">
              <div
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3D Concepting */}
      <section className="bg-gray-100 py-24">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            3D Concepting
            <span className="text-orange-600">.</span>
          </h2>
          <p className="mb-12 text-xl text-gray-600">Bringing ideas to life through digital innovation</p>
          <ExpandableImageSection
            imageSrc="/placeholder.svg?height=400&width=600&text=3D+Concepting"
            imageAlt="3D Concepting Process"
            title="From Sketch to Screen"
            description="Our 3D concepting process allows us to rapidly prototype and visualize new footwear designs. Using cutting-edge 3D modeling software, we explore various shapes, materials, and color combinations before moving to physical prototypes. This approach saves time and resources while allowing for greater creative exploration."
          />
        </div>
      </section>

      {/* Development */}
      <section className="py-24">
        <div className="container">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Development
            <span className="text-orange-600">.</span>
          </h2>
          <p className="mb-12 text-xl text-gray-600">Transforming concepts into tangible products</p>
          <ExpandableImageSection
            imageSrc="/placeholder.svg?height=400&width=600&text=Development"
            imageAlt="Footwear Development Process"
            title="Crafting Excellence"
            description="Our development process is where innovative designs become tangible products. We work closely with manufacturers to ensure that every detail of our 3D concepts is faithfully reproduced in the final product. This stage involves material selection, structural engineering, and rigorous testing to guarantee that our footwear meets the highest standards of quality and performance."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-white">
        <div className="container py-24 sm:py-32">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let's work together
              <span className="text-orange-600">.</span>
            </h2>
            <p className="max-w-[600px] text-gray-500">
              I'm always open to new projects and collaborations. Feel free to reach out and let's create something amazing.
            </p>
            <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex h-16 items-center justify-between">
          <p className="text-sm text-gray-500">© 2024. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-sm text-gray-500 hover:text-orange-600" href="#">
              Twitter
            </Link>
            <Link className="text-sm text-gray-500 hover:text-orange-600" href="#">
              Instagram
            </Link>
            <Link className="text-sm text-gray-500 hover:text-orange-600" href="#">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExpandableImageSection({ imageSrc, imageAlt, title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Urban Runner Collection",
    slug: "urban-runner-collection",
    description: "A modern take on classic running silhouettes, designed for both performance and style.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Athletic", "Innovation"]
  },
  {
    title: "Eco-Conscious Series",
    slug: "eco-conscious-series",
    description: "Sustainable footwear crafted from recycled materials without compromising on design.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Sustainable", "Lifestyle"]
  },
  {
    title: "Limited Edition Collab",
    slug: "limited-edition-collab",
    description: "Exclusive collaboration bringing together streetwear culture and premium craftsmanship.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Collaboration", "Limited"]
  },
  {
    title: "Performance Elite",
    slug: "performance-elite",
    description: "Professional-grade athletic footwear engineered for maximum performance and comfort.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Professional", "Sport"]
  },
  {
    title: "Heritage Collection",
    slug: "heritage-collection",
    description: "Reimagining classic silhouettes with contemporary materials and techniques.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Classic", "Premium"]
  },
  {
    title: "Future Tech Series",
    slug: "future-tech-series",
    description: "Experimental designs pushing the boundaries of footwear technology and style.",
    image: "/placeholder.svg?height=450&width=600",
    tags: ["Innovation", "Tech"]
  }
]

