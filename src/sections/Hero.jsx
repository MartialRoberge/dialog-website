import React from 'react'
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
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h1 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight sm:leading-relaxed px-2 sm:px-0">
            De la vision à l'usage :
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            orchestrer votre{' '}
            <span className="text-[#ff6a63] block sm:inline font-bold">
              réussite IA
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-inter leading-relaxed px-4 sm:px-0">
            Dialog conjugue stratégie, formation et cas d'usage pour transformer vos idées IA en résultats concrets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <button
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-deep-teal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-snow-grey transition-colors duration-200 shadow-lg min-w-[200px] sm:min-w-0"
            >
              Découvrir nos expertises
            </button>
            
            <button
              onClick={() => document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-deep-teal transition-colors duration-200 min-w-[200px] sm:min-w-0"
            >
              Nous contacter
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70 hover:text-white transition-colors" />
      </div>
    </section>
  )
}

export default Hero 