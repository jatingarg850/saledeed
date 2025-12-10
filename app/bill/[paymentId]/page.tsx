'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '../../../components/Navigation'
import ScrollToTop from '../../../components/ScrollToTop'

interface PaymentData {
  id: string
  orderId: string
  paymentId: string
  amount: number
  gst: number
  total: number
  status: string
  serviceId: string
  serviceName: string
  customerName: string
  customerEmail: string
  customerPhone: string
  city: string
  propertyType: string
  createdAt: string
}

export default function BillPage() {
  const params = useParams()
  const paymentId = params.paymentId as string
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(`/api/payment/${paymentId}`)
        if (!response.ok) {
          throw new Error('Payment not found')
        }
        const data = await response.json()
        setPaymentData(data)
      } catch (err) {
        setError('Failed to load payment details')
        console.error('Error fetching payment:', err)
      } finally {
        setLoading(false)
      }
    }

    if (paymentId) {
      fetchPaymentData()
    }
  }, [paymentId])

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = async () => {
    if (!paymentData) return

    try {
      const response = await fetch('/api/generate-bill-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `bill_${paymentData.paymentId}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error('Error downloading PDF:', err)
      alert('Failed to download PDF')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation currentPage="bill" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-text-light dark:text-text-dark">Loading payment details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !paymentData) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation currentPage="bill" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Payment not found'}</p>
            <Link href="/" className="text-primary hover:underline">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(paymentData.createdAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation currentPage="bill" />
      
      <div className="px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-2xl mx-auto">
          {/* Bill Container */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden print:shadow-none">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold">SaleDeed.com</h1>
                  <p className="text-white/80">Professional Property Services</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">INVOICE</div>
                  <div className="text-2xl font-bold">{paymentData.paymentId}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Success Message */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <i data-lucide="check-circle" className="w-6 h-6 text-green-600 dark:text-green-400"></i>
                  <h2 className="text-xl font-bold text-green-700 dark:text-green-400">Payment Successful!</h2>
                </div>
                <p className="text-green-600 dark:text-green-300">
                  Thank you for your payment. Your booking has been confirmed.
                </p>
              </div>

              {/* Customer Details */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">BILL TO</h3>
                  <div className="space-y-2">
                    <p className="font-semibold text-text-light dark:text-text-dark">{paymentData.customerName}</p>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{paymentData.customerEmail}</p>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{paymentData.customerPhone}</p>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{paymentData.city}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">INVOICE DETAILS</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Invoice Date:</span>
                      <span className="text-sm font-semibold text-text-light dark:text-text-dark">{formattedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Order ID:</span>
                      <span className="text-sm font-semibold text-text-light dark:text-text-dark">{paymentData.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-subtext-light dark:text-subtext-dark">Status:</span>
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mb-8">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">SERVICE DETAILS</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i data-lucide="home" className="w-6 h-6 text-primary"></i>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-text-light dark:text-text-dark">{paymentData.serviceName}</p>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark">
                        Property Type: {paymentData.propertyType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-8 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-light dark:text-text-dark">Service Amount:</span>
                    <span className="font-semibold text-text-light dark:text-text-dark">₹{paymentData.amount.toLocaleString('en-IN')}</span>
                  </div>
                  {paymentData.gst > 0 && (
                    <div className="flex justify-between">
                      <span className="text-text-light dark:text-text-dark">GST (18%):</span>
                      <span className="font-semibold text-text-light dark:text-text-dark">₹{paymentData.gst.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 dark:border-slate-700 pt-3 flex justify-between">
                    <span className="font-bold text-text-light dark:text-text-dark">Total Amount Paid:</span>
                    <span className="text-2xl font-bold text-primary">₹{paymentData.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Thank You!</h3>
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  Our team will contact you shortly to schedule your doorstep consultation. 
                  We appreciate your business and look forward to assisting you with your property needs.
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-6 text-center text-sm text-subtext-light dark:text-subtext-dark">
                <p>SaleDeed.com - Delhi's #1 Property Documents & Real Estate Platform</p>
                <p className="mt-2">For support, contact us at support@saledeed.com or call 1800-XXX-XXXX</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 print:hidden">
            <button
              onClick={handlePrint}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <i data-lucide="printer" className="w-5 h-5"></i>
              Print
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <i data-lucide="download" className="w-5 h-5"></i>
              Download PDF
            </button>
            <Link
              href="/"
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <i data-lucide="home" className="w-5 h-5"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  )
}
