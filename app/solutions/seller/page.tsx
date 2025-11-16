'use client'

import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function SellerSolutionPage() {
  const services = [
    {
      title: 'Expert Buyer Matching',
      description: 'Minimum commission to find your dream buyer through our specialized team. Access to our huge network of buyers and investors actively searching for properties similar to yours with complete solutions for every step.'
    },
    {
      title: 'Instant Cash Purchase',
      description: 'Outright purchase at a price that sets you free in a single go. Flexible solutions from 3 months settlement to single day purchase based on your specific needs and requirements.'
    },
    {
      title: 'NOC Assistance',
      description: 'Complete No Objection Certificate (NOC) from every government department as and when required. Streamlined process to ensure all legal clearances are obtained efficiently.'
    },
    {
      title: 'Freehold Conversion',
      description: 'Convert your property title from leasehold to freehold, making you the legal and absolute owner. This important upgrade increases your property value by nearly 20 percent.'
    },
    {
      title: 'Property Value Analysis',
      description: 'Professional analysis to determine the correct selling price following industry norms. Strategic pricing helps you sell faster than expected while maximizing your returns.'
    },
    {
      title: 'Renovation & Staging',
      description: 'Professional renovation and staging for an attractive look that appeals to buyers. Cost-effective solutions that recommend only what\'s actually required, avoiding unnecessary expenses.'
    },
    {
      title: 'Buyer Verification',
      description: 'Comprehensive buyer background checking to ensure no fraud occurs. Legal documentation that binds buyers, making fraudsters prefer to stay away from your property deals.'
    },
    {
      title: 'Legal Documentation',
      description: 'Professional property document drafting and registration for seamless ownership transfer. Proper legal measures ensure your name is completely cleared from future property activities.'
    },
    {
      title: 'Tax Optimization',
      description: 'Expert valuation report that reduces your tax burden and helps you save lakhs. Professional assessment ensures you pay only what\'s legally required, maximizing your profits.'
    },
    {
      title: 'Reinvestment Assistance',
      description: 'Complete new property assistance for reinvestment opportunities. Refer to our buyer section to discover how we can also help you as a buyer for your next property purchase.'
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="solutions" />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mx-6 md:mx-10 lg:mx-20 my-10">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-7xl mx-auto px-8 py-16 md:py-24 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <i data-lucide="handshake" className="w-4 h-4"></i>
                Seller Solutions
              </div>

              <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-8 leading-tight">
                <span className="text-primary">
                  Your Trusted Guide
                </span>
                <span className="block mt-2">for Property Sale Agreements & Legal Papers</span>
              </h1>

              <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                Complete end-to-end solutions crafted specifically for property sellers
              </p>

              <a
                href="https://wa.me/918800505050?text=Hello%2C%20I%20want%20to%20sell%20my%20property"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <i data-lucide="arrow-right" className="w-5 h-5"></i>
                Get Started Today
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                  Our Premium Selling Services
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
                  >
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4">
                      {service.title}
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-primary to-secondary">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="home" className="w-10 h-10 text-white"></i>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Sell Your Property?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Join thousands of satisfied sellers who chose saledeed.com for selling their properties
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918800505050?text=Hello%2C%20I%20want%20to%20sell%20my%20property%20%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-2xl transition-all duration-300"
                >
                  <i data-lucide="message-circle" className="w-6 h-6"></i>
                  Get Details
                </a>
                <a
                  href="tel:+918800505050"
                  className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call Us Now
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i data-lucide="check-circle" className="w-4 h-4"></i>
                  <span>Maximum Price</span>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="shield" className="w-4 h-4"></i>
                  <span>Legal Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="clock" className="w-4 h-4"></i>
                  <span>Quick Sale</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
