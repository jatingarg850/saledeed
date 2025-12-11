'use client'

import { useState } from 'react'
import { calculateTotal } from '../lib/pricing'

interface ServiceBookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  price: number
  gst: number
}

export default function ServiceBookingModal({
  isOpen,
  onClose,
  serviceName,
  price,
  gst
}: ServiceBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  const totalPrice = calculateTotal(price, gst)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required')
      return false
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setError('Valid 10-digit phone number is required')
      return false
    }
    if (!formData.address.trim()) {
      setError('Address is required')
      return false
    }
    return true
  }

  const handlePayment = async () => {
    setError('')
    
    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    try {
      // Create order
      const orderResponse = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice * 100,
          currency: 'INR',
          description: serviceName,
          receipt: `service_${Date.now()}`
        })
      })

      const order = await orderResponse.json()

      if (!order.id) {
        throw new Error('Failed to create order')
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'SaleDeed.com',
        description: serviceName,
        order_id: order.id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        handler: async (response: any) => {
          try {
            // Verify payment and save booking
            const verifyResponse = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                service: serviceName,
                amount: totalPrice,
                customerName: formData.name,
                customerEmail: formData.email,
                customerPhone: formData.phone,
                customerAddress: formData.address,
                basePrice: price,
                gstAmount: totalPrice - price
              })
            })

            const result = await verifyResponse.json()
            
            if (result.success) {
              alert('Payment successful! Your booking has been confirmed. Check your email for details.')
              onClose()
              setFormData({ name: '', email: '', phone: '', address: '' })
            } else {
              setError('Payment verification failed. Please try again.')
            }
          } catch (error) {
            console.error('Verification error:', error)
            setError('Payment verification failed')
          }
        },
        theme: {
          color: '#f59e0b'
        }
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = () => {
        const razorpay = new (window as any).Razorpay(options)
        razorpay.open()
      }
      document.body.appendChild(script)
    } catch (error) {
      console.error('Payment error:', error)
      setError('Failed to initiate payment. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white dark:bg-slate-800 rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-md sm:w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 sm:p-6 flex justify-between items-center sticky top-0 rounded-t-3xl sm:rounded-t-2xl">
          <h2 className="text-lg sm:text-2xl font-bold truncate pr-2">Book {serviceName}</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-all flex-shrink-0"
          >
            <i data-lucide="x" className="w-5 sm:w-6 h-5 sm:h-6"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Price Summary */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 sm:p-4 border border-blue-200 dark:border-blue-800">
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 dark:text-gray-400">Base Price:</span>
                <span className="font-semibold">₹{price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 dark:text-gray-400">GST (18%):</span>
                <span className="font-semibold">₹{(totalPrice - price).toLocaleString()}</span>
              </div>
              <div className="border-t border-blue-200 dark:border-blue-800 pt-2 flex justify-between gap-2">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-base sm:text-lg text-primary">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3 sm:space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="10-digit number"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                rows={2}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1 sm:gap-2"
            >
              {isProcessing ? (
                <>
                  <i data-lucide="loader" className="w-4 h-4 animate-spin"></i>
                  <span className="hidden sm:inline">Processing...</span>
                </>
              ) : (
                <>
                  <i data-lucide="credit-card" className="w-4 h-4"></i>
                  <span className="hidden sm:inline">Pay</span> ₹{totalPrice.toLocaleString()}
                </>
              )}
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-tight">
            By proceeding, you agree to our terms. A bill will be sent to your email.
          </p>
        </div>
      </div>
    </div>
  )
}
