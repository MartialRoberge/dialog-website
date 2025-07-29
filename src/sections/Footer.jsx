import React from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5" />
      
      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <img 
                src="/logo-dialog/logo.png" 
                alt="Dialog" 
                className="h-8 w-auto opacity-80"
              />
              <span className="font-space font-bold text-2xl">
                Dialog
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed mb-6 max-w-md"
            >
              Cabinet de conseil spécialisé en IA générative. 
              Nous transformons vos ambitions tech en avantages concurrentiels durables.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center text-white/70">
                <Mail size={16} className="mr-3" />
                <a 
                  href="mailto:contact@dialog-conseil.fr"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@dialog-conseil.fr
                </a>
              </div>

              <div className="flex items-center text-white/70">
                <MapPin size={16} className="mr-3" />
                <span>Paris, France</span>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-space font-bold text-lg mb-6"
            >
              Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { name: "Conseil Stratégique", href: "#services" },
                { name: "Tech Enablement", href: "#services" },
                { name: "Upskilling", href: "#services" },
                { name: "Diagnostic IA", href: "#diag" }
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Company */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="font-space font-bold text-lg mb-6"
            >
              Entreprise
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { name: "À propos", href: "#about" },
                { name: "Notre méthode", href: "#methodology" },
                { name: "Témoignages", href: "#testimonials" },
                { name: "Nous contacter", href: "#cta" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center space-x-6 mt-12 pt-8 border-t border-white/10"
        >
          <span className="text-white/70 font-medium">Suivez-nous</span>
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Github, href: "#", label: "Github" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-white/70 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-white/60 text-sm mb-4 md:mb-0"
            >
                              <span>&copy; 2025 Dialog. Tous droits réservés.</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Politique de confidentialité
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-white/60 text-sm flex items-center">
                Made with <Heart size={14} className="mx-1 text-soft-coral" /> using React
                <span className="ml-1 text-mint-teal">⚛︎</span>
              </span>
              
              <motion.button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Retour en haut"
              >
                <ArrowUp size={16} className="text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 