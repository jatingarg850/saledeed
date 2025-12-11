import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import nodemailer from 'nodemailer'

// Initialize email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// In-memory storage for bookings (replace with database in production)
const bookings: any[] = []

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      service,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      basePrice,
      gstAmount
    } = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment details', success: false },
        { status: 400 }
      )
    }

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(body)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Invalid signature', success: false },
        { status: 400 }
      )
    }

    // Create booking record
    const booking = {
      id: `BOOKING_${Date.now()}`,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      service,
      amount,
      basePrice,
      gstAmount,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      status: 'completed',
      createdAt: new Date().toISOString()
    }

    // Save booking to admin API
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/admin/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      })
    } catch (error) {
      console.error('Error saving booking to admin:', error)
    }

    // Generate bill HTML
    const billHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .header h1 { margin: 0; font-size: 24px; }
          .bill-number { font-size: 12px; opacity: 0.9; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: bold; font-size: 14px; margin-bottom: 10px; border-bottom: 2px solid #f59e0b; padding-bottom: 5px; }
          .row { display: flex; justify-content: space-between; padding: 8px 0; }
          .label { color: #666; }
          .value { font-weight: bold; }
          .total-section { background: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px; }
          .total-row { display: flex; justify-content: space-between; font-size: 16px; font-weight: bold; }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SaleDeed.com</h1>
            <div class="bill-number">Bill #${booking.id}</div>
          </div>

          <div class="section">
            <div class="section-title">Customer Details</div>
            <div class="row">
              <span class="label">Name:</span>
              <span class="value">${customerName}</span>
            </div>
            <div class="row">
              <span class="label">Email:</span>
              <span class="value">${customerEmail}</span>
            </div>
            <div class="row">
              <span class="label">Phone:</span>
              <span class="value">${customerPhone}</span>
            </div>
            <div class="row">
              <span class="label">Address:</span>
              <span class="value">${customerAddress}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Service Details</div>
            <div class="row">
              <span class="label">Service:</span>
              <span class="value">${service}</span>
            </div>
            <div class="row">
              <span class="label">Payment ID:</span>
              <span class="value">${razorpay_payment_id}</span>
            </div>
            <div class="row">
              <span class="label">Order ID:</span>
              <span class="value">${razorpay_order_id}</span>
            </div>
          </div>

          <div class="total-section">
            <div class="row" style="margin-bottom: 10px;">
              <span class="label">Base Price:</span>
              <span class="value">₹${basePrice.toLocaleString()}</span>
            </div>
            <div class="row" style="margin-bottom: 10px;">
              <span class="label">GST (18%):</span>
              <span class="value">₹${gstAmount.toLocaleString()}</span>
            </div>
            <div class="total-row" style="border-top: 2px solid #f59e0b; padding-top: 10px;">
              <span>Total Amount:</span>
              <span>₹${amount.toLocaleString()}</span>
            </div>
          </div>

          <div class="footer">
            <p>Thank you for choosing SaleDeed.com!</p>
            <p>Our team will contact you shortly to proceed with your service.</p>
            <p>For support, contact: support@saledeed.com</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email to customer
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: customerEmail,
        subject: `Bill Confirmation - ${service} - SaleDeed.com`,
        html: billHTML
      })
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Don't fail the payment if email fails
    }

    // Send email to admin
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || 'admin@saledeed.com',
        subject: `New Booking - ${service}`,
        html: `
          <h2>New Service Booking</h2>
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>Phone:</strong> ${customerPhone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Amount:</strong> ₹${amount.toLocaleString()}</p>
          <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
          <p><strong>Booking ID:</strong> ${booking.id}</p>
        `
      })
    } catch (emailError) {
      console.error('Admin email sending error:', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      bookingId: booking.id
    })
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { error: 'Payment verification failed', success: false },
      { status: 500 }
    )
  }
}
