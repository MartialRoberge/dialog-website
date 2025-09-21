import { useState, useCallback } from 'react'

export const useDiag = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(null)

  const questions = [
    {
      id: 1,
      question: "Quelle est la maturité digitale de votre entreprise ?",
      options: [
        { value: "basic", label: "Basique - Processus principalement manuels", points: 1 },
        { value: "intermediate", label: "Intermédiaire - Quelques outils digitaux", points: 2 },
        { value: "advanced", label: "Avancée - Écosystème digital intégré", points: 3 },
        { value: "expert", label: "Expert - IA déjà utilisée ponctuellement", points: 4 }
      ],
      feedback: {
        basic: { emoji: "🌱", color: "text-soft-coral", message: "Excellent potentiel d'amélioration !" },
        intermediate: { emoji: "🚀", color: "text-mint-teal", message: "Bonne base pour l'IA générative" },
        advanced: { emoji: "⚡", color: "text-deep-teal", message: "Parfait pour un déploiement rapide" },
        expert: { emoji: "🎯", color: "text-peach-glow", message: "Prêt pour l'industrialisation" }
      }
    },
    {
      id: 2,
      question: "Quel est votre principal défi opérationnel ?",
      options: [
        { value: "efficiency", label: "Améliorer l'efficacité des processus", points: 4 },
        { value: "customer", label: "Optimiser l'expérience client", points: 3 },
        { value: "innovation", label: "Accélérer l'innovation produit", points: 2 },
        { value: "costs", label: "Réduire les coûts opérationnels", points: 4 }
      ],
      feedback: {
        efficiency: { emoji: "⚡", color: "text-deep-teal", message: "L'IA peut booster vos processus" },
        customer: { emoji: "🎯", color: "text-mint-teal", message: "Personnalisation IA = satisfaction client" },
        innovation: { emoji: "🚀", color: "text-soft-coral", message: "L'IA générative stimule la créativité" },
        costs: { emoji: "💰", color: "text-peach-glow", message: "Automatisation = économies immédiates" }
      }
    },
    {
      id: 3,
      question: "Quelle est la taille de votre équipe IT ?",
      options: [
        { value: "small", label: "1-10 personnes", points: 2 },
        { value: "medium", label: "11-50 personnes", points: 3 },
        { value: "large", label: "51-200 personnes", points: 4 },
        { value: "enterprise", label: "200+ personnes", points: 4 }
      ],
      feedback: {
        small: { emoji: "👥", color: "text-soft-coral", message: "Approche agile recommandée" },
        medium: { emoji: "🏢", color: "text-mint-teal", message: "Équipe idéale pour l'IA générative" },
        large: { emoji: "🌟", color: "text-deep-teal", message: "Capacité d'adoption élevée" },
        enterprise: { emoji: "🏆", color: "text-peach-glow", message: "Infrastructure prête pour l'IA" }
      }
    },
    {
      id: 4,
      question: "Quel est votre budget annuel pour l'innovation tech ?",
      options: [
        { value: "low", label: "< 100K€", points: 1 },
        { value: "medium", label: "100K€ - 500K€", points: 2 },
        { value: "high", label: "500K€ - 2M€", points: 3 },
        { value: "enterprise", label: "> 2M€", points: 4 }
      ],
      feedback: {
        low: { emoji: "💡", color: "text-soft-coral", message: "Démarrage par des POC ciblés" },
        medium: { emoji: "🎯", color: "text-mint-teal", message: "Budget parfait pour une première phase" },
        high: { emoji: "🚀", color: "text-deep-teal", message: "Déploiement complet possible" },
        enterprise: { emoji: "🏆", color: "text-peach-glow", message: "Transformation à grande échelle" }
      }
    },
    {
      id: 5,
      question: "Quelle est votre urgence de déploiement ?",
      options: [
        { value: "asap", label: "Immédiate (< 3 mois)", points: 4 },
        { value: "short", label: "Court terme (3-6 mois)", points: 3 },
        { value: "medium", label: "Moyen terme (6-12 mois)", points: 2 },
        { value: "long", label: "Long terme (> 12 mois)", points: 1 }
      ],
      feedback: {
        asap: { emoji: "⚡", color: "text-deep-teal", message: "Approche sprint recommandée" },
        short: { emoji: "🎯", color: "text-mint-teal", message: "Calendrier optimal pour la réussite" },
        medium: { emoji: "🚀", color: "text-soft-coral", message: "Temps idéal pour une transformation" },
        long: { emoji: "🌱", color: "text-peach-glow", message: "Préparation et formation approfondies" }
      }
    }
  ]

  const calculateScore = useCallback((userAnswers) => {
    const totalPoints = Object.values(userAnswers).reduce((sum, answer) => {
      const question = questions.find(q => q.id === answer.questionId)
      const option = question?.options.find(opt => opt.value === answer.value)
      return sum + (option?.points || 0)
    }, 0)

    const maxPoints = questions.length * 4
    const percentage = Math.round((totalPoints / maxPoints) * 100)
    
    let level = ''
    let recommendation = ''
    
    if (percentage >= 80) {
      level = 'Expert'
      recommendation = 'Vous êtes prêt pour un déploiement IA à grande échelle. Contactez-nous pour une stratégie d\'industrialisation.'
    } else if (percentage >= 60) {
      level = 'Avancé'
      recommendation = 'Votre organisation a un fort potentiel IA. Une approche structurée maximisera votre ROI.'
    } else if (percentage >= 40) {
      level = 'Intermédiaire'
      recommendation = 'Vous avez les bases pour démarrer. Commençons par des POC ciblés à fort impact.'
    } else {
      level = 'Débutant'
      recommendation = 'Parfait pour débuter ! Une approche progressive vous garantira le succès.'
    }

    return {
      points: totalPoints,
      maxPoints,
      percentage,
      level,
      recommendation
    }
  }, [questions])

  const answerQuestion = useCallback((questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { questionId, value }
    }))
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Quiz completed
      const finalScore = calculateScore(answers)
      setScore(finalScore)
      setIsCompleted(true)
    }
  }, [currentStep, questions.length, answers, calculateScore])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const resetDiag = useCallback(() => {
    setCurrentStep(0)
    setAnswers({})
    setIsCompleted(false)
    setScore(null)
  }, [])

  const getCurrentQuestion = useCallback(() => {
    return questions[currentStep]
  }, [currentStep, questions])

  const getProgress = useCallback(() => {
    return isCompleted ? 100 : Math.round(((currentStep + 1) / questions.length) * 100)
  }, [currentStep, questions.length, isCompleted])

  const getCurrentAnswer = useCallback(() => {
    const question = getCurrentQuestion()
    return question ? answers[question.id] : null
  }, [getCurrentQuestion, answers])

  const getFeedback = useCallback((questionId, value) => {
    const question = questions.find(q => q.id === questionId)
    return question?.feedback[value] || null
  }, [questions])

  return {
    currentStep,
    answers,
    isCompleted,
    score,
    questions,
    answerQuestion,
    nextStep,
    prevStep,
    resetDiag,
    getCurrentQuestion,
    getProgress,
    getCurrentAnswer,
    getFeedback
  }
} 