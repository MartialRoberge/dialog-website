import React, { useState } from 'react'
import { 
  Search, 
  GraduationCap, 
  Wrench, 
  Rocket,
  TrendingUp,
  Package,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Search,
      title: "Diagnostic & feuille de route IA",
      subtitle: "Voir clair.",
      description: "Identifier vos cas d'usage prioritaires et définir une feuille de route IA pragmatique.",
      features: [
        "Analyse de maturité IA",
        "Priorisation selon valeur / risque / effort",
        "Roadmap de déploiement claire et mesurable"
      ],
      color: "deep-teal",
      gradient: "from-deep-teal to-mint-teal"
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Acculturation / Formation / Mentoring",
      subtitle: "Pratiquer.",
      description: "Mettre vos équipes en mouvement avec des formations concrètes et un suivi personnalisé.",
      features: [
        "Modules par rôle ou par secteur",
        "Ateliers pratiques et cas d'usage réels",
        "Mentoring et support continu"
      ],
      color: "mint-teal", 
      gradient: "from-mint-teal to-soft-coral"
    },
    {
      id: 3,
      icon: Wrench,
      title: "Développement de cas d'usage",
      subtitle: "Tester.",
      description: "Prototyper rapidement vos premiers assistants, automatisations ou outils métiers.",
      features: [
        "Conception sur-mesure",
        "Prototypage rapide",
        "Validation avec vos équipes"
      ],
      color: "soft-coral",
      gradient: "from-soft-coral to-peach-glow"
    },
    {
      id: 4,
      icon: Rocket,
      title: "Déploiement & accompagnement du changement",
      subtitle: "Déployer.",
      description: "Ancrer vos solutions dans le quotidien grâce à un accompagnement du terrain.",
      features: [
        "Formation ciblée",
        "Communication interne et ambassadeurs",
        "Conduite du changement pas à pas"
      ],
      color: "peach-glow",
      gradient: "from-peach-glow to-deep-teal"
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Agence IA",
      subtitle: "Optimiser.",
      description: "Exploiter l'IA pour renforcer votre visibilité et vos performances dans l'écosystème numérique.",
      features: [
        "Stratégie GEO (Generative Engine Optimization)",
        "Mesure et pilotage de l'impact IA sur vos performances métier",
        "Recommandations activables"
      ],
      color: "deep-teal",
      gradient: "from-deep-teal to-mint-teal"
    },
    {
      id: 6,
      icon: Package,
      title: "Développement de produits IA",
      subtitle: "Créer.",
      description: "Transformer vos initiatives en produits IA réplicables et utiles.",
      features: [
        "Veille personnalisée",
        "Diagnostic data & IA",
        "Pack d'assistants et automatisations réutilisables"
      ],
      color: "mint-teal",
      gradient: "from-mint-teal to-soft-coral"
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-snow-grey via-white to-mint-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-teal mb-4 sm:mb-6 font-space px-4 sm:px-0">
            Nos expertises
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            De la vision à l'usage, nous vous accompagnons à chaque étape de votre transformation IA
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group h-full"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[400px] sm:min-h-[440px] flex flex-col">
                
                {/* Gradient Background */}
                <div className={`
                  absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 
                  transition-opacity duration-500 bg-gradient-to-br ${service.gradient}
                `} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-4 sm:mb-6 flex-shrink-0">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-teal mb-2 font-space leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-mint-teal font-semibold italic">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-charcoal/80 mb-4 sm:mb-6 leading-relaxed flex-shrink-0">
                    {service.description}
                  </p>

                  {/* Features - Flex grow pour occuper l'espace restant */}
                  <div className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-mint-teal mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button
            onClick={() => document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' })}
            className="bg-deep-teal text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-mint-teal transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] sm:min-w-0"
          >
            Contactez-nous
          </button>
        </div>

      </div>
    </section>
  )
}

export default Services