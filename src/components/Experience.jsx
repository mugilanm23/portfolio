"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      company: "Acutix Soft LLP",
      role: "Full Stack Developer Intern",
      duration: "May 2025 - June 2025",
      location: "Remote",
      type: "Internship",
      description:
        "Worked on full-stack web development projects using modern technologies. Developed responsive web applications and collaborated with the team on various client projects.",
      skills: ["React", "Node.js", "Express", "Canva", "GitHub", "Vercel", "Render"],
      achievements: [
        "Built and deployed 3+ client websites",
        "Improved application performance by 40%",
        "Collaborated with design team on UI/UX improvements",
      ],
      color: "from-blue-400 to-cyan-400",
      website: "https://acutixsoft.com",
    },
    {
      id: 2,
      company: "Rizzspace",
      role: "Frontend Developer Intern",
      duration: "Nov 2024 - Dec 2024",
      location: "Remote",
      type: "Internship",
      description:
        "Focused on frontend development and UI/UX design. Created responsive web interfaces and worked with design tools to implement pixel-perfect designs.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
      achievements: [
        "Designed and developed 5+ responsive web pages",
        "Reduced page load time by 30%",
        "Created reusable component library",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      company: "CodeSoft",
      role: "Python Developer Intern",
      duration: "May 2024 - June 2024",
      location: "Remote",
      type: "Online Internship",
      description:
        "Developed Python applications and worked on data analysis projects. Gained experience in backend development and automation scripts.",
      skills: ["Python", "Data Analysis"],
      achievements: [
        "Completed 10+ Python projects",
        "Automated repetitive tasks saving 20+ hours/week",
        "Built data visualization dashboards",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      company: "Google",
      role: "Generative AI Virtual Intern",
      duration: "Dec 2023 - Jan 2024",
      location: "Virtual",
      type: "Virtual Internship",
      description:
        "Explored generative AI technologies and machine learning concepts. Worked on AI-powered projects and learned about the latest developments in artificial intelligence.",
      skills: ["AI/ML", "Generative AI", "Python", "TensorFlow"],
      achievements: [
        "Completed AI/ML certification program",
        "Built 3+ AI-powered applications",
        "Presented final project to mentors",
      ],
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 5,
      company: "Cognifyz Technologies",
      role: "Web Development Intern",
      duration: "Nov 2023 - Dec 2023",
      location: "Remote",
      type: "Online Internship",
      description:
        "Comprehensive web development training covering both frontend and backend technologies. Worked on real-world projects and gained hands-on experience.",
      skills: ["HTML", "CSS", "JavaScript",],
      achievements: [
        "Completed 15+ web development tasks",
        "Built full-stack web application",
        "Received certificate of excellence",
      ],
      color: "from-indigo-400 to-purple-400",
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and internship experiences that shaped my skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-effect rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                            <Briefcase className="text-white" size={20} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <div className="flex items-center space-x-2">
                              <p
                                className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                              >
                                {exp.company}
                              </p>
                              {exp.website && (
                                <a
                                  href={exp.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-primary-400 transition-colors"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-300 flex items-start space-x-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-2/12 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 shadow-lg`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} opacity-30`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
{/*         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Experience", value: "2+ Years", color: "text-blue-400" },
            { label: "Companies", value: "5+", color: "text-green-400" },
            { label: "Projects Completed", value: "25+", color: "text-purple-400" },
            { label: "Technologies", value: "15+", color: "text-orange-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center glass-effect rounded-lg p-4"
            >
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default Experience
