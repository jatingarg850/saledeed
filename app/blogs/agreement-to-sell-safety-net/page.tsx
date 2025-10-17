'use client'

import Link from 'next/link'
import Navigation from '../../../components/Navigation'

export default function AgreementToSellBlogPage() {
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
            <Link href="/blogs" className="text-primary hover:underline">Blog</Link>
            <i className="text-gray-400" data-lucide="chevron-right"></i>
            <span className="text-text-light dark:text-text-dark">Agreement to Sell: Your Safety Net</span>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Agreement to Sell
                </span>
                <span className="text-subtext-light dark:text-subtext-dark text-sm">6 min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6 leading-tight">
                Agreement to Sell: Your Safety Net in Property Deals
              </h1>

              <p className="text-xl text-subtext-light dark:text-subtext-dark mb-8 leading-relaxed">
                Think of it as your property insurance policy - here's why every smart buyer needs an Agreement to Sell before putting down serious money.
              </p>

              <div className="flex items-center gap-4 text-sm text-subtext-light dark:text-subtext-dark">
                <div className="flex items-center gap-2">
                  <i data-lucide="calendar" className="w-4 h-4"></i>
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="user" className="w-4 h-4"></i>
                  <span>Legal Team</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 border-l-4 border-blue-400">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">
                  Picture This Scenario
                </h2>
                <p className="text-blue-700 dark:text-blue-300 mb-0">
                  You've found your dream home. The seller wants ₹50 lakhs, and you're ready to pay ₹5 lakhs as advance.
                  But what if the seller changes their mind next month? What if they find another buyer willing to pay more?
                  Without an Agreement to Sell, you're basically handing over your hard-earned money with just a handshake and a prayer.
                </p>
              </div>

              {/* What is it really */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  What's an Agreement to Sell, Really?
                </h2>
                <p className="text-lg text-subtext-light dark:text-subtext-dark mb-4">
                  Let's skip the legal jargon for a moment. An Agreement to Sell is basically a promise - but a legally binding one.
                  It's like saying "I promise to sell you this house for this amount on this date" and "I promise to buy it from you" -
                  but with the full weight of the law behind it.
                </p>
                <p className="text-lg text-subtext-light dark:text-subtext-dark mb-6">
                  Think of it as the engagement before the marriage. The actual sale deed is the wedding ceremony,
                  but the Agreement to Sell is what makes sure both parties are committed to showing up at the altar.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                    The Real-World Translation:
                  </h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li className="flex items-start gap-2">
                      <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                      <span>You pay advance money with legal protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                      <span>Seller can't back out or sell to someone else</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                      <span>You get time to arrange finances without losing the property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                      <span>Both parties have clear obligations and timelines</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* When you need it */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  When Do You Actually Need This?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-700">
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                      🏗️ Under-Construction Properties
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      Builder says "Pay now, get possession in 2 years." You need legal assurance they'll actually deliver.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                      💰 Need Time for Finances
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Found the perfect house but your loan approval will take 2 months? This keeps it reserved for you.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                      📋 Pending Approvals
                    </h3>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Property has some pending clearances? Agreement ensures you get it once everything's sorted.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                      🏠 Possession Later
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Seller needs 6 months to vacate? Pay advance now, get possession when they're ready to move.
                    </p>
                  </div>
                </div>
              </section>

              {/* The government format */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  Why the Government Format Matters
                </h2>
                <p className="text-lg text-subtext-light dark:text-subtext-dark mb-4">
                  Here's something most people don't know: there's an official government-approved format for Agreement to Sell.
                  It's created by the Ministry of Urban Development and Department of Land Resources.
                  Using this format is like having the government's stamp of approval on your document.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">
                    What Makes This Format Special?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="shield-check" className="w-6 h-6 text-indigo-600 dark:text-indigo-400"></i>
                      </div>
                      <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Universal Acceptance</h4>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Every registrar office recognizes this format</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="check-circle" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                      </div>
                      <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Complete Protection</h4>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Covers all legal bases and scenarios</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i data-lucide="zap" className="w-6 h-6 text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <h4 className="font-semibold text-text-light dark:text-text-dark mb-2">Faster Processing</h4>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">No back-and-forth with officials</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real stories */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  Real Stories: When Things Go Wrong (And Right)
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-400">
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                      😰 The Horror Story: Rajesh's ₹10 Lakh Mistake
                    </h3>
                    <p className="text-red-700 dark:text-red-300 mb-3">
                      Rajesh found a great apartment in Gurgaon. Paid ₹10 lakhs advance with just a simple receipt.
                      Two months later, the seller sold it to someone else for ₹20 lakhs more.
                      Rajesh's only option? A long, expensive court battle with no guarantee of winning.
                    </p>
                    <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                      Lesson: A receipt is not legal protection.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-400">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                      😊 The Success Story: Priya's Smart Move
                    </h3>
                    <p className="text-green-700 dark:text-green-300 mb-3">
                      Priya wanted the same type of property. She insisted on a proper Agreement to Sell before paying advance.
                      When the seller tried to back out (property prices had risen), Priya went to court.
                      Result? She got the property at the original agreed price, plus compensation for the delay.
                    </p>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                      Lesson: Legal documents give you real power.
                    </p>
                  </div>
                </div>
              </section>

              {/* What to watch out for */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  Red Flags: When to Walk Away
                </h2>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-700">
                  <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-4">
                    🚨 Warning Signs
                  </h3>
                  <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                    <li className="flex items-start gap-3">
                      <i data-lucide="x-circle" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"></i>
                      <span><strong>Seller refuses to sign Agreement to Sell:</strong> "Trust me, just pay the advance" - Run!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i data-lucide="x-circle" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"></i>
                      <span><strong>Vague timelines:</strong> "We'll complete it sometime next year" - Get specific dates.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i data-lucide="x-circle" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"></i>
                      <span><strong>No penalty clauses:</strong> What happens if they delay? Make sure it's written down.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i data-lucide="x-circle" className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"></i>
                      <span><strong>Handwritten agreements:</strong> This isn't a grocery list. Get it properly typed and formatted.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Bottom line */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
                  The Bottom Line
                </h2>
                <p className="text-lg text-subtext-light dark:text-subtext-dark mb-4">
                  An Agreement to Sell isn't just another piece of paper - it's your insurance policy in the wild world of real estate.
                  It's the difference between being a smart buyer and being someone else's cautionary tale.
                </p>
                <p className="text-lg text-subtext-light dark:text-subtext-dark mb-6">
                  Yes, it takes a bit more time and effort upfront. But would you rather spend a few extra days getting proper documentation,
                  or spend months in court trying to recover your money?
                </p>

                <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Ready to Protect Your Property Investment?</h3>
                  <p className="mb-4">
                    Don't leave your hard-earned money to chance. Get a proper Agreement to Sell drafted by legal experts
                    who understand both the law and the real estate market.
                  </p>
                  <Link
                    href="/services/agreement-to-sell"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors"
                  >
                    <span>Get Your Agreement to Sell</span>
                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                  </Link>
                </div>
              </section>
            </div>

            {/* Related Articles */}
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blogs/understanding-sale-deed" className="group">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
                    <h4 className="font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors mb-2">
                      Understanding Sale Deed vs Agreement to Sell
                    </h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">
                      Learn the key differences and when to use each document.
                    </p>
                  </div>
                </Link>

                <Link href="/services" className="group">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
                    <h4 className="font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors mb-2">
                      Complete Property Documentation Services
                    </h4>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">
                      Explore all our legal documentation services for property transactions.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  )
}