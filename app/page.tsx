import Navigation from '../components/Navigation';

export default function Home() {
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
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Verify • Draft • Register</span>
                    <span className="block text-3xl md:text-4xl mt-2 font-medium">All Property Documents</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Professional legal documentation services with 100% compliance guarantee by government-registered lawyers.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <span>Start Your Deed Now</span>
                      <i data-lucide="arrow-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"></i>
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                      <i data-lucide="phone" className="w-5 h-5"></i>
                      Free Consultation
                    </button>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="map-pin"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Doorstep Advice</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Professional legal advisors at your home.</p>
                </div>
                
                <div className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="file-pen-line"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Get Your Deed Drafted</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">By registered property lawyers.</p>
                </div>
                
                <a href="/calculator" className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200 cursor-pointer">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="calculator"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Calculate Stamp Duty</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Instant state-wise calculation.</p>
                </a>
                
                <div className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="headset"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Expert Advice</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Free 15-minute consultation.</p>
                </div>
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
                <button className="group flex min-w-[240px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-gradient-to-r from-secondary to-yellow-600 text-white text-xl font-bold leading-normal tracking-wide hover:from-yellow-600 hover:to-secondary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-secondary/40">
                  <span className="truncate">Book Free Consultation</span>
                  <i className="ml-2 transition-transform duration-300 group-hover:rotate-12" data-lucide="phone"></i>
                </button>
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
    </div>
  )
}