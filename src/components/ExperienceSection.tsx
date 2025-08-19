import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechVision AI',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    type: 'Full-time',
    description: 'Leading development of AI-powered web applications and managing a team of 5 developers. Architected scalable solutions serving 100K+ users.',
    technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'AWS'],
    achievements: [
      'Increased application performance by 40%',
      'Led migration to microservices architecture',
      'Implemented AI chatbot reducing support tickets by 60%'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    location: 'Remote',
    period: '2020 - 2022',
    type: 'Full-time',
    description: 'Specialized in creating immersive 3D web experiences and responsive user interfaces using modern frameworks and WebGL technologies.',
    technologies: ['React', 'Three.js', 'TypeScript', 'WebGL', 'GSAP'],
    achievements: [
      'Built 15+ interactive 3D web experiences',
      'Reduced bundle size by 35% through optimization',
      'Mentored 3 junior developers'
    ]
  },
  {
    title: 'Web Developer',
    company: 'StartupLab',
    location: 'Austin, TX',
    period: '2019 - 2020',
    type: 'Contract',
    description: 'Developed responsive web applications for various startups, focusing on rapid prototyping and MVP development.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase'],
    achievements: [
      'Delivered 8 successful MVP projects',
      'Achieved 98% client satisfaction rate',
      'Implemented agile development practices'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'WebCraft Solutions',
    location: 'New York, NY',
    period: '2018 - 2019',
    type: 'Full-time',
    description: 'Started my professional journey building e-commerce websites and learning modern web development practices.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    achievements: [
      'Completed 25+ client projects',
      'Learned 5 new technologies in first year',
      'Earned Employee of the Month twice'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience &
            <span className="text-transparent bg-gradient-electric bg-clip-text ml-4">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey through the evolving landscape of 
            web development and emerging technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric/30 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 w-4 h-4 bg-electric rounded-full border-4 border-background z-10 hidden md:block"
                />

                <Card className="bg-gradient-card border-electric/20 hover:border-electric/40 transition-smooth md:ml-16 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-electric mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start">
                        {experience.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-electric/10 text-electric border border-electric/30 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-electric">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-electric mt-1.5 text-xs">▸</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;