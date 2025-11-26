import Navigation from '../../components/Navigation';
import Link from 'next/link';

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
                Learn how we use cookies to enhance your experience on our platform.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
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

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Have Questions About Cookies?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Our team is ready to help clarify any aspect of our cookie policy.
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
