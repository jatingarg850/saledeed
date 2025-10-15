'use client'

import { useState } from 'react'

export default function GiftDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Gift Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Identity Proof of Donor & Donee',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both the person giving the gift (donor) and receiving it (donee).'
    },
    {
      title: 'Property Documents',
      description: 'Original title documents, previous sale deed, mother deed, and any other documents proving the donor\'s ownership of the property.'
    },
    {
      title: 'PAN Card',
      description: 'Permanent Account Number (PAN) card is mandatory for both donor and donee for property gift transactions in India.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'A registered valuer\'s certificate showing the current market value of the property being gifted.'
    },
    {
      title: 'No Objection Certificate',
      description: 'NOC from family members (if applicable) and any existing loan clearance certificate if the property is mortgaged.'
    },
    {
      title: 'Acceptance by Donee',
      description: 'Written acceptance from the donee acknowledging the gift and agreeing to accept the property transfer.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Donor Decision',
      description: 'The donor decides to gift property or an asset voluntarily to the donee without any monetary consideration.'
    },
    {
      step: 2,
      title: 'Gift Deed Drafting',
      description: 'Our legal experts prepare a legally valid Gift Deed with all required details of donor, donee, property, and conditions.'
    },
    {
      step: 3,
      title: 'Verification Process',
      description: 'We ensure all details of the donor, donee, and property are verified and proper documentation is prepared.'
    },
    {
      step: 4,
      title: 'Registration Support',
      description: 'Guidance is provided for stamp duty payment and registration at the Sub-Registrar Office with all authorities.'
    },
    {
      step: 5,
      title: 'Final Completion',
      description: 'Once registered, the Gift Deed is delivered as the final proof of transfer with complete documentation.'
    }
  ]

  const tabContent = {
    'what-is': 'A Gift Deed is a legal document that allows a person (the donor) to voluntarily transfer ownership of a property or asset to another person (the donee) without any monetary consideration. It is governed under the Transfer of Property Act, 1882, and can apply to both movable and immovable property, such as land, house, vehicle, shares, or other valuable assets. The Gift Deed clearly specifies the details of the donor and the donee, a full description of the property or asset being gifted, and any terms or conditions agreed upon (if any). The voluntary nature of the gift must be registered at the Sub-Registrar\'s office, and the Gift Deed becomes legally valid, ensuring that the transfer is recognized by law and protects the rights of both parties. Without a registered Gift Deed, the transfer is not legally enforceable, and disputes may arise in the future. In simple terms, a Gift Deed is a formal and legal way to give property or assets to someone you trust, ensuring transparency, safety, and the legality of the transfer.',
    'when-to-use': 'A Gift Deed is used when you want to transfer property ownership to family members, relatives, or loved ones without any monetary exchange. It\'s commonly used for transferring property to children, spouse, or other family members as part of estate planning. Gift Deeds are also used for tax planning purposes, charitable donations of property, or when you want to ensure property goes to a specific person during your lifetime rather than through a will.',
    'legal-implications': 'Once executed and registered, a Gift Deed creates irrevocable transfer of ownership to the donee. The donor cannot reclaim the property unless there are specific conditions mentioned in the deed. The gift is subject to stamp duty and registration fees as per state laws. For tax purposes, the donor may be liable for capital gains tax, and the donee may need to pay tax on the gift value if it exceeds exemption limits. The deed must be registered within 4 months of execution to be legally valid.'
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
                <a className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact</a>
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
            <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Gift Deed</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] font-display">Gift Deed</h1>
            <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal">Your guide to understanding and creating a legally binding property gift transfer document.</p>
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

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-6">
                {/* Draft This Deed Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft This Gift Deed</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                    Use our expert platform to generate a legally sound gift deed. Our lawyers ensure complete compliance with gift deed regulations and tax requirements.
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
                    Our legal experts will handle the entire gift deed process for you, from drafting to registration, ensuring complete tax compliance and legal validity.
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
                      <span>No monetary consideration involved in gift transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Stamp duty varies by state (typically 2-5% of property value)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Registration mandatory within 4 months of execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Acceptance by donee is essential for validity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Tax implications for both donor and donee</span>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Relinquishment Deed</a></li>
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