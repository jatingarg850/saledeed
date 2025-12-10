'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../../components/Navigation'

interface Payment {
  id: string
  orderId: string
  paymentId: string
  userName: string
  userEmail: string
  userPhone: string
  serviceName: string
  amount: number
  status: string
  date: string
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Fetch payments from localStorage (in production, fetch from database)
    const storedPayments = localStorage.getItem('payments')
    if (storedPayments) {
      setPayments(JSON.parse(storedPayments))
    }
    setLoading(false)
  }, [])

  const filteredPayments = payments.filter(payment => {
    const matchesFilter = filter === 'all' || payment.status === filter
    const matchesSearch = 
      payment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.userPhone.includes(searchTerm) ||
      payment.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const totalRevenue = filteredPayments.reduce((sum, p) => sum + p.amount, 0)
  const totalTransactions = filteredPayments.length

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation currentPage="admin" />
      
      <div className="px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-8">Admin Dashboard - Payments</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Total Transactions</p>
            <p className="text-3xl font-bold text-primary mt-2">{totalTransactions}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600 mt-2">₹{totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
            <p className="text-gray-600 dark:text-gray-400 text-sm">Average Transaction</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              ₹{totalTransactions > 0 ? Math.round(totalRevenue / totalTransactions).toLocaleString() : '0'}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, phone, or service..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:bg-slate-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Filter by Status
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary dark:bg-slate-700 dark:text-white"
              >
                <option value="all">All Payments</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center">Loading...</div>
          ) : filteredPayments.length === 0 ? (
            <div className="p-8 text-center text-gray-600 dark:text-gray-400">
              No payments found
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Customer Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Payment ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-600">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">{payment.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200 font-semibold">{payment.userName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{payment.userEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{payment.userPhone}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">{payment.serviceName}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">₹{payment.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 font-mono text-xs">{payment.paymentId.substring(0, 12)}...</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
