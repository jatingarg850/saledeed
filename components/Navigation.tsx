'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

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
          <div className="rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slideInFromLeft-once relative overflow-hidden group-hover:rotate-1 video-logo-container">
            {/* Background pulse rings - only on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10"></div>
            </div>

            <video
              src="/documents/WhatsApp Video 2025-10-21 at 18.56.42_bfdd857e.mp4"
              autoPlay
              muted
              playsInline
              className="h-16 w-24 object-cover max-w-none group-hover:scale-110 transition-all duration-500 ease-out relative z-10 rounded-lg logo-video"
              style={{ maxWidth: 'none' }}
              title="Everything from Sale to Deed"
              aria-label="Everything from Sale to Deed - Your Complete Property Solution"
              onEnded={(e) => {
                // Stop at the last frame when video ends
                e.currentTarget.pause();
              }}
            />

            {/* Enhanced glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/30 to-secondary/30 blur-md -z-10"></div>

            {/* Border on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
          </div>
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-3">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${currentPage === 'home'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Home
              </a>

              <a
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${currentPage === 'services'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Services
              </a>

              <a
                href="/documents"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${currentPage === 'documents'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                Documents
              </a>

              <a
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${currentPage === 'about'
                  ? 'text-amber-700 dark:text-secondary font-semibold'
                  : 'text-black dark:text-subtext-dark'
                  }`}
              >
                About Us
              </a>

              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-black dark:text-subtext-dark"
              >
                Contact
              </a>
            </div>

            {/* Services Section */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Our Services</h3>
              <div className="grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}