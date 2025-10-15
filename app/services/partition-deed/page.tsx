'use client'

import { useState } from 'react'

export default function PartitionDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Partition Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Original Property Documents',
      description: 'Title deeds, sale deed, mother deed, and all documents proving joint ownership of the property among co-owners.'
    },
    {
      title: 'Identity Proof of All Co-owners',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for all co-owners involved in the partition.'
    },
    {
      title: 'PAN Card of All Parties',
      description: 'Permanent Account Number (PAN) card is mandatory for all co-owners for legal and tax compliance.'
    },
    {
      title: 'Property Survey Documents',
      description: 'Survey settlement records, revenue records, and detailed property measurements for accurate division.'
    },
    {
      title: 'Mutation Records',
      description: 'Latest mutation records from revenue department showing current ownership status and shares.'
    },
    {
      title: 'Property Valuation Report',
      description: 'Professional valuation report by registered valuer for fair division and stamp duty calculation.'
    },
    {
      title: 'Consent of All Co-owners',
      description: 'Written consent and agreement from all co-owners regarding the proposed partition and share allocation.'
    },
    {
      title: 'Family Tree Documentation',
      description: 'Family tree or succession certificate (if applicable) to establish inheritance rights and relationships.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Fair Property Division',
      description: 'Ensures every co-owner gets a clear and legal share in the jointly owned property.'
    },
    {
      step: 2,
      title: 'Legal Binding',
      description: 'Once registered, it protects your rights and prevents disputes among family members.'
    },
    {
      step: 3,
      title: 'Applies to Any Property',
      description: 'Land, house, commercial property, or inherited assets can all be partitioned legally.'
    },
    {
      step: 4,
      title: 'Conflict-Free Solution',
      description: 'Eliminates chances of family or business disagreements regarding property ownership.'
    },
    {
      step: 5,
      title: 'Secure Your Future',
      description: 'Provides official proof of ownership for peace of mind and future transactions.'
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Identify Property & Co-Owners',
      description: 'List all properties involved and confirm the details and ownership of all co-owners.'
    },
    {
      step: 2,
      title: 'Mutual Agreement on Shares',
      description: 'All parties agree on how the property will be divided and what share each person gets.'
    },
    {
      step: 3,
      title: 'Confirm the details and ownership of all co-owners',
      description: 'Detailed survey and measurement of the property to ensure accurate division.'
    },
    {
      step: 4,
      title: 'Drafting the Partition Deed',
      description: 'Legal experts prepare the partition deed with all agreed terms and property details.'
    },
    {
      step: 5,
      title: 'Review & Verification',
      description: 'All co-owners review the deed to ensure accuracy and completeness before signing.'
    },
    {
      step: 6,
      title: 'Each co-owner reviews the deed',
      description: 'The deed is signed by all parties in the presence of witnesses for legal validity.'
    },
    {
      step: 7,
      title: 'Registration of the Deed',
      description: 'The partition deed is registered at the local sub-registrar office with proper stamp duty.'
    },
    {
      step: 8,
      title: 'Submit the Partition Deed at the local sub-registrar office',
      description: 'Verification ensures no legal loopholes and compliance with laws for smooth execution.'
    },
    {
      step: 9,
      title: 'Official registration makes the deed legally binding and enforceable',
      description: 'Final registration makes the partition legally binding and provides official ownership proof.'
    }
  ]

  const tabContent = {
    'what-is': 'What is a Partition Deed? A Partition Deed is a legal document that divides jointly-owned property among co-owners, ensuring each person gets a clear and fair share. Imagine a family owning a house, land, or business property together. Over time, disagreements may arise about who owns what. A Partition Deed is the official solution to prevent conflicts and clearly define ownership. The partition process involves detailed measurement, fair valuation, and legal documentation to ensure every co-owner receives their rightful share. This document is essential for maintaining family harmony and providing legal clarity about property ownership.',
    'when-to-use': 'A Partition Deed is used when multiple people jointly own a property and want to divide it into separate shares, during family property settlements to avoid disputes, when co-owners want individual ownership rights, for inherited property division among heirs, when business partners want to separate their property interests, or when there are ongoing disputes about property ownership that need legal resolution.',
    'legal-implications': 'Once executed and registered, a Partition Deed creates separate and distinct ownership rights for each co-owner. It legally terminates the joint ownership and establishes individual ownership of specific portions. The deed must be registered within 4 months of execution to be legally valid. Stamp duty is payable based on the value of the property being partitioned. After registration, each co-owner becomes the absolute owner of their allocated share and can deal with it independently.'
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

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 mb-6">
            <a className="text-primary/80 dark:text-secondary/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-secondary transition-colors" href="/">Home</a>
            <span className="text-subtext-light dark:text-subtext-dark text-sm font-medium leading-normal">/</span>
            <a className="text-primary/80 dark:text-secondary/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Our Services</a>
            <span className="text-subtext-light dark:text-subtext-dark text-sm font-medium leading-normal">/</span>
            <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Partition Deed</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] font-display">Partition Deed</h1>
            <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal">Your guide to understanding and creating a legally binding property division document.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="w-full lg:w-2/3">
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {howItWorks.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1 text-sm">{item.title}</h4>
                        <p className="text-xs text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>
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

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-6">
                {/* Process Overview Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md border border-yellow-200/50">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="text-white text-2xl" data-lucide="split"></i>
                    </div>
                    <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Our Process</h3>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary font-bold text-xs">{step.step}</span>
                        </div>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark text-xs leading-tight">
                            {step.title}
                          </p>
                          <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Draft This Deed Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft Partition Deed</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                    Create a comprehensive partition deed with our expert legal team. Ensure fair division of jointly owned property.
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
                    Our legal experts will handle the entire partition process, from property survey to final registration.
                  </p>
                  <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                    <span>Request a Callback</span>
                    <i className="ml-2" data-lucide="phone"></i>
                  </button>
                </div>

                {/* Download Sample */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:bg-slate-800/50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Download Sample</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm">
                    Get a sample partition deed format to understand the structure and legal requirements.
                  </p>
                  <button className="w-full flex items-center justify-center rounded-full h-10 px-4 bg-orange-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-orange-700 transition-colors">
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
                      <span>Divides jointly owned property among co-owners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Requires consent of all co-owners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Professional survey required for fair division</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Registration mandatory within 4 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Creates separate ownership rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Prevents future property disputes</span>
                    </li>
                  </ul>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/partition-deed">Partition Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/will-agreement">Will Agreement</a></li>
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