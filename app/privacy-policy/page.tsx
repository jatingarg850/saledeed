import Navigation from '../../components/Navigation';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="privacy-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Privacy Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Your privacy and data security are our top priorities. Learn how we protect your information.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Privacy Policy Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="shield-check"></i>
                  </div>
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                      PRIVACY POLICY SALEDEED.COM
                    </h2>
                    <p className="text-black dark:text-subtext-dark text-sm mt-2">Last Updated: 22/11/2025</p>
                  </div>
                </div>
                
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  SaleDeed.com, powered by 31 Son ("we", "us", "our"), is committed to protecting your personal data and ensuring transparency in how we use it. This Privacy Policy explains what information we collect, why we collect it, how we use it, and how we safeguard it.
                </p>

                {/* 1. Who We Are */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    1. WHO WE ARE
                  </h3>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-blue-200/30 mb-4">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">
                      <strong>SaleDeed.com — A Unit of 31 Son</strong>
                    </p>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">
                      Email: <a href="mailto:support@saledeed.com" className="text-primary hover:underline font-semibold">support@saledeed.com</a>
                    </p>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                      Website: <a href="https://saledeed.com" className="text-primary hover:underline font-semibold">https://saledeed.com</a>
                    </p>
                  </div>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    We provide end to end (sale-to-deed) services including drafting, verification, property documentation, liaisoning, and buyer–seller assistance.
                  </p>
                </div>

                {/* 2. Information We Collect */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    2. INFORMATION WE COLLECT
                  </h3>

                  {/* A. Personal Information */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-blue-600 text-lg" data-lucide="user"></i>
                      A. Personal Information
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Full name</li>
                      <li>Phone number</li>
                      <li>Email address</li>
                      <li>Address (if required for registration assistance)</li>
                    </ul>
                  </div>

                  {/* B. Property & Document Data */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-green-600 text-lg" data-lucide="file-text"></i>
                      B. Property & Document Data
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>Property details shared by users</li>
                      <li>Documents uploaded (sale deeds, agreements, IDs, NOCs, etc.)</li>
                      <li>Title documents for verification</li>
                      <li>Encumbrance-related details</li>
                    </ul>
                  </div>

                  {/* C. Payment Information */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-purple-600 text-lg" data-lucide="credit-card"></i>
                      C. Payment Information
                    </h4>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-2">
                      Processed securely by Razorpay.
                    </p>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <strong>We do NOT store your card, UPI, or banking credentials.</strong>
                    </p>
                  </div>

                  {/* D. Technical/Usage Data */}
                  <div className="mb-6">
                    <h4 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <i className="text-blue-600 text-lg" data-lucide="monitor"></i>
                      D. Technical/Usage Data
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                      <li>IP address</li>
                      <li>Device type</li>
                      <li>Browser type</li>
                      <li>Pages visited</li>
                      <li>Session data</li>
                      <li>Traffic source</li>
                    </ul>
                  </div>
                </div>

                {/* 3. How We Use Your Information */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    3. HOW WE USE YOUR INFORMATION
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    We use collected data to:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Deliver services (drafting, verification, sale-to-deed support).</li>
                    <li>Communicate regarding service status and delivery.</li>
                    <li>Process secure payments through Razorpay.</li>
                    <li>Maintain security and prevent fraud.</li>
                    <li>Improve user experience and website performance.</li>
                    <li>Comply with applicable laws and government requirements.</li>
                  </ol>
                </div>

                {/* 4. How We Share Your Data */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    4. HOW WE SHARE YOUR DATA
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    We share information only as necessary to deliver your requested service.
                  </p>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-2">
                    Information may be shared with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-4">
                    <li>Razorpay (payment processing)</li>
                    <li>Verification partners / legal professionals</li>
                    <li>Government departments (registrar office, if required for assistance)</li>
                    <li>Hosting, data storage, and analytics providers</li>
                  </ul>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed font-semibold">
                      We never sell or rent your personal data.
                    </p>
                  </div>
                </div>

                {/* 5. Data Storage & Security */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    5. DATA STORAGE & SECURITY
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4">
                    <li>Documents are stored in encrypted form.</li>
                    <li>Access is restricted to authorized personnel only.</li>
                    <li>Data retention is based on legal requirements (typically 3–7 years).</li>
                    <li>Users may request early deletion unless retention is required by law.</li>
                  </ul>
                </div>

                {/* 6. Your Rights */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    6. YOUR RIGHTS
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-3">
                    You can request:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black dark:text-subtext-dark text-lg leading-relaxed ml-4 mb-4">
                    <li>Access</li>
                    <li>Correction</li>
                    <li>Deletion</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Contact: <a href="mailto:privacy@saledeed.com" className="text-primary hover:underline font-semibold">privacy@saledeed.com</a>
                  </p>
                </div>

                {/* 7. Children's Privacy */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    7. CHILDREN'S PRIVACY
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Our service is not intended for individuals below 18 years of age.
                  </p>
                </div>

                {/* 8. Changes to This Policy */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    8. CHANGES TO THIS POLICY
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    We may update this policy periodically. The latest revision date is shown at the top.
                  </p>
                </div>
              </div>

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

              {/* Cookie Policy Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="cookie"></i>
                  </div>
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                      COOKIE POLICY
                    </h2>
                    <p className="text-black dark:text-subtext-dark text-sm mt-2">Last Updated: 22/11/2025</p>
                  </div>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  SaleDeed.com uses cookies to ensure a smooth and secure user experience.
                </p>

                {/* Types of Cookies */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                    Types of cookies:
                  </h3>

                  <div className="space-y-4">
                    {/* Essential Cookies */}
                    <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <i className="text-blue-600 text-xl mt-1" data-lucide="shield-check"></i>
                      <div>
                        <h4 className="text-black dark:text-text-dark text-lg font-bold mb-2">
                          Essential cookies
                        </h4>
                        <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                          login, session, forms
                        </p>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                      <i className="text-green-600 text-xl mt-1" data-lucide="bar-chart"></i>
                      <div>
                        <h4 className="text-black dark:text-text-dark text-lg font-bold mb-2">
                          Analytics cookies
                        </h4>
                        <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                          usage patterns
                        </p>
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                      <i className="text-purple-600 text-xl mt-1" data-lucide="settings"></i>
                      <div>
                        <h4 className="text-black dark:text-text-dark text-lg font-bold mb-2">
                          Functional cookies
                        </h4>
                        <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                          preferences
                        </p>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <i className="text-blue-600 text-xl mt-1" data-lucide="megaphone"></i>
                      <div>
                        <h4 className="text-black dark:text-text-dark text-lg font-bold mb-2">
                          Marketing cookies
                        </h4>
                        <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                          only if enabled
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookie Control */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <i className="text-blue-600 text-2xl mt-1" data-lucide="info"></i>
                    <div>
                      <h4 className="text-black dark:text-text-dark text-lg font-bold mb-3">
                        Cookie Control
                      </h4>
                      <p className="text-black dark:text-subtext-dark text-base leading-relaxed">
                        You can disable cookies in your browser, but site functionality may be affected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

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

              {/* Contact Us Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="phone"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Contact Us
                  </h2>
                </div>
                
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                  The company will have <strong className="text-blue-800 dark:text-primary">sole and exclusive right to change any offer or pricing of any service</strong> without any prior information.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-blue-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    For any questions regarding our Privacy Policy or Refund Policy, please feel free to contact our support team. We're here to help you understand our policies and address any concerns you may have.
                  </p>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <i className="text-blue-600 text-2xl mt-1" data-lucide="alert-triangle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Important Notice
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and Refund Policy. These policies may be updated from time to time, and continued use of our services constitutes acceptance of any changes.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Have Questions About Our Policies?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help clarify any aspect of our privacy or refund policies.
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
                    className="flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-blue-700 dark:text-white text-lg font-bold leading-normal tracking-wide border-2 border-blue-700 hover:bg-blue-700/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="truncate">Back to Home</span>
                  </a>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-blue-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
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
              
              <div className="mt-16 border-t border-blue-200 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
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