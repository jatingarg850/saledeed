'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Simplified scroll behavior on mobile for better performance
      if (isMobile) {
        if (currentScrollY < 10) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false)
          setIsMobileMenuOpen(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
      } else {
        // Desktop behavior
        if (currentScrollY < 10) {
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
          setIsMobileMenuOpen(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events on mobile for better performance
    let ticking = false
    const throttledControlNavbar = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', isMobile ? throttledControlNavbar : controlNavbar, { passive: true })
    return () => window.removeEventListener('scroll', isMobile ? throttledControlNavbar : controlNavbar)
  }, [lastScrollY, isMobile])

  const services = [
    { name: 'Sale Deed', href: '/services/sale-deed' },
    { name: 'Gift Deed', href: '/services/gift-deed' },
    { name: 'Relinquishment Deed', href: '/services/relinquishment-deed' },
    { name: 'Will Agreement', href: '/services/will-agreement' },
    { name: 'Partition Deed', href: '/services/partition-deed' },
    { name: 'General Power of Authority', href: '/services/general-power-of-authority' },
    { name: 'Agreement to Sell', href: '/services/agreement-to-sell' },
    { name: 'Builder Buyer Agreement', href: '/services/builder-buyer-agreement' },
    { name: 'Rent Agreement', href: '/services/rent-agreement' },
    { name: 'Mutation Legal Document', href: '/services/mutation-legal-document' },
    { name: 'Other Deed & Agreement', href: '/services/other-deed-agreement' }
  ]
  return (
    <>
      <header className={`flex items-center justify-between whitespace-nowrap px-6 md:px-10 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 backdrop-blur-md shadow-sm dark:shadow-yellow-900/10 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <a href="/" className="flex items-center group transition-all duration-300">
          <video
            src="/ani/dfg.mp4"
            autoPlay
            muted
            playsInline
            className="h-16 w-24 object-cover group-hover:scale-105 transition-all duration-300 ease-out rounded-lg"
            style={{ 
              maxWidth: 'none'
            }}
            title="Everything from Sale to Deed"
            aria-label="Everything from Sale to Deed - Your Complete Property Solution"
            onEnded={(e) => {
              // Stop at the last frame when video ends
              e.currentTarget.pause();
            }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a className={`text-base font-medium leading-normal transition-colors ${currentPage === 'home'
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

          <a className={`text-base font-medium leading-normal transition-colors ${currentPage === 'services'
            ? 'text-amber-700 dark:text-secondary font-semibold'
            : 'text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary'
            }`} href="/services">Services</a>

          <a className={`text-base font-medium leading-normal transition-colors ${currentPage === 'documents'
            ? 'text-amber-700 dark:text-secondary font-semibold'
            : 'text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary'
            }`} href="/documents">Documents</a>

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="text-black dark:text-subtext-dark hover:text-amber-700 dark:hover:text-secondary text-base font-medium leading-normal transition-colors flex items-center gap-1">
              Company
              <i className="text-xs" data-lucide="chevron-down"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-yellow-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <a className={`block px-4 py-2 text-sm hover:bg-yellow-50 dark:hover:bg-slate-700 transition-colors ${currentPage === 'about'
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

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center size-10 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
          >
            <i data-lucide={isMobileMenuOpen ? "x" : "menu"} className="text-text-light dark:text-text-dark"></i>
          </button>

          <a href="/contact" className="hidden md:flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/40">
            <span className="truncate">Contact Us</span>
          </a>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container mobile-menu-scroll md:hidden">
          <div className="px-6 py-4 space-y-1 pb-8">
            {/* Home */}
            <div className="mobile-menu-item">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-menu-link text-base font-medium transition-colors ${currentPage === 'home'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Home
              </a>
            </div>

            {/* Deeds and Documents Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'deeds' ? null : 'deeds')}
                className="mobile-menu-link flex items-center justify-between w-full text-base font-medium text-black dark:text-subtext-dark"
              >
                <span>Deeds and documents</span>
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ transform: openMobileDropdown === 'deeds' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdown === 'deeds' && (
                <div className="pl-4 mt-2 space-y-1 mobile-dropdown-enter mobile-dropdown-enter-active">
                  <a
                    href="/services/sale-deed"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Sale Deed
                  </a>
                  <a
                    href="/services/gift-deed"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Gift Deed
                  </a>
                  <a
                    href="/services/relinquishment-deed"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Relinquishment Deed
                  </a>
                  <a
                    href="/services/will-agreement"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Will Agreement
                  </a>
                  <a
                    href="/services/partition-deed"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Partition Deed
                  </a>
                </div>
              )}
            </div>

            {/* Solution Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'solution' ? null : 'solution')}
                className="mobile-menu-link flex items-center justify-between w-full text-base font-medium text-black dark:text-subtext-dark"
              >
                <span>Solution</span>
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ transform: openMobileDropdown === 'solution' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdown === 'solution' && (
                <div className="pl-4 mt-2 space-y-1 mobile-dropdown-enter mobile-dropdown-enter-active">
                  <a
                    href="/solutions/buyer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    I am a Buyer
                  </a>
                  <a
                    href="/solutions/seller"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    I am a Seller
                  </a>
                  <a
                    href="/solutions/landlord"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    I am a Landlord
                  </a>
                  <a
                    href="/solutions/tenant"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    I am a Tenant
                  </a>
                  <a
                    href="/solutions/developer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    I am a Developer / Builder / Institution / Society
                  </a>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="mobile-menu-item">
              <a
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-menu-link text-base font-medium transition-colors ${currentPage === 'services'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Services
              </a>
            </div>

            {/* Documents */}
            <div className="mobile-menu-item">
              <a
                href="/documents"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`mobile-menu-link text-base font-medium transition-colors ${currentPage === 'documents'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Documents
              </a>
            </div>

            {/* Company Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'company' ? null : 'company')}
                className="mobile-menu-link flex items-center justify-between w-full text-base font-medium text-black dark:text-subtext-dark"
              >
                <span>Company</span>
                <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     style={{ transform: openMobileDropdown === 'company' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileDropdown === 'company' && (
                <div className="pl-4 mt-2 space-y-1 mobile-dropdown-enter mobile-dropdown-enter-active">
                  <a
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`mobile-menu-link text-sm hover:text-amber-700 dark:hover:text-secondary transition-colors ${currentPage === 'about'
                      ? 'text-amber-700 dark:text-secondary font-medium'
                      : 'text-black dark:text-white'
                      }`}
                  >
                    About Us
                  </a>
                  <a
                    href="/blogs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Blogs
                  </a>
                  <a
                    href="/privacy-policy"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/partner"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mobile-menu-link text-sm text-black dark:text-white hover:text-amber-700 dark:hover:text-secondary transition-colors"
                  >
                    Contact us
                  </a>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mt-6 mb-4">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-4 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold rounded-full transition-all duration-300 shadow-lg"
              >
                Contact Us
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mobile-menu-scroll-indicator"></div>
          </div>
        </div>
      )}
    </>
  );
}