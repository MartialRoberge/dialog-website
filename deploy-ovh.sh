#!/bin/bash

# Script de déploiement automatique pour OVH
echo "🚀 Déploiement automatique Dialog sur OVH..."

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Vérifiez le répertoire de travail."
    exit 1
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Build de production
echo "🔨 Build en cours..."
npm run build

# Vérifier que le build a réussi
if [ ! -f "dist/index.html" ]; then
    echo "❌ Erreur: Build échoué. index.html non trouvé."
    exit 1
fi

# Copier le fichier .htaccess dans dist
echo "📁 Copie de la configuration Apache..."
cp .htaccess dist/

# Copier les fichiers vers le dossier www d'OVH
echo "📤 Déploiement vers /www..."
cp -r dist/* /www/

# Vérifier le déploiement
if [ -f "/www/index.html" ]; then
    echo "✅ Déploiement réussi !"
    echo "📊 Fichiers déployés:"
    ls -la /www/
else
    echo "❌ Erreur: Déploiement échoué."
    exit 1
fi

echo "🎉 Site Dialog déployé avec succès sur OVH !"
