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
                Transparent refund terms and cancellation guidelines for all our services.
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
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Refund Processing</h3>
                      <p className="text-black dark:text-subtext-dark">Refunds are issued to the original payment method via Razorpay.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="clock"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Refund Timeline</h3>
                      <p className="text-black dark:text-subtext-dark">7–14 working days depending on banks.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-red-600 text-xl mt-1" data-lucide="x-circle"></i>
                    </div>
                    <div>
                      <h3 className="text-black dark:text-text-dark font-bold text-lg mb-2">Non-Refundable Charges</h3>
                      <p className="text-black dark:text-subtext-dark">Razorpay and bank fees (if charged) are non-refundable.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service-Specific Refund Conditions */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-text"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Service-Specific Refund Conditions
                  </h2>
                </div>

                {/* Consultation */}
                <div className="mb-8 pb-8 border-b border-yellow-200/30">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">A</span>
                    Consultation
                  </h3>
                  <ul className="space-y-3 ml-12">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>Free/basic consultation:</strong> non-chargeable.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>Paid consultation:</strong> full refund if cancelled 24 hours before scheduled time.</span>
                    </li>
                  </ul>
                </div>

                {/* Drafting Services */}
                <div className="mb-8 pb-8 border-b border-yellow-200/30">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">B</span>
                    Drafting Services
                  </h3>
                  <ul className="space-y-3 ml-12">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>Full refund</strong> if cancelled before drafting work begins.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>50% refund</strong> if work started but draft not yet delivered.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>No refund</strong> if first draft is delivered.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-600 font-bold">!</span>
                      <span className="text-black dark:text-subtext-dark"><em>Partial refunds will be as per the sole discretion of saledeed.com</em></span>
                    </li>
                  </ul>
                </div>

                {/* Drafting + Verification */}
                <div className="mb-8 pb-8 border-b border-yellow-200/30">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">C</span>
                    Drafting + Verification
                  </h3>
                  <ul className="space-y-3 ml-12">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>Full refund</strong> if cancelled before work started.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>Partial refund</strong> depending on stage of work.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-black dark:text-subtext-dark"><strong>No refund</strong> after document verification is completed.</span>
                    </li>
                  </ul>
                </div>

                {/* Registration / Liaison Assistance */}
                <div className="mb-8 pb-8 border-b border-yellow-200/30">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">D</span>
                    Registration / Liaison Assistance
                  </h3>
                  <p className="text-black dark:text-subtext-dark mb-4 ml-12"><strong>Government fees are always non-refundable.</strong></p>
                  <p className="text-black dark:text-subtext-dark mb-4 ml-12">This includes:</p>
                  <ul className="space-y-2 ml-12">
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
                  <p className="text-black dark:text-subtext-dark mt-4 ml-12"><strong>If an appointment or fee has been initiated, refund is not possible.</strong></p>
                </div>

                {/* Subscription/Retainer Services */}
                <div>
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">E</span>
                    Subscription/Retainer Services
                  </h3>
                  <p className="text-black dark:text-subtext-dark ml-12">Refunds are prorated or as per individual plan terms.</p>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-green-200/50 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="shield-check"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-2xl md:text-3xl font-bold tracking-tight font-display">
                    Money Back Guarantee
                  </h2>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-6 border-l-4 border-green-500">
                  <p className="text-black dark:text-subtext-dark text-lg font-semibold">
                    100% refund if any legal procedural error in draft is not corrected within 7 days.
                  </p>
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
                  <p className="text-black dark:text-subtext-dark text-lg font-semibold mb-2">
                    Email: <a href="mailto:support@saledeed.com" className="text-primary hover:underline">support@saledeed.com</a>
                  </p>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg font-semibold mb-4">Include the following information:</p>
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
                    <span className="text-black dark:text-subtext-dark">Phone</span>
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
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="alert-triangle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Jurisdiction
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      All disputes fall under <strong>Delhi jurisdiction</strong>. Any legal proceedings related to refunds or cancellations will be governed by the laws of India and the courts of Delhi.
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
                  Our support team is here to help clarify any aspect of our refund and cancellation policy.
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
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
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
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="facebook"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="twitter"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
