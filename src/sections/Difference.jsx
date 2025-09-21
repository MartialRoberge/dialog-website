import React from 'react'
import { Target, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react'

const Difference = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Concret et utile",
      description: "Des dispositifs activables, pas des promesses vagues.",
      color: "deep-teal"
    },
    {
      icon: Users,
      title: "Adapté à chaque contexte",
      description: "Chaque parcours est pensé pour vos enjeux, vos outils et votre culture.",
      color: "mint-teal"
    },
    {
      icon: Lightbulb,
      title: "Clarté et pédagogie vivante",
      description: "Nous traduisons l'IA en pratiques compréhensibles, engageantes et désirables.",
      color: "soft-coral"
    },
    {
      icon: Shield,
      title: "Énergie et plaisir",
      description: "Nos interventions sont sérieuses sans être pesantes : on apprend mieux quand c'est stimulant et humain.",
      color: "peach-glow"
    }
  ]

  return (
    <section id="difference" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-mint-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-teal mb-4 sm:mb-6 font-space px-4 sm:px-0">
            Notre différence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Dialog orchestre vos projets IA du cadrage à l'usage, avec une approche claire, adaptée et enthousiasmante.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-${item.color}/10 flex items-center justify-center border-2 border-${item.color}/20 transition-transform duration-300`}>
                  <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal mb-3 sm:mb-4 font-space">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-charcoal/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-gradient-to-r from-deep-teal via-mint-teal to-deep-teal rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 font-space">
              L'IA au service de votre vision
            </h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8">
              Nous ne vendons pas de l'IA pour de l'IA. Nous concevons des solutions intelligentes 
              qui s'intègrent naturellement dans vos processus métier et créent de la valeur durable.
            </p>
            
            <button
              onClick={() => document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-deep-teal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-snow-grey transition-colors duration-200 flex items-center mx-auto"
            >
              Contactez-nous
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Difference
