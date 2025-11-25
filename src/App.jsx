import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import { ScrollTimelineExample } from './components/experience/experience'
import Skills from './components/skills/skills'
import { AnimatedPinDemo } from './components/projects/projects'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
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
    </div>
  )
}

export default App
