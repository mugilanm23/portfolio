"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Palette,
  Award,
  Trophy,
  Medal,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />\
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Mugilan M
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 py-2 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative mx-auto w-48 h-48 mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
              <img
                src="/placeholder.svg?height=192&width=192"
                alt="Mugilan M"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mugilan M
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              3rd Year CSE Student at Chennai Institute of Technology with CGPA 9.12
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer from Chennai Institute of Technology, 
                currently in 3rd Year CSE with a CGPA of 9.12. I love creating innovative 
                solutions and bringing ideas to life through code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My interests span across UI/UX design, Web Development, and Backend Systems. 
                I enjoy working on challenging projects that push the boundaries of what's possible 
                with modern web technologies.
              </p>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'MongoDB', 'Python', 'MySQL', 'Figma', 'Canva', 'GitHub'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-purple-900/50 text-purple-200 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-gray-300">Available for opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-cyan-400" />
                    <span className="text-gray-300">Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award size={16} className="text-purple-400" />
                    <span className="text-gray-300">CGPA: 9.12/10</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code size={16} className="text-pink-400" />
                    <span className="text-gray-300">340+ LeetCode Problems Solved</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-cyan-400">Frontend</h3>
                  </div>
                  <div className="space-y-3">
                    {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Figma', 'Canva'].map((skill) => (
                      <div key={skill} className="flex justify-between items-center">
                        <span className="text-gray-300">{skill}</span>
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '90%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="text-purple-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-purple-400">Backend</h3>
                  </div>
                  <div className="space-y-3">
                    {['Node.js', 'Express.js', 'Django', 'Python', 'C++', 'MySQL', 'MongoDB'].map((skill) => (
                      <div key={skill} className="flex justify-between items-center">
                        <span className="text-gray-300">{skill}</span>
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '85%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tools & Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Palette className="text-green-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-green-400">Tools & Platforms</h3>
                  </div>
                  <div className="space-y-3">
                    {['GitHub', 'Vercel', 'Render', 'Hostinger', 'Squarespace', 'Streamlit'].map((skill) => (
                      <div key={skill} className="flex justify-between items-center">
                        <span className="text-gray-300">{skill}</span>
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-green-400 to-teal-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's collaborate on something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">mugilanm23112005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+91 8838065750</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Code size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-400/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Mugilan M. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Projects Section Component
function ProjectsSection() {\
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {\
      title: "Chatting App",
      description: "Real-time messaging application with modern UI and seamless user experience",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {\
      title: "RAG AI Model",
      description: "Retrieval-Augmented Generation AI model for intelligent document processing",
      tech: ["Python", "LangChain", "OpenAI", "Streamlit"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {\
      title: "Real Estate App",
      description: "Comprehensive real estate platform with property listings and management",
      tech: ["React", "Node.js", "Express", "MySQL"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    },
    {\
      title: "Acutix Website",
      description: "Professional business website with modern design and functionality",
      tech: ["React", "Tailwind", "Node.js", "Vercel"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "https://acutixsoft.com"
    },
    {\
      title: "Annual Report Card Portal",
      description: "Student management system for academic performance tracking",
      tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#"
    }
  ]

  useEffect(() => {\
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [projects.length])

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Project Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-900/50 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-purple-900/30 text-purple-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500">
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section Component
function ExperienceSection() {\
  const experiences = [
    {\
      company: "Rizzspace",
      role: "Intern",
      duration: "2024",
      skills: ["Figma", "HTML", "Bootstrap", "CSS", "JavaScript"],
      description: "Worked on UI/UX design and frontend development projects",
      icon: <Palette className="text-cyan-400" size={24} />
    },
    {\
      company: "Acutix Soft LLP",
      role: "Intern",
      duration: "2024",
      skills: ["Canva", "React", "Node.js", "Express", "GitHub", "Vercel", "Render"],
      description: "Full-stack development and deployment of web applications",
      icon: <Code className="text-purple-400" size={24} />
    },
    {\
      company: "CodeSoft",
      role: "Online Intern",
      duration: "2024",
      skills: ["Python"],
      description: "Python development and programming fundamentals",
      icon: <Database className="text-green-400" size={24} />
    },
    {\
      company: "Google Virtual",
      role: "Generative AI Intern",
      duration: "2024",
      skills: ["AI/ML", "Generative AI"],
      description: "Explored generative AI technologies and applications",
      icon: <Star className="text-yellow-400" size={24} />
    },
    {\
      company: "Cognifyz",
      role: "Web Development Intern",
      duration: "2024",
      skills: ["Web Development", "Frontend", "Backend"],
      description: "Comprehensive web development training and projects",
      icon: <Globe className="text-blue-400" size={24} />
    }
  ]

  return (
    <section id="experience" className="relative py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.icon}
                        <div className={`${index % 2 === 0 ? 'mr-3' : 'ml-3'}`}>
                          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                          <p className="text-gray-400 text-sm">{exp.duration}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-purple-900/50 text-purple-200 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900" />

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Achievements Section Component
function AchievementsSection() {\
  const achievements = [
    {\
      title: "Runner-up - Electrothon",
      description: "Secured 2nd place in the prestigious Electrothon hackathon",
      icon: <Medal className="text-silver-400" size={32} />,
      color: "from-gray-400 to-gray-600"
    },
    {\
      title: "Finalist - Hackfusion",
      description: "Reached finals in the competitive Hackfusion event",
      icon: <Trophy className="text-yellow-400" size={32} />,
      color: "from-yellow-400 to-orange-400"
    },
    {\
      title: "SAP Hackfest Participant",
      description: "Participated in SAP's enterprise-level hackathon",
      icon: <Award className="text-blue-400" size={32} />,
      color: "from-blue-400 to-cyan-400"
    }
  ]

  const certifications = [
    "Cisco: Intro to Cybersecurity",
    "NPTEL: Cloud Computing (Elite + Silver)",
    "NPTEL: DBMS (Pass)",
    "Coursera: Design Thinking for Innovation"
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 10, scale: 1.05 }}
              className="group perspective-1000"
            >
              <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform-gpu">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/50 to-purple-900/50 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-black/20 rounded-lg border border-gray-700 hover:border-purple-400/50 transition-colors"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "GitHub", icon: <Github size={24} />, color: "from-gray-700 to-gray-800" },
              { name: "LinkedIn", icon: <Linkedin size={24} />, color: "from-blue-600 to-blue-700" },
              { name: "LeetCode", icon: <Code size={24} />, color: "from-orange-500 to-red-500" },
              { name: "GeeksForGeeks", icon: <Database size={24} />, color: "from-green-500 to-green-600" }
            ].map((profile, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${profile.color} rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {profile.icon}
                <span>{profile.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 mt-4">340+ LeetCode Problems Solved</p>
        </motion.div>
      </div>
    </section>
  )\
}
