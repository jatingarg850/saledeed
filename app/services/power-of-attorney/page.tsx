'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function PowerOfAttorneyPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is Power of Attorney?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Ownership Documents',
      description: 'Original title deeds, sale deed, and complete chain of ownership documents for the property in question.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport for both the principal (property owner) and attorney (authorized person).'
    },
    {
      title: 'Address Proof Documents',
      description: 'Current address proof including utility bills, bank statements, or rental agreements for both parties.'
    },
    {
      title: 'Property Tax and Clearance',
      description: 'Latest property tax receipts and clearance certificates showing all dues are paid up to date.'
    },
    {
      title: 'Passport Size Photographs',
      description: 'Recent passport-size photographs of both principal and attorney for document verification and records.'
    },
    {
      title: 'Witness Documentation',
      description: 'Identity and address proof of witnesses who will be present during the Power of Attorney execution.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'We understand your specific needs and determine the appropriate type of Power of Attorney for your situation.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Our legal experts prepare the Power of Attorney using government-approved format with specific powers and limitations.'
    },
    {
      step: 3,
      title: 'Document Verification',
      description: 'Thorough verification of all documents and ensuring compliance with legal requirements and formalities.'
    },
    {
      step: 4,
      title: 'Execution & Notarization',
      description: 'Proper execution of the document with witnesses and notarization as per legal requirements.'
    },
    {
      step: 5,
      title: 'Registration & Delivery',
      description: 'Registration at appropriate authorities if required and delivery of the executed Power of Attorney document.'
    }
  ]

  const tabContent = {
    'what-is': 'A Power of Attorney is a legal document that gives someone you trust the authority to act on your behalf in property and legal matters. Think of it as your legal representative when you can\'t be there yourself. This government-approved format allows you to specify exactly what powers you\'re giving - from selling property to handling bank transactions. It\'s like having a trusted friend who can legally sign documents and make decisions for you, but only for the specific things you authorize them to do.',
    'when-to-use': 'Power of Attorney is essential when you\'re living abroad and need someone to handle property matters in Delhi, when you\'re elderly or unwell and need assistance with legal affairs, for NRIs who want to buy, sell, or manage property remotely, when you\'re traveling for extended periods, or when you want someone to handle specific transactions like property registration, bank dealings, or court matters on your behalf. It\'s your solution for remote property management and legal representation.',
    'legal-implications': 'A registered Power of Attorney creates legally binding authority for the attorney to act on your behalf within the specified powers. The attorney becomes legally authorized to sign documents, make transactions, and represent you in the matters specified in the document. However, the principal (you) retains the right to revoke the power at any time. The document must be properly executed, witnessed, and registered to be legally valid and enforceable in courts and with authorities.'
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
            <span className="text-text-light dark:text-text-dark">Power of Attorney</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="user-check" className="w-4 h-4"></i>
                  Legal Authorization Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Power of Attorney
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Authorize someone you trust to handle your property and legal matters when you can't be there yourself.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Create Power of Attorney
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-orange-600 dark:text-orange-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Secure Authorization</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Legally Protected</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="globe" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">NRI Friendly</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Remote Management</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Guidance</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Legal Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-orange-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-orange-200 dark:border-slate-700 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700">
                <div className="flex px-6 gap-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-4 pt-6 whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                        ? 'border-b-orange-600 text-orange-600 font-bold'
                        : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-orange-600 hover:border-b-orange-600/50'
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
            <div className="bg-gradient-to-br from-white via-orange-50/50 to-red-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-orange-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/10 to-orange-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How Power of Attorney Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our comprehensive process ensures secure and legally valid authorization for your trusted representative
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Types of Power of Attorney */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="layers"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Types of Power of Attorney</h3>
                    <p className="text-blue-100">Choose the right type for your specific needs</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* General Power of Attorney */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3 flex items-center gap-2">
                      <i data-lucide="globe" className="w-5 h-5 text-blue-500"></i>
                      General Power of Attorney
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4">
                      Gives broad powers to handle multiple types of transactions and legal matters on your behalf. 
                      Perfect for comprehensive property management and business dealings.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                        <strong>Best for:</strong> NRIs, elderly persons, or anyone needing comprehensive representation
                      </p>
                    </div>
                  </div>

                  {/* Special Power of Attorney */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3 flex items-center gap-2">
                      <i data-lucide="target" className="w-5 h-5 text-green-500"></i>
                      Special Power of Attorney
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4">
                      Limited to specific transactions or purposes like selling a particular property, 
                      handling a specific legal case, or managing a single business matter.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                        <strong>Best for:</strong> Single transactions, specific property deals, or limited-time needs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Common Powers Included */}
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
                    Common Powers You Can Grant:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <i data-lucide="home" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Buy/Sell Property</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="file-signature" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Sign Legal Documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="banknote" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Handle Bank Transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="scale" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Represent in Court</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="receipt" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Pay Taxes & Bills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="clipboard-list" className="w-4 h-4 text-orange-600"></i>
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Property Registration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-orange-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-orange-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for Power of Attorney preparation</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-orange-600/5 dark:hover:bg-orange-600/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-orange-600" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-600 to-red-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="user-check" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Power of Attorney?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Authorize someone you trust with the legal power to handle your important matters safely and securely
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                    <span>Secure Authorization</span>
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