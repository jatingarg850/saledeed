'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import AIChatbot from '../components/AIChatbot'

export default function Home() {
  const [showDoorstepModal, setShowDoorstepModal] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  // Handle ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showDoorstepModal) {
          setShowDoorstepModal(false)
        }
        if (showChatbot) {
          setShowChatbot(false)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showDoorstepModal, showChatbot])
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="home" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Compact Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              
              <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-20">
                <div className="text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                    <i data-lucide="shield-check" className="w-4 h-4"></i>
                    Trusted Property Documentation Platform
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-6 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Everything from Agreement to Will</span>
                    <span className="block text-3xl md:text-4xl mt-2 font-medium">Complete Property Documentation</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    From Sale Deeds to Wills, Exchange Deeds to Power of Attorney - all your property documentation needs covered by expert lawyers.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link href="/services" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <span>Start Your Deed Now</span>
                      <i data-lucide="arrow-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                      <i data-lucide="phone" className="w-5 h-5"></i>
                      Free Consultation
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <i data-lucide="users" className="w-5 h-5 text-green-600 dark:text-green-400"></i>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-text-light dark:text-text-dark text-sm">Expert Lawyers</div>
                        <div className="text-xs text-subtext-light dark:text-subtext-dark">Govt-Registered</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <i data-lucide="shield" className="w-5 h-5 text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-text-light dark:text-text-dark text-sm">100% Secure</div>
                        <div className="text-xs text-subtext-light dark:text-subtext-dark">Data Protection</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                        <i data-lucide="star" className="w-5 h-5 text-orange-600 dark:text-orange-400"></i>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-text-light dark:text-text-dark text-sm">4.9/5 Rating</div>
                        <div className="text-xs text-subtext-light dark:text-subtext-dark">10k+ Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                <div 
                  onClick={() => setShowDoorstepModal(true)}
                  className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200 cursor-pointer"
                >
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="map-pin"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Doorstep Advice</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Professional legal advisors at your home.</p>
                </div>
                
                <Link href="/documents" className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200 cursor-pointer">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="file-pen-line"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Get Your Deed Drafted</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">By registered property lawyers.</p>
                </Link>
                
                <a href="/calculator" className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200 cursor-pointer">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="calculator"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Calculate Stamp Duty</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Instant state-wise calculation.</p>
                </a>
                
                <Link href="/contact" className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200 cursor-pointer">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="headset"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Expert Advice</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Free 15-minute consultation.</p>
                </Link>

                <a href="/documents" className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="file-text"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Document Library</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Access legal document templates and formats.</p>
                </a>
              </div>
            </div>

            {/* Popular Deed Types */}
            <div className="py-16 bg-white dark:bg-background-dark rounded-xl border border-yellow-200">
              <h2 className="text-text-light dark:text-text-dark text-4xl font-bold tracking-tight text-center pb-12 font-times">Popular Deed Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCppKWYqPtTGEv7uWjlioc1NO5VJAcMnrOEfUokCtRsL15GNhn9eiBSSS2sYNW60VnncdcmApHMDs5SRJv1-LPMjYXJWq6DuYhldT6j--s32i-gzBrekBLL-KRP_Jp-BAznzx3J-hfQrDNaOa3tDTmuKBRbgGLlBh0K7lkKJ6NaQLQemNlJ7Tu1Qs93tFEHvFWcoRAXJnIGdWAorzOc4M00vV8eaI_scaPGRbgtnPa5FNKWmiybm6txj3aIlw00cnIBsPZfeXRCrbAS")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Sale Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">A crucial legal document proving the sale and transfer of property ownership from a seller to a buyer.</p>
                    <a href="/services/sale-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Draft a Sale Deed</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVYxhhPbzpDjQCrXXZsAlY5OFyCalEiT0nqMzNyNZOZdu2RzvnHBhz3W2d4esf9vfULSR09DrT6W3FrVJ3gWaBAT1jAPPuAIXdNmg8uemkE3sGhhihst8xeX9g6guvYpvvn-0lbpL1YRbIVadLcccWYszTEq-g3bGnu80p0qS3Ky2HoNuh0F4XnHiADuIg1x1AL4ovdjL0Rr8jPern_zcVYiXTSVf5N_uXH-IBJIRSdzWjCEpHFeaAEcIAy1sDCm9xswaK7JMeu2kb")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Gift Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">Transfer property ownership to a loved one as a gift, without any monetary exchange, through this document.</p>
                    <a href="/services/gift-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Create a Gift Deed</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv98UpkUzIaIzYR8Jx9l1mZrpnFDESlm7KRxBRlwKhkKkGM1lODIzlptL8i6jFFF9tRrw_LSPD4sPHZGoZp7R3K5UD-kmUw4lbR0oCVsxnQ9_L_0aBAMR5xuLogXpv0kwEAUwaW8roMUrftzK6irjThN1-QPmC7SANkHMc6dx8laeNS8FTogcZ23tcJOGynF0iAu72uPWw_ZEjl2ZXwxNYTrsfzgQNfk4nGYTnfB3pRNU4GZN4nz3IwiXm3GdQp_N-F_ni7IsP71w7")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Relinquishment Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">Allows a co-owner to gracefully give up their share in a joint property in favour of other co-owners.</p>
                    <a href="/services/relinquishment-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Make a Relinquishment Deed</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Will Agreement</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">A formal legal declaration specifying how property and assets will be distributed after death.</p>
                    <a href="/services/will-agreement" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Create a Will</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Partition Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">A legal document that divides jointly-owned property among co-owners, ensuring each gets a clear share.</p>
                    <a href="/services/partition-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Create Partition Deed</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Advice CTA */}
            <div className="my-20 bg-gradient-to-r from-primary to-yellow-800 dark:from-primary/80 dark:to-yellow-900 p-8 md:p-12 rounded-xl shadow-2xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-white text-4xl font-bold tracking-tight font-display">Expert Advice At Zero Price</h2>
                <p className="text-yellow-50 dark:text-yellow-200 mt-4 max-w-2xl text-lg">Unsure where to start? Our legal experts are here to help. Get a free consultation to understand your needs and get your questions answered, with no obligations.</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact" className="group flex min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-gradient-to-r from-secondary to-yellow-600 text-white text-xl font-bold leading-normal tracking-wide hover:from-yellow-600 hover:to-secondary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-secondary/40">
                  <span className="truncate">Book Free Consultation</span>
                  <i className="ml-2 transition-transform duration-300 group-hover:rotate-12" data-lucide="phone"></i>
                </Link>
              </div>
            </div>

            {/* Government Authorities Section */}
            <div className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl mb-16">
              <div className="text-center mb-12">
                <h2 className="text-text-light dark:text-text-dark text-4xl font-bold tracking-tight font-display mb-4">
                  We Work With All Major Authorities
                </h2>
                <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-3xl mx-auto">
                  Our expert team has direct experience with all government departments and authorities in Delhi for seamless property documentation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="building-2"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">MCD</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Municipal Corporation of Delhi</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Property tax assessments, building plan approvals, and municipal clearances for property transactions.
                  </p>
                </div>

                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="landmark"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">DDA</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Delhi Development Authority</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Land development permissions, layout approvals, and conversion certificates for DDA properties.
                  </p>
                </div>

                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="map"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">L&DO</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Land & Development Office</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Leasehold to freehold conversions, ground rent clearances, and land use change permissions.
                  </p>
                </div>

                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="file-check"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">SRO</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Sub-Registrar Office</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Document registration, stamp duty verification, and legal validation of property transfers.
                  </p>
                </div>

                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="receipt"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">Collector Office</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Property Tax Department</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Property tax assessments, revenue records, and mutation of property ownership records.
                  </p>
                </div>

                <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="shield-check"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light dark:text-text-dark font-display">NDMC</h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">New Delhi Municipal Council</p>
                    </div>
                  </div>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Special area clearances, premium property documentation, and Lutyens Delhi property services.
                  </p>
                </div>
              </div>

              {/* Video Section */}
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-yellow-200/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display mb-4">
                    See Our Authorities in Action
                  </h3>
                  <p className="text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                    Watch how our expert team navigates through different government offices to ensure your property documentation is completed efficiently.
                  </p>
                </div>
                
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <i className="text-white text-3xl" data-lucide="play"></i>
                  </div>
                  <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-2 font-display">
                    Complete Authority Process Walkthrough
                  </h4>
                  <p className="text-subtext-light dark:text-subtext-dark mb-6">
                    A comprehensive 5-minute video showing our team's interaction with MCD, DDA, L&DO, SRO, and Collector offices for a complete property registration process.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>MCD Clearance Process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>DDA Approval Steps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>L&DO Documentation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>SRO Registration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>Tax Assessment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="text-primary" data-lucide="check"></i>
                      <span>Final Handover</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Freehold vs Leasehold Guide */}
            <div className="py-16">
              <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-emerald-200/50 dark:border-slate-700 overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="building"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Freehold vs Leasehold Property in Delhi</h3>
                      <p className="text-emerald-100">What Every Buyer Must Know</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                    When you buy a property in Delhi, one question always pops up: is it freehold or leasehold? The terms may sound simple, but the implications are massive. Let's break it down in the most practical way.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Leasehold */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                        <i data-lucide="clock" className="w-5 h-5 text-orange-500"></i>
                        What is Leasehold Property?
                      </h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-4">
                        A leasehold property means you are not the absolute owner. The land belongs to an authority (like DDA or L&DO), and you get the right to use it for a fixed period — usually 30 to 99 years. You are essentially a long-term tenant.
                      </p>
                      <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                        <li className="flex items-start gap-2">
                          <i data-lucide="minus" className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                          Once the lease period ends, you must get it renewed
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="minus" className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                          Any sale or transfer requires approval/NOC from the authority
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="minus" className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"></i>
                          Banks are cautious in giving loans since ownership is not permanent
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                          In short: you use the property, but the government authority remains the actual landlord.
                        </p>
                      </div>
                    </div>

                    {/* Freehold */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                        <i data-lucide="home" className="w-5 h-5 text-green-500"></i>
                        What is Freehold Property?
                      </h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-4">
                        Freehold means complete ownership. The land and the building both belong to you without any restrictions. You can sell, gift, mortgage, or will it without running from one government office to another.
                      </p>
                      <ul className="space-y-2 text-sm text-subtext-light dark:text-subtext-dark">
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"></i>
                          No renewal hassles
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"></i>
                          Full right to transfer ownership
                        </li>
                        <li className="flex items-start gap-2">
                          <i data-lucide="check" className="w-4 h-4 text-green-500 mt-1 flex-shrink-0"></i>
                          Easy bank loans and higher resale value
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                          Investors and homebuyers both prefer freehold because it gives clarity and long-term security.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conversion Process */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                      <i data-lucide="refresh-cw" className="w-5 h-5 text-primary"></i>
                      How to Convert Leasehold into Freehold (Through DDA & L&DO)
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark mb-4">
                      Most leasehold properties in Delhi fall under DDA or L&DO. The good news — you can convert them into freehold.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">The process in short:</h5>
                      <ol className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                        <li>1. Submit an application to DDA or L&DO</li>
                        <li>2. Pay the prescribed conversion charges and stamp duty</li>
                        <li>3. Provide required documents like allotment letter, possession slip, and lease papers</li>
                        <li>4. Once verified, the authority issues a Conveyance Deed, making you the absolute owner</li>
                      </ol>
                    </div>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">
                      After conversion, your property is no longer under the leasehold trap. It becomes a freehold asset with full ownership rights.
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center border border-primary/20">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">👉 Bottom Line</h4>
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                      Leasehold is like being a tenant of the government; Freehold means you are the true owner. In Delhi's real estate market, freehold always commands more value, less hassle, and stronger investment security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circle Rate vs Market Rate Guide */}
            <div className="py-16">
              <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-purple-200/50 dark:border-slate-700 overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="text-white text-xl" data-lucide="trending-up"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Circle Rate vs Market Rate</h3>
                      <p className="text-purple-100">The Real Truth Behind Property Valuation in Delhi</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                    When you step into the property market in Delhi, one term you will definitely hear is <strong>circle rate</strong>. Another is <strong>market rate</strong>. Most people nod their head as if they know the difference, but honestly—this is where confusion starts. And a wrong understanding here can either cost you lakhs or land you into a legal tangle.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Circle Rate */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                        <i data-lucide="file-text" className="w-5 h-5 text-blue-500"></i>
                        What exactly is Circle Rate?
                      </h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-4">
                        Circle rate is nothing but the minimum price per square foot/yard set by the government for property transactions in a particular locality. Think of it as the government's official "rate card." You cannot legally register a property below this rate.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example:</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          If the circle rate in South Delhi for a flat is ₹1,00,000 per sq. mtr, and your flat is 100 sq. mtr, then the minimum value for registry will be ₹1 crore—even if you bought it cheaper.
                        </p>
                      </div>
                    </div>

                    {/* Market Rate */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                        <i data-lucide="bar-chart" className="w-5 h-5 text-green-500"></i>
                        What about Market Rate?
                      </h4>
                      <p className="text-subtext-light dark:text-subtext-dark mb-4">
                        Market rate is the real price at which buyers and sellers are actually dealing. It depends on demand, supply, amenities, builder reputation, location premium, and sometimes—just negotiation skills.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Example:</h5>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          That same 100 sq. mtr flat might be selling for ₹1.5 crore in the open market.
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                          So registry may happen at ₹1 crore (circle rate), but you'll end up paying the seller ₹1.5 crore. The gap is where complications creep in.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Why This Difference Matters */}
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                      <i data-lucide="alert-triangle" className="w-5 h-5 text-orange-500"></i>
                      Why does this difference matter?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                        <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">1. Extra Cash Component</h5>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          If market rate {'>'} circle rate, buyers and sellers often deal partly in cash to cover the difference. Risky, unaccounted, and a big red flag for tax authorities.
                        </p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">2. Higher Stamp Duty & Taxes</h5>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Registry charges, stamp duty, and capital gains are calculated on the higher of circle rate or declared transaction value.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">3. Home Loan Issues</h5>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Banks usually lend on whichever is lower between market rate and circle rate. So if your property's market rate is much higher, be ready to arrange extra money.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Practical Tips */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                      <i data-lucide="lightbulb" className="w-5 h-5 text-emerald-600"></i>
                      Practical Tips Before You Buy or Sell
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Check the circle rate of your area on Delhi Govt. Revenue Dept. website before finalizing any deal.',
                        'Don\'t ignore registry value while calculating your tax liabilities.',
                        'Avoid under-the-table deals—it may look attractive today, but can kill resale value and even create legal troubles later.',
                        'Negotiate smartly—sometimes a seller quotes market rate way above reality. Compare with circle rate and use it to bargain.'
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <i data-lucide="check-circle" className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0"></i>
                          <p className="text-sm text-emerald-700 dark:text-emerald-300">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Line */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center border border-primary/20">
                    <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">The Bottom Line</h4>
                    <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                      Circle rate is the government's way of keeping a floor under property values, while market rate is the reality check of what people are actually paying. As a buyer or seller, the real game is to strike a balance—stay legal, stay practical, and don't get trapped in cash-heavy deals.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                      <p className="text-sm font-medium text-primary">
                        💡 Want to navigate this without confusion? At SaleDeed.com, we simplify the paperwork, check the legalities, and make sure your transaction is smooth and transparent—exactly the way property deals should be.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="py-16">
              <h2 className="text-text-light dark:text-text-dark text-4xl font-bold tracking-tight text-center pb-12 font-display">Trusted By Thousands Across India</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-yellow-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4 text-secondary">
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark italic">"The process was so simple and fast. SaleDeed.com handled everything professionally. Highly recommended for anyone dealing with property documents."</p>
                  <div className="flex items-center mt-6">
                    <img alt="User avatar" className="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRWYPynWC5k5uu7_FPhIvt9WKB7Hnp1OcZbi2wZL2pi0oMIEuo7JLUWlyycgyES-N9KF4Y0uV14nrCCcP2SaMoqORDE2P-is-zgIPi_GJKNivbVWvLqyOlzLvlF4KmUs87PHtM8MWfyQbAgHAD18C3UWhWHIq_yTkr0w3UuzmxswA9W3GG2GILPM8gwmvASRDxT35wvcSLQ1ECiru0gozseTj9qDejPfYm09D8uD7qU4DZ1cVkdRHzDnLNYnZdj0IF8Scyafjvouc"/>
                    <div>
                      <p className="font-bold text-text-light dark:text-text-dark font-display">Priya Sharma</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Mumbai</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-yellow-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4 text-secondary">
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark italic">"I was dreading the paperwork, but their team made it a breeze. The doorstep service is a game-changer. Excellent support!"</p>
                  <div className="flex items-center mt-6">
                    <img alt="User avatar" className="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWmuMBONJwWlXUUows2Cm4oROk1Ze9__nSak4snIwBXTbutQ2MDWYY_7mEyjS_PEwEDwDpW39iRAbUJkVwEi5cJYcC0bFYdSb5UHB4GX48TnICC6NRYuHb0c3dAm6j9ap3QFIbFu4KKJ963joq53MgvyzmKArqBvAmXB3HYkzHuktXAJkuAy-yC1naH9paum66JFCg8n3lRjlw4bnNXolLSWl7mXjhiQYufLg7wNXmFbXQioemgbMzuOfS2J4K_FYWXNe-rdwyefRa"/>
                    <div>
                      <p className="font-bold text-text-light dark:text-text-dark font-display">Arjun Singh</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Delhi</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-yellow-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4 text-secondary">
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                    <i className="fill-current" data-lucide="star"></i>
                  </div>
                  <p className="text-subtext-light dark:text-subtext-dark italic">"Got my gift deed drafted and registered without any hassle. The expert advice was invaluable. A truly trustworthy platform."</p>
                  <div className="flex items-center mt-6">
                    <img alt="User avatar" className="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqL2rTtY27a8lB3uB8OaPpQ2qvkIfweLuQshPuc8r_N4MTraw70d_8lxnZER4jD0JigHRT9djXddsz5QZ8kY6AmtAc0DhR25sdnTBaFkl4-G3vQqQzrAaofSM3BOK3YLqVTqD4-vm2OduE0MvKrrw67EN7fvDS0AITkanro0hDG0lj6z_DPHCwS7B2_wby-2Awn3IqkvVr_r3ndHx4Fb_k9nrnPLV9WIhPGc9e9B11qW6klWxvp93SEK9fUDhDghy50bAHLq9yFwCp"/>
                    <div>
                      <p className="font-bold text-text-light dark:text-text-dark font-display">Ananya Reddy</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">Bengaluru</p>
                    </div>
                  </div>
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
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Contact Us</a></li>
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
                <p className="text-base">© 2024 SaleDeed.com. All rights reserved.</p>
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

      {/* Doorstep Advice Modal */}
      {showDoorstepModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDoorstepModal(false)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i data-lucide="map-pin" className="w-5 h-5 text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold">Doorstep Advice Service</h3>
                </div>
                <button
                  onClick={() => setShowDoorstepModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <i data-lucide="x" className="w-5 h-5 text-white"></i>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="home" className="w-8 h-8 text-primary"></i>
                </div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">
                  Expert Legal Advice at Your Doorstep
                </h4>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                  In our doorstep service, our property advisor will visit you, review your case and documents, 
                  and guide you on what needs to be done and how to proceed.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                  <span className="text-sm text-text-light dark:text-text-dark">Personal consultation at your home</span>
                </div>
                <div className="flex items-center gap-3">
                  <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                  <span className="text-sm text-text-light dark:text-text-dark">Document review and analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                  <span className="text-sm text-text-light dark:text-text-dark">Step-by-step guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <i data-lucide="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0"></i>
                  <span className="text-sm text-text-light dark:text-text-dark">Customized action plan</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 mb-6 text-center">
                <div className="text-2xl font-bold text-primary mb-1">₹999</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">One-time consultation fee</div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/918800505050?text=Hello,%20I%20would%20like%20to%20book%20a%20doorstep%20advice%20service%20for%20₹999.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg"
              >
                <i data-lucide="message-circle" className="w-5 h-5"></i>
                Book via WhatsApp
              </a>

              <p className="text-xs text-center text-subtext-light dark:text-subtext-dark mt-3">
                Click to chat with us on WhatsApp and schedule your consultation
              </p>
              <p className="text-xs text-center text-gray-400 mt-2">
                Press ESC or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating AI Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowChatbot(true)}
          className="group bg-gradient-to-r from-primary to-secondary text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse hover:animate-none"
          title="Ask AI Assistant"
        >
          <i data-lucide="bot" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"></i>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-black text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Ask AI about property docs
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      </div>

      {/* AI Chatbot Modal */}
      <AIChatbot 
        isOpen={showChatbot} 
        onClose={() => setShowChatbot(false)} 
      />
    </div>
  )
}