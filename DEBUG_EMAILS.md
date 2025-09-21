# 🔧 DEBUG - Problèmes d'emails

## 🚨 PROBLÈME : "Le diagnostic est envoyé à Martial au lieu du client"

### 🔍 DIAGNOSTIC RAPIDE :

1. **Ouvrez la console du navigateur** (F12 → Console)
2. **Faites un diagnostic** 
3. **Cliquez sur "Envoyer par email"**
4. **Regardez les logs** dans la console :

```
📧 === ENVOI EMAIL CLIENT ===
📧 Destinataire: john.doe@example.com
📧 Template ID: template_16yjbwp
📧 Paramètres: {...}

🔥 === ENVOI EMAIL MARTIAL ===
🔥 Destinataire: martial@lexiapro.fr  
🔥 Template ID: template_5t6sxy7
🔥 Paramètres: {...}
```

---

## ✅ SOLUTION : Configuration EmailJS

### 📧 **TEMPLATE CLIENT** (`template_16yjbwp`)

**Dans EmailJS :**
1. Allez sur https://emailjs.com
2. **Email Templates** → Sélectionnez `template_16yjbwp`
3. **Vérifiez la configuration :**

```
À (To): {{to_email}}          ← DOIT être {{to_email}}
Sujet: {{subject}}
Corps: {{message}}
```

### 🔥 **TEMPLATE MARTIAL** (`template_5t6sxy7`)

**Dans EmailJS :**
1. **Email Templates** → Sélectionnez `template_5t6sxy7`  
2. **Vérifiez la configuration :**

```
À (To): martial@lexiapro.fr   ← DOIT être martial@lexiapro.fr
Sujet: {{subject}}
Corps: {{message}}
```

---

## 🚨 ERREURS COMMUNES :

### ❌ **Erreur 1 : Destinataire fixé dans le template**
Si le template a un destinataire en dur au lieu de `{{to_email}}`

### ❌ **Erreur 2 : Templates inversés**  
Si vous avez inversé les IDs dans `src/config/emailjs.js`

### ❌ **Erreur 3 : Template inexistant**
Si l'ID du template n'existe pas sur EmailJS

---

## 🔧 SOLUTION RAPIDE :

1. **Vérifiez `src/config/emailjs.js` :**
```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'service_tkixpnf',
  clientTemplateId: 'template_16yjbwp',     // ← Pour le CLIENT
  notificationTemplateId: 'template_5t6sxy7', // ← Pour MARTIAL  
  publicKey: 'ZC7l4ZwISjgdjZvl0'
}
```

2. **Dans EmailJS, template `template_16yjbwp` :**
   - **À :** `{{to_email}}`
   - **De :** `Dialog IA <noreply@yourdomain.com>`
   - **Sujet :** `{{subject}}`
   - **Corps :** `{{message}}`

3. **Dans EmailJS, template `template_5t6sxy7` :**
   - **À :** `martial@lexiapro.fr`
   - **De :** `{{from_name}} <{{from_email}}>`
   - **Sujet :** `{{subject}}`
   - **Corps :** `{{message}}`

---

## 🧪 TEST :

Utilisez `test-email.html` pour tester vos templates :

1. Ouvrez `test-email.html` dans votre navigateur
2. Entrez vos vrais Template IDs
3. Testez les deux emails
4. Vérifiez qui reçoit quoi

---

## 📞 AIDE :

Si le problème persiste : martial@lexiapro.fr 