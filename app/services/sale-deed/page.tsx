'use client'

import { useState } from 'react'

export default function SaleDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Sale Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Title Documents',
      description: 'Original documents proving the seller\'s ownership and right to sell the property. This includes previous sale deeds, mother deed, etc.'
    },
    {
      title: 'Proof of Identity & Address',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both the buyer, seller, and witnesses.'
    },
    {
      title: 'PAN Card',
      description: 'Permanent Account Number (PAN) card is mandatory for property transactions in India.'
    },
    {
      title: 'Property Details',
      description: 'A complete description of the property, including survey number, plot area, and building plan approval.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'A certificate confirming that the property is free from any legal dues or mortgages.'
    }
  ]

  const tabContent = {
    'what-is': 'A sale deed is a core legal document that acts as definitive proof of the transfer of ownership of a property from a seller (vendor) to a buyer (vendee). It is one of the most critical documents in any property transaction as it establishes the buyer\'s absolute and undisputed ownership of the property. The execution of this document means the transaction is complete, and the buyer becomes the new legal owner. In India, a sale deed must be registered under the Registration Act, 1908, to be legally valid.',
    'when-to-use': 'A sale deed is used when there is a complete transfer of ownership of immovable property from one party to another in exchange for monetary consideration. It is required for all property sales, whether residential, commercial, or agricultural land. The deed becomes essential when you want to establish clear ownership rights and when applying for loans against the property.',
    'legal-implications': 'Once executed and registered, a sale deed creates irrevocable rights for the buyer. It serves as conclusive evidence of ownership in courts of law. The document must comply with the Indian Registration Act, 1908, and the Transfer of Property Act, 1882. Non-registration makes the deed inadmissible as evidence of title, and stamp duty evasion can lead to penalties and legal complications.'
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
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="#">Contact</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="#">FAQ</a>
              </div>
              <div className="flex items-center gap-2">
                <button className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Login</span>
                </button>
                <button className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-colors">
                  <span className="truncate">Sign Up</span>
                </button>
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
            <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Sale Deed</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] font-display">Sale Deed</h1>
            <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal">Your guide to understanding and creating a legally binding property transfer document.</p>
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
                {/* Draft This Deed Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft This Deed</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                    Use our intuitive platform to generate a legally sound sale deed yourself. Answer a few simple questions and get your document ready for registration.
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
                    Our legal experts will handle the entire process for you, from drafting to registration, ensuring full compliance and peace of mind.
                  </p>
                  <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                    <span>Request a Callback</span>
                    <i className="ml-2" data-lucide="phone"></i>
                  </button>
                </div>

                {/* Quick Info Card */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Registration is mandatory under Indian law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Stamp duty varies by state (1-8% of property value)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Must be executed within 4 months of signing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Requires minimum 2 witnesses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Authorities Process Section */}
              <div className="mt-8 bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <i className="text-primary text-2xl" data-lucide="building"></i>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display">Government Authorities Process</h3>
                </div>
                
                <p className="text-subtext-light dark:text-subtext-dark mb-6 leading-relaxed">
                  Our sale deed process involves coordination with multiple government authorities to ensure complete legal compliance and smooth registration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">MCD Verification</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Property tax clearance and building plan verification from Municipal Corporation of Delhi.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">DDA Clearance</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Layout approval and development permissions from Delhi Development Authority.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">L&DO Documentation</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Land records verification and conversion certificates from Land & Development Office.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">SRO Registration</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Final document registration and stamp duty payment at Sub-Registrar Office.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Collector Office</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Property tax assessment and mutation of ownership records.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-background-light/50 dark:bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">6</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-light dark:text-text-dark mb-1">Final Handover</h4>
                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete documentation package with all authority clearances and certificates.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="text-primary" data-lucide="clock"></i>
                    <span className="font-semibold text-text-light dark:text-text-dark">Timeline: 15-20 Business Days</span>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">
                    Our expert team handles all authority interactions simultaneously to minimize processing time while ensuring complete compliance.
                  </p>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Deed Drafting</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Legal Verification</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Registration</a></li>
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