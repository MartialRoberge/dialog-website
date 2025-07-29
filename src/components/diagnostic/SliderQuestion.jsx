import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SliderQuestion = ({ question, responses, onAnswer }) => {
  const [values, setValues] = useState(() => {
    const initialValues = {}
    question.sliders?.forEach(slider => {
      initialValues[slider.name] = responses?.[slider.name] ?? slider.defaultValue ?? 30
    })
    return initialValues
  })

  const handleSliderChange = (name, value) => {
    try {
      const newValues = { ...values, [name]: value }
      setValues(newValues)
      onAnswer(question.id, newValues)
    } catch (error) {
      console.error('Erreur SliderQuestion:', error)
    }
  }

  const getSliderColor = (value) => {
    if (value >= 80) return '#10B981' // Vert
    if (value >= 60) return '#3B82F6' // Bleu
    if (value >= 40) return '#F59E0B' // Orange
    return '#EF4444' // Rouge
  }

  const getSliderLabel = (value) => {
    if (value >= 80) return 'Expert'
    if (value >= 60) return 'Avancé'
    if (value >= 40) return 'Intermédiaire'
    return 'Débutant'
  }

  // Protection contre les données manquantes
  if (!question?.sliders || !Array.isArray(question.sliders)) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">Erreur de configuration des jauges</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {question.sliders.map((slider, index) => (
        <motion.div
          key={slider.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-deep-teal/30 transition-all duration-300"
        >
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-charcoal">
                {slider.label}
              </h4>
              <div className="flex items-center space-x-3">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${getSliderColor(values[slider.name])}20`,
                    color: getSliderColor(values[slider.name])
                  }}
                >
                  {getSliderLabel(values[slider.name])}
                </span>
                <span 
                  className="text-2xl font-bold font-jetbrains"
                  style={{ color: getSliderColor(values[slider.name]) }}
                >
                  {values[slider.name]}{slider.unit || '%'}
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {slider.description}
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Track */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              {/* Progress */}
              <motion.div
                className="h-full rounded-full"
                style={{ 
                  width: `${values[slider.name]}%`,
                  backgroundColor: getSliderColor(values[slider.name])
                }}
                initial={{ width: 0 }}
                animate={{ width: `${values[slider.name]}%` }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Graduations */}
              <div className="absolute inset-0 flex justify-between items-center px-1">
                {[0, 25, 50, 75, 100].map(mark => (
                  <div 
                    key={mark}
                    className="w-0.5 h-2 bg-white/50 rounded-full"
                    style={{ opacity: values[slider.name] > mark ? 0.3 : 0.8 }}
                  />
                ))}
              </div>
            </div>

            {/* Input range */}
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={values[slider.name]}
              onChange={(e) => handleSliderChange(slider.name, parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {/* Thumb */}
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-3 border-white shadow-lg pointer-events-none"
              style={{ 
                left: `calc(${values[slider.name]}% - 12px)`,
                backgroundColor: getSliderColor(values[slider.name])
              }}
              animate={{ 
                left: `calc(${values[slider.name]}% - 12px)`,
                backgroundColor: getSliderColor(values[slider.name])
              }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-3 text-xs text-gray-500">
            <span>Débutant</span>
            <span>Expert</span>
          </div>

          {/* Quick actions */}
          <div className="flex justify-center space-x-2 mt-4">
            {[
              { label: 'Débutant', value: 20 },
              { label: 'Intermédiaire', value: 50 },
              { label: 'Avancé', value: 75 },
              { label: 'Expert', value: 95 }
            ].map(preset => (
              <button
                key={preset.label}
                onClick={() => handleSliderChange(slider.name, preset.value)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                  Math.abs(values[slider.name] - preset.value) <= 10
                    ? 'bg-deep-teal text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center pt-4"
      >
        <div className="flex space-x-2">
          {question.sliders.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-deep-teal opacity-60"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SliderQuestion 