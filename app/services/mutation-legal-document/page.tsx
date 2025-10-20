'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function MutationLegalDocumentPage() {
  const [activeTab, setActiveTab] = useState('what-is')

  const tabs = [
    { id: 'what-is', label: 'What is Property Mutation?' },
    { id: 'when-to-use', label: 'When to Use It' },
    { id: 'legal-implications', label: 'Legal Implications' }
  ]

  const documents = [
    {
      title: 'Original Property Documents',
      description: 'Sale deed, gift deed, or any document proving the transfer of property ownership that needs to be mutated.'
    },
    {
      title: 'Identity Proof of New Owner',
      description: 'Aadhaar Card, Voter ID, Passport, or Driver\'s License of the person in whose name mutation is required.'
    },
    {
      title: 'Property Tax Receipts',
      description: 'Latest property tax receipts and clearance certificates showing all dues are paid up to date.'
    },
    {
      title: 'Encumbrance Certificate',
      description: 'Encumbrance certificate showing the chain of ownership and all transactions related to the property.'
    },
    {
      title: 'Survey Settlement Records',
      description: 'Revenue records, survey numbers, and settlement documents from the local revenue department.'
    },
    {
      title: 'Death Certificate (if applicable)',
      description: 'Death certificate of the previous owner in case of inheritance-based mutation.'
    },
    {
      title: 'NOC from Legal Heirs',
      description: 'No Objection Certificate from all legal heirs in case of inheritance or family settlement.'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Document Analysis',
      description: 'We analyze your property documents and mutation requirements to determine the correct procedure and documentation.'
    },
    {
      step: 2,
      title: 'Application Preparation',
      description: 'Our experts prepare the mutation application with all required documents and legal formalities.'
    },
    {
      step: 3,
      title: 'Revenue Department Filing',
      description: 'We file the mutation application with the appropriate revenue department and track the progress.'
    },
    {
      step: 4,
      title: 'Follow-up & Verification',
      description: 'Regular follow-up with revenue officials and assistance during field verification if required.'
    },
    {
      step: 5,
      title: 'Mutation Certificate',
      description: 'Collection of the final mutation certificate and updated revenue records in the new owner\'s name.'
    }
  ]

  const tabContent = {
    'what-is': 'Property Mutation is the process of transferring or changing the ownership records of a property in the revenue department\'s records. It involves updating the property ownership details in government records such as revenue records, property tax records, and land records. Mutation ensures that the new owner\'s name is reflected in all official documents and records. This process is essential for establishing legal ownership, paying property taxes, and conducting future property transactions. It provides official recognition of ownership change in government records.',
    'when-to-use': 'Property Mutation is required whenever there is a change in property ownership due to sale, gift, inheritance, partition, or any other legal transfer. It is mandatory after purchasing property, receiving property as a gift, inheriting property, or during property partition among family members. Mutation is essential for updating property tax records, obtaining property-related certificates, applying for building permissions, and conducting future property transactions. It is required for legal recognition of ownership and compliance with revenue laws.',
    'legal-implications': 'Property Mutation provides official recognition of ownership change in government records and is essential for legal compliance. While mutation itself does not create or transfer ownership rights, it updates the revenue records to reflect the current ownership status. Proper mutation protects against future disputes, ensures correct property tax assessment, and facilitates smooth property transactions. The process must be completed within prescribed time limits as per local revenue laws. Failure to complete mutation may result in complications during future property dealings and legal proceedings.'
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
            <span className="text-text-light dark:text-text-dark">Mutation Legal Document</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-24">
              <div className="text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="refresh-cw" className="w-4 h-4"></i>
                  Property Record Update Document
                </div>

                {/* Main Heading */}
                <h1 className="text-text-light dark:text-text-dark text-5xl md:text-7xl font-black tracking-tight font-display mb-8 leading-tight">
                  Mutation Legal Document
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Services
                  </span>
                </h1>

                {/* Description */}
                <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  Professional property mutation services with complete documentation and revenue department liaison for ownership record updates.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    Start Your Mutation
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
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">15-30 Business Days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-text-light dark:text-text-dark">Expert Team</div>
                      <div className="text-sm text-subtext-light dark:text-subtext-dark">Revenue Specialists</div>
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
                    Our streamlined process ensures your property mutation is completed efficiently and legally
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

            {/* Comprehensive Mutation Guide */}
            <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-green-200/50 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="home"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Mutation of Property in Delhi – The Real Story</h3>
                    <p className="text-green-100">Nobody Tells You This Critical Step</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Introduction */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-l-4 border-yellow-400">
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                    So you bought a property in Delhi, got your Sale Deed registered, popped a bottle of Coke (or beer 🍻), and thought <strong>bas hogaya</strong>?
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark mt-3 font-medium">
                    Sorry dost, <strong>game abhi baki hai</strong>.
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark mt-3">
                    Welcome to the most ignored but absolutely critical step in property ownership – <strong>Mutation</strong>.
                  </p>
                </div>

                {/* What is Mutation */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="help-circle" className="w-5 h-5 text-primary"></i>
                    What Exactly is Mutation?
                  </h4>
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                    In simple words – mutation is like updating your property's surname in the government's records.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Registry</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Proof you bought the property.</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Mutation</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">Govt. saying "haan bhai, ab yeh property aapki hi hai hamare records mein bhi."</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Without mutation, you may have a Sale Deed, but in the eyes of the municipal body, the old owner is still sitting on the throne.
                    </p>
                  </div>
                </div>

                {/* Who Does Mutation */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="building-2" className="w-5 h-5 text-primary"></i>
                    Who Does Mutation in Delhi?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">MCD</h5>
                      <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">Municipal Corporation of Delhi</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">For houses, flats, plots</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg">
                      <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">DDA or L&DO</h5>
                      <p className="text-xs text-green-700 dark:text-green-300 mb-2">Development Authority</p>
                      <p className="text-sm text-green-600 dark:text-green-400">If property is under leasehold/freehold conversion</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg">
                      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Revenue Department</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300 mb-2">Tehsildar</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400">For agricultural land</p>
                    </div>
                  </div>
                </div>

                {/* Documents Required */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="file-text" className="w-5 h-5 text-primary"></i>
                    Documents You Need for Mutation (Delhi)
                  </h4>
                  <p className="text-subtext-light dark:text-subtext-dark mb-4">
                    Think of this as your property ka Aadhaar KYC –
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Copy of Sale Deed (registered one)',
                      'Mutation Application Form (from MCD/DDA)',
                      'Affidavit with buyer details',
                      'Indemnity Bond (basically a promise ki koi fraud nahi hua)',
                      'Proof of payment of mutation fee & property tax clearance',
                      'Latest Electricity/Water Bill (ownership proof ke liye)'
                    ].map((doc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                        <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-subtext-light dark:text-subtext-dark">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Types of Mutation */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="refresh-cw" className="w-5 h-5 text-primary"></i>
                    Types of Mutation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Sale Deed Mutation</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">When property is sold</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                      <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">Inheritance Mutation</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">When owner passes away and heirs claim it</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h5 className="font-bold text-purple-800 dark:text-purple-200 mb-2">Gift Deed Mutation</h5>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Jab property gift hoti hai</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="clock" className="w-5 h-5 text-indigo-600"></i>
                    How Long Does It Take?
                  </h4>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Usually 15–30 days if papers are clear.</p>
                  </div>
                </div>

                {/* Why Important */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                    <i data-lucide="alert-triangle" className="w-5 h-5 text-orange-500"></i>
                    Why Mutation is Super Important
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Property Tax Bills', desc: 'Land in your name officially' },
                      { title: 'Future Sale', desc: 'Next buyer won\'t trust you without mutation' },
                      { title: 'Bank Loan', desc: 'Mortgage ke liye banks check mutation records' },
                      { title: 'Inheritance', desc: 'Your heirs won\'t face tamasha later' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <i data-lucide="check-circle" className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"></i>
                        <div>
                          <h5 className="font-semibold text-orange-800 dark:text-orange-200">{item.title}</h5>
                          <p className="text-sm text-orange-700 dark:text-orange-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes */}
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                  <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                    <i data-lucide="x-circle" className="w-5 h-5"></i>
                    Common Mistakes People Do
                  </h4>
                  <div className="space-y-3">
                    {[
                      '"Registry ho gayi toh sab hogaya" → Wrong! Mutation pending toh risk hai.',
                      'Mutation delay → Kabhi kabhi old owner ka naam hi rehta hai, aur tax bills usi pe aate hain.',
                      'Bribe shortcut → Paperwork sahi ho toh bina paise diye bhi hota hai.'
                    ].map((mistake, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <i data-lucide="alert-circle" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0"></i>
                        <p className="text-sm text-red-700 dark:text-red-300">{mistake}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                    <i data-lucide="lightbulb" className="w-5 h-5"></i>
                    Pro Tip (Delhi Specific)
                  </h4>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Always keep property tax up-to-date before applying for mutation.
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      MCD officials are super quick to reject if even ₹1 is pending.
                    </p>
                  </div>
                </div>

                {/* Final Word */}
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">🎯 Final Word</h4>
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-3">
                    Sale Deed may be the marriage certificate of your property deal, but Mutation is the "naamkaran" ceremony.
                  </p>
                  <p className="text-subtext-light dark:text-subtext-dark font-medium">
                    Do it. Get it done. Sleep peacefully knowing the sarkari records finally respect you as the owner.
                  </p>
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
                    <p className="text-subtext-light dark:text-subtext-dark">Essential documents for your property mutation process</p>
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

                <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to Update Your Property Records?</h3>
                <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                  Get expert assistance for property mutation with complete revenue department liaison and documentation
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
                    <span>Revenue Compliance</span>
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
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/mutation-legal-document">Mutation Legal Document</Link></li>
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