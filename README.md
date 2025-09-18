# 🚀 Site Web Dialog

Site vitrine professionnel pour Dialog, cabinet de conseil spécialisé en IA générative.

## 📋 Vue d'ensemble

**Dialog** accompagne les entreprises dans leur transformation IA avec des solutions concrètes et sur-mesure. Ce site présente nos expertises, notre approche et permet aux prospects de nous contacter.

## 🏗️ Structure du projet

```
src/
├── components/
│   ├── NavBar.jsx           # Navigation principale avec logo
│   └── VantaBackground.jsx  # Effet de fond 3D
├── sections/
│   ├── Hero.jsx             # Section d'accueil
│   ├── About.jsx            # Notre mission + statistiques
│   ├── Services.jsx         # Nos 6 expertises IA
│   ├── Methodology.jsx      # Notre approche (4 principes)
│   ├── Difference.jsx       # Notre différence
│   ├── CTA.jsx              # Formulaire de contact
│   └── Footer.jsx           # Footer avec liens légaux
├── pages/
│   ├── MentionsLegales.jsx  # Page mentions légales
│   └── PolitiqueConfidentialite.jsx # Page politique de confidentialité
├── config/
│   └── emailjs.js           # Configuration EmailJS
└── archive/
    └── diagnostic-ia/       # Composants diagnostic IA (à réintégrer plus tard)
```

## 🎨 Sections du site

### 1. **Hero** - Section d'accueil
- Titre principal : "De la vision à l'usage : orchestrer votre réussite IA"
- Sous-titre explicatif
- 2 CTA : "Découvrir nos expertises" et "Nous contacter"
- Effet de fond 3D avec Vanta.js

### 2. **About** - Notre mission
- Subtitle personnalisé sur l'approche Dialog
- 4 statistiques sourcées sur l'IA
- Présentation de la mission

### 3. **Services** - Nos expertises
- **6 services détaillés** :
  1. Diagnostic & feuille de route IA
  2. Acculturation / Formation / Mentoring
  3. Développement de cas d'usage
  4. Déploiement & accompagnement du changement
  5. Agence IA
  6. Développement de produits IA

### 4. **Methodology** - Notre approche
- **4 principes** :
  1. Vision claire
  2. Sur-mesure
  3. Liberté de choix
  4. Acculturation par l'usage

### 5. **Difference** - Notre différence
- **4 points distinctifs** :
  1. Concret et utile
  2. Adapté à chaque contexte
  3. Clarté et pédagogie vivante
  4. Énergie et plaisir

### 6. **CTA** - Contact
- Formulaire complet (nom, email, secteur, message)
- Envoi via EmailJS vers `contact@dialog-ia.com`
- Validation et feedback utilisateur

### 7. **Footer**
- Informations Dialog
- Contact et réseaux sociaux
- Liens vers mentions légales et politique de confidentialité

## 🛠️ Technologies

- **React 18** + **Vite** (développement rapide)
- **Tailwind CSS** (styles utility-first)
- **Framer Motion** ~~(animations supprimées pour UX optimale)~~
- **EmailJS** (envoi de formulaires)
- **Vanta.js** (effets 3D)
- **Lucide React** (icônes)
- **React Router** (navigation entre pages)

## 🚀 Installation et développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [url-repo]
cd test-site-web

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Preview du build de production
npm run lint         # Vérification ESLint
```

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS avec la configuration suivante :

```javascript
// src/config/emailjs.js
export const EMAILJS_CONFIG = {
  serviceId: 'service_0epmai4',
  contactTemplateId: 'template_lfuf901',
  publicKey: 'nJQ3dnkWZedb2HzBG'
}
```

### Variables du template EmailJS :
- `{{to_email}}` : contact@dialog-ia.com
- `{{from_name}}` : Nom complet du prospect
- `{{from_email}}` : Email du prospect
- `{{first_name}}` : Prénom
- `{{last_name}}` : Nom
- `{{sector}}` : Secteur d'activité
- `{{message}}` : Message
- `{{timestamp}}` : Date/heure de soumission

## 🏢 Informations légales

**Dialog SAS**
- **SIREN** : 990 094 906
- **SIRET** : 990 094 906 00015
- **RCS** : Paris 990 094 906
- **TVA** : FR06990094906
- **Code NAF** : 70.22Z
- **Capital social** : 1 000,00 €

## 🌐 Déploiement OVH

### Build de production
```bash
npm run build
```

### Upload vers OVH
1. Se connecter à l'espace client OVH
2. Accéder au gestionnaire de fichiers FTP
3. Supprimer tout le contenu de `/www`
4. Uploader tous les fichiers de `dist/` vers `/www`
5. S'assurer que `logo-dialog.png` est à la racine

### Structure sur OVH
```
/www/
├── index.html
├── logo-dialog.png
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── vanta.fog.min-[hash].js
```

## 📝 Archive - Diagnostic IA

Les composants suivants sont archivés dans `archive/diagnostic-ia/` pour réintégration future :

- **Components** : Questions, rapports, analyseurs
- **Hooks** : `useDiag.js`
- **Services** : OpenAI, EmailJS diagnostic
- **Templates** : Templates EmailJS pour le diagnostic
- **Data** : Questions du diagnostic

### Réintégration future
```bash
# Restaurer les composants diagnostic
mv archive/diagnostic-ia/diagnostic src/components/
mv archive/diagnostic-ia/diagnosticQuestions.js src/data/
mv archive/diagnostic-ia/useDiag.js src/hooks/
mv archive/diagnostic-ia/Diag.jsx src/sections/
mv archive/diagnostic-ia/emailService.js src/services/
mv archive/diagnostic-ia/openai.js src/services/
```

Puis décommenter les imports dans `App.jsx` :
```javascript
// import Diag from './sections/Diag'
// <Diag />
```

## 🎯 Optimisations appliquées

### UX/UI
- ✅ Suppression de toutes les animations `framer-motion` trop agressives
- ✅ Transitions CSS simples et naturelles
- ✅ Interface stable et prévisible
- ✅ Navigation optimisée

### Performance
- ✅ Code splitting automatique (Vite)
- ✅ Images optimisées
- ✅ CSS purifié (Tailwind)
- ✅ Build minifié

### SEO
- ✅ Meta tags optimisés
- ✅ Structure sémantique HTML5
- ✅ URLs propres avec React Router
- ✅ Lighthouse score optimisé

## 📞 Support et maintenance

- **Email** : contact@dialog-ia.com
- **Développement** : Martial (martial@dialog-ia.com)

## 📄 Licence

© 2025 Dialog. Tous droits réservés.

---

**Version** : 2.0 (Production)  
**Dernière mise à jour** : $(date)  
**Status** : ✅ Prêt pour production OVH