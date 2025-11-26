import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="refund-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Refund & Cancellation Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Understand our refund and cancellation terms for all services.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Refund & Cancellation Policy Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="credit-card"></i>
                  </div>
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                      REFUND & CANCELLATION POLICY
                    </h2>
                    <p className="text-black dark:text-subtext-dark text-sm mt-2">Last Updated: 22/11/2025</p>
                  </div>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  SaleDeed.com provides specialized legal-documentation and property-related services. Refund eligibility depends on the service stage.
                </p>

                {/* 1. General Refund Rules */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    1. GENERAL REFUND RULES
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Refunds are issued to the original payment method via Razorpay.</li>
                    <li>Refund timelines: 7–14 working days depending on banks.</li>
                    <li>Razorpay and bank fees (if charged) are non-refundable.</li>
                  </ul>
                </div>

                {/* 2. Service-Specific Refund Conditions */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    2. SERVICE-SPECIFIC REFUND CONDITIONS
                  </h3>

                  {/* A. Consultation */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-blue-600 text-lg" data-lucide="message-circle"></i>
                      A. Consultation
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Free/basic consultation: non-chargeable.</li>
                      <li>Paid consultation: full refund if cancelled 24 hours before scheduled time.</li>
                    </ul>
                  </div>

                  {/* B. Drafting Services */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-green-600 text-lg" data-lucide="file-text"></i>
                      B. Drafting Services
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Full refund if cancelled before drafting work begins.</li>
                      <li>50% refund if work started but draft not yet delivered.</li>
                      <li>No refund if first draft is delivered.</li>
                    </ul>
                    <p className="text-black dark:text-subtext-dark text-base leading-relaxed mt-3 ml-4 italic">
                      Partial refunds will be as per the sole discretion of saledeed.com
                    </p>
                  </div>

                  {/* C. Drafting + Verification */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-purple-600 text-lg" data-lucide="check-square"></i>
                      C. Drafting + Verification
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Full refund if cancelled before no work started.</li>
                      <li>Partial refund depending on stage of work.</li>
                      <li>No refund after document verification is completed.</li>
                    </ul>
                  </div>

                  {/* D. Registration / Liaison Assistance */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-red-600 text-lg" data-lucide="x-circle"></i>
                      D. Registration / Liaison Assistance
                    </h4>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3 ml-4">
                      <strong>Government fees are always non-refundable.</strong>
                    </p>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2 ml-4">This includes:</p>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-8">
                      <li>Stamp duty</li>
                      <li>Registration fees</li>
                      <li>Appointment fees</li>
                      <li>Government filing charges</li>
                    </ul>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mt-3 ml-4">
                      If an appointment or fee has been initiated, refund is not possible.
                    </p>
                  </div>

                  {/* E. Subscription/Retainer Services */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-blue-600 text-lg" data-lucide="repeat"></i>
                      E. Subscription/Retainer Services
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Refunds are prorated or as per individual plan terms.</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Money Back Guarantee */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    3. MONEY BACK GUARANTEE
                  </h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                      <strong className="text-green-800 dark:text-green-300">100% refund</strong> if any legal procedural error in draft is not corrected within 7 days.
                    </p>
                  </div>
                </div>

                {/* 4. How to Request a Refund */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    4. HOW TO REQUEST A REFUND
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    Email: <a href="mailto:support@saledeed.com" className="text-primary hover:underline font-semibold">support@saledeed.com</a>
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">Include:</p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Full name</li>
                    <li>Order ID</li>
                    <li>Phone</li>
                    <li>Reason for refund</li>
                    <li>Supporting documents (if applicable)</li>
                  </ul>
                </div>

                {/* 5. Jurisdiction */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    5. JURISDICTION
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    All disputes fall under Delhi jurisdiction.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Have Questions About Our Refund Policy?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help clarify any aspect of our refund and cancellation policy.
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
