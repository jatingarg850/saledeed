import Navigation from '../../components/Navigation';

export default function PaymentBillingPolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="payment-billing-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Payment & Billing Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Clear and transparent payment terms for all SaleDeed.com services.
              </p>
              <p className="text-black dark:text-subtext-dark text-sm mt-4">
                Last Updated: 22/11/2025
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Payment Processing */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="credit-card"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Payment Processing
                  </h2>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    All payments on SaleDeed.com are securely processed via <strong className="text-amber-800 dark:text-primary">Razorpay</strong>. We do not store your financial details on our servers.
                  </p>
                </div>
              </div>

              {/* Pricing & Taxes */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="tag"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Pricing & Taxes
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Price Display</h3>
                      <p className="text-black dark:text-subtext-dark">Prices are displayed exclusive of GST (Goods and Services Tax).</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="file-text"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Invoice Details</h3>
                      <p className="text-black dark:text-subtext-dark mb-3">Invoices include:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-black dark:text-subtext-dark">GSTIN</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-black dark:text-subtext-dark">Service description</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-black dark:text-subtext-dark">Razorpay payment ID</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-black dark:text-subtext-dark">Name of parent company: 31 Son</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoices */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="mail"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Invoices
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    A digital invoice is automatically emailed to you after payment is confirmed. Please retain this for your records and tax purposes.
                  </p>
                </div>
              </div>

              {/* Refund Handling */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="undo"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Refund Handling
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-4">
                    All refunds follow our comprehensive <strong className="text-amber-800 dark:text-primary">Refund Policy</strong>.
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Razorpay processing time applies. Refunds are typically processed within 7-14 working days depending on your bank.
                  </p>
                </div>
              </div>

              {/* Chargebacks */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="alert-circle"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Chargebacks
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Documentation</h3>
                      <p className="text-black dark:text-subtext-dark">We provide proper documentation for all disputes to resolve them fairly.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-red-600 text-xl mt-1" data-lucide="x-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">False Chargebacks</h3>
                      <p className="text-black dark:text-subtext-dark">False chargebacks may result in account suspension and legal action.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Failed Transactions */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="clock"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Failed Transactions
                  </h2>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6 border-l-4 border-amber-500">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Orders may automatically cancel if payment isn't completed within <strong>48 hours</strong>. You can restart the payment process at any time.
                  </p>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-blue-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-blue-600 text-2xl mt-1" data-lucide="info"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Payment Security
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      Your payment information is protected by industry-standard encryption. Razorpay is PCI-DSS compliant and uses advanced security measures to protect your financial data.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Questions About Payment & Billing?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our support team is ready to assist with any payment-related inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="group flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold leading-normal tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30"
                  >
                    <span className="truncate">Contact Support</span>
                    <i className="ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                  </a>
                  <a 
                    href="/"
                    className="flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-amber-700 dark:text-white text-lg font-bold leading-normal tracking-wide border-2 border-amber-700 hover:bg-amber-700/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="truncate">Back to Home</span>
                  </a>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-yellow-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
            <div className="px-6 md:px-10 lg:px-20 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                <div className="col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <i className="text-primary" data-lucide="home"></i>
                    <h2 className="text-text-light dark:text-text-dark text-2xl font-bold font-display">SaleDeed.com</h2>
                  </div>
                  <p className="mt-4 text-base">A one-stop shop for every property need - indeed !</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Services</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Deed Drafting</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Document Verification</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Registration Assistance</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Stamp Duty Calculation</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/terms-conditions">Terms of Service</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Contact</h3>
                  <div className="mt-4 flex items-center gap-2">
                    <i className="text-primary" data-lucide="mail"></i>
                    <a href="mailto:support@saledeed.com" className="text-base hover:text-primary dark:hover:text-secondary transition-colors">
                      support@saledeed.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 border-t border-yellow-200 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-base">© 2025 SaleDeed.com. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                  
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
