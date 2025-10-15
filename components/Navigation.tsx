interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 md:px-10 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 backdrop-blur-md shadow-sm dark:shadow-yellow-900/10">
      <div className="flex items-center gap-3">
        <i className="text-amber-700" data-lucide="home"></i>
        <h2 className="text-black dark:text-text-dark text-2xl font-bold tracking-tight font-display">SaleDeed.com</h2>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
        <a className={`text-base font-medium leading-normal transition-colors ${
          currentPage === 'home' 
            ? 'text-amber-700 dark:text-secondary font-semibold' 
            : 'text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary'
        }`} href="/">Home</a>
        
        {/* Deeds and Documents Dropdown */}
        <div className="relative group">
          <button className="text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary text-base font-medium leading-normal transition-colors flex items-center gap-1">
            Deeds and documents
            <i className="text-xs" data-lucide="chevron-down"></i>
          </button>
          <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-yellow-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/services/sale-deed">Sale Deed</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/services/gift-deed">Gift Deed</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/services/will-agreement">Will Agreement</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/services/partition-deed">Partition Deed</a>
            </div>
          </div>
        </div>

        {/* Solution Dropdown */}
        <div className="relative group">
          <button className="text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary text-base font-medium leading-normal transition-colors flex items-center gap-1">
            Solution
            <i className="text-xs" data-lucide="chevron-down"></i>
          </button>
          <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-yellow-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <a className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap" href="/solutions/buyer">I am a Buyer</a>
              <a className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap" href="/solutions/seller">I am a Seller</a>
              <a className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap" href="/solutions/landlord">I am a Landlord</a>
              <a className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap" href="/solutions/tenant">I am a Tenant</a>
              <a className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/solutions/developer">I am a Developer / Builder / Institution / Society</a>
            </div>
          </div>
        </div>

        <a className={`text-base font-medium leading-normal transition-colors ${
          currentPage === 'services' 
            ? 'text-amber-700 dark:text-secondary font-semibold' 
            : 'text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary'
        }`} href="/services">Services</a>
        
        {/* Company Dropdown */}
        <div className="relative group">
          <button className="text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary text-base font-medium leading-normal transition-colors flex items-center gap-1">
            Company
            <i className="text-xs" data-lucide="chevron-down"></i>
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-yellow-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <a className={`block px-4 py-2 text-sm hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors ${
                currentPage === 'about' 
                  ? 'text-amber-700 dark:text-secondary font-medium' 
                  : 'text-black dark:text-white'
              }`} href="/about">About Us</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/blogs">Blogs</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/privacy-policy">Privacy Policy</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/partner">Partner With Us</a>
              <a className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors" href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex items-center">
        <a href="/contact" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/40">
          <span className="truncate">Contact Us</span>
        </a>
      </div>
    </header>
  );
}