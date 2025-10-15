'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RelinquishmentDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const services = [
    { name: 'Sale Deed', href: '/services/sale-deed' },
    { name: 'Gift Deed', href: '/services/gift-deed' },
    { name: 'Relinquishment Deed', href: '/services/relinquishment-deed' },
    { name: 'Will Agreement', href: '/services/will-agreement' },
    { name: 'Partition Deed', href: '/services/partition-deed' },
    { name: 'General Power of Authority', href: '#' },
    { name: 'Agreement to Sell', href: '#' },
    { name: 'Builder Buyer Agreement', href: '#' },
    { name: 'Rent Agreement', href: '#' },
    { name: 'Mutation Legal Document', href: '#' },
    { name: 'Other Deed & Agreement', href: '#' }
  ]

  const tabs = [
    { id: 'what-is', label: 'What is a Relinquishment Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Identity Proof of All Co-owners',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for all co-owners including the relinquisher and remaining owners.'
    },
    {
      title: 'Original Property Documents',
      description: 'Title deeds, sale deed, mother deed, and any other documents proving joint ownership of the property.'
    },
    {
      title: 'PAN Card of All Parties',
      description: 'Permanent Account Number (PAN) card is mandatory for all co-owners involved in the relinquishment transaction.'
    },
    {
      title: 'Property Ownership Proof',
      description: 'Documents establishing the share of each co-owner in the property, including partition deeds or inheritance documents if applicable.'
    },
    {
      title: 'No Objection Certificate',
      description: 'NOC from other family members (if required) and clearance from any existing loans or mortgages on the property.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'Current market valuation of the property by a registered valuer for accurate share calculation and stamp duty assessment.'
    },
    {
      title: 'Consent of Remaining Co-owners',
      description: 'Written consent and acceptance from all remaining co-owners who will receive the relinquished share.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Agreement on Relinquishment',
      description: 'We review the property, co-ownership details, and the exact share to be relinquished among all parties.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Legal experts prepare a proper Relinquishment Deed with all required details as per law.'
    },
    {
      step: 3,
      title: 'Verification Process',
      description: 'All ownership details, parties information, and property documents are verified for accuracy.'
    },
    {
      step: 4,
      title: 'Registration Support',
      description: 'Guidance is provided for stamp duty payment and registration at the Sub-Registrar Office.'
    },
    {
      step: 5,
      title: 'Final Completion',
      description: 'Once registered, the deed is delivered as final proof of transfer of rights to remaining co-owners.'
    }
  ]

  const tabContent = {
    'what-is': 'A Relinquishment Deed is a legal document used when one co-owner of a property voluntarily gives up or renounces their share in favour of other co-owners. It is commonly used in cases of joint family property, inherited property, or co-owned property. The person relinquishing the property (the relinquisher) surrenders their rights without any consideration in exchange, transferring it legally to the remaining owners (the relinquishees). Without a registered Relinquishment Deed, the rights of the parties involved may remain unclear, and ownership transfer cannot be considered legally valid. This document ensures smooth transfer of ownership rights among family members or co-owners without the need for a sale transaction.',
    'when-to-use': 'A Relinquishment Deed is used when co-owners want to consolidate property ownership, during family property settlements, when one co-owner wants to exit from joint ownership, in cases of inherited property where one heir wants to give up their share to others, or when there are disputes among co-owners and one party wants to relinquish their rights. It\'s also commonly used in divorce settlements where one spouse relinquishes their share in jointly owned property.',
    'legal-implications': 'Once executed and registered, a Relinquishment Deed creates an irrevocable transfer of the relinquisher\'s share to the remaining co-owners. The relinquisher loses all rights, title, and interest in the property permanently. The deed must be registered within 4 months of execution to be legally valid. Stamp duty is payable based on the value of the share being relinquished. The remaining co-owners become absolute owners of the relinquished share in proportion to their existing shares or as specified in the deed.'
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
                    service.name === 'Relinquishment Deed'
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
                <span className="text-text-light dark:text-text-dark">Relinquishment Deed</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">Relinquishment Deed</h1>
                  
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
              {/* Authorities Process Section */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="building"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Government Authorities Process</h3>
                    </div>
                    
                    <p className="text-subtext-light dark:text-subtext-dark mb-6 leading-relaxed">
                      Our relinquishment deed process involves coordination with multiple government authorities to ensure complete legal compliance and smooth registration.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Ownership Verification</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Verification of co-ownership rights and share calculation from revenue records and property documents.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Property Valuation</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Professional valuation of the relinquished share for accurate stamp duty calculation and legal compliance.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">SRO Registration</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete registration process at Sub-Registrar Office with proper stamp duty payment and documentation.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Revenue Record Update</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Mutation of property records to reflect the new ownership structure after relinquishment.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">5</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Tax Compliance</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Guidance on tax implications and compliance requirements for relinquishment transactions.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary font-bold text-sm">6</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Final Documentation</h4>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete documentation package with registered deed and updated ownership certificates.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="text-primary" data-lucide="clock"></i>
                        <span className="font-semibold text-text-light dark:text-text-dark">Timeline: 10-15 Business Days</span>
                      </div>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        Our expert team handles all authority interactions and ensures complete compliance with relinquishment deed regulations and co-ownership transfer requirements.
                      </p>
                    </div>
                  </div>
                </div>         
       {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Draft This Deed Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft Relinquishment Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Use our expert platform to generate a legally sound relinquishment deed. Our lawyers ensure complete compliance with co-ownership transfer regulations.
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
                      Our legal experts will handle the entire relinquishment deed process for you, from drafting to registration, ensuring complete legal compliance.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                      <span>Request a Callback</span>
                      <i className="ml-2" data-lucide="phone"></i>
                    </button>
                  </div>

                  {/* Download Sample */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:bg-slate-800/50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Download Sample</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm">
                      Get a sample relinquishment deed format to understand the structure and requirements.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-10 px-4 bg-purple-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-purple-700 transition-colors">
                      <i className="mr-2" data-lucide="download"></i>
                      <span>Download Sample</span>
                    </button>
                  </div>

                  {/* Quick Info Card */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Quick Facts</h3>
                    <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Voluntary surrender of co-ownership rights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>No monetary consideration involved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Stamp duty based on relinquished share value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Registration mandatory within 4 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Consent of all co-owners required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Irrevocable transfer once registered</span>
                      </li>
                    </ul>
                  </div>

                  {/* Process Overview Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md border border-yellow-200/50">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="text-white text-2xl" data-lucide="users"></i>
                      </div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Our Process</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      {process.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">{step.step}</span>
                          </div>
                          <div>
                            <p className="font-medium text-text-light dark:text-text-dark text-xs leading-tight">
                              {step.title}
                            </p>
                          </div>
                        </div>
                      ))}
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</a></li>
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