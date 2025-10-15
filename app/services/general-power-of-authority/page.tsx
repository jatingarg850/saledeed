'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GeneralPowerOfAuthorityPage() {
  const [activeTab, setActiveTab] = useState('what-is')

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
      title: 'Witness Details',
      description: 'Identity and address proof of two witnesses who will attest to the execution of the power of attorney document.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Consultation & Scope Definition',
      description: 'We discuss your requirements and define the specific powers and limitations to be granted in the document.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Our legal experts draft a comprehensive power of attorney document with all necessary clauses and conditions.'
    },
    {
      step: 3,
      title: 'Document Review',
      description: 'Thorough review of the draft with both parties to ensure all requirements are accurately captured.'
    },
    {
      step: 4,
      title: 'Notarization & Attestation',
      description: 'Proper notarization and attestation of the document as per legal requirements for validity.'
    },
    {
      step: 5,
      title: 'Registration (if required)',
      description: 'Registration at Sub-Registrar Office if the power of attorney involves immovable property transactions.'
    }
  ]

  const tabContent = {
    'what-is': 'A General Power of Attorney is a legal document that grants broad authority to an agent (attorney-in-fact) to act on behalf of the principal in various matters. This document allows the agent to handle financial transactions, property dealings, legal matters, and other important decisions when the principal is unable to do so personally. The scope can include banking operations, property transactions, tax matters, insurance claims, and business dealings. It\'s a powerful legal instrument that requires careful consideration of the powers granted and the trustworthiness of the appointed agent.',
    'when-to-use': 'A General Power of Attorney is used when you need someone to handle your affairs during extended travel, illness, or incapacity. It\'s commonly used by NRIs (Non-Resident Indians) to manage property and financial matters in India, by elderly individuals who want trusted family members to handle their affairs, during medical treatment when you cannot personally attend to legal or financial matters, for business operations when you need someone to act on your behalf, or when relocating and need someone to handle property transactions or legal formalities in your absence.',
    'legal-implications': 'A General Power of Attorney grants significant authority to the agent, making it crucial to choose a trustworthy person. The document becomes effective immediately upon execution unless specified otherwise. The principal retains the right to revoke the power at any time while mentally competent. The agent has a fiduciary duty to act in the principal\'s best interests. For property transactions, registration may be mandatory. The power automatically terminates upon the principal\'s death, mental incapacity (unless it\'s a durable power), or revocation. Misuse of power can result in legal action against the agent.'
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="bg-background-light/95 dark:bg-background-dark/95 shadow-sm backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
                <i className="text-primary text-3xl" data-lucide="home"></i>
                <h2 className="text-lg font-bold font-display">SaleDeed.com</h2>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="/">Home</a>
                <a className="text-sm font-medium text-primary dark:text-secondary" href="/services">Our Services</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="/authorities">Authorities</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="#">Contact</a>
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
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    service.name === 'General Power of Authority'
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
                <span className="text-text-light dark:text-text-dark">General Power of Authority</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">General Power of Authority</h1>
                  
                  {/* Tab Navigation */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700">
                    <div className="pb-3 border-b border-yellow-200 dark:border-slate-700">
                      <div className="flex px-4 gap-8 overflow-x-auto">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap transition-colors ${
                              activeTab === tab.id
                                ? 'border-b-primary text-text-light dark:text-text-dark'
                                : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-text-dark'
                            }`}
                          >
                            <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-relaxed">
                        {tabContent[activeTab as keyof typeof tabContent]}
                      </p>
                    </div>
                  </div>

                  {/* How it Works Section */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="workflow"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {process.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{item.step}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">{item.title}</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents Section */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="text-primary text-2xl" data-lucide="file-text"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    </div>
                    <div className="space-y-3">
                      {documents.map((doc, index) => (
                        <details key={index} className="group">
                          <summary className="flex items-center justify-between cursor-pointer p-3 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors">
                            <h4 className="font-medium text-text-light dark:text-text-dark">{doc.title}</h4>
                            <i className="transition-transform duration-300 group-open:rotate-180 text-primary" data-lucide="chevron-down"></i>
                          </summary>
                          <p className="mt-2 px-3 text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                            {doc.description}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Draft This Document Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft Power of Attorney</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Create a legally binding General Power of Attorney with our expert guidance and comprehensive templates.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span>Start Drafting Now</span>
                      <i className="ml-2" data-lucide="arrow-right"></i>
                    </button>
                  </div>

                  {/* Expert Assistance Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border border-yellow-200/50 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Get Expert Assistance</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Our legal experts will help you create a comprehensive power of attorney document tailored to your specific needs.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                      <span>Request a Callback</span>
                      <i className="ml-2" data-lucide="phone"></i>
                    </button>
                  </div>

                  {/* Quick Info Card */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Key Features</h3>
                    <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Broad authority to act on your behalf</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Covers financial and legal matters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Notarization required for validity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Can be revoked at any time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Registration may be required for property</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/general-power-of-authority">General Power of Authority</a></li>
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
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-200 dark:border-slate-800 text-center text-sm text-subtext-light dark:text-subtext-dark">
              <p>© 2024 SaleDeed.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}