import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function PaymentPolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="payment-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Payment & Billing Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Learn about our secure payment processing and billing procedures.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Payment & Billing Policy Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="wallet"></i>
                  </div>
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                      PAYMENT & BILLING POLICY
                    </h2>
                    <p className="text-black dark:text-subtext-dark text-sm mt-2">Last Updated: 22/11/2025</p>
                  </div>
                </div>

                {/* 1. Payment Processing */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    1. Payment Processing
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    All payments on SaleDeed.com are securely processed via <strong className="text-primary">Razorpay</strong>.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                      We do not store financial details.
                    </p>
                  </div>
                </div>

                {/* 2. Pricing & Taxes */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    2. Pricing & Taxes
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-4">
                    <li>Prices are displayed exclusive of GST</li>
                  </ul>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2 ml-4">
                    Invoices include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-8">
                    <li>GSTIN</li>
                    <li>Service description</li>
                    <li>Razorpay payment ID</li>
                    <li>Name of parent company: 31 Son</li>
                  </ul>
                </div>

                {/* 3. Invoices */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    3. Invoices
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    A digital invoice is automatically emailed after payment.
                  </p>
                </div>

                {/* 4. Refund Handling */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    4. Refund Handling
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">
                    All refunds follow the refund policy.
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Razorpay processing time applies.
                  </p>
                </div>

                {/* 5. Chargebacks */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    5. Chargebacks
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    We provide proper documentation for disputes.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                      False chargebacks may result in account suspension.
                    </p>
                  </div>
                </div>

                {/* 6. Failed Transactions */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    6. Failed Transactions
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Orders may automatically cancel if payment isn't completed within 48 hours.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Have Questions About Payments?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help with any payment or billing questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="group flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold leading-normal tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30"
                  >
                    <span className="truncate">Contact Support</span>
                    <i className="ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                  </Link>
                  <Link 
                    href="/"
                    className="flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-blue-700 dark:text-white text-lg font-bold leading-normal tracking-wide border-2 border-blue-700 hover:bg-blue-700/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="truncate">Back to Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
