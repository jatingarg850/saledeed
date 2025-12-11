'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from './Navigation'
import BillGenerator from './BillGenerator'
import HowItWorks from './HowItWorks'
import { services, calculateTotal } from '../lib/pricing'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutContent() {
  const searchParams = useSearchParams()
  const serviceId = searchParams.get('service')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  
  const [selectedService, setSelectedService] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    if (serviceId) {
      const service = services.find(s => s.id === serviceId)
      setSelectedService(service)
    }
  }, [serviceId])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill all required fields')
      return
    }

    if (!selectedService) {
      alert('Please select a service')
      return
    }

    setLoading(true)

    try {
      // Create order
      const orderResponse = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: calculateTotal(selectedService.price, selectedService.gst),
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            serviceName: selectedService.name,
            userName: formData.name,
            userEmail: formData.email,
            userPhone: formData.phone
          }
        })
      })

      const orderData = await orderResponse.json()

      if (!orderData.success) {
        alert('Failed to create order')
        setLoading(false)
        return
      }

      // Open Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_RpPxJh8unD7uHu',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SaleDeed.com',
        description: selectedService.name,
        order_id: orderData.orderId,
        handler: async (response: any) => {
          // Verify payment
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userDetails: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                service: selectedService.name,
                amount: calculateTotal(selectedService.price, selectedService.gst)
              }
            })
          })

          const verifyData = await verifyResponse.json()

          if (verifyData.success) {
            setPaymentData({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              serviceName: selectedService.name,
              amount: selectedService.price,
              gst: Math.round((selectedService.price * selectedService.gst) / 100),
              total: calculateTotal(selectedService.price, selectedService.gst),
              userName: formData.name,
              userEmail: formData.email,
              userPhone: formData.phone,
              date: new Date().toLocaleDateString()
            })
            setPaymentSuccess(true)
          } else {
            alert('Payment verification failed')
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#A16207'
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (paymentSuccess && paymentData) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation currentPage="checkout" />
        <div className="px-6 md:px-10 lg:px-20 py-10">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold text-green-600 mb-2">Payment Successful!</h1>
            <p className="text-gray-600">Your bill has been generated below</p>
          </div>
          <BillGenerator {...paymentData} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation currentPage="checkout" />
      
      <div className="px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-8">Checkout</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Your Details</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg h-fit">
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Order Summary</h2>

              {selectedService ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Service</p>
                    <p className="text-lg font-semibold text-text-light dark:text-text-dark">
                      {selectedService.name}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Base Price</span>
                      <span className="font-semibold">₹{selectedService.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                      <span className="font-semibold">
                        ₹{Math.round((selectedService.price * selectedService.gst) / 100).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold bg-primary/10 p-3 rounded">
                      <span>Total</span>
                      <span className="text-primary">
                        ₹{calculateTotal(selectedService.price, selectedService.gst).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Pay Now with Razorpay'}
                  </button>
                </div>
              ) : (
                <p className="text-gray-600">Please select a service</p>
              )}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <HowItWorks />
      </div>
    </div>
  )
}
