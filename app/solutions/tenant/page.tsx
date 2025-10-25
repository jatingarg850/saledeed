import Navigation from '../../../components/Navigation';

export default function TenantSolutionPage() {
  const services = [
    {
      title: 'Minimum Commission',
      description: 'Pay less than usual commission for finding a space that perfectly matches your needs. Our specialized team is dedicated to tenants.',
      icon: 'percent'
    },
    {
      title: 'Agreement Drafting',
      description: 'Professionally drafted rent/lease agreements designed to support and protect your rights as a tenant.',
      icon: 'file-text'
    },
    {
      title: 'Relocation Assistance',
      description: 'Hassle-free relocation from your old home to your new one, making your moving process smooth and stress-free.',
      icon: 'truck'
    },
    {
      title: 'Buying Your Home',
      description: 'If you dream of owning a home, our experts will guide you with analysis, best fit options, and loan assistance. Free doorstep service included.',
      icon: 'home'
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="solutions" />

        <main className="flex-1">
          {/* Tenant Section */}
          <section className="py-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-black dark:text-text-dark text-4xl md:text-5xl font-bold font-display mb-6">
                  Expert assistance for secure and transparent Renting/leasing
                </h2>
                <div className="text-center mt-8">
                  <a
                    href="https://wa.me/918800505050?text=Hello%2C%20I%20am%20looking%20for%20a%20rental%20property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-xl transition-all"
                  >
                    Get Started Today
                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                  </a>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700 h-full flex items-start gap-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <i data-lucide={service.icon} className="w-8 h-8 text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-black dark:text-text-dark mb-3">
                        {service.title}
                      </h5>
                      <p className="text-black dark:text-subtext-dark leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
