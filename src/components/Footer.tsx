import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import Resume from '@/assets/Resume.pdf';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/snehashis-roy/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:roysnehashis2004@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-light-gray dark:bg-muted/20 border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-transparent bg-gradient-playful bg-clip-text">
              Snehashis Roy
            </h3>
            <p className="text-muted-foreground">
              A developer who loves to build cool things for the web.
            </p>
            <Button variant="default" size="sm" className="w-fit" asChild>
              <a href={Resume} download="Snehashis_Roy_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Grab My Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-fast text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>roysnehashis2004@gmail.com</p>
              <p>Always open to new ideas!</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-fast group"
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Snehashis Roy. Built with fun!
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
