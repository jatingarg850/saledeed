'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function LeaseDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Lease Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Ownership Documents',
      description: 'Original title deeds, sale deed, and ownership documents proving the lessor\'s clear title to the property.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both lessor (owner) and lessee (tenant).'
    },
    {
      title: 'Property Tax Receipts',
      description: 'Latest property tax receipts and clearance certificates showing all municipal dues are up to date.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'Professional property valuation report for determining appropriate lease terms and security deposit.'
    },
    {
      title: 'NOC from Society/Authority',
      description: 'No Objection Certificate from housing society or relevant authority for leasing the property.'
    },
    {
      title: 'Utility Connection Documents',
      description: 'Electricity, water, and gas connection documents for transfer of utility responsibilities.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Property & Terms Assessment',
      description: 'We evaluate the property, understand lease requirements, and help determine fair rental terms and conditions.'
    },
    {
      step: 2,
      title: 'Legal Documentation',
      description: 'Our experts prepare the Lease Deed using government-approved format with all necessary clauses and protections.'
    },
    {
      step: 3,
      title: 'Terms Negotiation',
      description: 'Assistance with finalizing lease period, rent amount, security deposit, and maintenance responsibilities.'
    },
    {
      step: 4,
      title: 'Registration Process',
      description: 'Complete support for stamp duty payment and registration at the Sub-Registrar Office as per legal requirements.'
    },
    {
      step: 5,
      title: 'Handover & Completion',
      description: 'Guidance for property handover, utility transfers, and completion of all lease formalities.'
    }
  ]

  const tabContent = {
    'what-is': 'A Lease Deed is a comprehensive legal agreement between a property owner (lessor) and tenant (lessee) for long-term property use. Unlike simple rent agreements, lease deeds are typically for longer periods (usually 9+ years) and provide stronger legal protection for both parties. This government-approved format covers everything from rent and security deposits to maintenance responsibilities and termination conditions. It\'s your insurance policy for a smooth landlord-tenant relationship, protecting both parties\' rights and clearly defining obligations.',
    'when-to-use': 'Lease Deeds are ideal for long-term property arrangements, typically 9 years or more, commercial property rentals, when substantial security deposits are involved, or when you need stronger legal protection than regular rent agreements provide. They\'re perfect for business premises, long-term residential arrangements, properties with significant modifications or improvements, and situations where both parties want comprehensive legal coverage and clear terms for the entire lease period.',
    'legal-implications': 'A registered Lease Deed creates strong legal rights and obligations for both parties, providing comprehensive protection under property law. It gives the lessee secure tenure for the agreed period and protects the lessor\'s property rights. The deed must be executed on appropriate stamp paper, properly registered, and creates enforceable legal obligations. It provides clear legal recourse for breach of contract, rent defaults, or property damage, making it much stronger than simple rental agreements.'
  }

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
            <span className="text-text-light dark:text-text-dark">Lease Deed</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="home" className="w-4 h-4"></i>
                  Long-term Property Agreement
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Lease Deed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Secure long-term property arrangements with comprehensive legal protection for both landlords and tenants.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Create Lease Deed
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Legal Protection</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Both Parties Covered</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Long-term Security</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">9+ Years Coverage</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Guidance</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Property Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-purple-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-purple-200 dark:border-slate-700 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
                <div className="flex px-6 gap-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-4 pt-6 whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                        ? 'border-b-purple-600 text-purple-600 font-bold'
                        : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-purple-600 hover:border-b-purple-600/50'
                        }`}
                    >
                      <p className="text-sm font-semibold leading-normal tracking-[0.015em]">{tab.label}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </p>
              </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-purple-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How Lease Deed Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our comprehensive process ensures secure and legally compliant long-term property arrangements
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-purple-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-purple-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your lease deed preparation</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-purple-600/5 dark:hover:bg-purple-600/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-purple-600" data-lucide="chevron-down"></i>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed pl-11">
                          {doc.description}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="home" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Lease Deed?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Secure your long-term property arrangement with comprehensive legal protection and expert guidance
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-4 h-4"></i>
                    <span>Long-term Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Legal Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Quick Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}