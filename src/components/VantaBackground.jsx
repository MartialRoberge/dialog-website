import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const VantaBackground = ({ className = '' }) => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    // Force cleanup complet
    if (vantaEffect.current) {
      vantaEffect.current.destroy()
      vantaEffect.current = null
    }

    // Import Vanta FOG effect normalement
    import('vanta/dist/vanta.fog.min.js').then((VANTA) => {
      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0xcbe7e1,   
          midtoneColor: 0xffa9a5,
          lowlightColor: 0xea9999,
          baseColor: 0x66c1bd,
          backgroundAlpha: 1,
          blurFactor: 0.6,
          scale: 1.8,
          scaleMobile: 3.5,
          speed: 2,
          zoom: 0.8
        })
      }
    }).catch((error) => {
      console.error('Error loading Vanta FOG:', error)
    })

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [refreshKey])

  return (
    <div>
      {/* Bouton pour forcer le refresh en dev */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={() => setRefreshKey(prev => prev + 1)}
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: 9999,
            padding: '10px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          🔄 Refresh Vanta
        </button>
      )}
      <div
        ref={vantaRef}
        className={`absolute inset-0 ${className}`}
        style={{ zIndex: 0 }}
      />
    </div>
  )
}

export default VantaBackground 