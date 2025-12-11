'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Service {
  id: string
  name: string
  price: number
  gst: number
  description: string
  features: string[]
}

interface ServiceBookingModalProps {
  isOpen: boolean
  onClose: () => void
  service: Service
}

export default function ServiceBookingModal({ isOpen, onClose, service }: ServiceBookingModalProps) {
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

  const gstAmount = (service.price * service.gst) / 100
  const totalAmount = service.price + gstAmount

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
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'INR',
          receipt: `${service.id}_${Date.now()}`,
          notes: {
            serviceId: service.id,
            serviceName: service.name,
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
          amount: Math.round(totalAmount * 100), // Convert to paise
          currency: 'INR',
          name: 'SaleDeed.com',
          description: service.name,
          order_id: order.orderId,
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
                  serviceId: service.id,
                  serviceName: service.name,
                  amount: service.price,
                  gst: gstAmount,
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
                📋
              </div>
              <h3 className="text-base sm:text-xl font-bold truncate">{service.name}</h3>
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
            <h4 className="text-base sm:text-lg font-bold text-text-light dark:text-text-dark mb-2">
              {service.description}
            </h4>
            <p className="text-xs sm:text-sm text-subtext-light dark:text-subtext-dark">
              Fill in your details below to proceed with booking
            </p>
          </div>

          {/* Pricing Summary */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-subtext-light dark:text-subtext-dark">Service Price:</span>
                <span className="font-semibold text-text-light dark:text-text-dark">₹{service.price.toLocaleString()}</span>
              </div>
              {service.gst > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-subtext-light dark:text-subtext-dark">GST ({service.gst}%):</span>
                  <span className="font-semibold text-text-light dark:text-text-dark">₹{Math.round(gstAmount).toLocaleString()}</span>
                </div>
              )}
            </div>
            <div className="border-t border-orange-200 dark:border-orange-700 pt-3 flex justify-between">
              <span className="font-bold text-text-light dark:text-text-dark">Total Amount:</span>
              <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">₹{Math.round(totalAmount).toLocaleString()}</span>
            </div>
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
            className="w-full text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-base text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: '#d97706',
              backgroundColor: '#d97706',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b45309';
              e.currentTarget.style.backgroundColor = '#b45309';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#d97706';
              e.currentTarget.style.backgroundColor = '#d97706';
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
                <span className="hidden sm:inline">Proceed to Payment</span>
                <span className="sm:hidden">Pay Now</span>
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
