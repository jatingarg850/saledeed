import Navigation from '../../../components/Navigation';
import Link from 'next/link';

export default function VaastuConsultationPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="services" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Vaastu Consultation by SaleDeed.com
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Balance, comfort and positive energy in your home.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                  Vaastu is not about superstition — it's about balance, comfort and positive energy in a home. Many buyers today prefer a property that feels right the moment they walk in. A small correction or guidance can make a big difference in how a space functions and how people feel inside it.
                </p>
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                  That's why we offer practical Vaastu advice for homes, offices and shops.
                </p>
              </div>

              {/* What We Do */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="home"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    What We Do
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Check the layout and give simple, workable suggestions</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">No demolition or major changes required</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Focus on light, ventilation, placement and flow</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Help you understand if a property is Vaastu-friendly before you buy</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Suggest easy remedies that fit modern living</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why People Choose Vaastu */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="heart"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Why People Choose Vaastu
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">It brings clarity before buying or renting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Helps create a balanced, peaceful living environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Increases confidence in the property</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Many families prefer Vaastu-checked homes while making decisions</span>
                  </li>
                </ul>
              </div>

              {/* Ideal For */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="target"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Ideal For
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Buyers wanting to evaluate a property before finalising</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Sellers who want to make their property more appealing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Tenants shifting into a new house</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Offices and commercial spaces looking for better energy and productivity</span>
                  </li>
                </ul>
              </div>

              {/* Our Approach */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="lightbulb"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Our Approach
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    <strong>Simple, practical and modern.</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-black dark:text-subtext-dark text-lg">No rituals</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-black dark:text-subtext-dark text-lg">No fear-based suggestions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-black dark:text-subtext-dark text-lg">Only clear guidance you can actually use</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-green-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-green-600 text-2xl mt-1" data-lucide="check-circle"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-3">
                      Create a Space That Feels Right
                    </h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      Our Vaastu consultation helps you understand the energy flow of your property and make informed decisions about your living or working space.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Ready for a Vaastu Consultation?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Let us help you create a balanced and positive living environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="group flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold leading-normal tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30"
                  >
                    <span className="truncate">Book Consultation</span>
                    <i className="ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                  </a>
                  <Link 
                    href="/services"
                    className="flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-amber-700 dark:text-white text-lg font-bold leading-normal tracking-wide border-2 border-amber-700 hover:bg-amber-700/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="truncate">View All Services</span>
                  </Link>
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
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/calculator">Stamp Duty</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blog</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/terms-conditions">Terms</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy</a></li>
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
