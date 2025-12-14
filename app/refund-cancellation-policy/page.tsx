import Navigation from '../../components/Navigation';

export default function RefundCancellationPolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="refund-cancellation-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Refund & Cancellation Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Understand our refund and cancellation terms for all SaleDeed.com services.
              </p>
              <p className="text-black dark:text-subtext-dark text-sm mt-4">
                Last Updated: 22/11/2025
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* General Refund Rules */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="credit-card"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    General Refund Rules
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Refund Method</h3>
                      <p className="text-black dark:text-subtext-dark">Refunds are issued to the original payment method via Razorpay</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Processing Timeline</h3>
                      <p className="text-black dark:text-subtext-dark">Refund timelines: 7–14 working days depending on banks</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-1">Non-Refundable Fees</h3>
                      <p className="text-black dark:text-subtext-dark">Razorpay and bank fees (if charged) are non-refundable</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service-Specific Refund Conditions */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="layers"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Service-Specific Refund Conditions
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Consultation */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">A. Consultation</h3>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Free/Basic Consultation:</strong> Non-chargeable</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Paid Consultation:</strong> Full refund if cancelled 24 hours before scheduled time</span>
                      </li>
                    </ul>
                  </div>

                  {/* Drafting Services */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">B. Drafting Services</h3>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Full Refund:</strong> If cancelled before drafting work begins</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>50% Refund:</strong> If work started but draft not yet delivered</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>No Refund:</strong> If first draft is delivered</span>
                      </li>
                    </ul>
                    <p className="text-black dark:text-subtext-dark text-sm mt-3 italic">Partial refunds will be as per the sole discretion of saledeed.com</p>
                  </div>

                  {/* Drafting + Verification */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">C. Drafting + Verification</h3>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Full Refund:</strong> If cancelled before work started</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Partial Refund:</strong> Depending on stage of work</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>No Refund:</strong> After document verification is completed</span>
                      </li>
                    </ul>
                  </div>

                  {/* Registration / Liaison Assistance */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">D. Registration / Liaison Assistance</h3>
                    <p className="text-black dark:text-subtext-dark mb-3">
                      <strong className="text-red-600">Government fees are always non-refundable.</strong>
                    </p>
                    <p className="text-black dark:text-subtext-dark mb-3">This includes:</p>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Stamp duty</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Registration fees</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Appointment fees</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark">Government filing charges</span>
                      </li>
                    </ul>
                    <p className="text-black dark:text-subtext-dark text-sm mt-3 italic">If an appointment or fee has been initiated, refund is not possible.</p>
                  </div>

                  {/* Subscription/Retainer Services */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">E. Subscription/Retainer Services</h3>
                    <p className="text-black dark:text-subtext-dark">Refunds are prorated or as per individual plan terms</p>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-green-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-green-600 text-2xl mt-1" data-lucide="award"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      100% Money Back Guarantee
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      If any legal procedural error in draft is not corrected within 7 days, we offer a <strong>100% refund</strong> of the service charge.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Request a Refund */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="mail"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    How to Request a Refund
                  </h2>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30 mb-6">
                  <p className="text-black dark:text-subtext-dark text-lg font-semibold mb-4">
                    Email: <a href="mailto:support@saledeed.com" className="text-primary hover:underline">support@saledeed.com</a>
                  </p>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                  Please include the following information in your refund request:
                </p>

                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark">Full name</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark">Order ID</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark">Phone number</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark">Reason for refund</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark">Supporting documents (if applicable)</span>
                  </li>
                </ul>
              </div>

              {/* Jurisdiction */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-amber-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="scale"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Jurisdiction
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      All disputes related to refunds and cancellations fall under <strong>Delhi jurisdiction</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-blue-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-blue-600 text-2xl mt-1" data-lucide="info"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Important Notice
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by this Refund & Cancellation Policy. These policies may be updated from time to time, and continued use of our services constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Questions About Our Refund Policy?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help clarify any aspect of our refund and cancellation policies.
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
