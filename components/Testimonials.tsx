'use client'

import { useEffect, useRef } from 'react'

export default function Testimonials() {
  const upperTrackRef = useRef<HTMLDivElement>(null)
  const lowerTrackRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Anant Mehta",
      text: "Perfect for NRI's like me. I was made aware about the building bye-laws and regulations. After the process they even got my property removed from the municipal corporation's online list of blacklisted properties. I am fully satisfied with the regularisation of my property. Thank you team saledeed.com!"
    },
    {
      name: "Mansi Mittal",
      text: "Got my sale deed registered through saledeed.com! I had to travel and they informed me of a single slab available at the registrar office. Must appreciate, I wasn't asked for any extra money even though I declared in advance that I can pay if they can expedite the process."
    },
    {
      name: "Poonam Rana",
      text: "I got the capital gain valuation done by saledeed.com! I wasn't aware of the exemptions I was eligible for. I am happy to save around 2.40 lacs of tax on my property sale."
    },
    {
      name: "Mahesh Goswami",
      text: "I got my property mutated by saledeed.com! It was done in 4 days. I wasn't able to provide the property tax receipts for 2 years but they managed somehow."
    },
    {
      name: "Keshav Gupta",
      text: "I tried getting my property freehold back in 2004 through someone but due to some legality I failed. saledeed.com got it done in around 2 months and also got the previously paid official fee around 65k adjusted in the conversion charges. I felt wow."
    },
    {
      name: "Jeet Bansal",
      text: "I approached saledeed.com randomly to know my property price. I was offered a price around 18 lacs more than my dealer friend. I instantly agreed and they took care of everything from beginning till the end. Today I am sitting in the balcony of my new abode and typing this message. Thank you team saledeed.com."
    },
    {
      name: "Deepa Rathee",
      text: "I got my relinquishment deed done through saledeed.com! The experience was good and now I am able to apply for loan against my property."
    },
    {
      name: "S.Chaddha",
      text: "I got a no objection certificate through saledeed.com from L&DO. I was provided the NOC within a week. Now I can sell my property without any doubt. The team asked me to give a review but were honest enough to say that - just mention your real life experience be it good or bad. Really appreciate this honesty."
    },
    {
      name: "Ganesh Sinha",
      text: "I got my commercial property rented out to a well known jewellery brand through saledeed.com! They charged me half the commission which was actually a surprise to me. I approximately saved 5 lacs commission. Keep up the good work."
    },
    {
      name: "Hitesh Jain",
      text: "I got my okhla industrial property freehold from saledeed.com! My property had some serious issues and even got a notice from DDA for the sealing of my property. saledeed.com guided me through all the legalities and got my property converted from leasehold to freehold. Soon after, I got my property transferred to my son through gift deed from them. Happy to give them a 100/100."
    }
  ]

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .scroll-left {
        animation: scroll-left 20s linear infinite;
      }
      
      .scroll-right {
        animation: scroll-right 20s linear infinite;
      }
      
      .slider-container {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: rgba(217, 119, 6, 0.3) transparent;
        cursor: grab;
        user-select: none;
      }
      
      .slider-container:active {
        cursor: grabbing;
      }
      
      .slider-container::-webkit-scrollbar {
        height: 6px;
      }
      
      .slider-container::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .slider-container::-webkit-scrollbar-thumb {
        background: rgba(217, 119, 6, 0.3);
        border-radius: 3px;
      }
      
      .slider-container::-webkit-scrollbar-thumb:hover {
        background: rgba(217, 119, 6, 0.5);
      }
      
      .slide-track {
        transition: transform 0.1s ease-out;
      }
      
      .slider-container:hover .slide-track,
      .slider-container:active .slide-track {
        animation-play-state: paused !important;
      }
      
      @media (max-width: 768px) {
        .slider-container::-webkit-scrollbar {
          height: 4px;
        }
      }
    `
    document.head.appendChild(style)

    // Add touch/mouse drag functionality
    const containers = document.querySelectorAll('.slider-container')
    
    containers.forEach((container) => {
      let isDown = false
      let startX: number
      let scrollLeft: number

      const handleMouseDown = (e: MouseEvent | TouchEvent) => {
        isDown = true
        const slider = container as HTMLElement
        slider.style.cursor = 'grabbing'
        
        if (e instanceof MouseEvent) {
          startX = e.pageX - slider.offsetLeft
          scrollLeft = slider.scrollLeft
        } else {
          startX = e.touches[0].pageX - slider.offsetLeft
          scrollLeft = slider.scrollLeft
        }
      }

      const handleMouseLeave = () => {
        isDown = false
        const slider = container as HTMLElement
        slider.style.cursor = 'grab'
      }

      const handleMouseUp = () => {
        isDown = false
        const slider = container as HTMLElement
        slider.style.cursor = 'grab'
      }

      const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        if (!isDown) return
        e.preventDefault()
        const slider = container as HTMLElement
        
        if (e instanceof MouseEvent) {
          const x = e.pageX - slider.offsetLeft
          const walk = (x - startX) * 2
          slider.scrollLeft = scrollLeft - walk
        } else {
          const x = e.touches[0].pageX - slider.offsetLeft
          const walk = (x - startX) * 2
          slider.scrollLeft = scrollLeft - walk
        }
      }

      container.addEventListener('mousedown', handleMouseDown as EventListener)
      container.addEventListener('mouseleave', handleMouseLeave)
      container.addEventListener('mouseup', handleMouseUp)
      container.addEventListener('mousemove', handleMouseMove as EventListener)
      
      container.addEventListener('touchstart', handleMouseDown as EventListener)
      container.addEventListener('touchend', handleMouseUp)
      container.addEventListener('touchmove', handleMouseMove as EventListener)
    })

    return () => {
      document.head.removeChild(style)
    }
  }, [])



  const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
    <div className="testimonial-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-80 mx-2 sm:mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 dark:border-slate-700">
      <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base sm:text-lg">{name.charAt(0)}</span>
          </div>
          <h4 className="font-bold text-text-light dark:text-text-dark text-sm sm:text-base">{name}</h4>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <i key={i} data-lucide="star" className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"></i>
          ))}
        </div>
      </div>
      <div className="relative">
        <svg className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 text-primary/20" fill="currentColor" viewBox="0 0 975.036 975.036">
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <p className="text-subtext-light dark:text-subtext-dark leading-relaxed pl-6 sm:pl-8 italic text-xs sm:text-sm">
          "{text}"
        </p>
      </div>
    </div>
  )

  return (
    <div className="py-20 bg-gray-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i data-lucide="heart" className="w-4 h-4"></i>
            Customer Stories
          </div>
          
          <h2 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black tracking-tight font-display mb-6 leading-tight">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          
          <p className="text-subtext-light dark:text-subtext-dark text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            Real experiences from our satisfied customers who trusted us with their property  needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <i data-lucide="users" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-text-light dark:text-text-dark">11,000+</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Happy Customers</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <i data-lucide="star" className="w-6 h-6 text-yellow-600 dark:text-yellow-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-text-light dark:text-text-dark">4.9/5</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <i data-lucide="shield-check" className="w-6 h-6 text-blue-600 dark:text-blue-400"></i>
              </div>
              <div className="text-left">
                <div className="font-bold text-text-light dark:text-text-dark">99%</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Testimonials - Desktop */}
      <div className="testimonials-wrapper hidden md:block">
        {/* Upper Track - Scrolling Left */}
        <div className="slider-container mb-8">
          <div ref={upperTrackRef} className="slide-track scroll-left flex">
            {/* First set */}
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <TestimonialCard key={`upper-${index}`} name={testimonial.name} text={testimonial.text} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <TestimonialCard key={`upper-dup-${index}`} name={testimonial.name} text={testimonial.text} />
            ))}
          </div>
        </div>

        {/* Lower Track - Scrolling Right */}
        <div className="slider-container">
          <div ref={lowerTrackRef} className="slide-track scroll-right flex">
            {/* First set */}
            {testimonials.slice(5, 10).map((testimonial, index) => (
              <TestimonialCard key={`lower-${index}`} name={testimonial.name} text={testimonial.text} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.slice(5, 10).map((testimonial, index) => (
              <TestimonialCard key={`lower-dup-${index}`} name={testimonial.name} text={testimonial.text} />
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Grid - Mobile */}
      <div className="md:hidden px-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`mobile-${index}`} name={testimonial.name} text={testimonial.text} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-20 mt-16 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect for a Seamless property Experience</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Experience the same level of professional service and legal expertise that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send?phone=918800505050&text=Hello%20Saledeed.com%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <i data-lucide="arrow-right" className="w-5 h-5"></i>
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <i data-lucide="eye" className="w-5 h-5"></i>
              View All Services
            </a>
          </div>
        </div>
      </div>

      {/* Authorities Section */}
      <div className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-bold tracking-tight font-display mb-6">
              Reach Us For Anything Related To Property

            </h2>
            <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Our expert team consists of professionals with in-depth experience of real estate liaisoning in all building authorities. Reach us today for a customized guidance for your specific property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="building-2"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">MCD</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">Municipal Corporation of Delhi</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Building plan drafting & sanctioning, Regularisation (removal of red stamp from property title), Completion Certificate etc.
              </p>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="landmark"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">DDA</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">Delhi Development Authority</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Freehold, Land use conversion, mutation, departmental permissions, auctions assistance etc.
              </p>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="map"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">L&DO</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">Land & Development Office</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Leasehold to freehold, ground rent clearances, mutation, no objection certificate (NOC) etc.
              </p>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="file-check"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">SRO</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">Sub-Registrar Office</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Deeds, documents, will registration, title verification, succession certificate (surviving members certificate) etc.
              </p>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="receipt"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">Assistant Assessor & Collector Office</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">Property Tax Department</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Property tax assessments, amnesty scheme benefits, revenue records, mutation of property etc.
              </p>
            </div>

            <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-yellow-200/50 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="text-white text-2xl" data-lucide="shield-check"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-display mb-2">NDMC</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark font-medium">New Delhi Municipal Council</p>
                </div>
              </div>
              <p className="text-base text-subtext-light dark:text-subtext-dark leading-relaxed">
                Special area clearances, premium property documentation, and Lutyens Delhi property services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}