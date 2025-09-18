#!/bin/bash

# Configuration automatique OVH pour déploiement
echo "🔧 Configuration automatique OVH..."

# Créer le fichier de configuration OVH
cat > .ovh-config << 'EOF'
# Configuration OVH pour déploiement automatique
# Ce fichier configure OVH pour exécuter automatiquement le build

# Commande de déploiement
DEPLOY_SCRIPT="./deploy-ovh.sh"

# Répertoire de destination
DEST_DIR="/www"

# Variables d'environnement
export NODE_ENV=production
export NPM_CONFIG_PRODUCTION=false

# Hook post-déploiement
POST_DEPLOY="echo '✅ Site Dialog déployé avec succès'"
EOF

# Créer le script de déploiement OVH
cat > deploy-ovh-auto.sh << 'EOF'
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
EOF

chmod +x deploy-ovh-auto.sh

echo "✅ Configuration OVH créée !"
echo "📋 Prochaines étapes :"
echo "1. Commitez ces fichiers"
echo "2. Poussez vers GitHub"
echo "3. OVH exécutera automatiquement le déploiement"
