"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Download, ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Link } from "react-scroll"
import image from "../assets/mugilan.jpg"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 mt-7">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">

          {/* Profile Image with Pulse Dot */}
          <motion.div variants={itemVariants} className="relative mx-auto w-48 h-48 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full p-1"
            />

            <div className="absolute inset-0 p-2 bg-gray-900 rounded-full z-10">
              <img
                src={image}
                alt="Mugilan M"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Typewriter Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Mugilan M</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-4 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Passionate Student",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text font-semibold"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Currently pursuing my third year in Computer Science and Engineering at Chennai Institute of Technology with a CGPA of 9.12. <br />
            I’m driven by a strong interest in building meaningful software solutions and transforming ideas into working products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Projects</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/mugilanm23", target: "_blank", color: "hover:text-black" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mugilan-mugi-2a3323369/", target: "_blank", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:mugilanm23112005@gmail.com", target: "_self", color: "hover:text-red-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.target}
                rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Modern Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16 flex justify-center"
          >
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="cursor-pointer text-gray-400 hover:text-white"
              >
                <ChevronDown size={32} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
