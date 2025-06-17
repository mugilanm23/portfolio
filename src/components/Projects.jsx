"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import { Github, ExternalLink, Play, Star } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Chatting App",
      description:
        "Real-time messaging application with modern UI and seamless user experience. Features include group chats, file sharing, and emoji reactions.",
      longDescription:
        "A comprehensive real-time messaging platform built with React and Socket.io. Features include real-time messaging, group chats, file sharing, emoji reactions, user authentication, and responsive design. The app supports multiple chat rooms and provides a smooth user experience across all devices.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "RAG AI Model",
      description:
        "Retrieval-Augmented Generation AI model for intelligent document processing and question answering.",
      longDescription:
        "An advanced AI system that combines retrieval and generation capabilities for intelligent document processing. Built using Python, LangChain, and OpenAI APIs, this system can understand context, retrieve relevant information, and generate accurate responses.",
      tech: ["Python", "LangChain", "OpenAI", "Streamlit", "Vector DB"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      featured: true,
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Real Estate App",
      description:
        "Comprehensive real estate platform with property listings, search filters, and management dashboard.",
      longDescription:
        "A full-featured real estate platform that allows users to browse properties, apply filters, save favorites, and contact agents. Includes an admin dashboard for property management and analytics.",
      tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Acutix Website",
      description: "Professional business website with modern design and functionality for Acutix Soft LLP.",
      longDescription:
        "A modern, responsive business website built for Acutix Soft LLP. Features include service showcases, team profiles, contact forms, and a content management system.",
      tech: ["React", "Tailwind", "Node.js", "Vercel"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "https://acutixsoft.com",
      featured: false,
      category: "Frontend",
    },
    {
      id: 5,
      title: "Annual Report Card Portal",
      description: "Student management system for academic performance tracking and report generation.",
      longDescription:
        "A comprehensive student management system that tracks academic performance, generates report cards, and provides analytics for teachers and administrators.",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      featured: false,
      category: "Full Stack",
    },
    {
      id: 6,
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for e-commerce management with analytics and inventory tracking.",
      longDescription:
        "A powerful admin dashboard for e-commerce platforms featuring sales analytics, inventory management, order tracking, and customer management tools.",
      tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      featured: false,
      category: "Full Stack",
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "AI/ML"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="section-padding bg-black/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="featured-projects-swiper"
          >
            {featuredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-effect rounded-xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs rounded-full">Featured</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600 text-gray-400 text-xs rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-2 px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="text-yellow-400 fill-current" size={20} />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <span className="text-xs text-primary-400 font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded text-center transition-colors duration-300 flex items-center justify-center space-x-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                      <span className="text-xs">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-3 rounded text-center transition-all duration-300 flex items-center justify-center space-x-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Play size={14} />
                      <span className="text-xs">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.github}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.demo}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
