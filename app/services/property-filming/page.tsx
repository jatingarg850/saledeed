import Navigation from '../../../components/Navigation';
import Link from 'next/link';

export default function PropertyFilmingPage() {
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
                Property Filming by SaleDeed.com
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                #DikhegaTohBikega — Good presentation sells. It's that simple.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                  Most buyers decide in the first 20–30 seconds whether they want to see a property in person or not. A well-shot video increases interest, builds trust and makes your property stand out from the crowd.
                </p>
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                  That's why we offer professional property filming.
                </p>
              </div>

              {/* Why Filming Matters */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="video"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Why Filming Matters
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">A video shows the actual space, not just angles of photos.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Buyers get a real feel of the rooms, layout and surroundings.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Your property gets more clicks, longer viewing time and more enquiries.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg"><strong>Properties with videos have 60% higher chances of getting sold</strong> compared to listings with only photos.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <i className="text-primary text-xl mt-1" data-lucide="check-circle"></i>
                    </div>
                    <div>
                      <p className="text-black dark:text-subtext-dark text-lg">Serious buyers filter out "no video" properties first.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What You Get */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="gift"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    What You Get
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Clean, steady walkthrough video of the entire property</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Exterior area, approach road and surroundings covered</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Fast editing with clean transitions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Delivered in HD, suitable for website and WhatsApp</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Makes your listing look premium and trustworthy</span>
                  </li>
                </ul>
              </div>

              {/* Why It Works */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="lightbulb"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Why It Works
                  </h2>
                </div>

                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                  A video builds confidence. When buyers see the property clearly, they feel it is genuine. This reduces time wasted on unnecessary visits and brings only serious people to the table.
                </p>
              </div>

              {/* Perfect For */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="target"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Perfect For
                  </h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Selling a property faster</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Attracting buyers from other states or NRIs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Premium homes, builder floors, commercial spaces</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-black dark:text-subtext-dark text-lg">Tenants who want clarity before visiting</span>
                  </li>
                </ul>
              </div>

              {/* Tagline */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-amber-600 mb-12">
                <div className="flex items-start gap-4">
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="star"></i>
                  <div>
                    <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display">
                      #DikhegaTohBikega
                    </h3>
                    <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mt-2">
                      When it's shown well, it sells well.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12">
                <h3 className="text-black dark:text-text-dark text-2xl font-bold font-display mb-4">
                  Ready to Showcase Your Property?
                </h3>
                <p className="text-black dark:text-subtext-dark text-lg mb-8">
                  Let us create a professional video that sells your property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="group flex min-w-[200px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold leading-normal tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30"
                  >
                    <span className="truncate">Book Filming Now</span>
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
