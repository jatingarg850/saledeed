'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const services = [
        { name: 'Sale Deed', href: '/services/sale-deed' },
        { name: 'Gift Deed', href: '/services/gift-deed' },
        { name: 'Exchange Deed', href: '/services/exchange-deed' },
        { name: 'Lease Deed', href: '/services/lease-deed' },
        { name: 'Power of Attorney', href: '/services/power-of-attorney' },
        { name: 'Agreement to Sell', href: '/services/agreement-to-sell' },
        { name: 'Will Testament', href: '/services/will-testament' },
        { name: 'Relinquishment Deed', href: '/services/relinquishment-deed' },
        { name: 'Simple Mortgage', href: '/services/simple-mortgage' },
        { name: 'Partition Deed', href: '/services/partition-deed' },
        { name: 'Rent Agreement', href: '/services/rent-agreement' },
        { name: 'Builder Buyer Agreement', href: '/services/builder-buyer-agreement' },
        { name: 'Mutation Legal Document', href: '/services/mutation-legal-document' }
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
                    {/* Individual Document Services - Top Priority */}
                    <div className="px-6 md:px-10 lg:px-20 py-10">
                        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-slate-600 mb-16">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    <i data-lucide="star" className="w-4 h-4"></i>
                                    Most Popular Services
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-2">Individual Document Services</h2>
                                <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                    Choose from our most requested legal documentation services with transparent pricing
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'Gift Deed', price: '₹12,999' },
                                    { name: 'Relinquishment Deed', price: '₹9,999' },
                                    { name: 'Will', price: '₹4,999' },
                                    { name: 'General Power of Attorney', price: '₹6,999' },
                                    { name: 'Partition Deed', price: '₹11,999' },
                                    { name: 'Agreement to Sell', price: '₹10,999' },
                                    { name: 'Rent/Lease Agreement', price: 'Starting ₹999' },
                                    { name: 'Mutation', price: '₹19,999' },
                                    { name: 'Builder Buyer Agreement', price: 'As per discussion' }
                                ].map((service, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-semibold text-text-light dark:text-text-dark">{service.name}</h4>
                                            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                                <i data-lucide="file-text" className="w-4 h-4 text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="text-2xl font-bold text-primary mb-3">{service.price}</p>
                                        <Link
                                            href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}`}
                                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary font-medium transition-colors"
                                        >
                                            Learn More
                                            <i data-lucide="arrow-right" className="w-4 h-4"></i>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Special Note for Rent Agreement */}
                            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                                <div className="flex items-start gap-3">
                                    <i data-lucide="info" className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"></i>
                                    <div>
                                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Rent/Lease Agreement Special Pricing</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            <strong>Starting ₹999</strong> - With tenant verification starting ₹6,999
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="text-center mt-8">
                                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">Need a Custom Quote?</h3>
                                    <p className="text-base mb-4 opacity-90">
                                        Every property case is unique. Get personalized pricing for your specific requirements.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-yellow-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <i data-lucide="phone" className="w-4 h-4"></i>
                                            Get Custom Quote
                                        </Link>
                                        <a
                                            href="https://wa.me/918800505050?text=Hello,%20I%20need%20assistance%20regarding%20my%20property."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <i data-lucide="message-circle" className="w-4 h-4"></i>
                                            WhatsApp Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Card Slider */}
                    <div className="relative mb-16 mx-6 md:mx-10 lg:mx-20 mt-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <i data-lucide="briefcase" className="w-4 h-4"></i>
                                Our Legal Services
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-2">
                                All Legal Services
                            </h2>
                            <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                Explore our complete range of property documentation and legal services
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

                            {/* Detailed Pricing Section */}
                            <div className="w-full mb-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4 font-display">
                                        Transparent Pricing for All Services
                                    </h2>
                                    <p className="text-lg text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
                                        Professional legal documentation services with clear, upfront pricing
                                    </p>
                                </div>

                                {/* Main Services Pricing */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                    {/* Property Verification */}
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-blue-200/50 dark:border-slate-700">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                                <i data-lucide="search" className="w-6 h-6 text-white"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Property Verification</h3>
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold">₹999</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-3 text-subtext-light dark:text-subtext-dark">
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>Title check of property from the competent authority</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>Encumbrance certificate to check the possible debt</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>Past ownership checking & legal clearance report</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Registration Package */}
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-green-200/50 dark:border-slate-700">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                                <i data-lucide="file-check" className="w-6 h-6 text-white"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Registration Package</h3>
                                                <p className="text-green-600 dark:text-green-400 font-semibold">₹12,999</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-3 text-subtext-light dark:text-subtext-dark">
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>Drafting of sale deed as per your specific case</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>Coordination with sub - registrar office</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span>End to end handling of all paper work</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Buyer Assistance */}
                                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-purple-200/50 dark:border-slate-700 lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                                <i data-lucide="user-check" className="w-6 h-6 text-white"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">Buyer Assistance</h3>
                                                <p className="text-purple-600 dark:text-purple-400 font-semibold">₹19,999</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <ul className="space-y-3 text-subtext-light dark:text-subtext-dark">
                                                <li className="flex items-start gap-3">
                                                    <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                    <span>Include a thorough property check through our internal sources</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                    <span>Registration of property</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3 text-subtext-light dark:text-subtext-dark">
                                                <li className="flex items-start gap-3">
                                                    <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                    <span>Legal assistance if required</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i data-lucide="check-circle" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                    <span>Negotiation and personalized purchase assistance</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Services */}
                                <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-indigo-200/50 dark:border-slate-700 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="briefcase"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">Complete Real Estate Solutions</h3>
                                                <p className="text-indigo-100">Beyond Documentation - Full Service Property Assistance</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Expert At Home */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="home" className="w-5 h-5 text-green-500"></i>
                                                Expert At Home
                                            </h4>
                                            <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                We provide in detail doorstep advice for clear understanding of your property case in the comfort of your home. It includes thorough checking of your documents, explanation of the procedure and how we can help you to make it a success.
                                            </p>
                                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                                <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                                                    We work on a purpose driven ethic; so any unnecessary legality is never imposed and nothing besides necessary is even asked. If you book any service from our website this service is given to you absolutely free of cost.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Additional Services Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {/* Buy/Sell/Rent */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="home" className="w-5 h-5 text-blue-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Buy/Sell/Rent</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Whether you are a buyer/seller/landlord or a tenant, SaleDeed.com presents offers that you haven't heard before.
                                                </p>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                                    Minimum Commission • Best Market Options • Free Deed Drafting Eligible*
                                                </p>
                                            </div>

                                            {/* Instant Loan */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="credit-card" className="w-5 h-5 text-green-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Instant Loan</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Get loans as per your personal case requirement by the most reputed banks at the lowest rate of interest.
                                                </p>
                                            </div>

                                            {/* Valuation Report */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="calculator" className="w-5 h-5 text-purple-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Valuation Report</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Save tax by getting guidance from our expert financial advisors. Get valuation reports from government approved valuers.
                                                </p>
                                                <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                                                    Save Lacs in Taxation
                                                </p>
                                            </div>

                                            {/* Government Authority Assistance */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="building-2" className="w-5 h-5 text-orange-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Government Authority Assistance</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                                                    Get guidance regarding government compliances and real estate liaising across almost all authorities.
                                                </p>
                                            </div>

                                            {/* Relocation */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="truck" className="w-5 h-5 text-red-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Relocation</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    We can help you in shifting from anywhere in the city or the country.
                                                </p>
                                                <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                                                    Free Quote Available
                                                </p>
                                            </div>

                                            {/* Renovation */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                                                        <i data-lucide="hammer" className="w-5 h-5 text-teal-500"></i>
                                                    </div>
                                                    <h5 className="font-bold text-text-light dark:text-text-dark">Renovation</h5>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    We can design your space to suit your taste. Get your property renovated through expert interior designers & architects.
                                                </p>
                                                <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                                                    Expert Designers • Limited Budget Options
                                                </p>
                                            </div>
                                        </div>

                                        {/* Special Services */}
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {/* Freehold Conversion */}
                                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                                                <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                    <i data-lucide="key" className="w-5 h-5 text-emerald-600"></i>
                                                    Freehold Conversion
                                                </h4>
                                                <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                    Freehold is the conversion of a property legal status from lease hold to Freehold. It requires a serious understanding of the building bye-laws of the past and present times.
                                                </p>
                                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                                                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                                                        After understanding your property background a customized procedure is crafted exclusively for you. A Freehold application filed without proper analysis can attract hefty fines, penalties and even black listing of your property.
                                                    </p>
                                                </div>
                                                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                                                    <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                                                        <strong>Note:</strong> A Freehold status uplifts your property value by about 20%, allows you to sell it freely and take many legal decisions without waiting for government approvals everytime.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Regularization */}
                                            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                                                <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                    <i data-lucide="shield-check" className="w-5 h-5 text-red-600"></i>
                                                    Regularization
                                                </h4>
                                                <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                    Get Regularization of your MCD booked black listed properties as per the building bye-laws and breathe in ease.
                                                </p>
                                                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                                                    <p className="text-sm text-red-700 dark:text-red-300">
                                                        Municipal corporation have exclusive rights to demolish the structure of any MCD booked property. Regularization delist your property from the black list thus making it secure for sure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy Policy Section */}
                                <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-blue-200/50 dark:border-slate-700 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="shield"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">Privacy Policy (100% Guarantee)</h3>
                                                <p className="text-blue-100">Privacy Kept at Every Step</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                                                We are proud to make you aware of our top notch privacy policy following our tagline & our brand promise <strong>(privacy kept at every step)</strong>.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Complete Data Protection</h5>
                                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                                        All your data like name, contact number, property address, your enquiry, purpose, work done by us and the process followed is never ever disclosed anytime, anywhere to anyone.
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Family Privacy Guarantee</h5>
                                                    <p className="text-sm text-green-700 dark:text-green-300">
                                                        We understand how crucial is the information so even if your son/wife/brother etc comes to us to enquire we will never reveal.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                                                <p className="text-center font-semibold text-primary">
                                                    We assure you of this with 100% guarantee. It will always be between us.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Refund Policy */}
                                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-600 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white p-6">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <i data-lucide="refresh-ccw" className="w-5 h-5"></i>
                                            Refund Policy
                                        </h3>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                                                <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">Non Refundable Services</h5>
                                                <p className="text-sm text-red-700 dark:text-red-300">
                                                    Services like verification, drafting, valuation reports and consultation fees are non refundable once paid.
                                                </p>
                                            </div>
                                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                                                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refundable Situations</h5>
                                                <p className="text-sm text-green-700 dark:text-green-300">
                                                    If payment is made and services could not be delivered due to technical error or unavailability from our side.
                                                </p>
                                            </div>
                                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Partial Refund</h5>
                                                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                                    If only a part of service was delivered, refund may be made after deducting charges for work done.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg">
                                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                                <strong>Note:</strong> The company SaleDeed.com will have exclusive and sole right to decide the amount of refund to be made. The company will have sole and exclusive right to change any offer or pricing of any service without any prior information.
                                            </p>
                                        </div>
                                    </div>
                                </div>



                                {/* Legal Information */}
                                <div className="mt-12 bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                                    <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                        <i data-lucide="scale" className="w-5 h-5 text-gray-600"></i>
                                        Dispute Settlement
                                    </h4>
                                    <p className="text-sm text-subtext-light dark:text-subtext-dark">
                                        Any dispute arising out of or in connection with any service that we offer on SaleDeed.com shall be subject to the exclusive jurisdiction of courts in Delhi only.
                                    </p>
                                </div>
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

                            {/* Property Transaction Guide */}
                            <div className="w-full mt-20">
                                <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-indigo-200/50 dark:border-slate-700 overflow-hidden">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="home"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">How to Buy, Sell or Rent Property Without Hassle</h3>
                                                <p className="text-indigo-100">Your Complete Guide to Smooth Property Transactions</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Introduction */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                                                Buying, selling, or renting property in India is usually seen as a stressful task—endless paperwork, hidden charges, and running around government offices. But the truth is: <strong>property transactions can be smooth if you know the right process</strong>.
                                            </p>
                                            <p className="text-subtext-light dark:text-subtext-dark">
                                                Whether you want to buy property in Delhi, sell your flat in Gurgaon, or just make a rent agreement online, here's a clear, no-nonsense guide.
                                            </p>
                                        </div>

                                        {/* 5 Steps */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {/* Step 1 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Start with Clarity</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    The first step is to define your goal:
                                                </p>
                                                <ul className="text-xs space-y-1 text-subtext-light dark:text-subtext-dark">
                                                    <li>• <strong>Buying property</strong> – for living, investment, or commercial use</li>
                                                    <li>• <strong>Selling property</strong> – upgrading, shifting, or liquidating assets</li>
                                                    <li>• <strong>Renting property</strong> – long-term or short-term stay</li>
                                                </ul>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">
                                                    When your intent is clear, you avoid unnecessary brokers and delays.
                                                </p>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Verify Documents Early</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    This is the most crucial step in any property transaction:
                                                </p>
                                                <ul className="text-xs space-y-1 text-subtext-light dark:text-subtext-dark">
                                                    <li>• Check title deed and chain of ownership</li>
                                                    <li>• Ensure no loans or disputes (Encumbrance Certificate)</li>
                                                    <li>• Review property tax receipts and utility bills</li>
                                                </ul>
                                                <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
                                                    For tenants, always confirm that the landlord is the actual property owner.
                                                </p>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Negotiate With Transparency</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Whether it's a sale deed or rent agreement, write down every term:
                                                </p>
                                                <ul className="text-xs space-y-1 text-subtext-light dark:text-subtext-dark">
                                                    <li>• Token amount and payment schedule</li>
                                                    <li>• Maintenance charges and registry expenses</li>
                                                    <li>• Timeline for handover and possession</li>
                                                </ul>
                                                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2 font-medium">
                                                    A transparent deal builds trust and avoids future disputes.
                                                </p>
                                            </div>

                                            {/* Step 4 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Professional Drafting</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    A poorly drafted document can create long-term legal issues. Always:
                                                </p>
                                                <ul className="text-xs space-y-1 text-subtext-light dark:text-subtext-dark">
                                                    <li>• Draft with precision (names, property details, value)</li>
                                                    <li>• Register at the sub-registrar office where required</li>
                                                    <li>• Use stamp duty and registration as per state rules</li>
                                                </ul>
                                                <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 font-medium">
                                                    This ensures your transaction is legally valid and fully secure.
                                                </p>
                                            </div>

                                            {/* Step 5 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Use Online Platforms</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Why waste time running to multiple offices? Today you can:
                                                </p>
                                                <ul className="text-xs space-y-1 text-subtext-light dark:text-subtext-dark">
                                                    <li>• Generate a rent agreement online in minutes</li>
                                                    <li>• Verify documents digitally</li>
                                                    <li>• Initiate property registration without brokers</li>
                                                </ul>
                                                <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">
                                                    Technology reduces hassle and saves money.
                                                </p>
                                            </div>

                                            {/* Bottom Line */}
                                            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <i data-lucide="check-circle" className="w-8 h-8 text-primary"></i>
                                                    <h4 className="font-bold text-text-light dark:text-text-dark">Bottom Line</h4>
                                                </div>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-3">
                                                    Property transactions don't have to be a headache. With clarity, transparency, and professional drafting, you can buy, sell, or rent without stress.
                                                </p>
                                                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                                                    <p className="text-sm font-medium text-primary">
                                                        👉 Visit SaleDeed.com to get it done exactly the way we've outlined—secure, professional, and hassle-free.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* NOC in Real Estate Guide */}
                            <div className="w-full mt-20">
                                <div className="bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-red-200/50 dark:border-slate-700 overflow-hidden">
                                    <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="shield-check"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">NOC in Real Estate</h3>
                                                <p className="text-red-100">Why It's More Important Than You Think</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Introduction */}
                                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-l-4 border-yellow-400">
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                                                When you're buying or selling property in Delhi, people usually talk about registry, stamp duty, circle rate. But there's one document that can literally decide whether your deal is valid or can get stuck for years — <strong>NOC (No Objection Certificate)</strong>.
                                            </p>
                                            <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-3 font-medium">
                                                (Especially if you're dealing in L&DO areas like South Extension, Connaught Place, Defence Colony, Karol Bagh, Lajpat Nagar, Malviya Nagar, and many more...)
                                            </p>
                                        </div>

                                        {/* What is NOC */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="help-circle" className="w-5 h-5 text-primary"></i>
                                                What is an NOC in Real Estate?
                                            </h4>
                                            <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                An NOC is an official statement from an authority saying, "We have no objection if this property is transferred/registered/sold."
                                            </p>
                                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                                                <p className="text-sm font-semibold text-red-800 dark:text-red-200">
                                                    Without it, your sale deed may not even stand in court if challenged later.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Why NOC is Needed */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="shield" className="w-5 h-5 text-primary"></i>
                                                Why is NOC Needed?
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">1. Legal Clearance</h5>
                                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                                        Confirms that the property is free from disputes or government restrictions.
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">2. Loan & Mortgage</h5>
                                                    <p className="text-sm text-green-700 dark:text-green-300">
                                                        Banks demand it before sanctioning a home loan.
                                                    </p>
                                                </div>
                                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">3. Registry Approval</h5>
                                                    <p className="text-sm text-purple-700 dark:text-purple-300">
                                                        Sub-registrar offices may refuse to register your Sale Deed without the right NOCs.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                                                <p className="text-sm text-primary font-medium">
                                                    👉 At SaleDeed.com, we've seen dozens of deals delayed just because the buyer/seller didn't know which NOCs to collect in time.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Who Issues NOC */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="users" className="w-5 h-5 text-primary"></i>
                                                Who Issues NOC?
                                            </h4>
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Housing Societies / RWA</h5>
                                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">Certifies there are no maintenance dues.</p>
                                                    </div>
                                                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Builder/Developer</h5>
                                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">In newly constructed flats, ensures all charges are cleared.</p>
                                                    </div>
                                                    <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-text-light dark:text-text-dark mb-2">Banks / Financial Institutions</h5>
                                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">After full repayment of any loan.</p>
                                                    </div>
                                                </div>

                                                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                                                    <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">Government Authorities:</h5>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="flex items-start gap-2">
                                                            <i data-lucide="building" className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"></i>
                                                            <div>
                                                                <strong className="text-orange-800 dark:text-orange-200">L&DO (Land & Development Office, Delhi):</strong>
                                                                <p className="text-orange-700 dark:text-orange-300">For leasehold properties in areas like South Extension, Connaught Place, Defence Colony, Karol Bagh, Lajpat Nagar, Malviya Nagar, Amar Colony, Dayanand Colony, Kalkaji, Double Storey, Ring Road Lajpat Nagar, Nizamuddin, Tilak Nagar, East & West Patel Nagar, Janpath Lane, Ramesh Nagar, Malka Ganj, Tihar Road, Chittaranjan Park, Jungpura, Shivalik, Curzon Road (Kasturba Gandhi Marg), Sunder Nagar, Barakhamba Road, Babar Lane, New Rajinder Nagar, Jain Mandir Road, and Vijay Nagar—getting the L&DO NOC is mandatory.</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <i data-lucide="map" className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"></i>
                                                            <div>
                                                                <strong className="text-orange-800 dark:text-orange-200">Urban Development Dept. / DDA:</strong>
                                                                <p className="text-orange-700 dark:text-orange-300">For specific categories of land or conversion from leasehold to freehold.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Example from Delhi */}
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="map-pin" className="w-5 h-5 text-blue-600"></i>
                                                Example from Delhi
                                            </h4>
                                            <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                Suppose you're buying a leasehold property in South Extension, Connaught Place, Defence Colony, Karol Bagh, Lajpat Nagar, Malviya Nagar, or any other L&DO area. Even if everything else seems perfect, the registry officer will ask: <strong>"L&DO ka NOC hai?"</strong>
                                            </p>
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                                                <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-2">
                                                    If not, your deal is on hold. Many buyers realise this too late and lose both time and money.
                                                </p>
                                                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                                    👉 That's why at SaleDeed.com, we guide clients step-by-step to collect NOCs from L&DO and other authorities, so your deal doesn't get stuck.
                                                </p>
                                            </div>
                                        </div>

                                        {/* What Happens If You Ignore NOC */}
                                        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                                            <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                                                <i data-lucide="x-circle" className="w-5 h-5"></i>
                                                What Happens If You Ignore NOC?
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {[
                                                    'Your property transfer can be declared invalid.',
                                                    'You may get stuck with legal notices.',
                                                    'Banks will reject your loan file.',
                                                    'Future buyers may walk away the moment they hear "NOC pending."'
                                                ].map((consequence, index) => (
                                                    <div key={index} className="flex items-start gap-2">
                                                        <i data-lucide="alert-triangle" className="w-4 h-4 text-red-500 mt-1 flex-shrink-0"></i>
                                                        <p className="text-sm text-red-700 dark:text-red-300">{consequence}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* How to Get NOC Quickly */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="zap" className="w-5 h-5 text-primary"></i>
                                                How to Get an NOC Quickly?
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    { step: '1', title: 'Identify the issuing authority', desc: '(L&DO, bank, society, builder, etc.)' },
                                                    { step: '2', title: 'Submit an application', desc: 'with ownership and payment proofs' },
                                                    { step: '3', title: 'Pay clearance charges', desc: 'if any' },
                                                    { step: '4', title: 'Follow up regularly', desc: 'government offices are slow unless you keep track' }
                                                ].map((item, index) => (
                                                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                            {item.step}
                                                        </div>
                                                        <div>
                                                            <h5 className="font-semibold text-text-light dark:text-text-dark text-sm">{item.title}</h5>
                                                            <p className="text-xs text-subtext-light dark:text-subtext-dark">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                                                <p className="text-sm text-primary font-medium">
                                                    At SaleDeed.com, we assist with applying, tracking, and collecting NOCs from multiple authorities, including L&DO, so your deal doesn't get stuck in paperwork.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Final Word */}
                                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 text-center border border-primary/20">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">Final Word</h4>
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                                                In Delhi real estate, paperwork is 50% of the game. NOC is that one piece of paper which silently decides whether your crores are safe or at risk.
                                            </p>
                                            <p className="text-subtext-light dark:text-subtext-dark font-medium mb-4">
                                                Don't treat it as formality — treat it as insurance for your property deal.
                                            </p>
                                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                                                <p className="text-sm font-medium text-primary">
                                                    👉 If you're buying or selling and don't know which NOCs you need — visit SaleDeed.com. We'll guide you through every step, without tension, without hassle.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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