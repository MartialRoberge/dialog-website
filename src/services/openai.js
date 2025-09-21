import OpenAI from 'openai'
import { DIAGNOSTIC_QUESTIONS } from '../data/diagnosticQuestions'

// Configuration OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || 'your-api-key-here',
  dangerouslyAllowBrowser: true // Pour utilisation côté client
})

// Système de prompts pour l'analyse Dialog
const DIALOG_PROMPT = `
Tu es un expert chez Dialog, spécialisé dans l'analyse business et l'identification d'opportunités IA concrètes.

ÉTAPE 1 - APERÇU INTELLIGENT SECTEUR:
Commence IMPÉRATIVEMENT par un paragraphe de 3-4 lignes qui montre que tu as parfaitement compris leur entreprise et leur secteur. Exemple:
"Dans le secteur [SECTEUR], l'IA révolutionne déjà [exemple concret]. Vos concurrents comme [exemple] utilisent l'IA pour [usage spécifique]. Avec votre profil [taille/outils], vous avez des opportunités particulièrement intéressantes sur [domaine précis]."

ÉTAPE 2 - ANALYSE QUALITATIVE (pas de stats):
Focus sur la compréhension business réelle:
- Leurs vrais défis opérationnels quotidiens  
- Les opportunités IA qui matchent parfaitement leur contexte
- Les solutions concrètes et réalisables tout de suite
- Les cas d'usage précis qui correspondent à leurs outils actuels

ÉTAPE 3 - CAS D'USAGE HYPER-SPÉCIFIQUES PAR SECTEUR:
Tu DOIS adapter les cas d'usage selon le SECTEUR EXACT:

INDUSTRIE/MANUFACTURING: Maintenance prédictive, Optimisation production, Contrôle qualité automatisé, Planification intelligente
COMMERCE/RETAIL: Analyse comportement client, Gestion stock intelligente, Personnalisation offres, Optimisation prix
SERVICES: Automatisation administrative, Support client IA, Analyse performance, Planification ressources  
SANTÉ: Aide diagnostic, Gestion planning, Analyse données patients, Optimisation parcours
BTP/CONSTRUCTION: Planification chantiers, Estimation coûts, Sécurité prédictive, Gestion matériaux
FINANCE: Analyse risques, Détection fraudes, Automatisation reporting, Conseils personnalisés
TECH/DIGITAL: Développement assisté, Tests automatisés, Analyse performance, Support technique
ÉDUCATION: Personnalisation apprentissage, Évaluation automatisée, Gestion administrative

INTERDICTIONS ABSOLUES:
- PAS de cas d'usage génériques identiques pour tous secteurs
- PAS de "Optimisation de la chaîne de production" pour une boutique de mode  
- PAS de "Maintenance prédictive" pour un cabinet comptable
- ADAPTER 100% au contexte métier réel

IMPORTANT: Réponds UNIQUEMENT avec un JSON valide selon cette structure exacte:
{
  "apercu_secteur": "Paragraphe de 3-4 lignes qui montre qu'on a compris leur entreprise, secteur, concurrents et opportunités spécifiques. OBLIGATOIRE de commencer par ça !",
  "niveau_maturite": "Débutant" | "Intermédiaire" | "Avancé" | "Expert",
  "profil_entreprise": {
    "secteur": string,
    "taille": "Startup" | "PME" | "ETI" | "Grande entreprise",
    "points_forts": ["Force concrète 1", "Force concrète 2", "Force concrète 3"],
    "defis_principaux": ["Défi spécifique 1", "Défi spécifique 2"]
  },
  "cas_usage_prioritaires": [
    {
      "titre": "NOM COURT sans articles (ex: 'Optimisation production', 'Automatisation support', 'Analyse comportement')",
      "description": "Description détaillée qui montre qu'on a compris leur contexte métier spécifique",
      "outils_requis": "Outils spécifiques adaptés à leur stack tech actuel",
      "benefice_concret": "Bénéfice business précis et mesurable pour LEUR secteur",
      "facilite_implementation": "Facile" | "Moyenne" | "Complexe"
    }
  ],
  "recommandations_dialog": [
    {
      "service": "Diagnostic et évaluation de maturité IA" | "Définition de feuille de route stratégique IA" | "Identification et déploiement de cas d'usage IA générative" | "Développement technologique IA sur mesure" | "Acculturation, formation et montée en compétence" | "Veille stratégique et technologique",
      "priorite": "Haute" | "Moyenne" | "Basse",
      "justification": string,
      "livrable": string,
      "timeline": "1-3 mois" | "3-6 mois" | "6-12 mois" | "+12 mois"
    }
  ],
  "plan_action_concret": [
    "Étape 1 précise et actionnable",
    "Étape 2 concrète avec timeline",
    "Étape 3 réalisable tout de suite"
  ],
  "quick_wins_immediats": [
    "Action simple réalisable cette semaine",
    "Amélioration rapide avec leurs outils actuels",
    "Optimisation sans budget"
  ]
}
`

// Analyser les réponses avec Dialog IA
export const analyzeResponses = async (responses, userProfile) => {
  try {
    if (typeof console !== 'undefined') {
      console.log('🤖 Envoi à Dialog IA pour analyse...', { responses, userProfile })
    }

    // Construire le contexte pour GPT
    const context = `
PROFIL UTILISATEUR:
- Nom: ${userProfile.firstName} ${userProfile.lastName}
- Email: ${userProfile.email}
- Secteur: ${userProfile.sector}
- Entreprise: ${userProfile.company}
- Nombre d'employés: ${userProfile.companySize}

RÉPONSES AU DIAGNOSTIC:
${Object.entries(responses).map(([questionId, answer]) => {
  const question = DIAGNOSTIC_QUESTIONS.find(q => q.id === questionId)
  return `Question ${questionId}: ${question?.question || questionId}
Réponse: ${Array.isArray(answer) ? answer.join(', ') : answer}`
}).join('\n\n')}

ANALYSE REQUISE:
${DIALOG_PROMPT}
`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Tu es un expert Dialog spécialisé dans l'analyse business et l'identification d'opportunités IA concrètes. Tu réponds UNIQUEMENT en JSON valide."
        },
        {
          role: "user",
          content: context
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })

    const result = completion.choices[0]?.message?.content
    if (!result) {
      throw new Error('Aucune réponse reçue de Dialog IA')
    }

    // Parser le JSON de la réponse
    let analysis
    try {
      analysis = JSON.parse(result)
    } catch (parseError) {
      console.error('❌ Erreur parsing JSON:', parseError)
      console.log('📄 Réponse brute:', result)
      throw new Error('Format de réponse invalide de Dialog IA')
    }

    if (typeof console !== 'undefined') {
      console.log('✅ Analyse Dialog IA terminée:', analysis)
    }

    return analysis

  } catch (error) {
    console.error('❌ Erreur analyse Dialog IA:', error)
    
    // Fallback avec analyse par défaut
    return generateFallbackAnalysis(responses, userProfile)
  }
}

// Analyse de fallback en cas d'erreur OpenAI
const generateFallbackAnalysis = (responses, userProfile) => {
  console.log('🔄 Utilisation de l\'analyse de fallback...')
  
  const getCasUsageBySector = (sector) => {
    const casUsageMap = {
      'Luxe & Premium': [
        {
          titre: 'Personnalisation client premium',
          description: 'IA pour analyser les préférences clients et proposer des expériences personnalisées',
          outils_requis: 'CRM, Analytics, IA conversationnelle',
          benefice_concret: 'Augmentation de 25% du panier moyen',
          facilite_implementation: 'Moyenne'
        }
      ],
      'Vente & Retail': [
        {
          titre: 'Optimisation stock intelligent',
          description: 'Prédiction des ventes pour optimiser les stocks et réduire les ruptures',
          outils_requis: 'ERP, Analytics, IA prédictive',
          benefice_concret: 'Réduction de 30% des coûts de stockage',
          facilite_implementation: 'Facile'
        }
      ],
      'Industrie & Manufacturing': [
        {
          titre: 'Maintenance prédictive',
          description: 'Détection précoce des pannes pour éviter les arrêts de production',
          outils_requis: 'IoT, Analytics, IA prédictive',
          benefice_concret: 'Réduction de 40% des temps d\'arrêt',
          facilite_implementation: 'Complexe'
        }
      ],
      'Finance & Banque': [
        {
          titre: 'Détection fraude IA',
          description: 'Analyse en temps réel des transactions pour détecter les fraudes',
          outils_requis: 'Système de paiement, IA temps réel',
          benefice_concret: 'Réduction de 60% des fraudes',
          facilite_implementation: 'Moyenne'
        }
      ],
      'Santé & Pharmaceutique': [
        {
          titre: 'Aide diagnostic',
          description: 'Support au diagnostic médical avec analyse d\'images et données',
          outils_requis: 'Imagerie médicale, IA spécialisée',
          benefice_concret: 'Amélioration de 35% de la précision diagnostique',
          facilite_implementation: 'Complexe'
        }
      ]
    }
    
    return casUsageMap[sector] || casUsageMap['Vente & Retail']
  }

  return {
    apercu_secteur: `Dans le secteur ${userProfile.sector}, l'IA transforme rapidement les processus métier. Votre entreprise ${userProfile.company} a un potentiel intéressant pour l'adoption de solutions IA concrètes et mesurables.`,
    niveau_maturite: "Intermédiaire",
    profil_entreprise: {
      secteur: userProfile.sector,
      taille: userProfile.companySize,
      points_forts: ["Volonté d'innovation", "Leadership engagé", "Données disponibles"],
      defis_principaux: ["Compétences techniques", "Stratégie IA claire"]
    },
    cas_usage_prioritaires: getCasUsageBySector(userProfile.sector),
    recommandations_dialog: [
      {
        service: "Diagnostic et évaluation de maturité IA",
        priorite: "Haute",
        justification: "Établir une base solide pour votre transformation IA",
        livrable: "Audit complet et roadmap personnalisée",
        timeline: "1-3 mois"
      }
    ],
    plan_action_concret: [
      "Audit de maturité IA (semaine 1-2)",
      "Identification des cas d'usage prioritaires (semaine 3-4)",
      "Démarrage du premier projet pilote (mois 2)"
    ],
    quick_wins_immediats: [
      "Formation équipe sur les outils IA existants",
      "Automatisation d'une tâche administrative simple",
      "Mise en place d'un dashboard analytics basique"
    ]
  }
}

// Générer le contenu de l'email pour le client
export const generateEmailContent = (analysis, userProfile) => {
  return `
Bonjour ${userProfile.firstName},

Merci d'avoir complété notre diagnostic IA Dialog !

Voici votre analyse personnalisée :

## 📊 APERÇU DE VOTRE SECTEUR
${analysis.apercu_secteur}

## 🎯 VOTRE PROFIL ENTREPRISE
- **Secteur** : ${analysis.profil_entreprise?.secteur}
- **Taille** : ${analysis.profil_entreprise?.taille}
- **Niveau de maturité IA** : ${analysis.niveau_maturite}

## 💪 VOS POINTS FORTS
${analysis.profil_entreprise?.points_forts?.map(point => `• ${point}`).join('\n')}

## 🎯 DÉFIS À RELEVER
${analysis.profil_entreprise?.defis_principaux?.map(defi => `• ${defi}`).join('\n')}

## 🚀 CAS D'USAGE PRIORITAIRES
${analysis.cas_usage_prioritaires?.map(cas => `
**${cas.titre}**
${cas.description}
**Bénéfice** : ${cas.benefice_concret}
**Facilité** : ${cas.facilite_implementation}
`).join('\n')}

## ⚡ QUICK WINS IMMÉDIATS
${analysis.quick_wins_immediats?.map(win => `• ${win}`).join('\n')}

## 📋 PLAN D'ACTION CONCRET
${analysis.plan_action_concret?.map((step, index) => `${index + 1}. ${step}`).join('\n')}

## 🎯 RECOMMANDATIONS DIALOG
${analysis.recommandations_dialog?.map(rec => `
**${rec.service}** (Priorité: ${rec.priorite})
${rec.justification}
**Livrable** : ${rec.livrable}
**Timeline** : ${rec.timeline}
`).join('\n')}

---
**Prochaine étape** : Nous vous recontactons sous 48h pour planifier un échange personnalisé.

Cordialement,
L'équipe Dialog
martial@lexiapro.fr
  `.trim()
}

// Générer l'email de notification pour Martial
export const generateNotificationEmail = (analysis, userProfile) => {
  return `
🔥 NOUVEAU LEAD QUALIFIÉ - DIALOG

**CONTACT :**
- Nom : ${userProfile.firstName} ${userProfile.lastName}
- Email : ${userProfile.email}
- Entreprise : ${userProfile.company}
- Secteur : ${analysis.profil_entreprise?.secteur}
- Taille : ${userProfile.companySize}

**ANALYSE RAPIDE :**
- Niveau de maturité : ${analysis.niveau_maturite}
- Cas d'usage prioritaire : ${analysis.cas_usage_prioritaires?.[0]?.titre}
- Recommandation Dialog : ${analysis.recommandations_dialog?.[0]?.service}

**PROCHAINES ACTIONS :**
1. Contacter ${userProfile.firstName} sous 48h
2. Proposer un échange personnalisé
3. Présenter notre approche sur ${analysis.cas_usage_prioritaires?.[0]?.titre}

---
*Lead généré automatiquement par le diagnostic Dialog*
  `.trim()
} 