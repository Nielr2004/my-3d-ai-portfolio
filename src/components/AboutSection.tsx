import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import aboutWorkspace from '@/assets/about-workspace.jpg';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Technologies Mastered', value: 25, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About
            <span className="text-transparent bg-gradient-electric bg-clip-text ml-4">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating the future of web experiences through 
            innovative technology and cutting-edge design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={aboutWorkspace}
                alt="Developer workspace"
                className="w-full h-96 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-60" />
              <div className="absolute inset-0 bg-electric/20 opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-electric/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                I'm a passionate full-stack developer with a focus on creating 
                immersive digital experiences. My journey in web development began 
                with a fascination for AI and 3D graphics, leading me to specialize 
                in cutting-edge technologies.
              </p>
              <p className="leading-relaxed">
                I believe in the power of technology to transform ideas into reality. 
                Whether it's building AI-powered applications, creating stunning 3D 
                web experiences, or developing scalable full-stack solutions, I'm 
                always pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-card border-electric/20 p-4 text-center hover:shadow-electric transition-smooth">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                      className="text-2xl font-bold text-electric mb-1"
                    >
                      {stat.value}{stat.suffix}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;