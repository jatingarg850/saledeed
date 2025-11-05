'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function AgreementToSellPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is an Agreement to Sell?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Title Documents',
      description: 'Original title deeds, sale deed, mother deed, and chain of title documents proving clear ownership of the property.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both seller and buyer parties.'
    },
    {
      title: 'Property Tax Receipts',
      description: 'Latest property tax receipts and clearance certificates showing all dues are paid up to date.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Encumbrance certificate for the last 15-30 years showing the property\'s transaction history and clear title.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'Professional property valuation report for determining fair market value and agreement terms.'
    },
    {
      title: 'NOC Certificates',
      description: 'No Objection Certificates from relevant authorities like electricity board, water department, and society (if applicable).'
    },
    {
      title: 'PAN Card and Address Proof',
      description: 'PAN cards and current address proof of both buyer and seller for legal compliance and verification.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'We understand your property details and requirements, analyzing your specific needs and agreement documentation requirements.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Our legal experts prepare a proper Agreement to Sell as per law, ensuring complete legal compliance and accuracy.'
    },
    {
      step: 3,
      title: 'Verification Process',
      description: 'We ensure all property details, buyer, and seller information are accurate through thorough verification.'
    },
    {
      step: 4,
      title: 'Registration Support',
      description: 'Guidance is provided for payment of stamp duty and registration of the Agreement to Sell at the Sub-Registrar Office.'
    },
    {
      step: 5,
      title: 'Final Completion',
      description: 'Once registered, the document is delivered to you as legal proof of the agreement with all necessary certificates.'
    }
  ]

  const tabContent = {
    'what-is': 'An Agreement to Sell is a legal contract between a buyer and seller that outlines the terms and conditions for the future sale of a property. Unlike a Sale Deed, this document creates a contractual obligation to sell the property at a future date upon fulfillment of certain conditions. The agreement contains all essential details including property description, sale price, payment terms, possession date, and conditions precedent. It serves as a binding contract that protects both parties\' interests and provides legal recourse in case of breach of contract.',
    'when-to-use': 'An Agreement to Sell is used when you want to secure a property purchase but the actual sale will happen at a future date. It is commonly used in under-construction properties, when buyers need time to arrange finances, for properties with pending approvals, or when possession will be given later. This agreement is essential for booking properties, securing purchase rights, establishing legal obligations, and protecting against price fluctuations. It is mandatory when advance payments are made and formal sale deed execution is planned for a future date.',
    'legal-implications': 'A registered Agreement to Sell creates binding legal obligations on both parties and provides legal protection against breach of contract. It gives the buyer a legal right to demand specific performance and protects against the seller selling to someone else. The agreement must be executed on appropriate stamp paper, signed by both parties with witnesses, and registered within the prescribed time limit. Once registered, it creates enforceable rights and obligations, protects both parties legally, and serves as the foundation for the future Sale Deed execution.'
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
            <span className="text-text-light dark:text-text-dark">Agreement to Sell</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="file-signature" className="w-4 h-4"></i>
                  Property Agreement Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Agreement to Sell
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Professional agreement to sell drafting and registration services with complete legal compliance and expert guidance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Start Your Agreement
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">100% Legal</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Compliance Guaranteed</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Quick Process</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">5-7 Business Days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Team</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Qualified Lawyers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-yellow-200 dark:border-slate-700 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
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
                <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent]}
                </p>
              </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-gradient-to-br from-white via-yellow-50/50 to-orange-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our streamlined process ensures your agreement to sell is completed efficiently and legally
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Agreement Format */}
            <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-check"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Official Agreement to Sell Format</h3>
                    <p className="text-green-100">Government Approved Template (MoUD & DoLR)</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Introduction */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-400">
                  <h4 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3">
                    What You're Getting
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">
                    This is the <strong>final model draft agreed to by Ministry of Urban Development (MoUD) and Department of Land Resources (DoLR)</strong>. Think of it as the government's official "stamp of approval" format.
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Note:</strong> This is a model draft and may be customized according to requirements of individual cases.
                    </p>
                  </div>
                </div>

                {/* Format Structure */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-6 flex items-center gap-2">
                    <i data-lucide="list" className="w-5 h-5 text-primary"></i>
                    Agreement Format Structure
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Basic Information */}
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">1. Document Details</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-1">
                        <li>• Nature of Document: AGREEMENT TO SELL</li>
                        <li>• Date and Place of Execution</li>
                        <li>• Document Registration Requirements</li>
                      </ul>
                    </div>

                    {/* Parties Information */}
                    <div className="border-l-4 border-secondary pl-4">
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">2. Parties Information</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-1">
                        <li>• Seller Details: Name, Age, Father/Husband Name, Address</li>
                        <li>• Buyer Details: Name, Age, Father/Husband Name, Address</li>
                        <li>• Agent Details (if applicable) with Power of Attorney</li>
                      </ul>
                    </div>

                    {/* Property Details */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">3. Property Information</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-1">
                        <li>• Complete Property Schedule with measurements</li>
                        <li>• Revenue District, Sub-Registrar Office, Village details</li>
                        <li>• Survey numbers, boundaries, and market value</li>
                        <li>• Built-up area, construction details, and approved use</li>
                      </ul>
                    </div>

                    {/* Financial Terms */}
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">4. Financial Terms</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-1">
                        <li>• Total Sale Consideration Amount</li>
                        <li>• Advance Amount Paid</li>
                        <li>• Payment Mode and Schedule</li>
                        <li>• Stamp Duty and Registration Charges</li>
                      </ul>
                    </div>

                    {/* Legal Conditions */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">5. Conditions of Sale</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-1">
                        <li>• Seller's declarations of clear title and ownership</li>
                        <li>• No encumbrance certificate and indemnity clauses</li>
                        <li>• Possession delivery terms and timeline</li>
                        <li>• Registration completion obligations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Legal Clauses */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="shield-check" className="w-5 h-5 text-yellow-600"></i>
                    Essential Legal Protections
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-3">Seller's Undertakings:</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-2">
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></i>
                          <span>Absolute ownership declaration with clear title</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></i>
                          <span>No encumbrance guarantee and indemnity protection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></i>
                          <span>Vacant possession delivery commitment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"></i>
                          <span>Registration completion within agreed timeline</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-3">Buyer's Rights:</h5>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark space-y-2">
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"></i>
                          <span>Legal right to enforce specific performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"></i>
                          <span>Protection against seller's breach of contract</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"></i>
                          <span>Court enforcement rights in case of default</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"></i>
                          <span>Advance amount acknowledgment and receipt</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sample Format Preview */}
                <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="eye" className="w-5 h-5 text-gray-600"></i>
                    Format Preview
                  </h4>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-slate-600">
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-3">
                      <div className="text-center font-bold text-lg mb-4">AGREEMENT TO SELL</div>
                      <div className="space-y-2">
                        <p><strong>1. Nature of the Document:</strong> AGREEMENT TO SELL</p>
                        <p><strong>2. (i) Date of Execution:</strong> ______________________</p>
                        <p><strong>&nbsp;&nbsp;&nbsp;(ii) Place of execution:</strong> ______________________</p>
                        <p><strong>3. Name of the seller:</strong> ______________________</p>
                        <p><strong>&nbsp;&nbsp;&nbsp;Age:</strong> ______ years</p>
                        <p><strong>&nbsp;&nbsp;&nbsp;Father/Husband Name:</strong> ______________________</p>
                        <p><strong>&nbsp;&nbsp;&nbsp;Address:</strong> ______________________</p>
                        <div className="text-center text-gray-500 italic py-2">... [Complete format continues] ...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      <i data-lucide="download" className="w-4 h-4"></i>
                      Download Full Format
                    </button>
                    <button className="flex items-center gap-2 bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-500 transition-colors">
                      <i data-lucide="eye" className="w-4 h-4"></i>
                      View Complete Sample
                    </button>
                  </div>
                </div>

                {/* Why This Format Matters */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200/50 dark:border-indigo-700/50">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="info" className="w-5 h-5 text-indigo-600"></i>
                    Why This Government Format Matters
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="award" className="w-6 h-6 text-indigo-600 dark:text-indigo-400"></i>
                      </div>
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Official Recognition</h5>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Approved by central government ministries for nationwide use</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="shield" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                      </div>
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Legal Compliance</h5>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Ensures all legal requirements and protections are included</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Universal Acceptance</h5>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Recognized by all registrar offices and legal authorities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-yellow-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your agreement to sell process</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-primary" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="rocket" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Agreement to Sell?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Join 1000 of satisfied customers who trust us with their property documentation needs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                    <span>100% Legal Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Secure Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Quick Turnaround</span>
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
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/agreement-to-sell">Agreement to Sell</Link></li>
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