'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import AIChatbot from '../components/AIChatbot'
import Testimonials from '../components/Testimonials'
import StampDutyCalculator from '../components/StampDutyCalculator'
import PropertyDocumentCard from '../components/PropertyDocumentCard'
import PopupNotifications from '../components/PopupNotifications'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const [showDoorstepModal, setShowDoorstepModal] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profileForm, setProfileForm] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroButtonRef = useRef<HTMLAnchorElement>(null)

  // Mobile detection for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Optimize animations based on device performance
  useEffect(() => {
    if (isMobile) {
      // Add performance class for mobile devices
      document.documentElement.classList.add('mobile-performance-mode')
      
      // Detect low-end devices and make animations even faster
      const isLowEndDevice = window.innerWidth <= 480 || 
                            (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
                            ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2)
      
      if (isLowEndDevice) {
        document.documentElement.classList.add('low-end-device')
      }
    } else {
      document.documentElement.classList.remove('mobile-performance-mode', 'low-end-device')
    }
  }, [isMobile])

  // Video play once functionality
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Play video once and stop
      const handleEnded = () => {
        video.pause()
      }
      
      video.addEventListener('ended', handleEnded)
      
      // Attempt to play the video
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error)
      })
      
      return () => {
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [])

  // Force hero button animation on mobile with enhanced effects
  useEffect(() => {
    const button = heroButtonRef.current
    if (button) {
      console.log('Button found, applying animations. isMobile:', isMobile)
      
      // Remove any conflicting classes
      button.classList.remove('mobile-optimized')
      
      // Apply different animations based on device
      const animationValue = isMobile 
        ? 'gradient-shift 2.5s ease infinite, hero-mobile-bounce 2.5s ease-in-out infinite, hero-glow-pulse 2s ease-in-out infinite'
        : 'gradient-shift 3s ease infinite, hero-float-pulse 3s ease-in-out infinite'
      
      // Force enable animations by setting inline styles with high priority
      button.style.setProperty('animation', animationValue, 'important')
      button.style.setProperty('-webkit-animation', animationValue, 'important')
      button.style.setProperty('animation-play-state', 'running', 'important')
      button.style.setProperty('-webkit-animation-play-state', 'running', 'important')
      button.style.setProperty('will-change', 'transform, background-position, box-shadow', 'important')
      
      // Check computed styles
      const computedStyle = window.getComputedStyle(button)
      console.log('Animation value:', computedStyle.animation)
      console.log('Animation play state:', computedStyle.animationPlayState)
      
      // Force a reflow to ensure animations start
      void button.offsetWidth
      
      // Try to trigger animation after a short delay
      setTimeout(() => {
        button.style.setProperty('animation', animationValue, 'important')
      }, 100)
    }
  }, [isMobile])

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
      <PopupNotifications />
      <div className="home-page relative flex h-auto min-h-screen w-full flex-col group/design-root animate-page-entrance animate-page-load bg-background-light dark:bg-background-dark overflow-x-hidden">
        <Navigation currentPage="home" />
        
        {/* Hero Video Section - Full Width */}
        <div className="relative w-full overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="w-full h-auto max-w-full"
            style={{ 
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              display: 'block'
            }}
          >
            <source src="/ani/herosec.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Subtle Bottom Gradient for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
        </div>

        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full">
            {/* Main Content */}
            <main className="animate-content-slide-up">

              {/* Original Hero Section */}
              <div className="px-6 md:px-10 lg:px-20 py-10">
              <div className="home-container animate-in">
                <div className="header-section">
                  <div className="tagline">Everything from sale to&nbsp;deed</div>
                  <div>
                    <div className="process-steps poppins-regular">
                      Verify - Draft - Register<br />
                      All Property Documents Hassle Free
                    </div>
                    <p className="deed-para" style={{ fontSize: '17px' }}>
                      Customised | Sale Deed | Gift Deed | Will | Relinquishment Deed | Valuation Report | NOC &amp; More
                    </p>
                    <div className="mt-4 flex justify-center items-center w-full">
                      <Link
                        ref={heroButtonRef}
                        href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20please%20offer%20me%20the%20best%20deal%20at%20lowest%20commission"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-animated="true"
                        className="hero-cta-button hero-cta-animated px-8 py-4 text-lg font-bold rounded-full group"
                        style={{
                          background: 'linear-gradient(to right, rgb(245, 158, 11), rgb(249, 115, 22), rgb(239, 68, 68))',
                          backgroundSize: '200% 200%',
                          animation: 'gradient-shift 3s ease infinite, hero-float-pulse 3s ease-in-out infinite',
                          WebkitAnimation: 'gradient-shift 3s ease infinite, hero-float-pulse 3s ease-in-out infinite',
                          willChange: 'transform, background-position',
                          animationPlayState: 'running',
                          WebkitAnimationPlayState: 'running',
                          color: '#000000',
                          textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
                          position: 'relative',
                          overflow: 'visible',
                          display: 'block',
                          textAlign: 'center'
                        } as React.CSSProperties}
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span>
                        <span style={{ position: 'relative', zIndex: 10, color: '#000000', display: 'block', textAlign: 'center' }}>Buy/Sell/Rent at Minimum Commission</span>
                      </Link>
                    </div>
                  </div>
                  <div className="header-btn">
                    <button
                      onClick={() => setShowDoorstepModal(true)}
                      className="btn-primary"
                    >
                      Get Doorstep Advice
                    </button>
                    <Link href="/documents">
                      <button className="btn-primary">Get Customised Deed Drafted</button>
                    </Link>
                    <Link href="/calculator">
                      <button className="btn-primary">Calculate Stamp Duty</button>
                    </Link>
                    <Link href="/contact">
                      <button className="btn-primary">Expert Advice At Zero Price</button>
                    </Link>
                  </div>
                </div>

                {/* Marquee Container */}
                <div className="marquee-container">
                  <div className="marquee-content ">
                    <span className="marquee-text">Buy/Sell/Rent At Minimum Commission</span>
                    <span className="marquee-text">A To Z Buying/Selling Assistance</span>
                    <span className="marquee-text">All Deeds Drafting &amp; Registration</span>
                    <span className="marquee-text">Property Verification</span>
                    <span className="marquee-text">Sale Deed</span>
                    <span className="marquee-text">Gift Deed</span>
                    <span className="marquee-text">Relinquishment Deed</span>
                    <span className="marquee-text">Will</span>
                    <span className="marquee-text">Rent Agreement</span>
                    <span className="marquee-text">No Objection Certificate(NOC)</span>
                    <span className="marquee-text">Valuation Report</span>
                    <span className="marquee-text">Mutation</span>
                    <span className="marquee-text">Real Estate Liaisoning</span>
                    <span className="marquee-text">Mcd/Dda/L&amp;do/Ndmc</span>
                    <span className="marquee-text">Freehold</span>
                    <span className="marquee-text">Completion Certificate (C.C)</span>
                    <span className="marquee-text">Regularisation</span>
                    <span className="marquee-text">Property Tax Assessment</span>
                    <span className="marquee-text">Surviving Member Certificate</span>
                    <span className="marquee-text">Plan Sanctioning</span>
                    <span className="marquee-text">Residential/Commercial/Industrial</span>
                    <span className="marquee-text">Capital Gain</span>
                    <span className="marquee-text">Structural Stability Certificate</span>
                    <span className="marquee-text">Renovation</span>
                    <span className="marquee-text">Relocation</span>
                    {/* Duplicate for seamless loop */}
                    <span className="marquee-text">Buy/Sell/Rent At Minimum Commission</span>
                    <span className="marquee-text">A To Z Buying/Selling Assistance</span>
                    <span className="marquee-text">All Deeds Drafting &amp; Registration</span>
                    <span className="marquee-text">Property Verification</span>
                    <span className="marquee-text">Sale Deed</span>
                    <span className="marquee-text">Gift Deed</span>
                    <span className="marquee-text">Relinquishment Deed</span>
                    <span className="marquee-text">Will</span>
                    <span className="marquee-text">Rent Agreement</span>
                    <span className="marquee-text">No Objection Certificate(NOC)</span>
                    <span className="marquee-text">Valuation Report</span>
                    <span className="marquee-text">Mutation</span>
                    <span className="marquee-text">Real Estate Liasioning</span>
                    <span className="marquee-text">Mcd/Dda/L&amp;do/Ndmc</span>
                    <span className="marquee-text">Freehold</span>
                    <span className="marquee-text">Completion Certificate (C.C)</span>
                    <span className="marquee-text">Regularisation</span>
                    <span className="marquee-text">Property Tax Assessment</span>
                    <span className="marquee-text">Surviving Member Certificate</span>
                    <span className="marquee-text">Plan Sanctioning</span>
                    <span className="marquee-text">Residential/Commercial/Industrial</span>
                    <span className="marquee-text">Capital Gain</span>
                    <span className="marquee-text">Structural Stability Certificate</span>
                    <span className="marquee-text">Renovation</span>
                    <span className="marquee-text">Relocation</span>
                    {/* Third duplicate for better mobile performance */}
                    <span className="marquee-text">Buy/Sell/Rent At Minimum Commission</span>
                    <span className="marquee-text">A To Z Buying/Selling Assistance</span>
                    <span className="marquee-text">All Deeds Drafting &amp; Registration</span>
                    <span className="marquee-text">Property Verification</span>
                    <span className="marquee-text">Sale Deed</span>
                    <span className="marquee-text">Gift Deed</span>
                    <span className="marquee-text">Relinquishment Deed</span>
                    <span className="marquee-text">Will</span>
                    <span className="marquee-text">Rent Agreement</span>
                    <span className="marquee-text">No Objection Certificate(NOC)</span>
                    <span className="marquee-text">Valuation Report</span>
                    <span className="marquee-text">Mutation</span>
                    <span className="marquee-text">Real Estate Liaisoning</span>
                    <span className="marquee-text">Mcd/Dda/L&amp;do/Ndmc</span>
                    <span className="marquee-text">Freehold</span>
                    <span className="marquee-text">Completion Certificate (C.C)</span>
                    <span className="marquee-text">Regularisation</span>
                    <span className="marquee-text">Property Tax Assessment</span>
                    <span className="marquee-text">Surviving Member Certificate</span>
                    <span className="marquee-text">Plan Sanctioning</span>
                    <span className="marquee-text">Residential/Commercial/Industrial</span>
                    <span className="marquee-text">Capital Gain</span>
                    <span className="marquee-text">Structural Stability Certificate</span>
                    <span className="marquee-text">Renovation</span>
                    <span className="marquee-text">Relocation</span>
                  </div>
                </div>
              </div>

              {/* For Every Property Need - Indeed Section */}
              <div className="px-6 md:px-10 lg:px-20 py-10">
                <div className="text-center mb-12 mt-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    <span className="relative inline-block property-need-heading" style={{ background: 'transparent' }}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-text-shimmer" style={{ background: 'linear-gradient(to right, #d97706, #ea580c, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        For Every Property Need - Indeed
                      </span>
                      
                    </span>
                  </h2>
                  
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

                  {/* Second Row - 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger-grid">
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

                    {/* I Need Liaisoning Assistance */}
                    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-slate-700 hover:-translate-y-2 flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i data-lucide="briefcase" className="w-8 h-8 text-white"></i>
                      </div>
                      <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-3 px-2">I Need Liaisoning Assistance</h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-sm mb-4 leading-relaxed px-2">
                        Expert assistance for all building authorities, permissions, and government clearances.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20need%20liaisoning%20assistance%20for%20my%20property"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-purple-600 dark:text-purple-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 group-hover:shadow-lg w-full"
                      >
                        LEARN MORE
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </a>
                    </div>
                  </div>


                  <br></br>
                  <br></br>
                  <br></br>
                  <center>
                    <div className='text-text-light dark:text-text-dark text-4xl font-bold tracking-tight font-display mb-4'>Our Services At A Glance</div>
                  </center>
                  {/* Features Container */}
                <div className="thp-features-container">
                  <div className="thp-feature-card">
                    <div className="thp-feature-icon">
                      <i className="fa-file-signature fas"></i>
                    </div>
                    <div className="thp-feature-title">
                      <a
                        target="_blank"
                        className="feature-link"
                        href="https://api.whatsapp.com/send?phone=918800505050&text=%20%22Hello%20I%20want%20to%20get%20my%20deed%20registered%22"
                        rel="noopener noreferrer"
                      >
                        Customized Deeds Drafting And Registration
                      </a>
                    </div>
                  </div>
                  <div className="thp-feature-card">
                    <div className="thp-feature-icon">
                      <i className="fa-coins fas"></i>
                    </div>
                    <div className="thp-feature-title">
                      <a
                        target="_blank"
                        className="feature-link"
                        href="https://api.whatsapp.com/send?phone=918800505050&text=%20%22Hello%20I%20want%20to%20know%20how%20can%20i%20save%20tax%22"
                        rel="noopener noreferrer"
                      >
                        Save Maximum Tax
                      </a>
                    </div>
                  </div>
                  <div className="thp-feature-card">
                    <div className="thp-feature-icon">
                      <i className="fa-landmark fas"></i>
                    </div>
                    <div className="thp-feature-title">
                      <a
                        target="_blank"
                        className="feature-link"
                        href="https://api.whatsapp.com/send?phone=918800505050&text=%20%22Hello%20i%20want%20authority%20assistance%22"
                        rel="noopener noreferrer"
                      >
                        Building Authority Assistance
                      </a>
                    </div>
                  </div>
                  <div className="thp-feature-card">
                    <div className="thp-feature-icon">
                      <i className="fa-hand-holding-usd fas"></i>
                    </div>
                    <div className="thp-feature-title">
                      <a
                        target="_blank"
                        className="feature-link"
                        href="https://api.whatsapp.com/send?phone=918800505050&text=%20%22Hello%20i%20want%20to%20know%20more%20about%20loan%22"
                        rel="noopener noreferrer"
                      >
                        Get Loan At Minimum Interest
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stats Blinking Animation */}
                <div className="stats-blink-container">
                  <div className="stats-blink-content">
                    <span className="stats-blink-text stats-blink-1">Every 30 minutes a loan is Sanctioned</span>
                    <span className="stats-blink-text stats-blink-2">Every 11 minutes a valuation report is generated</span>
                    <span className="stats-blink-text stats-blink-3">Every 4 minutes a query is answered</span>
                    <span className="stats-blink-text stats-blink-4">Every 6 minutes a deed is drafted</span>
                  </div>
                </div>
              </div>
              <center>
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-10 md:p-16 rounded-3xl border-4 border-yellow-200 dark:border-yellow-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Still Have A Doubt?</h3>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium">Get Free Consultation For A Best In City Experience.</p>
                    <Link
                      href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20Have%20A%20Query%3B%20Please%20Connect%20Me%20To%20An%20Expert!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                      <i data-lucide="message-circle" className="w-7 h-7"></i>
                      Get Free Consultation
                    </Link>
                  </div>
                </center>
                <br></br>
                <br></br>
              </div>

              {/* Stamp Duty Calculator Section */}
              <div className="py-20 bg-gray-50 dark:bg-slate-800 animate-section-slide-in">
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

              {/* User Type Selection Section */}


              {/* Submit Your Property Section */}
              <div className="py-20 bg-white dark:bg-slate-900 animate-section-slide-in">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
                  <div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-bounce-gentle">
                        <i data-lucide="home" className="w-4 h-4"></i>
                        Buy / Sell / Rent at minimum commission
                      </div>
                      
                      <h2 className="text-text-light dark:text-text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight font-display mb-6 leading-tight break-words">
                        Submit Your Property Details/Requirements
                      </h2>
                      
                      <p className="text-subtext-light dark:text-subtext-dark text-lg leading-relaxed mb-4">
                        Submit your property address in case you want to sell or just tell a bit about your preferences if you want to buy or rent your property through us.
                      </p>
                      
                      <p className="text-subtext-light dark:text-subtext-dark text-lg leading-relaxed mb-4">
                        We will get back to you at the earliest.
                      </p>
                      
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-600 p-4 rounded-lg mb-8">
                        <p className="text-gray-800 dark:text-gray-200 font-semibold">
                          <span className="font-bold">Note:</span> We guarantee to charge minimum commission in exchange of a best in class seamless property deal.
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <i data-lucide="percent" className="w-6 h-6 text-white"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-text-light dark:text-text-dark text-lg mb-1">Minimum Commission</h3>
                            <p className="text-subtext-light dark:text-subtext-dark">We charge the lowest commission in the market</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <i data-lucide="check-circle" className="w-6 h-6 text-white"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-text-light dark:text-text-dark text-lg mb-1">Seamless Process</h3>
                            <p className="text-subtext-light dark:text-subtext-dark">Best in class property deal experience from start to finish</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <i data-lucide="clock" className="w-6 h-6 text-white"></i>
                          </div>
                          <div>
                            <h3 className="font-bold text-text-light dark:text-text-dark text-lg mb-1">Quick Response</h3>
                            <p className="text-subtext-light dark:text-subtext-dark">We will get back to you at the earliest with the best options</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20want%20to%20submit%20my%20property%20details%20for%20buying%2Fselling%2Frenting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                          <i data-lucide="send" className="w-5 h-5"></i>
                          <span>Submit Property Details</span>
                          <i data-lucide="arrow-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                        </a>

                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 dark:hover:bg-slate-700 transition-all duration-300"
                        >
                          <i data-lucide="phone" className="w-5 h-5"></i>
                          <span>Contact Us</span>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>

              {/* Partner With Us Section */}
              <div className="px-6 md:px-10 lg:px-20 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Partner With Us
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                We welcome everyone who is willing to partner with us. Whether you are a deed writer, a property dealer, a lawyer, ex-government employee, real estate liaison agent, or just a reference giver, we assure you of a overwhelming and profitable association with saledeed.com.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="users"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Reference Givers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Earn referral commission by referring clients to our overwhelming services.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="home"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Property Dealers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Get share in commission by partnering with us for comprehensive property services.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="scale"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Lawyers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Earn by sharing your expertise with our legal team.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="edit"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Deed Writers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Grow your business upto 10x by joining our network of overwhelming deed writers.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="ruler"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Architects/Structural Engineers/Interior Designers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Elevate your income by joining us and expanding your client base.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="briefcase"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Real Estate Liaison Agent</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Partner with us to provide comprehensive liaison services.</p>
              </div>

             
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="shield-check"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Builder/Developers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Sell your new construction or reach us for potential buyers and investors for booking before construction.</p>
              </div>
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="shield-check"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Real Estate Service</h3>
                <p className="text-black dark:text-subtext-dark text-sm">If you are into any kind of service or business related to real estate you can submit your profile for association with us.</p>
              </div>
               <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="shield-check"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Ex-Government Employees</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Encash your knowledge and experience by partnering with us.</p>
              </div>
            </div>
              </div>

              {/* Why saledeed.com Section */}
              <div className="py-20 bg-white dark:bg-slate-900 animate-section-slide-in">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
                  <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-bold tracking-tight font-display mb-4">
                      <span className="relative inline-block why-saledeed-heading" style={{ background: 'transparent' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-text-shimmer" style={{ background: 'linear-gradient(to right, #d97706, #ea580c, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                          Why saledeed.com?
                        </span>

                      </span>
                    </h2>
                    <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-3xl mx-auto">
                      A trusted property guide with just one motive - Your Satisfaction!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 - Affordable & Convenient */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700 animate-fade-in-up">
                      <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg" style={{ background: 'linear-gradient(to right, rgb(34, 197, 94), rgb(5, 150, 105)) !important', opacity: 1, visibility: 'visible' }}>
                        <i data-lucide="indian-rupee" className="text-white w-10 h-10" style={{ opacity: 1, visibility: 'visible', display: 'inline-block' }}></i>
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 text-center">
                        Affordable & Convenient
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-center leading-relaxed">
                        We provide affordable A-Z property services with a dedicated agent guiding you at every step.
                      </p>
                    </div>

                    {/* Card 2 - No Compromise Privacy */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg" style={{ background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(79, 70, 229)) !important', opacity: 1, visibility: 'visible' }}>
                        <i data-lucide="shield-check" className="text-white w-10 h-10" style={{ opacity: 1, visibility: 'visible', display: 'inline-block' }}></i>
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 text-center">
                        No Compromise Privacy
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-center leading-relaxed">
                        Whether you are our client or a service provider in our network all your personal & professional details are completely safe and confidential with us.
                      </p>
                    </div>

                    {/* Card 3 - Money Back Guarantee */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg" style={{ background: 'linear-gradient(to right, rgb(217, 119, 6), rgb(234, 88, 12)) !important', opacity: 1, visibility: 'visible' }}>
                        <i data-lucide="badge-check" className="text-white w-10 h-10" style={{ opacity: 1, visibility: 'visible', display: 'inline-block' }}></i>
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 text-center">
                        Money Back Guarantee
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-center leading-relaxed">
                        At saledeed.com we ensure you best in class services always but if at any point you are not satisfied with our service we promise to pay you back as per our return policies.
                      </p>
                    </div>

                    {/* Card 4 - Doorstep Advice */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg" style={{ background: 'linear-gradient(to right, rgb(249, 115, 22), rgb(220, 38, 38)) !important', opacity: 1, visibility: 'visible' }}>
                        <i data-lucide="home" className="text-white w-10 h-10" style={{ opacity: 1, visibility: 'visible', display: 'inline-block' }}></i>
                      </div>
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 text-center">
                        Doorstep Advice
                      </h3>
                      <p className="text-subtext-light dark:text-subtext-dark text-center leading-relaxed">
                        We provide expertise for your every property need right at your doorstep. All you have to do is book a doorstep service and you are all sorted.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                      onClick={() => setShowDoorstepModal(true)}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <i className="fas fa-phone-alt" style={{ transform: 'rotate(90deg)' }}></i>
                      <span>Book Doorstep Assistance</span>
                      <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Delhi Property Documents */}
              <div className="py-16 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl">
                <div className="text-center mb-12 animate-fade-in-up">
                  <h2 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-bold tracking-tight font-times mb-4">
                    <span className="relative inline-block delhi-property-heading">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-text-shimmer">
                        Seamless Property Documents
                      </span>
                       </span>
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-3xl mx-auto">
                    Complete documentation services for all your property needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                  {propertyDocuments.map((doc, index) => (
                    <div 
                      key={index}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <PropertyDocumentCard document={doc} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              

              {/* Expert Advice CTA */}
              <div className="my-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 md:p-12 rounded-xl shadow-2xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transform transition-transform duration-300 hover:-translate-y-2">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-white text-4xl font-bold tracking-tight font-display">Expert Advice At Zero Price</h2>
                  <p className="text-blue-50 dark:text-blue-100 mt-4 max-w-2xl text-lg">Unsure where to start? Our legal experts are here to help. Get a free consultation to understand your needs and get your questions answered, with no obligations.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="group flex min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-white text-blue-600 text-xl font-bold leading-normal tracking-wide hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl">
                    <span className="truncate">Book Free Consultation</span>
                    <svg className="ml-2 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Customer Testimonials Section */}
              <Testimonials />

              {/* Share Your Profile Section */}
              <div className="my-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-primary/20">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="user-plus" className="w-8 h-8 text-white"></i>
                  </div>
                  <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                    Join Our Team
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Share your profile with us and tell us how you can contribute to saledeed.com
                  </p>
                  <button
                    onClick={() => setShowProfileModal(true)}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="send" className="w-5 h-5"></i>
                    Share Your Profile
                  </button>
                </div>
              </div>

              {/* Government Authorities Section */}
              <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl mb-16" style={{ background: 'linear-gradient(to bottom right, rgb(239, 246, 255), rgb(224, 231, 255))' }}>
                

                {/* Video Section */}
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-blue-200/50 dark:border-slate-700">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-display mb-4">
                      See Our Authorities in Action
                    </h3>
                    <p className="text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                      Watch how our expert team navigates through different government offices to ensure your property documentation is completed efficiently.
                    </p>
                  </div>

                  <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8 text-center" style={{ background: 'linear-gradient(to bottom right, rgb(239, 246, 255), rgb(224, 231, 255))' }}>
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
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
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>MCD Clearance Process</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>DDA Approval Steps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>L&DO Documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>SRO Registration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>Tax Assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="text-blue-600" data-lucide="check"></i>
                        <span>Final Handover</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freehold vs Leasehold Guide */}
              <div className="py-16">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden mb-16">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className="text-white text-xl" data-lucide="building"></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Freehold vs Leasehold Property in Delhi</h3>
                        <p className="text-yellow-100">What Every Buyer Must Know</p>
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
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden mb-16">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <i className="text-white text-xl" data-lucide="trending-up"></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Circle Rate vs Market Rate</h3>
                        <p className="text-yellow-100">The Real Truth Behind Property Valuation in Delhi</p>
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
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                          <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">3. Home Loan Issues</h5>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            Banks usually lend on whichever is lower between market rate and circle rate. So if your property's market rate is much higher, be ready to arrange extra money.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Practical Tips */}
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-amber-700">
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                        <i data-lucide="lightbulb" className="w-5 h-5 text-amber-600"></i>
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
                            <i data-lucide="check-circle" className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0"></i>
                            <p className="text-sm text-amber-700 dark:text-amber-300">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-6 text-center border border-blue-200 dark:border-slate-600" style={{ background: 'linear-gradient(to right, rgb(239, 246, 255), rgb(224, 231, 255))' }}>
                      <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">The Bottom Line</h4>
                      <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                        Circle rate is the government's way of keeping a floor under property values, while market rate is the reality check of what people are actually paying. As a buyer or seller, the real game is to strike a balance—stay legal, stay practical, and don't get trapped in cash-heavy deals.
                      </p>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          💡 Want to navigate this without confusion? At SaleDeed.com, we simplify the paperwork, check the legalities, and make sure your transaction is smooth and transparent—exactly the way property deals should be.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                 100 Baat Ki 1 Baat

                </h2>

                {/* Subheading */}
                <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-200">
                  Our expert legal team is here to help you with all your property need documentation. Get in touch today!
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
                  <span>Trusted by 1 Lac+ clients </span>
                </div>
              </div>
            </section>
            </main>

            {/* Footer */}
            <footer className="bg-yellow-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
              <div className="px-6 md:px-10 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Column 1 - Some Tips & Tricks */}
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display mb-4">Useful Information</h3>
                    <ul className="space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/property-tips">Property Tips</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/legal-advice">Legal Advice</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/tax-saving-tips">Tax Saving Tips</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 - FAQ & Contact */}
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display mb-4">Frequently Asked Questions</h3>
                    <ul className="space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="#faq">View FAQs</Link></li>
                    </ul>
                    
                    <ul className="space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Get In Touch</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 - 100 Baat Ki 1 Baat */}
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display mb-4">100 Baat Ki 1 Baat</h3>
                    <div className="space-y-3">
                      <a 
                        href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%2C%20I%20need%20assistance"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base hover:text-primary dark:hover:text-secondary transition-colors"
                      >
                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                        WhatsApp
                      </a>
                      <div>
                        <a 
                          href="tel:+918800505050"
                          className="flex items-center gap-2 text-base hover:text-primary dark:hover:text-secondary transition-colors"
                        >
                          <i data-lucide="phone" className="w-5 h-5"></i>
                          Call Us
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-7">Get in touch with our expert team</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">Available Now</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">Instant support for property documentation</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-primary">Trusted By 1 Lac + Clients</p>
                  </div>

                  {/* Column 4 - Possible Pages */}
                  <div>
                    <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display mb-4">Pages</h3>
                    <ul className="space-y-3 text-base">
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/">Home</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">Deed And Documents</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/solutions/buyer">Custom Solutions</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/services">All Services</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">Company</Link></li>
                      <li><Link className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us Now</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 border-t border-yellow-200 dark:border-slate-700 pt-8">
                  <div className="text-center space-y-2">
                    <p className="text-base font-semibold">All Right Reserved saledeed.com ™</p>
                    <p className="text-sm">A Unit of Bharatiya Bhoomi Group</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Powered By - 31 Son</p><p> Redefining The Defined.</p>
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

        {/* Share Profile Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <i data-lucide="user-plus" className="w-6 h-6 text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Share Your Profile</h3>
                      <p className="text-white/80 text-sm">Tell us how you can contribute</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowProfileModal(false)
                      setSubmitSuccess(false)
                      setProfileForm({ name: '', email: '', phone: '', expertise: '', message: '' })
                    }}
                    className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <i data-lucide="x" className="w-6 h-6"></i>
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i data-lucide="check-circle" className="w-10 h-10 text-green-600"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                      Profile Sent via WhatsApp!
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark mb-6">
                      Your profile has been sent to our team via WhatsApp. We'll review it and get back to you soon at {profileForm.email || 'your email'}.
                    </p>
                    <button
                      onClick={() => {
                        setShowProfileModal(false)
                        setSubmitSuccess(false)
                        setProfileForm({ name: '', email: '', phone: '', expertise: '', message: '' })
                      }}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      setIsSubmitting(true)

                      try {
                        // Create WhatsApp message with form data
                        const message = 
                          `*New Profile Submission - SaleDeed.com*\n\n` +
                          `*Name:* ${profileForm.name}\n` +
                          `*Email:* ${profileForm.email}\n` +
                          `*Phone:* ${profileForm.phone}\n` +
                          `*Expertise/Role:* ${profileForm.expertise}\n\n` +
                          `*How I can contribute:*\n${profileForm.message}\n\n` +
                          `_Please forward this to support@saledeed.com_`
                        
                        // Open WhatsApp with the message
                        window.open(
                          `https://api.whatsapp.com/send?phone=918800505050&text=${encodeURIComponent(message)}`,
                          '_blank',
                          'noopener,noreferrer'
                        )
                        
                        // Show success message
                        setTimeout(() => {
                          setIsSubmitting(false)
                          setSubmitSuccess(true)
                        }, 500)
                      } catch (error) {
                        console.error('Error:', error)
                        setIsSubmitting(false)
                        alert('Something went wrong. Please try again.')
                      }
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        Your Expertise/Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={profileForm.expertise}
                        onChange={(e) => setProfileForm({ ...profileForm, expertise: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="e.g., Legal Expert, Property Consultant, Developer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                        How can you contribute to SaleDeed.com? *
                      </label>
                      <textarea
                        required
                        value={profileForm.message}
                        onChange={(e) => setProfileForm({ ...profileForm, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us about your skills, experience, and how you can help us serve our customers better..."
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setShowProfileModal(false)
                          setProfileForm({ name: '', email: '', phone: '', expertise: '', message: '' })
                        }}
                        className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <i data-lucide="loader" className="w-4 h-4 animate-spin"></i>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i data-lucide="send" className="w-4 h-4"></i>
                            Submit Profile
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  )
}