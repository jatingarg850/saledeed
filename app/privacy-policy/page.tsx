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
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="shield-check"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Privacy Policy
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                    We are proud to make you aware of our top notch privacy policy following our tagline & our brand promise 
                    <strong className="text-amber-800 dark:text-primary"> (privacy kept at every step)</strong>. We make sure that all your data like name, contact number, property address, your enquiry, purpose, work done by us and the process followed is never ever disclosed anytime, anywhere to anyone.
                  </p>
                  
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                    We understand how crucial is the information so even if your son/wife/brother etc comes to us to enquire we will never reveal. We assure you of this with <strong className="text-amber-800 dark:text-primary">100% guarantee</strong>. It will always be between us.
                  </p>
                </div>
              </div>

              {/* Refund Policy Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="credit-card"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Refund Policy
                  </h2>
                </div>

                {/* Non Refundable Services */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <i className="text-red-600 text-lg" data-lucide="x-circle"></i>
                    Non Refundable Services
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    Services like <strong className="text-amber-800 dark:text-primary">verification, drafting, valuation reports and consultation fees</strong> are non refundable once paid.
                  </p>
                </div>

                {/* Refundable Situations */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <i className="text-green-600 text-lg" data-lucide="check-circle"></i>
                    Refundable Situations
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    If payment is made and services could not be delivered due to <strong className="text-amber-800 dark:text-primary">technical error or unavailability from our side</strong>.
                  </p>
                </div>

                {/* Partial Refund */}
                <div className="mb-8">
                  <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-4 flex items-center gap-2">
                    <i className="text-amber-600 text-lg" data-lucide="minus-circle"></i>
                    Partial Refund
                  </h3>
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    If only a part of service was delivered, Refund may be made after deducting charges for work done. The company <strong className="text-amber-800 dark:text-primary">saledeed.com will have exclusive and sole right to decide the amount of Refund</strong> to be made in this case.
                  </p>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50 mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                    <i className="text-white text-xl" data-lucide="phone"></i>
                  </div>
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display">
                    Contact Us
                  </h2>
                </div>
                
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-6">
                  The company will have <strong className="text-amber-800 dark:text-primary">sole and exclusive right to change any offer or pricing of any service</strong> without any prior information.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-yellow-200/30">
                  <p className="text-black dark:text-subtext-dark text-lg leading-relaxed">
                    For any questions regarding our Privacy Policy or Refund Policy, please feel free to contact our support team. We're here to help you understand our policies and address any concerns you may have.
                  </p>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <i className="text-amber-600 text-2xl mt-1" data-lucide="alert-triangle"></i>
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
                  <p className="mt-4 text-base">Simplifying property documentation for everyone across Delhi.</p>
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