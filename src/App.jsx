import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import NavBar from './components/NavBar'

// Sections
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Methodology from './sections/Methodology'
import Difference from './sections/Difference'
// import Diag from './sections/Diag' // Section diagnostic temporairement désactivée
// import Testimonials from './sections/Testimonials' // Section "Ils nous font confiance" supprimée
import CTA from './sections/CTA'
import Footer from './sections/Footer'

// Pages
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'

// Page d'accueil
const HomePage = () => (
  <>
    <NavBar />
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Difference />
      {/* <Diag /> */} {/* Section diagnostic temporairement désactivée */}
      {/* <Testimonials /> */} {/* Section "Ils nous font confiance" supprimée */}
      <CTA />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 