# 🚀 Site Dialog - Déploiement OVH

## 📁 Contenu de ce dossier

Ce dossier contient la **version compilée** du site Dialog, prête pour OVH.

```
dist/
├── index.html              # Page principale
├── .htaccess               # Configuration Apache/OVH
├── assets/                 # CSS, JS compilés
│   ├── index-*.css
│   ├── index-*.js
│   └── vanta.fog.min-*.js
├── logo-dialog/            # Logo Dialog (à ajouter)
└── photos-fondateurs/      # Photos équipe (à ajouter)
```

## 🔧 Instructions de déploiement

### 1. Upload vers OVH
1. **Connectez-vous** à votre espace client OVH
2. **Accédez** au gestionnaire de fichiers FTP
3. **Supprimez** tout le contenu du dossier `/www`  
4. **Uploadez** **TOUS** les fichiers de ce dossier vers `/www`

### 2. Structure finale sur OVH
```
/www/
├── index.html
├── .htaccess
├── assets/
├── logo-dialog/
└── photos-fondateurs/
```

### 3. Ajouter les images manquantes
- **Logo** : Placez `logo.png` dans `/www/logo-dialog/`
- **Photos** : Placez les photos dans `/www/photos-fondateurs/`

### 4. Configurer les variables d'environnement

⚠️ **IMPORTANT** : Le site contient des placeholders pour les clés API.

Vous devez soit :
- **Option A** : Créer un backend pour gérer les clés
- **Option B** : Reconstruire avec les vraies clés (moins sécurisé)

Pour l'Option B :
1. Modifiez le fichier `.env` local avec vos vraies clés
2. Exécutez `npm run build`
3. Re-uploadez le nouveau build

### 5. Test
Visitez votre domaine : `https://votre-domaine.com`

## 🔑 Variables d'environnement nécessaires

```
VITE_OPENAI_API_KEY=sk-proj-votre-cle-openai
VITE_EMAILJS_PUBLIC_KEY=votre-cle-emailjs
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_CLIENT_TEMPLATE_ID=template_xxx
VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_xxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxx
```

## 📞 Support
- **Email** : martial@lexiapro.fr
- **Problèmes OVH** : Vérifiez les logs dans l'espace client

---

**Version** : Production Ready  
**Date** : $(date)  
**Prêt pour** : OVH Apache 