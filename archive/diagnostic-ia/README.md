# 🧠 Archive - Diagnostic IA

Ces composants constituent le **système de diagnostic IA** de Dialog, temporairement archivé pour être réintégré ultérieurement.

## 📁 Contenu archivé

### Components
- **diagnostic/** : Tous les composants du diagnostic
  - `ConsultativeAnalysisReport.jsx` : Rapport d'analyse consultative
  - `DiagnosticReport.jsx` : Rapport de diagnostic principal
  - `ExpertAnalysisReport.jsx` : Rapport d'analyse expert
  - `IconRenderer.jsx` : Rendu des icônes
  - `ScaleGridQuestion.jsx` : Questions avec grille d'échelle
  - `SingleChoiceQuestion.jsx` : Questions à choix unique
  - `SliderQuestion.jsx` : Questions avec slider

### Services
- `emailService.js` : Service d'envoi d'emails pour le diagnostic
- `openai.js` : Service d'intégration OpenAI pour l'analyse IA

### Data & Logic
- `diagnosticQuestions.js` : Base de données des questions du diagnostic
- `useDiag.js` : Hook React pour la logique du diagnostic

### Templates EmailJS
- `emailjs-templates/` : Templates d'emails pour le diagnostic
  - `admin-template.html` : Template pour notifications admin
  - `client-template.html` : Template pour le client

### Sections
- `Diag.jsx` : Section principale du diagnostic
- `Testimonials.jsx` : Section témoignages (liée au diagnostic)

## 🔄 Réintégration

Pour réintégrer le diagnostic IA dans le site :

### 1. Restaurer les fichiers
```bash
# Depuis la racine du projet
mv archive/diagnostic-ia/diagnostic src/components/
mv archive/diagnostic-ia/diagnosticQuestions.js src/data/
mv archive/diagnostic-ia/useDiag.js src/hooks/
mv archive/diagnostic-ia/Diag.jsx src/sections/
mv archive/diagnostic-ia/Testimonials.jsx src/sections/
mv archive/diagnostic-ia/emailService.js src/services/
mv archive/diagnostic-ia/openai.js src/services/
mv archive/diagnostic-ia/emailjs-templates ./
```

### 2. Mettre à jour App.jsx
```javascript
// Décommenter ces lignes dans src/App.jsx
import Diag from './sections/Diag'
import Testimonials from './sections/Testimonials'

// Dans le JSX
<Diag />
<Testimonials />
```

### 3. Mettre à jour NavBar.jsx
```javascript
// Ajouter "Diagnostic" dans navItems
const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Notre mission', href: '#about' },
  { name: 'Nos expertises', href: '#services' },
  { name: 'Notre approche', href: '#methodology' },
  { name: 'Notre différence', href: '#difference' },
  { name: 'Diagnostic IA', href: '#diag' } // Ajouter cette ligne
]
```

### 4. Configuration EmailJS
Les templates EmailJS pour le diagnostic nécessitent :
- **Admin Template** : template_axbetmn
- **Client Template** : template_lmo0ozj

### 5. Variables d'environnement
Ajouter dans `.env` :
```
VITE_OPENAI_API_KEY=your_openai_key
```

## 🎯 Fonctionnalités du diagnostic

1. **Questionnaire interactif** : ~20 questions sur 3 axes
2. **Analyse OpenAI** : Génération automatique de rapports
3. **Double envoi email** : Admin + Client
4. **Rapports PDF** : Génération automatique
5. **Scoring intelligent** : Algorithme de notation

## 🚀 Prêt pour réintégration

Tous les composants sont **fonctionnels** et **testés**. La réintégration est simple et rapide.

---

**Archivé le** : $(date)  
**Status** : ✅ Prêt pour réintégration
