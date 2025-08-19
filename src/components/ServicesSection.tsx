import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with modern frameworks and best practices.',
    features: ['React/Next.js Applications', 'RESTful APIs', 'Database Design', 'Cloud Deployment'],
    price: 'From $5,000',
    popular: false
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Intelligent features powered by machine learning and artificial intelligence.',
    features: ['ChatBot Development', 'AI-Powered Analytics', 'Natural Language Processing', 'Computer Vision'],
    price: 'From $3,000',
    popular: true
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance and feel.',
    features: ['React Native Apps', 'Progressive Web Apps', 'App Store Deployment', 'Push Notifications'],
    price: 'From $4,000',
    popular: false
  },
  {
    icon: Palette,
    title: '3D Web Experiences',
    description: 'Immersive 3D graphics and interactive web experiences using cutting-edge technology.',
    features: ['Three.js Integration', 'WebGL Optimization', 'Interactive Animations', 'VR/AR Ready'],
    price: 'From $2,500',
    popular: false
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-electric/5"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services &
            <span className="text-transparent bg-gradient-electric bg-clip-text ml-4">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life 
            with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className={`h-full bg-gradient-card border-electric/20 hover:border-electric/40 transition-smooth relative overflow-hidden ${
                service.popular ? 'ring-2 ring-electric' : ''
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-electric text-cosmic-deep px-3 py-1 text-xs font-semibold">
                    POPULAR
                  </div>
                )}
                
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="p-3 bg-electric/10 rounded-lg inline-block group-hover:bg-electric/20 transition-smooth mb-4">
                      <service.icon className="h-8 w-8 text-electric" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex-1 space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-electric flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="text-2xl font-bold text-electric mb-4">
                      {service.price}
                    </div>
                    <Button 
                      variant={service.popular ? "hero" : "neon"} 
                      className="w-full group-hover:scale-105 transition-smooth"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-smooth"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button variant="electric" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;