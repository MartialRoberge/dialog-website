# 📧 Configuration EmailJS pour Dialog IA

## 🚨 PROBLÈME ACTUEL : EMAIL NON REÇU

**Symptômes :** L'utilisateur ne reçoit pas l'email de diagnostic.

**Causes possibles :**
1. ❌ Configuration EmailJS incomplète ou incorrecte
2. ❌ Template EmailJS mal configuré
3. ❌ Service EmailJS non connecté
4. ❌ Clés API invalides

---

## ✅ SOLUTION : CONFIGURATION COMPLÈTE

### ÉTAPE 1 : Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Vérifiez votre email

### ÉTAPE 2 : Ajouter un service email
1. Dans le dashboard, cliquez sur **"Email Services"**
2. Cliquez **"Add New Service"**
3. Choisissez votre provider (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte
5. **Notez le SERVICE_ID** généré (ex: `service_xyz123`)

### ÉTAPE 3 : Créer DEUX templates email

#### 📧 TEMPLATE 1 : Rapport Client (`clientTemplateId`)
1. Allez dans **"Email Templates"**
2. Cliquez **"Create New Template"**
3. **Nom :** "Rapport Diagnostic Client"
4. **Configuration :**

```
Destinataire: {{to_email}}
Sujet: Votre diagnostic IA personnalisé - {{user_name}}

Contenu:
{{message}}

---
Envoyé depuis Dialog IA
Contact: {{reply_to}}
```

5. **Notez le TEMPLATE_ID** → `clientTemplateId`

#### 🔥 TEMPLATE 2 : Notification Martial (`notificationTemplateId`)
1. Cliquez **"Create New Template"** 
2. **Nom :** "Notification Lead Martial"
3. **Configuration :**

```
Destinataire: martial@lexiapro.fr
Sujet: {{subject}}

Contenu:
{{message}}

---
Répondre directement à : {{from_email}}
```

4. **Notez le TEMPLATE_ID** → `notificationTemplateId`

### ÉTAPE 4 : Récupérer la clé publique
1. Allez dans **"Account"** > **"General"**
2. Copiez votre **PUBLIC KEY** (ex: `ZC7l4ZwISjgdjZvl0`)

### ÉTAPE 5 : Mettre à jour la configuration
Modifiez `src/config/emailjs.js` :

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'VOTRE_SERVICE_ID',                    // ⬅️ Remplacez ici
  clientTemplateId: 'VOTRE_CLIENT_TEMPLATE_ID',    // ⬅️ Template rapport client
  notificationTemplateId: 'VOTRE_NOTIF_TEMPLATE_ID', // ⬅️ Template notification Martial
  publicKey: 'VOTRE_PUBLIC_KEY'                     // ⬅️ Remplacez ici
}
```

**Exemple :**
```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',
  clientTemplateId: 'template_client456',      // Pour le client
  notificationTemplateId: 'template_martial789', // Pour Martial
  publicKey: 'ZC7l4ZwISjgdjZvl0'
}
```

---

## 🔧 DÉPANNAGE

### Vérifier les logs navigateur
1. Ouvrez les DevTools (F12)
2. Onglet **Console**
3. Recherchez les messages commençant par `📧`
4. Envoyez un test de diagnostic

### Messages d'erreur courants

| Erreur | Solution |
|--------|----------|
| `Configuration EmailJS manquante` | Vérifiez que tous les IDs sont renseignés |
| `template_id not found` | Vérifiez l'ID du template dans EmailJS |
| `service_id not found` | Vérifiez l'ID du service dans EmailJS |
| `401 Unauthorized` | Vérifiez la clé publique |
| `400 Bad Request` | Vérifiez les variables du template |

### Test rapide
Ajoutez ce code temporaire pour tester :

```javascript
// Dans la console du navigateur
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  to_email: 'test@example.com',
  message: 'Test depuis la console'
})
```

---

## 📋 CHECKLIST DE VALIDATION

- [ ] ✅ Compte EmailJS créé et vérifié
- [ ] ✅ Service email connecté (Gmail/Outlook)
- [ ] ✅ Template créé avec toutes les variables
- [ ] ✅ IDs copiés dans `emailjs.js`
- [ ] ✅ Test envoi depuis la console
- [ ] ✅ Test diagnostic complet

---

## 🆘 SUPPORT

Si le problème persiste :
1. Vérifiez les quotas EmailJS (200 emails/mois gratuit)
2. Testez avec un autre email de destination
3. Contactez le support EmailJS
4. Utilisez un service alternatif (Formspree, Netlify Forms)

**Contact développeur :** martial@lexiapro.fr 