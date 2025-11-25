"use client";
import { PinContainer } from "./3d-pin";

export function AnimatedPinDemo() {
  const projects = [
    {
      title: "Mono-to-Stereo Image Generation using GANs",
      description: "Developed and engineered a Pix2Pix GAN model to synthesize realistic depth-aware stereo image pairs from a single monocular input, offering a cost-effective alternative to LiDAR.",
      link: "https://github.com/Sejal-Dubey/Depth-Vision",
      linkText: "/github.com",
      gradient: "from-violet-500 via-purple-500 to-blue-500"
    },
    {
      title: "E-commerce Test Automation Framework",
      description: "Built a data-driven testing framework with Java/Selenium, automating core e-commerce functionalities and integrating ExtentReports for efficient debugging.",
      link: "https://github.com/Sejal-Dubey/Demoblaze-webapp--Automation-Testing",
      linkText: "/github.com",
      gradient: "from-pink-500 via-red-500 to-orange-500"
    },
    {
      title: "ReVoice",
      description: "Developed an end-to-end voice conversion system using Whisper and a Tacotron2/HiFi-GAN vocoder to increase digital communication accessibility.",
      link: "https://github.com/kalyanitewari/ReVoice.git",
      linkText: "/github.com",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      title: "Unsupervised ML 101",
      description: "Created open-source Jupyter notebooks for a comprehensive study of PCA, LDA, SVD, t-SNE, and MDS, along with detailed analysis and results.",
      link: "https://www.kaggle.com/code/kalyanitewari/clustering",
      linkText: "/kaggle.com",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      title: "Fitness Tracker App",
      description: "This application, developed in Java, offers users a comprehensive platform to monitor and manage their fitness and wellness activities including Step Tracking, Water Intake, Diet Monitoring, Exercise Routines, and Mental Health Assessments.",
      link: "https://github.com/hetsevalia/Fitness-Tracker",
      linkText: "/github.com",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "Voice 2 Gesture",
      description: "A web application designed to make communication more inclusive. This tool converts spoken language in videos into sign language, providing visual representations of signs to displayed for deaf people.",
      link: "https://github.com/Sejal-Dubey/FOSS_Sign_Language_generator",
      linkText: "/github.com",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{
            background: 'linear-gradient(to right, #FF9FFC, #5227FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Projects
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explore my latest work and creative endeavors
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="h-[40rem] w-full flex items-center justify-center">
            <PinContainer title={project.linkText} href={project.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
