'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function PropertyTips() {
  const tips = [
    {
      title: "Understanding Property Documentation",
      description: "Learn about essential documents needed for property transactions including sale deed, title deed, and encumbrance certificate.",
      icon: "file-text",
      link: "/blogs/understanding-sale-deed"
    },
    {
      title: "Freehold vs Leasehold Property",
      description: "Understand the key differences between freehold and leasehold properties and which one is right for you.",
      icon: "home",
      link: "/blogs"
    },
    {
      title: "Property Verification Checklist",
      description: "Complete checklist to verify property documents, ownership, and legal status before purchase.",
      icon: "check-circle",
      link: "/blogs"
    },
    {
      title: "Circle Rate vs Market Rate",
      description: "Learn how circle rates affect your property transaction and stamp duty calculations.",
      icon: "trending-up",
      link: "/blogs"
    },
    {
      title: "Property Registration Process",
      description: "Step-by-step guide to property registration including stamp duty payment and document submission.",
      icon: "clipboard",
      link: "/blogs"
    },
    {
      title: "Mutation of Property",
      description: "Understand property mutation process and why it's important for property ownership records.",
      icon: "refresh-cw",
      link: "/blogs"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation currentPage="property-tips" />
      
      <div className="pt-24 pb-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
           
            <p className="text-xl font-bold text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
              Expert guidance and practical tips for all your property needs in Delhi NCR
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tips.map((tip, index) => (
              <Link
                key={index}
                href={tip.link}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide={tip.icon} className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                  {tip.title}
                </h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                  {tip.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                  Learn More
                  <i data-lucide="arrow-right" className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"></i>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Property Advice?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Our property experts are here to help you with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                <i data-lucide="phone" className="w-5 h-5"></i>
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border border-white/30"
              >
                <i data-lucide="briefcase" className="w-5 h-5"></i>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
