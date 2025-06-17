"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Palette, Globe, Server, Smartphone } from "lucide-react"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 82 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 88 },
        { name: "Django", level: 75 },
        { name: "C++", level: 82 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 70 },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Adobe XD", level: 70 },
        { name: "UI/UX Design", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Code,
      color: "from-indigo-400 to-purple-400",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel", level: 85 },
        { name: "Render", level: 80 },
        { name: "Hostinger", level: 75 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      title: "Mobile & Others",
      icon: Smartphone,
      color: "from-teal-400 to-blue-400",
      skills: [
        { name: "React Native", level: 70 },
        { name: "Streamlit", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [-10, 10, -10] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1.5,
                          }}
                          className="absolute top-0 right-0 w-2 h-full bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript",
              "Next.js",
              "Vue.js",
              "Docker",
              "AWS",
              "Linux",
              "Nginx",
              "Redis",
              "Socket.io",
              "Jest",
              "Webpack",
              "Sass",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-gray-300 border border-gray-600 hover:border-primary-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
