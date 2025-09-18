// Configuration EmailJS
// ⚠️ IMPORTANT: Remplacez ces valeurs par vos vraies clés EmailJS

export const EMAILJS_CONFIG = {
  // Configuration principale avec vos vrais identifiants
  serviceId: 'service_0epmai4',
  
  // TEMPLATE CONTACT : Pour les formulaires de contact du site
  // Variables à utiliser dans EmailJS:
  // {{to_email}}, {{from_name}}, {{from_email}}, {{first_name}}, {{last_name}}, 
  // {{sector}}, {{message}}, {{timestamp}}, {{source}}, {{reply_to}}
  contactTemplateId: 'template_lfuf901',
  
  // ANCIENS TEMPLATES (diagnostic - gardés pour compatibilité)
  clientTemplateId: 'template_lmo0ozj',
  adminTemplateId: 'template_axbetmn',
  
  publicKey: 'nJQ3dnkWZedb2HzBG'
}

// VARIABLES EXACTES À UTILISER DANS VOTRE TEMPLATE EmailJS (template_lfuf901) :
/*
CONFIGURATION TEMPLATE:
- Service ID: service_0epmai4
- Template ID: template_lfuf901
- Destinataire: contact@dialog-ia.com

VARIABLES DISPONIBLES:
{{to_email}}      // contact@dialog-ia.com
{{from_name}}     // Nom complet (ex: "Jean Dupont")
{{from_email}}    // Email du contact
{{first_name}}    // Prénom
{{last_name}}     // Nom de famille
{{sector}}        // Secteur d'activité
{{message}}       // Message du contact
{{timestamp}}     // Date et heure
{{source}}        // dialog-ia.com
{{reply_to}}      // Email pour répondre

EXEMPLE DE CONTENU HTML POUR VOTRE TEMPLATE:
Sujet: 🔥 Nouveau contact Dialog - {{from_name}}

HTML Body:
<h2>🚀 Nouveau Contact Dialog</h2>
<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
<p><strong>Secteur :</strong> {{sector}}</p>
<p><strong>Message :</strong></p>
<p>{{message}}</p>
<p><strong>Reçu le :</strong> {{timestamp}}</p>
<p><strong>Source :</strong> {{source}}</p>
*/ 