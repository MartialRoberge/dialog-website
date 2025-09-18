import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Brain, Users, TrendingUp, Award } from 'lucide-react'

const Counter = ({ end, suffix = "" }) => {
  return <span>{end}{suffix}</span>
}

const About = () => {


  const stats = [
    { icon: TrendingUp, number: 33, suffix: "%", label: "Gain de productivité IA*", color: "deep-teal" },
    { icon: Brain, number: 3.7, suffix: "x", label: "ROI moyen par € investi*", color: "mint-teal" },
    { icon: Users, number: 79, suffix: "%", label: "Dirigeants jugent l'IA critique*", color: "soft-coral" },
    { icon: Award, number: 33, suffix: "%", label: "Entreprises 250+ adoptent l'IA*", color: "peach-glow" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-snow-grey/30 to-mint-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-teal mb-4 sm:mb-6 font-space px-4 sm:px-0">
            L'expertise au service de votre transformation
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            L'IA n'a de valeur que quand elle s'utilise. Notre mission : transformer vos idées IA en usages concrets, grâce à une orchestration claire, sur-mesure et sans jargon.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-gradient-to-r from-deep-teal to-mint-teal rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 font-space">
                Notre Mission
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                Rendre l'intelligence artificielle accessible et bénéfique pour toutes les organisations, 
                en les accompagnant dans leur transformation avec des solutions sur-mesure et responsables.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-${stat.color}/10 flex items-center justify-center border-2 border-${stat.color}/20`}>
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${stat.color}`} />
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${stat.color} mb-1 sm:mb-2 font-space`}>
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-charcoal/80 font-medium leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="text-center mt-6">
          <p className="text-xs text-charcoal/60">
            * Sources : Microsoft 2024-2025, Orange Pro 2024, SkimAI 2024, Squid Impact 2024
          </p>
        </div>

      </div>
    </section>
  )
}

export default About 