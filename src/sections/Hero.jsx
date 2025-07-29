import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Target } from 'lucide-react'
import VantaBackground from '../components/VantaBackground'

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-16">
      {/* Vanta Background Effect */}
      <VantaBackground />
      
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          <motion.h1
            className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight sm:leading-relaxed px-2 sm:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passez de la vision
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            à l'usage de{' '}
            <span className="text-[#ff6a63] block sm:inline font-bold">
              l'IA Générative
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-inter leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des experts d'IA Gen pour bâtir à vos côtés des dispositifs sur-mesure et responsables
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-deep-teal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-snow-grey transition-colors duration-200 shadow-lg min-w-[200px] sm:min-w-0"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explorer nos solutions IA
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#diag').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-deep-teal transition-colors duration-200 min-w-[200px] sm:min-w-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Faire le diagnostic
            </motion.button>
          </motion.div>

          {/* KPIs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-center pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { value: "+150", label: "Projets" },
              { value: "+20", label: "Programmes" },
              { value: "+2000", label: "Personnes formées" }
            ].map((kpi, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  {kpi.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 