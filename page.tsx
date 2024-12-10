import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
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
      <section className="container py-32 sm:py-48">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Will Makarainen
              <span className="text-orange-600">.</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Innovative footwear design showcasing the intersection of style, comfort, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="container py-12 md:py-24">
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

