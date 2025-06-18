"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Code, Database, Trophy, Star, ExternalLink } from "lucide-react"

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const profiles = [
    {
      id: 1,
      name: "GitHub",
      username: "@mugilanm23",
      description: "Open source contributions and personal projects",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      stats: {
        repositories: "30+",
        followers: "60+",
        contributions: "600+",
      },
      link: "https://github.com/mugilanm23",
      verified: true,
    },
    {
      id: 2,
      name: "LinkedIn",
      username: "@mugilan-m",
      description: "Professional network and career updates",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      stats: {
        connections: "350+",
        posts: "60+",
        endorsements: "30+",
      },
      link: "https://www.linkedin.com/in/mugilan-mugi-2a3323369/",
      verified: true,
    },
    {
      id: 3,
      name: "LeetCode",
      username: "@mugilanm",
      description: "Algorithmic problem solving and coding practice",
      icon: Code,
      color: "from-orange-500 to-red-600",
      stats: {
        problems: "350+",
        ranking: "Top 10%",
        streak: "50 days",
      },
      link: "https://leetcode.com/u/mugilanm/",
      verified: true,
      featured: true,
    },
    {
      id: 4,
      name: "GeeksforGeeks",
      username: "@mugilanm",
      description: "Competitive programming and technical articles",
      icon: Database,
      color: "from-green-500 to-green-700",
      stats: {
        problems: "220+",
        articles: "12+",
        score: "1700+",
      },
      link: "https://www.geeksforgeeks.org/user/mugilanm2mm9s/",
      verified: true,
    },
    {
      id: 5,
      name: "CodeChef",
      username: "@mugilanm2311",
      description: "Competitive programming contests and challenges",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      stats: {
        rating: "1460+",
        contests: "25+",
        rank: "3 Star",
      },
      link: "https://www.codechef.com/users/mugilanm2311",
      verified: false,
    },
    {
      id: 6,
      name: "HackerRank",
      username: "@mugilanm23112005",
      description: "Skill assessments and coding challenges",
      icon: Star,
      color: "from-green-400 to-blue-500",
      stats: {
        badges: "18+",
        certificates: "10+",
        rank: "Gold",
      },
      link: "https://www.hackerrank.com/profile/mugilanm23112005 ",
      verified: true,
    },
  ]

  const achievements = [
    {
      title: "350+ Problems Solved",
      description: "LeetCode",
      icon: Code,
      color: "text-orange-400",
    },
    {
      title: "Top 10% Ranking",
      description: "Global LeetCode Ranking",
      icon: Trophy,
      color: "text-yellow-400",
    },
    {
      title: "600+ Contributions",
      description: "GitHub Open Source",
      icon: Github,
      color: "text-gray-400",
    },
    {
      title: "3 Star Rating",
      description: "CodeChef Competitive",
      icon: Star,
      color: "text-purple-400",
    },
  ]

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Coding Profiles</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with me across various coding platforms and see my progress
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 text-center card-hover"
            >
              <achievement.icon className={`${achievement.color} mx-auto mb-3`} size={32} />
              <h3 className={`text-lg font-bold ${achievement.color} mb-1`}>{achievement.title}</h3>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-effect rounded-xl overflow-hidden card-hover relative ${
                profile.featured ? "ring-2 ring-primary-400" : ""
              }`}
            >
              {profile.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className={`p-6 bg-gradient-to-r ${profile.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    <profile.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                    <p className="text-white/80 text-sm">{profile.username}</p>
                  </div>
                  {profile.verified && (
                    <div className="ml-auto">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">{profile.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-white">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <motion.a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${profile.color} hover:opacity-90 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group`}
                >
                  <span>Visit Profile</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Let's Connect and Code Together!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on interesting projects, participate in coding challenges, and connect
              with fellow developers. Feel free to reach out on any of these platforms!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {profiles.slice(0, 3).map((profile) => (
                <motion.a
                  key={profile.id}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-gradient-to-r ${profile.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <profile.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles
