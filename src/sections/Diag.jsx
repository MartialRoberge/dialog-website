import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Mail, 
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  Brain,
  Sparkles,
  ArrowRight,
  Send,
  User,
  Building,
  MessageSquare,
  Zap
} from 'lucide-react'
import { DIAGNOSTIC_QUESTIONS } from '../data/diagnosticQuestions'
import { analyzeResponses, generateEmailContent, generateNotificationEmail } from '../services/openai'
import DiagnosticReport from '../components/diagnostic/DiagnosticReport'
import SliderQuestion from '../components/diagnostic/SliderQuestion'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Diag = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState({})
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sector: '',
    company: '',
    companySize: '',
    role: ''
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [emailStatus, setEmailStatus] = useState(null) // 'sending' | 'success' | 'error' | null
  const [shouldSendEmail, setShouldSendEmail] = useState(false) // Nouveau state pour déclencher l'envoi

  // useEffect pour déclencher l'envoi automatique
  useEffect(() => {
    if (shouldSendEmail && analysis && userProfile.email && !emailStatus) {
      console.log('🚀 === DÉCLENCHEMENT ENVOI AUTOMATIQUE ===')
      const sendEmail = async () => {
        try {
          await sendReportByEmail()
        } catch (error) {
          console.error('❌ Erreur envoi automatique:', error)
        }
      }
      // Délai de 2 secondes pour s'assurer que tout est prêt
      setTimeout(sendEmail, 2000)
      setShouldSendEmail(false) // Reset pour éviter les envois multiples
    }
  }, [shouldSendEmail, analysis, userProfile.email, emailStatus])

  // Fonction pour scroller vers le haut de la section
  const scrollToTop = () => {
    const diagSection = document.getElementById('diag')
    if (diagSection) {
      diagSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentStep] || null
  const totalSteps = DIAGNOSTIC_QUESTIONS.length + 1 // +1 pour le formulaire final
  const progress = ((currentStep) / totalSteps) * 100

  // Gérer les réponses
  const handleAnswer = (questionId, answer) => {
    try {
      console.log('📝 Réponse reçue:', questionId, answer)
      setResponses(prev => ({
        ...prev,
        [questionId]: answer
      }))
    } catch (error) {
      console.error('❌ Erreur handleAnswer:', error)
    }
  }

  // Navigation
  const handleNext = async () => {
    console.log('🚀 Navigation - Étape actuelle:', currentStep, 'Total:', DIAGNOSTIC_QUESTIONS.length)
    
    try {
      if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
        console.log('➡️ Passage à l\'étape suivante')
        setCurrentStep(currentStep + 1)
      } else if (currentStep === DIAGNOSTIC_QUESTIONS.length - 1) {
        console.log('📧 Passage au formulaire email')
        setCurrentStep(currentStep + 1)
      } else {
        console.log('🤖 Lancement de l\'analyse Dialog IA')
        // Scroller vers le haut de la section au lancement de l'analyse
        scrollToTop()
        await runAnalysis()
      }
    } catch (error) {
      console.error('❌ Erreur navigation:', error)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setResponses({})
    setUserProfile({
      firstName: '',
      lastName: '',
      email: '',
      sector: '',
      company: '',
      companySize: '',
      role: ''
    })
    setAnalysis(null)
    setIsCompleted(false)
  }

  // Lancer l'analyse Dialog IA
  const runAnalysis = async () => {
    setIsAnalyzing(true)
    
    try {
      if (typeof console !== 'undefined') {
        console.log('🚀 Lancement analyse Dialog IA...', { responses, userProfile })
      }
      
      const result = await analyzeResponses(responses, userProfile)
      setAnalysis(result)
      setIsCompleted(true)
      
      // Scroller vers le haut pour voir le résultat
      setTimeout(() => scrollToTop(), 100)
      
      if (typeof console !== 'undefined') {
        console.log('✅ Analyse terminée:', result)
      }
      
      // 🚀 ENVOI AUTOMATIQUE DU RAPPORT PAR EMAIL
      console.log('📧 Envoi automatique du rapport...')
      setShouldSendEmail(true) // Déclencher l'envoi automatique
      
    } catch (error) {
      if (typeof console !== 'undefined') {
        console.error('❌ Erreur analyse:', error)
      }
      // Fallback avec analyse par défaut en cas d'erreur
      const fallbackAnalysis = {
        score_global: 75,
        niveau_maturite: "Intermédiaire",
        profil_entreprise: {
          secteur: userProfile.sector || 'Non spécifié',
          taille: userProfile.companySize || 'Non spécifié',
          maturite_tech: 70,
          maturite_business: 75,
          maturite_humaine: 80
        },
        opportunites: [
          {
            domaine: "Stratégique",
            titre: "Feuille de route IA",
            description: "Définir une stratégie claire d'adoption de l'IA",
            impact: "Fort",
            difficulte: "Moyenne",
            timeline: "3-6 mois"
          }
        ],
        recommandations_dialog: [
          {
            service: "Feuille de route stratégique",
            priorite: "Haute",
            justification: "Structurer l'approche IA de votre entreprise",
            livrable: "Roadmap personnalisée 6-18 mois"
          }
        ],
        score_details: {
          leadership: 75,
          data_readiness: 60,
          culture_innovation: 80,
          competences_tech: 55
        },
        next_steps: [
          "Audit de maturité IA",
          "Identification des cas d'usage",
          "Formation des équipes"
        ],
        insights: {
          forces: ["Volonté d'innovation", "Leadership engagé"],
          defis: ["Compétences techniques", "Données à structurer"],
          quick_wins: ["PoC simple", "Formation équipes"]
        }
      }
      setAnalysis(fallbackAnalysis)
      setIsCompleted(true)
      
      // Scroller vers le haut pour voir le résultat
      setTimeout(() => scrollToTop(), 100)
      
      // 🚀 ENVOI AUTOMATIQUE DU RAPPORT PAR EMAIL (même en cas d'erreur)
      console.log('📧 Envoi automatique du rapport (fallback)...')
      setShouldSendEmail(true) // Déclencher l'envoi automatique même en cas d'erreur
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Envoyer les emails (rapport client + notification Martial)
  const sendReportByEmail = async () => {
    console.log('🚀 === DÉBUT ENVOI EMAIL ===')
    console.log('📊 Analysis:', analysis)
    console.log('👤 UserProfile:', userProfile)
    
    if (!analysis || !userProfile.email) {
      console.error('❌ Données manquantes pour l\'envoi:', { analysis: !!analysis, email: !!userProfile.email })
      return
    }

    // Éviter les envois multiples
    if (emailStatus === 'sending' || emailStatus === 'success') {
      console.log('⚠️ Envoi déjà en cours ou terminé')
      return
    }

    setEmailStatus('sending')

    try {
      // Initialiser EmailJS
      emailjs.init({
        publicKey: EMAILJS_CONFIG.publicKey || 'test_public_key'
      })

      // Vérification de la configuration EmailJS
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.clientTemplateId || !EMAILJS_CONFIG.notificationTemplateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('Configuration EmailJS manquante - vérifiez service_id, templates et public_key')
      }

      console.log('📧 Configuration EmailJS:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        clientTemplateId: EMAILJS_CONFIG.clientTemplateId,
        notificationTemplateId: EMAILJS_CONFIG.notificationTemplateId,
        publicKey: EMAILJS_CONFIG.publicKey?.substring(0, 10) + '...'
      })

      // === EMAIL 1: RAPPORT AU CLIENT ===
      const clientEmailContent = generateEmailContent(analysis, userProfile)
      
      const clientTemplateParams = {
        to_email: userProfile.email,
        from_name: 'Dialog IA',
        reply_to: 'martial@lexiapro.fr',
        subject: `Votre diagnostic IA personnalisé - ${userProfile.firstName} ${userProfile.lastName}`,
        message: clientEmailContent,
        user_name: `${userProfile.firstName} ${userProfile.lastName}`
      }

      console.log('📧 === ENVOI EMAIL CLIENT ===')
      console.log('📧 Destinataire:', userProfile.email)
      console.log('📧 Template ID:', EMAILJS_CONFIG.clientTemplateId)
      console.log('📧 Paramètres:', clientTemplateParams)

      const clientResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.clientTemplateId,
        clientTemplateParams
      )

      console.log('✅ Email CLIENT envoyé avec succès:', clientResponse)

      // === EMAIL 2: NOTIFICATION À MARTIAL ===
      const notificationContent = generateNotificationEmail(analysis, userProfile)
      
      const notificationParams = {
        to_email: 'martial@lexiapro.fr',
        from_name: `${userProfile.firstName} ${userProfile.lastName}`,
        from_email: userProfile.email,
        company: userProfile.company || 'Non spécifiée',
        sector: analysis.profil_entreprise?.secteur || userProfile.sector,
        niveau: analysis.niveau_maturite,
        subject: `🔥 Nouveau lead qualifié - ${userProfile.firstName} ${userProfile.lastName}`,
        message: notificationContent
      }

      console.log('🔥 === ENVOI EMAIL MARTIAL ===')
      console.log('🔥 Destinataire: martial@lexiapro.fr')
      console.log('🔥 Template ID:', EMAILJS_CONFIG.notificationTemplateId)
      console.log('🔥 Paramètres:', notificationParams)

      const notificationResponse = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.notificationTemplateId,
        notificationParams
      )

      console.log('✅ Email MARTIAL envoyé avec succès:', notificationResponse)

      setEmailStatus('success')
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setEmailStatus(null), 5000)
      
    } catch (error) {
      console.error('❌ Erreur envoi email:', error)
      
      let errorMessage = '❌ Erreur lors de l\'envoi du rapport.'
      
      if (error.message?.includes('Configuration EmailJS manquante')) {
        errorMessage = '⚙️ Configuration EmailJS incomplète. Contactez l\'administrateur.'
      } else if (error.status === 400) {
        errorMessage = '📧 Erreur EmailJS : Vérifiez la configuration du template.'
      } else if (error.status === 401) {
        errorMessage = '🔑 Erreur EmailJS : Clé d\'API invalide.'
      } else if (error.text?.includes('template_id')) {
        errorMessage = '📝 Template EmailJS introuvable. Vérifiez l\'ID du template.'
      } else if (error.text?.includes('service_id')) {
        errorMessage = '🔧 Service EmailJS introuvable. Vérifiez l\'ID du service.'
      }
      
      setEmailStatus('error')
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setEmailStatus(null), 5000)
    }
  }

  // Rendu du rapport final
  if (isCompleted && analysis) {
    return (
      <section id="diag" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-snow-grey via-white to-mint-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiagnosticReport 
            analysis={analysis}
            userProfile={userProfile}
            onSendEmail={sendReportByEmail}
            emailStatus={emailStatus}
          />
          
          {/* Action restart */}
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 border-2 border-deep-teal text-deep-teal rounded-xl font-semibold hover:bg-deep-teal hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw size={20} />
              Refaire le diagnostic
            </motion.button>
          </div>
        </div>
      </section>
    )
  }

  // Écran d'analyse en cours
  if (isAnalyzing) {
    return (
      <section id="diag" className="py-20 bg-gradient-to-br from-deep-teal via-mint-teal to-soft-coral min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
              <Brain size={64} className="text-white" />
            </div>
            
            <h2 className="text-4xl font-bold font-space mb-4">
              🧠 Notre agent IA analyse vos réponses...
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Génération de votre diagnostic personnalisé et de recommandations sur-mesure
            </p>

            {/* Barre de progression */}
            <div className="w-full max-w-md mx-auto">
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-white h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 25, ease: "easeInOut" }}
                />
              </div>
            </div>

            <div className="space-y-4 text-white/80">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle size={20} />
                <span>Analyse de votre stack technique et architecture</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4 }}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle size={20} />
                <span>Dissection de vos processus métier chronophages</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 8 }}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle size={20} />
                <span>Identification d'opportunités IA ultra-spécifiques</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 12 }}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle size={20} />
                <span>Génération de recommandations Dialog sur-mesure</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="diag" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-snow-grey via-white to-mint-teal/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-deep-teal to-mint-teal text-white px-6 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={20} />
            <span className="font-semibold">Powered by Dialog IA</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal mb-6 font-space">
            Diagnostic IA
          </h2>
          <p className="text-lg sm:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez votre potentiel IA avec une analyse approfondie par intelligence artificielle
          </p>
        </motion.div>

        {/* Container principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Barre de progression */}
          <div className="bg-gray-100 h-2">
            <motion.div
              className="bg-gradient-to-r from-deep-teal to-mint-teal h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            
            {/* Indicateur d'étape */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-charcoal/60">
                Étape {currentStep + 1} sur {totalSteps}
              </div>
              <div className="font-jetbrains font-bold text-deep-teal text-xl">
                {Math.round(progress)}%
              </div>
            </div>

            {/* Questions dynamiques */}
            <AnimatePresence mode="wait">
              {currentStep < DIAGNOSTIC_QUESTIONS.length ? (
                <QuestionRenderer 
                  key={currentStep}
                  question={currentQuestion}
                  responses={responses}
                  onAnswer={handleAnswer}
                />
              ) : (
                // Formulaire de contact final
                <EmailFormStep 
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                />
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <motion.button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  currentStep === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-charcoal hover:text-deep-teal hover:bg-deep-teal/5'
                }`}
                whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
              >
                <ChevronLeft size={20} />
                Précédent
              </motion.button>

              <motion.button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-gradient-to-r from-deep-teal to-mint-teal text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={isStepValid() ? { scale: 1.05 } : {}}
                whileTap={isStepValid() ? { scale: 0.95 } : {}}
              >
                {currentStep === totalSteps - 1 ? (
                  <>
                    <Brain size={20} />
                    Lancer l'analyse Dialog IA
                  </>
                ) : (
                  <>
                    Suivant
                    <ChevronRight size={20} />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Indicateurs de bénéfices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
                      {[
              {
                icon: Brain,
                title: "Analyse Dialog IA",
                description: "Intelligence artificielle avancée pour un diagnostic précis"
              },
            {
              icon: Target,
              title: "Recommandations sur-mesure",
              description: "Conseils personnalisés selon votre profil d'entreprise"
            },
            {
              icon: TrendingUp,
              title: "Plan d'action concret",
              description: "Feuille de route adaptée à vos objectifs et ressources"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100 hover:border-deep-teal/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-deep-teal to-mint-teal rounded-2xl mb-4">
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="font-space font-bold text-lg text-charcoal mb-2">
                {benefit.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )

  // Fonction pour valider si l'étape actuelle est complète
  function isStepValid() {
    console.log('🔍 Validation étape:', currentStep, currentQuestion?.type, responses)
    
    try {
      if (currentStep < DIAGNOSTIC_QUESTIONS.length) {
        if (!currentQuestion?.id) {
          console.log('❌ Question manquante')
          return false
        }
        
        const response = responses[currentQuestion.id]
        console.log('📋 Réponse actuelle:', response)
        
        if (!response) {
          console.log('❌ Aucune réponse')
          return false
        }
        
        // Validation simplifiée par type
        if (currentQuestion.type === 'form') {
          const requiredFields = currentQuestion.fields?.filter(f => f.required) || []
          const isValid = requiredFields.every(field => {
            const value = response[field.name]
            const valid = value && value.trim() !== ''
            console.log(`📝 Field ${field.name}: ${value} -> ${valid}`)
            return valid
          })
          console.log('✅ Form valid:', isValid)
          return isValid
        }
        
        if (currentQuestion.type === 'multiple_choice') {
          const isValid = Array.isArray(response) && response.length > 0
          console.log('✅ Multiple choice valid:', isValid)
          return isValid
        }
        
        if (currentQuestion.type === 'slider') {
          // Pour les sliders, vérifier qu'au moins une valeur est définie
          const isValid = Object.keys(response).length > 0
          console.log('✅ Slider valid:', isValid)
          return isValid
        }
        
        // Par défaut, considérer comme valide si il y a une réponse
        console.log('✅ Default valid: true')
        return true
        
      } else {
        // Validation du formulaire email avec vérification du format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const isEmailValid = emailRegex.test(userProfile.email)
        const isValid = userProfile.firstName && userProfile.lastName && userProfile.email && isEmailValid && userProfile.sector
        
        console.log('📧 Email form valid:', isValid, userProfile)
        
        if (!isEmailValid && userProfile.email) {
          console.log('❌ Format email invalide:', userProfile.email)
        }
        
        return isValid
      }
    } catch (error) {
      console.error('❌ Erreur validation:', error)
      return false
    }
  }
}

// Composant pour rendre les différents types de questions
const QuestionRenderer = ({ question, responses, onAnswer }) => {
  // Protection contre les questions nulles
  if (!question || !question.id) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">Erreur de chargement de la question</p>
      </div>
    )
  }

  const response = responses[question.id] || {}

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header de la question */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 font-space">
          {question.title || 'Question'}
        </h3>
        <p className="text-charcoal/70 text-lg">
          {question.subtitle || ''}
        </p>
      </div>

      {/* Rendu selon le type */}
      {question.type === 'slider' && (
        <SliderQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}

      {question.type === 'form' && (
        <FormQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}

      {question.type === 'multiple_choice' && (
        <MultipleChoiceQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}

      {question.type === 'open_text' && (
        <OpenTextQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}

      {question.type === 'mixed' && (
        <MixedQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}

      {question.type === 'ranking' && (
        <RankingQuestion 
          question={question}
          responses={response}
          onAnswer={onAnswer}
        />
      )}
    </motion.div>
  )
}

// Composant simple pour les questions de type formulaire
const FormQuestion = ({ question, responses, onAnswer }) => {
  console.log('🏗️ FormQuestion render:', question, responses)
  
  // Initialisation simplifiée
  const [values, setValues] = useState(responses || {})

  const handleChange = (name, value) => {
    console.log('📝 FormQuestion change:', name, value)
    const newValues = { ...values, [name]: value }
    setValues(newValues)
    onAnswer(question.id, newValues)
  }

  // Protection robuste
  if (!question || !question.fields) {
    console.log('❌ FormQuestion: question ou fields manquant')
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">Erreur: Question non trouvée</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {question.fields.map((field, index) => {
        if (!field || !field.name) {
          console.log('❌ Field invalide:', field)
          return null
        }
        
        return (
          <div key={field.name} className="space-y-2">
            <label className="text-sm font-semibold text-deep-teal">
              {field.label || 'Label manquant'}
            </label>
            
            {field.type === 'text' && (
              <input
                type="text"
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder || ''}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal transition-all duration-200"
              />
            )}

            {field.type === 'select' && field.options && (
              <select
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal transition-all duration-200"
              >
                <option value="">Sélectionnez...</option>
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Composant pour les choix multiples
const MultipleChoiceQuestion = ({ question, responses, onAnswer }) => {
  // 🔧 CORRECTION : Toujours s'assurer que c'est un array
  const [selected, setSelected] = useState(() => {
    if (Array.isArray(responses)) return responses
    return []
  })

  const handleSelect = (value) => {
    console.log('🎯 MultipleChoice select:', value, 'Current selected:', selected)
    
    let newSelected
    if (question.allowMultiple) {
      newSelected = selected.includes(value) 
        ? selected.filter(s => s !== value)
        : [...selected, value]
    } else {
      newSelected = [value]
    }
    
    console.log('✅ New selection:', newSelected)
    setSelected(newSelected)
    onAnswer(question.id, newSelected)
  }

  // Protection contre les données manquantes
  if (!question?.options || !Array.isArray(question.options)) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">Erreur de configuration des choix</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {question.options.map((option, index) => (
        <motion.button
          key={option.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => handleSelect(option.value)}
          className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
            selected.includes(option.value)
              ? 'border-deep-teal bg-deep-teal/5'
              : 'border-gray-200 hover:border-deep-teal/50'
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl">{option.icon}</span>
            <div>
              <h4 className="font-semibold text-lg text-charcoal mb-2">
                {option.label}
              </h4>
              <p className="text-gray-600 text-sm">
                {option.description}
              </p>
            </div>
            {selected.includes(option.value) && (
              <CheckCircle className="text-deep-teal ml-auto" size={24} />
            )}
          </div>
        </motion.button>
      ))}
    </div>
  )
}

// Composant pour les questions ouvertes
const OpenTextQuestion = ({ question, responses, onAnswer }) => {
  const [values, setValues] = useState(responses || {})

  const handleChange = (name, value) => {
    try {
      const newValues = { ...values, [name]: value }
      setValues(newValues)
      onAnswer(question.id, newValues)
    } catch (error) {
      console.error('Erreur OpenTextQuestion:', error)
    }
  }

  // Protection contre les données manquantes
  if (!question?.questions || !Array.isArray(question.questions)) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">Erreur de configuration des questions ouvertes</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {question.questions.map((q, index) => (
        <motion.div
          key={q.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-3"
        >
          <label className="flex items-center gap-2 text-lg font-semibold text-charcoal">
            <MessageSquare size={20} />
            {q.label}
          </label>
          
          <textarea
            value={values[q.name] || ''}
            onChange={(e) => handleChange(q.name, e.target.value)}
            placeholder={q.placeholder}
            rows={q.rows}
            maxLength={q.maxLength}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 resize-none"
          />
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>Soyez précis pour des recommandations personnalisées</span>
            <span>{(values[q.name] || '').length}/{q.maxLength}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Composant pour le formulaire email final
const EmailFormStep = ({ userProfile, setUserProfile }) => {
  const handleChange = (field, value) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const sectors = [
    'Luxe & Premium',
    'Vente & Retail', 
    'Industrie & Manufacturing',
    'Finance & Banque',
    'Santé & Pharmaceutique',
    'Tech & Digital',
    'Automobile',
    'Immobilier',
    'Éducation & Formation',
    'Énergie & Utilities',
    'Média & Communication',
    'Tourisme & Hôtellerie',
    'Conseil & Services',
    'Autre'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-charcoal mb-4 font-space">
          Recevez votre rapport personnalisé
        </h3>
        <p className="text-charcoal/70 text-lg">
          Dernière étape : vos coordonnées pour recevoir l'analyse complète
        </p>
        <div className="mt-4 p-4 bg-deep-teal/10 rounded-xl border border-deep-teal/20">
          <p className="text-deep-teal font-semibold text-sm">
            📧 <strong>Envoi automatique :</strong> Votre rapport sera envoyé automatiquement à votre email dans les 2 secondes suivant l'analyse !
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
            <User size={16} />
            Prénom
          </label>
          <input
            type="text"
            value={userProfile.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200"
            placeholder="Votre prénom"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
            <User size={16} />
            Nom
          </label>
          <input
            type="text"
            value={userProfile.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200"
            placeholder="Votre nom"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
            <Mail size={16} />
            Email professionnel
          </label>
          <input
            type="email"
            value={userProfile.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200"
            placeholder="votre.email@entreprise.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Veuillez entrer une adresse email valide"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
            <Building size={16} />
            Secteur d'activité
          </label>
          <select
            value={userProfile.sector}
            onChange={(e) => handleChange('sector', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200"
          >
            <option value="">Sélectionnez votre secteur</option>
            {sectors.map(sector => (
              <option key={sector} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-deep-teal/5 rounded-2xl p-6 border border-deep-teal/20">
        <div className="flex items-start gap-4">
          <Zap className="text-deep-teal mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-deep-teal mb-2">
              Ce que vous allez recevoir :
            </h4>
                         <ul className="text-sm text-charcoal/80 space-y-1">
               <li>• Analyse détaillée de votre stack tech et processus métier</li>
               <li>• Opportunités IA ultra-spécifiques à votre contexte</li>
               <li>• Recommandations Dialog sur-mesure et activables</li>
               <li>• Plan d'action concret avec ROI calculé</li>
               <li>• Quick wins identifiés selon votre urgence business</li>
             </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Composant pour les questions mixtes (radio + slider combinés)
const MixedQuestion = ({ question, responses, onAnswer }) => {
  const [values, setValues] = useState(responses)

  const handleChange = (name, value) => {
    const newValues = { ...values, [name]: value }
    setValues(newValues)
    onAnswer(question.id, newValues)
  }

  return (
    <div className="space-y-8">
      {question.fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-100"
        >
          <label className="block text-lg font-semibold text-charcoal mb-4">
            {field.label}
          </label>
          
          {field.description && (
            <p className="text-gray-600 text-sm mb-4">{field.description}</p>
          )}

          {field.type === 'radio' && (
            <div className="space-y-3">
              {field.options.map(option => (
                <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={values[field.name] === option.value}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-4 h-4 text-deep-teal focus:ring-deep-teal"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          )}

          {field.type === 'slider' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">0{field.unit}</span>
                <span className="font-bold text-deep-teal text-xl">
                  {values[field.name] || field.defaultValue || 0}{field.unit}
                </span>
                <span className="text-sm text-gray-600">100{field.unit}</span>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min={field.min || 0}
                  max={field.max || 100}
                  step={field.step || 5}
                  value={values[field.name] || field.defaultValue || 0}
                  onChange={(e) => handleChange(field.name, parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #0D9488 0%, #0D9488 ${values[field.name] || field.defaultValue || 0}%, #e5e7eb ${values[field.name] || field.defaultValue || 0}%, #e5e7eb 100%)`
                  }}
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Composant pour les questions de classement (drag & drop)
const RankingQuestion = ({ question, responses, onAnswer }) => {
  const [rankedItems, setRankedItems] = useState(responses || question.items)

  const handleReorder = (fromIndex, toIndex) => {
    const newItems = [...rankedItems]
    const [removed] = newItems.splice(fromIndex, 1)
    newItems.splice(toIndex, 0, removed)
    setRankedItems(newItems)
    onAnswer(question.id, newItems)
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Glissez-déposez les éléments pour les classer par ordre de priorité
        </p>
      </div>

      {rankedItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-deep-teal/50 transition-all duration-300 cursor-move"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('text/plain', index.toString())}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'))
            handleReorder(fromIndex, index)
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-charcoal mb-1">
                {item.label}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-gray-400">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v2H8V4zm0 4h4v2H8V8zm0 4h4v2H8v-2z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Diag 