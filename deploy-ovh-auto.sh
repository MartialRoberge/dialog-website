#!/bin/bash
echo "🚀 Déploiement automatique Dialog sur OVH..."

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trouvé. Installation..."
    # OVH a généralement Node.js installé
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Build de production
echo "🔨 Build en cours..."
npm run build

# Copier .htaccess
cp .htaccess dist/

# Déployer vers /www
echo "📤 Déploiement vers /www..."
cp -r dist/* /www/

echo "✅ Déploiement terminé !"
