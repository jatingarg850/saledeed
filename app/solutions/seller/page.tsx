'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function SellerSolutionsPage() {
  const [showContactModal, setShowContactModal] = useState(false)

  const sellingSteps = [
    {
      step: 1,
      title: 'Property Valuation',
      description: 'Get accurate market valuation of your property with our expert assessment',
      icon: 'trending-up',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      title: 'Documentation Preparation',
      description: 'We prepare all necessary documents including title deeds, NOCs, and clearances',
      icon: 'file-check',
      color: 'from-green-500 to-green-600'
    },
    {
      step: 3,
      title: 'Marketing & Listing',
      description: 'Professional photography, listing on major portals, and targeted marketing',
      icon: 'megaphone',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: 4,
      title: 'Buyer Screening',
      description: 'We verify and screen potential buyers to ensure serious inquiries only',
      icon: 'user-check',
      color: 'from-orange-500 to-orange-600'
    },
    {
      step: 5,
      title: 'Negotiation Support',
      description: 'Expert negotiation to get you the best price for your property',
      icon: 'handshake',
      color: 'from-red-500 to-red-600'
    },
    {
      step: 6,
      title: 'Legal & Registration',
      description: 'Complete legal support and registration assistance till final handover',
      icon: 'shield-check',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Minimum Commission',
      description: 'Industry-lowest commission rates without compromising on service quality',
      icon: 'percent',
      stat: '1-2%'
    },
    {
      title: 'Quick Sale',
      description: 'Average property sale time of 30-45 days with our extensive buyer network',
      icon: 'zap',
      stat: '30-45 Days'
    },
    {
      title: 'Maximum Price',
      description: 'Get the best market price with our expert negotiation and marketing',
      icon: 'trending-up',
      stat: '95-100%'
    },
    {
      title: 'Zero Hassle',
      description: 'End-to-end service from documentation to final registration',
      icon: 'smile',
      stat: '100%'
    }
  ]

  const services = [
    'Property Valuation Report',
    'Title Verification',
    'Document Preparation',
    'Professional Photography',
    'Online & Offline Marketing',
    'Buyer Screening',
    'Site Visits Coordination',
    'Price Negotiation',
    'Agreement Drafting',
    'Registration Assistance',
    'Tax Consultation',
    'Post-Sale Support'
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="solutions" />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg animate-bounce-gentle">
                  <i data-lucide="home" className="w-4 h-4"></i>
                  Seller Solutions
                </div>

                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Sell Your Property
                  </span>
                  <span className="block">At The Best Price</span>
                </h1>

                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Get maximum value for your property with minimum commission. We handle everything from documentation to final registration.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20want%20to%20sell%20my%20property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="message-circle" className="w-6 h-6"></i>
                    <span>Start Selling Now</span>
                    <i data-lucide="arrow-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 text-red-600 border-2 border-red-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-red-50 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    <i data-lucide="phone" className="w-6 h-6"></i>
                    <span>Get Free Valuation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                  Why Sell With Us?
                </h2>
                <p className="text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
                  We combine technology, expertise, and a vast network to get you the best deal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-600"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <i data-lucide={item.icon} className="w-8 h-8 text-white"></i>
                    </div>
                    <div className="text-4xl font-black text-red-600 dark:text-red-400 mb-2">
                      {item.stat}
                    </div>
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selling Process Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                  Our Selling Process
                </h2>
                <p className="text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
                  A systematic 6-step process to ensure smooth and profitable property sale
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sellingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 ml-8`}>
                      <i data-lucide={step.icon} className="w-8 h-8 text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Included Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                  Complete Services Included
                </h2>
                <p className="text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
                  Everything you need to sell your property successfully
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i data-lucide="check" className="w-5 h-5 text-white"></i>
                    </div>
                    <span className="font-semibold text-text-light dark:text-text-dark">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-red-600 to-orange-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Sell Your Property?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Get a free property valuation and consultation from our experts today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20want%20a%20free%20property%20valuation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-2xl transition-all duration-300"
                >
                  <i data-lucide="calculator" className="w-6 h-6"></i>
                  Get Free Valuation
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300"
                >
                  <i data-lucide="phone" className="w-6 h-6"></i>
                  Call Us Now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
