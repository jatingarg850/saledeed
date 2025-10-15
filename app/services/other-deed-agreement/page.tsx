'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function OtherDeedAgreementPage() {
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
    { name:'Mutation Legal Document', href: '/services/mutation-legal-document' },
    { name: 'Other Deed & Agreement', href: '/services/other-deed-agreement' }
  ]

  const tabs = [
    { id: 'what-is', label: 'What are Other Legal Documents?' },
    { id: 'when-to-use', label: 'When to Use Them' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const otherDocuments = [
    {
      title: 'Mortgage Deed',
      description: 'Legal document for securing loans against property, creating a charge on the property until loan repayment.',
      uses: ['Home loans', 'Business loans', 'Property financing'],
      icon: 'building-2'
    },
    {
      title: 'Lease Deed',
      description: 'Long-term rental agreement typically for commercial properties or extended residential tenancies.',
      uses: ['Commercial leasing', 'Long-term rentals', 'Industrial properties'],
      icon: 'calendar'
    },
    {
      title: 'Joint Development Agreement',
      description: 'Agreement between landowner and developer for joint development of property with shared profits.',
      uses: ['Real estate development', 'Construction projects', 'Land development'],
      icon: 'users'
    },
    {
      title: 'Conveyance Deed',
      description: 'Transfer of ownership from builder/society to individual flat owners in apartment complexes.',
      uses: ['Apartment ownership', 'Society transfers', 'Flat purchases'],
      icon: 'key'
    },
    {
      title: 'Settlement Deed',
      description: 'Legal document for resolving property disputes and settling ownership matters among parties.',
      uses: ['Dispute resolution', 'Family settlements', 'Court settlements'],
      icon: 'scale'
    },
    {
      title: 'Indemnity Bond',
      description: 'Legal protection document against losses or damages in property transactions.',
      uses: ['Risk protection', 'Transaction security', 'Loss coverage'],
      icon: 'shield'
    }
  ]

  const specializedServices = [
    {
      category: 'Commercial Documents',
      items: ['Shop Purchase Agreement', 'Office Lease Deed', 'Warehouse Rental', 'Commercial Mortgage']
    },
    {
      category: 'Agricultural Documents',
      items: ['Agricultural Land Sale', 'Crop Sharing Agreement', 'Farm Lease Deed', 'Water Rights Agreement']
    },
    {
      category: 'Industrial Documents',
      items: ['Industrial Plot Sale', 'Factory Lease Agreement', 'Manufacturing License', 'Industrial Mortgage']
    },
    {
      category: 'Family Settlements',
      items: ['Family Arrangement Deed', 'Maintenance Agreement', 'Adoption Deed', 'Guardianship Document']
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'Detailed consultation to understand your specific legal document requirements and objectives.'
    },
    {
      step: 2,
      title: 'Document Selection',
      description: 'Expert guidance on selecting the most appropriate legal document type for your specific situation.'
    },
    {
      step: 3,
      title: 'Custom Drafting',
      description: 'Professional drafting of the document with customized clauses and terms as per your requirements.'
    },
    {
      step: 4,
      title: 'Legal Review',
      description: 'Comprehensive legal review and validation to ensure compliance with applicable laws and regulations.'
    },
    {
      step: 5,
      title: 'Execution Support',
      description: 'Complete support for document execution, registration, and compliance with legal formalities.'
    }
  ]

  const tabContent = {
    'what-is': 'Other Deed & Agreement services encompass a wide range of specialized legal documents beyond the common property deeds. These include mortgage deeds, lease deeds, joint development agreements, conveyance deeds, settlement deeds, indemnity bonds, and various commercial, agricultural, and industrial agreements. Each document serves specific legal purposes and is tailored to meet unique requirements in different sectors. Our comprehensive service covers drafting, review, and execution of any legal document related to property, business, or personal matters that require legal documentation and compliance.',
    'when-to-use': 'These specialized documents are used for unique legal situations not covered by standard deeds - such as securing loans through mortgage deeds, long-term commercial leasing, joint property development projects, resolving family or business disputes through settlement deeds, transferring apartment ownership through conveyance deeds, or creating legal protection through indemnity bonds. They\'re essential for complex transactions, specialized business arrangements, agricultural dealings, industrial operations, and any situation requiring customized legal documentation with specific terms and conditions.',
    'legal-implications': 'Each specialized document creates specific legal obligations and rights for the parties involved. The legal implications vary based on the document type - mortgage deeds create security interests, lease deeds establish landlord-tenant relationships, settlement deeds resolve disputes with finality, and indemnity bonds provide legal protection against losses. Proper drafting and execution are crucial as these documents are legally binding and enforceable in courts. Registration requirements, stamp duty, and compliance obligations differ for each document type and must be carefully followed to ensure legal validity and enforceability.'
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
                    service.name === 'Other Deed & Agreement'
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
                <span className="text-text-light dark:text-text-dark">Other Deed & Agreement</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">Other Deed & Agreement</h1>
                  
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

                  {/* Document Types Section */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="file-stack"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Specialized Document Types</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {otherDocuments.map((doc, index) => (
                        <div key={index} className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg border border-gray-200 dark:border-slate-600">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className={`text-primary text-lg`} data-lucide={doc.icon}></i>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">{doc.title}</h4>
                              <p className="text-sm text-subtext-light dark:text-subtext-dark mb-2">{doc.description}</p>
                            </div>
                          </div>
                          <div className="ml-13">
                            <p className="text-xs font-medium text-text-light dark:text-text-dark mb-1">Common Uses:</p>
                            <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                              {doc.uses.map((use, useIndex) => (
                                <li key={useIndex}>• {use}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialized Services Section */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="layers"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Specialized Services</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {specializedServices.map((service, index) => (
                        <div key={index} className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <h4 className="font-semibold text-text-light dark:text-text-dark mb-3 flex items-center gap-2">
                            <i className="text-primary text-sm" data-lucide="folder"></i>
                            {service.category}
                          </h4>
                          <ul className="space-y-2">
                            {service.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-subtext-light dark:text-subtext-dark flex items-center gap-2">
                                <i className="text-primary text-xs" data-lucide="check-circle"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Custom Document Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Custom Legal Document</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Need a specialized legal document? Our experts will create custom agreements tailored to your specific requirements.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span>Get Custom Document</span>
                      <i className="ml-2" data-lucide="arrow-right"></i>
                    </button>
                  </div>

                  {/* Expert Consultation Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border border-yellow-200/50 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Expert Consultation</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Not sure which document you need? Our legal experts will analyze your situation and recommend the best solution.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                      <span>Book Consultation</span>
                      <i className="ml-2" data-lucide="calendar"></i>
                    </button>
                  </div>

                  {/* Document Categories */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Popular Categories</h3>
                    <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="building"></i>
                        <span>Commercial Agreements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="tractor"></i>
                        <span>Agricultural Documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="factory"></i>
                        <span>Industrial Agreements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="users"></i>
                        <span>Family Settlements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="shield"></i>
                        <span>Security Documents</span>
                      </li>
                    </ul>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-slate-800/50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Quick Contact</h3>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4">
                      Have a specific requirement? Contact our legal experts directly for immediate assistance.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <i className="text-green-600 text-xs" data-lucide="phone"></i>
                        <span className="text-subtext-light dark:text-subtext-dark">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-green-600 text-xs" data-lucide="mail"></i>
                        <span className="text-subtext-light dark:text-subtext-dark">legal@saledeed.com</span>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/other-deed-agreement">Other Deed & Agreement</a></li>
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