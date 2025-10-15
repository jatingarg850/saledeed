'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SaleDeedPage() {
  const [selectedService, setSelectedService] = useState('Sale Deed')

  const services = [
    { name: 'Sale Deed', href: '/services/sale-deed' },
    { name: 'Gift Deed', href: '/services/gift-deed' },
    { name: 'Relinquishment Deed', href: '/services/relinquishment-deed' },
    { name: 'Will Agreement', href: '/services/will-agreement' },
    { name: 'Partition Deed', href: '/services/partition-deed' },
    { name: 'General Power of Authority', href: '/services/general-power-of-authority' },
    { name: 'Agreement to Sell', href: '/services/agreement-to-sell' },
    { name: 'Builder Buyer Agreement', href: '/services/builder-buyer-agreement' },
    { name: 'Rent Agreement', href: '/services/rent-agreement' },
    { name: 'Mutation Legal Document', href: '/services/mutation-legal-document' },
    { name: 'Other Deed & Agreement', href: '/services/other-deed-agreement' }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'We understand your property details and requirements.',
      description: 'Our team analyzes your specific needs and property documentation requirements.'
    },
    {
      step: 2,
      title: 'Drafting - Our legal experts prepare a proper Sale Deed as per law.',
      description: 'Professional lawyers draft your sale deed ensuring complete legal compliance.'
    },
    {
      step: 3,
      title: 'Verification - We ensure all property details, buyer, and seller information are accurate.',
      description: 'Thorough verification of all parties and property details for accuracy.'
    },
    {
      step: 4,
      title: 'Registration Support - Guidance is provided for payment of stamp duty and registration of the Sale Deed at the Sub-Registrar Office.',
      description: 'Complete support for stamp duty calculation and SRO registration process.'
    },
    {
      step: 5,
      title: 'Completion - Once registered, the document is delivered to you as the final proof of ownership.',
      description: 'Final delivery of registered documents with all necessary certificates.'
    }
  ]

  const complianceItems = [
    'Statutory Compliances',
    'Documentation',
    'Registration Requirement'
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-background-dark shadow-sm border-b border-yellow-200/50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-text-light dark:text-white">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <i className="text-white text-xl" data-lucide="home"></i>
              </div>
              <h2 className="text-lg font-bold">SaleDeed.com</h2>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" href="/services">Our Services</Link>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
            </div>
            <div className="flex items-center gap-2">
              <button className="md:hidden flex items-center justify-center size-10 rounded-lg bg-secondary/20">
                <i data-lucide="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-100 dark:bg-slate-800 min-h-screen p-4 hidden lg:block">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-primary mb-4">
              <i data-lucide="map-pin"></i>
              <span className="font-medium">Delhi</span>
            </div>
          </div>

          <div className="space-y-2">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${service.name === 'Sale Deed'
                  ? 'bg-primary text-white font-medium'
                  : 'text-text-light dark:text-text-dark hover:bg-primary/10'
                  }`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6">
              <Link href="/" className="text-primary hover:underline">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/services" className="text-primary hover:underline">Our Services</Link>
              <span className="text-gray-400">/</span>
              <span className="text-text-light dark:text-text-dark">Sale Deed</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">Sale Deed</h1>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-text-light dark:text-text-dark leading-relaxed">
                    Sale Deed is a legally binding document that officially records the transfer of ownership of a
                    property from the seller to the buyer. This document is the most important document in property transaction
                    because it acts as proof of ownership. This document contains all essential details, including:
                  </p>

                  <ul className="list-disc list-inside mt-4 space-y-2 text-text-light dark:text-text-dark">
                    <li>Name and details of the seller and buyer</li>
                    <li>Complete description of the property (address, boundaries, dimensions, survey number, etc.)</li>
                    <li>The agreed sale price</li>
                    <li>Payment terms and conditions</li>
                    <li>Any special clauses agreed upon by both parties</li>
                  </ul>

                  <p className="mt-4 text-text-light dark:text-text-dark leading-relaxed">
                    Without a registered Sale Deed, a property transaction is not legally valid, and the buyer does not have full legal rights over the property.
                    Registration of the Sale Deed at the Sub-Registrar's office ensures that the transfer is recognized
                    by law, protects both parties, and helps avoid future disputes.
                  </p>
                </div>

                {/* How it Works Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">How it Works</h2>

                  <div className="space-y-4">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark mb-1">{step.title}</p>
                          <p className="text-sm text-subtext-light dark:text-subtext-dark">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Process Overview Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-yellow-200/50">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="text-white text-2xl" data-lucide="file-check"></i>
                    </div>
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Our Process</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-bold text-xs">{step.step}</span>
                        </div>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark text-xs leading-tight">
                            {step.title.split(' - ')[0]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Cards */}
                <div className="space-y-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{index + 9}</span>
                        </div>
                        <span className="font-medium text-text-light dark:text-text-dark text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-secondary text-white py-3 px-4 rounded-lg font-bold text-sm hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
                    <i data-lucide="message-circle"></i>
                    CONTACT US
                  </button>

                  <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">
                    DOWNLOAD SAMPLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}