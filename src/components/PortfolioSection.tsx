import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project8 from '@/assets/project-8.jpg';
import workInProgress from '@/assets/work-in-progress.jpg';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: "Chatbot",
    description: "Gemini powered chatbot",
    longDescription: "A chatbot that uses natural language processing and machine learning to respond to user queries. It uses a pre-trained model to understand and generate responses based on the user's input.",
    image: project1,
    technologies: ["Natural Language Processing", "Machine Learning", "Gemini API", "React", "Tailwind CSS", "Next.js"],
    liveUrl: "https://ai-bot-xi-beige.vercel.app/",
    githubUrl: "https://github.com/Nielr2004/Ai_bot.git"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A resume website to show case my qualifications and skills.",
    longDescription: "My personal portfolio website, which you are currently viewing. It is built with React and Tailwind CSS, featuring a fun and minimalist design. It's fully responsive and includes interactive elements to showcase my skills and projects.",
    image: project2,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Interactive Elements", "APIs"],
    liveUrl: "https://protfolio-lemon-five.vercel.app/",
    githubUrl: "https://github.com/Nielr2004/my-3d-ai-portfolio.git"
  },
  {
    id: 3,
    title: "Ramen Data Analysis",
    description: "Analyzing ramen distribution data across world using python.",
    longDescription: "A data analysis project where I explored a dataset of ramen ratings from around the world. I used Python with libraries like Pandas and Matplotlib to clean the data, perform analysis, and create visualizations to uncover insights about ramen trends.",
    image: project3,
    technologies: ["Python", "Data Analysis", "Data Visualization", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Nielr2004/Ramen_Report_data_analysis.git"
  },
  {
    id: 4,
    title: "FaceTrack+",
    description: "An AI/ML based attendance system using opencv, face recognition and Arduino.",
    longDescription: "FaceTrack+ is an automated attendance system that uses computer vision to recognize faces. The system is built with Python, OpenCV for face detection, and an Arduino to log attendance. It's a practical application of my AI/ML skills.",
    image: project4,
    technologies: ["AI/ML", "OpenCV", "Python", "Arduino"],
    githubUrl: "https://github.com/notorious0631/Fast-Track.git"
  },
  {
    id: 5,
    title: "Hands-on Volume rocker",
    description: "A volume controller using hand tracking with python.",
    longDescription: "An interactive project that allows users to control their system's volume by using hand gestures. This was built using Python and OpenCV to track hand movements in real-time and translate them into volume control commands in the GUI.",
    image: project5,
    technologies: ["Python", "OpenCV", "Hand Tracking"],
    githubUrl: "https://github.com/Nielr2004/Basic-handgesture-volume-control.git"
  },
  {
    id: 6,
    title: "Weather Ai (in progress)",
    description: "An AI powered weather app.",
    longDescription: "A weather app that uses OpenAI's ChatGPT API to provide accurate and up-to-date weather information. The app is built with React, Tailwind CSS, and OpenAI's ChatGPT API.",
    image: workInProgress,
    technologies: ["React", "Tailwind CSS", "Gemini API", "Weather api", "TypeScript", "Next.js"],
    githubUrl:"https://github.com/Nielr2004/weather-ai.git"
  },
  {
    id: 7,
    title: "Movie Review (in progress)",
    description: "An AI powered movie review app.",
    longDescription: "A movie review app that uses OpenAI's ChatGPT API to provide accurate and up-to-date movie reviews. The app is built with React, Tailwind CSS, and OpenAI's ChatGPT API.",
    image: workInProgress,
    technologies: ["React", "Tailwind CSS", "Gemini API", "Movie api", "JavaScript"],
    liveUrl:"https://movie-review-website-henna.vercel.app/",
    githubUrl:"https://github.com/Nielr2004/Movie-review-website.git"
  },
  {
    id: 8,
    title: "Complaint Management System and Ticket Tracking with Chatbot (in progress)",
    description: "A complaint management system and ticket tracking app.",
    longDescription:"IBM National Hackathon 2025 Final Project on Complaint Management System and Ticket Tracking with Chatbot. With User and Admin Dashboard, this project aims to provide a user-friendly platform for managing complaints and tracking ticket status. It leverages AI/ML technologies to enhance the user experience and provide efficient support.",
    image: project8,
    technologies: ["React", "Tailwind CSS", "Rasa", "TypeScript", "Python"],
    githubUrl:"https://github.com/Nielr2004/chat-assist-resolve.git"
  }



];

const ProjectCard = ({ project, onProjectSelect }: { project: typeof projects[0], onProjectSelect: () => void }) => {
  return (
    <DialogTrigger asChild>
      <motion.div
        onClick={onProjectSelect}
        className="group cursor-pointer"
        whileHover={{ y: -5 }}
      >
        <Card className="bg-gradient-card border-border hover:border-primary transition-fast overflow-hidden hover:shadow-playful h-full">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title + " screenshot"}
              className="w-full h-48 object-cover transition-fast group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-playful opacity-0 group-hover:opacity-20 transition-fast" />
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </DialogTrigger>
  );
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects[0]) | null>(null);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Some Things
            <span className="text-transparent bg-gradient-playful bg-clip-text ml-4 font-pacifico">
              I've Built
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's a peek at some of my favorite projects. Had a blast working on these!
          </p>
        </motion.div>

        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 8).map((project) => (
              <ProjectCard key={project.id} project={project} onProjectSelect={() => setSelectedProject(project)} />
            ))}
          </div>

          {selectedProject && (
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <DialogDescription className="text-muted-foreground mb-4">
                  {selectedProject.longDescription}
                </DialogDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <Button asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
