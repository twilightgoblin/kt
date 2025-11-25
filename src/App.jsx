import { useState, useEffect } from 'react'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import { ScrollTimelineExample } from './components/experience/experience'
import Skills from './components/skills/skills'
import { AnimatedPinDemo } from './components/projects/projects'
import Curricular from './components/curricular/curricular'
import Contact from './components/contact/contact'
import Preloader from './components/preloader/preloader'

const App = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      <div className={`bg-black min-h-screen transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <div className="section-separator"></div>
        <section id="experience">
          <ScrollTimelineExample />
        </section>
        <div className="section-separator"></div>
        <Skills />
        <div className="section-separator"></div>
        <section id="projects">
          <AnimatedPinDemo />
        </section>
        <div className="section-separator"></div>
        <section id="curricular">
          <Curricular />
        </section>
        <div className="section-separator"></div>
        <Contact />
      </div>
    </>
  )
}

export default App
