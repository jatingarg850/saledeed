'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function TaxSavingTips() {
  const tips = [
    {
      title: "Capital Gains Tax Exemption",
      description: "Learn how to save tax on property sale through Section 54, 54EC, and 54F exemptions.",
      icon: "trending-down",
      savings: "Save up to ₹2-5 Lakhs",
      details: [
        "Reinvest in residential property",
        "Capital gains bonds",
        "Long-term vs short-term gains"
      ]
    },
    {
      title: "Home Loan Tax Benefits",
      description: "Maximize tax deductions on home loan interest and principal repayment.",
      icon: "home",
      savings: "Save up to ₹3.5 Lakhs/year",
      details: [
        "Section 80C - Principal repayment",
        "Section 24 - Interest deduction",
        "First-time buyer benefits"
      ]
    },
    {
      title: "Stamp Duty Optimization",
      description: "Understand stamp duty calculation and legal ways to optimize payment.",
      icon: "file-text",
      savings: "Save 5-10% on stamp duty",
      details: [
        "Circle rate vs market rate",
        "Joint ownership benefits",
        "Women buyer concessions"
      ]
    },
    {
      title: "Property Tax Deductions",
      description: "Claim deductions on property tax, maintenance, and rental income.",
      icon: "receipt",
      savings: "Save up to ₹2 Lakhs",
      details: [
        "Rental income deductions",
        "Property tax benefits",
        "Maintenance expenses"
      ]
    },
    {
      title: "Gift Deed Tax Planning",
      description: "Transfer property to family members with minimal tax implications.",
      icon: "gift",
      savings: "Zero tax on gifts",
      details: [
        "Tax-free family transfers",
        "Avoid capital gains",
        "Legal documentation"
      ]
    },
    {
      title: "Joint Ownership Benefits",
      description: "Leverage joint ownership for maximum tax benefits and savings.",
      icon: "users",
      savings: "Double tax benefits",
      details: [
        "Dual home loan benefits",
        "Shared deductions",
        "Ownership structure"
      ]
    }
  ]

  const calculatorSteps = [
    {
      title: "Property Sale Value",
      description: "Enter your property sale price and purchase price"
    },
    {
      title: "Calculate Capital Gains",
      description: "We calculate your long-term or short-term capital gains"
    },
    {
      title: "Exemption Options",
      description: "Explore available tax exemptions and savings"
    },
    {
      title: "Tax Savings Report",
      description: "Get detailed report with maximum tax savings"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation currentPage="tax-saving-tips" />
      
      <div className="pt-24 pb-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  Tax Saving Tips
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
              Expert strategies to minimize your property tax burden and maximize savings legally
            </p>
          </div>

          {/* Potential Savings Banner */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Save Up To ₹5-10 Lakhs on Property Taxes</h2>
            <p className="text-xl text-green-50 mb-6">
              With proper tax planning and expert guidance
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all"
            >
              <i data-lucide="calculator" className="w-5 h-5"></i>
              Calculate Your Savings
            </Link>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <i data-lucide={tip.icon} className="w-8 h-8 text-white"></i>
                </div>
                <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {tip.savings}
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                  {tip.title}
                </h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                  {tip.description}
                </p>
                <ul className="space-y-2">
                  {tip.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <i data-lucide="check" className="w-4 h-4 text-green-600"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8 text-center">How We Help You Save Tax</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {calculatorSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-text-light dark:text-text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Personalized Tax Saving Plan</h2>
            <p className="text-xl mb-8 text-blue-50">
              Our tax experts will analyze your property and create a customized tax-saving strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
              >
                <i data-lucide="phone" className="w-5 h-5"></i>
                Book Consultation
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border border-white/30"
              >
                <i data-lucide="calculator" className="w-5 h-5"></i>
                Use Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
