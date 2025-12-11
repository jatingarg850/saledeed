'use client'

import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function SaleDeedRegistryDelhiPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="guides" />

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-10 lg:px-20 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <Link href="/guides" className="text-primary hover:underline">Guides</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <span className="text-text-light dark:text-text-dark">Sale Deed Registry Delhi</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="map-pin" className="w-4 h-4"></i>
                  Delhi NCR Guide
                </div>

                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-6 leading-tight">
                  Sale Deed Registry
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl md:text-4xl mt-2 font-medium">
                    Complete Delhi Guide
                  </span>
                </h1>

                <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto mb-8">
                  Your comprehensive guide to Sale Deed registration in Delhi - from documentation to Sub-Registrar offices, stamp duty calculations to timeline management.
                </p>

                <div className="flex items-center justify-center gap-4 text-sm text-subtext-light dark:text-subtext-dark">
                  <div className="flex items-center gap-2">
                    <i data-lucide="calendar" className="w-4 h-4"></i>
                    <span>Updated January 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>15 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="map" className="w-4 h-4"></i>
                    <span>Delhi NCR Specific</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Content */}
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Overview Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 p-8">
              <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6 font-display">Sale Deed Registration in Delhi - Complete Process</h2>
              
              <p className="text-subtext-light dark:text-subtext-dark text-lg leading-relaxed mb-6">
                Sale Deed registration in Delhi involves specific procedures, documentation, and compliance with local regulations. This comprehensive guide covers everything you need to know for smooth property registration in Delhi NCR.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <i data-lucide="file-check" className="w-6 h-6 text-white"></i>
                  </div>
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2"> Quick Registration</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete registration process in a single day with proper documentation</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <i data-lucide="calculator" className="w-6 h-6 text-white"></i>
                  </div>
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">6% Stamp Duty</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">Delhi stamp duty rate with additional concessions for women buyers</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i data-lucide="shield-check" className="w-6 h-6 text-white"></i>
                  </div>
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Legal Compliance</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">100% compliance with Delhi registration rules and procedures</p>
                </div>
              </div>
            </div>

            {/* Step-by-Step Process */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 border-b border-blue-200/50 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display mb-4">Step-by-Step Registration Process</h3>
                <p className="text-subtext-light dark:text-subtext-dark">Follow this detailed process for hassle-free Sale Deed registration in Delhi</p>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark text-lg mb-2">Document Preparation & Verification</h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-3">Gather and verify all required documents including property papers, identity proofs, and clearance certificates.</p>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark list-disc list-inside space-y-1">
                        <li>Original property documents and title deeds</li>
                        <li>Identity and address proof of buyer and seller</li>
                        <li>Property tax receipts and clearance</li>
                        <li>Encumbrance certificate (15-30 years)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark text-lg mb-2">Sale Deed Drafting</h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-3">Professional drafting of Sale Deed with all legal clauses and Delhi-specific requirements.</p>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark list-disc list-inside space-y-1">
                        <li>Complete property description with survey numbers</li>
                        <li>Buyer and seller details with consideration amount</li>
                        <li>Legal clauses and warranty statements</li>
                        <li>Compliance with Delhi Registration Act</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark text-lg mb-2">Stamp Duty Calculation & Payment</h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-3">Accurate calculation and payment of stamp duty as per Delhi rates and property value.</p>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark list-disc list-inside space-y-1">
                        <li>6% stamp duty on property value or circle rate</li>
                        <li>5% stamp duty for women buyers (1% discount)</li>
                        <li>Online payment through Delhi government portal</li>
                        <li>Physical stamp paper procurement if required</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark text-lg mb-2">Sub-Registrar Office Appointment</h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-3">Book appointment at the appropriate Sub-Registrar office based on property location.</p>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark list-disc list-inside space-y-1">
                        <li>Online appointment booking through Delhi government portal</li>
                        <li>Selection of appropriate SRO based on property jurisdiction</li>
                        <li>Confirmation of appointment date and time</li>
                        <li>Preparation of all documents for submission</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark text-lg mb-2">Registration & Biometric Verification</h4>
                      <p className="text-subtext-light dark:text-text-dark mb-3">Final registration process with biometric verification of all parties at SRO.</p>
                      <ul className="text-sm text-subtext-light dark:text-subtext-dark list-disc list-inside space-y-1">
                        <li>Physical presence of buyer, seller, and witnesses</li>
                        <li>Biometric verification and photograph</li>
                        <li>Document submission and verification</li>
                        <li>Registration fee payment (1% of property value)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Specific Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Stamp Duty Details */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6 font-display">Delhi Stamp Duty Rates</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium text-text-light dark:text-text-dark">General Rate</span>
                    <span className="font-bold text-blue-600">6%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium text-text-light dark:text-text-dark">Women Buyers</span>
                    <span className="font-bold text-green-600">5%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-medium text-text-light dark:text-text-dark">Registration Fee</span>
                    <span className="font-bold text-purple-600">1%</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> Stamp duty is calculated on property value or circle rate, whichever is higher. Maximum registration fee is ₹30,000.
                  </p>
                </div>
              </div>

              {/* Sub-Registrar Offices */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6 font-display">Major Sub-Registrar Offices</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg">
                    <h4 className="font-semibold text-text-light dark:text-text-dark">Central Delhi SRO</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Covers Connaught Place, Karol Bagh, Paharganj areas</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg">
                    <h4 className="font-semibold text-text-light dark:text-text-dark">South Delhi SRO</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Covers Hauz Khas, Lajpat Nagar, Greater Kailash areas</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg">
                    <h4 className="font-semibold text-text-light dark:text-text-dark">West Delhi SRO</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Covers Janakpuri, Rajouri Garden, Tilak Nagar areas</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-slate-600 rounded-lg">
                    <h4 className="font-semibold text-text-light dark:text-text-dark">East Delhi SRO</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Covers Laxmi Nagar, Preet Vihar, Mayur Vihar areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Costs */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-800 dark:via-slate-800/50 dark:to-slate-700/50 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 font-display text-center">Timeline & Cost Breakdown</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-text-light dark:text-text-dark mb-4">Expected Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Document Preparation</span>
                      <span className="font-medium text-text-light dark:text-text-dark">2-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Appointment Booking</span>
                      <span className="font-medium text-text-light dark:text-text-dark">1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Registration Process</span>
                      <span className="font-medium text-text-light dark:text-text-dark">Same day</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-bold text-text-light dark:text-text-dark">Total Timeline</span>
                      <span className="font-bold text-blue-600">3-5 days</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-text-light dark:text-text-dark mb-4">Cost Structure</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Stamp Duty</span>
                      <span className="font-medium text-text-light dark:text-text-dark">5-6% of value</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Registration Fee</span>
                      <span className="font-medium text-text-light dark:text-text-dark">1% (max ₹30K)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-subtext-light dark:text-subtext-dark">Legal Services</span>
                      <span className="font-medium text-text-light dark:text-text-dark">₹10K-15K</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-bold text-text-light dark:text-text-dark">Professional Fee</span>
                      <span className="font-bold text-blue-600">Transparent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="file-check" className="w-10 h-10 text-white"></i>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Register Your Sale Deed in Delhi?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Get expert assistance for hassle-free Sale Deed registration with complete legal compliance and same-day service
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Get Expert Help Now
                  </Link>
                  <Link
                    href="/services/sale-deed"
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    <i data-lucide="file-text" className="w-5 h-5"></i>
                    Sale Deed Service
                  </Link>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-4 h-4"></i>
                    <span> Quick Registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="shield" className="w-4 h-4"></i>
                    <span>100% Legal Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="users" className="w-4 h-4"></i>
                    <span>Expert Legal Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}