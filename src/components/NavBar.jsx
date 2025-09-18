import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Notre mission', href: '#about' },
    { name: 'Nos expertises', href: '#services' },
    { name: 'Notre approche', href: '#methodology' },
    { name: 'Notre différence', href: '#difference' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href === '#hero' ? 'body' : href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('#hero')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-3">
                {!isScrolled ? (
                  // Logo complet quand pas scrollé (blanc sur fond sombre)
                  <img 
                    src="/logo-dialog.png" 
                    alt="Dialog" 
                    className="h-8 sm:h-10 lg:h-12 w-auto brightness-0 invert"
                  />
                ) : (
                  // Logo complet quand scrollé (couleurs originales sur fond blanc)
                  <img 
                    src="/logo-dialog.png" 
                    alt="Dialog" 
                    className="h-8 sm:h-10 lg:h-12 w-auto"
                  />
                )}
                <span 
                  className={`font-bold text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 ${
                    isScrolled ? 'text-deep-teal' : 'text-white'
                  }`}
                >
                  Dialog
                </span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-sm xl:text-base transition-all duration-200 ${
                    isScrolled
                      ? 'text-charcoal hover:text-deep-teal hover:bg-deep-teal/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#cta')}
                className={`ml-4 xl:ml-6 px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-all duration-200 ${
                  isScrolled
                    ? 'bg-deep-teal text-white hover:bg-mint-teal shadow-md hover:shadow-lg'
                    : 'bg-white text-deep-teal hover:bg-snow-grey shadow-md hover:shadow-lg'
                }`}
              >
                Contactez-nous
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-charcoal hover:bg-deep-teal/5' 
                  : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 sm:top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 sm:p-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-4 py-3 sm:py-4 text-charcoal hover:text-deep-teal hover:bg-deep-teal/5 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile CTA */}
                <motion.button
                  onClick={() => scrollToSection('#cta')}
                  className="w-full mt-4 sm:mt-6 bg-deep-teal text-white px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-mint-teal transition-all duration-200 shadow-md"
                >
                  Contactez-nous
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar 