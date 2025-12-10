'use client'

import { useRef } from 'react'
import html2pdf from 'html2pdf.js'

interface BillProps {
  orderId: string
  paymentId: string
  serviceName: string
  amount: number
  gst: number
  total: number
  userName: string
  userEmail: string
  userPhone: string
  date: string
}

export default function BillGenerator({
  orderId,
  paymentId,
  serviceName,
  amount,
  gst,
  total,
  userName,
  userEmail,
  userPhone,
  date
}: BillProps) {
  const billRef = useRef<HTMLDivElement>(null)

  const downloadBill = () => {
    if (billRef.current) {
      const element = billRef.current
      const opt = {
        margin: 10,
        filename: `SaleDeed_Bill_${paymentId}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      }
      html2pdf().set(opt).from(element).save()
    }
  }

  return (
    <div className="w-full">
      <div
        ref={billRef}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="border-b-2 border-primary pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-primary">SaleDeed.com</h1>
              <p className="text-gray-600">A Unit of 31 Son</p>
              <p className="text-sm text-gray-500 mt-2">
                Email: support@saledeed.com<br />
                Phone: +91 8800505050
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gray-800">INVOICE</h2>
              <p className="text-sm text-gray-600 mt-2">
                Invoice #: {paymentId}<br />
                Date: {date}
              </p>
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-700 mb-2">BILL TO:</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold text-gray-800">{userName}</p>
            <p className="text-gray-600">{userEmail}</p>
            <p className="text-gray-600">{userPhone}</p>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left py-2 text-gray-700">Description</th>
                <th className="text-right py-2 text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 text-gray-800">{serviceName}</td>
                <td className="text-right py-3 text-gray-800">₹{amount.toLocaleString()}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 text-gray-600">GST (18%)</td>
                <td className="text-right py-3 text-gray-600">₹{gst.toLocaleString()}</td>
              </tr>
              <tr className="bg-primary/10">
                <td className="py-3 font-bold text-gray-800">Total Amount</td>
                <td className="text-right py-3 font-bold text-primary text-lg">₹{total.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Info */}
        <div className="bg-green-50 p-4 rounded mb-8 border border-green-200">
          <p className="text-sm text-green-800">
            <span className="font-bold">✓ Payment Status: COMPLETED</span><br />
            Order ID: {orderId}<br />
            Payment ID: {paymentId}
          </p>
        </div>

        {/* Thank You Message */}
        <div className="bg-blue-50 p-4 rounded mb-8 border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">Thank You for Trusting Our Services! 🙂</h3>
          <p className="text-sm text-blue-800">
            We Promise To Serve You In The Best Way Possible.<br />
            <br />
            Warm Regards,<br />
            <span className="font-semibold">Team SaleDeed.com</span>
          </p>
        </div>

        {/* Footer Note */}
        <div className="border-t pt-4 text-xs text-gray-500">
          <p>
            Note: The pricing mentioned for the services is a tentative price and can vary from case to case and property to property.
            SaleDeed.com has sole discretion to change the price without any prior intimation.
            If you have made a payment and do not wish to get our services, the full 100% amount you paid shall be refunded back - No Questions Asked.
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadBill}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all"
        >
          📥 Download Bill as PDF
        </button>
      </div>
    </div>
  )
}
