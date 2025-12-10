'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Place Your Order Online',
      description: 'Choose the service you need (Sale Deed, Gift Deed, Registration, Rent Agreement, NOC, Mutation, etc.) and submit a simple online request.',
      details: 'No long forms — just basic details to get your case started.',
      icon: 'shopping-cart'
    },
    {
      number: 2,
      title: 'Dedicated Case Manager Assigned',
      description: 'Once your order is placed, a Case Manager from our team contacts you to understand your requirements, verify documents and guide you through the next steps.',
      details: 'You get a single point of contact throughout the entire process.',
      icon: 'user-check'
    },
    {
      number: 3,
      title: 'On-Site Visit by Our Team / Partner Associate',
      description: 'Our trained executive or local associate visits your home, property location, or office to:',
      bulletPoints: [
        'Collect documents (if needed)',
        'Conduct KYC verification',
        'Inspect property-related details (if applicable)',
        'Clarify your requirements',
        'Explain the process and timelines'
      ],
      details: 'We bring the service to your doorstep — no need to run around.',
      icon: 'home'
    },
    {
      number: 4,
      title: 'Drafting & Legal Preparation',
      description: 'Our documentation experts prepare your paperwork with:',
      bulletPoints: [
        'Accurate legal drafting',
        'Verification of details',
        'Compliance checks',
        'Stamp duty assessment (if required)'
      ],
      details: 'Drafts are shared with you for review and approval.',
      icon: 'file-text'
    },
    {
      number: 5,
      title: 'Registration & Field Execution',
      description: 'Depending on the service, our team handles:',
      bulletPoints: [
        'Stamp duty & e-stamp',
        'Notary',
        'Appointment scheduling',
        'Coordination with authorities',
        'Registry office visits',
        'Field follow-ups'
      ],
      details: 'You may only need to be present if legally required (e.g., sale deed registration with buyer/seller signatures).',
      icon: 'check-circle'
    },
    {
      number: 6,
      title: 'Document Handover',
      description: 'Once the process is complete, we deliver:',
      bulletPoints: [
        'Registered documents',
        'Receipts',
        'Certified copies',
        'Mutation/NOC proofs (if applicable)'
      ],
      details: 'Delivery options: Digital copies via email/WhatsApp, Physical copies via home delivery, or Pickup from our office or associate partner',
      icon: 'package'
    },
    {
      number: 7,
      title: 'Ongoing Support',
      description: 'Even after the paperwork is finished, our team remains available for:',
      bulletPoints: [
        'Follow-up queries',
        'Additional services',
        'Corrections (if required)',
        'Future documentation needs'
      ],
      details: 'You\'re always connected to your Case Manager.',
      icon: 'headphones'
    }
  ]

  return (
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            How It Works?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A smooth, secure and fully managed process — from online request to final documentation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-primary to-transparent hidden md:block" />
              )}

              {/* Step Card */}
              <div className="flex gap-6">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-grow bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {step.description}
                  </p>

                  {/* Bullet Points */}
                  {step.bulletPoints && (
                    <ul className="space-y-2 mb-3 ml-4">
                      {step.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-primary font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Details */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-4 border-primary pl-4">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Simple & Transparent. End-to-End Services</h3>
          <p className="text-lg mb-6 opacity-90">
            From online request to final registered documents, SaleDeed handles everything for you, with complete transparency and dedicated support.
          </p>
          <a
            href="/pricing"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  )
}
