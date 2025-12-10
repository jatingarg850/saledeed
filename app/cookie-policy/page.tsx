import Navigation from '../../components/Navigation';

export default function CookiePolicyPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="cookie-policy" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Cookie Policy
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Learn how SaleDeed.com uses cookies to enhance your browsing experience.
              </p>
              <p className="text-black dark:text-subtext-dark text-sm mt-4">
                Last Updated: 22/11/2025
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* What Are Cookies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="cookie"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    What Are Cookies?
                  </h2>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30 mb-6">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Cookies are small text files stored on your device that help websites remember information about your visit. SaleDeed.com uses cookies to ensure a smooth, secure, and personalized user experience.
                  </p>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                  These files are essential for website functionality and help us understand how you interact with our platform.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="layers"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Types of Cookies We Use
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                      Essential Cookies
                    </h3>
                    <p className="text-black dark:text-subtext-dark mb-3">
                      <strong>Purpose:</strong> These cookies are necessary for the website to function properly.
                    </p>
                    <p className="text-black dark:text-subtext-dark">
                      <strong>Examples:</strong> Login sessions, form data, security tokens, and user preferences.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                      Analytics Cookies
                    </h3>
                    <p className="text-black dark:text-subtext-dark mb-3">
                      <strong>Purpose:</strong> Help us understand how visitors use our website and improve performance.
                    </p>
                    <p className="text-black dark:text-subtext-dark">
                      <strong>Examples:</strong> Page views, user behavior patterns, traffic sources, and session duration.
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                      Functional Cookies
                    </h3>
                    <p className="text-black dark:text-subtext-dark mb-3">
                      <strong>Purpose:</strong> Remember your preferences and settings for a personalized experience.
                    </p>
                    <p className="text-black dark:text-subtext-dark">
                      <strong>Examples:</strong> Language preferences, theme selection, and saved filters.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3 flex items-center gap-2">
                      <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                      Marketing Cookies
                    </h3>
                    <p className="text-black dark:text-subtext-dark mb-3">
                      <strong>Purpose:</strong> Track your interests and deliver personalized advertisements.
                    </p>
                    <p className="text-black dark:text-subtext-dark">
                      <strong>Note:</strong> Only used if you enable marketing preferences. You can opt-out at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Cookies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="target"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    How We Use Cookies
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-black dark:text-subtext-dark text-lg"><strong>Authentication:</strong> Keep you logged in securely</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-black dark:text-subtext-dark text-lg"><strong>Security:</strong> Prevent fraud and protect your account</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-black dark:text-subtext-dark text-lg"><strong>Performance:</strong> Optimize website speed and functionality</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-black dark:text-subtext-dark text-lg"><strong>Analytics:</strong> Understand user behavior and improve services</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-black dark:text-subtext-dark text-lg"><strong>Personalization:</strong> Deliver relevant content and recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Managing Cookies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="settings"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Managing Your Cookies
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30 mb-6">
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                      You have full control over cookies on your device. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black dark:text-text-dark text-lg font-bold font-display mb-4">How to Disable Cookies:</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-black dark:text-subtext-dark"><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-amber-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="alert-triangle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Impact of Disabling Cookies
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed mb-3">
                      While you can disable cookies, please note that:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="text-amber-600 font-bold">⚠</span>
                        <span className="text-black dark:text-subtext-dark">Some website features may not work properly</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 font-bold">⚠</span>
                        <span className="text-black dark:text-subtext-dark">You may need to log in repeatedly</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 font-bold">⚠</span>
                        <span className="text-black dark:text-subtext-dark">Your preferences may not be saved</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="link"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Third-Party Cookies
                  </h2>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-4">
                  We may allow trusted third parties to place cookies on your device for analytics and advertising purposes. These include:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark"><strong>Google Analytics:</strong> For website traffic analysis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark"><strong>Razorpay:</strong> For secure payment processing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark"><strong>Social Media Platforms:</strong> For integration and tracking</span>
                  </li>
                </ul>
              </div>

              {/* Privacy & Security */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-blue-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-blue-600 text-2xl mt-1" data-lucide="shield-check"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Your Privacy & Security
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      We take your privacy seriously. Cookies are encrypted and stored securely. We never sell your data to third parties. For more information, please review our <a href="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Questions About Our Cookie Policy?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  We're here to help clarify how we use cookies and protect your privacy.
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
