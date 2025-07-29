#!/bin/bash

# Script de déploiement pour OVH
echo "🚀 Déploiement Dialog sur OVH..."

# Build de production
echo "📦 Build en cours..."
npm run build

# Copier les fichiers vers le dossier www
echo "📁 Copie des fichiers..."
cp -r dist/* /www/

echo "✅ Déploiement terminé !" 