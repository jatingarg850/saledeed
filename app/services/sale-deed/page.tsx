'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function SaleDeedPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is a Sale Deed?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Property Title Documents',
      description: 'Original title deeds, sale deed, mother deed, and chain of title documents proving clear ownership of the property.'
    },
    {
      title: 'Identity Proof of Both Parties',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License for both seller and buyer parties.'
    },
    {
      title: 'Property Tax Receipts',
      description: 'Latest property tax receipts and clearance certificates showing all dues are paid up to date.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Encumbrance certificate for the last 15-30 years showing the property\'s transaction history and clear title.'
    },
    {
      title: 'Approved Building Plans',
      description: 'Sanctioned building plans, completion certificate, and occupancy certificate from local authorities.'
    },
    {
      title: 'NOC Certificates',
      description: 'No Objection Certificates from relevant authorities like electricity board, water department, and society (if applicable).'
    },
    {
      title: 'PAN Card and Address Proof',
      description: 'PAN cards and current address proof of both buyer and seller for legal compliance and verification.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Property Analysis',
      description: 'We understand your property details and requirements, analyzing your specific needs and property documentation requirements.'
    },
    {
      step: 2,
      title: 'Legal Drafting',
      description: 'Our legal experts prepare a proper Sale Deed as per law, ensuring complete legal compliance and accuracy.'
    },
    {
      step: 3,
      title: 'Verification Process',
      description: 'We ensure all property details, buyer, and seller information are accurate through thorough verification.'
    },
    {
      step: 4,
      title: 'Registration Support',
      description: 'Guidance is provided for payment of stamp duty and registration of the Sale Deed at the Sub-Registrar Office.'
    },
    {
      step: 5,
      title: 'Final Completion',
      description: 'Once registered, the document is delivered to you as the final proof of ownership with all necessary certificates.'
    }
  ]

  const tabContent = {
    'what-is': 'A Sale Deed is a legally binding document that officially records the transfer of ownership of a property from the seller to the buyer. This document is the most important document in property transaction because it acts as proof of ownership. The document contains all essential details, including name and details of the seller and buyer, complete description of the property (address, boundaries, dimensions, survey number, etc.), the agreed sale price, payment terms and conditions, and any special clauses agreed upon by both parties. Without a registered Sale Deed, a property transaction is not legally valid, and the buyer does not have full legal rights over the property.',
    'when-to-use': 'A Sale Deed is used when you are buying or selling any immovable property such as land, house, apartment, or commercial property. It is required for all property transactions where ownership is being transferred from one party to another in exchange for monetary consideration. The Sale Deed is essential for establishing legal ownership, obtaining property loans, future property transactions, property tax purposes, and legal disputes resolution. It is mandatory for all property purchases and must be registered within 4 months of execution.',
    'legal-implications': 'A registered Sale Deed provides complete legal ownership and protection to the buyer. It serves as conclusive proof of ownership and can be used in legal proceedings. The document creates binding obligations on both parties and protects against future disputes. Registration of the Sale Deed at the Sub-Registrar\'s office ensures that the transfer is recognized by law, protects both parties, and helps avoid future disputes. The deed must be executed on appropriate stamp paper, signed by both parties with witnesses, and registered within the prescribed time limit to be legally valid.'
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
            <span className="text-text-light dark:text-text-dark">Sale Deed</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="file-check" className="w-4 h-4"></i>
                  Property Transfer Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Sale Deed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Professional sale deed drafting and registration services with complete legal compliance and expert guidance throughout the property transfer process.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Start Your Sale Deed
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">100% Legal</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Compliance Guaranteed</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Quick Process</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">7-10 Business Days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Team</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Qualified Lawyers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-yellow-200 dark:border-slate-700 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700">
                <div className="flex px-6 gap-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-4 pt-6 whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                        ? 'border-b-primary text-primary font-bold'
                        : 'border-b-transparent text-subtext-light dark:text-subtext-dark hover:text-primary hover:border-b-primary/50'
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
            <div className="bg-gradient-to-br from-white via-yellow-50/50 to-orange-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our streamlined process ensures your sale deed is completed efficiently and legally
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-yellow-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your sale deed process</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-primary" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="rocket" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Sale Deed?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us with their property documentation needs
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
                  <button className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                    <i data-lucide="download" className="w-5 h-5"></i>
                    Download Sample
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-4 h-4"></i>
                    <span>100% Legal Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Secure Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Quick Turnaround</span>
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
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</Link></li>
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</Link></li>
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