'use client'

import Link from 'next/link'
import Navigation from '../../components/Navigation'
import HowItWorks from '../../components/HowItWorks'
import { services, calculateTotal } from '../../lib/pricing'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation currentPage="pricing" />
      
      <div className="px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
              Our Services & Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transparent pricing for all your property documentation needs. All prices are exclusive of 18% GST.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i data-lucide={service.icon} className="w-6 h-6 text-primary"></i>
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      ₹{service.price.toLocaleString()}
                    </span>
                    {service.gst > 0 && (
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        + {service.gst}% GST
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Total: ₹{calculateTotal(service.price, service.gst).toLocaleString()}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/checkout?service=${service.id}`}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-all text-center"
                >
                  Choose Service
                </Link>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Important Notes</h2>
            <ul className="space-y-3 text-blue-800 dark:text-blue-200">
              <li className="flex gap-3">
                <span className="text-xl">•</span>
                <span>The pricing mentioned for the services is a tentative price and can vary from case to case and property to property.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">•</span>
                <span>SaleDeed.com has sole discretion to change the price without any prior intimation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">•</span>
                <span>You are advised to confirm with our team for the final service charge as per your specific case.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">•</span>
                <span>If you have made a payment and do not wish to get our services, the full 100% amount you paid shall be refunded back - No Questions Asked.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">•</span>
                <span>All prices except home visit of Rs 1,999/- are exclusive of GST 18%. You have to add 18% at checkout window.</span>
              </li>
            </ul>
          </div>

          {/* How It Works Section */}
          <HowItWorks />

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Need Custom Pricing?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact our team for personalized quotes and package combinations
            </p>
            <a
              href="https://wa.me/918800505050?text=Hello%20SaleDeed.com%2C%20I%20need%20custom%20pricing%20for%20my%20property%20needs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
