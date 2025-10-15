'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const services = [
        { name: 'Sale Deed', href: '/services/sale-deed' },
        { name: 'Gift Deed', href: '/services/gift-deed' },
        { name: 'Relinquishment Deed', href: '/services/relinquishment-deed' },
        { name: 'Will Agreement', href: '/services/will-agreement' },
        { name: 'Partition Deed', href: '/services/partition-deed' },
        { name: 'General Power of Authority', href: '/services/general-power-of-authority' },
        { name: 'Agreement to Sell', href: '/services/agreement-to-sell' },
        { name: 'Builder Buyer Agreement', href: '/services/builder-buyer-agreement' },
        { name: 'Rent Agreement', href: '/services/rent-agreement' },
        { name: 'Mutation Legal Document', href: '/services/mutation-legal-document' },
        { name: 'Other Deed & Agreement', href: '/services/other-deed-agreement' }
    ]

    const packages = [
        {
            title: 'Buyer Package',
            price: '₹15,999',
            timeline: '10-15 Business Days',
            icon: 'user',
            popular: false,
            features: [
                'Title Verification',
                'Deed Drafting',
                'Registration Assistance',
                'Document Storage'
            ]
        },
        {
            title: 'Seller Package',
            price: '₹15,999',
            timeline: '10-15 Business Days',
            icon: 'briefcase',
            popular: true,
            features: [
                'Document Preparation',
                'Tax Consultation',
                'Sale Agreement',
                'Notary Services'
            ]
        },
        {
            title: 'NRI Solutions',
            price: 'Custom',
            timeline: 'Varies by needs',
            icon: 'plane',
            popular: false,
            features: [
                'Power of Attorney',
                'Property Management Support',
                'Remote Assistance',
                'Legal Consultation'
            ]
        }
    ]

    const comparisonFeatures = [
        { name: 'Title Verification', buyer: true, seller: false, nri: true },
        { name: 'Deed Drafting', buyer: true, seller: true, nri: true },
        { name: 'Registration Assistance', buyer: true, seller: true, nri: true },
        { name: 'Tax Consultation', buyer: false, seller: true, nri: true },
        { name: 'Power of Attorney', buyer: false, seller: false, nri: true }
    ]

    const faqs = [
        {
            question: "What if my needs don't fit a package?",
            answer: "Our NRI Solutions package is fully customizable. Contact us for a personalized quote based on your specific requirements."
        },
        {
            question: "What documents do I need to provide?",
            answer: "The required documents vary depending on the service. After you select a package, we'll provide a detailed checklist of everything we need from you."
        },
        {
            question: "How is payment handled?",
            answer: "We accept all major credit cards and online bank transfers through our secure payment gateway. Payment is typically due upfront to begin the service."
        }
    ]

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Navigation currentPage="services" />

                {/* Main Content */}
                <main className="flex-1">
                    {/* Services Card Slider */}
                    <div className="relative mb-16 mx-6 md:mx-10 lg:mx-20 mt-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <i data-lucide="briefcase" className="w-4 h-4"></i>
                                Our Legal Services
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-2">
                                Professional Property Documentation
                            </h2>
                            <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                Comprehensive legal services with expert guidance for all your property needs
                            </p>
                        </div>

                        {/* Card Slider Container */}
                        <div className="relative overflow-hidden py-8">
                            <div className="flex gap-6 animate-slide-infinite hover:pause-animation">
                                {/* First set of cards */}
                                {services.map((service, index) => (
                                    <Link
                                        key={`first-${index}`}
                                        href={service.href}
                                        className="flex-shrink-0 w-96 group"
                                    >
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group-hover:border-primary/50 h-64">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <i data-lucide="file-text" className="w-7 h-7 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-xl text-text-light dark:text-text-dark group-hover:text-primary transition-colors duration-300 mb-3">
                                                        {service.name}
                                                    </h3>
                                                    <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                                                        Professional legal documentation and registration services with expert guidance and complete compliance.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark">
                                                    <i data-lucide="clock" className="w-4 h-4"></i>
                                                    <span>7-15 days</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                                                    <span>Learn More</span>
                                                    <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                                
                                {/* Duplicate set for seamless loop */}
                                {services.map((service, index) => (
                                    <Link
                                        key={`second-${index}`}
                                        href={service.href}
                                        className="flex-shrink-0 w-96 group"
                                    >
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group-hover:border-primary/50 h-64">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                    <i data-lucide="file-text" className="w-7 h-7 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-xl text-text-light dark:text-text-dark group-hover:text-primary transition-colors duration-300 mb-3">
                                                        {service.name}
                                                    </h3>
                                                    <p className="text-sm text-subtext-light dark:text-subtext-dark leading-relaxed">
                                                        Professional legal documentation and registration services with expert guidance and complete compliance.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mt-auto">
                                                <div className="flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark">
                                                    <i data-lucide="clock" className="w-4 h-4"></i>
                                                    <span>7-15 days</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                                                    <span>Learn More</span>
                                                    <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Location Badge */}
                        <div className="absolute top-0 left-0 flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/20">
                            <i data-lucide="map-pin" className="w-4 h-4 text-primary"></i>
                            <span className="font-medium text-text-light dark:text-text-dark">Delhi</span>
                        </div>

                        {/* View All Button */}
                        <div className="text-center mt-8">
                            <Link
                                href="#all-services"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>View All Services</span>
                                <i data-lucide="chevron-down" className="w-4 h-4"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20">
                        <div className="layout-content-container flex flex-col max-w-6xl mx-auto items-center text-center">
                            
                            {/* Services Overview Section */}
                            <div className="w-full mb-16">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4 font-display">
                                        Our Legal Services
                                    </h2>
                                    <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                        Comprehensive property documentation services with expert legal guidance
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.slice(0, 6).map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                                    <i data-lucide="file-text" className="w-5 h-5 text-white"></i>
                                                </div>
                                                <h3 className="font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                                                    {service.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center text-sm text-primary font-medium">
                                                <span>Learn More</span>
                                                <i data-lucide="arrow-right" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                
                                <div className="mt-8 text-center">
                                    <Link
                                        href="#all-services"
                                        className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium"
                                    >
                                        View All Services
                                        <i data-lucide="chevron-down" className="w-4 h-4"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Packages Section Header */}
                            <div className="w-full mb-12">
                                <div className="text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4 font-display">
                                        Choose Your Package
                                    </h2>
                                    <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                        Select the package that best fits your property documentation needs
                                    </p>
                                </div>
                            </div>

                            {/* Packages Grid */}
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {packages.map((pkg, index) => (
                                    <div key={index} className={`flex flex-1 flex-col gap-6 rounded-xl border ${pkg.popular ? 'border-2 border-primary' : 'border border-yellow-200/50 dark:border-slate-700'} bg-background-light dark:bg-background-dark p-6 text-left transform hover:-translate-y-2 transition-transform duration-300 relative`}>
                                        {pkg.popular && (
                                            <div className="absolute -top-4 right-6 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Most Popular
                                            </div>
                                        )}
                                        <div className="flex items-center gap-4">
                                            <i className={`text-primary text-4xl`} data-lucide={pkg.icon}></i>
                                            <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">
                                                {pkg.title}
                                            </h3>
                                        </div>
                                        <p className="flex items-baseline gap-1 text-text-light dark:text-text-dark">
                                            <span className="text-5xl font-black leading-tight tracking-[-0.033em]">
                                                {pkg.price}
                                            </span>
                                            {pkg.price !== 'Custom' && (
                                                <span className="text-base font-bold leading-tight">one-time</span>
                                            )}
                                        </p>
                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">
                                            Estimated timeline: <strong>{pkg.timeline}</strong>
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {pkg.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-subtext-light dark:text-subtext-dark">
                                                    <i className="text-secondary" data-lucide="check-circle"></i>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        <button className={`mt-auto w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary/20 text-primary hover:bg-primary/30'} text-base font-bold leading-normal tracking-[0.015em] transition-colors`}>
                                            <span className="truncate">
                                                {pkg.title === 'NRI Solutions' ? 'Inquire Now' : `Select ${pkg.title.split(' ')[0]} Plan`}
                                            </span>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Comparison Table */}
                            <div className="w-full mt-20">
                                <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 font-display">
                                    Compare Our Packages
                                </h2>
                                <div className="overflow-x-auto rounded-xl border border-yellow-200/50 dark:border-slate-700 bg-background-light dark:bg-background-dark">
                                    <table className="w-full text-left">
                                        <thead className="bg-secondary/10 dark:bg-slate-800">
                                            <tr>
                                                <th className="px-6 py-4 text-text-light dark:text-text-dark text-sm font-bold leading-normal">
                                                    Feature
                                                </th>
                                                <th className="px-6 py-4 text-center text-text-light dark:text-text-dark text-sm font-bold leading-normal">
                                                    Buyer Package
                                                </th>
                                                <th className="px-6 py-4 text-center text-text-light dark:text-text-dark text-sm font-bold leading-normal">
                                                    Seller Package
                                                </th>
                                                <th className="px-6 py-4 text-center text-text-light dark:text-text-dark text-sm font-bold leading-normal">
                                                    NRI Solutions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-yellow-200/50 dark:divide-slate-700">
                                            {comparisonFeatures.map((feature, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 text-subtext-light dark:text-subtext-dark">
                                                        {feature.name}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {feature.buyer ? (
                                                            <i className="text-secondary" data-lucide="check"></i>
                                                        ) : (
                                                            <span className="text-gray-400">—</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {feature.seller ? (
                                                            <i className="text-secondary" data-lucide="check"></i>
                                                        ) : (
                                                            <span className="text-gray-400">—</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {feature.nri ? (
                                                            <i className="text-secondary" data-lucide="check"></i>
                                                        ) : (
                                                            <span className="text-gray-400">—</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="w-full mt-20 max-w-3xl mx-auto">
                                <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center font-display">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4 text-left">
                                    {faqs.map((faq, index) => (
                                        <details
                                            key={index}
                                            className="group p-4 rounded-lg bg-secondary/5 dark:bg-slate-800 cursor-pointer"
                                            open={openFaq === index}
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        >
                                            <summary className="flex justify-between items-center font-medium text-text-light dark:text-text-dark list-none">
                                                {faq.question}
                                                <i className="transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></i>
                                            </summary>
                                            <p className="mt-2 text-subtext-light dark:text-subtext-dark">
                                                {faq.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </div>

                            {/* All Services Section */}
                            <div id="all-services" className="w-full mt-20">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4 font-display">
                                        Complete Service Portfolio
                                    </h2>
                                    <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                        Explore our full range of property documentation and legal services
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                                                    <i data-lucide="file-text" className="w-6 h-6 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition-colors text-left">
                                                        {service.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-subtext-light dark:text-subtext-dark">
                                                    Professional Service
                                                </span>
                                                <div className="flex items-center text-sm text-primary font-medium">
                                                    <span>Learn More</span>
                                                    <i data-lucide="arrow-right" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="w-full mt-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-12 text-center">
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                                
                                <div className="relative">
                                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <i data-lucide="headphones" className="w-10 h-10 text-white"></i>
                                    </div>
                                    
                                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                        Need Expert Guidance?
                                    </h2>
                                    <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                                        Our legal experts are here to help you choose the right service and guide you through the process
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <i data-lucide="phone" className="w-5 h-5"></i>
                                            Contact Support
                                        </Link>
                                        <button className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                                            <i data-lucide="calendar" className="w-5 h-5"></i>
                                            Schedule Consultation
                                        </button>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-4 h-4"></i>
                                            <span>Free Consultation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="shield" className="w-4 h-4"></i>
                                            <span>100% Secure</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="clock" className="w-4 h-4"></i>
                                            <span>Quick Response</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-yellow-50 dark:bg-gray-900 border-t border-yellow-200 dark:border-slate-800 mt-12">
                    <div className="container mx-auto px-6 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Company</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                                <ul className="space-y-2">
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</Link></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</Link></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</Link></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/will-agreement">Will Agreement</Link></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/partition-deed">Partition Deed</Link></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/general-power-of-authority">General Power of Authority</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Blog</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">FAQ</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Help Center</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Legal</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-yellow-200 dark:border-slate-800 text-center text-sm text-subtext-light dark:text-subtext-dark">
                            <p>© 2024 SaleDeed.com. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}