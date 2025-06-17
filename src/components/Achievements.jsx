"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Trophy, Medal, Award, Star, ExternalLink, Calendar, Users } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("achievements")

  const achievements = [
    {
      id: 1,
      title: "Runner-up - Electrothon",
      description: "Secured 2nd place in the prestigious Electrothon hackathon with an innovative IoT solution",
      icon: Medal,
      color: "from-gray-400 to-gray-600",
      date: "2024",
      category: "Hackathon",
      details:
        "Developed an IoT-based smart home automation system that impressed judges with its innovative approach and technical implementation.",
      participants: "500+",
      prize: "₹50,000",
    },
    {
      id: 2,
      title: "Finalist - Hackfusion",
      description: "Reached finals in the competitive Hackfusion event among 1000+ participants",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400",
      date: "2024",
      category: "Hackathon",
      details: "Built a machine learning-powered healthcare application that made it to the top 10 finalists.",
      participants: "1000+",
      prize: "Top 10",
    },
    {
      id: 3,
      title: "SAP Hackfest Participant",
      description: "Participated in SAP's enterprise-level hackathon focusing on business solutions",
      icon: Award,
      color: "from-blue-400 to-cyan-400",
      date: "2024",
      category: "Corporate Hackathon",
      details: "Developed an enterprise resource planning solution using SAP technologies and modern web frameworks.",
      participants: "300+",
      prize: "Certificate",
    },
    {
      id: 4,
      title: "Best Project Award - College",
      description: "Won best project award for innovative web application in college tech fest",
      icon: Star,
      color: "from-purple-400 to-pink-400",
      date: "2023",
      category: "Academic",
      details: "Created a comprehensive student management system that streamlined academic processes.",
      participants: "100+",
      prize: "₹10,000",
    },
  ]

  const certifications = [
    {
      id: 1,
      title: "Cisco: Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2024",
      credentialId: "CYB-2024-001",
      skills: ["Cybersecurity", "Network Security", "Risk Management"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 2,
      title: "Cloud Computing (Elite + Silver)",
      issuer: "NPTEL",
      date: "2024",
      credentialId: "NPTEL24CS01",
      skills: ["AWS", "Cloud Architecture", "DevOps"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 3,
      title: "Database Management Systems",
      issuer: "NPTEL",
      date: "2023",
      credentialId: "NPTEL23CS02",
      skills: ["SQL", "Database Design", "Data Modeling"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 4,
      title: "Design Thinking for Innovation",
      issuer: "Coursera",
      date: "2023",
      credentialId: "COURSERA-DT-2023",
      skills: ["Design Thinking", "Innovation", "Problem Solving"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-FSWD-2023",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 6,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      credentialId: "IBM-PDS-2023",
      skills: ["Python", "Data Analysis", "Machine Learning"],
      image: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
  ]

  return (
    <section id="achievements" className="section-padding bg-black/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Achievements & Certifications</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications that validate my skills and dedication
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-1">
            <div className="flex space-x-1">
              {[
                { id: "achievements", label: "Achievements", icon: Trophy },
                { id: "certifications", label: "Certifications", icon: Award },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Achievements Carousel */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="achievements-swiper mb-12"
              >
                {achievements.map((achievement) => (
                  <SwiperSlide key={achievement.id}>
                    <motion.div
                      whileHover={{ rotateY: 5, scale: 1.02 }}
                      className="glass-effect rounded-xl p-6 h-full perspective-1000"
                    >
                      <div className="text-center mb-6">
                        <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                          <achievement.icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{achievement.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users size={14} />
                            <span>{achievement.participants}</span>
                          </div>
                        </div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs bg-gradient-to-r ${achievement.color} text-white`}
                        >
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-gray-300 text-center mb-4">{achievement.description}</p>
                      <p className="text-gray-400 text-sm text-center mb-4">{achievement.details}</p>
                      <div className="text-center">
                        <span
                          className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${achievement.color} text-white font-semibold`}
                        >
                          {achievement.prize}
                        </span>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { label: "Hackathons", value: "10+", icon: Trophy, color: "text-yellow-400" },
                  { label: "Awards Won", value: "4", icon: Medal, color: "text-gray-400" },
                  { label: "Competitions", value: "15+", icon: Star, color: "text-purple-400" },
                  { label: "Recognition", value: "8+", icon: Award, color: "text-blue-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="glass-effect rounded-lg p-6 text-center card-hover"
                  >
                    <stat.icon className={`${stat.color} mx-auto mb-3`} size={32} />
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-effect rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.issuer}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-primary-400 font-medium text-sm">{cert.issuer}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar size={12} className="text-gray-400" />
                        <span className="text-gray-400 text-xs">{cert.date}</span>
                        {cert.verified && (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-green-400 text-xs">Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-2">Credential ID: {cert.credentialId}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={14} />
                    <span>View Certificate</span>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Achievements
