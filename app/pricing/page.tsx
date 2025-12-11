'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import ServiceBookingModal from '@/components/ServiceBookingModal'

interface Service {
  id: string
  name: string
  price: number
  gst: number
  description: string
  features: string[]
  href?: string
}

export default function PricingPage() {
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean
    service: Service | null
  }>({
    isOpen: false,
    service: null
  })

  const services: Service[] = [
    {
      id: 'doorstep',
      name: 'Doorstep Consultation',
      price: 1999,
      gst: 0,
      description: 'Expert consultation at your doorstep',
      features: [
        'Personal consultation at your home',
        'Document review and analysis',
        'Step-by-step guidance',
        'Customized action plan',
        '100% adjusted if you book any service'
      ]
    },
    {
      id: 'property-verification',
      name: 'Property Detailed Verification',
      price: 9999,
      gst: 18,
      description: 'Comprehensive property verification',
      features: [
        'Title check from competent authority',
        'Encumbrance certificate',
        'Past ownership checking',
        'Legal clearance report'
      ]
    },
    {
      id: 'sale-deed',
      name: 'Sale Deed Registration',
      price: 17999,
      gst: 18,
      description: 'Complete sale deed registration with expert assistance',
      features: [
        'Deed drafting as per your case',
        'Coordination with sub-registrar office',
        'End-to-end paperwork handling',
        'Expert property lawyer consultation'
      ]
    },
    {
      id: 'agent-assistance',
      name: 'Agent Assistance',
      price: 9999,
      gst: 18,
      description: 'Document verification and registration assistance',
      features: [
        'Document verification',
        'Registration assistance',
        'Consultation call with expert lawyer',
        'Can be clubbed with other services'
      ]
    },
    {
      id: 'gift-deed',
      name: 'Gift Deed',
      price: 13999,
      gst: 18,
      description: 'Gift deed drafting and registration',
      features: [
        'Deed drafting per Delhi stamp rules',
        'Stamp duty estimation',
        'Registry completion assistance',
        'Expert guidance throughout'
      ]
    },
    {
      id: 'relinquishment-deed',
      name: 'Relinquishment Deed',
      price: 11999,
      gst: 18,
      description: 'Relinquishment deed preparation and filing',
      features: [
        'Deed drafting and preparation',
        'Sub-registrar filing assistance',
        'Documentation support',
        'Legal compliance check'
      ]
    },
    {
      id: 'will',
      name: 'Will Registration',
      price: 7999,
      gst: 18,
      description: 'Legally valid will drafting and registration',
      features: [
        'Legally valid will drafting',
        'Registration if needed',
        'Privacy throughout process',
        'Expert legal review'
      ]
    },
    {
      id: 'partition-deed',
      name: 'Partition Deed',
      price: 13999,
      gst: 18,
      description: 'Property partition deed preparation',
      features: [
        'Accurate share details',
        'Deed preparation',
        'Sub-registrar filing assistance',
        'Legal documentation'
      ]
    },
    {
      id: 'gpa',
      name: 'General Power of Attorney',
      price: 7999,
      gst: 18,
      description: 'GPA drafting and registration',
      features: [
        'GPA drafting per Delhi requirements',
        'Registration facilitation',
        'Legal compliance',
        'Expert review'
      ]
    },
    {
      id: 'agreement-to-sell',
      name: 'Agreement to Sell',
      price: 13999,
      gst: 18,
      description: 'Agreement to sell preparation',
      features: [
        'Comprehensive agreement drafting',
        'Legal compliance check',
        'Expert review',
        'Customized terms'
      ]
    },
    {
      id: 'rent-agreement',
      name: 'Rent Agreement',
      price: 3999,
      gst: 18,
      description: 'Rent agreement drafting',
      features: [
        'Standard rent agreement',
        'Customizable terms',
        'Legal compliance',
        'Quick turnaround'
      ]
    },
    {
      id: 'mutation',
      name: 'Mutation',
      price: 27999,
      gst: 18,
      description: 'Property mutation at tax office',
      features: [
        'Complete mutation process',
        'Property tax office coordination',
        'Documentation handling',
        'Expert assistance'
      ]
    },
    {
      id: 'buyer-package',
      name: 'Buyer Package',
      price: 64999,
      gst: 18,
      description: 'Complete buyer assistance package',
      features: [
        'Property verification',
        'Sale deed drafting & registration',
        'Mutation at property tax office',
        'Electricity bill name change',
        'Water bill name change'
      ]
    },
    {
      id: 'seller-package',
      name: 'Seller Package',
      price: 99000,
      gst: 18,
      description: 'Complete seller assistance package',
      features: [
        'NOC preparation',
        'Valuation report',
        'Document preparation',
        'Legal compliance',
        'Expert consultation'
      ]
    },
    {
      id: 'property-filming',
      name: 'Property Video Filming',
      price: 14999,
      gst: 18,
      description: 'Professional property video for sale',
      features: [
        'Professional video production',
        'Multiple angles and shots',
        'High-quality editing',
        'Optimized for online listing'
      ]
    },
    {
      id: 'vaastu-consultation',
      name: 'Vaastu Consultation',
      price: 49999,
      gst: 18,
      description: 'Detailed vaastu consultation with corrections',
      features: [
        'Detailed vaastu analysis',
        'Correction advice',
        'Remedial measures',
        'Expert consultation'
      ]
    },
    {
      id: 'nri-process',
      name: 'NRI Buy-Sell Process',
      price: 99000,
      gst: 18,
      description: 'Complete NRI property transaction assistance',
      features: [
        'Power of attorney preparation',
        'Property management support',
        'Remote assistance',
        'Legal consultation',
        'Complete transaction handling'
      ]
    },
    {
      id: 'vip-deed',
      name: 'VIP Deed Registration',
      price: 159000,
      gst: 18,
      description: 'Premium deed registration from home',
      features: [
        'Complete home service',
        'Priority handling',
        'Expert legal team',
        'Dedicated support',
        'All-inclusive service'
      ]
    }
  ]

  const handleBooking = (service: Service) => {
    setBookingModal({
      isOpen: true,
      service
    })
  }

  const closeModal = () => {
    setBookingModal({
      isOpen: false,
      service: null
    })
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="services" />

        <main className="flex-1">
          {/* Header */}
          <section className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-700">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                Our Services & Pricing
              </h1>
              <p className="text-lg text-subtext-light dark:text-subtext-dark">
                Transparent pricing for all your property legal needs. All prices are inclusive of GST unless mentioned otherwise.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="px-6 md:px-10 lg:px-20 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                  const totalPrice = service.price + (service.price * service.gst) / 100
                  return (
                    <div
                      key={service.id}
                      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col"
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-sm text-orange-100">{service.description}</p>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Pricing */}
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-text-light dark:text-text-dark mb-1">
                            ₹{service.price.toLocaleString()}
                          </div>
                          {service.gst > 0 && (
                            <div className="text-sm text-subtext-light dark:text-subtext-dark">
                              + {service.gst}% GST (Total: ₹{Math.round(totalPrice).toLocaleString()})
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6 flex-grow">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="text-green-500 flex-shrink-0 mt-1">✓</span>
                              <span className="text-sm text-text-light dark:text-text-dark">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={() => handleBooking(service)}
                          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="px-6 md:px-10 lg:px-20 py-12 md:py-16 bg-gray-50 dark:bg-slate-800">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Important Notes</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border-l-4 border-orange-500">
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Pricing Disclaimer</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    The pricing mentioned for the services is tentative and can vary from case to case and property to property. 
                    SaleDeed.com has sole discretion to change the price without any prior intimation. 
                    Please confirm with our team for the final service charge as per your specific case.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Money-Back Guarantee</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    If you have made a payment and do not wish to get our services, the full 100% amount you paid 
                    shall be refunded back - No Questions Asked.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Doorstep Adjustment</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    100% of your doorstep consultation fee will be adjusted if you decide to book any of our services 
                    after the consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <ScrollToTop />
      </div>

      {/* Booking Modal */}
      {bookingModal.service && (
        <ServiceBookingModal
          isOpen={bookingModal.isOpen}
          onClose={closeModal}
          service={bookingModal.service}
        />
      )}
    </div>
  )
}
