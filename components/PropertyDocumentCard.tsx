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
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: ''
  })
  const [showCustomerForm, setShowCustomerForm] = useState(false)
  const [formError, setFormError] = useState('')

  // Get price based on document title
  const getPrice = () => {
    if (document.title.toLowerCase().includes('rent agreement')) {
      return 2000
    }
    return 4000 // Default price for other documents
  }

  const price = getPrice()

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
    setShowCustomerForm(true)
    setFormError('')
  }

  const handleCustomerDetailsSubmit = () => {
    if (!customerDetails.name.trim()) {
      setFormError('Please enter your name')
      return
    }
    if (!customerDetails.phone.trim() || customerDetails.phone.length < 10) {
      setFormError('Please enter a valid phone number')
      return
    }
    setFormError('')
    setShowCustomerForm(false)
    setShowPricePopup(true)
  }

  const handleRazorpayPayment = async () => {
    if (typeof window === 'undefined') {
      alert('Payment is not available in this context')
      return
    }

    try {
      // Create Razorpay order
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: price * 100, // Convert to paise
          currency: 'INR',
          receipt: `doc_${Date.now()}`,
          notes: {
            serviceId: 'document-consultation',
            serviceName: document.title,
            serviceType: 'Document Consultation'
          }
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create payment order')
      }

      const order = await response.json()

      // Check if Razorpay script is already loaded
      if (typeof (window as any).Razorpay === 'undefined') {
        // Load Razorpay script
        const scriptElement = window.document.createElement('script')
        scriptElement.src = 'https://checkout.razorpay.com/v1/checkout.js'
        scriptElement.async = true
        scriptElement.onload = () => {
          openRazorpayCheckout(order)
        }
        scriptElement.onerror = () => {
          alert('Failed to load payment gateway. Please try again.')
        }
        window.document.body.appendChild(scriptElement)
      } else {
        // Razorpay already loaded
        openRazorpayCheckout(order)
      }
    } catch (err) {
      alert('Failed to initiate payment. Please try again.')
      console.error('Payment error:', err)
    }
  }

  const openRazorpayCheckout = async (order: any) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: price * 100,
      currency: 'INR',
      name: 'SaleDeed.com',
      description: `${document.title} - Document Consultation`,
      order_id: order.id,
      handler: async (response: any) => {
        try {
          // Verify payment
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              serviceId: 'document-consultation',
              serviceName: document.title,
              amount: price,
              gst: 0,
              customerName: customerDetails.name,
              customerEmail: '',
              customerPhone: customerDetails.phone,
              city: '',
              propertyType: ''
            })
          })

          if (verifyResponse.ok) {
            const verifyData = await verifyResponse.json()
            // Redirect to bill page with payment ID
            window.location.href = `/bill/${verifyData.paymentId}`
            setShowPricePopup(false)
          } else {
            alert('Payment verification failed. Please contact support.')
          }
        } catch (err) {
          alert('Error processing payment. Please try again.')
          console.error('Payment verification error:', err)
        }
      },
      theme: {
        color: '#22c55e'
      }
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()
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
            className={`flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2.5 rounded-full font-semibold text-sm ${
              isMobile ? '' : 'hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'
            }`}
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

      {/* Customer Details Form Modal */}
      {showCustomerForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark mb-4">
              Your Details
            </h3>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mb-6">
              Please provide your details to proceed with the booking.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {formError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-2 rounded-lg mb-4 text-xs sm:text-sm">
                {formError}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowCustomerForm(false)
                  setCustomerDetails({ name: '', phone: '' })
                  setFormError('')
                }}
                className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomerDetailsSubmit}
                className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 text-sm"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

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
              Book From Just
            </h3>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-primary mb-2">{price.toLocaleString('en-IN')} INR</div>
              <p className="text-subtext-light dark:text-subtext-dark text-sm">
                Remaining payment will be charged after consultation.
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
                onClick={handleRazorpayPayment}
                className="flex-1 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>💳</span>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
