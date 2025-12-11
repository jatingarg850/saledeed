'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../../components/Navigation'

interface Booking {
  id: string
  orderId: string
  paymentId: string
  service: string
  amount: number
  basePrice: number
  gstAmount: number
  customerName: string
  customerEmail: string
  customerPhone: string
  customerAddress: string
  status: string
  createdAt: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch bookings from API
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/admin/bookings')
        const data = await response.json()
        setBookings(data.bookings || [])
      } catch (error) {
        console.error('Error fetching bookings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation currentPage="admin" />

      <main className="px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-8">Service Bookings</h1>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No bookings yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Booking ID</th>
                    <th className="px-6 py-4 text-left">Customer</th>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Amount</th>
                    <th className="px-6 py-4 text-left">Phone</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700">
                      <td className="px-6 py-4 font-mono text-sm">{booking.id}</td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-text-light dark:text-text-dark">{booking.customerName}</p>
                          <p className="text-sm text-gray-500">{booking.customerEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">{booking.service}</td>
                      <td className="px-6 py-4 font-semibold">₹{booking.amount.toLocaleString()}</td>
                      <td className="px-6 py-4">{booking.customerPhone}</td>
                      <td className="px-6 py-4 text-sm">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
