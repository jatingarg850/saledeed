import Navigation from '../../../components/Navigation';

export default function LandlordSolutionPage() {
  const services = [
    {
      title: 'Minimum Commission',
      description: 'Pay less than usual commission for finding a suitable tenant through our expert rental services.',
      icon: 'percent'
    },
    {
      title: 'Tenant Verification',
      description: 'Complete background check of tenants to ensure safety and transparency for your property.',
      icon: 'user-check'
    },
    {
      title: 'Rent Deed Drafting',
      description: 'Professionally drafted rent agreements that secure your property and define tenant responsibilities.',
      icon: 'file-contract'
    },
    {
      title: 'Renovation & Fixation',
      description: 'Affordable renovation and maintenance services to keep your property attractive for every new tenant.',
      icon: 'paint-roller'
    },
    {
      title: 'Tenant Relocation',
      description: 'Hassle-free relocation services for tenants ensuring smooth transitions for landlords and tenants alike.',
      icon: 'truck-moving'
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="solutions" />

        <main className="flex-1">
          {/* Landlord Section */}
          <section className="py-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-black dark:text-text-dark text-4xl md:text-5xl font-bold font-display mb-6">
                  Turn Your Property into Income
                </h2>
                <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-3xl mx-auto mb-8">
                  Reliable tenant management and rental support made simple
                </p>
                <div className="text-center">
                  <a
                    href="https://wa.me/918800505050?text=Hello%2C%20I%20want%20to%20rent%20out%20my%20property"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700 h-full flex flex-col"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <i data-lucide={service.icon} className="w-8 h-8 text-white"></i>
                    </div>
                    <h5 className="text-xl font-bold text-black dark:text-text-dark mb-4 text-center">
                      {service.title}
                    </h5>
                    <p className="text-black dark:text-subtext-dark leading-relaxed text-center flex-grow">
                      {service.description}
                    </p>
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