import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Mail, 
  Linkedin,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const navigate = useNavigate()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLegalClick = (path) => {
    console.log('🔗 Navigating to:', path)
    navigate(path)
  }

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-5" />
      
      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info - Bloc gauche (identité) */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-space font-bold text-2xl text-white">
                Dialog
              </span>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
              Dialog orchestre vos projets IA du cadrage à l'usage, avec des solutions concrètes et sur-mesure.
            </p>
          </div>

          {/* Contact - Bloc centre (contact) */}
          <div>
            <h3 className="font-space font-bold text-lg mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-white/70">
                <Mail size={16} className="mr-3" />
                <a 
                  href="mailto:contact@dialog-ia.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@dialog-ia.com
                </a>
              </div>
              
              <div className="flex items-center text-white/70">
                <Linkedin size={16} className="mr-3" />
                <a 
                  href="https://www.linkedin.com/company/dialog-ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Bloc bas (légal) */}
      <div className="border-t border-white/10 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 text-white/60 text-sm mb-4 md:mb-0">
              <span>&copy; 2025 Dialog. Tous droits réservés.</span>
              <button 
                onClick={() => handleLegalClick('/mentions-legales')} 
                className="hover:text-white transition-colors duration-300 cursor-pointer relative z-10 underline py-2 px-1 hover:bg-white/10 rounded"
              >
                Mentions légales
              </button>
              <button 
                onClick={() => handleLegalClick('/politique-confidentialite')} 
                className="hover:text-white transition-colors duration-300 cursor-pointer relative z-10 underline py-2 px-1 hover:bg-white/10 rounded"
              >
                Politique de confidentialité
              </button>
            </div>

            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200 hover:scale-105"
                aria-label="Retour en haut"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer