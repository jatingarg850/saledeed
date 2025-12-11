'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

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
      description: 'Original property papers, title deed, sale deed, and any other documents proving clear ownership of the property by the donor.'
    },
    {
      title: 'PAN Card of Both Parties',
      description: 'Permanent Account Number (PAN) card is mandatory for both donor and donee for tax compliance and verification purposes.'
    },
    {
      title: 'Address Proof',
      description: 'Current address proof for both donor and donee including utility bills, bank statements, or rental agreements.'
    },
    {
      title: 'Property Valuation Certificate',
      description: 'Current market valuation of the property by a registered valuer for stamp duty calculation and tax assessment purposes.'
    },
    {
      title: 'No Objection Certificate',
      description: 'NOC from family members (if required) and clearance from any existing loans or mortgages on the property.'
    },
    {
      title: 'Passport Size Photographs',
      description: 'Recent passport-size photographs of both donor and donee for document verification and registration purposes.'
    },
     {
      title: 'Stamp Papers',
      description: 'Stamp Papers issued by the stock holding department after paying Stamp duty to the government.'
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
    'what-is': 'A Gift Deed is a legal document that allows a person (the donor) to voluntarily transfer ownership of a property or asset to another person (the donee) without any monetary consideration. It is governed under the Transfer of Property Act, 1882, and can apply to both movable and immovable property, such as land, house, vehicle, shares, or other valuable assets. The Gift Deed clearly specifies the details of the donor and the donee, a full description of the property or asset being gifted, and any terms or conditions agreed upon (if any). The voluntary nature of the gift must be registered at the Sub-Registrar\'s office, and the Gift Deed becomes legally valid, ensuring that the transfer is recognized by law and protects the rights of both parties.',
    'when-to-use': 'A Gift Deed is used when you want to transfer property ownership to family members, relatives, or loved ones without any monetary exchange. It\'s commonly used for transferring property to children, spouse, or other family members as part of estate planning. Gift Deeds are also used for tax planning purposes, charitable donations of property, or when you want to ensure property goes to a specific person during your lifetime rather than through a will.',
    'legal-implications': 'Once executed and registered, a Gift Deed creates irrevocable transfer of ownership to the donee. The donor cannot reclaim the property unless there are specific conditions mentioned in the deed. The gift is subject to stamp duty and registration fees as per state laws. For tax purposes, the donor may be liable for capital gains tax, and the donee may need to pay tax on the gift value if it exceeds exemption limits. The deed must be registered within 4 months of execution to be legally valid.'
  }

  return (
    <div className="gift-deed-page relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
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
            <span className="text-text-light dark:text-text-dark">Gift Deed</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="gift" className="w-4 h-4"></i>
                  Family Property Transfer
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Gift Deed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Professional gift deed drafting and registration services for seamless property transfers within families with complete legal compliance.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Start Your Gift Deed
                  </Link>
                 
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="heart" className="w-6 h-6 text-amber-600 dark:text-amber-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Family First</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">No Monetary Exchange</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="shield-check" className="w-6 h-6 text-yellow-600 dark:text-yellow-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Tax Compliant</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Expert Guidance</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" className="w-6 h-6 text-orange-600 dark:text-orange-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Quick Process</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">5-7 Business Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Gift Deed Definition Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-green-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="gift"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">Gift Deed</h2>
                    <p className="text-subtext-light dark:text-subtext-dark">Legal transfer of property without monetary consideration</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-lg">
                    A Gift Deed is a legal document that allows a person (the donor) to voluntarily transfer ownership of a property or asset to another person (the donee) without any monetary consideration. It is governed under the Transfer of Property Act, 1882, and can apply to both movable and immovable property, such as land, house, vehicle, shares, or other valuable assets. The Gift Deed clearly specifies: The details of the donor and the donee A full description of the property or asset being gifted Any terms or conditions agreed upon (if any) The voluntary nature of the gift Once registered at the Sub-Registrar’s office, the Gift Deed becomes legally valid, ensuring that the transfer is recognized by law and protects the rights of both parties. Without a registered Gift Deed, the transfer is not legally enforceable, and disputes may arise in the future. In simple terms, a Gift Deed is a formal and legal way to give property or assets to someone you trust, ensuring transparency, safety, and legality of the transfer.
                  </p>

                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark mt-8 mb-4">The Gift Deed clearly specifies:</h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">The donor decides to gift property or an asset voluntarily.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">A draft of the Gift Deed is prepared, containing all details of the donor, donee, property, and any conditions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">Both parties sign the deed in the presence of two witnesses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">The deed is registered at the Sub-Registrar Office, and the applicable stamp duty is paid.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="check" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-subtext-light dark:text-subtext-dark">After registration, the ownership is legally transferred to the donee.</span>
                    </li>
                  </ul>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      <strong className="text-green-600 dark:text-green-400">Important:</strong> Once registered at the Sub-Registrar's office, the Gift Deed becomes legally valid, ensuring that the transfer is recognized by law and protects the rights of both parties. Without a registered Gift Deed, the transfer is not legally enforceable, and disputes may arise in the future.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg mt-6">
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed text-center font-medium">
                      In simple terms, a Gift Deed is a formal and legal way to give property or assets to someone you trust, ensuring transparency, safety, and legality of the transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-600/10 to-green-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Simple step-by-step process to complete your Gift Deed registration
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Voluntary Decision</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          The donor decides to gift property or an asset voluntarily.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Draft Preparation</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          A draft of the Gift Deed is prepared, containing all details of the donor, donee, property, and any conditions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Signing & Witnessing</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          Both parties sign the deed in the presence of two witnesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Registration</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          The deed is registered at the Sub-Registrar Office, and the applicable stamp duty is paid.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <i data-lucide="check" className="w-6 h-6 text-white"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">Ownership Transfer Complete</h4>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                          After registration, the ownership is legally transferred to the donee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
            {/* How it Works Section */}
            <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-600/10 to-green-600/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="workflow"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-text-light dark:text-text-dark font-display">How it Works</h3>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                    Our streamlined process ensures your gift deed is completed efficiently and legally
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {process.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <span className="text-white font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-text-light dark:text-text-dark mb-2 text-lg">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">{item.description}</p>

                        {/* Connector Line */}
                        {index < process.length - 1 && (
                          <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 opacity-30"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-green-200/50 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Documents You'll Need</h3>
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your gift deed process</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documents.map((doc, index) => (
                    <details key={index} className="group bg-gradient-to-br from-gray-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-slate-600 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-green-600/5 dark:hover:bg-green-600/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                            <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <h4 className="font-semibold text-text-light dark:text-text-dark">{doc.title}</h4>
                        </div>
                        <i className="transition-transform duration-300 group-open:rotate-180 text-green-600" data-lucide="chevron-down"></i>
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
            <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="gift" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Gift Deed?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Transfer property to your loved ones with complete legal protection and tax compliance
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
                 
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/80 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="heart" className="w-4 h-4"></i>
                    <span>Family Transfers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>Tax Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>Quick Process</span>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/partner">Careers</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blogs</a></li>
                  <li>
                    <div className="flex items-center gap-1">
                      <i className="text-primary text-xs" data-lucide="mail"></i>
                      <a href="mailto:support@saledeed.com" className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors">
                        support@saledeed.com
                      </a>
                    </div>
                  </li>
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
              <p>© 2025 SaleDeed.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}