"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Award, Code, Calendar, GraduationCap } from "lucide-react"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-400" },
    { name: "MySQL", icon: "🐬", color: "text-blue-500" },
    { name: "Figma", icon: "🎨", color: "text-purple-400" },
    { name: "Canva", icon: "🎭", color: "text-cyan-400" },
    { name: "GitHub", icon: "🐙", color: "text-gray-400" },
  ]

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "9.12/10", color: "text-green-400" },
  { icon: Code, label: "LeetCode", value: "340+", color: "text-orange-400" },
  { icon: Award, label: "Internships", value: "2 Internships", color: "text-purple-400" },
  { icon: Calendar, label: "Volunteering", value: "4+ Events", color: "text-blue-400" },
]


  return (
    <section id="about" className="section-padding bg-black/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="gradient-text font-semibold">Full Stack Developer</span> from Chennai
                Institute of Technology, currently in my 3rd year of Computer Science Engineering with a CGPA of{" "}
                <span className="text-green-400 font-semibold">9.12</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I love creating innovative solutions and bringing ideas to life through code. My interests span across{" "}
                <span className="text-primary-400">UI/UX design</span>,
                <span className="text-secondary-400"> Web Development</span>, and
                <span className="text-accent-400"> Backend Systems</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy working on challenging projects that push the boundaries of what's possible with modern web
                technologies. Always eager to learn new technologies and contribute to meaningful projects.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary-400" size={20} />
                <span className="text-gray-300">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-secondary-400" size={20} />
                <span className="text-gray-300">3rd Year CSE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-accent-400" size={20} />
                <span className="text-gray-300">CGPA: 9.12</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300">Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats and Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-xl p-6 text-center card-hover"
                >
                  <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 gradient-text text-center">Tech Stack</h3>
              <div className="grid grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="text-3xl mb-2 group-hover:animate-bounce">{tech.icon}</div>
                    <div className={`text-xs ${tech.color} font-medium`}>{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
