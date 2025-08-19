import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code2, 
  Palette, 
  Database, 
  Brain, 
  Smartphone, 
  Globe,
  Zap,
  Cpu
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Three.js/WebGL', level: 85 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'OpenAI API', level: 88 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Natural Language Processing', level: 80 },
      { name: 'Computer Vision', level: 70 }
    ]
  },
  {
    category: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 80 }
    ]
  },
  {
    category: 'Mobile & Cross-Platform',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: 'PWA Development', level: 90 },
      { name: 'Responsive Design', level: 95 }
    ]
  }
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
        <span className="text-electric">{skill.level}%</span>
      </div>
      <div className="h-2 bg-cosmic-stellar rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
          className="h-full bg-gradient-electric rounded-full relative"
        >
          <motion.div
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white/30 blur-sm"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="absolute inset-0 bg-gradient-hero opacity-5"
          style={{
            backgroundSize: '400% 400%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &
            <span className="text-transparent bg-gradient-electric bg-clip-text ml-4">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            for building next-generation web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <Card className="bg-gradient-card border-electric/20 hover:border-electric/40 transition-smooth group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-electric/10 rounded-lg group-hover:bg-electric/20 transition-smooth">
                      <category.icon className="h-6 w-6 text-electric" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        index={skillIndex} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-electric">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[Zap, Cpu, Globe, Palette].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="p-4 bg-electric/10 rounded-full hover:bg-electric/20 transition-smooth cursor-pointer"
              >
                <Icon className="h-8 w-8 text-electric" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;