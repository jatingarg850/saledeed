export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap px-6 md:px-10 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 backdrop-blur-md shadow-sm dark:shadow-yellow-900/10">
            <div className="flex items-center gap-3">
              <i className="text-primary" data-lucide="home"></i>
              <h2 className="text-text-light dark:text-text-dark text-2xl font-bold tracking-tight font-display">SaleDeed.com</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary text-base font-medium leading-normal transition-colors" href="#">Services</a>
              <a className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary text-base font-medium leading-normal transition-colors" href="#">About</a>
              <a className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary text-base font-medium leading-normal transition-colors" href="#">FAQ</a>
              <a className="text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary text-base font-medium leading-normal transition-colors" href="#">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-5 bg-transparent text-primary dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <span className="truncate">Log In</span>
              </button>
              <button className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/40">
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="flex min-h-[600px] flex-col gap-6 items-center justify-center text-center p-8 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-yellow-900/90 z-0"></div>
              <div className="absolute inset-0 w-full h-full object-cover -z-10 animate-zoom-in bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5qr8WARKh3rkwHse1OTDWTQ4DKTdKRTy1C-bTzQS-vAHHUTiLRIMMRpptjyh7tibuz1yvpBMiyqQCP6C4Z3Or2wFFs8UmGvrtAw0BmFEaMwf5MyIBNP9DHMfqh0MwSgiyOx1j8hk-Jc1U3lVGvs7A06kOutPu7dK2tGqxNQ1bsfYgInEYXq6t0vJn0vAMAzZaMbjHM3ELjCiBlY_CFfyYMcOTZDIiDj83T1xxyzov06SrQeTb4lV3J8vMwFGmZGKhoPISKREhy3El")'}}></div>
              
              <div className="flex flex-col gap-4 max-w-4xl z-10 animate-fade-in-up">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter font-display">Verify - Draft - Register</h1>
                <p className="text-yellow-100 text-lg md:text-2xl font-normal max-w-3xl mx-auto">All Property Documents. <span className="font-semibold text-white">Hassle Free.</span></p>
              </div>
              
              <div className="mt-4 z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <button className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-bold leading-normal tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-orange-500/40 hover:shadow-orange-600/50">
                  <span className="truncate">Start Your Deed Now</span>
                  <i className="ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right"></i>
                </button>
                <p className="text-white/90 text-sm mt-4 max-w-md mx-auto" style={{animationDelay: '0.4s'}}>Your trusted platform to draft, verify, and register any property document — 100% legally verified.</p>
              </div>
              
              <div className="mt-8 flex flex-col items-center gap-8 w-full z-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center justify-center w-full max-w-2xl space-x-2 md:space-x-4">
                  <div className="flex flex-col items-center text-white">
                    <div className="animate-icon" style={{animationDelay: '0s'}}>
                      <span className="text-4xl md:text-5xl">📝</span>
                    </div>
                    <span className="font-semibold mt-2 text-sm md:text-base">Draft</span>
                  </div>
                  <div className="flex-grow border-t-2 border-dashed border-white/50"></div>
                  <div className="flex flex-col items-center text-white">
                    <div className="animate-icon" style={{animationDelay: '0.5s'}}>
                      <span className="text-4xl md:text-5xl">✅</span>
                    </div>
                    <span className="font-semibold mt-2 text-sm md:text-base">Verify</span>
                  </div>
                  <div className="flex-grow border-t-2 border-dashed border-white/50"></div>
                  <div className="flex flex-col items-center text-white">
                    <div className="animate-icon" style={{animationDelay: '1s'}}>
                      <span className="text-4xl md:text-5xl">🏛️</span>
                    </div>
                    <span className="font-semibold mt-2 text-sm md:text-base">Register</span>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-white w-full max-w-4xl">
                  <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-xl">✅</span>
                    <span className="font-medium text-sm md:text-base">Govt-Registered Lawyers</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-xl">🔒</span>
                    <span className="font-medium text-sm md:text-base">Secure Data Handling</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="text-xl">⭐</span>
                    <span className="font-medium text-sm md:text-base">Rated 4.9/5 by 10k+ Clients</span>
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
                
                <div className="group flex flex-col items-center justify-start gap-4 p-6 rounded-xl bg-white dark:bg-slate-800/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-yellow-200">
                  <div className="bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 p-4 rounded-full transition-all duration-300">
                    <i className="text-primary w-10 h-10" data-lucide="calculator"></i>
                  </div>
                  <h3 className="text-text-light dark:text-text-dark text-2xl font-professional font-bold">Calculate Stamp Duty</h3>
                  <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed px-2">Instant state-wise calculation.</p>
                </div>
                
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCppKWYqPtTGEv7uWjlioc1NO5VJAcMnrOEfUokCtRsL15GNhn9eiBSSS2sYNW60VnncdcmApHMDs5SRJv1-LPMjYXJWq6DuYhldT6j--s32i-gzBrekBLL-KRP_Jp-BAznzx3J-hfQrDNaOa3tDTmuKBRbgGLlBh0K7lkKJ6NaQLQemNlJ7Tu1Qs93tFEHvFWcoRAXJnIGdWAorzOc4M00vV8eaI_scaPGRbgtnPa5FNKWmiybm6txj3aIlw00cnIBsPZfeXRCrbAS")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-3xl font-bold font-playfair">Sale Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-base mt-2 flex-grow">A crucial legal document proving the sale and transfer of property ownership from a seller to a buyer.</p>
                    <button className="mt-6 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Draft a Sale Deed</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVYxhhPbzpDjQCrXXZsAlY5OFyCalEiT0nqMzNyNZOZdu2RzvnHBhz3W2d4esf9vfULSR09DrT6W3FrVJ3gWaBAT1jAPPuAIXdNmg8uemkE3sGhhihst8xeX9g6guvYpvvn-0lbpL1YRbIVadLcccWYszTEq-g3bGnu80p0qS3Ky2HoNuh0F4XnHiADuIg1x1AL4ovdjL0Rr8jPern_zcVYiXTSVf5N_uXH-IBJIRSdzWjCEpHFeaAEcIAy1sDCm9xswaK7JMeu2kb")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-3xl font-bold font-playfair">Gift Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-base mt-2 flex-grow">Transfer property ownership to a loved one as a gift, without any monetary exchange, through this document.</p>
                    <button className="mt-6 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Create a Gift Deed</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col rounded-xl shadow-lg bg-background-light dark:bg-slate-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 group">
                  <div className="w-full h-52 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv98UpkUzIaIzYR8Jx9l1mZrpnFDESlm7KRxBRlwKhkKkGM1lODIzlptL8i6jFFF9tRrw_LSPD4sPHZGoZp7R3K5UD-kmUw4lbR0oCVsxnQ9_L_0aBAMR5xuLogXpv0kwEAUwaW8roMUrftzK6irjThN1-QPmC7SANkHMc6dx8laeNS8FTogcZ23tcJOGynF0iAu72uPWw_ZEjl2ZXwxNYTrsfzgQNfk4nGYTnfB3pRNU4GZN4nz3IwiXm3GdQp_N-F_ni7IsP71w7")'}}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-text-light dark:text-text-dark text-3xl font-bold font-playfair">Relinquishment Deed</h3>
                    <p className="text-subtext-light dark:text-subtext-dark text-base mt-2 flex-grow">Allows a co-owner to gracefully give up their share in a joint property in favour of other co-owners.</p>
                    <button className="mt-6 flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                      <span className="truncate">Make a Relinquishment Deed</span>
                    </button>
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