import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const MentionsLegales = () => {
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
          <h1 className="text-3xl font-bold text-deep-teal font-space">Mentions légales</h1>
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
          
          {/* Section Éditeur */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Éditeur du site</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-charcoal mb-2">Dialog</p>
              <p className="text-charcoal/80 mb-4">SAS (Société par Actions Simplifiée)</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-charcoal mb-2">Identification</p>
                  <div className="space-y-1 text-charcoal/80">
                    <p><strong>SIREN :</strong> 990 094 906</p>
                    <p><strong>SIRET :</strong> 990 094 906 00015</p>
                    <p><strong>RCS :</strong> Paris 990 094 906</p>
                    <p><strong>TVA :</strong> FR06990094906</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-charcoal mb-2">Activité</p>
                  <div className="space-y-1 text-charcoal/80">
                    <p><strong>Code NAF :</strong> 70.22Z</p>
                    <p><strong>Activité :</strong> Conseil pour les affaires et autres conseils de gestion</p>
                    <p><strong>Capital social :</strong> 1 000,00 €</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center text-charcoal/80 mb-2">
                  <Mail size={16} className="mr-2 text-deep-teal" />
                  <a href="mailto:contact@dialog-ia.com" className="hover:text-deep-teal transition-colors">
                    contact@dialog-ia.com
                  </a>
                </div>
                <div className="flex items-center text-charcoal/80">
                  <MapPin size={16} className="mr-2 text-deep-teal" />
                  <span>France</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-charcoal/80">
                Ce site est hébergé par <strong>Netlify, Inc.</strong><br />
                2325 3rd Street, Suite 296<br />
                San Francisco, CA 94107, États-Unis<br />
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-deep-teal hover:text-mint-teal transition-colors">
                  www.netlify.com
                </a>
              </p>
            </div>
          </section>

          {/* Section Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Propriété intellectuelle</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-charcoal/80 mb-4">
                La marque "Dialog" ainsi que les logos, graphismes, photographies, animations, vidéos et textes contenus sur ce site sont la propriété exclusive de Dialog et ne peuvent être reproduits, utilisés ou représentés sans autorisation expresse.
              </p>
            </div>
          </section>

          {/* Section Données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Protection des données personnelles</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition relativement aux données vous concernant.
              </p>
              <p className="text-charcoal/80 mb-4">
                Les informations recueillies via notre formulaire de contact sont utilisées uniquement dans le cadre de notre relation commerciale 
                et ne sont jamais communiquées à des tiers sans votre accord préalable.
              </p>
              <p className="text-charcoal/80">
                Pour exercer vos droits, contactez-nous à : 
                <a href="mailto:contact@dialog-ia.com" className="text-deep-teal hover:text-mint-teal transition-colors ml-1">
                  contact@dialog-ia.com
                </a>
              </p>
            </div>
          </section>

          {/* Section Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Limitation de responsabilité</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 mb-4">
                Dialog s'efforce de fournir des informations aussi précises que possible sur ce site. Toutefois, Dialog ne pourra être tenu responsable 
                des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-charcoal/80">
                Tous les informations indiquées sur le site dialog-ia.com sont données à titre indicatif, et sont susceptibles d'évoluer. 
                Par ailleurs, les renseignements figurant sur le site dialog-ia.com ne sont pas exhaustifs.
              </p>
            </div>
          </section>

          {/* Section Liens hypertextes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Liens hypertextes</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80 mb-4">
                Le site dialog-ia.com peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                Les liens vers ces autres ressources vous font quitter le site dialog-ia.com.
              </p>
              <p className="text-charcoal/80">
                Il est possible qu'un lien vers le site dialog-ia.com soit créé par un tiers. Cependant, tout lien vers le présent site devra faire l'objet d'une autorisation préalable de Dialog.
              </p>
            </div>
          </section>

          {/* Section Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-deep-teal mb-4 font-space">Droit applicable</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal/80">
                Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit français, 
                quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, 
                les tribunaux français seront seuls compétents pour connaître de ce litige.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-charcoal/60 text-center">
              Dernière mise à jour : Septembre 2025
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

export default MentionsLegales
