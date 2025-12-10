'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DoorstepBookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DoorstepBookingModal({ isOpen, onClose }: DoorstepBookingModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    propertyType: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const DOORSTEP_PRICE = 1999
  const SERVICE_ID = 'doorstep'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return false
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid phone number')
      return false
    }
    if (!formData.city.trim()) {
      setError('Please enter your city')
      return false
    }
    if (!formData.propertyType) {
      setError('Please select property type')
      return false
    }
    return true
  }

  const handleBooking = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    setError('')

    try {
      // Create Razorpay order
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: DOORSTEP_PRICE * 100, // Convert to paise
          currency: 'INR',
          receipt: `doorstep_${Date.now()}`,
          notes: {
            serviceId: SERVICE_ID,
            serviceName: 'Doorstep Consultation',
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.phone,
            city: formData.city,
            propertyType: formData.propertyType
          }
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create payment order')
      }

      const order = await response.json()

      // Initialize Razorpay
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: DOORSTEP_PRICE * 100,
          currency: 'INR',
          name: 'SaleDeed.com',
          description: 'Doorstep Consultation Service',
          order_id: order.id,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone
          },
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
                  serviceId: SERVICE_ID,
                  serviceName: 'Doorstep Consultation',
                  amount: DOORSTEP_PRICE,
                  gst: 0,
                  customerName: formData.name,
                  customerEmail: formData.email,
                  customerPhone: formData.phone,
                  city: formData.city,
                  propertyType: formData.propertyType
                })
              })

              if (verifyResponse.ok) {
                const verifyData = await verifyResponse.json()
                // Redirect to bill page with payment ID
                router.push(`/bill/${verifyData.paymentId}`)
                onClose()
              } else {
                setError('Payment verification failed. Please contact support.')
              }
            } catch (err) {
              setError('Error processing payment. Please try again.')
              console.error('Payment verification error:', err)
            }
          },
          modal: {
            ondismiss: () => {
              setIsLoading(false)
            }
          },
          theme: {
            color: '#d97706'
          }
        }

        const rzp = new (window as any).Razorpay(options)
        rzp.open()
        setIsLoading(false)
      }
      document.body.appendChild(script)
    } catch (err) {
      setError('Failed to initiate payment. Please try again.')
      console.error('Payment error:', err)
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sm:p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                📍
              </div>
              <h3 className="text-base sm:text-xl font-bold truncate">Doorstep Advice Service</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0 text-xl sm:text-2xl leading-none"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-2xl sm:text-4xl">
              🏠
            </div>
            <h4 className="text-base sm:text-lg font-bold text-text-light dark:text-text-dark mb-2">
              Expert Legal Advice at Your Doorstep
            </h4>
            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-xs sm:text-sm">
              In our doorstep service, our property advisor will visit you, review your case and documents,
              and guide you on what needs to be done and how to proceed.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 flex-shrink-0 mt-0.5 text-lg">✓</span>
              <span className="text-xs sm:text-sm text-text-light dark:text-text-dark">Personal consultation at your home</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 flex-shrink-0 mt-0.5 text-lg">✓</span>
              <span className="text-xs sm:text-sm text-text-light dark:text-text-dark">Document review and analysis</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 flex-shrink-0 mt-0.5 text-lg">✓</span>
              <span className="text-xs sm:text-sm text-text-light dark:text-text-dark">Step-by-step guidance</span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 flex-shrink-0 mt-0.5 text-lg">✓</span>
              <span className="text-xs sm:text-sm text-text-light dark:text-text-dark">Customized action plan</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-3 sm:p-4 text-center border border-orange-200 dark:border-orange-800">
            <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">₹{DOORSTEP_PRICE}</div>
            <div className="text-xs sm:text-sm  text-subtext-light dark:text-subtext-dark">One-time consultation fee (All inclusive)</div>
          </div>

          {/* Form */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Property Type *
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="agricultural">Agricultural</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm">
              {error}
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleBooking}
            disabled={isLoading}
            className="w-full text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-base text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed doorstep-book-btn"
            style={{
              background: '#22c55e !important',
              backgroundColor: '#22c55e !important',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#16a34a !important';
              e.currentTarget.style.backgroundColor = '#16a34a !important';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#22c55e !important';
              e.currentTarget.style.backgroundColor = '#22c55e !important';
            }}
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                <span className="hidden sm:inline">Processing...</span>
                <span className="sm:hidden">Processing</span>
              </>
            ) : (
              <>
                <span className="text-lg">💳</span>
                <span className="hidden sm:inline">Book via Razorpay</span>
                <span className="sm:hidden">Book Now</span>
              </>
            )}
          </button>

          <p className="text-xs text-center text-subtext-light dark:text-subtext-dark">
            Secure payment powered by Razorpay
          </p>
          <p className="text-xs text-center text-gray-400">
            Press ESC or click outside to close
          </p>
        </div>
      </div>
    </div>
  )
}
