'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

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
                {/* Header */}
                <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm">
                    <div className="px-4 md:px-10 lg:px-20">
                        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-yellow-200/50 dark:border-slate-700 py-4">
                            <div className="flex items-center gap-4 text-primary">
                                <i className="text-3xl" data-lucide="home"></i>
                                <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] font-display">SaleDeed.com</h2>
                            </div>
                            <div className="hidden md:flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-9">
                                    <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="/">Home</Link>
                                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About</a>
                                    <span className="text-primary text-sm font-bold leading-normal">Services</span>
                                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
                                </div>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                    <span className="truncate">Login</span>
                                </button>
                            </div>
                            <div className="md:hidden">
                                <button className="p-2">
                                    <i className="text-text-light dark:text-text-dark" data-lucide="menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1">
                    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20">
                        <div className="layout-content-container flex flex-col max-w-6xl mx-auto items-center text-center">
                            {/* Hero Section */}
                            <div className="flex min-h-[400px] w-full flex-col gap-6 items-center justify-center p-4">
                                <div className="flex flex-col gap-4 text-center">
                                    <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-black leading-tight tracking-tight font-display">
                                        Comprehensive Property Document Packages
                                    </h1>
                                    <h2 className="text-subtext-light dark:text-subtext-dark text-base md:text-lg font-normal leading-normal max-w-3xl mx-auto">
                                        Choose a package tailored to your needs. We handle the complexities of property documentation so you don't have to.
                                    </h2>
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

                            {/* Contact CTA */}
                            <div className="w-full mt-20 text-center py-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                                <h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] mb-4 font-display">
                                    Still have questions?
                                </h2>
                                <p className="text-subtext-light dark:text-subtext-dark mb-6">
                                    Our team is here to help. Contact us for any inquiries.
                                </p>
                                <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg">
                                    <span className="truncate">Contact Support</span>
                                </button>
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
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Gift Deed</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Relinquishment Deed</a></li>
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