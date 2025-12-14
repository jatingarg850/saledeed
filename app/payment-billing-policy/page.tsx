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
                Learn about our secure payment processing and billing practices.
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

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30 mb-6">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    All payments on SaleDeed.com are securely processed via <strong>Razorpay</strong>, a trusted payment gateway.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="shield-check"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Secure Transactions</h3>
                      <p className="text-black dark:text-subtext-dark">Your payment information is encrypted and protected with industry-standard security protocols</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="lock"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">No Data Storage</h3>
                      <p className="text-black dark:text-subtext-dark">We do NOT store your card, UPI, or banking credentials on our servers</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Multiple Payment Methods</h3>
                      <p className="text-black dark:text-subtext-dark">Accept credit cards, debit cards, UPI, net banking, and digital wallets</p>
                    </div>
                  </div>
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
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-yellow-200/30">
                    <h3 className="text-black dark:text-text-dark font-bold text-lg mb-3">Price Display</h3>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                      Prices displayed on our website are <strong>exclusive of GST</strong>. GST will be added at checkout based on applicable rates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black dark:text-text-dark font-bold text-lg mb-4">Invoice Details</h3>
                    <p className="text-black dark:text-subtext-dark mb-4">Each invoice includes:</p>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">GSTIN (Goods and Services Tax Identification Number)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Detailed service description</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Razorpay payment ID for reference</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Parent company name: <strong>31 Son</strong></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Itemized breakdown of charges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Invoices */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Digital Invoices
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="mail"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Automatic Email</h3>
                      <p className="text-black dark:text-subtext-dark">A digital invoice is automatically emailed to you after successful payment</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="download"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Download & Print</h3>
                      <p className="text-black dark:text-subtext-dark">You can download and print your invoice for your records</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="archive"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Invoice History</h3>
                      <p className="text-black dark:text-subtext-dark">Access all your invoices anytime from your account dashboard</p>
                    </div>
                  </div>
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

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30 mb-6">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    All refunds follow our <a href="/refund-cancellation-policy" className="text-primary hover:underline font-semibold">Refund & Cancellation Policy</a>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Original Payment Method</h3>
                      <p className="text-black dark:text-subtext-dark">Refunds are issued back to your original payment method</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="clock"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Processing Time</h3>
                      <p className="text-black dark:text-subtext-dark">Razorpay processing time applies (typically 7-14 working days)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="info"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Bank Delays</h3>
                      <p className="text-black dark:text-subtext-dark">Bank processing times may vary; contact your bank if refund is delayed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chargebacks */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="alert-circle"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Chargebacks & Disputes
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="file-check"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Documentation</h3>
                      <p className="text-black dark:text-subtext-dark">We provide proper documentation for all disputes and chargebacks</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="x-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">False Chargebacks</h3>
                      <p className="text-black dark:text-subtext-dark">False chargebacks may result in account suspension and legal action</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Failed Transactions */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="x-square"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Failed Transactions
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border border-red-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-4">
                    <strong>Automatic Cancellation:</strong> Orders may automatically cancel if payment isn't completed within 48 hours.
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    If your payment fails, please try again or contact our support team for assistance.
                  </p>
                </div>
              </div>

              {/* Payment Confirmation */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-green-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-green-600 text-2xl mt-1" data-lucide="check-circle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Service Booking Confirmation
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed mb-3">
                      <strong>Important:</strong> No service is considered "booked" until payment is confirmed.
                    </p>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      You will receive a confirmation email with your order details and service timeline once payment is successfully processed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax Compliance */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="scale"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Tax Compliance
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">GST Compliance</h3>
                      <p className="text-black dark:text-subtext-dark">All applicable GST and taxes must be paid by the user as per Indian tax laws</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="file-text"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Tax Invoices</h3>
                      <p className="text-black dark:text-subtext-dark">Tax invoices are provided for all transactions for your accounting records</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="info"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Your Responsibility</h3>
                      <p className="text-black dark:text-subtext-dark">You are responsible for any additional taxes or compliance requirements in your jurisdiction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-amber-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="alert-triangle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Important Notice
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by this Payment & Billing Policy. These policies may be updated from time to time, and continued use of our services constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Questions About Our Payment & Billing Policy?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our support team is ready to help with any payment or billing inquiries.
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
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">All Services</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/calculator">Stamp Duty Calculator</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/pricing">Pricing</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blogs</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/terms-conditions">Terms & Conditions</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/refund-cancellation-policy">Refund Policy</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/payment-billing-policy">Payment Policy</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/cookie-policy">Cookie Policy</a></li>
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
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
