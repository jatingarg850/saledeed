'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

interface Service {
  id: string
  name: string
  description: string
  price: number
  gst: boolean
  icon: string
}

const services: Service[] = [
  {
    id: 'doorstep',
    name: 'Doorstep Consultation',
    description: '100% adjusted if you decide to buy any of our service after doorstep consultation.',
    price: 1999,
    gst: false,
    icon: 'home'
  },
  {
    id: 'property-verification',
    name: 'Property Detailed Verification',
    description: 'Complete property verification with legal checks',
    price: 9999,
    gst: true,
    icon: 'check-circle'
  },
  {
    id: 'sale-deed',
    name: 'Sale Deed Registration',
    description: 'With expert assistance and legal support',
    price: 17999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'agent-assistance',
    name: 'Agent Assistance',
    description: 'Document verification, registration + Con call with expert property lawyer',
    price: 9999,
    gst: true,
    icon: 'phone'
  },
  {
    id: 'gift-deed',
    name: 'Gift Deed',
    description: 'With expert assistance',
    price: 13999,
    gst: true,
    icon: 'gift'
  },
  {
    id: 'relinquishment-deed',
    name: 'Relinquishment Deed',
    description: 'With expert assistance',
    price: 11999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'will',
    name: 'Will',
    description: 'With expert assistance',
    price: 7999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'partition-deed',
    name: 'Partition Deed',
    description: 'With expert assistance',
    price: 13999,
    gst: true,
    icon: 'split'
  },
  {
    id: 'gpa',
    name: 'General Power of Attorney',
    description: 'With expert assistance',
    price: 7999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'agreement-to-sell',
    name: 'Agreement To Sell',
    description: 'With expert assistance',
    price: 13999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'rent-agreement',
    name: 'Rent Agreement',
    description: 'With expert assistance',
    price: 3999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'mutation',
    name: 'Mutation',
    description: 'With expert assistance',
    price: 27999,
    gst: true,
    icon: 'file-text'
  },
  {
    id: 'buyer-package',
    name: 'Buyer Package',
    description: 'Property Verification + Sale Deed Drafting & Registration + Mutation + Electricity & Water Bill Name Change',
    price: 64999,
    gst: true,
    icon: 'package'
  },
  {
    id: 'seller-package',
    name: 'Seller Package',
    description: 'NOC + Valuation Report',
    price: 99000,
    gst: true,
    icon: 'package'
  },
  {
    id: 'property-filming',
    name: 'Property Video Filming',
    description: 'For Boosting Sale',
    price: 14999,
    gst: true,
    icon: 'video'
  },
  {
    id: 'vaastu-consultation',
    name: 'Vaastu Consultation',
    description: 'With Detailed Correction Advice',
    price: 49999,
    gst: true,
    icon: 'home'
  },
  {
    id: 'nri-process',
    name: 'NRI Buy Sell Process',
    description: 'Complete NRI property transaction support',
    price: 99000,
    gst: true,
    icon: 'globe'
  },
  {
    id: 'vip-registration',
    name: '👑 VIP Deed Registration Process',
    description: 'From The Comfort of Home',
    price: 159000,
    gst: true,
    icon: 'crown'
  }
]

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState(false)

  const calculateTotal = (service: Service) => {
    const basePrice = service.price
    const gstAmount = service.gst ? basePrice * 0.18 : 0
    return basePrice + gstAmount
  }

  const handlePayment = async (service: Service) => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert('Please fill in all details')
      return
    }

    setLoading(true)
    const totalAmount = calculateTotal(service)

    try {
      // Create order on backend
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount * 100, // Razorpay expects amount in paise
          service: service.name,
          userDetails
        })
      })

      const data = await response.json()

      if (!data.orderId) {
        throw new Error('Failed to create order')
      }

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'SaleDeed.com',
        description: service.name,
        order_id: data.orderId,
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone
        },
        handler: async (response: any) => {
          // Verify payment on backend
          const verifyResponse = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: data.orderId,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              service: service.name,
              userDetails,
              amount: totalAmount
            })
          })

          const verifyData = await verifyResponse.json()
          if (verifyData.success) {
            // Redirect to success page with bill
            window.location.href = `/payment-success?orderId=${data.orderId}&service=${service.id}`
          }
        }
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <Navigation currentPage="services" />

      <main className="px-6 md:px-10 lg:px-20 py-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
            Our Services & Pricing
          </h1>
          <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
            Transparent pricing for all your property needs
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const total = calculateTotal(service)
              const gstAmount = service.gst ? service.price * 0.18 : 0

              return (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200/50 dark:border-slate-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">
                        {service.name}
                      </h3>
                      <p className="text-black dark:text-subtext-dark text-sm mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 mb-4">
                    <div className="text-black dark:text-text-dark text-2xl font-bold">
                      ₹{service.price.toLocaleString()}
                    </div>
                    {service.gst && (
                      <div className="text-sm text-black dark:text-subtext-dark mt-2">
                        + ₹{Math.round(gstAmount).toLocaleString()} (18% GST)
                      </div>
                    )}
                    <div className="text-sm font-semibold text-primary mt-2">
                      Total: ₹{total.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                  >
                    Select & Pay
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Payment Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-black dark:text-text-dark mb-6">
                {selectedService.name}
              </h2>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={userDetails.phone}
                  onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                />
              </div>

              <div className="bg-gray-100 dark:bg-slate-700 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Base Price:</span>
                  <span>₹{selectedService.price.toLocaleString()}</span>
                </div>
                {selectedService.gst && (
                  <div className="flex justify-between mb-2">
                    <span>GST (18%):</span>
                    <span>₹{Math.round(selectedService.price * 0.18).toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-gray-300 dark:border-slate-600 pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>₹{calculateTotal(selectedService).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handlePayment(selectedService)}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Note Section */}
        <div className="max-w-4xl mx-auto bg-yellow-50 dark:bg-slate-800 rounded-2xl p-8 border border-yellow-200 dark:border-slate-700">
          <h3 className="text-black dark:text-text-dark text-xl font-bold mb-4">Important Notes:</h3>
          <ul className="space-y-2 text-black dark:text-subtext-dark">
            <li>• The pricing mentioned for the services is a tentative price and can vary from case to case and property to property.</li>
            <li>• SaleDeed.com has sole discretion to change the price without any prior intimation.</li>
            <li>• You are advised to confirm with our team for the final service charge as per your specific case.</li>
            <li>• If you have made a payment and do not wish to get our services, the full 100% amount you paid shall be refunded back - No Questions Asked.</li>
            <li>• All prices except home visit of Rs 1999/- are exclusive of GST 18%</li>
            <li>• You have to add 18% GST at checkout window.</li>
          </ul>
        </div>
      </main>

      {/* Load Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  )
}
