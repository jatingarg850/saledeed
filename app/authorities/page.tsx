'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function AuthoritiesPage() {
  const authorities = [
    {
      name: 'Municipal Corporation of Delhi (MCD)',
      shortName: 'MCD',
      icon: 'building-2',
      description: 'The Municipal Corporation of Delhi is responsible for civic administration and municipal services in Delhi.',
      services: [
        'Property tax assessment and collection',
        'Building plan approval and sanctions',
        'Trade license and commercial permits',
        'Birth and death certificate issuance',
        'Property tax clearance certificates',
        'Building completion certificates'
      ],
      process: 'We handle all MCD-related documentation including property tax clearances, building plan verifications, and completion certificates required for property transactions.',
      timeline: '5-7 business days',
      documents: ['Property tax receipts', 'Building plan approval', 'Completion certificate', 'NOC certificates']
    },
    {
      name: 'Delhi Development Authority (DDA)',
      shortName: 'DDA',
      icon: 'landmark',
      description: 'DDA is responsible for the development of Delhi and manages land acquisition, development, and disposal.',
      services: [
        'Land development and planning',
        'Layout plan approvals',
        'Land allotment and disposal',
        'Conversion of land use',
        'Development permissions',
        'Zonal plan modifications'
      ],
      process: 'Our team coordinates with DDA for layout approvals, land use conversions, and development permissions essential for property development and transactions.',
      timeline: '10-15 business days',
      documents: ['Layout approval', 'Land use certificate', 'Development permission', 'Zonal clearance']
    },
    {
      name: 'Land & Development Office (L&DO)',
      shortName: 'L&DO',
      icon: 'map',
      description: 'L&DO manages government land in Delhi and handles leasehold to freehold conversions.',
      services: [
        'Leasehold to freehold conversion',
        'Ground rent assessment and collection',
        'Land use change permissions',
        'Lease deed modifications',
        'Substitution and mutation',
        'Land records maintenance'
      ],
      process: 'We facilitate leasehold to freehold conversions, ground rent clearances, and land use change permissions through L&DO for seamless property ownership transfer.',
      timeline: '15-20 business days',
      documents: ['Lease deed', 'Conversion certificate', 'Ground rent clearance', 'Mutation documents']
    },
    {
      name: 'Sub-Registrar Office (SRO)',
      shortName: 'SRO',
      icon: 'file-check',
      description: 'SRO is responsible for registration of documents and collection of stamp duty and registration fees.',
      services: [
        'Document registration services',
        'Stamp duty collection and verification',
        'Registration fee assessment',
        'Document authentication',
        'Legal validation of transfers',
        'Certified copy issuance'
      ],
      process: 'We handle the complete registration process at SRO including stamp duty calculation, document preparation, and final registration of property transfer documents.',
      timeline: '3-5 business days',
      documents: ['Registered sale deed', 'Stamp duty receipts', 'Registration certificate', 'Certified copies']
    },
    {
      name: 'Collector Office (Property Tax Department)',
      shortName: 'Collector Office',
      icon: 'receipt',
      description: 'The Collector Office manages property tax assessment, collection, and maintains revenue records.',
      services: [
        'Property tax assessment and revision',
        'Revenue record maintenance',
        'Mutation of property ownership',
        'Property valuation services',
        'Tax clearance certificates',
        'Ownership transfer documentation'
      ],
      process: 'We coordinate with the Collector Office for property tax assessments, mutation of ownership records, and obtaining necessary clearance certificates.',
      timeline: '7-10 business days',
      documents: ['Property tax assessment', 'Mutation certificate', 'Revenue records', 'Tax clearance certificate']
    },
    {
      name: 'New Delhi Municipal Council (NDMC)',
      shortName: 'NDMC',
      icon: 'shield-check',
      description: 'NDMC governs the New Delhi area and provides municipal services for premium properties in Lutyens Delhi.',
      services: [
        'Premium property documentation',
        'Heritage property clearances',
        'Special area permissions',
        'Lutyens Delhi property services',
        'High-value property assessments',
        'Diplomatic area clearances'
      ],
      process: 'We provide specialized services for NDMC area properties including heritage clearances and premium property documentation with enhanced compliance requirements.',
      timeline: '10-12 business days',
      documents: ['NDMC clearance', 'Heritage certificate', 'Special permissions', 'Premium assessment']
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="authorities" />

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 md:px-10 lg:px-20 py-10">
            {/* Breadcrumb */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Link className="text-primary/80 dark:text-secondary/80 text-sm font-medium leading-normal hover:text-primary dark:hover:text-secondary transition-colors" href="/">Home</Link>
              <span className="text-subtext-light dark:text-subtext-dark text-sm font-medium leading-normal">/</span>
              <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Government Authorities</span>
            </div>

            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display mb-4">
                Government Authorities We Work With
              </h1>
              <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal max-w-4xl mx-auto">
                Our expert team has established direct relationships with all major government authorities in Delhi to ensure seamless property documentation and registration processes.
              </p>
            </div>

            {/* Video Section */}
            <div className="mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform duration-300">
                  <i className="text-white text-4xl" data-lucide="play"></i>
                </div>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 font-display">
                  Complete Authority Process Walkthrough
                </h2>
                <p className="text-subtext-light dark:text-subtext-dark mb-6 max-w-3xl mx-auto">
                  Watch our comprehensive video showing real interactions with MCD, DDA, L&DO, SRO, Collector Office, and NDMC for a complete property registration process. See how our expert team navigates through each authority to ensure your documentation is completed efficiently.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                  {authorities.map((authority, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                      <i className="text-primary" data-lucide={authority.icon}></i>
                      <span className="font-medium">{authority.shortName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Authorities Grid */}
            <div className="space-y-12">
              {authorities.map((authority, index) => (
                <div key={index} className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-yellow-200/50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                        <i className="text-white text-2xl" data-lucide={authority.icon}></i>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">{authority.name}</h2>
                        <p className="text-subtext-light dark:text-subtext-dark mt-1">{authority.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Services */}
                      <div>
                        <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4 font-display">Services Provided</h3>
                        <ul className="space-y-2">
                          {authority.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <i className="text-secondary mt-1 text-sm" data-lucide="check"></i>
                              <span className="text-subtext-light dark:text-subtext-dark text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process & Documents */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-3 font-display">Our Process</h3>
                          <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">{authority.process}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-3 font-display">Key Documents</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {authority.documents.map((doc, idx) => (
                              <div key={idx} className="bg-background-light/50 dark:bg-slate-700/50 rounded-lg p-2 text-center">
                                <span className="text-xs text-subtext-light dark:text-subtext-dark">{doc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="text-primary" data-lucide="clock"></i>
                            <span className="font-semibold text-text-light dark:text-text-dark">Processing Time</span>
                          </div>
                          <p className="text-sm text-subtext-light dark:text-subtext-dark">{authority.timeline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary to-yellow-800 dark:from-primary/80 dark:to-yellow-900 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 font-display">Need Help with Authority Documentation?</h2>
              <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
                Our expert team handles all government authority interactions for you. Get started with your property documentation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-bold leading-normal tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-orange-500/40">
                  <span>Start Your Process</span>
                  <i className="ml-2" data-lucide="arrow-right"></i>
                </button>
                <button className="flex items-center justify-center rounded-full h-14 px-8 bg-white/20 backdrop-blur-sm text-white text-lg font-bold leading-normal tracking-wider border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
                  <span>Get Expert Consultation</span>
                  <i className="ml-2" data-lucide="phone"></i>
                </button>
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
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blogs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                <ul className="space-y-2">
                  <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Gift Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Relinquishment Deed</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Authorities</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">MCD Services</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">DDA Process</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">L&DO Documentation</a></li>
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