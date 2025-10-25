import Navigation from '../../../components/Navigation';

export default function DeveloperSolutionPage() {
  const services = [
    {
      title: 'Outright Properties',
      description: 'Complete solutions for outright purchase & sale of properties at competitive market rates.',
      icon: 'building'
    },
    {
      title: 'Deeds & Registration',
      description: 'All deeds drafting & registration handled professionally with compliance.',
      icon: 'file-signature'
    },
    {
      title: 'NOC & Freehold',
      description: 'Obtain No Objection Certificates & freehold conversion quickly through experts.',
      icon: 'award'
    },
    {
      title: 'Plan Sanctioning',
      description: 'Assistance in building plan approvals, mutation, and government compliance.',
      icon: 'compass'
    },
    {
      title: 'Completion & Compliance',
      description: 'Support for completion certificates, dispute management, and Regularisation.',
      icon: 'file-check'
    },
    {
      title: 'Tax & Valuation',
      description: 'Property tax assessment, exemptions & valuation reports for maximum savings.',
      icon: 'scale'
    },
    {
      title: 'Licenses & Renewal',
      description: 'Hassle-free renewal of licenses & approvals for residential, commercial & industrial projects.',
      icon: 'credit-card'
    },
    {
      title: 'All Property Types',
      description: 'Expertise in residential, commercial, industrial & institutional projects.',
      icon: 'users'
    },
    {
      title: 'Liaisoning',
      description: 'Professional real estate liaisoning across all major building authorities.',
      icon: 'handshake'
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="solutions" />

        <main className="flex-1">
          {/* Developer Section */}
          <section className="py-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-black dark:text-text-dark text-4xl md:text-5xl font-bold font-display mb-6">
                  End-to-end services for builders, developers, and institutions
                </h2>
                <div className="text-center mt-8">
                  <a
                    href="https://wa.me/918800505050?text=Hello%2C%20I%20need%20developer%20services"
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
