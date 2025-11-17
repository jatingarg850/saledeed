'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function SaleDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Sale Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Title Documents',
      description: 'Original title deeds, previous sale deeds, and complete chain of ownership documents proving clear title.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport for both seller (vendor) and buyer (vendee) with current address proof.'
    },
    {
      title: 'Property Tax Clearance',
      description: 'Latest property tax receipts and clearance certificates showing all municipal dues are paid up to date.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Encumbrance certificate for the last 15-30 years showing clear title and no pending legal issues.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'Professional property valuation report for determining fair market value and stamp duty calculation.'
    },
    {
      title: 'NOC and Clearance Certificates',
      description: 'No Objection Certificates from housing society, electricity board, water department, and other authorities.'
    },
    {
      title: 'Agreement to Sell (if applicable)',
      description: 'Previously executed Agreement to Sell document if advance payment was made earlier.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Document Verification',
      description: 'Thorough verification of all property documents, title clearance, and legal compliance checks.'
    },
    {
      step: 2,
      title: 'Sale Deed Drafting',
      description: 'Professional drafting of Sale Deed using government-approved format with all necessary legal clauses.'
    },
    {
      step: 3,
      title: 'Valuation & Stamp Duty',
      description: 'Property valuation, stamp duty calculation, and preparation for registration formalities.'
    },
    {
      step: 4,
      title: 'Registration Process',
      description: 'Complete assistance with registration at Sub-Registrar Office including payment of stamp duty and fees.'
    },
    {
      step: 5,
      title: 'Possession & Handover',
      description: 'Guidance for property possession transfer and completion of all post-registration formalities.'
    }
  ]

  const tabContent = {
    'what-is': 'A Sale Deed is the final and most important document in any property transaction - it\'s your proof of ownership. Think of it as the "marriage certificate" for you and your property. This government-approved format legally transfers ownership from seller to buyer, making you the absolute owner with full rights to use, sell, or mortgage the property. Unlike an Agreement to Sell (which is like an engagement), a Sale Deed is the actual transfer of ownership that gets registered and gives you complete legal title.',
    'when-to-use': 'A Sale Deed is used when you\'re ready to complete the actual property purchase and take ownership. It\'s executed after all conditions in the Agreement to Sell are met, full payment is made, and you\'re ready to become the legal owner. This is the final step in property buying - whether it\'s residential, commercial, or agricultural property. It\'s also used when gifting property (Gift Deed) or in family transfers, making it the universal document for property ownership transfer.',
    'legal-implications': 'A registered Sale Deed creates absolute ownership and is the strongest legal document for property rights. It provides complete protection under law, serves as conclusive proof of ownership, and is required for all future transactions. The deed must be executed on appropriate stamp paper, properly registered, and creates enforceable legal rights. It protects against fraud, provides legal recourse for any disputes, and is essential for property loans, insurance, and future sales.'
  }

  return (
    <div className="sale-deed-page relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
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
            <span className="text-text-light dark:text-text-dark">Sale Deed</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="file-check" className="w-4 h-4"></i>
                  Property Ownership Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Sale Deed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Your final step to property ownership. Complete legal transfer with government-approved documentation and expert guidance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Complete Your Sale Deed
                  </Link>
                  
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-amber-600 dark:text-amber-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Complete Ownership</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Legal Title Transfer</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-yellow-600 dark:text-yellow-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Quick Registration</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Same Day Process</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-orange-600 dark:text-orange-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Support</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">End-to-End Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Sale Deed Definition Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-blue-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">Sale Deed</h2>
                    <p className="text-subtext-light dark:text-subtext-dark">Understanding the most important property document</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-lg">
                    Sale Deed is a legally binding document that officially records the transfer of ownership of a property from the seller to the buyer. It is the most important document in any property transaction because it acts as proof of ownership. This document contains all essential details, including: Name and details of the seller and buyer Complete description of the property (address, boundaries, dimensions, survey number, etc.) The agreed sale price Payment terms and conditions Any special clauses agreed upon by both parties Without a registered Sale Deed, a property transaction is not legally valid, and the buyer does not have full legal rights over the property. Registration of the Sale Deed at the Sub-Registrar’s office ensures that the transfer is recognized by law, protects both parties, and helps avoid future disputes.
                  </p>

                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">Buyer and Seller agree on the terms of sale (price, possession date, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">A draft of the Sale Deed is prepared including all details of the property.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">Both parties sign the document in the presence of witnesses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">The document is then registered with the local Sub-Registrar Office by paying the required stamp duty and registration charges.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">After registration, the buyer becomes the legal owner of the property.</span>
                    </li>
                    
                  </ul>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8">
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      <strong className="text-blue-600 dark:text-blue-400">Important:</strong> Without a registered Sale Deed, a property transaction is not legally valid, and the buyer does not have full legal rights over the property. Registration of the Sale Deed at the Sub-Registrar's office ensures that the transfer is recognized by law, protects both parties, and helps avoid future disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-600/10 to-blue-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Simple step-by-step process to complete your Sale Deed registration
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Agreement on Terms</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          Buyer and Seller agree on the terms of sale (price, possession date, etc.).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Draft Preparation</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          A draft of the Sale Deed is prepared including all details of the property.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Signing & Witnessing</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          Both parties sign the document in the presence of witnesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Registration</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          The document is then registered with the local Sub-Registrar Office by paying the required stamp duty and registration charges.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <i data-lucide="check" className="w-6 h-6 text-white"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Ownership Transfer Complete</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          After registration, the buyer becomes the legal owner of the property.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Documents Required Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-blue-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your sale deed registration</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-blue-600/5 dark:hover:bg-blue-600/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-blue-600" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="file-check" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Complete Your Property Purchase?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Get your Sale Deed registered with complete legal protection and expert guidance throughout the process
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
                  
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-4 h-4"></i>
                    <span>Complete Ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Legal Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Same Day Registration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-yellow-50 dark:bg-gray-900 border-t border-yellow-200 dark:border-slate-800 mt-12">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Company</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                <ul className="space-y-2">
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Resources</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Blog</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">FAQ</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Legal</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Contact</h4>
                  <div className="flex items-center gap-1">
                    <i className="text-primary text-xs" data-lucide="mail"></i>
                    <a href="mailto:support@saledeed.com" className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors">
                      support@saledeed.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-200 dark:border-slate-800 text-center text-sm text-subtext-light dark:text-subtext-dark">
              <p>© 2025 SaleDeed.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}