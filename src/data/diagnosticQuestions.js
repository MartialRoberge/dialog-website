// Questions dynamiques pour le diagnostic IA Dialog
export const DIAGNOSTIC_QUESTIONS = [
  // 1. Profil de l'entreprise
  {
    id: 'company_profile',
    type: 'form',
    title: 'Parlons de votre entreprise',
    subtitle: 'Ces informations nous aident à personnaliser notre analyse',
    fields: [
      {
        name: 'company',
        label: 'Nom de votre entreprise',
        type: 'text',
        placeholder: 'Ex: TechCorp',
        required: true
      },
      {
        name: 'companySize',
        label: 'Nombre d\'employés',
        type: 'select',
        options: [
          { value: 'startup', label: '1-10 employés (Startup)' },
          { value: 'pme', label: '11-250 employés (PME)' },
          { value: 'eti', label: '251-5000 employés (ETI)' },
          { value: 'grande', label: '+5000 employés (Grande entreprise)' }
        ],
        required: true
      },
      {
        name: 'role',
        label: 'Votre rôle',
        type: 'select',
        options: [
          { value: 'ceo', label: 'CEO/Dirigeant' },
          { value: 'cto', label: 'CTO/DSI' },
          { value: 'manager', label: 'Manager/Chef de projet' },
          { value: 'consultant', label: 'Consultant' },
          { value: 'other', label: 'Autre' }
        ],
        required: true
      }
    ]
  },

  // 2. Objectifs stratégiques 
  {
    id: 'strategic_goals',
    type: 'multiple_choice',
    title: 'Quels sont vos objectifs prioritaires ?',
    subtitle: 'Sélectionnez tous ceux qui vous concernent',
    allowMultiple: true,
    options: [
      {
        value: 'productivity',
        label: 'Améliorer la productivité',
        description: 'Automatiser les tâches répétitives, accélérer les processus',
        icon: '⚡'
      },
      {
        value: 'innovation',
        label: 'Stimuler l\'innovation',
        description: 'Nouveaux produits/services, créativité augmentée',
        icon: '💡'
      },
      {
        value: 'customer_experience',
        label: 'Améliorer l\'expérience client',
        description: 'Personnalisation, support intelligent, satisfaction',
        icon: '❤️'
      },
      {
        value: 'cost_reduction',
        label: 'Réduire les coûts',
        description: 'Optimisation des ressources, efficacité opérationnelle',
        icon: '💰'
      }
    ]
  },

    // 3. Environnement technologique simplifié
  {
    id: 'tech_environment',
    type: 'form',
    title: 'Votre environnement technologique',
    subtitle: 'Quelques questions simples pour adapter nos recommandations',
    fields: [
      {
        name: 'main_tools',
        label: 'Outils principaux utilisés au quotidien',
        type: 'select',
        options: [
          { value: 'microsoft', label: 'Microsoft Office 365 / Teams' },
          { value: 'google', label: 'Google Workspace (Gmail, Drive, Sheets)' },
          { value: 'excel_files', label: 'Principalement Excel et fichiers' },
          { value: 'salesforce', label: 'Salesforce CRM' },
          { value: 'sap', label: 'SAP ou ERP similaire' },
          { value: 'mixed', label: 'Mélange d\'outils divers' }
        ],
        required: true
      },
      {
        name: 'current_ai_usage',
        label: 'Utilisez-vous déjà des outils IA ?',
        type: 'select',
        options: [
          { value: 'none', label: 'Pas du tout' },
          { value: 'chatgpt_personal', label: 'ChatGPT de temps en temps (perso)' },
          { value: 'some_tools', label: 'Quelques outils IA ponctuellement' },
          { value: 'regular_use', label: 'Utilisation régulière d\'IA' },
          { value: 'advanced', label: 'Outils IA intégrés dans nos processus' }
        ],
        required: true
      },
      {
        name: 'biggest_pain_point',
        label: 'Votre plus gros point de frustration quotidien',
        type: 'text',
        placeholder: 'Ex: Trop de temps sur les emails, recherche d\'infos, création de contenus...',
        required: true
      }
    ]
  },

  // 4. Jauges de maturité (remises comme demandé !)
  {
    id: 'maturity_sliders',
    type: 'slider',
    title: 'Autoévaluation de votre organisation',
    subtitle: 'Positionnez-vous sur ces différents aspects (de 0 à 100)',
    sliders: [
      {
        name: 'digital_maturity',
        label: 'Maturité digitale générale',
        description: 'Votre niveau d\'adoption des outils numériques',
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 50
      },
      {
        name: 'data_organization',
        label: 'Organisation de vos données',
        description: 'Facilité à retrouver et utiliser vos informations',
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 40
      },
      {
        name: 'team_tech_comfort',
        label: 'Aisance technologique des équipes',
        description: 'Capacité d\'adaptation aux nouveaux outils',
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 60
      },
      {
        name: 'process_automation',
        label: 'Niveau d\'automatisation actuel',
        description: 'Part des tâches déjà automatisées',
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 30
      }
    ]
  },

  // 5. Contexte business concret
  {
    id: 'business_context',
    type: 'multiple_choice',
    title: 'Votre réalité business aujourd\'hui',
    subtitle: 'Sélectionnez les situations qui vous correspondent',
    allowMultiple: true,
    options: [
      {
        value: 'time_consuming_tasks',
        label: 'Beaucoup de tâches répétitives chronophages',
        description: 'Saisie, rapports, emails types, recherche d\'infos...',
        icon: '⏱️'
      },
      {
        value: 'content_creation_needs',
        label: 'Besoin fréquent de créer du contenu',
        description: 'Propositions, présentations, communications, docs...',
        icon: '📝'
      },
      {
        value: 'customer_volume',
        label: 'Volume important d\'interactions clients',
        description: 'Support, SAV, prospection, suivi commercial...',
        icon: '👥'
      },
      {
        value: 'decision_support',
        label: 'Besoin d\'aide à la décision',
        description: 'Analyse de données, tendances, insights...',
        icon: '🎯'
      },
      {
        value: 'knowledge_management',
        label: 'Difficulté à capitaliser sur les connaissances',
        description: 'Documentation, partage d\'expertise, formation...',
        icon: '🧠'
      },
      {
        value: 'competitive_pressure',
        label: 'Pression concurrentielle forte',
        description: 'Besoin de se différencier, d\'innover rapidement...',
        icon: '🏃‍♂️'
      }
    ]
  }


]

// Configuration des types de questions
export const QUESTION_TYPES = {
  form: {
    component: 'FormQuestion',
    icon: '📝',
    description: 'Formulaire de profil'
  },
  slider: {
    component: 'SliderQuestion', 
    icon: '🎚️',
    description: 'Jauges d\'évaluation'
  },
  multiple_choice: {
    component: 'MultipleChoiceQuestion',
    icon: '☑️',
    description: 'Choix multiples'
  },
  ranking: {
    component: 'RankingQuestion',
    icon: '📊',
    description: 'Classement par priorité'
  },
  open_text: {
    component: 'OpenTextQuestion',
    icon: '💭',
    description: 'Questions ouvertes'
  },
  mixed: {
    component: 'MixedQuestion',
    icon: '🔀',
    description: 'Questions mixtes'
  }
} 