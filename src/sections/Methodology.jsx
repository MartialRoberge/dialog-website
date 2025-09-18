import React from 'react'
import { 
  Eye, 
  Wrench, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Users
} from 'lucide-react'

const Methodology = () => {
  const principles = [
    {
      id: "01",
      title: "Vision claire",
      subtitle: "Décider avec discernement.",
      icon: Eye,
      color: "#00656E",
      bgColor: "bg-deep-teal",
      description: "Nous alignons l'IA sur vos enjeux business, éthiques et RSE, pour donner un cadre inspirant et pragmatique à vos projets.",
      gradient: "from-deep-teal to-mint-teal"
    },
    {
      id: "02", 
      title: "Sur-mesure",
      subtitle: "Zéro copier-coller.",
      icon: Wrench,
      color: "#1AA7A1",
      bgColor: "bg-mint-teal",
      description: "Chaque dispositif est conçu pour vos cas d'usage, vos outils et votre culture. Rien de générique, tout est adapté.",
      gradient: "from-mint-teal to-soft-coral"
    },
    {
      id: "03",
      title: "Liberté de choix",
      subtitle: "Pas d'outil imposé.",
      icon: Shield,
      color: "#FF6A63", 
      bgColor: "bg-soft-coral",
      description: "Nous vous aidons à choisir ce qui marche pour vous — construire, acheter ou adapter l'existant.",
      gradient: "from-soft-coral to-peach-glow"
    },
    {
      id: "04",
      title: "Acculturation par l'usage",
      subtitle: "On apprend en faisant.",
      icon: Users,
      color: "#FFB347",
      bgColor: "bg-peach-glow", 
      description: "Pas de slides sans actions : on teste, on manipule, on co-construit. L'appropriation passe par la pratique.",
      gradient: "from-peach-glow to-deep-teal"
    }
  ]

  return (
    <section id="methodology" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-snow-grey/30 to-mint-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-teal mb-4 sm:mb-6 font-space px-4 sm:px-0">
            Notre approche
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Dialog, c'est une méthode claire : quatre principes qui rendent l'IA vraiment utile.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="group"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                
                {/* Number and Icon */}
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl font-bold text-charcoal/20 font-space">
                    {principle.id}
                  </div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-lg transition-all duration-300`}>
                    <principle.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-teal mb-2 sm:mb-3 font-space">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-mint-teal font-semibold italic mb-3 sm:mb-4">
                    {principle.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-charcoal/70 mb-6">
            Prêt à découvrir comment nous pouvons vous accompagner ?
          </p>
          <button
            onClick={() => document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' })}
            className="bg-deep-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-mint-teal transition-colors duration-200 flex items-center mx-auto"
          >
            Contactez-nous
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Methodology