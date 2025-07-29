import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Cpu, 
  GraduationCap, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react'

const Services = () => {

  const services = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Feuille de route stratégique",
      subtitle: "Vision & orientations IA",
      description: "Définir ensemble votre stratégie IA générative avec une roadmap claire et des objectifs mesurables.",
      features: [
        "Analyse de maturité IA",
        "Identification des cas d'usage prioritaires", 
        "Roadmap de déploiement progressive",
        "Gouvernance et mesure d'impact"
      ],
      color: "deep-teal",
      gradient: "from-deep-teal to-mint-teal"
    },
    {
      id: 2,
      icon: Cpu,
      title: "Déploiement de cas d'usage",
      subtitle: "Mise en œuvre concrète",
      description: "Développement et déploiement de solutions IA sur-mesure adaptées à vos enjeux métier.",
      features: [
        "Développement de solutions sur-mesure",
        "Intégration dans vos systèmes existants",
        "Tests et validation utilisateurs",
        "Monitoring et optimisation continue"
      ],
      color: "mint-teal", 
      gradient: "from-mint-teal to-soft-coral"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Formation & Acculturation",
      subtitle: "Montée en compétences",
      description: "Accompagner vos équipes vers l'autonomie avec des formations pratiques et un suivi personnalisé.",
      features: [
        "Formations métier sur-mesure",
        "Ateliers pratiques et cas d'usage",
        "Support continu et mentoring",
        "Certification des compétences"
      ],
      color: "soft-coral",
      gradient: "from-soft-coral to-peach-glow"
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-snow-grey via-white to-mint-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-teal mb-4 sm:mb-6 font-space px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos Expertises IA
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            De la stratégie au déploiement, nous vous accompagnons à chaque étape de votre transformation IA
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={`
                relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full
                border border-gray-100 shadow-lg hover:shadow-2xl 
                transition-all duration-500 ease-out
                transform hover:-translate-y-2 lg:hover:-translate-y-4
                ${hoveredCard === service.id ? 'scale-[1.02] lg:scale-105' : ''}
                min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]
                flex flex-col
              `}>
                
                {/* Gradient Background */}
                <div className={`
                  absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 
                  transition-opacity duration-500 bg-gradient-to-br ${service.gradient}
                `} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Icon */}
                  <motion.div
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl 
                      bg-gradient-to-br ${service.gradient} 
                      flex items-center justify-center mb-4 sm:mb-6 lg:mb-8
                      shadow-lg group-hover:shadow-xl transition-all duration-500
                      flex-shrink-0
                    `}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  >
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </motion.div>

                  {/* Header */}
                  <div className="mb-4 sm:mb-6 flex-shrink-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-deep-teal mb-2 sm:mb-3 font-space leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-mint-teal font-semibold">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-charcoal/80 mb-6 sm:mb-8 leading-relaxed flex-shrink-0">
                    {service.description}
                  </p>

                  {/* Features - Flex grow pour occuper l'espace restant */}
                  <div className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-mint-teal mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => document.querySelector('#diag').scrollIntoView({ behavior: 'smooth' })}
            className="
              bg-deep-teal text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 
              rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg
              hover:bg-mint-teal transition-all duration-300 shadow-lg hover:shadow-xl
              transform hover:scale-105 active:scale-95
              min-w-[200px] sm:min-w-0
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir votre potentiel IA
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default Services 