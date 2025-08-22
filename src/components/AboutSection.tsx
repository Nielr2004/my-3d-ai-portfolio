import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import aboutMeImage from '@/assets/self.png';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: 5, suffix: '+' },
    { label: 'Years Experience', value: 2, suffix: '+' },
    { label: 'Technologies Mastered', value: 10, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Little More
            <span className="text-transparent bg-gradient-playful bg-clip-text ml-4 font-pacifico">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Just a friendly developer who's super passionate about mixing creativity with tech. My goal is to build cool, innovative things that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group shadow-card">
              <img
                src={aboutMeImage}
                alt="A photo of Snehashis Roy"
                className="w-full h-auto object-cover transition-fast group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                Hey there! I'm a full-stack developer who just loves to build things. My coding journey started with a big curiosity for AI and 3D graphics, which has led me down some amazing paths.
              </p>
              <p className="leading-relaxed">
                I get a real kick out of turning a cool idea into something real and interactive. Whether it's a smart AI app, a slick 3D website, or a solid full-stack project, I'm all about pushing the envelope and having fun while doing it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center transition-fast hover:shadow-playful border-border">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}{stat.suffix}
                    </div>
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
