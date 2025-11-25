import { motion } from "framer-motion"
import { useState } from "react"
import { Camera, Cloud, Heart, Trophy, Award, Video, Brain, ExternalLink } from "lucide-react"
import './curricular.css'

const activities = [
  {
    icon: Camera,
    title: "Photography Club, SIT Pune",
    role: "President",
    period: "July 2024 – Aug 2025",
    description: "Organized various events and led workshops on advanced techniques, increasing club visibility and member engagement.",
    stats: ["Led 15+ workshops", "200+ members", "5 major events"]
  },
  {
    icon: Cloud,
    title: "AirGuruji",
    role: "Cloud Computing Content Creator Intern",
    period: "2023 – 2024",
    description: "Created educational content and visual resources on core cloud computing (AWS) concepts, simplifying complex topics for a wide audience.",
    link: "https://www.instagram.com/gurujiair/",
    linkText: "Instagram",
    stats: ["50+ posts created", "AWS focused", "10K+ reach"]
  },
  {
    icon: Heart,
    title: "Community Engagement",
    role: "Strategic Support",
    description: "Provided strategic support to non-profits (Animal Angels, Read-A-Story, Mountain Village Foundation).",
    stats: ["3 organizations", "Strategic planning", "Community impact"]
  }
]

const achievements = [
  {
    icon: Trophy,
    title: "Ms. Symbifit",
    year: "2023-2024",
    description: "Awarded the title in two consecutive years, accompanied by a 10K cash prize.",
    highlight: "2x Winner • ₹10K Prize",
  },
  {
    icon: Award,
    title: "Gold Medal in Powerlifting",
    year: "2022-2024",
    description: "Awarded at six consecutive inter-college competitions; yellow belt in Kickboxing.",
    highlight: "6x Gold Medalist",
  },
  {
    icon: Video,
    title: "Student Aspirants Video Guide",
    year: "2024",
    description: "Created a video guide outlining a roadmap for student aspirants, increasing applicant engagement.",
    link: "https://www.instagram.com/reel/DLT67itPb_d/",
    linkText: "Watch Video",
  },
  {
    icon: Brain,
    title: "Mental Health Champion",
    year: "2024",
    description: "Completed the Mental Health Champion Programme by SCEW.",
    link: "https://drive.google.com/file/d/1eSrwzkck4Q__OigCmbfOjGXFdESZtGza/view?usp=sharing",
    linkText: "View Certificate",
  }
]

export default function Curricular() {
  const [hoveredAchievement, setHoveredAchievement] = useState(null)

  return (
    <section id="curricular" className="curricular-section">
      <div className="curricular-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="curricular-header"
        >
          <h2 className="curricular-title">Leadership & Activities</h2>
          <p className="curricular-subtitle">Beyond the classroom</p>
        </motion.div>

        {/* Activities Section - Simple Grid */}
        <div className="curricular-subsection">
          <h3 className="subsection-title leadership-title">Leadership & Contributions</h3>
          
          <div className="activities-simple-grid">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="simple-activity-card"
                >
                  <div className="simple-icon">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  
                  <h4 className="simple-title">{activity.title}</h4>
                  <div className="simple-role">{activity.role}</div>
                  <span className="simple-period">{activity.period}</span>
                  
                  <p className="simple-description">{activity.description}</p>
                  
                  {activity.link && (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="simple-link"
                    >
                      {activity.linkText} →
                    </a>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Achievements Section - Staggered List */}
        <div className="curricular-subsection">
          <h3 className="subsection-title achievements-title">Achievements</h3>
          
          <div className="achievements-list">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              const isHovered = hoveredAchievement === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="achievement-row"
                  onMouseEnter={() => setHoveredAchievement(index)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                  style={{ '--index': index }}
                >
                  <div className="achievement-number">{String(index + 1).padStart(2, '0')}</div>
                  
                  <div className="achievement-icon-circle">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  
                  <div className="achievement-content">
                    <div className="achievement-header-row">
                      <h4 className="achievement-title-text">{achievement.title}</h4>
                      <span className="achievement-year">{achievement.year}</span>
                    </div>
                    
                    {achievement.highlight && (
                      <div className="achievement-highlight-badge">{achievement.highlight}</div>
                    )}
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isHovered ? "auto" : 0, 
                        opacity: isHovered ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="achievement-details"
                    >
                      <p className="achievement-desc">{achievement.description}</p>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link-btn"
                        >
                          <ExternalLink size={16} />
                          {achievement.linkText}
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
