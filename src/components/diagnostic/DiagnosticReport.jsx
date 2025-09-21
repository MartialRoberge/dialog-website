import React from 'react'
import { motion } from 'framer-motion'
import { 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  Award, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  Star,
  Send
} from 'lucide-react'

const DiagnosticReport = ({ analysis, userProfile, onSendEmail, emailStatus }) => {
  // Données pour le niveau de maturité
  const maturityScore = analysis.niveau_maturite === "Expert" ? 90 : 
                       analysis.niveau_maturite === "Avancé" ? 75 :
                       analysis.niveau_maturite === "Intermédiaire" ? 60 : 40

  const maturityData = [
    {
      name: 'Maturité',
      value: maturityScore,
      fill: maturityScore > 75 ? '#10B981' : maturityScore > 50 ? '#F59E0B' : '#EF4444'
    }
  ]

  // Fonction pour extraire un nom court et pertinent
  const extractShortName = (titre) => {
    const words = titre.split(' ')
    const stopWords = ['de', 'du', 'des', 'la', 'le', 'les', 'avec', 'pour', 'par', 'et']
    
    // Prendre le premier mot, puis chercher le prochain mot significatif
    const firstWord = words[0]
    const significantWords = words.slice(1).filter(word => !stopWords.includes(word.toLowerCase()))
    
    if (significantWords.length > 0) {
      return `${firstWord} ${significantWords[0]}`
    }
    return firstWord
  }

  // Données pour les cas d'usage (facilité d'implémentation)
  const useCasesData = analysis.cas_usage_prioritaires?.map((cas, index) => ({
    name: extractShortName(cas.titre),
    facilite: cas.facilite_implementation === "Facile" ? 90 : 
              cas.facilite_implementation === "Moyenne" ? 60 : 30,
    fill: `hsl(${150 + index * 30}, 70%, 50%)`
  })) || []

  // Couleurs pour les graphiques
  const COLORS = ['#0D9488', '#059669', '#10B981', '#34D399']

  const getNiveauColor = (niveau) => {
    switch (niveau) {
      case 'Expert': return 'text-green-600 bg-green-50'
      case 'Avancé': return 'text-blue-600 bg-blue-50'  
      case 'Intermédiaire': return 'text-yellow-600 bg-yellow-50'
      case 'Débutant': return 'text-orange-600 bg-orange-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Très fort': return 'bg-red-100 text-red-800'
      case 'Fort': return 'bg-orange-100 text-orange-800'
      case 'Moyen': return 'bg-yellow-100 text-yellow-800'
      case 'Faible': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPrioriteColor = (priorite) => {
    switch (priorite) {
      case 'Haute': return 'bg-red-500'
      case 'Moyenne': return 'bg-yellow-500'
      case 'Basse': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header avec score global */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-deep-teal via-mint-teal to-soft-coral rounded-3xl p-8 text-white text-center relative overflow-hidden"
      >
        {/* Motifs de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Award className="text-white" size={64} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold font-space mb-2">
            Diagnostic IA Terminé !
          </h2>
          
          {/* Aperçu secteur intelligent */}
          {analysis.apercu_secteur && (
            <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <p className="text-white/95 text-lg leading-relaxed">
                {analysis.apercu_secteur}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Niveau de maturité */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Niveau de Maturité</div>
              <div className={`inline-block px-6 py-3 rounded-full font-semibold text-xl ${getNiveauColor(analysis.niveau_maturite)}`}>
                {analysis.niveau_maturite}
              </div>
            </div>

            {/* Graphique maturité amélioré */}
            <div className="relative w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="85%" data={maturityData}>
                  <RadialBar 
                    dataKey="value" 
                    cornerRadius={8} 
                    fill={maturityData[0].fill}
                    stroke="#ffffff"
                    strokeWidth={2}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              {/* Score au centre */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{maturityScore}%</div>
                  <div className="text-xs text-white/80">Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profil entreprise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
          <Users className="mr-3" size={28} />
          Profil de votre entreprise
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informations générales */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-700 mb-3">Informations générales</h4>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Entreprise:</span> {userProfile.company}</div>
              <div><span className="font-medium">Secteur:</span> {analysis.profil_entreprise.secteur}</div>
              <div><span className="font-medium">Taille:</span> {analysis.profil_entreprise.taille}</div>
              <div><span className="font-medium">Contact:</span> {userProfile.firstName} {userProfile.lastName}</div>
            </div>
          </div>

          {/* Points forts */}
          <div className="bg-green-50 rounded-xl p-4">
            <h4 className="font-semibold text-green-700 mb-3 flex items-center">
              <CheckCircle className="mr-2" size={18} />
              Points forts
            </h4>
            <ul className="space-y-2 text-sm">
              {analysis.profil_entreprise.points_forts?.map((force, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>{force}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Défis identifiés */}
          <div className="bg-orange-50 rounded-xl p-4">
            <h4 className="font-semibold text-orange-700 mb-3 flex items-center">
              <AlertTriangle className="mr-2" size={18} />
              Défis à relever
            </h4>
            <ul className="space-y-2 text-sm">
              {analysis.profil_entreprise.defis_principaux?.map((defi, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>{defi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Cas d'usage prioritaires */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
          <Target className="mr-3" size={28} />
          Cas d'usage prioritaires pour vous
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {analysis.cas_usage_prioritaires?.map((cas, index) => (
            <div key={index} className="bg-gradient-to-br from-mint-teal/10 to-soft-coral/10 rounded-xl p-6 border border-mint-teal/20">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-bold text-deep-teal text-lg">{cas.titre}</h4>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cas.facilite_implementation === "Facile" ? "bg-green-100 text-green-800" :
                  cas.facilite_implementation === "Moyenne" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {cas.facilite_implementation}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{cas.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <span className="font-semibold text-deep-teal mr-2 flex items-center">
                    <Target size={16} className="mr-1" />
                    Outils:
                  </span>
                  <span className="text-gray-600">{cas.outils_requis}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold text-deep-teal mr-2 flex items-center">
                    <TrendingUp size={16} className="mr-1" />
                    Bénéfice:
                  </span>
                  <span className="text-gray-600">{cas.benefice_concret}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique facilité d'implémentation amélioré */}
        {useCasesData.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-mint-teal/10 rounded-xl p-6">
            <h4 className="font-semibold text-gray-700 mb-6 flex items-center">
              <TrendingUp className="mr-2" size={20} />
              Facilité d'implémentation des solutions
            </h4>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={useCasesData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#4B5563' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  domain={[0, 100]} 
                  tick={{ fontSize: 12, fill: '#4B5563' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value) => [`${value > 80 ? 'Facile' : value > 50 ? 'Moyenne' : 'Complexe'}`, 'Facilité']}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="facilite" radius={[6, 6, 0, 0]}>
                  {useCasesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.facilite > 80 ? '#10B981' : entry.facilite > 50 ? '#F59E0B' : '#EF4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </motion.div>

      {/* Quick Wins */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
          <Zap className="mr-3" size={28} />
          Quick Wins Immédiats
        </h3>

        <div className="bg-yellow-50 rounded-xl p-6 mb-6">
          <p className="text-yellow-800 text-sm mb-4 flex items-center">
            <Zap size={16} className="mr-2 text-yellow-600" />
            Actions que vous pouvez mettre en place <strong>dès cette semaine</strong> pour commencer à bénéficier de l'IA :
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {analysis.quick_wins_immediats?.map((win, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-yellow-200 hover:shadow-sm transition-shadow">
                <div className="flex items-start">
                  <Zap size={16} className="text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{win}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan d'action concret */}
        <div>
          <h4 className="font-semibold text-deep-teal text-lg mb-4 flex items-center">
            <CheckCircle className="mr-2" size={20} />
            Plan d'action à plus long terme
          </h4>
          <div className="space-y-3">
            {analysis.plan_action_concret?.map((step, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4">
                <span className="bg-deep-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recommandations Dialog */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-deep-teal/5 to-mint-teal/5 rounded-2xl p-6 sm:p-8 border border-deep-teal/20"
      >
        <h3 className="text-2xl font-bold text-deep-teal mb-6 flex items-center">
          <Zap className="mr-3" size={28} />
          Recommandations Dialog
        </h3>

        <div className="space-y-4">
          {analysis.recommandations_dialog?.map((rec, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg text-charcoal">{rec.service}</h4>
                <div className={`w-3 h-3 rounded-full ${getPrioriteColor(rec.priorite)}`}></div>
              </div>
              <p className="text-gray-600 mb-3">{rec.justification}</p>
              <div className="bg-deep-teal/10 rounded-lg p-3">
                <span className="text-sm font-medium text-deep-teal">Livrable: </span>
                <span className="text-sm text-gray-700">{rec.livrable}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Forces (déjà affiché plus haut) */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
          <h4 className="font-semibold text-green-800 mb-4 flex items-center">
            <CheckCircle className="mr-2" size={20} />
            Points forts confirmés
          </h4>
          <ul className="space-y-2">
            {analysis.profil_entreprise?.points_forts?.map((force, index) => (
              <li key={index} className="text-sm text-green-700 flex items-start">
                <Star className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                {force}
              </li>
            )) || []}
          </ul>
        </div>

        {/* Défis (déjà affiché plus haut) */}
        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
          <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
            <AlertTriangle className="mr-2" size={20} />
            Défis à relever
          </h4>
          <ul className="space-y-2">
            {analysis.profil_entreprise?.defis_principaux?.map((defi, index) => (
              <li key={index} className="text-sm text-orange-700 flex items-start">
                <AlertTriangle className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                {defi}
              </li>
            )) || []}
          </ul>
        </div>

        {/* Quick wins */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
            <Zap className="mr-2" size={20} />
            Actions Quick Wins
          </h4>
          <ul className="space-y-2">
            {analysis.quick_wins_immediats?.map((win, index) => (
              <li key={index} className="text-sm text-blue-700 flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                {win}
              </li>
            )) || []}
          </ul>
        </div>
      </motion.div>

      {/* Prochaines étapes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-deep-teal mb-6">Plan d'action recommandé</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analysis.plan_action_concret?.map((step, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="bg-deep-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-sm text-gray-700">{step}</span>
            </div>
          )) || []}
        </div>
      </motion.div>

      {/* CTA Email - Envoi Automatique */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-deep-teal to-mint-teal rounded-2xl p-8 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">📧 Rapport envoyé automatiquement !</h3>
        <p className="text-white/90 mb-6">
          Votre diagnostic personnalisé a été envoyé directement à votre adresse email.
        </p>
        
        {/* États d'envoi d'email */}
        {emailStatus === 'sending' && (
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span className="text-white font-semibold">Envoi automatique en cours...</span>
            </div>
          </div>
        )}
        
        {emailStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500 rounded-xl p-4 mb-4"
          >
            <div className="flex items-center justify-center gap-3">
              <CheckCircle size={20} />
              <span className="font-semibold">✅ Rapport envoyé avec succès !</span>
            </div>
            <p className="text-sm mt-2 text-white/90">
              Vérifiez votre boîte de réception (et vos spams)
            </p>
          </motion.div>
        )}
        
        {emailStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-500 rounded-xl p-4 mb-4"
          >
            <div className="flex items-center justify-center gap-3">
              <AlertTriangle size={20} />
              <span className="font-semibold">❌ Erreur d'envoi automatique</span>
            </div>
            <p className="text-sm mt-2 text-white/90">
              Contactez-nous directement pour recevoir votre rapport
            </p>
          </motion.div>
        )}
        
        {/* Message d'erreur sans bouton */}
        {emailStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-500/20 rounded-xl border border-red-500/30">
            <p className="text-red-700 font-semibold text-center">
              ❌ Erreur d'envoi automatique
            </p>
            <p className="text-red-600 text-sm text-center mt-1">
              Contactez-nous directement pour recevoir votre rapport
            </p>
          </div>
        )}
        

      </motion.div>
    </div>
  )
}

export default DiagnosticReport 