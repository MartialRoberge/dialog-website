import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-snow-grey/30 to-mint-teal/10">
      {/* Header avec navigation retour */}
      <motion.header 
        className="bg-white shadow-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-deep-teal hover:text-mint-teal transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour au site
          </Link>
          <h1 className="text-3xl font-bold text-deep-teal font-space">Politique de confidentialité</h1>
          <p className="text-charcoal/80 mt-2">Mise à jour : Septembre 2025</p>
        </div>
      </motion.header>

      {/* Contenu principal */}
      <motion.main 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          
          {/* Introduction */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-deep-teal to-mint-teal text-white p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <Shield size={24} className="mr-3" />
                <h2 className="text-xl font-bold">Notre engagement</h2>
              </div>
              <p>
                Dialog s'engage à protéger votre vie privée et vos données personnelles. Cette politique explique comment nous collectons, 
                utilisons et protégeons vos informations lorsque vous visitez notre site web.
              </p>
            </div>
          </section>

          {/* Section 1 : Responsable du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space flex items-center">
              <UserCheck size={20} className="mr-2" />
              Responsable du traitement
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-charcoal/80 mb-4">
                <strong>Dialog</strong> est le responsable du traitement des données personnelles collectées sur le site dialog-ia.com.
              </p>
              <p className="text-charcoal/80">
                <strong>Contact :</strong> <a href="mailto:contact@dialog-ia.com" className="text-deep-teal hover:text-mint-teal transition-colors">contact@dialog-ia.com</a>
              </p>
            </div>
          </section>

          {/* Section 2 : Données collectées */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space flex items-center">
              <Eye size={20} className="mr-2" />
              Données que nous collectons
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-deep-teal pl-6">
                <h3 className="font-semibold text-charcoal mb-2">Via le formulaire de contact :</h3>
                <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                  <li>Prénom et nom</li>
                  <li>Adresse email</li>
                  <li>Secteur d'activité</li>
                  <li>Message</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-mint-teal pl-6">
                <h3 className="font-semibold text-charcoal mb-2">Données techniques automatiques :</h3>
                <ul className="list-disc list-inside text-charcoal/80 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Horodatage des visites</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 : Finalités */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Finalités du traitement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">🎯 Objectifs principaux</h3>
                <ul className="text-charcoal/80 space-y-2">
                  <li>• Répondre à vos demandes de contact</li>
                  <li>• Vous fournir des informations sur nos services</li>
                  <li>• Améliorer notre site web</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">⚖️ Base légale</h3>
                <ul className="text-charcoal/80 space-y-2">
                  <li>• Consentement (formulaire de contact)</li>
                  <li>• Intérêt légitime (amélioration du site)</li>
                  <li>• Exécution précontractuelle</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 : Durée de conservation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Durée de conservation</h2>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <div className="space-y-3">
                <p className="text-charcoal/80">
                  <strong>Données de contact :</strong> 3 ans à compter du dernier contact
                </p>
                <p className="text-charcoal/80">
                  <strong>Données techniques :</strong> 13 mois maximum
                </p>
                <p className="text-charcoal/80">
                  <strong>Données de prospection :</strong> 3 ans à compter de la collecte
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 : Vos droits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space flex items-center">
              <Lock size={20} className="mr-2" />
              Vos droits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titre: "Droit d'accès", desc: "Connaître les données que nous avons sur vous" },
                { titre: "Droit de rectification", desc: "Corriger vos données inexactes" },
                { titre: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                { titre: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                { titre: "Droit à la portabilité", desc: "Récupérer vos données dans un format lisible" },
                { titre: "Droit de limitation", desc: "Limiter le traitement de vos données" }
              ].map((droit, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-deep-teal">
                  <h3 className="font-semibold text-charcoal mb-1">{droit.titre}</h3>
                  <p className="text-sm text-charcoal/80">{droit.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-deep-teal/10 p-6 rounded-lg">
              <p className="text-charcoal/80 mb-2">
                <strong>Pour exercer vos droits :</strong>
              </p>
              <p className="text-charcoal/80">
                Contactez-nous à <a href="mailto:contact@dialog-ia.com" className="text-deep-teal hover:text-mint-teal transition-colors font-semibold">contact@dialog-ia.com</a> en précisant votre demande et en justifiant de votre identité.
              </p>
            </div>
          </section>

          {/* Section 6 : Sécurité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Sécurité des données</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-charcoal/80 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-charcoal/80 space-y-2">
                <li>Chiffrement des données en transit (HTTPS)</li>
                <li>Accès limité aux données sur la base du besoin d'en connaître</li>
                <li>Hébergement sécurisé chez des prestataires certifiés</li>
                <li>Sauvegarde régulière des données</li>
              </ul>
            </div>
          </section>

          {/* Section 7 : Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Cookies et technologies similaires</h2>
            <div className="space-y-4">
              <p className="text-charcoal/80">
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">Types de cookies utilisés :</h3>
                <ul className="text-charcoal/80 space-y-2">
                  <li>• <strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                  <li>• <strong>Cookies analytiques :</strong> Mesure d'audience (anonymisés)</li>
                </ul>
              </div>
              <p className="text-charcoal/80">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le fonctionnement du site.
              </p>
            </div>
          </section>

          {/* Section 8 : Transferts internationaux */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Transferts de données</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p className="text-charcoal/80 mb-3">
                Vos données peuvent être transférées vers des pays tiers dans le cadre de nos services (notamment pour l'hébergement).
              </p>
              <p className="text-charcoal/80">
                Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, décisions d'adéquation) 
                pour assurer un niveau de protection équivalent au RGPD.
              </p>
            </div>
          </section>

          {/* Section 9 : Contact et réclamations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Contact et réclamations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-deep-teal/10 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">Nous contacter</h3>
                <p className="text-charcoal/80 mb-2">
                  Pour toute question sur cette politique ou l'exercice de vos droits :
                </p>
                <p className="text-charcoal/80">
                  <a href="mailto:contact@dialog-ia.com" className="text-deep-teal hover:text-mint-teal transition-colors font-semibold">
                    contact@dialog-ia.com
                  </a>
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-charcoal mb-3">Réclamation</h3>
                <p className="text-charcoal/80 mb-2">
                  En cas de litige, vous pouvez saisir la CNIL :
                </p>
                <p className="text-charcoal/80">
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-mint-teal transition-colors">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 : Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Modifications de cette politique</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-charcoal/80">
                Cette politique de confidentialité peut être modifiée occasionnellement. Nous vous encourageons à la consulter régulièrement. 
                La date de dernière modification est indiquée en haut de cette page.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-charcoal/60 text-center">
              Dernière mise à jour : Septembre 2025 • Conforme au RGPD
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

export default PolitiqueConfidentialite
