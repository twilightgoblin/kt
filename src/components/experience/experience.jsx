import ScrollTimeline from "./Scroll-timeline"

// Define your timeline events
const events = [
  {
    year: "2025",
    title: "Consultant Intern",
    subtitle: "Microsoft",
    description: "Developed a comprehensive Power Platform solution (Canvas App, Model-Driven App, Power Automate flows) and built a Copilot agent for automation, significantly reducing manual data processing time in the end-to-end hiring process."
  },
  {
    year: "2024",
    title: "Student Trainee ",
    subtitle: "DRDO",
    description: "Completed an image processing learning task on optical flow by studying and implementing the Horn-Schunck and Lucas-Kanade methods using MATLAB."
  },
]

export function ScrollTimelineExample() {
  return (
    <ScrollTimeline 
      events={events}
      title="My Journey"
      subtitle="Scroll to explore the timeline"
      progressIndicator={true}
      cardAlignment="alternating"
      revealAnimation="fade"
    />
  )
}