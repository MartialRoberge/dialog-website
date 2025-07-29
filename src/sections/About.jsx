import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Users, TrendingUp, Award } from 'lucide-react'

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const About = () => {


  const stats = [
    { icon: Brain, number: 100, suffix: "%", label: "Taux de satisfaction client", color: "deep-teal" },
    { icon: Users, number: 200, suffix: "+", label: "Colaborateurs formés", color: "mint-teal" },
    { icon: TrendingUp, number: 30, suffix: "%", label: "Gain de productivité moyen", color: "soft-coral" },
    { icon: Award, number: 20, suffix: "+", label: "Solutions IA déployées", color: "peach-glow" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white via-snow-grey/30 to-mint-teal/10">
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
            L'expertise au service de votre transformation
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Une équipe d'experts passionnés qui transforment les défis d'IA en opportunités concrètes
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-deep-teal to-mint-teal rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 font-space"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Notre Mission
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Rendre l'intelligence artificielle accessible et bénéfique pour toutes les organisations, 
                en les accompagnant dans leur transformation avec des solutions sur-mesure et responsables.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-${stat.color}/10 flex items-center justify-center border-2 border-${stat.color}/20`}>
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${stat.color}`} />
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${stat.color} mb-1 sm:mb-2 font-space`}>
                  <Counter end={stat.number} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-charcoal/80 font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>



      </div>
    </section>
  )
}

export default About 