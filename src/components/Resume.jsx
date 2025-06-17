"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, Eye, FileText, X, ExternalLink } from "lucide-react"

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showPreview, setShowPreview] = useState(false)

  const resumeData = {
    lastUpdated: "December 2024",
    fileSize: "2.3 MB",
    pages: 2,
    format: "PDF",
  }

  const sections = [
    {
      title: "Personal Information",
      items: ["Contact Details", "Professional Summary", "Career Objective"],
    },
    {
      title: "Education",
      items: ["B.E Computer Science Engineering", "CGPA: 9.12/10", "Chennai Institute of Technology"],
    },
    {
      title: "Technical Skills",
      items: ["Frontend & Backend Development", "Database Management", "Design Tools & Frameworks"],
    },
    {
      title: "Experience",
      items: ["5+ Internship Experiences", "Full Stack Development", "UI/UX Design Projects"],
    },
    {
      title: "Projects",
      items: ["15+ Technical Projects", "Full Stack Applications", "AI/ML Implementations"],
    },
    {
      title: "Achievements",
      items: ["Hackathon Awards", "Technical Certifications", "Academic Excellence"],
    },
  ]

  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Mugilan_M_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="section-padding bg-black/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Resume</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download my complete resume or preview it online to learn more about my background
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-xl p-8 card-hover"
          >
            <div className="text-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="inline-flex p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-6"
              >
                <FileText className="text-white" size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">My Resume</h3>
              <p className="text-gray-300">Complete professional profile and experience</p>
            </div>

            {/* Resume Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-primary-400 font-bold text-lg">{resumeData.pages}</div>
                <div className="text-gray-400 text-sm">Pages</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-secondary-400 font-bold text-lg">{resumeData.format}</div>
                <div className="text-gray-400 text-sm">Format</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-accent-400 font-bold text-lg">{resumeData.fileSize}</div>
                <div className="text-gray-400 text-sm">File Size</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-green-400 font-bold text-sm">{resumeData.lastUpdated}</div>
                <div className="text-gray-400 text-sm">Updated</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreview(true)}
                className="w-full border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Eye size={20} />
                <span>Preview Online</span>
              </motion.button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">Last updated: {resumeData.lastUpdated}</p>
            </div>
          </motion.div>

          {/* Resume Sections */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">What's Inside</h3>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-lg p-6 card-hover"
              >
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mr-3" />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years of Experience", value: "2+", color: "text-blue-400" },
            { label: "Projects Completed", value: "15+", color: "text-green-400" },
            { label: "Technologies", value: "20+", color: "text-purple-400" },
            { label: "Certifications", value: "8+", color: "text-orange-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center glass-effect rounded-lg p-6"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <FileText className="text-primary-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Resume Preview</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-white transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setShowPreview(false)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
                    >
                      <X size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 h-[70vh] overflow-y-auto">
                  <div className="bg-white rounded-lg p-8 text-gray-900">
                    {/* This would typically be an embedded PDF viewer or iframe */}
                    <div className="text-center py-20">
                      <FileText className="mx-auto mb-4 text-gray-400" size={64} />
                      <h4 className="text-2xl font-bold mb-2">Resume Preview</h4>
                      <p className="text-gray-600 mb-6">PDF preview would be displayed here in a real application</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={handleDownload}
                        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        Download Full Resume
                      </motion.button>
                    </div>
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

export default Resume
