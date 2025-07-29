import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Dialog a transformé notre approche de la relation client. Grâce à leur solution IA, nous avons réduit de 40% le temps de traitement des demandes tout en améliorant la satisfaction client.",
      author: "Marie Dubois",
      position: "Directrice Expérience Client",
      company: "TechCorp France",
      rating: 5,
      industry: "SaaS B2B",
      results: "40% gain de temps"
    },
    {
      id: 2,
      quote: "L'équipe Dialog nous a accompagnés avec une expertise remarquable. Leur méthode en 4 phases nous a permis de déployer l'IA générative en 6 mois avec un ROI immédiat.",
      author: "Jean-Pierre Martin",
      position: "CDO",
      company: "Retail Solutions",
      rating: 5,
      industry: "Retail",
      results: "ROI en 6 mois"
    },
    {
      id: 3,
      quote: "Dialog ne se contente pas de livrer de la technologie, ils nous forment et nous rendent autonomes. Nos équipes sont maintenant expertes en IA générative.",
      author: "Sophie Chen",
      position: "Head of Innovation",
      company: "FinanceNext",
      rating: 5,
      industry: "FinTech",
      results: "Équipes autonomes"
    },
    {
      id: 4,
      quote: "Grâce à Dialog, nous avons automatisé 60% de nos processus documentaires. L'impact sur notre productivité est spectaculaire.",
      author: "Thomas Moreau",
      position: "Directeur Opérations",
      company: "LegalTech Pro",
      rating: 5,
      industry: "LegalTech",
      results: "60% automatisation"
    }
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
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
            Ils nous font confiance
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Découvrez comment nos clients ont transformé leur business 
            grâce à l'IA générative
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full"
              >
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg relative overflow-hidden h-full">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <Quote size={80} className="text-deep-teal" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-soft-coral fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-charcoal leading-relaxed mb-6 flex-grow font-inter text-lg">
                      "{testimonials[currentSlide].quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="font-space font-bold text-lg text-charcoal mb-1">
                        {testimonials[currentSlide].author}
                      </div>
                      <div className="text-deep-teal font-semibold text-sm mb-1">
                        {testimonials[currentSlide].position}
                      </div>
                      <div className="text-charcoal/70 text-sm mb-3">
                        {testimonials[currentSlide].company}
                      </div>
                      
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-snow-grey rounded-md px-2 py-1">
                          <div className="text-xs font-semibold text-deep-teal">
                            {testimonials[currentSlide].industry}
                          </div>
                        </div>
                        <div className="bg-mint-teal rounded-md px-2 py-1">
                          <div className="text-xs font-semibold text-white">
                            {testimonials[currentSlide].results}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-12 space-x-4">
          <motion.button
            onClick={prevSlide}
            className="bg-deep-teal text-white rounded-full p-3 hover:bg-mint-teal transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Dots with progress */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-deep-teal rounded-full' 
                    : 'w-3 h-3 bg-charcoal/20 rounded-full hover:bg-charcoal/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            className="bg-deep-teal text-white rounded-full p-3 hover:bg-mint-teal transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "98%", label: "Satisfaction client" },
            { value: "6 mois", label: "ROI moyen" },
            { value: "50+", label: "Projets livrés" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-jetbrains font-bold text-4xl text-deep-teal mb-2">
                {stat.value}
              </div>
              <div className="text-charcoal/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 