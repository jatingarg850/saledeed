'use client'

import { useState } from 'react'

interface PropertySubmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PropertySubmissionModal({ isOpen, onClose }: PropertySubmissionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    propertyLocation: '',
    propertyDetails: '',
    requirement: 'buy' // buy, sell, rent
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid phone number')
      return false
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return false
    }
    if (!formData.propertyType) {
      setError('Please select property type')
      return false
    }
    if (!formData.propertyLocation.trim()) {
      setError('Please enter property location')
      return false
    }
    if (!formData.propertyDetails.trim()) {
      setError('Please enter property details')
      return false
    }
    if (!formData.requirement) {
      setError('Please select your requirement')
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Create WhatsApp message
      const message = `
*Property Submission Details*

*Personal Information:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Property Information:*
Type: ${formData.propertyType}
Location: ${formData.propertyLocation}
Requirement: ${formData.requirement === 'buy' ? 'Buy' : formData.requirement === 'sell' ? 'Sell' : 'Rent'}

*Property Details:*
${formData.propertyDetails}

---
Submitted via SaleDeed.com
      `.trim()

      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://api.whatsapp.com/send?phone=918800505050&text=${encodedMessage}`

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')

      // Close modal after a short delay
      setTimeout(() => {
        setIsSubmitting(false)
        onClose()
        setFormData({
          name: '',
          phone: '',
          email: '',
          propertyType: '',
          propertyLocation: '',
          propertyDetails: '',
          requirement: 'buy'
        })
      }, 500)
    } catch (err) {
      setError('Failed to submit. Please try again.')
      console.error('Submission error:', err)
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sm:p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                🏠
              </div>
              <h3 className="text-base sm:text-xl font-bold truncate">Submit Property Details</h3>
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
            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-xs sm:text-sm">
              Share your property details with us and we'll get back to you with the best options.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-3 sm:space-y-4">
            {/* Name */}
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

            {/* Phone */}
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

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Email Address *
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

            {/* Property Type */}
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

            {/* Property Location */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Property Location *
              </label>
              <input
                type="text"
                name="propertyLocation"
                value={formData.propertyLocation}
                onChange={handleInputChange}
                placeholder="Enter property location/address"
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Requirement */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                What are you looking for? *
              </label>
              <select
                name="requirement"
                value={formData.requirement}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>

            {/* Property Details */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-text-light dark:text-text-dark mb-1.5 sm:mb-2">
                Property Details *
              </label>
              <textarea
                name="propertyDetails"
                value={formData.propertyDetails}
                onChange={handleInputChange}
                placeholder="Describe your property or requirements (e.g., size, bedrooms, amenities, budget, etc.)"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-text-light dark:text-text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-base text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed property-submit-btn"
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
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                <span className="hidden sm:inline">Sending...</span>
                <span className="sm:hidden">Sending</span>
              </>
            ) : (
              <>
                <span className="text-lg">📤</span>
                <span className="hidden sm:inline">Send via WhatsApp</span>
                <span className="sm:hidden">Send</span>
              </>
            )}
          </button>

          <p className="text-xs text-center text-subtext-light dark:text-subtext-dark">
            Your details will be sent securely via WhatsApp
          </p>
          <p className="text-xs text-center text-gray-400">
            Press ESC or click outside to close
          </p>
        </div>
      </div>
    </div>
  )
}
