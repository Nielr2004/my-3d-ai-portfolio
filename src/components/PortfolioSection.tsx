import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: "Virtual Zoo",
    description: "A website to show exists and extinct flora and fauna, and cultural significance of a state of a country.",
    longDescription: "This project was developed for the Smart India Hackathon 2023. The goal was to create an immersive and educational platform to showcase the biodiversity and cultural heritage of an Indian state. It features a dynamic database, interactive maps, and utilizes various APIs to fetch real-time data.",
    image: project1,
    technologies: ["HTML", "CSS", "JavaScript", "Database", "APIs"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A resume website to show case my qualifications and skills.",
    longDescription: "My personal portfolio website, which you are currently viewing. It is built with React and Tailwind CSS, featuring a fun and minimalist design. It's fully responsive and includes interactive elements to showcase my skills and projects.",
    image: project2,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Ramen Data Analysis",
    description: "Analyzing ramen distribution data across world using python.",
    longDescription: "A data analysis project where I explored a dataset of ramen ratings from around the world. I used Python with libraries like Pandas and Matplotlib to clean the data, perform analysis, and create visualizations to uncover insights about ramen trends.",
    image: project3,
    technologies: ["Python", "Data Analysis", "Data Visualization"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "FaceTrack+",
    description: "An AI/ML based attendance system using opencv, face recognition and Arduino.",
    longDescription: "FaceTrack+ is an automated attendance system that uses computer vision to recognize faces. The system is built with Python, OpenCV for face detection, and an Arduino to log attendance. It's a practical application of my AI/ML skills.",
    image: project4,
    technologies: ["AI/ML", "OpenCV", "Python", "Arduino"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Hands-on Volume rocker",
    description: "A volume controller using hand tracking with python.",
    longDescription: "An interactive project that allows users to control their system's volume by using hand gestures. This was built using Python and OpenCV to track hand movements in real-time and translate them into volume control commands.",
    image: project5,
    technologies: ["Python", "OpenCV", "Hand Tracking"],
    liveUrl: "#",
    githubUrl: "#"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Some Things
            <span className="text-transparent bg-gradient-playful bg-clip-text ml-4 font-pacifico pr-1">
              I've Built
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a peek at some of my favorite projects. Had a blast working on these!
          </p>
        </motion.div>

        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
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
