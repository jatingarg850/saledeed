import Navigation from '../../../components/Navigation';

export default function BuyerSolutionPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="solutions" />

          <main className="px-6 md:px-10 lg:px-20 py-10">
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Solutions for Buyers
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Comprehensive property documentation services tailored for property buyers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50">
                <h2 className="text-black dark:text-text-dark text-3xl font-bold font-display mb-6">
                  Complete Buyer Support
                </h2>
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  As a property buyer, we provide end-to-end documentation services to ensure your purchase is legally sound and hassle-free.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold mb-3">Document Verification</h3>
                    <p className="text-black dark:text-subtext-dark">Complete verification of all property documents before purchase.</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                    <h3 className="text-black dark:text-text-dark text-xl font-bold mb-3">Legal Compliance</h3>
                    <p className="text-black dark:text-subtext-dark">Ensure all legal requirements are met for a smooth transaction.</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-xl transition-all">
                    Get Started
                    <i data-lucide="arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}