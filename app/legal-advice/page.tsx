'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function LegalAdvice() {
  const services = [
    {
      title: "Property Legal Consultation",
      description: "Get expert legal advice on property transactions, documentation, and compliance with government regulations.",
      icon: "scale",
      features: ["Free 15-min consultation", "Government-registered lawyers", "10+ years experience"]
    },
    {
      title: "Document Verification",
      description: "Complete legal verification of property documents to ensure authenticity and prevent fraud.",
      icon: "shield-check",
      features: ["Title verification", "Encumbrance check", "Legal opinion report"]
    },
    {
      title: "Property Dispute Resolution",
      description: "Expert guidance and representation for property disputes, litigation, and legal matters.",
      icon: "gavel",
      features: ["Court representation", "Mediation services", "Legal documentation"]
    },
    {
      title: "Contract Drafting & Review",
      description: "Professional drafting and review of property agreements, deeds, and legal contracts.",
      icon: "file-signature",
      features: ["Sale agreements", "Rent agreements", "Partnership deeds"]
    },
    {
      title: "Compliance & Regulatory",
      description: "Ensure full compliance with property laws, building regulations, and government norms.",
      icon: "clipboard-check",
      features: ["Building bye-laws", "NOC assistance", "Regulatory compliance"]
    },
    {
      title: "Legal Due Diligence",
      description: "Comprehensive legal due diligence for property purchases and investments.",
      icon: "search",
      features: ["Title search", "Ownership verification", "Risk assessment"]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation currentPage="legal-advice" />
      
      <div className="pt-24 pb-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
           
            <p className="text-xl text-subtext-light font-bold dark:text-subtext-dark max-w-3xl mx-auto">
              Expert legal guidance from government-registered lawyers with 50+ years of property law experience
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8 text-center">Why Choose Our Legal Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="award" className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="font-bold text-text-light dark:text-text-dark mb-2">50+ Years Experience</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">Specialized in property law</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="check-circle" className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="font-bold text-text-light dark:text-text-dark mb-2">100% Legal Compliance</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">Guaranteed legal protection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="home" className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Doorstep Service</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">Legal advice at your location</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="shield" className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="font-bold text-text-light dark:text-text-dark mb-2">Confidential</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete privacy guaranteed</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <i data-lucide={service.icon} className="w-8 h-8 text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <i data-lucide="check" className="w-4 h-4 text-blue-600"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Free Legal Consultation</h2>
            <p className="text-xl mb-8 text-blue-50">
              Book a free 15-minutes consultation with our property experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20need%20legal%20advice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                <i data-lucide="message-circle" className="w-5 h-5"></i>
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border border-white/30"
              >
                <i data-lucide="phone" className="w-5 h-5"></i>
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
