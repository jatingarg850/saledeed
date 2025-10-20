import Navigation from '../../../components/Navigation';

export default function GiftDeedGuidePage() {
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
              <span className="text-black dark:text-text-dark">What is a Gift Deed?</span>
            </div>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                  Gift Deed
                </span>
              </div>
              
              <h1 className="text-black dark:text-text-dark text-4xl md:text-5xl font-extrabold tracking-tight font-display mb-6">
                What is a Gift Deed?
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <span>4 min read</span>
                <span>•</span>
                <span>Family Transfer</span>
                <span>•</span>
                <span>Legal Agreement</span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="What is a Gift Deed"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-black dark:text-text-dark">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Understanding Gift Deeds</h2>
                <p className="mb-6 leading-relaxed">
                  A gift deed is a legal document that facilitates the transfer of property from one person (donor) to another (donee) without any monetary consideration. This type of transfer is commonly used within families to pass property from parents to children or between spouses, making it an essential tool for estate planning and family wealth management.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Key Features of Gift Deeds</h2>
                <p className="mb-4 leading-relaxed">
                  Gift deeds have several distinctive characteristics that set them apart from other property transfer documents:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>No Consideration:</strong> The transfer happens without any payment or exchange of money</li>
                  <li><strong>Voluntary Transfer:</strong> The donor must willingly and voluntarily transfer the property</li>
                  <li><strong>Immediate Effect:</strong> Once executed and registered, the transfer takes immediate effect</li>
                  <li><strong>Irrevocable:</strong> Generally, gift deeds cannot be revoked once completed</li>
                  <li><strong>Registration Required:</strong> Must be registered to be legally valid</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Legal Requirements</h2>
                <p className="mb-6 leading-relaxed">
                  For a gift deed to be legally valid under the Transfer of Property Act, 1882, several conditions must be met. The donor must have a clear title to the property, be of sound mind, and not be under any coercion. The deed must be executed on appropriate stamp paper, signed by the donor in the presence of at least two witnesses, and registered with the local sub-registrar.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Tax Implications</h2>
                <p className="mb-6 leading-relaxed">
                  Gift deeds have specific tax implications for both the donor and donee. While the donor may be liable for capital gains tax if the property has appreciated, the donee may need to pay tax on the value of the gift received. However, gifts between certain family members are exempt from tax under Section 56 of the Income Tax Act.
                </p>

                <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                  <h3 className="text-lg font-bold mb-2 text-amber-800 dark:text-amber-200">Important Note</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Gift deeds between family members (spouse, children, parents, siblings) are generally exempt from tax, but it's advisable to consult with a tax expert for specific situations.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">When to Use a Gift Deed</h2>
                <p className="mb-4 leading-relaxed">
                  Gift deeds are particularly useful in several scenarios:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Estate planning and succession planning</li>
                  <li>Transferring property to children during the donor's lifetime</li>
                  <li>Adding a spouse's name to property ownership</li>
                  <li>Charitable donations of property</li>
                  <li>Avoiding lengthy probate processes</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Documentation Required</h2>
                <p className="mb-4 leading-relaxed">
                  To execute a gift deed, you'll need several documents:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Original property documents and title deeds</li>
                  <li>Identity and address proof of both donor and donee</li>
                  <li>Property valuation certificate</li>
                  <li>No objection certificate from family members (if applicable)</li>
                  <li>Passport-sized photographs of both parties</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-black dark:text-text-dark">Professional Assistance</h2>
                <p className="mb-6 leading-relaxed">
                  Given the legal complexities and tax implications involved in gift deeds, it's crucial to seek professional help. Our experienced team at SaleDeed.com ensures that your gift deed is properly drafted, all legal requirements are met, and the registration process is completed smoothly.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-yellow-800 p-8 rounded-xl text-center mt-12">
                <h3 className="text-white text-2xl font-bold mb-4">Need Help with Gift Deed Documentation?</h3>
                <p className="text-yellow-100 mb-6">Our legal experts can guide you through the entire gift deed process with complete compliance and peace of mind.</p>
                <a href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-50 transition-colors">
                  Get Professional Help
                </a>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-black dark:text-text-dark">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="/blogs/understanding-sale-deed" className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-text-dark">Understanding a Sale Deed</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Complete guide to sale deeds and property transfers.</p>
                  </a>
                  <a href="/blogs/will-agreement-importance" className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <h4 className="font-bold text-lg mb-2 text-black dark:text-text-dark">The Importance of a Will Agreement</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Why having a will is crucial for estate planning.</p>
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
                  <p className="mt-4 text-base">Simplifying property documentation for everyone across India.</p>
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