import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';

const projects = [
  {
    id: 1,
    title: "AI-Powered Web App",
    description: "A modern web application featuring AI integration, real-time data processing, and intuitive user interface design.",
    image: project1,
    technologies: ["React", "AI/ML", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Intelligent Chatbot Platform",
    description: "Advanced chatbot system with natural language processing, context awareness, and multi-platform integration.",
    image: project2,
    technologies: ["Next.js", "OpenAI", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    description: "Responsive e-commerce platform with AI-driven recommendations, seamless payment integration, and modern UI/UX.",
    image: project3,
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard with real-time data visualization, advanced filtering, and intelligent insights generation.",
    image: project4,
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Neural Network Visualizer",
    description: "3D visualization tool for neural networks with interactive exploration and real-time training visualization.",
    image: project5,
    technologies: ["Three.js", "TensorFlow", "WebGL", "React"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="bg-gradient-card border-electric/20 hover:border-electric/40 transition-smooth overflow-hidden hover:shadow-card group-hover:scale-105">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-electric/20 opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
            <Button variant="electric" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="neon" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-electric">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-electric/10 text-electric border border-electric/30 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PortfolioSection = () => {
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
            Featured
            <span className="text-transparent bg-gradient-electric bg-clip-text ml-4">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing innovative solutions, 
            cutting-edge technology, and exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="neon" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;