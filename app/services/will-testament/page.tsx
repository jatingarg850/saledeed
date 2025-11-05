'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function WillTestamentPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Will?' },
    { id: 'when-to-use', label: 'When to Create One' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Ownership Documents',
      description: 'Complete list of all properties, assets, and investments with ownership documents and current valuations.'
    },
    {
      title: 'Identity and Address Proof',
      description: 'Aadhaar Card, Voter ID, Passport, and current address proof of the person making the will (testator).'
    },
    {
      title: 'Family Details Documentation',
      description: 'Complete family tree with names, relationships, and contact details of all legal heirs and beneficiaries.'
    },
    {
      title: 'Asset Valuation Certificates',
      description: 'Current market valuation of properties, investments, bank accounts, and other significant assets.'
    },
    {
      title: 'Witness Information',
      description: 'Identity and address proof of witnesses who will be present during the will execution and signing.'
    },
    {
      title: 'Executor Details',
      description: 'Complete information about the person who will execute the will, including their consent and identification.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Asset Assessment',
      description: 'Complete evaluation of all assets, properties, and investments to be included in the will.'
    },
    {
      step: 2,
      title: 'Will Drafting',
      description: 'Professional drafting using government-approved format with clear asset distribution and legal clauses.'
    },
    {
      step: 3,
      title: 'Legal Review',
      description: 'Thorough legal review to ensure compliance with succession laws and prevent future disputes.'
    },
    {
      step: 4,
      title: 'Execution & Witnessing',
      description: 'Proper execution with required witnesses and notarization as per legal requirements.'
    },
    {
      step: 5,
      title: 'Safe Storage',
      description: 'Guidance on secure storage and informing relevant parties about the will\'s existence and location.'
    }
  ]

  const tabContent = {
    'what-is': 'A Will is your final gift to your family - it\'s a legal document that ensures your assets go exactly where you want them after you\'re gone. Think of it as your last set of instructions to the world about who gets what from everything you\'ve worked for. This government-approved format prevents family fights, reduces legal complications, and gives you peace of mind knowing your loved ones are taken care of. It\'s not just about property - it covers everything from bank accounts to personal belongings, ensuring nothing is left to chance or family disputes.',
    'when-to-use': 'You should create a Will as soon as you own any significant assets - property, investments, or even just want to ensure your family is protected. It\'s essential if you have children (to name guardians), own property, have investments or savings, run a business, or want to make specific gifts to people or charities. Don\'t wait until you\'re old or sick - life is unpredictable, and having a Will gives you and your family security and clarity about your wishes.',
    'legal-implications': 'A properly executed Will becomes legally binding and provides clear instructions for asset distribution after death. It helps avoid lengthy court procedures, reduces family disputes, and ensures your wishes are legally protected. The Will must be properly witnessed, signed, and can be registered for additional security. It overrides automatic inheritance laws and gives you complete control over who gets what. Without a Will, your assets are distributed according to succession laws, which might not match your wishes.'
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
            <span className="text-text-light dark:text-text-dark">Will Testament</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="heart" className="w-4 h-4"></i>
                  Family Protection Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Will Testament
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Secure your family's future and prevent disputes. Ensure your assets go exactly where you want them with our expert will drafting services.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Create Your Will
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-emerald-600 dark:text-emerald-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Family Protection</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Dispute Prevention</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Quick Process</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Same Day Completion</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Guidance</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Legal Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-emerald-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-emerald-200 dark:border-slate-700 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700">
                <div className="flex px-6 gap-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-4 pt-6 whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                        ? 'border-b-emerald-600 text-emerald-600 font-bold'
                        : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-emerald-600 hover:border-b-emerald-600/50'
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
            <div className="bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-emerald-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-600/10 to-emerald-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How Will Creation Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our comprehensive process ensures your will is legally sound and your family is protected
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why You Need a Will */}
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-red-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="alert-triangle"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">What Happens Without a Will?</h3>
                    <p className="text-red-100">The harsh reality of dying intestate (without a will)</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Without Will */}
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-500">
                    <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                      <i data-lucide="x-circle" className="w-5 h-5 text-red-500"></i>
                      Without a Will
                    </h4>
                    <ul className="space-y-2 text-red-700 dark:text-red-300 text-sm">
                      <li>• Government decides who gets your assets</li>
                      <li>• Family fights over property distribution</li>
                      <li>• Long court procedures (2-5 years)</li>
                      <li>• High legal costs eating into inheritance</li>
                      <li>• Your specific wishes are ignored</li>
                      <li>• Distant relatives may claim shares</li>
                    </ul>
                  </div>

                  {/* With Will */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                      <i data-lucide="check-circle" className="w-5 h-5 text-green-500"></i>
                      With a Proper Will
                    </h4>
                    <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                      <li>• You decide exactly who gets what</li>
                      <li>• Family harmony is preserved</li>
                      <li>• Quick asset transfer (few months)</li>
                      <li>• Minimal legal costs and procedures</li>
                      <li>• Your wishes are legally protected</li>
                      <li>• Unwanted claimants are excluded</li>
                    </ul>
                  </div>
                </div>

                {/* Real Story */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-3">
                    Real Story: The ₹2 Crore Family Dispute
                  </h4>
                  <p className="text-subtext-light dark:text-subtext-dark mb-3">
                    Mr. Sharma owned properties worth ₹2 crores but died without a will. His wife and two sons spent 4 years in court,
                    paid ₹8 lakhs in legal fees, and the family relationships were destroyed forever. A simple will would have
                    prevented all this pain and saved both money and relationships.
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                      Don't let your family go through this. A will costs a few thousand rupees but saves lakhs and preserves relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-emerald-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-emerald-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Information You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential information for creating your will</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-emerald-600" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="heart" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Family's Future?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Don't leave your family's future to chance. Create a legally sound will that ensures your wishes are respected and your loved ones are protected.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Create Your Will Today
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-4 h-4"></i>
                    <span>Family Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Legal Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Peace of Mind</span>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                <ul className="space-y-2">
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/will-testament">Will & Testament</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</Link></li>
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