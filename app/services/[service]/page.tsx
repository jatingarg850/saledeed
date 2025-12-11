'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import { calculateTotal } from '../../../lib/pricing'

// Service data mapping with prices from pricing page
const serviceData = {
  'gift-deed': {
    title: 'Gift Deed',
    price: 13999,
    gst: 18,
    description: 'Transfer property as a gift to family members with complete legal protection',
    category: 'Property Transfer',
    timeline: '7-10 Business Days',
    color: 'emerald',
    icon: 'heart',
    documents: [
      'Property Title Documents',
      'Identity Proof of Both Parties', 
      'Property Tax Clearance',
      'Family Relationship Proof',
      'Property Valuation Certificate',
      'NOC Certificates'
    ],
    process: [
      'Document Verification',
      'Gift Deed Drafting', 
      'Legal Review',
      'Registration Process',
      'Possession Transfer'
    ],
    benefits: [
      'Tax benefits for family transfers',
      'No monetary transaction required',
      'Complete legal protection',
      'Prevents future family disputes'
    ]
  },
  'relinquishment-deed': {
    title: 'Relinquishment Deed',
    price: 11999,
    gst: 18,
    description: 'Legally give up your property share to other family members',
    category: 'Property Transfer',
    timeline: '5-7 Business Days',
    color: 'orange',
    icon: 'user-minus',
    documents: [
      'Property Title Documents',
      'Identity Proof of All Parties',
      'Family Tree Documentation', 
      'Property Tax Receipts',
      'Legal Heir Certificates',
      'Witness Documentation'
    ],
    process: [
      'Legal Heir Verification',
      'Deed Drafting',
      'Family Consent',
      'Registration Process', 
      'Title Transfer'
    ],
    benefits: [
      'Resolves family property disputes',
      'Clear title transfer',
      'Legal protection for all parties',
      'Prevents future litigation'
    ]
  },
  'will': {
    title: 'Will Testament',
    price: 7999,
    gst: 18,
    description: 'Secure your family\'s future with a legally binding will',
    category: 'Estate Planning',
    timeline: '3-5 Business Days',
    color: 'purple',
    icon: 'scroll',
    documents: [
      'Asset Documentation',
      'Identity Proof',
      'Family Details',
      'Property Valuations',
      'Witness Information',
      'Executor Details'
    ],
    process: [
      'Asset Assessment',
      'Will Drafting',
      'Legal Review',
      'Execution & Witnessing',
      'Safe Storage'
    ],
    benefits: [
      'Prevents family disputes',
      'Tax planning benefits',
      'Complete control over assets',
      'Peace of mind'
    ]
  },
  'general-power-of-attorney': {
    title: 'General Power of Attorney',
    price: 7999,
    gst: 18,
    description: 'Authorize someone to handle your property matters legally',
    category: 'Legal Authorization',
    timeline: '5-7 Business Days', 
    color: 'blue',
    icon: 'user-check',
    documents: [
      'Property Documents',
      'Identity Proof of Both Parties',
      'Address Proof',
      'Property Tax Clearance',
      'Photographs',
      'Witness Documentation'
    ],
    process: [
      'Requirement Analysis',
      'Legal Drafting',
      'Document Verification',
      'Execution & Notarization',
      'Registration'
    ],
    benefits: [
      'Remote property management',
      'Legal representation',
      'NRI-friendly solution',
      'Secure authorization'
    ]
  },
  'partition-deed': {
    title: 'Partition Deed',
    price: 13999,
    gst: 18,
    description: 'Divide joint property among co-owners legally',
    category: 'Property Division',
    timeline: '10-15 Business Days',
    color: 'indigo',
    icon: 'split',
    documents: [
      'Joint Property Documents',
      'Co-owner Identity Proofs',
      'Property Survey Reports',
      'Valuation Certificates',
      'Family Agreements',
      'Legal Heir Certificates'
    ],
    process: [
      'Property Survey',
      'Co-owner Consent',
      'Partition Planning',
      'Legal Documentation',
      'Registration & Division'
    ],
    benefits: [
      'Fair property division',
      'Prevents family disputes',
      'Clear individual ownership',
      'Legal protection'
    ]
  },
  'agreement-to-sell': {
    title: 'Agreement to Sell',
    price: 13999,
    gst: 18,
    description: 'Secure your property purchase with legal protection',
    category: 'Property Agreement',
    timeline: '5-7 Business Days',
    color: 'green',
    icon: 'file-signature',
    documents: [
      'Property Title Documents',
      'Identity Proof of Both Parties',
      'Property Tax Receipts',
      'Encumbrance Certificate',
      'Property Valuation',
      'NOC Certificates'
    ],
    process: [
      'Property Analysis',
      'Legal Drafting',
      'Verification Process',
      'Registration Support',
      'Final Completion'
    ],
    benefits: [
      'Protects advance money',
      'Legal binding contract',
      'Prevents seller backing out',
      'Court enforceable'
    ]
  },
  'rent-lease-agreement': {
    title: 'Rent/Lease Agreement',
    price: 3999,
    gst: 18,
    description: 'Comprehensive rental agreements for landlords and tenants',
    category: 'Rental Agreement',
    timeline: '2-3 Business Days',
    color: 'teal',
    icon: 'home',
    documents: [
      'Property Ownership Documents',
      'Identity Proof of Both Parties',
      'Property Tax Receipts',
      'Utility Bills',
      'Security Deposit Details',
      'Witness Information'
    ],
    process: [
      'Property Verification',
      'Agreement Drafting',
      'Terms Negotiation',
      'Legal Review',
      'Registration (if required)'
    ],
    benefits: [
      'Legal protection for both parties',
      'Clear terms and conditions',
      'Dispute prevention',
      'Rent control compliance'
    ]
  },
  'mutation': {
    title: 'Mutation Services',
    price: 27999,
    gst: 18,
    description: 'Update property records in government databases',
    category: 'Property Records',
    timeline: '15-30 Business Days',
    color: 'red',
    icon: 'database',
    documents: [
      'Property Sale/Transfer Deed',
      'Identity Proof',
      'Property Tax Receipts',
      'Survey Settlement Records',
      'Revenue Records',
      'Application Forms'
    ],
    process: [
      'Document Preparation',
      'Application Submission',
      'Revenue Department Processing',
      'Field Verification',
      'Record Update'
    ],
    benefits: [
      'Updated government records',
      'Clear property title',
      'Tax assessment correction',
      'Legal compliance'
    ]
  },
  'builder-buyer-agreement': {
    title: 'Builder Buyer Agreement',
    price: 0,
    gst: 18,
    description: 'Comprehensive agreements for under-construction properties',
    category: 'Construction Agreement',
    timeline: '7-10 Business Days',
    color: 'yellow',
    icon: 'building',
    documents: [
      'Builder Registration Documents',
      'Project Approvals',
      'Buyer Identity Proof',
      'Payment Schedule',
      'Construction Timeline',
      'Specification Details'
    ],
    process: [
      'Project Verification',
      'Agreement Drafting',
      'Legal Review',
      'Terms Negotiation',
      'Final Execution'
    ],
    benefits: [
      'Protection against delays',
      'Quality assurance',
      'Clear payment terms',
      'Legal recourse'
    ]
  },
  // Additional service aliases for different URL patterns
  'will-testament': {
    title: 'Will Testament',
    price: 7999,
    gst: 18,
    description: 'Secure your family\'s future with a legally binding will',
    category: 'Estate Planning',
    timeline: '3-5 Business Days',
    color: 'purple',
    icon: 'scroll',
    documents: [
      'Asset Documentation',
      'Identity Proof',
      'Family Details',
      'Property Valuations',
      'Witness Information',
      'Executor Details'
    ],
    process: [
      'Asset Assessment',
      'Will Drafting',
      'Legal Review',
      'Execution & Witnessing',
      'Safe Storage'
    ],
    benefits: [
      'Prevents family disputes',
      'Tax planning benefits',
      'Complete control over assets',
      'Peace of mind'
    ]
  },
  'will-agreement': {
    title: 'Will Testament',
    price: 7999,
    gst: 18,
    description: 'Secure your family\'s future with a legally binding will',
    category: 'Estate Planning',
    timeline: '3-5 Business Days',
    color: 'purple',
    icon: 'scroll',
    documents: [
      'Asset Documentation',
      'Identity Proof',
      'Family Details',
      'Property Valuations',
      'Witness Information',
      'Executor Details'
    ],
    process: [
      'Asset Assessment',
      'Will Drafting',
      'Legal Review',
      'Execution & Witnessing',
      'Safe Storage'
    ],
    benefits: [
      'Prevents family disputes',
      'Tax planning benefits',
      'Complete control over assets',
      'Peace of mind'
    ]
  },
  'power-of-attorney': {
    title: 'Power of Attorney',
    price: 7999,
    gst: 18,
    description: 'Authorize someone to handle your property matters legally',
    category: 'Legal Authorization',
    timeline: '5-7 Business Days', 
    color: 'blue',
    icon: 'user-check',
    documents: [
      'Property Documents',
      'Identity Proof of Both Parties',
      'Address Proof',
      'Property Tax Clearance',
      'Photographs',
      'Witness Documentation'
    ],
    process: [
      'Requirement Analysis',
      'Legal Drafting',
      'Document Verification',
      'Execution & Notarization',
      'Registration'
    ],
    benefits: [
      'Remote property management',
      'Legal representation',
      'NRI-friendly solution',
      'Secure authorization'
    ]
  },
  'general-power-of-authority': {
    title: 'General Power of Attorney',
    price: 7999,
    gst: 18,
    description: 'Authorize someone to handle your property matters legally',
    category: 'Legal Authorization',
    timeline: '5-7 Business Days', 
    color: 'blue',
    icon: 'user-check',
    documents: [
      'Property Documents',
      'Identity Proof of Both Parties',
      'Address Proof',
      'Property Tax Clearance',
      'Photographs',
      'Witness Documentation'
    ],
    process: [
      'Requirement Analysis',
      'Legal Drafting',
      'Document Verification',
      'Execution & Notarization',
      'Registration'
    ],
    benefits: [
      'Remote property management',
      'Legal representation',
      'NRI-friendly solution',
      'Secure authorization'
    ]
  },
  'rent-agreement': {
    title: 'Rent Agreement',
    price: 3999,
    gst: 18,
    description: 'Comprehensive rental agreements for landlords and tenants',
    category: 'Rental Agreement',
    timeline: '2-3 Business Days',
    color: 'teal',
    icon: 'home',
    documents: [
      'Property Ownership Documents',
      'Identity Proof of Both Parties',
      'Property Tax Receipts',
      'Utility Bills',
      'Security Deposit Details',
      'Witness Information'
    ],
    process: [
      'Property Verification',
      'Agreement Drafting',
      'Terms Negotiation',
      'Legal Review',
      'Registration (if required)'
    ],
    benefits: [
      'Legal protection for both parties',
      'Clear terms and conditions',
      'Dispute prevention',
      'Rent control compliance'
    ]
  },
  'mutation-legal-document': {
    title: 'Mutation Services',
    price: 27999,
    gst: 18,
    description: 'Update property records in government databases',
    category: 'Property Records',
    timeline: '15-30 Business Days',
    color: 'red',
    icon: 'database',
    documents: [
      'Property Sale/Transfer Deed',
      'Identity Proof',
      'Property Tax Receipts',
      'Survey Settlement Records',
      'Revenue Records',
      'Application Forms'
    ],
    process: [
      'Document Preparation',
      'Application Submission',
      'Revenue Department Processing',
      'Field Verification',
      'Record Update'
    ],
    benefits: [
      'Updated government records',
      'Clear property title',
      'Tax assessment correction',
      'Legal compliance'
    ]
  },
  'simple-mortgage': {
    title: 'Simple Mortgage Deed',
    price: 9999,
    gst: 18,
    description: 'Secure property loans with proper legal documentation',
    category: 'Financial Documents',
    timeline: '7-10 Business Days',
    color: 'indigo',
    icon: 'banknote',
    documents: [
      'Property Title Documents',
      'Identity Proof of Both Parties',
      'Property Valuation Certificate',
      'Income Proof',
      'Bank Statements',
      'Loan Agreement'
    ],
    process: [
      'Property Valuation',
      'Mortgage Deed Drafting',
      'Legal Verification',
      'Bank Coordination',
      'Registration Process'
    ],
    benefits: [
      'Secure loan against property',
      'Legal protection for lender',
      'Clear repayment terms',
      'Enforceable in court'
    ]
  },
  'other-deed-agreement': {
    title: 'Other Deeds & Agreements',
    price: 0,
    gst: 18,
    description: 'Specialized legal documents for unique property requirements',
    category: 'Custom Legal Services',
    timeline: 'Varies by requirement',
    color: 'gray',
    icon: 'file-plus',
    documents: [
      'Specific Requirement Documents',
      'Identity Proofs',
      'Property Documents',
      'Legal Precedents',
      'Custom Documentation',
      'Expert Consultation'
    ],
    process: [
      'Requirement Analysis',
      'Custom Drafting',
      'Legal Review',
      'Expert Consultation',
      'Final Documentation'
    ],
    benefits: [
      'Tailored to specific needs',
      'Expert legal guidance',
      'Comprehensive coverage',
      'Professional support'
    ]
  }
}

export default function DynamicServicePage({ params }: { params: { service: string } }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isProcessing, setIsProcessing] = useState(false)
  
  const service = serviceData[params.service as keyof typeof serviceData]
  
  if (!service) {
    notFound()
  }

  const totalPrice = calculateTotal(service.price, service.gst)

  const handleRazorpayPayment = async () => {
    if (service.price === 0) {
      alert('Please contact us for custom pricing')
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice * 100,
          currency: 'INR',
          description: service.title,
          receipt: `service_${Date.now()}`
        })
      })

      const order = await response.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'SaleDeed.com',
        description: service.title,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            const verifyResponse = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                service: service.title,
                amount: totalPrice
              })
            })

            const result = await verifyResponse.json()
            if (result.success) {
              alert('Payment successful! Our team will contact you soon.')
              window.location.href = '/contact'
            } else {
              alert('Payment verification failed')
            }
          } catch (error) {
            console.error('Verification error:', error)
            alert('Payment verification failed')
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
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
      alert('Failed to initiate payment')
    } finally {
      setIsProcessing(false)
    }
  }

  const colorClasses = {
    emerald: 'from-emerald-600 to-teal-600',
    orange: 'from-orange-600 to-red-600', 
    purple: 'from-purple-600 to-indigo-600',
    blue: 'from-blue-600 to-indigo-600',
    indigo: 'from-indigo-600 to-purple-600',
    green: 'from-green-600 to-emerald-600',
    teal: 'from-teal-600 to-cyan-600',
    red: 'from-red-600 to-pink-600',
    yellow: 'from-yellow-600 to-orange-600',
    gray: 'from-gray-600 to-slate-600'
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'documents', label: 'Documents Required' },
    { id: 'process', label: 'Process' },
    { id: 'benefits', label: 'Benefits' }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="services" />

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-10 lg:px-20 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <Link href="/services" className="text-primary hover:underline">Our Services</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <span className="text-text-light dark:text-text-dark">{service.title}</span>
          </div>

          {/* Hero Section */}
          <div className={`relative overflow-hidden bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-3xl mb-16 text-white`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide={service.icon} className="w-10 h-10 text-white"></i>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  {service.title}
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 text-white/90">
                  {service.description}
                </p>

                {/* Price and Timeline */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                    {service.price > 0 ? (
                      <>
                        <div className="text-3xl font-bold">₹{service.price.toLocaleString()}</div>
                        <div className="text-sm text-white/80">+ {service.gst}% GST = ₹{totalPrice.toLocaleString()}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-3xl font-bold">Custom Pricing</div>
                        <div className="text-sm text-white/80">Contact for quote</div>
                      </>
                    )}
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                    <div className="text-lg font-semibold">{service.timeline}</div>
                    <div className="text-sm text-white/80">Completion Time</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {service.price > 0 ? (
                    <button
                      onClick={handleRazorpayPayment}
                      disabled={isProcessing}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                    >
                      <i data-lucide="credit-card" className="w-5 h-5"></i>
                      {isProcessing ? 'Processing...' : `Pay Now - ₹${totalPrice.toLocaleString()}`}
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <i data-lucide="arrow-right" className="w-5 h-5"></i>
                      Get Custom Quote
                    </Link>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    <i data-lucide="phone" className="w-5 h-5"></i>
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-slate-700 bg-gradient-to-r from-gray-50 to-white dark:from-slate-800 dark:to-slate-700">
                <div className="flex px-6 gap-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-4 pt-6 whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                        ? 'border-b-primary text-primary font-bold'
                        : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-primary hover:border-b-primary/50'
                        }`}
                    >
                      <p className="text-sm font-semibold leading-normal tracking-[0.015em]">{tab.label}</p>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">About {service.title}</h3>
                    <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed">
                      {service.description}. Our expert legal team ensures complete compliance with all legal requirements 
                      and provides end-to-end support throughout the process.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
                        <i data-lucide="shield-check" className="w-8 h-8 text-blue-600 mx-auto mb-3"></i>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">100% Legal</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Fully compliant with all laws</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
                        <i data-lucide="clock" className="w-8 h-8 text-green-600 mx-auto mb-3"></i>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Quick Process</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">{service.timeline}</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                        <i data-lucide="users" className="w-8 h-8 text-purple-600 mx-auto mb-3"></i>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Expert Support</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Qualified legal professionals</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Documents Required</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-text-light dark:text-text-dark">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">{step}</h4>
                            <p className="text-subtext-light dark:text-subtext-dark text-sm">
                              Professional handling of {step.toLowerCase()} with complete legal compliance and expert guidance.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                          <i data-lucide="check-circle" className="w-6 h-6 text-green-600 mt-1 flex-shrink-0"></i>
                          <span className="text-text-light dark:text-text-dark font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Final CTA */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-3xl p-12 text-center text-white`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Get your {service.title.toLowerCase()} completed by legal experts with full compliance guarantee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {service.price > 0 ? (
                    <button
                      onClick={handleRazorpayPayment}
                      disabled={isProcessing}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
                    >
                      <i data-lucide="credit-card" className="w-5 h-5"></i>
                      {isProcessing ? 'Processing...' : `Pay Now - ₹${totalPrice.toLocaleString()}`}
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <i data-lucide="arrow-right" className="w-5 h-5"></i>
                      Get Custom Quote
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}