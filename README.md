# 🚀 Dialog - Site Web Professionnel

Site web moderne pour **Dialog**, cabinet de conseil spécialisé en IA générative.

## ✨ Fonctionnalités

- **Design moderne et responsive** avec Tailwind CSS
- **Animations fluides** avec Framer Motion
- **Background animé** avec Vanta.js (effet FOG)
- **Diagnostic IA interactif** alimenté par GPT-4
- **Envoi automatique d'emails** via EmailJS
- **Formulaire de contact** intégré
- **Optimisé mobile** et desktop

## 🛠️ Technologies

- **React 18** - Framework frontend
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Vanta.js** - Backgrounds 3D animés
- **EmailJS** - Envoi d'emails côté client
- **OpenAI GPT-4** - Diagnostic IA intelligent
- **Recharts** - Graphiques interactifs

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/martialroberge/dialog-website.git
cd dialog-website

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 📧 Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez votre service email (Gmail, Outlook, etc.)
3. Créez deux templates :
   - **Template client** : pour envoyer le rapport diagnostic
   - **Template notification** : pour notifier Martial des nouveaux leads
4. Mettez à jour `src/config/emailjs.js` avec vos clés

## 🤖 Configuration OpenAI

1. Obtenez une clé API OpenAI
2. Mettez à jour la clé dans `src/services/openai.js`

## 📱 Sections du site

- **Hero** - Landing page avec background animé
- **About** - Mission et statistiques
- **Services** - Offres de conseil IA
- **Diagnostic** - Outil IA interactif
- **CTA** - Formulaire de contact
- **Footer** - Informations de contact

## 🎨 Design System

### Couleurs Dialog
- **Deep Teal** : `#00656e`
- **Mint Teal** : `#1aa7a1`
- **Soft Coral** : `#ff6a63`
- **Charcoal** : `#2d3748`
- **Snow Grey** : `#f7fafc`

### Typographie
- **Space Grotesk** - Titres
- **Inter** - Corps de texte

## 📦 Scripts disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Linter le code
```

## 🌐 Déploiement

Le site est configuré pour être déployé sur :
- **Netlify** (recommandé)
- **Vercel**
- **OVH** (en cours)

## 📄 Licence

© 2025 Dialog. Tous droits réservés.

## 👨‍💻 Développeur

**Martial ROBERGE** - [GitHub](https://github.com/martialroberge)

---

*Site développé avec ❤️ pour Dialog* 