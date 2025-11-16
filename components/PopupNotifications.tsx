'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Popup {
  id: number
  message: string
  type: 'commission' | 'seamless' | 'service'
  icon: string
}

export default function PopupNotifications() {
  const [currentPopup, setCurrentPopup] = useState<Popup | null>(null)
  const [popupIndex, setPopupIndex] = useState(0)

  const popups: Popup[] = [
    {
      id: 1,
      message: 'Buy/Sell/Rent with Minimum Commission',
      type: 'commission',
      icon: 'percent'
    },
    {
      id: 2,
      message: 'For Every Property Need - Indeed, Seamless Process Guaranteed',
      type: 'seamless',
      icon: 'check-circle'
    },
    {
      id: 3,
      message: 'Expert Legal Assistance Available 24/7',
      type: 'service',
      icon: 'headset'
    }
  ]

  useEffect(() => {
    // Show first popup after 3 seconds
    const initialTimer = setTimeout(() => {
      setCurrentPopup(popups[0])
    }, 3000)

    return () => clearTimeout(initialTimer)
  }, [])

  useEffect(() => {
    if (currentPopup) {
      // Hide popup after 5 seconds
      const hideTimer = setTimeout(() => {
        setCurrentPopup(null)
        
        // Show next popup after 10 seconds
        const nextTimer = setTimeout(() => {
          const nextIndex = (popupIndex + 1) % popups.length
          setPopupIndex(nextIndex)
          setCurrentPopup(popups[nextIndex])
        }, 10000)

        return () => clearTimeout(nextTimer)
      }, 5000)

      return () => clearTimeout(hideTimer)
    }
  }, [currentPopup, popupIndex])

  return (
    <AnimatePresence>
      {currentPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className="fixed bottom-8 right-8 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 text-white rounded-2xl shadow-2xl p-6 backdrop-blur-lg border border-white/20" style={{ background: 'linear-gradient(to right, #a16207, #b45309)' }}>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">Special Offer!</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {currentPopup.message}
                </p>
              </div>
              <button
                onClick={() => setCurrentPopup(null)}
                className="text-white/80 hover:text-white transition-colors flex-shrink-0"
              >
                <i data-lucide="x" className="w-5 h-5"></i>
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href="/contact"
                className="flex-1 bg-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-50 transition-colors text-center"
                style={{ color: '#a16207' }}
              >
                Learn More
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-2"
                style={{ color: '#ffffff !important', backgroundColor: '#16a34a !important' }}
              >
                <i data-lucide="message-circle" className="w-4 h-4" style={{ color: '#ffffff !important' }}></i>
                <span style={{ color: '#ffffff !important' }}>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
