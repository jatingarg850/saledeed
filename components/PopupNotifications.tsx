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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-2xl p-6 backdrop-blur-lg border border-white/20" style={{ background: 'linear-gradient(to right, #2563eb, #1d4ed8)' }}>
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
            <div className="mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 px-4 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: '#16a34a' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span style={{ color: '#ffffff' }}>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
