// Configuration EmailJS
// ⚠️ IMPORTANT: Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // 1. Allez sur https://www.emailjs.com/ et créez un compte gratuit
  // 2. Allez dans "Email Services" et ajoutez votre service email (Gmail, Outlook, etc.)
  // 3. Notez votre SERVICE_ID

  serviceId: 'service_tkixpnf',        // ← Remplacez par votre Service ID
  
  // 4. CRÉEZ DEUX TEMPLATES DIFFÉRENTS :
  
  // TEMPLATE 1: Rapport pour le CLIENT
  // Variables: {{to_email}}, {{user_name}}, {{message}}, {{reply_to}}
  clientTemplateId: 'template_16yjbwp',    // ← Template pour envoyer le rapport au client
  
  // TEMPLATE 2: Notification pour MARTIAL  
  // Variables: {{from_name}}, {{from_email}}, {{company}}, {{sector}}, {{message}}, {{niveau}}
  notificationTemplateId: 'template_5t6sxy7', // ← Créez ce template pour Martial
  
  // 5. Allez dans "Account" pour récupérer votre PUBLIC KEY
  
  publicKey: 'ZC7l4ZwISjgdjZvl0'         // ← Remplacez par votre Public Key
  
  // Note: privateKey est optionnel pour l'autorisation renforcée
  // privateKey: 'YOUR_PRIVATE_KEY'    // ← Optionnel
}

// Template d'email suggéré pour EmailJS :
/*
Sujet: 🔥 Nouveau contact Dialog - {{from_name}}

Salut Martial !

Tu as reçu un nouveau contact depuis le site Dialog :

👤 CONTACT :
━━━━━━━━━━━━━━━━━━━━━━
• Nom : {{from_name}}
• Email : {{from_email}}
• Secteur : {{sector}}

💬 MESSAGE :
━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━
📅 Reçu le : {{timestamp}}
🌐 Source : {{source}}

Réponds directement à cet email pour contacter {{from_name}} !
*/ 