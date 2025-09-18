# 🚀 Site Dialog - Déploiement OVH

## 📁 Contenu à déployer

Après avoir exécuté `./deploy.sh`, le dossier `dist/` contient **tous les fichiers** prêts pour OVH :

```
dist/
├── index.html                          # Page principale (SPA)
├── .htaccess                           # Configuration Apache/OVH
└── assets/
    ├── logo-dialog-[hash].png          # Logo Dialog optimisé
    ├── index-[hash].css                # Styles compilés (33KB)
    ├── index-[hash].js                 # JavaScript compilé (1MB)
    └── vanta.fog.min-[hash].js         # Effet 3D (13KB)
```

## 🔧 Instructions de déploiement

### 1. Préparer les fichiers localement
```bash
# Depuis la racine du projet
./deploy.sh
```

### 2. Upload vers OVH
1. **Connectez-vous** à votre espace client OVH
2. **Accédez** au gestionnaire de fichiers FTP/SFTP
3. **Supprimez** tout le contenu du dossier `/www`  
4. **Uploadez** **TOUS** les fichiers de `dist/` vers `/www`

### 3. Structure finale sur OVH
```
/www/
├── index.html              # ✅ Obligatoire
├── .htaccess              # ✅ Configuration Apache + React Router
└── assets/
    ├── logo-dialog-[hash].png
    ├── index-[hash].css
    ├── index-[hash].js
    └── vanta.fog.min-[hash].js
```

## ✅ Vérifications post-déploiement

### 1. Test du site principal
- Accéder à `https://votre-domaine.com`
- Vérifier le chargement de toutes les sections
- Tester le formulaire de contact

### 2. Test de la navigation
- Cliquer sur **"Mentions légales"** → `/mentions-legales`
- Cliquer sur **"Politique de confidentialité"** → `/politique-confidentialite`
- Vérifier que l'URL se met à jour et que le contenu s'affiche

### 3. Test des fonctionnalités
- **Formulaire contact** : Envoie vers `contact@dialog-ia.com`
- **Navigation smooth** : Les ancres fonctionnent
- **Responsive** : Mobile/tablette/desktop

## 🎯 Fonctionnalités activées

### ✅ Site vitrine complet
- **7 sections** : Hero, About, Services, Methodology, Difference, CTA, Footer
- **Pages légales** : Mentions légales + Politique de confidentialité
- **Contact fonctionnel** : EmailJS configuré

### ✅ Performance optimisée
- **Compression GZIP** activée via .htaccess
- **Cache statique** configuré (1 mois pour les assets)
- **Build minifié** : CSS 33KB, JS optimisé

### ✅ SEO & Sécurité
- **React Router** : URLs propres et bookmarkables
- **Headers sécurité** : XSS, CSRF, HTTPS
- **Meta tags** optimisés

## 🔧 Configuration technique

### Apache .htaccess
- **SPA Routing** : Redirection vers index.html pour React Router
- **Compression** : GZIP pour tous les text/assets
- **Cache** : 1 mois pour images/CSS/JS
- **Sécurité** : Headers X-Frame-Options, XSS-Protection, etc.

### EmailJS
- **Service ID** : `service_0epmai4`
- **Template ID** : `template_lfuf901`
- **Destination** : `contact@dialog-ia.com`

## 📧 Variables configurées

Le build inclut toutes les configurations nécessaires :
- ✅ **EmailJS** : Clés publiques intégrées
- ✅ **Logo** : Inclus dans les assets
- ✅ **Styles** : Compilés et optimisés

## 🚫 Archivé temporairement

Les éléments suivants sont **archivés** dans `archive/diagnostic-ia/` :
- Diagnostic IA interactif
- Analyse OpenAI
- Templates EmailJS diagnostic
- Composants de questionnaire

→ **Réintégration prévue** ultérieurement

## 📞 Support

- **Email technique** : contact@dialog-ia.com
- **Problèmes OVH** : Vérifier les logs dans l'espace client
- **Erreurs 404** : Vérifier que .htaccess est bien uploadé

## 🎉 Site prêt !

Après upload, votre site Dialog sera **100% fonctionnel** avec :
- Navigation fluide
- Contact opérationnel  
- Pages légales conformes
- Performance optimisée

---

**Version** : 2.0 Production  
**Build** : $(date)  
**Status** : ✅ Prêt pour OVH  
**Taille** : ~1.2MB total