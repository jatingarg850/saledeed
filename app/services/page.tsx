'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import ScrollToTop from '../../components/ScrollToTop'
import HowItWorks from '../../components/HowItWorks'
import ServiceBookingModal from '../../components/ServiceBookingModal'

interface Service {
  id: string
  name: string
  price: number
  gst: number
  description: string
  features: string[]
}

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [bookingModal, setBookingModal] = useState<{
      isOpen: boolean
      service: Service | null
    }>({
      isOpen: false,
      service: null
    })

    const handleBookService = (service: Service) => {
      setBookingModal({
        isOpen: true,
        service
      })
    }

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
            price: '₹64,999',
            timeline: '10-15 Business Days',
            icon: 'user',
            popular: false,
            features: [
                'Property Verification',
                'Sale Deed Drafting & Registration',
                'Mutation at Property Tax Office',
                'Electricity & Water Bill Name Change'
            ]
        },
        {
            title: 'Seller Package',
            price: '₹99,000',
            timeline: '10-15 Business Days',
            icon: 'briefcase',
            popular: true,
            features: [
                'NOC Preparation',
                'Valuation Report',
                'Document Preparation',
                'Expert Consultation'
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
        { name: 'Title Verification', buyer: true, seller: true, nri: true },
        { name: 'Deed Drafting', buyer: true, seller: true, nri: true },
        { name: 'Registration Assistance', buyer: true, seller: true, nri: true },
        { name: 'Tax Consultation', buyer: true, seller: true, nri: true },
        { name: 'Power of Attorney', buyer: true, seller: true, nri: true }
    ]

    const faqs = [
        {
            question: "What if my needs don't fit a package?",
            answer: "Our Solutions packages are fully customizable. Contact us for a personalized quote based on your specific requirements."
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
        <div className="services-page relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Navigation currentPage="services" />

                {/* Main Content */}
                <main className="flex-1">
                    {/* Individual Document Services - Top Priority */}
                    <div className="px-6 md:px-10 lg:px-20 py-10">
                        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-slate-600 mb-16">




                            {/* Special Note for Rent Agreement */}

                            {/* Book Our Services Section */}
                            <section className="additional-services-info py-16">
                                <div className="container mx-auto px-4">
                                    <div className="text-center mb-12">
                                        <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">Our Services At A Glance</h2>
                                    </div>

                                    {/* Services Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
                                        {/* Doorstep Services */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Book Our Doorstep Services</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹1999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Book our property expert to assist you right at your doorstep for a detailed understanding and analysis of your specific case and procedure.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'doorstep',
                                                          name: 'Doorstep Consultation',
                                                          price: 1999,
                                                          gst: 0,
                                                          description: 'Expert consultation at your doorstep',
                                                          features: ['Personal consultation at your home', 'Document review and analysis', 'Step-by-step guidance', 'Customized action plan', '100% adjusted if you book any service']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Property Verification */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Property Verification</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹9999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Title check of property from the competent authority.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Encumbrance certificate to check the possible debt.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Past ownership checking &amp; legal clearance report.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'property-verification',
                                                          name: 'Property Detailed Verification',
                                                          price: 9999,
                                                          gst: 18,
                                                          description: 'Comprehensive property verification',
                                                          features: ['Title check from competent authority', 'Encumbrance certificate', 'Past ownership checking', 'Legal clearance report']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Saledeed Registration Package */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Saledeed Registration Package</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹17999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Drafting of sale deed as per your specific case.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Coordination with sub – registrar office.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">End to end handling of all paper work.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'sale-deed',
                                                          name: 'Sale Deed Registration',
                                                          price: 17999,
                                                          gst: 18,
                                                          description: 'Complete sale deed registration with expert assistance',
                                                          features: ['Deed drafting as per your case', 'Coordination with sub-registrar office', 'End-to-end paperwork handling', 'Expert property lawyer consultation']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Agent Assistance */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Agent Assistance</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹9999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Include a thorough property check through our internal sources.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Registration of property.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Legal assistance if required.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Negotiation and personalized purchase assistance.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'agent-assistance',
                                                          name: 'Agent Assistance',
                                                          price: 9999,
                                                          gst: 18,
                                                          description: 'Document verification and registration assistance',
                                                          features: ['Document verification', 'Registration assistance', 'Consultation call with expert lawyer', 'Can be clubbed with other services']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gift Deed */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Gift deed</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹13999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Draft gift deed per Delhi stamp rules, estimate duty, and assist in registry completion.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'gift-deed',
                                                          name: 'Gift Deed',
                                                          price: 13999,
                                                          gst: 18,
                                                          description: 'Gift deed drafting and registration',
                                                          features: ['Deed drafting per Delhi stamp rules', 'Stamp duty estimation', 'Registry completion assistance', 'Expert guidance throughout']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Relinquishment Deed */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Relinquishment Deed</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹11999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We draft relinquishment deed and file registration documentation per Delhi norms.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'relinquishment-deed',
                                                          name: 'Relinquishment Deed',
                                                          price: 11999,
                                                          gst: 18,
                                                          description: 'Relinquishment deed preparation and filing',
                                                          features: ['Deed drafting and preparation', 'Sub-registrar filing assistance', 'Documentation support', 'Legal compliance check']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Will */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Will</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹7999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We draft legally valid Wills, arrange registration if needed, and maintain privacy throughout the process.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'will',
                                                          name: 'Will Registration',
                                                          price: 7999,
                                                          gst: 18,
                                                          description: 'Legally valid will drafting and registration',
                                                          features: ['Legally valid will drafting', 'Registration if needed', 'Privacy throughout process', 'Expert legal review']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* General Power of Attorney */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">General Power of attorney</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹7999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We prepare GPA drafts as per Delhi legal requirements and facilitate registration.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'gpa',
                                                          name: 'General Power of Attorney',
                                                          price: 7999,
                                                          gst: 18,
                                                          description: 'GPA drafting and registration',
                                                          features: ['GPA drafting per Delhi requirements', 'Registration facilitation', 'Legal compliance', 'Expert review']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Partition Deed */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Partition Deed</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹13999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We prepare partition deed with accurate share details and assist with Sub-Registrar filing.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'partition-deed',
                                                          name: 'Partition Deed',
                                                          price: 13999,
                                                          gst: 18,
                                                          description: 'Property partition deed preparation',
                                                          features: ['Accurate share details', 'Deed preparation', 'Sub-registrar filing assistance', 'Legal documentation']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Agreement to Sell */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Agreement to sell</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹13999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Draft ATS Specific to Delhi regulations calculate duty, and guide through registration filing</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'agreement-to-sell',
                                                          name: 'Agreement to Sell',
                                                          price: 13999,
                                                          gst: 18,
                                                          description: 'Agreement to sell preparation',
                                                          features: ['Comprehensive agreement drafting', 'Legal compliance check', 'Expert review', 'Customized terms']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Rent/Lease Agreement */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Rent/Lease Agreement</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹3999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We prepare e-stamped rent agreement instantly, ready for printing.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'rent-agreement',
                                                          name: 'Rent Agreement',
                                                          price: 3999,
                                                          gst: 18,
                                                          description: 'Rent agreement drafting',
                                                          features: ['Standard rent agreement', 'Customizable terms', 'Legal compliance', 'Quick turnaround']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mutation */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Mutation</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹27999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We draft, file, and follow up Mutation Application with Delhi local bodies (MCD/ DDA/NDMC) and deliver it to your address.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'mutation',
                                                          name: 'Mutation',
                                                          price: 27999,
                                                          gst: 18,
                                                          description: 'Property mutation at tax office',
                                                          features: ['Complete mutation process', 'Property tax office coordination', 'Documentation handling', 'Expert assistance']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Builder Buyer Agreement */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Builder Buyer Agreement</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹As per Discussion</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">We draft/review BBAs ensuring RERA compliance and protect buyer interests.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'builder-buyer-agreement',
                                                          name: 'Builder Buyer Agreement',
                                                          price: 15000,
                                                          gst: 18,
                                                          description: 'Builder buyer agreement drafting and review',
                                                          features: ['BBA drafting/review', 'RERA compliance', 'Buyer interest protection', 'Expert legal review']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Property Video Filming */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Property Video Filming For Boosting Sale</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹14999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Professional property video production for online listing and marketing.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">High-quality editing and optimization for all platforms.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'property-filming',
                                                          name: 'Property Video Filming',
                                                          price: 14999,
                                                          gst: 18,
                                                          description: 'Professional property video for sale',
                                                          features: ['Professional video production', 'Multiple angles and shots', 'High-quality editing', 'Optimized for online listing']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Vaastu Consultation */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">Vaastu Consultation With Detailed Correction Advice</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹49999</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Detailed vaastu analysis of your property.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Comprehensive correction advice and remedial measures.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'vaastu-consultation',
                                                          name: 'Vaastu Consultation',
                                                          price: 49999,
                                                          gst: 18,
                                                          description: 'Detailed vaastu consultation with corrections',
                                                          features: ['Detailed vaastu analysis', 'Correction advice', 'Remedial measures', 'Expert consultation']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NRI Buy-Sell Process */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-primary text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">NRI Buy-Sell Process</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹99000</h2>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Complete NRI property transaction assistance and documentation.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Power of attorney preparation and remote assistance.</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => handleBookService({
                                                          id: 'nri-process',
                                                          name: 'NRI Buy-Sell Process',
                                                          price: 99000,
                                                          gst: 18,
                                                          description: 'Complete NRI property transaction assistance',
                                                          features: ['Power of attorney preparation', 'Property management support', 'Remote assistance', 'Legal consultation', 'Complete transaction handling']
                                                        })}
                                                        className="btn bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* VIP Deed Registration */}
                                        <div className="flex flex-col h-full shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800">
                                            <div className="bg-amber-500 text-white text-center py-4">
                                                <h5 className="font-bold text-lg mb-0">👑 VIP Deed Registration</h5>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-center mb-4">
                                                    <h2 className="font-bold text-4xl text-text-light dark:text-text-dark mb-1">₹1,59,000</h2>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">(+18% GST)</p>
                                                </div>
                                                <ul className="list-none flex-grow mb-4 space-y-2">
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">From the comfort of your home</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Premium end-to-end service</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <i className="fas fa-check-circle text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                                        <span className="text-text-light dark:text-text-dark text-sm">Dedicated expert support</span>
                                                    </li>
                                                </ul>
                                                <div className="text-center mt-auto pt-4">
                                                    <button
                                                        onClick={() => setBookingModal({
                                                          isOpen: true,
                                                          service: {
                                                            id: 'vip-deed',
                                                            name: '👑 VIP Deed Registration',
                                                            price: 159000,
                                                            gst: 18,
                                                            description: 'Premium deed registration from home',
                                                            features: ['Complete home service', 'Priority handling', 'Expert legal team', 'Dedicated support', 'All-inclusive service']
                                                          }
                                                        })}
                                                        className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
                                                    >
                                                        Book VIP Service
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Additional Services Section */}
                            <section className="additional-services-info py-16">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* NOC */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="file-contract" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">NOC (No Objection Certificate)</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Reach us to get a NOC across all major building authorities like L&DO, DDA, NDMC and more.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20NOC%20(No%20Objection%20Certificate)."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buy/Sell/Rent */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="handshake" className="w-7 h-7 sm:w-8 sm:h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-text-dark mb-3">Buy/Sell/Rent At Minimum Commission</h3>
                                                    <p className="text-sm sm:text-base text-black dark:text-subtext-dark mb-4">Whether you are a buyer/seller/landlord or a tenant, saledeed.com presents offers that you haven't heard before. Reach us to buy, sell or rent your property with best in the market options at minimum rate of commission. Our team of experts can provide a better experience and offer than you currently have. Contact us now to get started. In addition to this if you decide to buy/sell/rent through us you may be eligible for free deed drafting and even registration. (Terms & Conditions apply).</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Buy%2FSell%2FRent%20At%20Minimum%20Commission."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Get Instant Loan */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="banknote" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Get Loan At Minimum Interest</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Get loans as per your personal case requirement by the most reputed banks at the lowest rate of interest.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Get%20Instant%20Loan."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* All Deed Drafting */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="file-signature" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">All Deed Drafting, Delivery and Registration</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Get your sale deed or any deed drafted,delivered and registered according to yourparticular case without hassle in the shortest possible time.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20All%20Deed%20Drafting%2C%20Delivery%20and%20Registration."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Valuation Report */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="calculator" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Valuation Report</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Save tax by getting the guidance of our team's expert financial advisors.Get Valuationreports from the most renowned government approved valuers who have mastery in thefield and who can help you save lacs of rupees in Taxation.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Valuation%20Report."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mutation */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="repeat" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Mutation</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Mutation is the legal process of transferring the ownership from one owner to another.Contact us to get your property mutated from the competent authority by experts.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Mutation."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Government Authority Assistance */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="landmark" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Government Authority Assistance</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Get in touch with us to get guidance regarding government Compliances and real estateLiaisoning across almost all authorities</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Government%20Authority%20Assistance."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Renovation */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="hammer" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Renovation</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Get your property renovated through expert interior designers & architects or you can alsoreach us if you want to just fix your property through a contractor in a limited budget.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Renovation."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Relocation */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="truck" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Relocation</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">We can help you in shifting from anywhere in the city or the country.Reach us for a briefdiscussion and a free of cost quote.RenovationWe can design your space,to suit your taste.Get in touch for better understanding and freeof cost price quote.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Relocation."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Regularisation */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="clipboard-check" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Regularisation</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Get Regularisation of your mcd booked black listed properties as per the building bye-lawsand breathe in ease.Municipal corporation have exclusive rights to demolish the structureof any med booked property.Regularisation delist your property from the black list thusmaking it secure for sure.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Regularisation."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Freehold */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="key" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Freehold</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">Freehold is the conversion of a property legal status from lease hold to Freehold.It requiresa serious understanding of the building bye-laws of the past and present times.For everyproperty a file is maintained by the competent authority.A thorough study of the same isrequired to understand your property's actual status.After understanding your property backgroundacustomized procedure is craftedexclusively for you.A Freehold application filed without proper analysis can attract heftyfines,penalties and even black listing of your property.Reach us to make it right for you.Note: A Freehold status uplifts your property value to about 20%,allows you to sell it freelyand take many legal decisions without waiting for the government approvals everytime.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Freehold."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Completion Certificate */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="award" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Completion Certificate (C.C)</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">A completion certificate is issued by the concerned municipal corporation office under whose jurisdiction the  property is located.It is a certificate that confirms that the property has been constructed following the building bye-laws applicable and all other government laws and compliances.It states that the property has been inspected by the engineers of municipal corporation and no law violations are noted at the site.It act as a protective layer over the property against the demolition and sealing drives carried out by the government from time to time.In brief : A property with a completion certificate is demolition proof.</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Completion%20Certificate%20(C.C)."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Structural Stability Certificate */}
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                            <div className="flex items-start gap-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="building" className="w-8 h-8 text-white"></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-black dark:text-text-dark mb-3">Structural Stability Certificate</h3>
                                                    <p className="text-black dark:text-subtext-dark mb-4">A structural stability certificate describes the stability of a physical  structure of a property.It is issued by a structural engineer who inspects the property following the strict norms set by the government of Delhi, regional government and municipal corporations.It is often demanded by banks on sanctioning of loans against a property,by property buyers,government authorities before further construction, land use conversion etc</p>
                                                    <a
                                                        href="https://wa.me/918800505050?text=Hello%20saledeed.com%2C%20I%20want%20to%20know%20more%20about%20Structural%20Stability%20Certificate."
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                                    >
                                                        <i data-lucide="message-circle" className="w-5 h-5"></i>
                                                        Contact Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Contact CTA - Simple Box */}
                            <div id="custom-quote-cta" className="w-full my-8 px-4">
                                <div 
                                    className="bg-gradient-to-r from-primary to-secondary text-white mx-auto overflow-hidden"
                                    style={{ 
                                        maxWidth: '800px',
                                        borderRadius: '16px',
                                        padding: '2rem 1.5rem',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center">Need a Custom Quote?</h3>
                                        <p className="text-sm sm:text-base mb-6 opacity-90 text-center">
                                            Every property case is unique. Get personalized pricing for your specific requirements.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
                                            <Link
                                                href="/contact"
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-sm transition-all"
                                                style={{ padding: '12px 24px', borderRadius: '9999px' }}
                                            >
                                                <i data-lucide="phone" className="w-4 h-4"></i>
                                                <span>Get Custom Quote</span>
                                            </Link>
                                            <a
                                                href="https://wa.me/918800505050?text=Hello,%20I%20need%20assistance%20regarding%20my%20property."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-sm transition-all"
                                                style={{ padding: '12px 24px', borderRadius: '9999px' }}
                                            >
                                                <i data-lucide="message-circle" className="w-4 h-4"></i>
                                                <span>WhatsApp Us</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Card Slider */}
                    <div className="relative mb-16 mx-6 md:mx-10 lg:mx-20 mt-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            
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
                                                    <span>0-7 days</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                                                    <span>Learn More</span>
                                                    <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}

                                {/* Duplicate set for seamless infinite scroll */}
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
                                                    <span>0-7 days</span>
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
                                                    <span>0-7 days</span>
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
                        <div className="absolute top-0 left-0 flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-primary/20 text-sm sm:text-base sm:px-4">
                            <i data-lucide="map-pin" className="w-3 h-3 sm:w-4 sm:h-4 text-primary"></i>
                            <span className="font-medium text-text-light dark:text-text-dark text-xs sm:text-sm">Delhi</span>
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
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold">₹9,999</p>
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
                                                <p className="text-green-600 dark:text-green-400 font-semibold">₹17,999</p>
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
                                                <p className="text-purple-600 dark:text-purple-400 font-semibold">₹9,999</p>
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
                                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="briefcase"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">Complete Real Estate Solutions</h3>
                                                <p className="text-yellow-100">Beyond Documentation - Full Service Property Assistance</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Expert At Home */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                                            <h4 className="text-xl font-bold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
                                                <i data-lucide="home" className="w-5 h-5 text-amber-600"></i>
                                                Expert At Home
                                            </h4>
                                            <p className="text-subtext-light dark:text-subtext-dark mb-4">
                                                We provide in detail doorstep advice for clear understanding of your property case in the comfort of your home. It includes thorough checking of your documents, explanation of the procedure and how we can help you to make it a success.
                                            </p>
                                            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                                                    We work on a purpose driven ethic; so any unnecessary legality is never imposed and nothing besides necessary is even asked. If you book any service from our website this service is given to you absolutely free of cost.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Additional Services Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
                                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
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
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                            {/* Freehold Conversion */}
                                            <div className="relative bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-emerald-200 dark:border-emerald-700 overflow-hidden">
                                                <h4 className="text-base sm:text-lg md:text-xl font-bold text-text-light dark:text-text-dark mb-3 sm:mb-4 flex items-center gap-2">
                                                    <i data-lucide="key" className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0"></i>
                                                    <span>Freehold Conversion</span>
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-subtext-light dark:text-subtext-dark mb-3 sm:mb-4">
                                                    Freehold is the conversion of a property legal status from lease hold to Freehold. It requires a serious understanding of the building bye-laws of the past and present times.
                                                </p>
                                                <div className="bg-white dark:bg-slate-800 p-2 sm:p-3 md:p-4 rounded-lg mb-3 sm:mb-4">
                                                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                                                        After understanding your property background a customized procedure is crafted exclusively for you. A Freehold application filed without proper analysis can attract hefty fines, penalties and even black listing of your property.
                                                    </p>
                                                </div>
                                                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 sm:p-3 rounded-lg">
                                                    <p className="text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-200">
                                                        <strong>Note:</strong> A Freehold status uplifts your property value by about 20%, allows you to sell it freely and take many legal decisions without waiting for government approvals everytime.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Regularization */}
                                            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-red-200 dark:border-red-700">
                                                <h4 className="text-base sm:text-lg md:text-xl font-bold text-text-light dark:text-text-dark mb-3 sm:mb-4 flex items-center gap-2">
                                                    <i data-lucide="shield-check" className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0"></i>
                                                    <span>Regularization</span>
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-subtext-light dark:text-subtext-dark mb-3 sm:mb-4">
                                                    Get Regularization of your MCD booked black listed properties as per the building bye-laws and breathe in ease.
                                                </p>
                                                <div className="bg-white dark:bg-slate-800 p-2 sm:p-3 md:p-4 rounded-lg">
                                                    <p className="text-xs sm:text-sm text-red-700 dark:text-red-300">
                                                        Municipal corporation have exclusive rights to demolish the structure of any MCD booked property. Regularization delist your property from the black list thus making it secure for sure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy Policy Section */}
                                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="shield"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">Privacy Policy (100% Guarantee)</h3>
                                                <p className="text-yellow-100">Privacy Kept at Every Step</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-6">
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                                                We are proud to make you aware of our top notch privacy policy following our tagline & our brand promise <strong>(privacy kept at every step)</strong>.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Complete Data Protection</h5>
                                                    <p className="text-sm text-amber-700 dark:text-amber-300">
                                                        All your data like name, contact number, property address, your enquiry, purpose, work done by us and the process followed is never ever disclosed anytime, anywhere to anyone.
                                                    </p>
                                                </div>
                                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Family Privacy Guarantee</h5>
                                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
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
                                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-600 overflow-hidden mb-12">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <i data-lucide="refresh-ccw" className="w-5 h-5"></i>
                                            Refund Policy
                                        </h3>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                                                <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Non Refundable Services</h5>
                                                <p className="text-sm text-amber-700 dark:text-amber-300">
                                                    Services like verification, drafting, valuation reports and consultation fees are non refundable once paid.
                                                </p>
                                            </div>
                                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                                <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Refundable Situations</h5>
                                                <p className="text-sm text-yellow-700 dark:text-yellow-300">
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
                                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="home"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">How to Buy, Sell or Rent Property Without Hassle</h3>
                                                <p className="text-yellow-100">Your Complete Guide to Smooth Property Transactions</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 space-y-8">
                                        {/* Introduction */}
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
                                            <p className="text-subtext-light dark:text-subtext-dark leading-relaxed mb-4">
                                                Buying, selling, or renting property in Delhi is usually seen as a stressful task—endless paperwork, hidden charges, and running around government offices. But the truth is: <strong>property transactions can be smooth if you know the right process</strong>.
                                            </p>
                                            <p className="text-subtext-light dark:text-subtext-dark">
                                                Whether you want to buy property in Delhi, sell your flat in Gurgaon, or just make a rent agreement online, here's a clear, no-nonsense guide.
                                            </p>
                                        </div>

                                        {/* 5 Steps */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {/* Step 1 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
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
                                                <p className="text-xs text-amber-700 dark:text-amber-400 mt-2 font-medium">
                                                    When your intent is clear, you avoid unnecessary brokers and delays.
                                                </p>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
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
                                                <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-2 font-medium">
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
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
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
                                                <p className="text-xs text-orange-700 dark:text-orange-400 mt-2 font-medium">
                                                    This ensures your transaction is legally valid and fully secure.
                                                </p>
                                            </div>

                                            {/* Step 5 */}
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border-l-4 border-amber-700">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
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
                                                <p className="text-xs text-amber-800 dark:text-amber-400 mt-2 font-medium">
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
                                <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl shadow-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <i className="text-white text-xl" data-lucide="shield-check"></i>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">NOC in Real Estate</h3>
                                                <p className="text-yellow-100">Why It's More Important Than You Think</p>
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
                                            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-400">
                                                <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
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
                                                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">1. Legal Clearance</h5>
                                                    <p className="text-sm text-amber-700 dark:text-amber-300">
                                                        Confirms that the property is free from disputes or government restrictions.
                                                    </p>
                                                </div>
                                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">2. Loan & Mortgage</h5>
                                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                                        Banks demand it before sanctioning a home loan.
                                                    </p>
                                                </div>
                                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">3. Registry Approval</h5>
                                                    <p className="text-sm text-orange-700 dark:text-orange-300">
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
                            <div className="w-full mt-12 sm:mt-16 md:mt-20 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
                                <div className="absolute inset-0 bg-black/10"></div>

                                <div className="relative">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                        <i data-lucide="headphones" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white"></i>
                                    </div>

                                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                                        Need Expert Guidance?
                                    </h2>
                                    <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                                        Our legal experts are here to help you choose the right service and guide you through the process
                                    </p>

                                    <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto px-2">
                                        <Link
                                            href="/contact"
                                            className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-50 hover:shadow-xl transition-all duration-300"
                                        >
                                            <i data-lucide="phone" className="w-4 h-4 sm:w-5 sm:h-5"></i>
                                            Contact Support
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="w-full inline-flex items-center justify-center gap-2 bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                                        >
                                            <i data-lucide="calendar" className="w-4 h-4 sm:w-5 sm:h-5"></i>
                                            Schedule Consultation
                                        </Link>
                                    </div>

                                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="check-circle" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"></i>
                                            <span>Free Consultation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="shield" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"></i>
                                            <span>100% Secure</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="clock" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"></i>
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
                                    <li>
                                        <div className="flex items-center gap-1">
                                            <i className="text-primary text-xs" data-lucide="mail"></i>
                                            <a href="mailto:support@saledeed.com" className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors">
                                                support@saledeed.com
                                            </a>
                                        </div>
                                    </li>
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
                            <p>© 2025 SaleDeed.com. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
            
            {/* Service Booking Modal */}
            {bookingModal.service && (
              <ServiceBookingModal
                isOpen={bookingModal.isOpen}
                onClose={() => setBookingModal({ isOpen: false, service: null })}
                service={bookingModal.service}
              />
            )}

            {/* How It Works Section */}
            <HowItWorks />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
        </div>
    )
}
