import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import { ScrollTimelineExample } from './components/experience/experience'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <section id="experience">
        <ScrollTimelineExample />
      </section>
    </div>
  )
}

export default App
