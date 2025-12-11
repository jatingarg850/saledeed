'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function GeneralPowerOfAuthorityPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a General Power of Attorney?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Identity Proof of Principal and Agent',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both the person granting power (principal) and the person receiving power (agent).'
    },
    {
      title: 'Address Proof',
      description: 'Current address proof for both principal and agent including utility bills, bank statements, or rental agreements.'
    },
    {
      title: 'PAN Card of Both Parties',
      description: 'Permanent Account Number (PAN) card is mandatory for both principal and agent for tax compliance and verification.'
    },
    {
      title: 'Property Documents (if applicable)',
      description: 'Original property papers, title deeds, and ownership documents if the power of attorney relates to property transactions.'
    },
    {
      title: 'Passport Size Photographs',
      description: 'Recent passport-size photographs of both principal and agent for document verification and notarization.'
    },
    {
      title: 'Medical Certificate (if required)',
      description: 'Medical fitness certificate from a qualified doctor confirming the principal\'s mental capacity and sound mind.'
    },
    {
      title: 'Witness Information',
      description: 'Identity proof and contact details of at least two witnesses who will sign the power of attorney document.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'We understand your specific needs and the scope of powers to be granted in the General Power of Attorney.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Our legal experts prepare a comprehensive Power of Attorney document as per law with all necessary clauses.'
    },
    {
      step: 3,
      title: 'Document Verification',
      description: 'We verify all party details, witness information, and ensure the document meets legal requirements.'
    },
    {
      step: 4,
      title: 'Notarization Process',
      description: 'Complete assistance with notarization and attestation of the Power of Attorney document.'
    },
    {
      step: 5,
      title: 'Registration & Delivery',
      description: 'Final registration (if required) and delivery of the executed Power of Attorney with all compliance certificates.'
    }
  ]

  const tabContent = {
    'what-is': 'A General Power of Attorney is a legal document that grants broad authority to an agent (attorney-in-fact) to act on behalf of the principal in various matters. This document allows the agent to handle financial transactions, property dealings, legal matters, and other important decisions when the principal is unable to do so personally. The power of attorney contains specific powers granted, limitations (if any), duration of authority, and conditions for revocation. It serves as legal authorization for the agent to represent the principal in dealings with banks, government offices, courts, and other institutions.',
    'when-to-use': 'A General Power of Attorney is used when you need someone to handle your affairs due to travel, illness, old age, or other circumstances that prevent personal attendance. It is commonly used for property transactions, bank operations, legal proceedings, business dealings, and government work. This document is essential for NRIs, elderly persons, busy professionals, and anyone who needs reliable representation. It is required for property sales/purchases, bank account operations, tax filings, court appearances, and various administrative tasks.',
    'legal-implications': 'A properly executed General Power of Attorney creates a legal relationship between principal and agent with specific rights and obligations. The agent must act in the principal\'s best interest, maintain proper records, and avoid conflicts of interest. The document must be notarized, properly witnessed, and may require registration depending on the powers granted. Once executed, it gives the agent legal authority to bind the principal in authorized transactions, provides legal protection for third parties dealing with the agent, and remains valid until revoked or the principal\'s death.'
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
            <span className="text-text-light dark:text-text-dark">General Power of Authority</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="user-check" className="w-4 h-4"></i>
                  Legal Authorization Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  General Power of Authority Services
                 
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Professional power of attorney drafting and notarization services with complete legal compliance and expert guidance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Start Your Power of Attorney
                  </Link>
                  
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
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">3-5 Business Days</div>
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
                    Our streamlined process ensures your power of attorney is completed efficiently and legally
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

            {/* Documents Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-yellow-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your power of attorney process</p>
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

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Power of Attorney?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Get expert legal assistance for your authorization needs with complete documentation support
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
              
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/80 text-xs sm:text-sm">
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/partner">Careers</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                <ul className="space-y-2">
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/general-power-of-authority">General Power of Authority</Link></li>
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