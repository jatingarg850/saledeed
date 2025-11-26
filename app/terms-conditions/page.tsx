import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function TermsConditionsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="terms-conditions" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Terms & Conditions
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Terms & Conditions Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="file-check"></i>
                  </div>
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                      TERMS & CONDITIONS
                    </h2>
                    <p className="text-black dark:text-subtext-dark text-sm mt-2">Last Updated: 22/11/2025</p>
                  </div>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  By accessing SaleDeed.com (powered by 31 Son), you agree to the following Terms & Conditions.
                </p>

                {/* 1. Services Offered */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    1. SERVICES OFFERED
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    SaleDeed.com provides:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-6">
                    <li>Sale deed drafting</li>
                    <li>Property document verification</li>
                    <li>End-to-end "Sale to Deed" assistance</li>
                    <li>Buyer, seller, landlord, tenant support</li>
                    <li>Builder & developer assistance</li>
                    <li>Liaison with government departments (if opted)</li>
                  </ul>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 mb-4">
                    <p className="text-black dark:text-subtext-dark text-base leading-relaxed mb-3">
                      SaleDeed.com is an online platform that connects users with information, services, and third-party professionals related to real estate, documentation, and property transactions.
                    </p>
                    <p className="text-black dark:text-subtext-dark text-base leading-relaxed mb-3">
                      <strong className="text-blue-800 dark:text-blue-300">SaleDeed.com does NOT provide legal advice, does NOT practice law, and is NOT a law firm.</strong> Any legal services, document drafting, verification, or consultation offered through the platform are delivered by independent third-party professionals registered to provide such services.
                    </p>
                    <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                      SaleDeed.com acts solely as a facilitator/technology platform and is not responsible for the accuracy, completeness, or legal validity of documents prepared or reviewed by third parties.
                    </p>
                  </div>

                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                    We currently serve Delhi NCR
                  </p>
                </div>

                {/* 2. User Eligibility */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    2. USER ELIGIBILITY
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    You must be at least 18 years old and capable of entering a legal contract.
                  </p>
                </div>

                {/* 3. User Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    3. USER RESPONSIBILITIES
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-4">
                    <li>Provide accurate and complete information</li>
                    <li>Upload genuine documents</li>
                    <li>Avoid misuse or fraudulent activities</li>
                    <li>Not impersonate others</li>
                  </ul>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                    <p className="text-black dark:text-subtext-dark text-base leading-relaxed font-semibold">
                      Uploading forged documents may result in termination of services and legal action.
                    </p>
                  </div>
                </div>

                {/* 4. Payments */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    4. PAYMENTS
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Payments are collected securely through Razorpay.</li>
                    <li>GST and all applicable taxes must be paid by the user.</li>
                    <li>No service is considered "booked" until payment is confirmed.</li>
                  </ul>
                </div>

                {/* 5. Limitation of Liability */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    5. LIMITATION OF LIABILITY
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    SaleDeed.com is not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-4">
                    <li>Delays caused by government authorities</li>
                    <li>Errors due to incorrect/incomplete user documents</li>
                    <li>External issues outside our control</li>
                  </ul>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                    Our total liability is limited to the total fee paid for the particular service.
                  </p>
                </div>

                {/* 6. Document Confidentiality */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    6. DOCUMENT CONFIDENTIALITY
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>All sensitive documents are encrypted.</li>
                    <li>Used only for fulfilling your service.</li>
                    <li>Shared only when legally required or for service completion.</li>
                  </ul>
                </div>

                {/* 7. Termination */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    7. TERMINATION
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    We may terminate service if:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Fraud is suspected</li>
                    <li>Abuse or threats are issued</li>
                    <li>Terms are violated</li>
                  </ul>
                </div>

                {/* 8. Governing Law */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    8. GOVERNING LAW
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">
                    All matters are governed by the laws of India.
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                    Jurisdiction: Courts of Delhi.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Have Questions About Our Terms?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help clarify any aspect of our terms and conditions.
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
