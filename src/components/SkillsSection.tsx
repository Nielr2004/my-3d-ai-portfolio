import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Database, 
  Palette,
  Languages
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

const skillCategories = [
  { name: 'Frontend', level: 90 },
  { name: 'Backend', level: 85 },
  { name: 'Design', level: 95 },
  { name: 'Data', level: 80 },
  { name: 'AI/ML', level: 75 },
];

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'Webflow', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Flask', 'SQL', 'Database Management', 'Django', 'API Development']
  },
  {
    category: 'Design',
    icon: Palette,
    skills: ['UI/UX Design', 'Illustration', 'Canva', 'Adobe Illustrator', 'Figma', 'Adobe XD']
  },
  {
    category: 'Data & AI/ML',
    icon: Brain,
    skills: ['Data Analysis', 'Data Visualization', 'Python', 'PowerBI', 'Machine Learning', 'Opencv', 'Tensorflow']
  }
];

const languages = [
  { name: 'English', level: 95 },
  { name: 'Hindi', level: 85 },
  { name: 'Bengali', level: 100 },
  { name: 'Assamese', level: 75 }
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{skill.name}</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="h-full bg-gradient-playful rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-light-gray dark:bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &
            <span className="text-transparent bg-gradient-playful bg-clip-text ml-4">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for building next-generation applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-border shadow-card p-4">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">Skills Overview</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillCategories}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <Radar name="Proficiency" dataKey="level" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                    <Tooltip contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)',
                    }}/>
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.15 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Languages className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Languages</h3>
                </div>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <SkillBar key={lang.name} skill={lang} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
