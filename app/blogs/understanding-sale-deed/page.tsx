import Navigation from '../../../components/Navigation';

export default function UnderstandingSaleDeedPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="blogs" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <a href="/blogs" className="text-amber-700 hover:text-amber-800 transition-colors">Blogs</a>
              <i className="text-gray-400" data-lucide="chevron-right"></i>
              <span className="text-black dark:text-text-dark">Understanding a Sale Deed</span>
            </div>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Sale Deed
                </span>
              </div>

              <h1 className="text-black dark:text-text-dark text-4xl md:text-5xl font-extrabold tracking-tight font-display mb-6">
                Understanding a Sale Deed
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <span>5 min read</span>
                <span>•</span>
                <span>Property Transfer</span>
                <span>•</span>
                <span>Legal Document</span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Understanding a Sale Deed"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-black dark:text-text-dark">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">What is a Sale Deed?</h2>
                <p className="mb-6 leading-relaxed">
                  A sale deed is one of the most important legal documents in real estate transactions. It serves as concrete proof of the transfer of ownership from the seller to the buyer. This document is essential for establishing legal ownership and is required for various purposes including loan applications, property registration, and future transactions.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Key Components of a Sale Deed</h2>
                <p className="mb-4 leading-relaxed">
                  A comprehensive sale deed must include several critical elements:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Property Details:</strong> Complete description including survey numbers, boundaries, and measurements</li>
                  <li><strong>Parties Information:</strong> Full details of both buyer and seller including addresses and identification</li>
                  <li><strong>Consideration Amount:</strong> The agreed purchase price and payment terms</li>
                  <li><strong>Title History:</strong> Previous ownership details and chain of title</li>
                  <li><strong>Encumbrances:</strong> Any existing loans, mortgages, or legal issues</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Legal Requirements</h2>
                <p className="mb-6 leading-relaxed">
                  For a sale deed to be legally valid, it must comply with several requirements under Delhin law. The document must be executed on stamp paper of appropriate value, signed by both parties in the presence of witnesses, and registered with the local sub-registrar office within four months of execution.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Registration Process</h2>
                <p className="mb-6 leading-relaxed">
                  The registration process involves several steps including document verification, payment of stamp duty and registration fees, biometric verification of parties, and final registration. Our expert team at SaleDeed.com ensures this entire process is handled smoothly and efficiently.
                </p>

                <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                  <h3 className="text-lg font-bold mb-2 text-amber-800 dark:text-amber-200">Expert Tip</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Always ensure that the sale deed is registered within the stipulated time frame. Unregistered sale deeds have limited legal validity and may cause complications in future transactions.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Common Mistakes to Avoid</h2>
                <p className="mb-4 leading-relaxed">
                  Several common mistakes can invalidate or complicate a sale deed:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Incorrect property description or survey numbers</li>
                  <li>Missing or incorrect party details</li>
                  <li>Inadequate stamp duty payment</li>
                  <li>Failure to register within the prescribed time limit</li>
                  <li>Not conducting proper due diligence on property title</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Why Choose Professional Help?</h2>
                <p className="mb-6 leading-relaxed">
                  Given the complexity and legal implications of sale deeds, it's crucial to work with experienced professionals. At SaleDeed.com, our team of registered lawyers and property experts ensure that your sale deed is drafted accurately, complies with all legal requirements, and protects your interests throughout the transaction process.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-yellow-800 p-8 rounded-xl text-center mt-12">
                <h3 className="text-white text-2xl font-bold mb-4">Need Help with Your Sale Deed?</h3>
                <p className="text-yellow-100 mb-6">Our expert team is ready to assist you with professional sale deed drafting and registration services.</p>
                <a href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors">
                  Get Expert Assistance
                </a>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-black dark:text-text-dark">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="/blogs/gift-deed-guide" className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-text-dark">What is a Gift Deed?</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Learn about gift deeds and family property transfers.</p>
                  </a>
                  <a href="/blogs/partition-deed-explained" className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-text-dark">Partition Deed Explained</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Understanding property division through partition deeds.</p>
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
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
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