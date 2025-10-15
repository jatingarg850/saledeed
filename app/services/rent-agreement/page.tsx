'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RentAgreementPage() {
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
    { id: 'what-is', label: 'What is a Rent Agreement?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Owner\'s Property Documents',
      description: 'Original property papers, title deed, sale deed, and ownership proof documents of the landlord.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both landlord and tenant.'
    },
    {
      title: 'Address Proof',
      description: 'Current address proof for both parties including utility bills, bank statements, or previous rental agreements.'
    },
    {
      title: 'PAN Card of Both Parties',
      description: 'PAN cards of both landlord and tenant for tax compliance and TDS purposes.'
    },
    {
      title: 'Property Tax Receipts',
      description: 'Latest property tax receipts and municipal tax clearance certificates for the rental property.'
    },
    {
      title: 'Passport Size Photographs',
      description: 'Recent passport-size photographs of both landlord and tenant for agreement documentation.'
    },
    {
      title: 'Security Deposit Details',
      description: 'Bank details and receipt of security deposit payment made by tenant to landlord.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Property Inspection & Terms',
      description: 'Physical inspection of the property, discussion of rental terms, security deposit, and maintenance responsibilities.'
    },
    {
      step: 2,
      title: 'Agreement Drafting',
      description: 'Professional drafting of comprehensive rent agreement with all terms, conditions, and legal clauses.'
    },
    {
      step: 3,
      title: 'Legal Review',
      description: 'Thorough legal review of the agreement by both parties to ensure fair terms and legal compliance.'
    },
    {
      step: 4,
      title: 'Stamp Duty & Registration',
      description: 'Payment of appropriate stamp duty and registration of the agreement as per local registration requirements.'
    },
    {
      step: 5,
      title: 'Execution & Handover',
      description: 'Signing of agreement by both parties with witnesses and handover of property keys to tenant.'
    }
  ]

  const tabContent = {
    'what-is': 'A Rent Agreement, also known as a Rental Agreement or Lease Agreement, is a legal contract between a property owner (landlord) and a tenant that outlines the terms and conditions for renting a property. It specifies the rental amount, duration of tenancy, security deposit, maintenance responsibilities, and other important conditions. The agreement protects the rights of both parties and provides legal recourse in case of disputes. It can be for residential or commercial properties and may be registered or unregistered depending on the duration and local laws. A well-drafted rent agreement ensures clarity and prevents future conflicts between landlord and tenant.',
    'when-to-use': 'A Rent Agreement is used when renting out residential property like apartments, houses, or rooms, leasing commercial spaces for business purposes, subletting a property to another tenant, renting property for short-term or long-term periods, when you want legal protection for both landlord and tenant rights, for tax benefits and proper documentation of rental income, when security deposit and advance payments are involved, or when specific terms and conditions need to be clearly defined. It\'s essential for any formal rental arrangement to avoid disputes and ensure legal compliance.',
    'legal-implications': 'A Rent Agreement creates legal obligations for both parties and is enforceable in court. Registration is mandatory for agreements exceeding 11 months duration. The agreement provides legal protection against arbitrary eviction or rent increases. Landlords must follow proper legal procedures for eviction as per local tenancy laws. Tenants have rights to peaceful enjoyment of the property and protection against harassment. The agreement serves as evidence for tax purposes and TDS compliance. Breach of agreement terms can result in legal action and financial penalties. Proper registration provides stronger legal standing in disputes and court proceedings.'
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
                    service.name === 'Rent Agreement'
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
                <span className="text-text-light dark:text-text-dark">Rent Agreement</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">Rent Agreement</h1>
                  
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

                  {/* Types of Rent Agreements */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="layers"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Types of Rent Agreements</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">11-Month Agreement</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Most common type, avoids mandatory registration and provides flexibility for both parties.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• No registration required</li>
                          <li>• Lower stamp duty</li>
                          <li>• Easy renewal process</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Long-term Lease</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          For periods exceeding 11 months, requires mandatory registration and higher stamp duty.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Mandatory registration</li>
                          <li>• Higher stamp duty</li>
                          <li>• Stronger legal protection</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Commercial Lease</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          For business premises with specific commercial terms and conditions.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Business use clauses</li>
                          <li>• Higher security deposits</li>
                          <li>• Specific commercial terms</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Leave & License</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Grants permission to use property without creating tenancy rights.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• No tenancy rights</li>
                          <li>• Easier eviction</li>
                          <li>• Flexible terms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Draft This Agreement Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft Rent Agreement</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Create a comprehensive rent agreement with all legal clauses and protection for both landlord and tenant.
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
                      Our legal experts will help you create a balanced rent agreement that protects both parties' interests.
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
                        <span>Legal protection for both parties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Clear terms and conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Security deposit protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Maintenance responsibility clauses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Renewal and termination terms</span>
                      </li>
                    </ul>
                  </div>

                  {/* Stamp Duty Info */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-slate-800/50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Stamp Duty Info</h3>
                    <div className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <div className="flex justify-between">
                        <span>11-Month Agreement:</span>
                        <span className="font-medium">₹500-2000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long-term Lease:</span>
                        <span className="font-medium">2-4% of annual rent</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Registration Fee:</span>
                        <span className="font-medium">1% of annual rent</span>
                      </div>
                    </div>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/rent-agreement">Rent Agreement</a></li>
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