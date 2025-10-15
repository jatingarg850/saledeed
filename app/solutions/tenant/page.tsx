import Navigation from '../../../components/Navigation';

export default function TenantSolutionPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="solutions" />

          <main className="px-6 md:px-10 lg:px-20 py-10">
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Solutions for Tenants
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto">
                Legal support and documentation services to protect tenant rights and interests.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50">
                <h2 className="text-black dark:text-text-dark text-3xl font-bold font-display mb-6">
                  Tenant Protection Services
                </h2>
                <p className="text-black dark:text-subtext-dark text-lg leading-relaxed mb-8">
                  We help tenants understand their rights and ensure proper rental documentation for secure tenancy.
                </p>
                
                <div className="text-center">
                  <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-xl transition-all">
                    Get Help
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