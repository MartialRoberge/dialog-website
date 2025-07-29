import React from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Zap,
  Shield, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Methodology = () => {
  const approaches = [
    {
      id: "01",
      title: "Vision éclairante",
      subtitle: "Comprendre les enjeux IA",
      icon: Eye,
      color: "#00656E",
      bgColor: "bg-deep-teal",
      description: "Nous analysons votre écosystème pour identifier les opportunités d'IA générative les plus pertinentes.",
      points: [
        "Audit de maturité IA",
        "Cartographie des cas d'usage", 
        "Analyse de l'impact business",
        "Priorisation des initiatives"
      ]
    },
    {
      id: "02", 
      title: "Démarche sur-mesure",
      subtitle: "Ancrée dans la réalité terrain",
      icon: Zap,
      color: "#1AA7A1",
      bgColor: "bg-mint-teal",
      description: "Une approche pragmatique adaptée à votre contexte, vos contraintes et vos objectifs.",
      points: [
        "Méthode adaptée à votre contexte",
        "Intégration des contraintes métier",
        "Approche incrémentale", 
        "Validation terrain continue"
      ]
    },
    {
      id: "03",
      title: "Posture agnostique",
      subtitle: "Vis-à-vis des outils",
      icon: Shield,
      color: "#FF6A63", 
      bgColor: "bg-soft-coral",
      description: "Nous sélectionnons les meilleures technologies selon vos besoins, sans parti pris vendeur.",
      points: [
        "Sélection objective des outils",
        "Benchmarking technologique",
        "Indépendance vis-à-vis des éditeurs",
        "Focus sur l'efficacité"
      ]
    },
    {
      id: "04",
      title: "Acculturation par l'usage",
      subtitle: "Apprentissage concret",
      icon: Users,
      color: "#FFB199",
      bgColor: "bg-peach-glow", 
      description: "Nous formons vos équipes par la pratique pour une adoption naturelle et durable.",
      points: [
        "Formation par la pratique",
        "Accompagnement au changement",
        "Transfert de compétences",
        "Autonomisation progressive"
      ]
    }
  ]

  return (
    <section id="methodology" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl gradient-text mb-6">
            Notre Approche
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Quatre partis pris fondamentaux qui guident notre accompagnement
          </p>
        </motion.div>

        {/* Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="bg-snow-grey rounded-lg p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex items-start mb-6">
                  <motion.div
                    className={`${approach.bgColor} rounded-lg p-3 mr-4 flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <approach.icon className="text-white" size={32} />
                  </motion.div>
                  <div className="flex-grow">
                    <div className="font-jetbrains font-bold text-lg text-charcoal/60 mb-1">
                      {approach.id}
                    </div>
                    <h3 className="font-space font-bold text-2xl text-charcoal mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-charcoal/70 font-medium text-sm">
                      {approach.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {approach.description}
                </p>

                {/* Points */}
                <div className="space-y-3">
                  {approach.points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle 
                        size={16} 
                        className="mt-1 mr-3 flex-shrink-0"
                        style={{ color: approach.color }}
                      />
                      <span className="text-charcoal/70 text-sm">{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating accent */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-20"
                  style={{ backgroundColor: approach.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-charcoal/70 mb-6">
            Prêt à découvrir comment nous pouvons vous accompagner ?
          </p>
          <motion.button
            onClick={() => document.querySelector('#diag').scrollIntoView({ behavior: 'smooth' })}
            className="bg-deep-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-mint-teal transition-colors duration-200 flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer le diagnostic
            <ArrowRight size={16} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology 