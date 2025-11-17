'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface PropertyDocument {
  title: string
  description: string
  images: string[]
  link: string
}

interface PropertyDocumentCardProps {
  document: PropertyDocument
}

export default function PropertyDocumentCard({ document }: PropertyDocumentCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [showPricePopup, setShowPricePopup] = useState(false)

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Disable auto-slide on mobile for better performance
    if (isMobile) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % document.images.length)
    }, 4000) // Slower on desktop

    return () => clearInterval(interval)
  }, [document.images.length, isMobile])

  // Lazy load images
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const handleBookNow = () => {
    setShowPricePopup(true)
  }

  const handleWhatsAppRedirect = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(document.title)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setShowPricePopup(false)
  }

  return (
    <>
      <div className={`property-card bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden ${
        isMobile ? '' : 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
      }`}>
      {/* Image Slider */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        {imagesLoaded ? (
          <div 
            className={`flex h-full ${isMobile ? '' : 'transition-transform duration-500 ease-in-out'}`}
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {document.images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <img
                  src={image}
                  alt={`${document.title} - Image ${index + 1}`}
                  className="w-full h-full object-contain sm:object-cover bg-white dark:bg-slate-800"
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    transform: 'translateZ(0)' // Force hardware acceleration
                  } as React.CSSProperties}
                />
              </div>
            ))}
          </div>
        ) : (
          // Loading placeholder
          <div className="w-full h-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
            <div className="text-gray-400 dark:text-slate-500">Loading...</div>
          </div>
        )}
        
        {/* Slider Indicators - Only show if images loaded and more than 1 image */}
        {imagesLoaded && document.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {document.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  isMobile ? '' : 'transition-all duration-300'
                } ${
                  index === currentImageIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
          {document.title}
        </h3>
        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed mb-4 line-clamp-4">
          {document.description}
        </p>
        <div className="flex gap-2">
          <Link
            href={document.link}
            className={`flex-1 inline-flex items-center justify-center gap-2 ${
              isMobile 
                ? 'bg-amber-700 text-white' 
                : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'
            } px-4 py-2.5 rounded-full font-semibold text-sm`}
          >
            View Details
            <i data-lucide="arrow-right" className="w-4 h-4"></i>
          </Link>
          <button
            onClick={handleBookNow}
            className={`flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm ${
              isMobile ? '' : 'hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'
            }`}
            title="Book Now"
          >
            <i data-lucide="calendar-check" className="w-4 h-4"></i>
            Book Now
          </button>
        </div>
      </div>
    </div>

      {/* Price Popup Modal */}
      {showPricePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up border-4 border-primary">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="indian-rupee" className="w-8 h-8 text-white"></i>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-center text-text-light dark:text-text-dark mb-3">
              Our Services Start From
            </h3>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-primary mb-2">₹4,000</div>
              <p className="text-subtext-light dark:text-subtext-dark text-sm">
                All-inclusive pricing with no hidden charges
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark">
                <i data-lucide="check-circle" className="w-4 h-4 text-green-500"></i>
                <span>Expert Legal Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark">
                <i data-lucide="check-circle" className="w-4 h-4 text-green-500"></i>
                <span>Complete Documentation Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark">
                <i data-lucide="check-circle" className="w-4 h-4 text-green-500"></i>
                <span>Registration Assistance</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowPricePopup(false)}
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppRedirect}
                className="flex-1 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i data-lucide="message-circle" className="w-4 h-4"></i>
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
