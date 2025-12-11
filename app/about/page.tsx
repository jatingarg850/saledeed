import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="about" />

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 mx-6 md:mx-10 lg:mx-20 my-10 rounded-3xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative max-w-7xl mx-auto px-8 py-20 md:py-28 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                  <i data-lucide="award" className="w-4 h-4"></i>
                  50+ Years of Excellence
                </div>

                <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl lg:text-7xl font-black tracking-tight font-display mb-6 leading-tight">
                 
                  <span className="block mt-2">Your Trusted Real Estate Partner</span>
                </h1>

                <p className="text-black dark:text-subtext-dark text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
                  For Every Property <span> Need-Indeed!</span><span className="font-bold text-amber-900 dark:text-primary">5 decades of trust.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="phone" className="w-5 h-5"></i>
                    Get Free Consultation
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 text-amber-900 dark:text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-amber-900 dark:border-primary"
                  >
                    <i data-lucide="briefcase" className="w-5 h-5"></i>
                    Our Services At A Glance
                  </a>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 text-black dark:text-subtext-dark text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <i data-lucide="check-circle" className="w-5 h-5 text-amber-600"></i>
                    <span>Everything Related To Property</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="users" className="w-5 h-5 text-amber-600"></i>
                    <span>100+ Team Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i data-lucide="star" className="w-5 h-5 text-amber-600"></i>
                    <span>1 Lac+  Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="max-w-6xl mx-auto">
              {/* Main Story Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-6">
                      About SaleDeed.com
                    </h2>
                    <div className="space-y-6 text-black dark:text-subtext-dark text-lg leading-relaxed">
                      <p>
                        We are a team of <strong className="text-amber-900 dark:text-primary">real estate professionals by background and hustlers by nature</strong>. Over the time, we have evolved into a team consisting of <strong className="text-amber-900 dark:text-primary">100's of experts from various fields in the real estate sector</strong>.
                      </p>
                      <p>
                        Each one of us contribute with their different expertise like knowledge of different locations on fingertips, rental masters for unmatched rental yields, Property management team to provide end to end property services and last but not the least <strong className="text-amber-900 dark:text-primary">Over 50 years of sacred and hard earned knowledge in real estate liaisoning & property investments</strong>.
                      </p>
                      <p>
                        Thus making us a <strong className="text-amber-900 dark:text-primary">one-stop shop for all your every property need - Indeed!</strong> Reach Us Today To Know Something About Your Property - You Think You Already Know!
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-12 border border-yellow-200/30">
                <div className="text-center mb-8">
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                    Our Mission
                  </h2>
                </div>
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                    Our goal is to make your real estate deal <strong className="text-amber-900 dark:text-primary">not only stress free but also complete</strong>, ensuring no legal flaw is left or created in the process. We don't follow a one-size-fits-all approach – instead, we carve and plan every case according to its unique requirements.
                  </p>
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-yellow-200/50 shadow-md">
                    <p className="text-black dark:text-text-dark font-medium text-lg italic">
                      "Always remember: the law has to be studied, understood, and implemented based on the case & situation. Not doing so may create problems for you and generations to come, or keep you unaware of exemptions and benefits you might otherwise gain."
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-md border border-yellow-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="shield-check"></i>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-text-dark font-display">Our Philosophy</h3>
                  </div>
                  <p className="text-black dark:text-subtext-dark leading-relaxed">
                    <strong className="text-amber-900 dark:text-primary">Property is an asset, not a liability.</strong> That's why we offer free call assistance and home visits to discuss your precious assets. Reach us to know more about what you think you already know.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-md border border-yellow-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="lock"></i>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-text-dark font-display">Privacy Kept At Every Step</h3>
                  </div>
                  <p className="text-black dark:text-subtext-dark leading-relaxed">
                    <strong className="text-amber-900 dark:text-primary">Icing on the cake:</strong> Hum badaam nahi khaate – isiliye aapki personal information yaad rakh kar kahin nahi bataate! Your privacy and confidentiality are our top priorities.
                  </p>
                </div>
              </div>

              {/* Services Approach */}
              <div className="bg-white dark:bg-slate-800/50 p-8 md:p-12 rounded-xl shadow-2xl mb-12 transform transition-transform duration-300 hover:-translate-y-2 border border-yellow-200/50">
                <div className="text-center mb-8">
                  <h2 className="text-black dark:text-text-dark text-4xl font-bold tracking-tight font-display mb-4">
                    Why Choose Us?
                  </h2>
                  <p className="text-black dark:text-subtext-dark text-lg max-w-3xl mx-auto">
                    We've built our reputation on trust, expertise, and personalized service that spans across 5 decades.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="text-white text-2xl" data-lucide="handshake"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-black dark:text-text-dark">Personalized Service</h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      Free home visits and call assistance.We come to you to discuss your property needs and provide tailored solutions.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="text-white text-2xl" data-lucide="award"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display text-black dark:text-text-dark">Quality Standards</h3>
                    <p className="text-black dark:text-subtext-dark leading-relaxed">
                      Rigorous standards followed by our entire network of hundreds of experts across different locations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 text-center shadow-lg border border-yellow-200/50">
                <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-6">
                  Ready to Experience the Difference?
                </h2>
                <p className="text-black dark:text-subtext-dark text-lg mb-8 max-w-3xl mx-auto">
                  Let our three generations of expertise work for you. Get started with a free consultation and discover why 1000 trust us with their most valuable assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                  <a href="/contact" className="group flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold leading-normal tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30">
                    <span className="truncate">Get Free Consultation</span>
                    <i className="ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                  </a>
                  <a href="/contact" className="group flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-amber-700 dark:text-white text-lg font-bold leading-normal tracking-wide border-2 border-amber-700 hover:bg-amber-700/10 transition-all duration-300 hover:-translate-y-1">
                    <span className="truncate">Call Us Now</span>
                    <i className="ml-2" data-lucide="phone"></i>
                  </a>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-yellow-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
            <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
                <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="text-primary flex-shrink-0" data-lucide="home"></i>
                    <h2 className="text-text-light dark:text-text-dark text-xl sm:text-2xl font-bold font-display">SaleDeed.com</h2>
                  </div>
                  <p className="mt-4 text-sm sm:text-base">A one-stop shop for every property need - indeed !</p>
                </div>

                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-base sm:text-lg font-display">Services</h3>
                  <ul className="mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Deed Drafting</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Document Verification</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Registration Assistance</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/calculator">Stamp Duty Calculator</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-base sm:text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Careers</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Blogs</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-base sm:text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Terms of Service</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Contact</h3>
                  <div className="mt-4 flex items-start gap-2 min-w-0">
                    <i className="text-primary flex-shrink-0 mt-0.5" data-lucide="mail"></i>
                    <a href="mailto:support@saledeed.com" className="text-sm sm:text-base hover:text-primary dark:hover:text-secondary transition-colors break-words">
                      support@saledeed.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 border-t border-yellow-200 dark:border-slate-700 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">© 2025 SaleDeed.com. All rights reserved.</p>
                <div className="flex space-x-4 sm:space-x-6">
                  
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}