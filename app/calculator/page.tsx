'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CalculatorPage() {
    const [propertyValue, setPropertyValue] = useState('')
    const [location, setLocation] = useState('delhi-other')
    const [ownershipType, setOwnershipType] = useState('gents')
    const [results, setResults] = useState<any>(null)

    const rates: any = {
        'delhi-other': { male: 6, female: 4, joint: 5 },
        'delhi-ndmc': { male: 6, female: 4, joint: 5 },
        'delhi-cantonment': { male: 6, female: 4, joint: 5 },
    }

    const locations = [
        { value: 'delhi-other', label: 'Delhi (All Other Areas)' },
        { value: 'delhi-ndmc', label: 'New Delhi Municipal Corporation (NDMC)' },
        { value: 'delhi-cantonment', label: 'Delhi Cantonment Board Areas' },
    ]

    const calculateStampDuty = () => {
        const value = parseFloat(propertyValue)
        const rate = rates[location]
        
        let stampDutyRate = 0
        if (ownershipType === 'Male ') stampDutyRate = rate.male
        else if (ownershipType === 'ladies') stampDutyRate = rate.female
        else stampDutyRate = rate.joint

        const stampDuty = (value * stampDutyRate) / 100
        const registrationFee = value * 0.01 // 1% of property value
        const pastingCharges = 100
        const totalPayable = stampDuty + registrationFee + pastingCharges

        setResults({
            stampDuty,
            registrationFee,
            pastingCharges,
            totalPayable,
            stampDutyRate,
        })
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount)
    }

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
                                    <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="/about">About</Link>
                                    <Link className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="/services">Services</Link>
                                    <a className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">Contact</a>
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
                        <div className="layout-content-container flex flex-col max-w-7xl mx-auto">
                            
                            {/* Page Title */}
                            <div className="text-center mb-12">
                                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-tight font-display mb-4">
                                    Stamp Duty Calculator
                                </h1>
                                <p className="text-subtext-light dark:text-subtext-dark text-lg max-w-2xl mx-auto">
                                    Calculate stamp duty, registration fees, and other charges instantly for your property transaction
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Side - Services Overview */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 md:p-8 border border-yellow-200/50 dark:border-slate-700 sticky top-24">
                                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold mb-6 font-display">
                                            Services Overview
                                        </h2>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <i className="text-secondary mt-1" data-lucide="check-circle"></i>
                                                <span className="text-subtext-light dark:text-subtext-dark">
                                                    Celebrating 1 Lac Successful Deals
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i className="text-secondary mt-1" data-lucide="check-circle"></i>
                                                <span className="text-subtext-light dark:text-subtext-dark">
                                                    Team of Experts with 50+ Years Experience
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i className="text-secondary mt-1" data-lucide="check-circle"></i>
                                                <span className="text-subtext-light dark:text-subtext-dark">
                                                    Best in Class Lawyers / Valuers / Engineers
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <i className="text-secondary mt-1" data-lucide="check-circle"></i>
                                                <span className="text-subtext-light dark:text-subtext-dark">
                                                    Doorstep Consultation @ ₹999/-
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Side - Calculator */}
                                <div className="lg:col-span-2">
                                    <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-yellow-200/50 dark:border-slate-700 overflow-hidden">
                                        {/* Calculator Header */}
                                        <div className="bg-gradient-to-r from-secondary to-primary p-6">
                                            <h2 className="text-white text-2xl font-bold text-center font-display">
                                                Stamp Duty Calculator
                                            </h2>
                                        </div>

                                        {/* Calculator Form */}
                                        <div className="p-6 md:p-8 space-y-6">
                                            {/* Property Value */}
                                            <div>
                                                <label className="block text-text-light dark:text-text-dark font-semibold mb-3 text-sm">
                                                    Property Value (INR)
                                                </label>
                                                <input
                                                    type="number"
                                                    value={propertyValue}
                                                    onChange={(e) => setPropertyValue(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200/50 dark:border-slate-600 bg-background-light dark:bg-slate-900 text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors"
                                                    placeholder="00"
                                                />
                                            </div>

                                            {/* Select Location */}
                                            <div>
                                                <label className="block text-text-light dark:text-text-dark font-semibold mb-3 text-sm">
                                                    Select Location
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        value={location}
                                                        onChange={(e) => setLocation(e.target.value)}
                                                        className="w-full px-4 py-3 pr-10 rounded-lg border-2 border-yellow-200/50 dark:border-slate-600 bg-background-light dark:bg-slate-900 text-text-light dark:text-text-dark focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23A16207\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
                                                    >
                                                        {locations.map((loc) => (
                                                            <option key={loc.value} value={loc.value}>
                                                                {loc.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Gender / Ownership Type */}
                                            <div>
                                                <label className="block text-text-light dark:text-text-dark font-semibold mb-3 text-sm">
                                                    Gender / Ownership Type
                                                </label>
                                                <div className="flex gap-4">
                                                    <label className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="ownership"
                                                            value="Male"
                                                            checked={ownershipType === 'Male'}
                                                            onChange={(e) => setOwnershipType(e.target.value)}
                                                            className="w-4 h-4 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-text-light dark:text-text-dark">Male</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="ownership"
                                                            value="ladies"
                                                            checked={ownershipType === 'ladies'}
                                                            onChange={(e) => setOwnershipType(e.target.value)}
                                                            className="w-4 h-4 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-text-light dark:text-text-dark">Ladies</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="ownership"
                                                            value="joint"
                                                            checked={ownershipType === 'joint'}
                                                            onChange={(e) => setOwnershipType(e.target.value)}
                                                            className="w-4 h-4 text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-text-light dark:text-text-dark">Joint Ownership</span>
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Calculate Button */}
                                            <button
                                                onClick={calculateStampDuty}
                                                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg"
                                            >
                                                Calculate
                                            </button>
                                        </div>

                                        {/* Results Section */}
                                        {results && (
                                            <div className="border-t border-yellow-200/50 dark:border-slate-700 p-6 md:p-8 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
                                                <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-6 font-display">
                                                    Results:
                                                </h3>
                                                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm space-y-0 overflow-hidden border border-gray-200 dark:border-slate-700">
                                                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-slate-700">
                                                        <span className="text-text-light dark:text-text-dark text-sm font-medium">
                                                            Stamp Duty:
                                                        </span>
                                                        <span className="text-secondary font-bold text-base">
                                                            {formatCurrency(results.stampDuty)}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-slate-700">
                                                        <span className="text-text-light dark:text-text-dark text-sm font-medium">
                                                            Registration Fee:
                                                        </span>
                                                        <span className="text-secondary font-bold text-base">
                                                            {formatCurrency(results.registrationFee)}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-slate-700">
                                                        <span className="text-text-light dark:text-text-dark text-sm font-medium">
                                                            Pasting Charges:
                                                        </span>
                                                        <span className="text-secondary font-bold text-base">
                                                            {formatCurrency(results.pastingCharges)}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5">
                                                        <span className="text-text-light dark:text-text-dark font-bold text-base">
                                                            Total Payable:
                                                        </span>
                                                        <span className="text-secondary font-bold text-xl">
                                                            {formatCurrency(results.totalPayable)}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* CTA Button */}
                                                <div className="mt-6 text-center">
                                                    <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm">
                                                        Get Sale Deed Drafted
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* Current Rates */}
                                        {results && (
                                            <div className="border-t border-yellow-200/50 dark:border-slate-700 p-6 md:p-8 bg-gradient-to-br from-yellow-50/30 to-orange-50/30 dark:from-slate-900/30 dark:to-slate-800/30">
                                                <h3 className="text-text-light dark:text-text-dark text-lg font-bold mb-6 text-center font-display">
                                                    Current Rates for {locations.find(l => l.value === location)?.label}
                                                </h3>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                                                        <div className="text-xs text-subtext-light dark:text-subtext-dark mb-2 font-medium">Male:</div>
                                                        <div className="text-2xl font-bold text-secondary">{rates[location].male}%</div>
                                                    </div>
                                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                                                        <div className="text-xs text-subtext-light dark:text-subtext-dark mb-2 font-medium">Female:</div>
                                                        <div className="text-2xl font-bold text-secondary">{rates[location].female}%</div>
                                                    </div>
                                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                                                        <div className="text-xs text-subtext-light dark:text-subtext-dark mb-2 font-medium">Joint:</div>
                                                        <div className="text-2xl font-bold text-secondary">{rates[location].joint}%</div>
                                                    </div>
                                                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center border border-gray-200 dark:border-slate-700 shadow-sm">
                                                        <div className="text-xs text-subtext-light dark:text-subtext-dark mb-2 font-medium">Registration Fee:</div>
                                                        <div className="text-base font-bold text-secondary">1% of Property Value</div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="inline-block bg-white dark:bg-slate-800 rounded-lg px-6 py-3 border border-gray-200 dark:border-slate-700 shadow-sm">
                                                        <span className="text-xs text-subtext-light dark:text-subtext-dark font-medium mr-2">Pasting Charges:</span>
                                                        <span className="text-lg font-bold text-secondary">₹100</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-yellow-50 dark:bg-gray-900 border-t border-yellow-200 dark:border-slate-800 mt-12">
                    <div className="px-6 md:px-10 lg:px-20 py-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Company</h4>
                                <ul className="space-y-2">
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</Link></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                                <ul className="space-y-2">
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services">All Services</Link></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Gift Deed</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Relinquishment Deed</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Blog</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">FAQ</a></li>
                                    <li><Link className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/calculator">Calculator</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Legal</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                                    <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                                </ul>
                                <div className="mt-4">
                                    <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Contact</h4>
                                    <div className="flex items-center gap-1">
                                        <i className="text-primary text-xs" data-lucide="mail"></i>
                                        <a href="mailto:support@saledeed.com" className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors">
                                            support@saledeed.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-yellow-200 dark:border-slate-800 text-center text-sm text-subtext-light dark:text-subtext-dark">
                            <p>© 2025 SaleDeed.com. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
