'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MutationLegalDocumentPage() {
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
    { id: 'what-is', label: 'What is Property Mutation?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Original Property Transfer Document',
      description: 'Sale deed, gift deed, inheritance deed, or any other document that proves the transfer of property ownership.'
    },
    {
      title: 'Previous Property Tax Receipts',
      description: 'Latest property tax receipts and clearance certificates showing all dues paid by the previous owner.'
    },
    {
      title: 'Identity Proof of New Owner',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License of the person in whose name mutation is being done.'
    },
    {
      title: 'Address Proof',
      description: 'Current address proof of the new property owner including utility bills or bank statements.'
    },
    {
      title: 'Death Certificate (if applicable)',
      description: 'Death certificate of the previous owner in case of inheritance-based mutation along with legal heir certificate.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Encumbrance certificate showing the chain of ownership and confirming the legal transfer of property.'
    },
    {
      title: 'Survey Settlement Records',
      description: 'Revenue records, survey numbers, and settlement documents related to the property from revenue department.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Document Verification',
      description: 'Comprehensive verification of property transfer documents and ownership proof for mutation eligibility.'
    },
    {
      step: 2,
      title: 'Application Preparation',
      description: 'Preparation of mutation application with all required documents and proper format as per revenue department.'
    },
    {
      step: 3,
      title: 'Revenue Department Submission',
      description: 'Submission of mutation application to the concerned Tehsildar or Village Revenue Officer with prescribed fees.'
    },
    {
      step: 4,
      title: 'Field Verification',
      description: 'Revenue officials conduct field verification and inquiry to confirm the legitimacy of the ownership transfer.'
    },
    {
      step: 5,
      title: 'Mutation Order & Update',
      description: 'Issuance of mutation order and updating of revenue records with new owner\'s name and details.'
    }
  ]

  const tabContent = {
    'what-is': 'Property Mutation is the process of transferring or changing the title of ownership of a property in the revenue records of the local municipal corporation or gram panchayat. It involves updating the property ownership details in government records when ownership changes due to sale, inheritance, gift, or any other legal transfer. Mutation ensures that property tax and other civic responsibilities are transferred to the new owner. It\'s an administrative process that updates the revenue records but doesn\'t create or transfer ownership rights - it merely records the change that has already occurred through a legal document like a sale deed or gift deed.',
    'when-to-use': 'Property Mutation is required after purchasing property through sale deed to transfer tax liability, when inheriting property from deceased family members, after receiving property as a gift through gift deed, when property ownership changes due to partition among family members, after court orders or legal settlements affecting property ownership, when there are errors in existing revenue records that need correction, or for obtaining various certificates and approvals that require updated ownership records. It\'s essential for legal compliance and to avoid future complications in property transactions.',
    'legal-implications': 'Mutation is primarily an administrative process and doesn\'t confer ownership rights - it only records existing ownership. However, it\'s crucial for legal compliance and tax purposes. Non-mutation can lead to continued tax liability for the previous owner and complications for the new owner. Mutated records serve as supporting evidence of ownership but are not conclusive proof of title. The process helps in maintaining accurate revenue records and prevents disputes. Mutation is mandatory in most states and failure to complete it within prescribed time limits may result in penalties. It\'s essential for obtaining building permissions, loans, and other property-related approvals.'
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
                    service.name === 'Mutation Legal Document'
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
                <span className="text-text-light dark:text-text-dark">Mutation Legal Document</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black mb-4 text-text-light dark:text-text-dark">Mutation Legal Document</h1>
                  
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

                  {/* Types of Mutation */}
                  <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <i className="text-primary text-2xl" data-lucide="git-branch"></i>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Types of Mutation</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Sale Mutation</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Transfer of ownership records after property sale through registered sale deed.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Requires registered sale deed</li>
                          <li>• Payment of stamp duty</li>
                          <li>• Transfer of tax liability</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Inheritance Mutation</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Transfer of property records to legal heirs after owner's death.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Death certificate required</li>
                          <li>• Legal heir certificate</li>
                          <li>• Family tree documentation</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Gift Mutation</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Transfer of ownership records after property gifted through gift deed.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Registered gift deed</li>
                          <li>• Donor-donee relationship proof</li>
                          <li>• Acceptance by donee</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Partition Mutation</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                          Division of joint property among co-owners through partition deed.
                        </p>
                        <ul className="text-xs text-subtext-light dark:text-subtext-dark space-y-1">
                          <li>• Partition deed required</li>
                          <li>• Consent of all co-owners</li>
                          <li>• Survey and demarcation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                  {/* Apply for Mutation Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Apply for Mutation</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Get expert assistance for property mutation process with complete documentation and follow-up.
                    </p>
                    <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span>Start Application</span>
                      <i className="ml-2" data-lucide="arrow-right"></i>
                    </button>
                  </div>

                  {/* Expert Assistance Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border border-yellow-200/50 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Get Expert Assistance</h3>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                      Our experts will handle the entire mutation process including documentation, submission, and follow-up with revenue authorities.
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
                        <span>Updates revenue records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Transfers tax liability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Legal compliance requirement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Prevents future disputes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                        <span>Required for approvals</span>
                      </li>
                    </ul>
                  </div>

                  {/* Timeline Info */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:bg-slate-800/50 rounded-xl p-6 border border-orange-200">
                    <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Processing Timeline</h3>
                    <div className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <div className="flex justify-between">
                        <span>Document Verification:</span>
                        <span className="font-medium">2-3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Field Verification:</span>
                        <span className="font-medium">7-15 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mutation Order:</span>
                        <span className="font-medium">15-30 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Record Update:</span>
                        <span className="font-medium">30-45 days</span>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/mutation-legal-document">Mutation Legal Document</a></li>
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