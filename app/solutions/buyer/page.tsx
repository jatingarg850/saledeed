'use client'

import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function BuyerSolutionPage() {
  const services = [
    {
      title: 'Property Search & Expert Assistance',
      description: 'Minimum commission to find your dream home through our team of experts. We have a huge network of property sellers and builders to help you find your dream home at the price which is deserved, not demanded.'
    },
    {
      title: 'Property Value Analysis',
      description: 'Complete property value analysis to ensure that the sale amount is right and you are not manipulated during the buying process.'
    },
    {
      title: 'Property Background Check',
      description: 'Thorough background check to ensure that the title is clear and the property is not disputed. We verify that no government law has been violated and all dues towards departments are paid.'
    },
    {
      title: 'Loan Assistance',
      description: 'Best fit loan solutions according to your requirements. We ensure that the loan is granted at the earliest without any hassle at competitive interest rates.'
    },
    {
      title: 'Sale of Existing Property',
      description: 'If you want to sell a property before buying a new one, we provide complete selling assistance. Please refer to our seller section for detailed information.'
    },
    {
      title: 'Legal Documentation',
      description: 'Professional deeds drafting & registration of documents prepared exclusively as per your case requirements.'
    },
    {
      title: 'Property Mutation',
      description: 'Complete mutation process so that the property is legally transferred in your name in the competent building authority.'
    },
    {
      title: 'Valuation Report',
      description: 'Professional valuation report to help you get maximum tax exemptions and pay the government only what is actually required.'
    },
    {
      title: 'Renovation Services',
      description: 'Complete renovation by designing your space to suit your taste and fulfill your purpose.'
    },
    {
      title: 'Relocation Services',
      description: 'Professional relocation services to help you shift to your new home from anywhere across Delhi.'
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
                <i data-lucide="home" className="w-4 h-4"></i>
                Buyer Solutions
              </div>

              <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-text-shimmer">
                  Expert guidance
                </span>
                <span className="block mt-2">and complete assistance for property buyers</span>
              </h1>

              <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                From property search to final registration - we handle everything
              </p>

              <a
                href="https://wa.me/918800505050?text=Hello%2C%20I%20want%20to%20buy%20a%20property"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <i data-lucide="arrow-right" className="w-5 h-5"></i>
                Get Started Today
              </a>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <i data-lucide="shield-check" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-text-light dark:text-text-dark">Verified Properties</div>
                    <div className="text-sm text-subtext-light dark:text-subtext-dark">100% Legal Check</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <i data-lucide="percent" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-text-light dark:text-text-dark">Minimum Commission</div>
                    <div className="text-sm text-subtext-light dark:text-subtext-dark">Best Rates</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <i data-lucide="users" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-text-light dark:text-text-dark">Expert Support</div>
                    <div className="text-sm text-subtext-light dark:text-subtext-dark">End-to-End Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
                  Our Services Include
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

          {/* Contact Section */}
          <div className="py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-primary to-secondary">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="home" className="w-10 h-10 text-white"></i>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Buy Your Property?
              </h3>
              <p className="text-xl text-white/90 mb-10">
                Contact us today for professional assistance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918800505050?text=Hello%2C%20I%20want%20to%20buy%20a%20property%20%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-2xl transition-all duration-300"
                >
                  <i data-lucide="message-circle" className="w-6 h-6"></i>
                  Chat on WhatsApp
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/20 text-white border-2 border-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300"
                >
                  <i data-lucide="phone" className="w-6 h-6"></i>
                  Call Us Now
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i data-lucide="check-circle" className="w-4 h-4"></i>
                  <span>Verified Properties</span>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="shield" className="w-4 h-4"></i>
                  <span>Legal Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="clock" className="w-4 h-4"></i>
                  <span>Quick Process</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
