"use client"

import React from "react"
import { motion } from "framer-motion"
import { Heart, ArrowUp, Github, Linkedin, Mail, Code } from "lucide-react"
import { Link } from "react-scroll"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mugilanm",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mugilan-m",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:mugilanm23112005@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: Code,
      href: "https://leetcode.com/mugilanm23",
      label: "LeetCode",
      color: "hover:text-orange-400",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black/40 border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div> */}
      </div>

      <div className="container-custom relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Mugilan M
                </h3>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  Full Stack Developer passionate about creating innovative solutions 
                  and bringing ideas to life through code. Currently pursuing CSE at 
                  Chennai Institute of Technology.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                <div className="space-y-3 text-sm">
                  <div className="text-gray-400">
                    <span className="text-gray-300">Email:</span><br />
                    <a 
                      href="mailto:mugilanm23112005@gmail.com"
                      className="hover:text-primary-400 transition-colors"
                    >
                      mugilanm23112005@gmail.com
                    </a>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-300">Phone:</span><br />
                    <a 
                      href="tel:+918838065750"
                      className="hover:text-primary-400 transition-colors"
                    >
                      +91 8838065750
                    </a>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-gray-300">Location:</span><br />
                    Chennai, Tamil Nadu
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 py-8 border-t border-gray-800 mt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 glass-effect rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                title={social.label}
              >
                {React.createElement(social.icon, { size: 20 })}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Mugilan M. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="text-red-400 fill-current" size={16} />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 text-sm">
                Last updated: December 2024
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 glass-effect rounded-full text-gray-400 hover:text-primary-400 transition-all duration-300 hover:shadow-lg"
                title="Back to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
