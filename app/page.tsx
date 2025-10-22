'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import AIChatbot from '../components/AIChatbot'
import Testimonials from '../components/Testimonials'
import StampDutyCalculator from '../components/StampDutyCalculator'
import PropertyDocumentCard from '../components/PropertyDocumentCard'

export default function Home() {
  const [showDoorstepModal, setShowDoorstepModal] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  const propertyDocuments = [
    {
      title: 'Sale Deed',
      description: 'We understand your property details and requirements. Drafting – Our legal experts prepare a proper Sale Deed as per law. Verification – We ensure that all property details, buyer, and seller information are accurate. Registration Support – Guidance is provided for payment of stamp duty and registration of the Sale Deed at the Sub-Registrar Office.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755244760/myApp/documents/uv4wuit3xgt4ybiqklhs.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755244763/myApp/documents/kfskib3lvg2rmmhwn9qv.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755244765/myApp/documents/r2pvs0a0p4fqtanwwkn1.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755244768/myApp/documents/c17kzurt0ugwztiun78r.jpg'
      ],
      link: '/services/sale-deed'
    },
    {
      title: 'Gift Deed',
      description: 'We gather details of your property/asset and understand your gifting requirements. Drafting – Our legal experts prepare a legally valid Gift Deed with all required details. Verification – We ensure all details of the donor, donee, and property are correct. Registration Support – Guidance is provided for stamp duty payment and registration at the Sub-Registrar Office.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755245184/myApp/documents/ccj6p8th135dkoenulbs.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755245186/myApp/documents/icqxhluxx1puqqhndszo.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755245187/myApp/documents/deheu7ehby4xhyrej8fj.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755245188/myApp/documents/kxrcig4n4bhnohdt7an1.jpg'
      ],
      link: '/services/gift-deed'
    },
    {
      title: 'Relinquishment Deed',
      description: 'We review the property, co-ownership details, and the exact share to be relinquished. Drafting – Legal experts prepare a proper Relinquishment Deed in compliance with the law. Verification – All ownership details, parties information, and property documents are verified. Registration Support – Guidance is provided for stamp duty payment and registration at the Sub-Registrar Office.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755089938/myApp/documents/r4eq4zo0dhycp5f4dytt.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755089939/myApp/documents/l3j6gtksczz6clbvsoty.jpg'
      ],
      link: '/services/relinquishment-deed'
    },
    {
      title: 'General Power of Authority',
      description: 'Understand your requirements and powers to be delegated. Drafting: Prepare a customized, legally sound GPA document. Verification: Ensure all details, limits, and legal clauses are accurate. Execution Support: Guide you through signing, notarization, and witness formalities. Registration Assistance: Help with official registration if needed for property or legal matters.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755090644/myApp/documents/rczmgioijvdyrzxtyhxb.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755090646/myApp/documents/h7ttbfvj3ff4fu967vpe.jpg'
      ],
      link: '/services/general-power-of-authority'
    },
    {
      title: 'Agreement to Sell',
      description: 'Consultation: Understand your property, transaction type, and payment plan. Drafting: Prepare a clear, comprehensive, legally sound agreement. Verification: Review terms, ensure compliance with laws, and check for gaps. Execution Support: Guide signing, witness, and notarization formalities. Registration Assistance: Help with registration if required, ensuring legal enforceability.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755494907/myApp/documents/yvtgdio63tjpqchftgml.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755494908/myApp/documents/gzkppj6aojazuvepupay.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755494909/myApp/documents/o2j1fpbrtygqwa1molah.jpg'
      ],
      link: '/services/agreement-to-sell'
    },
    {
      title: 'Partition Deed',
      description: 'Fair Property Division – Ensures every co-owner gets a clear and legal share. Legally Binding – Once registered, it protects your rights and prevents disputes. Applies to Any Property – Land, house, commercial property, or inherited assets. Conflict-Free Solution – Eliminates chances of family or business disagreements.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755496637/myApp/documents/potwtuzhzz79ajb1corj.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755496638/myApp/documents/l2gcodjetr6cfyarpkie.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755496639/myApp/documents/z0kgcfsi3rovjje1ivth.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755496640/myApp/documents/ago07ovthjihvlnkrmfz.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755496641/myApp/documents/aoratntdawjonydtvjtx.jpg'
      ],
      link: '/services/partition-deed'
    },
    {
      title: 'Rent Agreement',
      description: 'Understand your property type, rent terms, and duration. Drafting: Prepare a legally compliant, clear rent agreement. Verification: Review all terms, deposits, and legal clauses. Execution Support: Assist in signing, notarization, and witnesses. Registration Assistance: Help with registration if required for legal enforceability. Applicable for Any Property – Residential, commercial, or office space.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755497223/myApp/documents/ea83pikyexkdlrnt2xta.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755497224/myApp/documents/jsco8teknbdxdujqu45c.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755497225/myApp/documents/ueim7ja9suhvezxp35ym.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755497226/myApp/documents/fn5gkoekpzc1osdnsrgy.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755497227/myApp/documents/brk3adfbvjqcsyzixkcx.jpg'
      ],
      link: '/services/rent-agreement'
    },
    {
      title: 'Mutation Legal Document',
      description: 'Understand property type and ownership change. Documentation: Gather necessary legal documents for mutation. Application Filing: Prepare and submit mutation application with authorities. Verification Support: Assist during verification by revenue or municipal officials. Mutation Confirmation: Ensure official entry and issue of Mutation Certificate. Official Ownership Record – Updates property ownership in government records.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755509053/myApp/documents/rdb5whodoc8drsksiz3z.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755509054/myApp/documents/bv1jzwoncxrdebh13av7.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755509055/myApp/documents/naohmdg43omhmeojzc4y.jpg'
      ],
      link: '/services/mutation-legal-document'
    },
    {
      title: 'Will Agreement',
      description: 'A legal document where a person declares how their property and assets should be distributed after their death. Who Needs It? Any individual owning property in Delhi NCR who wants to ensure smooth inheritance. Legal Importance: Prevents family disputes, ensures property passes as per wishes registration is optional but advisable.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755593729/myApp/documents/gs8iusijmlneqktuccmc.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755593730/myApp/documents/p2p2axm5q6f3ah62nbpc.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755593731/myApp/documents/ji1uymqg2e2vsmpfz0ic.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755593732/myApp/documents/kahpbitsdbe0smqumppz.jpg'
      ],
      link: '/services/will-agreement'
    },
    {
      title: 'Builder Buyer Agreement',
      description: 'Understand your project, unit selection, and payment plan. Drafting: Prepare a legally sound Builder Buyer Agreement with clear terms. Verification: Check all specifications, timelines, and legal compliance. Execution Support: Assist in signing, notarization, and witness formalities. Registration Assistance: Ensure legal enforceability and smooth transfer at possession.',
      images: [
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755597367/myApp/documents/sgoqn530rpyansmqw24f.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755597368/myApp/documents/v2rveugepwiilmcroiox.jpg',
        'https://res.cloudinary.com/dqnoxfljk/image/upload/v1755597368/myApp/documents/uwp3gxys92bnyanbjlbd.jpg'
      ],
      link: '/services/builder-buyer-agreement'
    }
  ]

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

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal-on-scroll')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe elements with scroll animation class
    const scrollElements = document.querySelectorAll('.scroll-animate')
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden animate-page-entrance animate-page-load">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full">
            <Navigation currentPage="home" />

            {/* Main Content */}
            <main className="px-6 md:px-10 lg:px-20 py-10 animate-content-slide-up">
              {/* Compact Hero Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl mb-16 animate-hero-entrance">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-20">
                  <div className="text-center animate-hero-content-fade-in">
                    {/* Badge */}



                    {/* Main Heading */}
                    <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-6 leading-tight animate-fade-in-up animate-delay-200">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-text-shimmer">Everything from Sale to Deed</span>
                      <span className="block text-3xl md:text-4xl mt-2 font-medium animate-fade-in-up animate-delay-300"></span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-400">
                      From Sale Deeds to Wills, Exchange Deeds to Power of Attorney - all your property documentation needs covered by expert lawyers.
                    </p>

                    {/* Process Steps - Verify, Draft, Register */}
                    <div className="mb-12 animate-fade-in-up animate-delay-500">
                      <h3 className="text-text-light dark:text-text-dark text-2xl md:text-3xl font-bold mb-8 animate-fade-in-up animate-delay-600">
                        Verify - Draft - Register
                      </h3>

                      {/* Process Summary */}
                      <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl max-w-2xl mx-auto">
                        <p className="text-text-light dark:text-text-dark text-sm font-medium text-center">
                          <span className="text-primary font-bold">All Property Documents</span> • <span className="text-secondary font-bold">Hassle-Free</span> • <span className="text-green-600 font-bold">Legal Expert</span>
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-700">
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


              {/* Marquee Section */}
              <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-5 shadow-lg">
                <div className="marquee-container">
                  <div className="marquee-content flex gap-8">
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Buy/Sell/Rent At Minimum Commission</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">A To Z Buying/Selling Assistance</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">All Deeds Drafting & Registration</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Property Verification</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Sale Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Gift Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Relinquishment Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Will</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Rent Agreement</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">No Objection Certificate (NOC)</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Valuation Report</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Mutation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Real Estate Liaisoning</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Mcd/Dda/L&do/Ndmc</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Freehold</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Completion Certificate (C.C)</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Regularisation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Property Tax Assessment</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Surviving Member Certificate</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Plan Sanctioning</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Residential/Commercial/Industrial</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Capital Gain</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Structural Stability Certificate</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Renovation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Relocation</span>
                    {/* Duplicate for seamless loop */}
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Buy/Sell/Rent At Minimum Commission</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">A To Z Buying/Selling Assistance</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">All Deeds Drafting & Registration</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Property Verification</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Sale Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Gift Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Relinquishment Deed</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Will</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Rent Agreement</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">No Objection Certificate (NOC)</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Valuation Report</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Mutation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Real Estate Liaisoning</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Mcd/Dda/L&do/Ndmc</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Freehold</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Completion Certificate (C.C)</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Regularisation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Property Tax Assessment</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Surviving Member Certificate</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Plan Sanctioning</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Residential/Commercial/Industrial</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Capital Gain</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Structural Stability Certificate</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Renovation</span>
                    <span className="marquee-text text-white font-bold text-base whitespace-nowrap">Relocation</span>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="py-16 animate-reveal-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center animate-stagger-grid">
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
              {/* User Type Selection Section */}
              <div className="py-20 bg-white dark:bg-slate-800/30 animate-section-slide-in">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
                  <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                      Everything from Sale to Deed
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                      Choose your role to get personalized property documentation solutions
                    </p>
                  </div>

                  {/* First Row - 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 animate-stagger-grid">
                    {/* I Am a Buyer */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="home" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2">I Am a Buyer</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Complete support from property selection to purchase. Pricing guidance and legal protection throughout your buying journey.
                      </p>
                      <Link
                        href="/solutions/buyer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-teal-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </Link>
                    </div>

                    {/* I Am a Seller */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="handshake" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2">I Am a Seller</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Step-by-step help from property search to sale deed registration. Legal checks and complete documentation support.
                      </p>
                      <Link
                        href="/solutions/seller"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-500 text-red-600 dark:text-red-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </Link>
                    </div>

                    {/* I Am a Landlord */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="building" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2">I Am a Landlord</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Find verified tenants quickly. Hassle-free rent agreements and property support for landlords.
                      </p>
                      <Link
                        href="/solutions/landlord"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-purple-600 dark:text-purple-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Second Row - 2 Cards Centered */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-stagger-grid">
                    {/* I Am a Tenant */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="key" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2">I Am a Tenant</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Minimum commission services to find your perfect space. Tenant-friendly agreements.
                      </p>
                      <Link
                        href="/solutions/tenant"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </Link>
                    </div>

                    {/* I Am a Builder/Developer/Institution/Society */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="building-2" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2 leading-tight">I Am a Builder / Developer / Institution / Society</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Complete solutions for property dealings, deeds, NOC, freehold, approvals.
                      </p>
                      <Link
                        href="/solutions/developer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-blue-500 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-12 text-center">
                    <p className="text-subtext-light dark:text-subtext-dark text-sm">
                      Not sure which category fits you? <Link href="/contact" className="text-primary hover:underline font-medium">Get free consultation</Link> to find the right solution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stamp Duty Calculator Section */}
              <div className="py-20 bg-white dark:bg-slate-800/30 animate-section-slide-in">
                <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
                  <div className="text-center mb-12">
                    <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                      Stamp Duty Calculator
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                      Calculate stamp duty, registration fees, and other charges instantly
                    </p>
                  </div>

                  <StampDutyCalculator />
                </div>
              </div>


              {/* Delhi Property Documents */}
              <div className="py-16 bg-white dark:bg-background-dark rounded-xl border border-yellow-200">
                <h2 className="text-text-light dark:text-text-dark text-4xl font-bold tracking-tight text-center pb-12 font-times">Delhi Property Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                  {propertyDocuments.map((doc, index) => (
                    <PropertyDocumentCard key={index} document={doc} />
                  ))}
                </div>
              </div>

              {/* Old Popular Deed Types - Keeping for reference, can be removed */}
              <div className="hidden py-16 bg-white dark:bg-background-dark rounded-xl border border-yellow-200">
                <h2 className="text-text-light dark:text-text-dark text-4xl font-bold tracking-tight text-center pb-12 font-times">Popular Deed Types (Old)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4">
                  <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCppKWYqPtTGEv7uWjlioc1NO5VJAcMnrOEfUokCtRsL15GNhn9eiBSSS2sYNW60VnncdcmApHMDs5SRJv1-LPMjYXJWq6DuYhldT6j--s32i-gzBrekBLL-KRP_Jp-BAznzx3J-hfQrDNaOa3tDTmuKBRbgGLlBh0K7lkKJ6NaQLQemNlJ7Tu1Qs93tFEHvFWcoRAXJnIGdWAorzOc4M00vV8eaI_scaPGRbgtnPa5FNKWmiybm6txj3aIlw00cnIBsPZfeXRCrbAS")' }}></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Sale Deed</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">A crucial legal document proving the sale and transfer of property ownership from a seller to a buyer.</p>
                      <a href="/services/sale-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                        <span className="truncate">Draft a Sale Deed</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVYxhhPbzpDjQCrXXZsAlY5OFyCalEiT0nqMzNyNZOZdu2RzvnHBhz3W2d4esf9vfULSR09DrT6W3FrVJ3gWaBAT1jAPPuAIXdNmg8uemkE3sGhhihst8xeX9g6guvYpvvn-0lbpL1YRbIVadLcccWYszTEq-g3bGnu80p0qS3Ky2HoNuh0F4XnHiADuIg1x1AL4ovdjL0Rr8jPern_zcVYiXTSVf5N_uXH-IBJIRSdzWjCEpHFeaAEcIAy1sDCm9xswaK7JMeu2kb")' }}></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Gift Deed</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">Transfer property ownership to a loved one as a gift, without any monetary exchange, through this document.</p>
                      <a href="/services/gift-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                        <span className="truncate">Create a Gift Deed</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv98UpkUzIaIzYR8Jx9l1mZrpnFDESlm7KRxBRlwKhkKkGM1lODIzlptL8i6jFFF9tRrw_LSPD4sPHZGoZp7R3K5UD-kmUw4lbR0oCVsxnQ9_L_0aBAMR5xuLogXpv0kwEAUwaW8roMUrftzK6irjThN1-QPmC7SANkHMc6dx8laeNS8FTogcZ23tcJOGynF0iAu72uPWw_ZEjl2ZXwxNYTrsfzgQNfk4nGYTnfB3pRNU4GZN4nz3IwiXm3GdQp_N-F_ni7IsP71w7")' }}></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Relinquishment Deed</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">Allows a co-owner to gracefully give up their share in a joint property in favour of other co-owners.</p>
                      <a href="/services/relinquishment-deed" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                        <span className="truncate">Make a Relinquishment Deed</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-playfair">Will Agreement</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mt-2 flex-grow">A formal legal declaration specifying how property and assets will be distributed after death.</p>
                      <a href="/services/will-agreement" className="mt-4 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                        <span className="truncate">Create a Will</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: 'url("https://imgs.search.brave.com/KVkpw5zB4qpCeURULw5kmeop7zu7VMSUGZyHF7A3MbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFzaWNob21lbG9h/bi5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/NC9Qcm9wZXJ0eV9Q/YXJ0aXRpb25fQmFu/bmVyLTc2OHg1NzYu/anBn")' }}></div>
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

              {/* Customer Testimonials Section */}
              <Testimonials />

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


            </main>

            {/* FAQ Section */}
            <section className="px-6 md:px-10 lg:px-20 py-16 bg-white dark:bg-slate-900">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <i data-lucide="help-circle" className="text-primary text-2xl"></i>
                    <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {/* FAQ 1 */}
                    <details className="group cursor-pointer" open>
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          My sale deed document is showing as not found. What do I do?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          If your sale deed document is not found in our system, please contact our support team with your reference number or order ID. We will help you locate your document and provide you with the correct access details.
                        </p>
                      </div>
                    </details>

                    {/* FAQ 2 */}
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          My request is pending clarification. What should I do?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          When your request is pending clarification, it means we need additional information from you to proceed. Please check your email for our clarification request or contact our support team directly to understand what additional details are required.
                        </p>
                      </div>
                    </details>

                    {/* FAQ 3 */}
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          I received the wrong sale deed document. How can I get the correct one?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          If you received an incorrect document, please contact us immediately with your order details. We will review your case, identify the issue, and provide you with the correct document at no additional cost. We also offer a revision guarantee for such cases.
                        </p>
                      </div>
                    </details>

                    {/* FAQ 4 */}
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          I'm getting errors while searching sale deeds. What should I do?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          Search errors can occur due to various reasons like network issues or system maintenance. Try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact our technical support team for assistance.
                        </p>
                      </div>
                    </details>

                    {/* FAQ 5 */}
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          Can I get a refund if my document delivery is delayed?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          Yes, we offer compensation for delayed deliveries. If your document is delivered beyond our promised timeline due to our fault, you may be eligible for a partial refund or service credit. Contact our support team to discuss your specific case.
                        </p>
                      </div>
                    </details>

                    {/* FAQ 6 */}
                    <details className="group cursor-pointer">
                      <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                        <h4 className="font-medium text-text-light dark:text-text-dark pr-4">
                          How can I talk to the saledeed.com team?
                        </h4>
                        <i data-lucide="chevron-down" className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0"></i>
                      </summary>
                      <div className="mt-2 px-4 pb-4">
                        <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                          You can reach our team through multiple channels: 1) Fill out the contact form on this page, 2) Call our customer support hotline, 3) Use the WhatsApp chat feature, 4) Email us directly, or 5) Schedule a consultation through our website. Our team is available Monday to Saturday, 9 AM to 7 PM.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Us CTA Section */}
            <section className="px-6 md:px-10 lg:px-20 py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 animate-bounce-gentle">
                  <i data-lucide="phone-call" className="w-10 h-10 text-white"></i>
                </div>

                {/* Heading */}
                <h2 className="text-text-light dark:text-text-dark text-3xl md:text-5xl font-bold tracking-tight font-display mb-4 animate-fade-in-up">
                  Still Have Questions?
                </h2>

                {/* Subheading */}
                <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-200">
                  Our expert legal team is here to help you with all your property documentation needs. Get in touch today!
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in-up animate-delay-300">
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm">
                    <i data-lucide="clock" className="w-6 h-6 text-primary"></i>
                    <span className="text-sm font-semibold text-text-light dark:text-text-dark">Quick Response</span>
                    <span className="text-xs text-subtext-light dark:text-subtext-dark">Within 24 hours</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm">
                    <i data-lucide="shield-check" className="w-6 h-6 text-primary"></i>
                    <span className="text-sm font-semibold text-text-light dark:text-text-dark">Expert Guidance</span>
                    <span className="text-xs text-subtext-light dark:text-subtext-dark">Certified lawyers</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm">
                    <i data-lucide="headset" className="w-6 h-6 text-primary"></i>
                    <span className="text-sm font-semibold text-text-light dark:text-text-dark">Free Consultation</span>
                    <span className="text-xs text-subtext-light dark:text-subtext-dark">15 minutes call</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                  >
                    <i data-lucide="mail" className="w-6 h-6"></i>
                    <span>Contact Us Now</span>
                    <i data-lucide="arrow-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </Link>

                  <a
                    href="tel:+918800505050"
                    className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-xl"
                  >
                    <i data-lucide="phone" className="w-6 h-6"></i>
                    <span>Call: +91 88005 05050</span>
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-subtext-light dark:text-subtext-dark animate-fade-in-up animate-delay-500">
                  <i data-lucide="shield" className="w-4 h-4 text-green-500"></i>
                  <span>Trusted by 10,000+ clients across India</span>
                </div>
              </div>
            </section>

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
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Deed Drafting</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/documents">Document Verification</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Registration Assistance</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/calculator">Stamp Duty Calculation</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                    <ul className="mt-4 space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/partner">Careers</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/blogs">Press</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                    <ul className="mt-4 space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Terms of Service</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
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
    </>
  )
}