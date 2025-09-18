import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from 'lucide-react'
import VantaBackground from '../components/VantaBackground'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const CTA = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sector: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Configuration EmailJS avec vos vrais identifiants
  const CONFIG = {
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.contactTemplateId,
    publicKey: EMAILJS_CONFIG.publicKey
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Initialiser EmailJS avec la publicKey
      emailjs.init({
        publicKey: CONFIG.publicKey
      })

      // Préparer les données pour EmailJS
      const templateParams = {
        to_email: 'contact@dialog-ia.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        sector: formData.sector,
        message: formData.message,
        reply_to: formData.email,
        // Données supplémentaires pour debug
        timestamp: new Date().toLocaleString('fr-FR'),
        source: 'dialog-ia.com'
      }

      console.log('🚀 Envoi EmailJS avec config:', CONFIG)
      console.log('📧 Données template:', templateParams)
      console.log('🔧 Configuration complète:', {
        serviceId: CONFIG.serviceId,
        templateId: CONFIG.templateId,
        publicKey: CONFIG.publicKey.substring(0, 5) + '...' // Masquer la clé pour sécurité
      })

      // Envoyer l'email via EmailJS (sans passer publicKey en param, déjà dans init)
      const response = await emailjs.send(
        CONFIG.serviceId,
        CONFIG.templateId,
        templateParams
      )

      console.log('✅ Réponse EmailJS:', response)

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          sector: '',
          message: ''
        })
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }

    } catch (error) {
      console.error('❌ Erreur EmailJS complète:', error)
      console.error('📋 Détails de l\'erreur:', {
        status: error.status,
        text: error.text,
        message: error.message,
        service: CONFIG.serviceId,
        template: CONFIG.templateId
      })
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cta" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Vanta Background Effect */}
      <VantaBackground />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
          
          {/* Header avec Logo */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            {/* Logo Dialog */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 p-3 sm:p-4 shadow-lg">
              <img
                src="/logo-dialog.png"
                alt="Dialog"
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="font-space font-bold text-2xl sm:text-3xl lg:text-4xl text-deep-teal mb-4 sm:mb-6">
              Parlons de vos enjeux IA
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              Dites-nous vos priorités, nous vous répondrons rapidement.
            </p>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8"
          >
            {/* Prénom & Nom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
                  <User className="h-4 w-4" />
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 text-charcoal placeholder-charcoal/50 bg-white/90"
                  placeholder="Votre prénom"
                />
              </div>

              <div
                className="space-y-2"
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
                  <User className="h-4 w-4" />
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 text-charcoal placeholder-charcoal/50 bg-white/90"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Email */}
            <div
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
                <Mail className="h-4 w-4" />
                Email professionnel
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 text-charcoal placeholder-charcoal/50 bg-white/90"
                placeholder="votre.email@entreprise.com"
              />
            </div>

            {/* Secteur d'activité */}
            <div
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
                <Building className="h-4 w-4" />
                Secteur d'activité
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 text-charcoal bg-white/90 cursor-pointer"
              >
                <option value="">Sélectionnez votre secteur</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-sm font-semibold text-deep-teal">
                <MessageSquare className="h-4 w-4" />
                Parlez-nous de vos problématiques
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all duration-200 text-charcoal placeholder-charcoal/50 bg-white/90 resize-none"
                placeholder="Décrivez vos défis, objectifs et comment l'IA pourrait transformer votre organisation..."
              />
            </div>

            {/* Bouton Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-4 sm:py-5 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg
                transition-all duration-300 shadow-lg hover:shadow-xl
                transform hover:scale-[1.02] active:scale-[0.98]
                flex items-center justify-center gap-3
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-deep-teal to-mint-teal hover:from-mint-teal hover:to-soft-coral text-white'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>

            {/* Messages de statut */}
            {submitStatus && (
              <div
                className={`
                  p-4 rounded-xl flex items-center gap-3 text-sm font-medium
                  ${submitStatus === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                  }
                `}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>✅ Message envoyé avec succès ! Nous vous recontacterons rapidement.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <span>❌ Erreur lors de l'envoi. Vérifiez la configuration EmailJS ou réessayez.</span>
                  </>
                )}
              </div>
            )}
          </form>

          {/* Footer du formulaire */}
          <div
            className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200 text-center"
          >
            <p className="text-xs sm:text-sm text-charcoal/60">
              Réponse garantie sous <span className="font-semibold text-deep-teal">72h</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA 