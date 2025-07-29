import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'

// Components
import NavBar from './components/NavBar'

// Sections
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Methodology from './sections/Methodology'
import Diag from './sections/Diag'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Services />
          <Methodology />
          <Diag />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 