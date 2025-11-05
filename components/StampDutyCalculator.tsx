'use client'

import { useState } from 'react'

export default function StampDutyCalculator() {
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
    if (!value || value <= 0) return

    const rate = rates[location]

    let stampDutyRate = 0
    if (ownershipType === 'gents') stampDutyRate = rate.male
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
    <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl border-2 border-yellow-200/50 dark:border-slate-700 overflow-hidden shadow-2xl">
      {/* Calculator Form */}
      <div className="p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property Value */}
          <div>
            <label className="block text-text-light dark:text-text-dark font-bold mb-3 text-sm flex items-center gap-2">
              <i data-lucide="Delhin-rupee" className="w-4 h-4 text-primary"></i>
              Property Value (INR)
            </label>
            <input
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-text-light dark:text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-base font-medium"
              placeholder="e.g., 5000000"
            />
          </div>

          {/* Select Location */}
          <div>
            <label className="block text-text-light dark:text-text-dark font-bold mb-3 text-sm flex items-center gap-2">
              <i data-lucide="map-pin" className="w-4 h-4 text-primary"></i>
              Select Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-text-light dark:text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer text-base font-medium"
            >
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Gender / Ownership Type */}
          <div>
            <label className="block text-text-light dark:text-text-dark font-bold mb-3 text-sm flex items-center gap-2">
              <i data-lucide="users" className="w-4 h-4 text-primary"></i>
              Ownership Type
            </label>
            <select
              value={ownershipType}
              onChange={(e) => setOwnershipType(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-text-light dark:text-text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer text-base font-medium"
            >
              <option value="gents">Male</option>
              <option value="ladies">Female</option>
              <option value="joint">Joint Ownership</option>
            </select>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateStampDuty}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-lg flex items-center justify-center gap-2"
        >
          <i data-lucide="calculator" className="w-5 h-5"></i>
          Calculate Stamp Duty
        </button>
      </div>

      {/* Results Section */}
      {results && (
        <div className="border-t-2 border-yellow-200 dark:border-slate-700 p-8 md:p-10 bg-white dark:bg-slate-900/50">
          <div className="flex items-center justify-center gap-2 mb-8">
            <i data-lucide="check-circle" className="w-6 h-6 text-green-500"></i>
            <h3 className="text-text-light dark:text-text-dark text-2xl font-bold font-display">
              Calculation Results
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-5 shadow-md border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <i data-lucide="file-text" className="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
                <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold uppercase tracking-wide">Stamp Duty ({results.stampDutyRate}%)</div>
              </div>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{formatCurrency(results.stampDuty)}</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-5 shadow-md border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <i data-lucide="clipboard-check" className="w-4 h-4 text-purple-600 dark:text-purple-400"></i>
                <div className="text-xs text-purple-700 dark:text-purple-300 font-semibold uppercase tracking-wide">Registration Fee (1%)</div>
              </div>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatCurrency(results.registrationFee)}</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-5 shadow-md border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <i data-lucide="receipt" className="w-4 h-4 text-orange-600 dark:text-orange-400"></i>
                <div className="text-xs text-orange-700 dark:text-orange-300 font-semibold uppercase tracking-wide">Pasting Charges</div>
              </div>
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">{formatCurrency(results.pastingCharges)}</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-5 shadow-lg border-2 border-green-400 dark:border-green-600 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <i data-lucide="wallet" className="w-4 h-4 text-green-600 dark:text-green-400"></i>
                <div className="text-xs text-green-700 dark:text-green-300 font-semibold uppercase tracking-wide">Total Payable</div>
              </div>
              <div className="text-3xl font-bold text-green-700 dark:text-green-300">{formatCurrency(results.totalPayable)}</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/services/sale-deed"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-base"
            >
              <i data-lucide="file-check" className="w-5 h-5"></i>
              Get Your Deed Drafted Now
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
