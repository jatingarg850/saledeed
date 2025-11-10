'use client'

import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function EverythingSaleToDeedPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="blogs" />

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-10 lg:px-20 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <Link href="/blogs" className="text-primary hover:underline">Blogs</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <span className="text-text-light dark:text-text-dark">Everything Sale to Deed</span>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-4xl mx-auto px-8 py-16 md:py-20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <i data-lucide="book-open" className="w-4 h-4"></i>
                  Complete Guide
                </div>

                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-6 leading-tight">
                  For Every Property Need - Indeed
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl md:text-4xl mt-2 font-medium">
                    Complete Property Documentation Journey
                  </span>
                </h1>

                <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto mb-8">
                  Your comprehensive guide to understanding every step of property documentation - from initial agreement to final deed registration.
                </p>

                <div className="flex items-center justify-center gap-4 text-sm text-subtext-light dark:text-subtext-dark">
                  <div className="flex items-center gap-2">
                    <i data-lucide="calendar" className="w-4 h-4"></i>
                    <span>January 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="clock" className="w-4 h-4"></i>
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="user" className="w-4 h-4"></i>
                    <span>Legal Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 p-8 mb-8">
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Understanding the Complete Property Documentation Process</h2>
                
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
                  Property transactions involve multiple legal documents and processes. This comprehensive guide walks you through every step from initial agreement to final deed registration, ensuring you understand each phase of your property journey.
                </p>

                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Phase 1: Initial Agreement</h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                  The journey begins with an Agreement to Sell - your safety net that protects advance payments and ensures the seller cannot back out or sell to someone else. This document establishes the terms and conditions of the future sale.
                </p>

                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Phase 2: Due Diligence</h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                  Property verification is crucial - checking clear title, encumbrance certificates, property tax clearances, and ensuring all legal compliances are met. This phase prevents future legal complications.
                </p>

                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Phase 3: Final Sale Deed</h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                  The Sale Deed is the final ownership transfer document. Once registered at the Sub-Registrar office, it provides complete legal ownership and protection. This is where the actual transfer of ownership occurs.
                </p>

                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Key Documents Required</h3>
                <ul className="list-disc list-inside text-subtext-light dark:text-subtext-dark space-y-2 mb-6">
                  <li>Original property documents and title deeds</li>
                  <li>Identity and address proof of all parties</li>
                  <li>Property tax receipts and clearance certificates</li>
                  <li>Encumbrance certificate for the last 15-30 years</li>
                  <li>Property valuation certificate</li>
                  <li>NOC from relevant authorities</li>
                </ul>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-text-light dark:text-text-dark mb-3">💡 Expert Tip</h4>
                  <p className="text-subtext-light dark:text-subtext-dark">
                    Always ensure proper legal verification before proceeding with any property transaction. Professional legal assistance can save you from future complications and ensure complete compliance with all legal requirements.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Need Help with Property Documentation?</h3>
                <p className="text-white/90 mb-6">
                  Our expert legal team can guide you through every step of your property documentation journey.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors"
                >
                  <i data-lucide="arrow-right" className="w-4 h-4"></i>
                  Get Expert Assistance
                </Link>
              </div>

              {/* Related Articles */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 p-8">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/blogs/agreement-to-sell-safety-net" className="block p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Agreement to Sell: Your Safety Net</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Learn how Agreement to Sell protects your interests in property transactions.</p>
                  </Link>
                  <Link href="/blogs/understanding-sale-deed" className="block p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Understanding Sale Deed</h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">Complete guide to Sale Deed - the final ownership transfer document.</p>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}