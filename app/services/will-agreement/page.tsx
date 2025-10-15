'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WillAgreementPage() {
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
    { id: 'what-is', label: 'What is a Will Agreement?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Identity Proof of Testator',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License of the person making the will (testator).'
    },
    {
      title: 'Property Documents',
      description: 'Complete details of all properties, assets, investments, and valuables to be included in the will.'
    },
    {
      title: 'PAN Card',
      description: 'Permanent Account Number (PAN) card of the testator for tax and legal compliance.'
    },
    {
      title: 'Beneficiary Details',
      description: 'Complete information about all beneficiaries including their names, addresses, and relationship to the testator.'
    },
    {
      title: 'Executor Information',
      description: 'Details of the trusted person who will be appointed as executor to carry out the instructions of the will.'
    },
    {
      title: 'Asset Valuation',
      description: 'Current market valuation of properties and assets to be distributed through the will.'
    },
    {
      title: 'Medical Certificate',
      description: 'Medical certificate confirming the mental soundness of the testator at the time of making the will (if required).'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Clarity & Control',
      description: 'What is this? A legal document where a person declares how their property and assets should be distributed after their death.'
    },
    {
      step: 2,
      title: 'Legal Protection',
      description: 'A legal document where a person declares how their property and assets should be distributed after their death.'
    },
    {
      step: 3,
      title: 'Flexibility',
      description: 'How their property and assets should be distributed after their death. Wills Need It?'
    },
    {
      step: 4,
      title: 'Executor Appointment',
      description: 'Any individual owning property in Delhi. NRI who wants to ensure smooth inheritance. Legal Importance.'
    },
    {
      step: 5,
      title: 'Peace of Mind',
      description: 'Prevents family disputes, ensures property passes as per wishes, registration is optional but advisable.'
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Clarity & Control',
      description: 'The Testator decides who gets what property or asset.'
    },
    {
      step: 2,
      title: 'Legal Protection',
      description: 'Prevents confusion, conflicts, and false claims after death.'
    },
    {
      step: 3,
      title: 'Flexibility',
      description: 'The Will can be changed or revoked anytime during the Testator\'s lifetime.'
    },
    {
      step: 4,
      title: 'Executor Appointment',
      description: 'A trusted person is nominated to carry out the instructions of the Will.'
    },
    {
      step: 5,
      title: 'Peace of Mind',
      description: 'Ensures that the family and loved ones are secured according to the person\'s wishes.'
    }
  ]

  const tabContent = {
    'what-is': 'A Will Agreement is a formal legal declaration made by an individual, known as the Testator, specifying how their property, money, investments, and other valuable assets will be distributed after their demise. It acts as a blueprint of the Testator\'s wishes, ensuring that the wealth accumulated over a lifetime goes to the right people without any confusion. By creating a Will, the Testator takes control of their legacy and prevents unnecessary disputes, misunderstandings, or legal battles among family members. Unlike general inheritance laws, a Will provides complete freedom to decide: Who should inherit the property? How the assets will be divided? When and under what conditions the beneficiaries will receive them? A Will also allows the Testator to: Appoint a trusted Executor who will carry out the instructions? Make provisions for spouse, children, and dependents? Include specific wishes such as donations to charities, gifts to friends, or preservation of ancestral property.',
    'when-to-use': 'A Will Agreement should be created by any individual owning property in Delhi, NRI who wants to ensure smooth inheritance, anyone with significant assets or investments, parents wanting to secure their children\'s future, individuals with specific wishes for asset distribution, or anyone wanting to prevent family disputes after death. It\'s particularly important for business owners, property investors, and those with complex family structures.',
    'legal-implications': 'A Will Agreement becomes legally effective only after the death of the testator. It can be changed, modified, or revoked at any time during the testator\'s lifetime. While registration is not mandatory, it provides additional legal protection and prevents disputes. The will must be signed by the testator in the presence of at least two witnesses. It overrides general inheritance laws and ensures assets are distributed according to the testator\'s specific wishes. Prevents family disputes and ensures property passes as per wishes.'
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
            <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Will Agreement</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-4 mb-10">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] font-display">Will Agreement</h1>
            <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal">Your guide to understanding and creating a legally binding testament for asset distribution.</p>
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
                  {howItWorks.map((item, index) => (
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
                {/* Process Overview Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md border border-yellow-200/50">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="text-white text-2xl" data-lucide="scroll"></i>
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

                {/* Draft This Will Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md p-6 border-2 border-primary/30 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark font-display">Draft Your Will</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm leading-relaxed">
                    Create a comprehensive will with our expert legal team. Ensure your assets are distributed according to your wishes.
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
                    Our legal experts will help you create a comprehensive will that covers all your assets and ensures legal compliance.
                  </p>
                  <button className="w-full flex items-center justify-center rounded-full h-12 px-6 bg-secondary/20 text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/30 transition-all transform hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40">
                    <span>Request a Callback</span>
                    <i className="ml-2" data-lucide="phone"></i>
                  </button>
                </div>

                {/* Download Sample */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:bg-slate-800/50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold mb-3 text-text-light dark:text-text-dark font-display">Download Sample</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 text-sm">
                    Get a sample will format to understand the structure and legal requirements.
                  </p>
                  <button className="w-full flex items-center justify-center rounded-full h-10 px-4 bg-green-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-700 transition-colors">
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
                      <span>Can be changed or revoked anytime during lifetime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Registration is optional but recommended</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Requires signature of testator and two witnesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Overrides general inheritance laws</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="text-primary mt-0.5 text-xs" data-lucide="check"></i>
                      <span>Prevents family disputes after death</span>
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